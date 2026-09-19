/**
 * Regression: the upstream provider's own error code must survive parsing.
 *
 * Tencent CodeBuddy / WorkBuddy send `{"code": 11128, ...}` — a NUMBER. Every consumer
 * downstream narrowed with `typeof errorCode === "string"`, so the code was extracted and
 * then silently dropped. A CodeBuddy failure could therefore only ever surface as
 * `[400]: request illegal`, with the single field that identifies the cause discarded —
 * and its `displayMsg` ("blocked by security policy") is boilerplate shared by every
 * 11128 cause, so the error was actively misleading rather than merely uninformative.
 */
import test from "node:test";
import assert from "node:assert/strict";

const { formatProviderError, normalizeUpstreamErrorCode, parseUpstreamError } =
  await import("../../open-sse/utils/error.ts");

const tencentEnvelope = (code: number, msg: string) =>
  JSON.stringify({
    code,
    msg,
    requestId: "req-test",
    displayMsg: {
      en: "The request was blocked by security policy. Please retry later or contact support.",
      zh: "请求被安全策略拦截，请稍后重试或联系支持。",
    },
  });

test("normalizeUpstreamErrorCode: a numeric code becomes its string form", () => {
  assert.equal(normalizeUpstreamErrorCode(11128), "11128");
  assert.equal(normalizeUpstreamErrorCode(0), "0");
});

test("normalizeUpstreamErrorCode: a string code is trimmed, blank is absent", () => {
  assert.equal(normalizeUpstreamErrorCode("rate_limit_exceeded"), "rate_limit_exceeded");
  assert.equal(normalizeUpstreamErrorCode("  spaced  "), "spaced");
  assert.equal(normalizeUpstreamErrorCode(""), undefined);
  assert.equal(normalizeUpstreamErrorCode("   "), undefined);
});

test("normalizeUpstreamErrorCode: non-scalar and non-finite values are absent", () => {
  assert.equal(normalizeUpstreamErrorCode(undefined), undefined);
  assert.equal(normalizeUpstreamErrorCode(null), undefined);
  assert.equal(normalizeUpstreamErrorCode(NaN), undefined);
  assert.equal(normalizeUpstreamErrorCode(Infinity), undefined);
  assert.equal(normalizeUpstreamErrorCode({ code: 11128 }), undefined);
});

test("parseUpstreamError: a NUMERIC provider code is preserved, not dropped", async () => {
  const res = new Response(tencentEnvelope(11128, "first message is not system prompt"), {
    status: 400,
    headers: { "content-type": "application/json" },
  });
  const parsed = await parseUpstreamError(res, "codebuddy");
  assert.equal(parsed.statusCode, 400);
  assert.equal(parsed.errorCode, "11128");
  assert.equal(typeof parsed.errorCode, "string");
  assert.equal(parsed.message, "first message is not system prompt");
});

test("parseUpstreamError: a string provider code still works", async () => {
  const res = new Response(
    JSON.stringify({ error: { code: "rate_limit_exceeded", message: "slow down" } }),
    { status: 429, headers: { "content-type": "application/json" } }
  );
  const parsed = await parseUpstreamError(res, "openai");
  assert.equal(parsed.errorCode, "rate_limit_exceeded");
});

test("parseUpstreamError: 11102 and 11148 also survive as strings", async () => {
  for (const [code, msg] of [
    [11102, "model [x] service info not found"],
    [11148, "tool calls and tool results do not match, please start a new conversation and retry"],
  ] as const) {
    const res = new Response(tencentEnvelope(code, msg), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
    const parsed = await parseUpstreamError(res, "codebuddy");
    assert.equal(parsed.errorCode, String(code));
  }
});

test("formatProviderError: upstream code is surfaced alongside the HTTP status", () => {
  const out = formatProviderError(new Error("request illegal"), "codebuddy", "m", 400, "11128");
  assert.equal(out, "[400]: request illegal (upstream code 11128)");
});

test("formatProviderError: no suffix when no upstream code is supplied (byte-identical)", () => {
  const err = { code: "rate_limited", message: "Too many requests" };
  assert.equal(formatProviderError(err, "openai", "gpt-4o", 429), "[429]: Too many requests");
  assert.equal(formatProviderError(new Error("boom"), "openai", "gpt-4o", 400), "[400]: boom");
});

test("formatProviderError: no suffix when the upstream code merely repeats the status", () => {
  assert.equal(
    formatProviderError(new Error("bad request"), "openai", "m", 400, "400"),
    "[400]: bad request"
  );
  assert.equal(
    formatProviderError(new Error("bad request"), "openai", "m", 400, 400),
    "[400]: bad request"
  );
});

test("formatProviderError: an empty upstream code adds nothing", () => {
  assert.equal(formatProviderError(new Error("x"), "openai", "m", 400, ""), "[400]: x");
  assert.equal(formatProviderError(new Error("x"), "openai", "m", 400, null), "[400]: x");
  assert.equal(formatProviderError(new Error("x"), "openai", "m", 400, undefined), "[400]: x");
});

test("formatProviderError: upstream code and low-level cause coexist", () => {
  const err = Object.assign(new Error("fetch failed"), { cause: { code: "UND_ERR_SOCKET" } });
  const out = formatProviderError(err, "codebuddy", "m", 400, "11128");
  assert.equal(out, "[400]: fetch failed (upstream code 11128) (cause: UND_ERR_SOCKET)");
});
