/**
 * A target that refuses the egress IP is not a healthy proxy, but the proxy
 * did relay the request.
 *
 * The probe classified any response under 500 as "ok", so a 401/403/429 from the
 * probe target — the shape a destination uses to refuse a banned or rate-limited
 * IP — was reported as a healthy proxy. The proxy did relay, so it is not
 * failing; but it is not serving that destination either, and "ok" hid that.
 *
 * `blocked` resets the consecutive-failure streak: any relayed HTTP response
 * proves the proxy relayed, while the refusal itself stays out of the failure
 * count (one target refusing an IP does not make the proxy dead, and the
 * removal policy stays operator-owned).
 */
import test from "node:test";
import assert from "node:assert/strict";

const { classifyProbeStatus, decideProxyHealthAction } =
  await import("../../src/lib/proxyHealth/decision.ts");

// ─── classifyProbeStatus ───────────────────────────────

test("a target refusing the egress IP is blocked, not ok", () => {
  for (const status of [401, 403, 429]) {
    assert.equal(classifyProbeStatus(status), "blocked", `status ${status}`);
  }
});

test("a target that served the request is ok", () => {
  for (const status of [200, 204, 301, 400, 404]) {
    assert.equal(classifyProbeStatus(status), "ok", `status ${status}`);
  }
});

test("a 5xx from the target stays inconclusive — the proxy relayed fine", () => {
  for (const status of [500, 502, 503]) {
    assert.equal(classifyProbeStatus(status), "inconclusive", `status ${status}`);
  }
});

// ─── decideProxyHealthAction: refused relays reset the streak ───
// Rationale: the probe target needs no key, so a `blocked` response is the
// normal answer of a healthy proxy behind a shared egress IP. Keeping the
// old streak would count relayed responses as dead air; any relayed HTTP
// response proves the proxy relayed, so the streak resets while status and
// removal stay untouched.

test("blocked resets the streak, never advances it, never touches status", () => {
  // Old contract (generic keyed target): a refusal said nothing about the
  // proxy, so the streak was kept. With a keyless provider target a refusal
  // is a relayed response, i.e. proof of relay; keeping the streak would
  // count successes as silence.
  const d = decideProxyHealthAction({
    outcome: "blocked",
    priorFailures: 2,
    autoRemove: false,
    autoDisable: false,
    removeAfter: 3,
  });
  assert.deepEqual(d, { failures: 0, clearFailures: true, setStatus: null, remove: false });
});

test("blocked cannot remove or disable a proxy, even at the threshold with both flags on", () => {
  // The destructive path is the one that must never be reachable from `blocked`:
  // prior failures already sit at the threshold and both opt-ins are enabled, so
  // an outcome counted as a failure WOULD delete the proxy here.
  const d = decideProxyHealthAction({
    outcome: "blocked",
    priorFailures: 3,
    autoRemove: true,
    autoDisable: true,
    removeAfter: 3,
  });
  assert.equal(d.remove, false);
  assert.equal(d.setStatus, null);
  assert.equal(d.failures, 0, "the streak is reset, never advanced");
});

test("a refused relay still proves the proxy relayed: resets the streak", () => {
  // Old contract: `blocked` was neutral like `inconclusive` (kept the streak)
  // because the target was generic. Since the probe target needs no key, a
  // refusal is the normal answer of a healthy proxy — the streak resets.
  const blockedDecision = decideProxyHealthAction({
    outcome: "blocked",
    priorFailures: 2,
    autoRemove: true,
    autoDisable: false,
    removeAfter: 3,
  });
  const okDecision = decideProxyHealthAction({
    outcome: "ok",
    priorFailures: 2,
    autoRemove: true,
    autoDisable: false,
    removeAfter: 3,
  });
  assert.equal(blockedDecision.clearFailures, true);
  assert.equal(blockedDecision.failures, 0);
  assert.equal(okDecision.clearFailures, true);
});

// ─── behaviour preservation for "Test All" ─────────────

test("alive keeps its exact prior meaning for every status", () => {
  // `/api/settings/proxies/auto-test` computed `alive = status < 500`. It now derives
  // it from the shared classifier; this asserts the two agree on the whole range, so
  // no proxy changes state under PROXY_HEALTH_AUTO_DEACTIVATE because of this PR.
  for (let status = 100; status < 600; status++) {
    const outcome = classifyProbeStatus(status);
    const alive = outcome === "ok" || outcome === "blocked";
    assert.equal(alive, status < 500, `status ${status}`);
  }
});

test("only the target-refusal statuses are flagged blocked across the whole range", () => {
  const flagged = [];
  for (let status = 100; status < 600; status++) {
    if (classifyProbeStatus(status) === "blocked") flagged.push(status);
  }
  assert.deepEqual(flagged, [401, 403, 429]);
});

test("the sweep summary counts refusals separately from served probes", async () => {
  // The summary label changed with the reset so the refusal tally is never
  // mistaken for served probes or dead air.
  const { readFile } = await import("node:fs/promises");
  const src = await readFile(
    new URL("../../src/lib/proxyHealth/scheduler.ts", import.meta.url),
    "utf8"
  );
  assert.match(src, /\$\{blocked\} refused by target/);
  assert.doesNotMatch(src, /\$\{blocked\} blocked by target/);
});
