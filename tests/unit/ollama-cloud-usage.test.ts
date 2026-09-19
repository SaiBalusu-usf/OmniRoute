import test from "node:test";
import assert from "node:assert/strict";
// The service reads OMNIROUTE_OLLAMA_API_USAGE_URL at module import time, so the
// stub URL must be set before ANY module that (transitively) loads
// opencodeOllamaUsage.ts — including usage.ts below, which statically imports it.
// Dynamic imports are required because static imports would hoist above this stub.
const STUB_USAGE_URL = "https://stub.invalid/api/usage";
const originalUsageUrl = process.env.OMNIROUTE_OLLAMA_API_USAGE_URL;
process.env.OMNIROUTE_OLLAMA_API_USAGE_URL = STUB_USAGE_URL;

const usage = await import("../../open-sse/services/usage.ts");
const { USAGE_SUPPORTED_PROVIDERS } = await import("../../src/shared/constants/providers.ts");
if (originalUsageUrl === undefined) delete process.env.OMNIROUTE_OLLAMA_API_USAGE_URL;

test("USAGE_SUPPORTED_PROVIDERS includes ollama-cloud", () => {
  assert.ok(
    (USAGE_SUPPORTED_PROVIDERS as string[]).includes("ollama-cloud"),
    "ollama-cloud must be in the usage-supported providers allowlist"
  );
});

test("USAGE_FETCHER_PROVIDERS includes ollama-cloud (#7026)", () => {
  // getUsageForProvider's switch handles `case "ollama-cloud"`, and the array's doc comment
  // requires it to stay in sync with that switch. If it drifts, registerGenericQuotaFetchers
  // never registers a preflight quota fetcher for ollama-cloud even though the scraper exists.
  assert.ok(
    (usage.USAGE_FETCHER_PROVIDERS as readonly string[]).includes("ollama-cloud"),
    "ollama-cloud is handled by getUsageForProvider's switch and must be listed in USAGE_FETCHER_PROVIDERS"
  );
});
const { getOllamaCloudUsage } = await import("../../open-sse/services/opencodeOllamaUsage.ts");
type UsageResult = {
  message?: string;
  plan?: string;
  quotas?: Record<string, {
    used: number;
    total: number;
    remaining: number;
    remainingPercentage: number;
    details?: Array<{ name: string; used: number }>;
  }>;
};

type CapturedRequest = {
  url: string;
  headers: Headers;
  redirect: RequestRedirect | undefined;
};

function stubFetch(response: Response): {
  restore: () => void;
  requests: CapturedRequest[];
} {
  const originalFetch = globalThis.fetch;
  const requests: CapturedRequest[] = [];
  globalThis.fetch = async (input, init) => {
    requests.push({
      url: String(input),
      headers: new Headers(init?.headers as HeadersInit | undefined),
      redirect: init?.redirect,
    });
    return response;
  };
  return { restore: () => (globalThis.fetch = originalFetch), requests };
}

test("getOllamaCloudUsage returns a helpful message when no API key is set", async () => {
  const { restore, requests } = stubFetch(new Response("unexpected", { status: 500 }));
  try {
    for (const apiKey of [undefined, "", "   "]) {
      const result = (await getOllamaCloudUsage(apiKey)) as UsageResult;
      assert.match(result.message ?? "", /API key/);
      assert.match(result.message ?? "", /Ollama Cloud/);
    }
    assert.equal(requests.length, 0, "no fetch must run without an API key");
  } finally {
    restore();
  }
});

test("getOllamaCloudUsage sends a Bearer request to the /api/usage endpoint", async () => {
  const { restore, requests } = stubFetch(
    new Response(JSON.stringify({ limits: { monthly: { usage: 0.5, models: [] } } }), {
      status: 200,
      headers: { "content-type": "application/json" },
    })
  );
  try {
    const result = (await getOllamaCloudUsage("test-key")) as UsageResult;
    assert.equal(requests.length, 1);
    assert.equal(requests[0].url, STUB_USAGE_URL, "must call the retained usage URL env target");
    assert.equal(requests[0].headers.get("Authorization"), "Bearer test-key");
    assert.equal(requests[0].headers.get("Accept"), "application/json");
    assert.equal(requests[0].redirect, "manual");
    assert.equal(result.plan, "Ollama Cloud");
    assert.equal(result.quotas!.monthly.used, 50);
    assert.equal(result.quotas!.monthly.total, 100);
    assert.equal(result.quotas!.monthly.remaining, 50);
    assert.equal(result.quotas!.monthly.remainingPercentage, 50);
  } finally {
    restore();
  }
});

test("getOllamaCloudUsage parses fractions as percents and clamps at 100", async () => {
  const cases: Array<{ usage: number; expected: number | null }> = [
    { usage: 0, expected: 0 },
    { usage: 0.37, expected: 37 },
    { usage: 37, expected: 37 }, // percent values pass through
    { usage: 150, expected: 100 }, // clamped at 100
    { usage: -1, expected: null }, // negative is invalid -> unavailable
  ];
  for (const { usage, expected } of cases) {
    const { restore } = stubFetch(
      new Response(JSON.stringify({ limits: { monthly: { usage, models: [] } } }), {
        status: 200,
        headers: { "content-type": "application/json" },
      })
    );
    try {
      const result = (await getOllamaCloudUsage("test-key")) as UsageResult;
      if (expected === null) {
        assert.match(result.message ?? "", /unavailable/);
      } else {
        assert.equal(result.quotas!.monthly.used, expected, `usage=${usage}`);
        assert.equal(result.quotas!.monthly.remaining, 100 - expected);
      }
    } finally {
      restore();
    }
  }
});

test("getOllamaCloudUsage maps limits.monthly.models into quota details", async () => {
  const { restore } = stubFetch(
    new Response(
      JSON.stringify({
        limits: {
          monthly: {
            usage: 0.25,
            models: [
              { name: "gpt-oss:20b", request_count: 12 },
              { name: "", request_count: 99 }, // unnamed rows are dropped
            ],
          },
        },
      }),
      { status: 200, headers: { "content-type": "application/json" } }
    )
  );
  try {
    const result = (await getOllamaCloudUsage("test-key")) as UsageResult;
    assert.deepEqual(result.quotas!.monthly.details, [{ name: "gpt-oss:20b", used: 12 }]);
  } finally {
    restore();
  }
});

test("getOllamaCloudUsage reports rejected API keys on 401/403", async () => {
  for (const status of [401, 403]) {
    const { restore } = stubFetch(new Response("denied", { status }));
    try {
      const result = (await getOllamaCloudUsage("test-key")) as UsageResult;
      assert.match(result.message ?? "", new RegExp(`API key rejected \\(${status}\\)`));
      assert.equal(result.quotas, undefined);
    } finally {
      restore();
    }
  }
});

test("getOllamaCloudUsage reports a redirect to sign-in", async () => {
  const { restore } = stubFetch(
    new Response(null, { status: 302, headers: { location: "https://ollama.com/signin" } })
  );
  try {
    const result = (await getOllamaCloudUsage("expired-key")) as UsageResult;
    assert.match(result.message ?? "", /redirect to sign-in/);
    assert.equal(result.quotas, undefined);
  } finally {
    restore();
  }
});

test("getOllamaCloudUsage errors on non-JSON and HTTP failures", async () => {
  {
    const { restore } = stubFetch(
      new Response("<html>not json</html>", {
        status: 200,
        headers: { "content-type": "text/html" },
      })
    );
    try {
      const result = (await getOllamaCloudUsage("test-key")) as UsageResult;
      assert.match(result.message ?? "", /non-JSON/);
      assert.equal(result.quotas, undefined);
    } finally {
      restore();
    }
  }
  {
    const { restore } = stubFetch(new Response("boom", { status: 500 }));
    try {
      const result = (await getOllamaCloudUsage("test-key")) as UsageResult;
      assert.match(result.message ?? "", /usage API error \(500\)/);
    } finally {
      restore();
    }
  }
});
