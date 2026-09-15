/**
 * Regression tests for #13455 — llmlingua boundary-whitespace loss around
 * preserved inline segments (backticks, URLs, etc.) in plain prose that is
 * NOT wrapped in a recognized envelope (`<system-reminder>` etc.).
 *
 * Scope note (see the plan-file for the full analysis):
 *  - The `<system-reminder>` envelope-destruction sub-symptom is already fixed
 *    by #13523 (shared `preservation.ts` region pass) — kept here as a
 *    regression guard.
 *  - Case flattening / stopword-negation dropping WITHIN surviving prose is a
 *    third-party ONNX model behavior (uncased TinyBERT checkpoint) and is
 *    explicitly OUT of scope for this fix — see `Refs #13455` in the PR body.
 *  - This file covers ONLY the boundary-whitespace re-stitching contract that
 *    is fully local to `open-sse/services/compression/engines/llmlingua/index.ts`.
 */

import { describe, it, after } from "node:test";
import assert from "node:assert/strict";

import {
  llmlinguaEngine,
  setLlmlinguaBackend,
} from "../../../open-sse/services/compression/engines/llmlingua/index.ts";

function makeBody(messages: Array<{ role: string; content: string }>): Record<string, unknown> {
  return { model: "gpt-4o", messages };
}

/**
 * Mirrors the REAL backend's documented failure mode: the ONNX
 * wordpiece-reconstruction trims/lower-cases at segment boundaries (uncased
 * checkpoint + rebuild from surviving wordpieces, which does not promise to
 * preserve the caller's leading/trailing whitespace).
 */
function wordpieceLikeBackend(text: string): Promise<string> {
  return Promise.resolve(text.trim().toLowerCase());
}

/**
 * Same boundary-trimming/lower-casing behavior as `wordpieceLikeBackend`,
 * plus dropping a real stopword ("the") — so the segment shrinks even after
 * boundary whitespace is correctly restored. Used where the test needs a
 * genuine compression to happen (`didCompress: true`) while still exercising
 * the whitespace-restitching bug.
 */
function compressingWordpieceLikeBackend(text: string): Promise<string> {
  return Promise.resolve(
    text
      .trim()
      .toLowerCase()
      .replace(/\bthe\s+/g, "")
  );
}

after(() => setLlmlinguaBackend(null));

describe("issue #13455 — llmlingua whitespace/case loss at preserved-segment boundaries", () => {
  it("[already fixed by #13523] content inside a <system-reminder> envelope survives byte-identical", async () => {
    setLlmlinguaBackend(wordpieceLikeBackend);
    const block =
      "<system-reminder>\n" +
      "Project instructions (auto-injected by the coding agent CLI, role=user):\n\n" +
      "# Deploy rules\n\n" +
      "- NEVER run `rm -rf` on the target host. Always ask first.\n" +
      "- Do NOT edit files under `/etc` by hand.\n" +
      "</system-reminder>\n\n" +
      "Please deploy the fix.";
    const body = makeBody([{ role: "user", content: block }]);
    const result = await llmlinguaEngine.applyAsync!(body, {
      stepConfig: { minTokens: 0, compressionRate: 0.5 },
    });
    const outContent = (result.body as { messages: Array<{ content: string }> }).messages[0]
      .content;
    assert.match(outContent, /<system-reminder>/);
    assert.match(outContent, /NEVER run `rm -rf` on the target host\. Always ask first\./);
  });

  it("preserves boundary whitespace and does not glue prose to a preserved inline-code span", async () => {
    setLlmlinguaBackend(compressingWordpieceLikeBackend);
    const content =
      "NEVER run `rm -rf` on the target host. Always ask first. ".repeat(40) +
      "Do not restart the database.";
    const body = makeBody([{ role: "user", content }]);
    const result = await llmlinguaEngine.applyAsync!(body, {
      stepConfig: { minTokens: 0, compressionRate: 0.5 },
    });
    assert.equal(result.compressed, true);
    const outContent = (result.body as { messages: Array<{ content: string }> }).messages[0]
      .content;
    // A space must survive between prose and the preserved inline-code span
    // on both sides — the exact shape the issue reported as glued together.
    assert.match(outContent, /run `rm -rf`/);
    assert.match(outContent, /`rm -rf` on/);
  });

  it("keeps a preserved segment at the very start of the message glued to nothing extra (no leading prose)", async () => {
    setLlmlinguaBackend(wordpieceLikeBackend);
    const content =
      "`rm -rf` is dangerous. Never run it on the target host without asking first. ".repeat(40);
    const body = makeBody([{ role: "user", content }]);
    const result = await llmlinguaEngine.applyAsync!(body, {
      stepConfig: { minTokens: 0, compressionRate: 0.5 },
    });
    const outContent = (result.body as { messages: Array<{ content: string }> }).messages[0]
      .content;
    assert.match(outContent, /`rm -rf` is/);
  });

  it("keeps a preserved segment at the very end of the message glued to nothing extra (no trailing prose)", async () => {
    setLlmlinguaBackend(wordpieceLikeBackend);
    const content =
      "Never run the dangerous command on the target host without asking first `rm -rf`. ".repeat(
        40
      );
    const body = makeBody([{ role: "user", content }]);
    const result = await llmlinguaEngine.applyAsync!(body, {
      stepConfig: { minTokens: 0, compressionRate: 0.5 },
    });
    const outContent = (result.body as { messages: Array<{ content: string }> }).messages[0]
      .content;
    assert.match(outContent, /first `rm -rf`/);
  });

  it("preserves a newline boundary before a fenced block instead of collapsing it to a space", async () => {
    setLlmlinguaBackend(wordpieceLikeBackend);
    const prose = "Never run the dangerous command on the target host without asking first.\n";
    const content = (prose + "```\nrm -rf /\n```\n" + prose).repeat(40);
    const body = makeBody([{ role: "user", content }]);
    const result = await llmlinguaEngine.applyAsync!(body, {
      stepConfig: { minTokens: 0, compressionRate: 0.5 },
    });
    const outContent = (result.body as { messages: Array<{ content: string }> }).messages[0]
      .content;
    // The newline before the fenced block must survive — NOT collapse into a
    // single space that would visually merge prose onto the code fence line.
    assert.match(outContent, /first\.\n```/);
  });
});
