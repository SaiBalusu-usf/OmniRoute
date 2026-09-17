import test from "node:test";
import assert from "node:assert/strict";
import { normalizeClaudeUsageQuotas } from "../../open-sse/services/usage/claudeQuota.ts";

test("normalizes current Claude limits as the authoritative scoped representation", () => {
  const sessionReset = new Date(Date.now() + 60_000).toISOString();
  const weeklyReset = new Date(Date.now() + 120_000).toISOString();
  const scopedReset = new Date(Date.now() + 180_000).toISOString();
  const quotas = normalizeClaudeUsageQuotas({
    five_hour: null,
    seven_day: null,
    limits: [
      {
        kind: "session",
        percent: 30,
        resetsAt: sessionReset,
        isActive: false,
        severity: "normal",
        scope: null,
      },
      {
        kind: "weekly_all",
        percent: 50,
        resetsAt: weeklyReset,
        isActive: false,
        severity: "warning",
        scope: null,
      },
      {
        kind: "weekly_scoped",
        percent: 100,
        resetsAt: scopedReset,
        isActive: true,
        severity: "critical",
        scope: { model: { displayName: "Fable" } },
      },
      {
        kind: "weekly_scoped",
        percent: 20,
        resetsAt: scopedReset,
        isActive: false,
        severity: "normal",
        scope: { model: { id: "claude-opus-5", displayName: "Opus" } },
      },
    ],
  });

  assert.equal(quotas["session (5h)"].remaining, 70);
  assert.equal(quotas["weekly (7d)"].remaining, 50);
  assert.equal(quotas["weekly Fable (7d)"].remaining, 0);
  assert.deepEqual(quotas["weekly Fable (7d)"].claudeQuota, {
    kind: "weekly_scoped",
    active: true,
    severity: "critical",
    scopeKey: "model:fable",
    modelId: null,
    modelDisplayName: "Fable",
  });
  assert.equal(quotas["weekly Opus (7d)"].claudeQuota?.modelId, "claude-opus-5");
  assert.equal(quotas["weekly Fable (7d)"].resetAt, scopedReset);
});

test("normalizes the evidenced snake-case current Claude limit shape", () => {
  const resetAt = new Date(Date.now() + 120_000).toISOString();
  const quotas = normalizeClaudeUsageQuotas({
    limits: [
      {
        kind: "weekly_scoped",
        percent: 100,
        resets_at: resetAt,
        is_active: true,
        severity: "critical",
        scope: { model: { display_name: "Fable" } },
      },
    ],
  });

  assert.equal(quotas["weekly Fable (7d)"].resetAt, resetAt);
  assert.equal(quotas["weekly Fable (7d)"].claudeQuota?.active, true);
});

test("adapts previous Claude quota fields into the same representation", () => {
  const resetAt = new Date(Date.now() + 120_000).toISOString();
  const quotas = normalizeClaudeUsageQuotas({
    five_hour: { utilization: 90, resets_at: resetAt },
    seven_day: { utilization: 20, resets_at: resetAt },
    seven_day_sonnet: { utilization: 35, resets_at: resetAt },
  });

  assert.equal(quotas["session (5h)"].remaining, 10);
  assert.equal(quotas["weekly (7d)"].remaining, 80);
  assert.equal(quotas["weekly sonnet (7d)"].remaining, 65);
  assert.deepEqual(quotas["weekly sonnet (7d)"].claudeQuota, {
    kind: "weekly_scoped",
    active: false,
    severity: null,
    scopeKey: "model:sonnet",
    modelId: null,
    modelDisplayName: "sonnet",
  });
});

test("an empty current limits array does not fall through to previous fields", () => {
  assert.deepEqual(
    normalizeClaudeUsageQuotas({
      limits: [],
      five_hour: { utilization: 100, resets_at: new Date(Date.now() + 60_000).toISOString() },
    }),
    {}
  );
});

test("any present invalid limits value remains authoritative", () => {
  const previous = {
    five_hour: { utilization: 100, resets_at: new Date(Date.now() + 60_000).toISOString() },
  };
  for (const limits of [null, { kind: "weekly_all" }, 42, "invalid"]) {
    assert.deepEqual(normalizeClaudeUsageQuotas({ ...previous, limits }), {});
  }
});
