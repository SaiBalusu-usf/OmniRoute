import test from "node:test";
import assert from "node:assert/strict";

// Tencent CodeBuddy (`codebuddy` / `codebuddy-cn`) answers with a flat envelope:
//   { code, msg, extError: { code, type }, displayMsg: { en, zh, zh-hant } }
//
// `msg` is the terse internal string — 11128 is literally "request illegal" — while
// `displayMsg.en` is the sentence written for a human. Surfacing only `msg` produced a
// support ticket whose text named no cause and no remedy, and the call log recorded the
// flattened string ("[400]: request illegal") with `responseBody: null`, so nothing
// downstream could recover the real reason.

const { parseUpstreamError } = await import("../../open-sse/utils/error.ts");

function jsonResponse(body: unknown, status = 400): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

test("surfaces displayMsg.en when the primary msg is uninformative (Tencent 11128)", async () => {
  const parsed = await parseUpstreamError(
    jsonResponse({
      code: 11128,
      msg: "request illegal",
      requestId: "0f1c9a44",
      displayMsg: {
        en: "The request was blocked by security policy. Please retry later or contact support.",
        zh: "请求被安全策略拦截，请稍后重试或联系客服。",
      },
    })
  );

  assert.match(parsed.message, /request illegal/, "the primary upstream text is preserved");
  assert.match(
    parsed.message,
    /blocked by security policy/i,
    "the actionable sentence must reach the operator"
  );
  assert.match(parsed.message, /retry later/i);
});

test("appends rather than replaces, so downstream regex matching still sees the primary text", async () => {
  // Status restatement and the overflow/rate-limit/malformed classifiers all match the
  // primary text. Appending keeps every one of them reading exactly what it read before.
  const parsed = await parseUpstreamError(
    jsonResponse({
      code: 11148,
      msg: "tool calls and tool results do not match, please start a new conversation and retry",
      displayMsg: { en: "The tool call history is incomplete. Please start a new conversation." },
    })
  );

  assert.ok(
    parsed.message.startsWith("tool calls and tool results do not match"),
    "the upstream msg stays first"
  );
  assert.match(parsed.message, /tool call history is incomplete/i);
});

test("leaves the message untouched when displayMsg is absent", async () => {
  const parsed = await parseUpstreamError(jsonResponse({ error: { message: "plain failure" } }));
  assert.equal(parsed.message, "plain failure");
});

test("does not duplicate when the primary text already contains the display sentence", async () => {
  const sentence = "The request was blocked by security policy. Please retry later.";
  const parsed = await parseUpstreamError(
    jsonResponse({ msg: sentence, displayMsg: { en: sentence } })
  );
  assert.equal(parsed.message, sentence);
  assert.equal(parsed.message.split(sentence).length - 1, 1, "the sentence appears exactly once");
});

test("ignores a blank or non-string displayMsg.en", async () => {
  const blank = await parseUpstreamError(jsonResponse({ msg: "boom", displayMsg: { en: "   " } }));
  assert.equal(blank.message, "boom");

  const wrongType = await parseUpstreamError(jsonResponse({ msg: "boom", displayMsg: { en: 42 } }));
  assert.equal(wrongType.message, "boom");

  const noEn = await parseUpstreamError(jsonResponse({ msg: "boom", displayMsg: { zh: "爆炸" } }));
  assert.equal(noEn.message, "boom");
});

test("still exposes the numeric upstream code", async () => {
  const parsed = await parseUpstreamError(jsonResponse({ code: 11128, msg: "request illegal" }));
  assert.equal(parsed.errorCode, 11128);
});
