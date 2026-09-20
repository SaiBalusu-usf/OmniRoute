import test from "node:test";
import assert from "node:assert/strict";

// Tencent CodeBuddy code 11128 must NOT be classified as retryable.
//
// Its envelope carries `displayMsg.en` = "The request was blocked by security policy.
// Please retry later or contact support.", which reads like a transient WAF block. It is
// NOT: 11128 is a GENERIC rejection code and that sentence is boilerplate shared by every
// 11128 cause. Measured 2026-09-19 against https://www.codebuddy.ai/v2/chat/completions:
//
//   user-only            -> 400 11128 "first message is not system prompt" + security-policy displayMsg
//   user-then-system     -> 400 11128 "first message is not system prompt" + security-policy displayMsg
//   assistant-first      -> 400 11128 "first message is not system prompt" + security-policy displayMsg
//   tool-first           -> 400 11128 "first message is not system prompt" + security-policy displayMsg
//   system + user        -> 200
//
// Deterministic 4/4. Retrying an identical body reproduces it exactly, so treating 11128
// as transient would burn a cooldown and rotate accounts on a permanently-invalid
// request — the retry storm the #2101 malformed-400 guard exists to prevent.

const { checkFallbackError } = await import("../../open-sse/services/accountFallback.ts");
const { RateLimitReason } = await import("../../open-sse/config/constants.ts");

// The exact envelope captured from the upstream for a non-system first message.
const NON_SYSTEM_FIRST_400 = JSON.stringify({
  code: 11128,
  msg: "first message is not system prompt",
  requestId: "b5f763f5-ec30-4894-9877-32eae97dbb8c",
  displayMsg: {
    en: "The request was blocked by security policy. Please retry later or contact support.",
    zh: "请求被安全策略拦截，请稍后重试或联系支持。",
    "zh-hant": "請求已被安全策略攔截，請稍後重試或聯絡支援。",
  },
});

test("11128 must NOT be retryable — it is a deterministic structural rejection", () => {
  const res = checkFallbackError(400, NON_SYSTEM_FIRST_400, 0, null, "codebuddy");
  assert.equal(
    res.shouldFallback,
    false,
    "retrying an identical body reproduces 11128, so it must stay terminal"
  );
});

test("the misleading displayMsg sentence alone must not make a 400 retryable", () => {
  // If this ever starts passing, something has begun keying retryability off `displayMsg`
  // for this provider — which is generic across all 11128 causes and cannot distinguish
  // transient from structural.
  const res = checkFallbackError(
    400,
    "The request was blocked by security policy. Please retry later or contact support.",
    0,
    null,
    "codebuddy"
  );
  assert.equal(res.shouldFallback, false);
});

test("the transient 11128 'request illegal' without structural error is fallback-worthy", () => {
  const res = checkFallbackError(400, "request illegal", 0, null, "codebuddy");
  assert.equal(res.shouldFallback, true);
  assert.equal(res.reason, RateLimitReason.RATE_LIMIT_EXCEEDED);
  assert.equal(res.cooldownMs, 3_000);
});

test("regression: a genuine rate-limit 400 is still retryable (#4976 must not break)", () => {
  const res = checkFallbackError(
    400,
    "Detected high-frequency non-compliant requests from you.",
    0,
    null,
    "mimocode"
  );
  assert.equal(res.shouldFallback, true);
  assert.equal(res.reason, RateLimitReason.RATE_LIMIT_EXCEEDED);
});

test("regression: a malformed 400 still returns the zero-cooldown MODEL_CAPACITY path", () => {
  const res = checkFallbackError(400, "messages must alternate between user and assistant");
  assert.equal(res.shouldFallback, true);
  assert.equal(res.reason, RateLimitReason.MODEL_CAPACITY);
});
