// Regression guard for #11128-followup: when the last attempt's 429 was a
// locally-synthesized burst-throttle restatement (provider-execution pipeline
// fail-fast with NO fresh sibling account to rotate to), getCooldownAwareRetryDecision()
// must NOT decide to pace a +1s cooldown re-send. The upstream already answered
// that exact request — re-sending it after +1s is a redundant duplicate probe and
// the client's own spaced retry is the next attempt. suppressLocalCooldownRetry is
// a distinct sixth input that returns shouldRetry:false / waitMs:0 even when every
// other condition (enabled retries, remaining budget, retryable Retry-After)
// would otherwise say "wait and retry".
import test from "node:test";
import assert from "node:assert/strict";
import {
  getCooldownAwareRetryDecision,
  type CooldownAwareRetrySettings,
} from "../../src/sse/services/cooldownAwareRetry.ts";

const settings: CooldownAwareRetrySettings = {
  enabled: true,
  maxRetries: 3,
  maxRetryWaitSec: 300,
  maxRetryWaitMs: 300000,
  budgetMs: 30000,
};

const futureRetryAfter = new Date(Date.now() + 1000).toISOString();

test("suppressLocalCooldownRetry forces shouldRetry=false even when a retry would otherwise be due", () => {
  const decision = getCooldownAwareRetryDecision({
    retryAfter: futureRetryAfter,
    settings,
    attempt: 0,
    budgetLeftMs: 30000,
    suppressLocalCooldownRetry: true,
  });
  assert.equal(decision.shouldRetry, false);
  assert.equal(decision.waitMs, 0);
});

test("without the flag the identical inputs still retry (backward compat)", () => {
  const decision = getCooldownAwareRetryDecision({
    retryAfter: futureRetryAfter,
    settings,
    attempt: 0,
    budgetLeftMs: 30000,
  });
  assert.equal(decision.shouldRetry, true);
  assert.ok(decision.waitMs > 0);
});

test("explicit flag=false behaves like omitted (flag is opt-in suppression)", () => {
  const decision = getCooldownAwareRetryDecision({
    retryAfter: futureRetryAfter,
    settings,
    attempt: 0,
    budgetLeftMs: 30000,
    suppressLocalCooldownRetry: false,
  });
  assert.equal(decision.shouldRetry, true);
});

test("suppression still reports the retry-after metadata for client-facing output", () => {
  const decision = getCooldownAwareRetryDecision({
    retryAfter: futureRetryAfter,
    settings,
    attempt: 0,
    budgetLeftMs: 30000,
    suppressLocalCooldownRetry: true,
  });
  assert.equal(decision.retryAfter, futureRetryAfter);
  assert.ok(decision.retryAfterHuman.length > 0);
});
