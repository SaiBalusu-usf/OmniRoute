import test from "node:test";
import assert from "node:assert/strict";

// Transient upstream WAF / security-policy block (Tencent CodeBuddy, numeric code 11128).
//
// Tencent answers a blocked request with HTTP 400 and the terse `msg` "request illegal";
// `displayMsg.en` spells out "The request was blocked by security policy. Please retry
// later or contact support." The upstream itself says "retry later", so the request is
// NOT malformed — it is a transient block that clears on its own.
//
// Before this rule, a 400 fell through to the generic "not account-fallback-worthy"
// return: the turn died with no backoff and no account rotation. Measured 2026-09-19,
// four DSH turns failed between 17:34:45Z and 17:43:46Z and the identical bodies replayed
// 200 minutes later — no payload property predicts it, so only a transient classification
// can recover it.

const { checkFallbackError } = await import("../../open-sse/services/accountFallback.ts");
const { RateLimitReason } = await import("../../open-sse/config/constants.ts");

// The exact envelope captured from www.codebuddy.ai/v2/chat/completions on 2026-09-19.
const RAW_UPSTREAM_400 = JSON.stringify({
  code: 11128,
  msg: "request illegal",
  requestId: "0f1c9a44-1b1f-4a3e-9c1d-6f2a0d5b7e11",
  displayMsg: {
    en: "The request was blocked by security policy. Please retry later or contact support.",
    zh: "请求被安全策略拦截，请稍后重试或联系客服。",
    "zh-hant": "請求被安全策略攔截，請稍後重試或聯繫客服。",
  },
});

test("11128: the raw upstream 400 body (combo path) is fallback-worthy", () => {
  const res = checkFallbackError(400, RAW_UPSTREAM_400, 0, null, "codebuddy");
  assert.equal(res.shouldFallback, true, "a transient security block must not kill the turn");
  assert.equal(res.reason, RateLimitReason.SERVER_ERROR);
});

test("11128: the bare parsed message 'request illegal' is fallback-worthy", () => {
  // The single-model path passes the parsed `message`, which is the raw `msg` before
  // parseUpstreamError appends displayMsg.en.
  const res = checkFallbackError(400, "request illegal", 0, null, "codebuddy");
  assert.equal(res.shouldFallback, true);
  assert.equal(res.reason, RateLimitReason.SERVER_ERROR);
});

test("11128: the displayMsg-enriched message is fallback-worthy", () => {
  const enriched =
    "request illegal — The request was blocked by security policy. Please retry later or contact support.";
  const res = checkFallbackError(400, enriched, 0, null, "codebuddy");
  assert.equal(res.shouldFallback, true);
  assert.equal(res.reason, RateLimitReason.SERVER_ERROR);
});

test("11128: the classification carries a real cooldown, not the zero-cooldown client-error path", () => {
  const res = checkFallbackError(400, "request illegal", 0, null, "codebuddy");
  assert.ok(res.cooldownMs > 0, "a transient block needs a bounded backoff before retrying");
});

test("regression: a generic non-security 400 still does NOT fall over", () => {
  // The #2101 guard: an unrecognised 400 must stay terminal so nothing retries it forever.
  const res = checkFallbackError(400, "Invalid JSON: unexpected token at position 12");
  assert.equal(res.shouldFallback, false);
});

test("regression: a malformed 400 stays MODEL_CAPACITY, not reclassified as transient", () => {
  const res = checkFallbackError(400, "messages must alternate between user and assistant");
  assert.equal(res.shouldFallback, true);
  assert.equal(res.reason, RateLimitReason.MODEL_CAPACITY);
});

test("regression: a param-validation 400 stays MODEL_CAPACITY", () => {
  // 'parameter is illegal' must not be swept up by the 'request illegal' marker.
  const res = checkFallbackError(400, "max_tokens parameter is illegal, must be in range");
  assert.equal(res.shouldFallback, true);
  assert.equal(res.reason, RateLimitReason.MODEL_CAPACITY);
});

test("regression: 11148 tool-sequence break keeps its own classification", () => {
  // A genuine client-shape error must not become retryable via the new markers.
  const body = JSON.stringify({
    code: 11148,
    msg: "tool calls and tool results do not match, please start a new conversation and retry",
    extError: { code: "tool_call_sequence_broken", type: "invalid_request_error" },
    displayMsg: { en: "The tool call history is incomplete. Please start a new conversation." },
  });
  const res = checkFallbackError(400, body, 0, null, "codebuddy");
  assert.notEqual(res.reason, RateLimitReason.SERVER_ERROR);
});
