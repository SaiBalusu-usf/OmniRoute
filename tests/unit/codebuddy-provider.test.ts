import test from "node:test";
import assert from "node:assert/strict";

import {
  AI_PROVIDERS,
  USAGE_SUPPORTED_PROVIDERS,
  supportsDualAuthProvider,
} from "../../src/shared/constants/providers.ts";
import { REGISTRY } from "../../open-sse/config/providerRegistry.ts";
import { getExecutor } from "../../open-sse/executors/index.ts";
import { CodeBuddyExecutor } from "../../open-sse/executors/codebuddy.ts";
import {
  PROVIDERS as OAUTH_PROVIDER_IDS,
  CODEBUDDY_CONFIG,
} from "../../src/lib/oauth/constants/oauth.ts";
import PROVIDERS_MAP from "../../src/lib/oauth/providers/index.ts";
import { supportsTokenRefresh } from "../../open-sse/services/tokenRefresh.ts";
import { tryWorkBuddyDesktopAuth } from "../../src/lib/codebuddy/tokenExtractor.ts";

test("codebuddy is registered as an OAuth provider in the UI catalog", () => {
  const p = AI_PROVIDERS["codebuddy"];
  assert.ok(p, "AI_PROVIDERS['codebuddy'] must exist");
  assert.equal(p.id, "codebuddy");
  assert.equal(p.alias, "cbai");
  assert.equal(p.name, "WorkBuddy AI");
});

test("codebuddy registry entry has expected shape and full international catalog", () => {
  const r = REGISTRY["codebuddy"];
  assert.ok(r, "REGISTRY['codebuddy'] must exist");
  assert.equal(r.alias, "cbai");
  assert.equal(r.executor, "codebuddy");
  assert.equal(r.baseUrl, "https://www.codebuddy.ai/v2/chat/completions");
  assert.equal(r.authHeader, "bearer");
  assert.equal(r.headers?.["X-Product"], "SaaS");
  assert.equal(r.headers?.["X-IDE-Type"], "CLI");
  assert.equal(r.headers?.["X-IDE-Name"], "CLI");
  assert.equal(r.headers?.["x-requested-with"], "XMLHttpRequest");
  assert.equal(r.headers?.["x-codebuddy-request"], "1");

  const ids = r.models.map((m) => m.id);
  for (const expected of [
    "default-model",
    "fast-model",
    "balanced-model",
    "primary-model",
    "deep-model",
    "deepseek-v4.1-flash",
    "deepseek-v4.1-flash-sg",
    "gpt-6-astra",
    "hy4-preview",
    "hy3",
    "kimi-k2.8-preview",
    "gpt-5.6-sol",
    "gpt-5.6-terra",
    "gpt-5.6-luna",
    "gpt-5.5",
    "gpt-5.4",
    "gemini-3.5-flash",
    "glm-5.3",
    "glm-5.2",
    "kimi-k3",
    "kimi-k2.6",
  ]) {
    assert.ok(ids.includes(expected), `model ${expected} must be registered`);
  }
  assert.equal(r.models.length, 21);
});

test("codebuddy flagship models carry expected context length and vision", () => {
  const r = REGISTRY["codebuddy"];
  const astra = r.models.find((x) => x.id === "gpt-6-astra");
  assert.ok(astra, "gpt-6-astra must exist");
  assert.equal(astra.contextLength, 1000000);
  assert.equal(astra.supportsReasoning, true);
  assert.equal(astra.supportsVision, true);

  const flash = r.models.find((x) => x.id === "deepseek-v4.1-flash");
  assert.ok(flash, "deepseek-v4.1-flash must exist");
  assert.equal(flash.contextLength, 1000000);
  assert.equal(flash.supportsReasoning, true);
  assert.equal(flash.supportsVision, true);
});

test("getExecutor returns the CodeBuddyExecutor for 'codebuddy' and the 'cbai' alias", async () => {
  const e = await getExecutor("codebuddy");
  assert.ok(e instanceof CodeBuddyExecutor, "executor must be CodeBuddyExecutor");
  const aliasExec = await getExecutor("cbai");
  assert.ok(aliasExec instanceof CodeBuddyExecutor, "alias 'cbai' must resolve to same executor");
});

test("CodeBuddyExecutor forces stream:true and handles reasoning_effort correctly", () => {
  const e = new CodeBuddyExecutor();
  const plain = e.transformRequest(
    "gpt-6-astra",
    { model: "gpt-6-astra", messages: [{ role: "user", content: "hello" }], stream: false },
    false,
    {} as unknown as Parameters<typeof e.transformRequest>[3]
  ) as Record<string, unknown>;

  assert.equal(plain.stream, true);
  assert.equal(Object.prototype.hasOwnProperty.call(plain, "reasoning_effort"), false);

  const withReasoning = e.transformRequest(
    "gpt-6-astra",
    { model: "gpt-6-astra", messages: [], reasoning_effort: "high" },
    true,
    {} as unknown as Parameters<typeof e.transformRequest>[3]
  ) as Record<string, unknown>;

  assert.equal(withReasoning.stream, true);
  assert.equal(withReasoning.reasoning_effort, "high");
  assert.equal(withReasoning.reasoning_summary, "auto");
});

test("codebuddy OAuth provider is wired with device_code flow and hits www.codebuddy.ai", async () => {
  assert.equal(OAUTH_PROVIDER_IDS.CODEBUDDY, "codebuddy");
  const cb = PROVIDERS_MAP["codebuddy"];
  assert.ok(cb, "PROVIDERS map must include 'codebuddy'");
  assert.equal(cb.flowType, "device_code");
  assert.equal(typeof cb.requestDeviceCode, "function");
  assert.equal(typeof cb.pollToken, "function");

  const origFetch = globalThis.fetch;
  const calls: { url: string; init?: RequestInit }[] = [];
  globalThis.fetch = async (url: string | URL | Request, init?: RequestInit) => {
    calls.push({ url: String(url), init });
    return new Response(
      JSON.stringify({
        code: 0,
        data: {
          accessToken: "TEST_AT",
          refreshToken: "TEST_RT",
          tokenType: "Bearer",
          expiresIn: 7200,
        },
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    ) as unknown as Response;
  };

  try {
    const result = await cb.pollToken(CODEBUDDY_CONFIG, "TEST_STATE");
    assert.ok(result?.ok, "successful poll should be ok:true");
    assert.equal(result?.data?.access_token, "TEST_AT");
    const got = calls.at(-1);
    assert.ok(got, "fetch must have been called");
    assert.equal(got.init?.method, "GET");
    assert.match(got.url, /codebuddy\.ai.*state=TEST_STATE/);
  } finally {
    globalThis.fetch = origFetch;
  }
});

test("codebuddy token refresh handler is wired in tokenRefresh.ts", () => {
  assert.equal(supportsTokenRefresh("codebuddy"), true);
});

test("codebuddy is admitted by the dual-auth gate", () => {
  assert.ok(supportsDualAuthProvider("codebuddy"));
});

test("codebuddy is in USAGE_SUPPORTED_PROVIDERS and quota handler parses packages", async () => {
  assert.ok(USAGE_SUPPORTED_PROVIDERS.includes("codebuddy"));
  assert.ok(USAGE_SUPPORTED_PROVIDERS.includes("cbai"));
  const { getCodeBuddyUsage } = await import("../../open-sse/services/usage/codebuddy.ts");

  const origFetch = globalThis.fetch;
  globalThis.fetch = async () => {
    return new Response(
      JSON.stringify({
        code: 0,
        data: {
          Response: {
            Data: {
              Accounts: [
                {
                  PackageName: "Free Plan Subscription",
                  CycleStartTime: "2026-09-01T00:00:00Z",
                  CycleEndTime: "2026-10-01T00:00:00Z",
                  DeductionEndTime: 32503680000,
                  CycleCapacitySize: 100,
                  CycleCapacityUsed: 10,
                },
                {
                  PackageName: "Bonus Pack",
                  CycleStartTime: "2026-09-01T00:00:00Z",
                  CycleEndTime: "2026-09-25T00:00:00Z",
                  DeductionEndTime: new Date("2026-09-25T00:00:00Z").getTime() / 1000,
                  CapacitySize: 50,
                  CapacityUsed: 5,
                },
              ],
            },
          },
        },
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    ) as unknown as Response;
  };

  try {
    const result = await getCodeBuddyUsage("ACCESS_TOKEN", undefined, undefined);
    assert.ok(result && typeof result === "object");
    assert.equal(result.plan, "Free Plan Subscription");
    assert.ok(result.quotas?.Monthly);
    assert.equal(result.quotas.Monthly.total, 100);
    assert.equal(result.quotas.Monthly.used, 10);
    assert.ok(result.quotas["Bonus Pack 1"]);
    assert.equal(result.quotas["Bonus Pack 1"].total, 50);
    assert.equal(result.quotas["Bonus Pack 1"].used, 5);
  } finally {
    globalThis.fetch = origFetch;
  }
});

test("tryWorkBuddyDesktopAuth extracts live tokens when available", async () => {
  const res = await tryWorkBuddyDesktopAuth();
  // On this system, workbuddy is installed
  if (res.found) {
    assert.ok(res.accessToken, "accessToken must be populated");
    assert.ok(res.expiresIn && res.expiresIn > 0, "expiresIn must be positive");
    assert.equal(res.source, "WorkBuddy Desktop");
  }
});

test("codebuddy is in USAGE_FETCHER_PROVIDERS and OAUTH_TEST_CONFIG", async () => {
  const { USAGE_FETCHER_PROVIDERS } =
    await import("../../open-sse/services/usage/fetcherProviders.ts");
  assert.ok(USAGE_FETCHER_PROVIDERS.includes("codebuddy"));
  assert.ok(USAGE_FETCHER_PROVIDERS.includes("cbai"));

  const { OAUTH_TEST_CONFIG } =
    await import("../../src/app/api/providers/[id]/test/oauthTestConfig.ts");
  assert.ok(OAUTH_TEST_CONFIG["codebuddy"]);
  assert.equal(OAUTH_TEST_CONFIG["codebuddy"].checkExpiry, true);
  assert.equal(OAUTH_TEST_CONFIG["codebuddy"].refreshable, true);
});

test("parseUpstreamError unwraps nested Tencent CodeBuddy credits exhausted error", async () => {
  const { parseUpstreamError } = await import("../../open-sse/utils/error.ts");
  const { isCreditsExhausted } = await import("../../open-sse/services/accountFallback.ts");

  const tencentErrorBody = {
    error: {
      data: {
        code: 14018,
        msg: "Credits exhausted. Please visit the link below to purchase add-on packs and get more credits: https://www.codebuddy.ai/profile/usage ",
        requestId: "71980743-db09-4de9-a798-fe731c204d6d",
      },
    },
  };

  const resp = new Response(JSON.stringify(tencentErrorBody), {
    status: 429,
    headers: { "Content-Type": "application/json" },
  });

  const parsed = await parseUpstreamError(resp, "codebuddy");
  assert.equal(
    parsed.message,
    "Credits exhausted. Please visit the link below to purchase add-on packs and get more credits: https://www.codebuddy.ai/profile/usage "
  );
  assert.equal(parsed.errorCode, "14018");
  assert.equal(isCreditsExhausted(parsed.message), true);
});

test("CodeBuddyExecutor and CodeBuddyCnExecutor strip provider prefixes from model", () => {
  const executor = new CodeBuddyExecutor();
  const transformed = executor.transformRequest(
    "codebuddy/deepseek-v4.1-flash-sg",
    { model: "codebuddy/deepseek-v4.1-flash-sg", messages: [{ role: "user", content: "hi" }] },
    false,
    {} as never
  ) as Record<string, unknown>;

  assert.equal(transformed.model, "deepseek-v4.1-flash-sg");

  const transformedCbai = executor.transformRequest(
    "cbai/deepseek-v4.1-flash-sg",
    { model: "cbai/deepseek-v4.1-flash-sg", messages: [{ role: "user", content: "hi" }] },
    false,
    {} as never
  ) as Record<string, unknown>;

  assert.equal(transformedCbai.model, "deepseek-v4.1-flash-sg");
});
