import test from "node:test";
import assert from "node:assert/strict";

// Provider-wide pacing gate for the CodeBuddy family.
//
// Tencent's 11128 "request illegal" is a shared (IP/fingerprint-level) burst
// throttle: it fires on sustained request rate, not per-account, so account
// rotation cannot escape it (both accounts throttle simultaneously while an
// identical payload replayed in isolation returns 200). The gate serializes
// upstream SEND STARTS across the whole codebuddy family with a minimum
// interval, turning 429 loops into slower-but-successful turns.

const GATE = "../../open-sse/executors/default/codebuddyPacingGate.ts";

test("non-codebuddy providers are a no-op (null slot)", async () => {
  const { acquireCodeBuddyPacingSlot } = await import(GATE);
  assert.equal(await acquireCodeBuddyPacingSlot("openai", null), null);
  assert.equal(await acquireCodeBuddyPacingSlot("nvidia", null), null);
});

test("first acquire is immediate for every family alias", async () => {
  const { acquireCodeBuddyPacingSlot, __resetCodeBuddyPacingForTests } = await import(GATE);
  for (const p of ["codebuddy", "codebuddy-cn", "cbai", "cbcn"]) {
    __resetCodeBuddyPacingForTests();
    const start = Date.now();
    const release = await acquireCodeBuddyPacingSlot(p, null);
    assert.ok(Date.now() - start < 500, `${p}: first acquire must be immediate`);
    assert.equal(typeof release, "function");
    release();
  }
});

test("second immediate acquire waits out the minimum interval", async () => {
  process.env.OMNIROUTE_CODEBUDDY_MIN_INTERVAL_MS = "120";
  const { acquireCodeBuddyPacingSlot, __resetCodeBuddyPacingForTests } = await import(GATE);
  __resetCodeBuddyPacingForTests();
  const r1 = await acquireCodeBuddyPacingSlot("cbai", null);
  r1();
  const start = Date.now();
  const r2 = await acquireCodeBuddyPacingSlot("cbai", null);
  r2();
  const waited = Date.now() - start;
  assert.ok(waited >= 100, `expected >=100ms pacing wait, got ${waited}ms`);
  assert.ok(waited < 2000, `pacing wait must stay bounded, got ${waited}ms`);
  delete process.env.OMNIROUTE_CODEBUDDY_MIN_INTERVAL_MS;
});

test("aborted wait rejects without poisoning the gate", async () => {
  process.env.OMNIROUTE_CODEBUDDY_MIN_INTERVAL_MS = "5000";
  const { acquireCodeBuddyPacingSlot, __resetCodeBuddyPacingForTests } = await import(GATE);
  __resetCodeBuddyPacingForTests();
  const r1 = await acquireCodeBuddyPacingSlot("codebuddy", null);
  r1();
  const controller = new AbortController();
  const pending = acquireCodeBuddyPacingSlot("codebuddy", controller.signal);
  controller.abort();
  await assert.rejects(pending, /abort/i);
  // Gate still usable afterwards.
  delete process.env.OMNIROUTE_CODEBUDDY_MIN_INTERVAL_MS;
  const r3 = await acquireCodeBuddyPacingSlot("codebuddy", null);
  r3();
});

test("wait beyond the max budget returns a busy slot with Retry-After", async () => {
  process.env.OMNIROUTE_CODEBUDDY_MIN_INTERVAL_MS = "60000";
  process.env.OMNIROUTE_CODEBUDDY_MAX_WAIT_MS = "50";
  const { acquireCodeBuddyPacingSlot, __resetCodeBuddyPacingForTests } = await import(GATE);
  __resetCodeBuddyPacingForTests();
  const r1 = await acquireCodeBuddyPacingSlot("codebuddy", null);
  r1();
  let busy: unknown = null;
  try {
    await acquireCodeBuddyPacingSlot("codebuddy", null);
  } catch (err) {
    busy = err;
  }
  assert.ok(busy instanceof Error, "over-budget wait must reject");
  assert.match((busy as Error).message, /pacing/i);
  assert.ok(
    typeof (busy as { retryAfterSecs?: unknown }).retryAfterSecs === "number",
    "busy error must carry retryAfterSecs for the synthetic 429"
  );
  delete process.env.OMNIROUTE_CODEBUDDY_MIN_INTERVAL_MS;
  delete process.env.OMNIROUTE_CODEBUDDY_MAX_WAIT_MS;
});
