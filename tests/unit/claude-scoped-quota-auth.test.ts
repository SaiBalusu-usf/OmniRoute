import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-claude-quota-auth-"));
process.env.DATA_DIR = TEST_DATA_DIR;
process.env.API_KEY_SECRET = process.env.API_KEY_SECRET || "claude-quota-auth-test-secret";

const core = await import("../../src/lib/db/core.ts");
const providersDb = await import("../../src/lib/db/providers.ts");
const auth = await import("../../src/sse/services/auth.ts");
const quotaCache = await import("../../src/domain/quotaCache.ts");
const fallback = await import("../../open-sse/services/accountFallback.ts");
const { normalizeClaudeUsageQuotas } = await import("../../open-sse/services/usage/claudeQuota.ts");

const EXPLICIT_QUOTA_ERROR =
  "This request would exceed your account's rate limit. Please try again later.";

async function resetStorage() {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  fs.mkdirSync(TEST_DATA_DIR, { recursive: true });
}

async function seedConnection(
  provider: string,
  overrides: { name?: string; authType?: string; accessToken?: string; refreshToken?: string } = {}
) {
  return providersDb.createProviderConnection({
    provider,
    authType: overrides.authType || "apikey",
    name: overrides.name || `${provider}-${Math.random().toString(16).slice(2, 8)}`,
    apiKey: `sk-test-${Math.random().toString(16).slice(2, 10)}`,
    accessToken: overrides.accessToken,
    refreshToken: overrides.refreshToken,
    isActive: true,
    testStatus: "active",
    providerSpecificData: {},
  });
}

function scopedQuota(resetAt: string, modelId: string | null = "claude-fable-5-1") {
  return {
    remainingPercentage: 0,
    resetAt,
    claudeQuota: {
      kind: "weekly_scoped" as const,
      active: true,
      severity: "critical",
      scopeKey: "model:fable",
      modelId,
      modelDisplayName: "Fable",
    },
  };
}

async function flushWrites() {
  await new Promise((resolve) => setTimeout(resolve, 0));
}

test.beforeEach(async () => {
  fallback.clearAllModelLockouts();
  quotaCache.__clearForTests();
  await resetStorage();
});

test.after(async () => {
  core.resetDbInstance();
  fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
});

test("cached Claude quota scope requires fresh matching scoped-only evidence", () => {
  assert.equal(fallback.hasPerModelQuota("claude"), false);
  const connectionId = "claude-cached-scope";
  const now = Date.now();
  const futureReset = new Date(now + 120_000).toISOString();
  const decide = (
    overrides: Partial<{
      connectionId: string;
      provider: string;
      status: number;
      errorText: string;
      model: string;
      nowMs: number;
    }> = {}
  ) =>
    quotaCache.getCachedClaudeQuotaScopeDecision({
      connectionId,
      provider: "claude",
      status: 429,
      errorText: EXPLICIT_QUOTA_ERROR,
      model: "claude/claude-fable-5-1:thinking",
      nowMs: now,
      ...overrides,
    });

  quotaCache.setQuotaCache(connectionId, "claude", {
    "weekly Fable (7d)": scopedQuota(futureReset),
  });
  assert.deepEqual(decide(), {
    scope: "model",
    resetAt: futureReset,
    cooldownMs: 120_000,
  });
  assert.deepEqual(decide({ provider: "cc" }), decide());
  for (const status of [402, 404, 500, 502, 503, 504]) {
    assert.equal(decide({ status }).scope, "connection");
  }
  assert.equal(decide({ provider: "anthropic" }).scope, "connection");
  assert.equal(decide({ errorText: "TPM rate limit exceeded" }).scope, "connection");
  assert.equal(decide({ errorText: "RPM usage limit exceeded" }).scope, "connection");
  assert.equal(decide({ model: "claude-opus-5" }).scope, "connection");
  assert.equal(decide({ connectionId: "claude-cold-cache" }).scope, "connection");

  quotaCache.setQuotaCache(connectionId, "claude", {
    "weekly Fable (7d)": scopedQuota(futureReset, null),
  });
  assert.equal(decide().scope, "model");

  quotaCache.setQuotaCache(connectionId, "claude", {
    "weekly Fable (7d)": scopedQuota(futureReset, "claude-opus-5"),
  });
  assert.equal(decide().scope, "connection");

  quotaCache.setQuotaCache(connectionId, "claude", {
    "weekly Fable (7d)": scopedQuota(new Date(now + 10 * 60_000).toISOString()),
  });
  assert.equal(decide({ nowMs: now + 6 * 60_000 }).scope, "connection");

  const inactive = scopedQuota(futureReset);
  inactive.claudeQuota.active = false;
  quotaCache.setQuotaCache(connectionId, "claude", { "weekly Fable (7d)": inactive });
  assert.equal(decide().scope, "connection");

  quotaCache.setQuotaCache(connectionId, "claude", {
    "weekly Fable (7d)": scopedQuota(new Date(now - 1).toISOString()),
  });
  assert.equal(decide().scope, "connection");

  quotaCache.setQuotaCache(connectionId, "claude", {
    "weekly Fable (7d)": { ...scopedQuota(futureReset), resetAt: null },
  });
  assert.equal(decide().scope, "connection");

  quotaCache.setQuotaCache(connectionId, "claude", {
    "session (5h)": {
      remainingPercentage: 0,
      resetAt: futureReset,
      claudeQuota: {
        kind: "session",
        active: true,
        severity: "critical",
        scopeKey: null,
        modelId: null,
        modelDisplayName: null,
      },
    },
    "weekly Fable (7d)": scopedQuota(futureReset),
  });
  assert.equal(decide().scope, "connection");
});

test("verified current Claude payload flows from parser through live cache to model scope", () => {
  const connectionId = "claude-current-payload";
  const now = Date.now();
  const resetAt = new Date(now + 120_000).toISOString();
  const quotas = normalizeClaudeUsageQuotas({
    limits: [
      {
        kind: "weekly_scoped",
        percent: 100,
        resetsAt: resetAt,
        isActive: true,
        severity: "critical",
        scope: { model: { displayName: "Fable" } },
      },
    ],
  });
  quotaCache.setQuotaCache(connectionId, "claude", quotas);

  assert.deepEqual(
    quotaCache.getCachedClaudeQuotaScopeDecision({
      connectionId,
      provider: "claude",
      status: 429,
      errorText: EXPLICIT_QUOTA_ERROR,
      model: "claude-fable-5-1",
      nowMs: now,
    }),
    { scope: "model", resetAt, cooldownMs: 120_000 }
  );
});

test("matching native Claude quota locks only the failed model until the scoped reset", async () => {
  const failedModel = "claude-fable-5-1";
  const siblingModel = "claude-opus-5";
  const resetAt = new Date(Date.now() + 120_000).toISOString();
  const connection = await seedConnection("claude", {
    name: "claude-model-limit",
    authType: "oauth",
    accessToken: "claude-model-limit-access",
    refreshToken: "claude-model-limit-refresh",
  });
  quotaCache.setQuotaCache(connection.id, "claude", {
    "weekly Fable (7d)": scopedQuota(resetAt),
  });

  const result = await auth.markAccountUnavailable(
    connection.id,
    429,
    EXPLICIT_QUOTA_ERROR,
    "claude",
    failedModel
  );
  await flushWrites();
  const updated = await providersDb.getProviderConnectionById(connection.id);

  assert.equal(result.shouldFallback, true);
  assert.ok(result.cooldownMs > 0 && result.cooldownMs <= 120_000);
  assert.equal(updated.isActive, true);
  assert.equal(updated.testStatus, "active");
  assert.equal(updated.rateLimitedUntil, undefined);
  assert.equal(fallback.isModelLocked("claude", connection.id, failedModel), true);
  assert.equal(fallback.isModelLocked("claude", connection.id, siblingModel), false);

  const failedSelection = await auth.getProviderCredentials("claude", null, null, failedModel);
  const siblingSelection = await auth.getProviderCredentials("claude", null, null, siblingModel);
  assert.equal(failedSelection.allRateLimited, true);
  assert.equal(failedSelection.cooldownScope, "model");
  assert.equal(siblingSelection.connectionId, connection.id);
});

test("global or unproven native Claude quota failures stay connection-wide", async () => {
  const futureReset = new Date(Date.now() + 120_000).toISOString();
  for (const scenario of ["global", "nonmatching", "missing", "generic"] as const) {
    const connection = await seedConnection("claude", {
      name: `claude-${scenario}-quota`,
      authType: "oauth",
      accessToken: `claude-${scenario}-access`,
      refreshToken: `claude-${scenario}-refresh`,
    });
    if (scenario === "global") {
      quotaCache.setQuotaCache(connection.id, "claude", {
        "weekly (7d)": {
          remainingPercentage: 0,
          resetAt: futureReset,
          claudeQuota: {
            kind: "weekly_all",
            active: true,
            severity: "critical",
            scopeKey: null,
            modelId: null,
            modelDisplayName: null,
          },
        },
      });
    } else if (scenario === "nonmatching") {
      quotaCache.setQuotaCache(connection.id, "claude", {
        "weekly Opus (7d)": scopedQuota(futureReset, "claude-opus-5"),
      });
    }

    await auth.markAccountUnavailable(
      connection.id,
      429,
      scenario === "generic" ? "TPM rate limit exceeded" : EXPLICIT_QUOTA_ERROR,
      "claude",
      "claude-fable-5-1"
    );
    await flushWrites();
    const updated = await providersDb.getProviderConnectionById(connection.id);
    assert.equal(updated.testStatus, "unavailable", scenario);
    assert.ok(updated.rateLimitedUntil, scenario);
    assert.equal(fallback.isModelLocked("claude", connection.id, "claude-fable-5-1"), false);
  }
});

test("Claude non-429 and Anthropic API-key failures remain connection-wide", async () => {
  for (const status of [402, 404, 500, 502, 503, 504]) {
    const connection = await seedConnection("claude", {
      name: `claude-status-${status}`,
      authType: "oauth",
      accessToken: `claude-status-${status}-access`,
      refreshToken: `claude-status-${status}-refresh`,
    });
    await auth.markAccountUnavailable(
      connection.id,
      status,
      status === 402 ? "payment required" : "upstream unavailable",
      "claude",
      "claude-fable-5-1"
    );
    await flushWrites();
    const updated = await providersDb.getProviderConnectionById(connection.id);
    assert.equal(
      fallback.isModelLocked("claude", connection.id, "claude-fable-5-1"),
      false,
      String(status)
    );
    assert.notEqual(updated.testStatus, "active", String(status));
  }

  const anthropic = await seedConnection("anthropic", { name: "anthropic-api-key-quota" });
  await auth.markAccountUnavailable(
    anthropic.id,
    429,
    EXPLICIT_QUOTA_ERROR,
    "anthropic",
    "claude-fable-5-1"
  );
  await flushWrites();
  const updated = await providersDb.getProviderConnectionById(anthropic.id);
  assert.equal(fallback.isModelLocked("anthropic", anthropic.id, "claude-fable-5-1"), false);
  assert.notEqual(updated.testStatus, "active");
});
