/**
 * Claude Code auto mode asks the server to run its permission checks by sending
 * the `safeguards` body field with the `afk-mode-2026-01-31` and
 * `dangerous-tool-use-2026-09-03` betas. If a gateway drops either half,
 * Claude Code falls back to its own billed classifier requests.
 * https://code.claude.com/docs/en/auto-mode-classifier-billing
 */
import test from "node:test";
import assert from "node:assert/strict";

import { DefaultExecutor } from "../../open-sse/executors/default.ts";
const { selectBetaFlags } = await import("../../open-sse/executors/claudeIdentity.ts");
const { mergeClientAnthropicBeta } = await import("../../open-sse/config/anthropicHeaders.ts");

const AUTO_MODE_BETAS = ["afk-mode-2026-01-31", "dangerous-tool-use-2026-09-03"];
const CLIENT_BETA = [
  "claude-code-20250219",
  "oauth-2025-04-20",
  "interleaved-thinking-2025-05-14",
  ...AUTO_MODE_BETAS,
].join(",");

function betaTokens(headers: Record<string, string>): string[] {
  const key = Object.keys(headers).find((k) => k.toLowerCase() === "anthropic-beta");
  return key ? headers[key].split(",").map((s) => s.trim()) : [];
}

test("mergeClientAnthropicBeta forwards the auto mode betas", () => {
  const out = mergeClientAnthropicBeta("claude-code-20250219,oauth-2025-04-20", CLIENT_BETA);
  for (const beta of AUTO_MODE_BETAS) {
    assert.equal(out.split(",").filter((t) => t === beta).length, 1, `${beta} forwarded once`);
  }
});

test("selectBetaFlags + merge keeps the auto mode betas on the Claude Code path", () => {
  const body = { model: "claude-opus-4-8", system: "x", safeguards: {} };
  const out = mergeClientAnthropicBeta(
    selectBetaFlags(body, null, CLIENT_BETA),
    CLIENT_BETA,
    undefined,
    "claude-opus-4-8"
  ).split(",");
  for (const beta of AUTO_MODE_BETAS) assert.ok(out.includes(beta), `missing ${beta}`);
});

test("DefaultExecutor('claude') forwards the auto mode betas in outbound headers", () => {
  const executor = new DefaultExecutor("claude");
  const headers = executor.buildHeaders({ accessToken: "sk-ant-oat-x" }, true, {
    "anthropic-beta": CLIENT_BETA,
  }) as Record<string, string>;
  const tokens = betaTokens(headers);
  for (const beta of AUTO_MODE_BETAS) assert.ok(tokens.includes(beta), `missing ${beta}`);
});

test("DefaultExecutor('claude') forwards the safeguards body field unchanged", async () => {
  const safeguards = { opaque: { nested: [1, "two", null] } };
  const executor = new DefaultExecutor("claude");
  const result = (await executor.transformRequest(
    "claude-opus-4-8",
    {
      model: "claude-opus-4-8",
      max_tokens: 1024,
      messages: [{ role: "user", content: "hi" }],
      safeguards,
    },
    true,
    { accessToken: "sk-ant-oat-x" }
  )) as Record<string, unknown>;
  assert.deepEqual(result.safeguards, safeguards);
});
