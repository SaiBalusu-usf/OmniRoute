// tests/unit/combo-target-exhaustion-503-scope.test.ts
// Provider-level exhaustion is restricted to proven quota. Auth-level
// (401/403) and connection-level (408/5xx) failures without a connectionId
// must not mark the whole provider exhausted on a non-quota cause — the
// provider stays eligible for the remaining combo targets.
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  applyComboTargetExhaustion,
  type ComboExhaustionSets,
} from "../../open-sse/services/combo/targetExhaustion.ts";
import { getExhaustedTargetSkipReason } from "../../open-sse/services/combo/comboPredicates.ts";

const log = { info() {}, warn() {}, error() {}, debug() {} };

function sets(): ComboExhaustionSets {
  return {
    exhaustedProviders: new Set<string>(),
    exhaustedConnections: new Set<string>(),
    transientRateLimitedProviders: new Set<string>(),
  };
}

function target(overrides: Record<string, unknown> = {}) {
  return {
    kind: "model",
    executionKey: "ek",
    modelStr: "test-scope-provider/m1",
    provider: "test-scope-provider",
    providerId: null,
    connectionId: "conn-1",
    ...overrides,
  } as Parameters<typeof applyComboTargetExhaustion>[0];
}

const baseOpts = {
  errorText: "plain upstream error",
  rawModel: "m1",
  isTokenLimitBreach: false,
  allAccountsRateLimited: false,
  requestScopedFailure: false,
  log,
  tag: "COMBO",
  exhaustedLogLevel: "info" as const,
};

test("401 without a connectionId and a non-quota body marks nothing and returns false", () => {
  const s = sets();
  const exhausted = applyComboTargetExhaustion(target({ connectionId: null }), {
    ...baseOpts,
    result: { status: 401 },
    fallbackResult: {},
    errorText: "Missing API key.",
    sets: s,
  });
  assert.equal(exhausted, false);
  assert.equal(s.exhaustedProviders.size, 0);
  assert.equal(s.exhaustedConnections.size, 0);
});

test("503 without a connectionId and a non-quota body marks nothing and returns false", () => {
  const s = sets();
  const exhausted = applyComboTargetExhaustion(target({ connectionId: null }), {
    ...baseOpts,
    result: { status: 503, headers: null },
    fallbackResult: {},
    errorText: "Service Unavailable.",
    sets: s,
  });
  assert.equal(exhausted, false);
  assert.equal(s.exhaustedProviders.size, 0);
  assert.equal(s.exhaustedConnections.size, 0);
});

test("proven quota without a connectionId still marks the provider exhausted (routed through the quota branch)", () => {
  const s = sets();
  const exhausted = applyComboTargetExhaustion(target({ connectionId: null }), {
    ...baseOpts,
    result: { status: 401 },
    fallbackResult: {},
    errorText: "[chutes] All 3 connection(s) credits exhausted — please reconnect in the dashboard",
    sets: s,
  });
  assert.equal(exhausted, true);
  assert.ok(s.exhaustedProviders.has("test-scope-provider"));
  assert.equal(s.exhaustedConnections.size, 0);
});

test("proven quota 503 without a connectionId still marks the provider exhausted", () => {
  const s = sets();
  const exhausted = applyComboTargetExhaustion(target({ connectionId: null }), {
    ...baseOpts,
    result: { status: 503, headers: null },
    fallbackResult: { creditsExhausted: true },
    errorText: "Service Unavailable.",
    sets: s,
  });
  assert.equal(exhausted, true);
  assert.ok(s.exhaustedProviders.has("test-scope-provider"));
  assert.equal(s.exhaustedConnections.size, 0);
});

test("401 with a connectionId marks only that connection, never the provider", () => {
  const s = sets();
  const exhausted = applyComboTargetExhaustion(target(), {
    ...baseOpts,
    result: { status: 401 },
    fallbackResult: {},
    errorText: "Missing API key.",
    sets: s,
  });
  assert.equal(exhausted, true);
  assert.equal(s.exhaustedProviders.size, 0);
  assert.ok(s.exhaustedConnections.has("test-scope-provider:conn-1"));
});

test("a 503 non-quota failure without a connectionId no longer drives the provider-level skip", () => {
  const s = sets();
  applyComboTargetExhaustion(target({ connectionId: null }), {
    ...baseOpts,
    result: { status: 503, headers: null },
    fallbackResult: {},
    errorText: "Service Unavailable.",
    sets: s,
  });
  const sibling = target({ connectionId: "conn-2", modelStr: "test-scope-provider/m2" });
  assert.equal(
    getExhaustedTargetSkipReason(sibling, s.exhaustedProviders, s.exhaustedConnections),
    null
  );
});
