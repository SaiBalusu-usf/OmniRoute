/**
 * Synthetic Retry-After provenance.
 *
 * RED expectations on base 963d3c46e:
 * - null input: unavailableResponse(429, msg, null) must NOT emit Retry-After: 1
 *   without provenance — base emits it with no provenance field.
 * - parity vectors: synthetic ⟺ non-finite /
 *   non-parsable / non-positive number / numeric string (incl. "");
 *   upstream ⟺ finite number in (0,1e9) / valid Date / non-numeric
 *   date-parsable string. Infinity is synthetic (guarded by
 *   isFinite, falls to `return 1`).
 * - (drain-path asserts live here too — see below.)
 */
import test from "node:test";
import assert from "node:assert/strict";

import { unavailableResponse } from "../../open-sse/utils/error.ts";

type Vector = [
  input: string | number | Date | null | undefined,
  provenance: string,
  header: boolean,
];

const FUTURE_ISO = new Date(Date.now() + 3600_000).toISOString();
const PAST_ISO = new Date(Date.now() - 3600_000).toISOString();
const FUTURE_DATE = new Date(Date.now() + 3600_000);
const PAST_DATE = new Date(Date.now() - 3600_000);

const VECTORS: Vector[] = [
  [null, "synthetic", false],
  [undefined, "synthetic", false],
  [0, "synthetic", false],
  [-3, "synthetic", false],
  [Number.NaN, "synthetic", false],
  [Number.POSITIVE_INFINITY, "synthetic", false],
  ["5", "synthetic", false],
  ["", "synthetic", false],
  ["abc", "synthetic", false],
  [PAST_ISO, "upstream", true],
  [FUTURE_ISO, "upstream", true],
  [PAST_DATE, "upstream", true],
  [FUTURE_DATE, "upstream", true],
  [2, "upstream", true],
  [2e12, "upstream", true],
];

test("null retryAfter omits Retry-After and marks synthetic provenance", async () => {
  const res = unavailableResponse(429, "drained", null);
  assert.equal(res.headers.get("Retry-After"), null);
  const body = (await res.json()) as { error: { message: string; retry_after_provenance: string } };
  assert.equal(body.error.retry_after_provenance, "synthetic");
});
test("neighbors — 2-arg signal-less callers omit Retry-After with synthetic provenance", async () => {
  // Callers without an upstream signal (quota-cutoff fallback) lose the header too — intended.
  // and web-fetch pool-exhausted paths call unavailableResponse with no
  // retryAfter — under the omit rule they lose their Retry-After: 1.
  for (const msg of [
    "All auto strategy candidates are below configured quota cutoffs",
    "All configured web-fetch providers are rate limited or quota-exhausted",
  ]) {
    const res = unavailableResponse(429, msg);
    assert.equal(res.headers.get("Retry-After"), null, `header for "${msg.slice(0, 30)}…"`);
    const body = (await res.json()) as {
      error: { message: string; retry_after_provenance: string };
    };
    assert.equal(body.error.retry_after_provenance, "synthetic");
  }
});

test("explicit signal keeps header — code-chosen literal stays upstream (known limit)", async () => {
  const res = unavailableResponse(503, "busy", 2);
  assert.equal(res.headers.get("Retry-After"), "2");
  const body = (await res.json()) as {
    error: { message: string; retry_after_provenance: string };
  };
  assert.equal(body.error.retry_after_provenance, "upstream");
});

test("provenance parity vectors + header presence", async () => {
  for (const [input, provenance, header] of VECTORS) {
    const res = unavailableResponse(429, "drained", input);
    const hasHeader = res.headers.get("Retry-After") !== null;
    assert.equal(hasHeader, header, `header for ${String(input)}`);
    const body = (await res.json()) as {
      error: { message: string; retry_after_provenance: string };
    };
    assert.equal(body.error.retry_after_provenance, provenance, `provenance for ${String(input)}`);
  }
});

test("Antigravity text signal on already-read body feeds earliestRetryAfter", async () => {
  const { executeTargetAttempt } =
    await import("../../open-sse/services/combo/executeTargetAttempt.ts");
  const warns: unknown[][] = [];
  const target = {
    kind: "model",
    stepId: "s1",
    executionKey: "ek-q4",
    modelStr: "antigravity/gemini",
    provider: "antigravity",
    providerId: null,
    connectionId: "c-q4",
    weight: 1,
    label: null,
  };
  const deps = {
    strategy: "priority",
    combo: { name: "t", models: [] },
    config: {},
    log: {
      info() {},
      warn(...a: unknown[]) {
        warns.push(a);
      },
      debug() {},
      error() {},
    },
    settings: null,
    resilienceSettings: { providerCooldown: { enabled: false } },
    sticky: { targets: [], messageHash: null, stuck: false },
    effectiveSessionId: null,
    preScreenMap: new Map(),
    quotaCutoffResetWindowConfig: {},
    maxRetries: 0,
    traceInvocationId: "inv-q4",
    clientRequestedStream: false,
    handleSingleModelWithTimeout: async () =>
      new Response(
        JSON.stringify({
          error: {
            message:
              "You have exhausted your capacity on this model. Your quota will reset after 2h7m23s.",
          },
        }),
        { status: 429, headers: { "Content-Type": "application/json" } }
      ),
    body: { messages: [{ role: "user", content: "hi" }] },
    startTime: Date.now(),
    releaseStickyPinOnFailure() {},
    clearStaleLKGP() {},
  };
  const state = {
    orderedTargets: [target],
    fallbackCount: 0,
    recordedAttempts: 0,
    comboErrors: [],
    lastError: null,
    lastStatus: null,
    earliestRetryAfter: null,
    comboExpired: false,
    exhaustedProviders: new Set(),
    exhaustedConnections: new Set(),
    transientRateLimitedProviders: new Set(),
    abortControllers: new Map([[0, new AbortController()]]),
    dispatchedTargets: new Set(),
    targetFailureTrust: new Map(),
    comboAttemptOrder: [],
    skippedForCircuitOpen: false,
    earliestCircuitOpenRetryMs: 0,
    globalAttempts: 0,
    observedFailure: false,
    allObservedFailuresQuota: true,
    observeFailure() {},
  };
  await executeTargetAttempt({
    index: 0,
    state,
    deps,
    targetForAttempt: target,
    profile: {},
    protectedPriorityTarget: false,
  } as unknown as Parameters<typeof executeTargetAttempt>[0]);
  assert.notEqual(state.earliestRetryAfter, null);
});

test("unreadable clone logs triplet reason", async () => {
  const { executeTargetAttempt } =
    await import("../../open-sse/services/combo/executeTargetAttempt.ts");
  const warns: unknown[][] = [];
  const target = {
    kind: "model",
    stepId: "s1",
    executionKey: "ek-q5",
    modelStr: "openai/gpt-4o",
    provider: "openai",
    providerId: null,
    connectionId: "c-q5",
    weight: 1,
    label: null,
  };
  const bad = new Response("plain 429, not json", { status: 429 });
  Object.defineProperty(bad, "clone", {
    value() {
      throw new Error("clone boom");
    },
  });
  const deps = {
    strategy: "priority",
    combo: { name: "t", models: [] },
    config: {},
    log: {
      info() {},
      warn(...a: unknown[]) {
        warns.push(a);
      },
      debug() {},
      error() {},
    },
    settings: null,
    resilienceSettings: { providerCooldown: { enabled: false } },
    sticky: { targets: [], messageHash: null, stuck: false },
    effectiveSessionId: null,
    preScreenMap: new Map(),
    quotaCutoffResetWindowConfig: {},
    maxRetries: 0,
    traceInvocationId: "inv-q5",
    clientRequestedStream: false,
    handleSingleModelWithTimeout: async () => bad,
    body: { messages: [{ role: "user", content: "hi" }] },
    startTime: Date.now(),
    releaseStickyPinOnFailure() {},
    clearStaleLKGP() {},
  };
  const state = {
    orderedTargets: [target],
    fallbackCount: 0,
    recordedAttempts: 0,
    comboErrors: [],
    lastError: null,
    lastStatus: null,
    earliestRetryAfter: null,
    comboExpired: false,
    exhaustedProviders: new Set(),
    exhaustedConnections: new Set(),
    transientRateLimitedProviders: new Set(),
    abortControllers: new Map([[0, new AbortController()]]),
    dispatchedTargets: new Set(),
    targetFailureTrust: new Map(),
    comboAttemptOrder: [],
    skippedForCircuitOpen: false,
    earliestCircuitOpenRetryMs: 0,
    globalAttempts: 0,
    observedFailure: false,
    allObservedFailuresQuota: true,
    observeFailure() {},
  };
  await executeTargetAttempt({
    index: 0,
    state,
    deps,
    targetForAttempt: target,
    profile: {},
    protectedPriorityTarget: false,
  } as unknown as Parameters<typeof executeTargetAttempt>[0]);
  const cloneLog = warns.filter((w) => typeof w[1] === "string" && /clone|parse/i.test(w[1]));
  assert.ok(
    cloneLog.length > 0,
    `expected clone/parse warn, got ${JSON.stringify(warns).slice(0, 400)}`
  );
});
