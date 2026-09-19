import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  OpencodeExecutor,
  OPENCODE_FINGERPRINT_TOOLS,
  ensureOpencodeFingerprintTools,
  sanitizeResponsesBody,
} from "../../open-sse/executors/opencode.ts";

describe("PR #4145 OpenCode Fingerprint & Sanitization", () => {
  describe("ensureOpencodeFingerprintTools", () => {
    it("injects the built-in quartet (bash, glob, grep, read) for Chat Completions", () => {
      const body: Record<string, unknown> = { tools: [] };
      ensureOpencodeFingerprintTools(body, "openai");
      const names = (body.tools as Array<{ function?: { name?: string } }>).map(
        (t) => t.function?.name
      );
      for (const expected of OPENCODE_FINGERPRINT_TOOLS) {
        assert.ok(names.includes(expected));
      }
    });

    it("injects the built-in quartet for Responses API shape", () => {
      const body: Record<string, unknown> = { tools: [] };
      ensureOpencodeFingerprintTools(body, "openai-responses");
      const names = (body.tools as Array<{ name?: string }>).map((t) => t.name);
      for (const expected of OPENCODE_FINGERPRINT_TOOLS) {
        assert.ok(names.includes(expected));
      }
    });

    it("does not duplicate tools if already present", () => {
      const body: Record<string, unknown> = {
        tools: [
          {
            type: "function",
            function: { name: "bash", description: "custom bash" },
          },
        ],
      };
      ensureOpencodeFingerprintTools(body, "openai");
      const tools = body.tools as Array<{ function?: { name?: string } }>;
      const bashTools = tools.filter((t) => t.function?.name === "bash");
      assert.equal(bashTools.length, 1);
    });
  });

  describe("sanitizeResponsesBody", () => {
    it("converts max_tokens/max_completion_tokens to max_output_tokens", () => {
      const body: Record<string, unknown> = { max_tokens: 2048 };
      sanitizeResponsesBody(body);
      assert.equal(body.max_output_tokens, 2048);
      assert.equal(body.max_tokens, undefined);
    });

    it("strips prior reasoning items and encrypted_content fields", () => {
      const body: Record<string, unknown> = {
        input: [
          { type: "reasoning", encrypted_content: "secret" },
          { type: "message", role: "user", content: "hello", encrypted_content: "old" },
        ],
      };
      sanitizeResponsesBody(body);
      const input = body.input as Array<Record<string, unknown>>;
      assert.equal(input.length, 1);
      assert.equal(input[0].type, "message");
      assert.equal(input[0].encrypted_content, undefined);
    });

    it("ensures empty parameters object has properties map", () => {
      const body: Record<string, unknown> = {
        tools: [
          {
            type: "function",
            name: "test_tool",
            parameters: { type: "object" },
          },
        ],
      };
      sanitizeResponsesBody(body);
      const tools = body.tools as Array<{ parameters?: { properties?: object } }>;
      assert.ok(tools[0].parameters?.properties);
    });
  });

  describe("OpencodeExecutor transformRequest", () => {
    it("forces stream: true and injects fingerprint tools for opencode-zen provider", () => {
      const executor = new OpencodeExecutor("opencode-zen");
      const result = executor.transformRequest(
        "gpt-5.4",
        { stream: false, messages: [{ role: "user", content: "hi" }] },
        false,
        { apiKey: "test-key" }
      );
      assert.equal(result.stream, true);
      const toolNames = (result.tools as Array<{ function?: { name?: string } }>).map(
        (t) => t.function?.name
      );
      assert.ok(toolNames.includes("bash"));
      assert.ok(toolNames.includes("read"));
    });
  });
});
