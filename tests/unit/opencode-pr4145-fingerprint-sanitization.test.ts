import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  OpencodeExecutor,
  OPENCODE_FINGERPRINT_TOOLS,
  ensureOpencodeFingerprintTools,
  sanitizeResponsesBody,
} from "../../open-sse/executors/opencode.ts";
import {
  hasValidOpencodeVersion,
  translateOpencodeSessionId,
  OPENCODE_SESSION_RE,
} from "../../open-sse/utils/opencodeHeaders.ts";

describe("PR #4145 OpenCode Fingerprint & Sanitization", () => {
  describe("hasValidOpencodeVersion", () => {
    it("recognizes opencode/1.18.31 as valid", () => {
      assert.equal(hasValidOpencodeVersion("opencode/1.18.31"), true);
    });

    it("recognizes opencode/1.17 as valid", () => {
      assert.equal(hasValidOpencodeVersion("opencode/1.17.0"), true);
    });

    it("recognizes opencode-cli/... as valid", () => {
      assert.equal(hasValidOpencodeVersion("opencode-cli/1.0.0"), true);
    });

    it("rejects generic user agents", () => {
      assert.equal(hasValidOpencodeVersion("curl/8.5.0"), false);
      assert.equal(hasValidOpencodeVersion("python-requests/2.31.0"), false);
      assert.equal(hasValidOpencodeVersion("opencode/1.16.0"), false);
    });
  });

  describe("translateOpencodeSessionId", () => {
    it("preserves already valid ses_... IDs", () => {
      const valid = "ses_1234567890abABCDEFGHJKLMNP";
      assert.equal(translateOpencodeSessionId(valid), valid);
    });

    it("translates arbitrary session strings into ses_... format", () => {
      const result = translateOpencodeSessionId("my-custom-session-123");
      assert.match(result, OPENCODE_SESSION_RE);
    });
  });

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
