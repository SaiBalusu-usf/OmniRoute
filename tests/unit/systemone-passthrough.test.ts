import test from "node:test";
import assert from "node:assert/strict";

import { handleSystemOneProxy } from "../../open-sse/handlers/systemone.ts";
import {
  JEV_INPUT_USD_PER_MTOK,
  TYPESAFE_SYSTEMONE_URL,
} from "../../src/lib/providers/typesafe.ts";
import { computeCostFromPricing } from "../../src/lib/usage/costCalculator.ts";
import { getDefaultPricing } from "../../src/shared/constants/pricing.ts";

const REQUEST_BODY = {
  state: "Help! My payouts have been failing for 3 days.",
  model: "jev-latest",
  questions: {
    is_urgent: { type: "noul", instructions: "Does this convey urgency?" },
  },
};

const UPSTREAM_BODY = {
  model: "jev-1.13.0",
  answers: { is_urgent: { type: "noul", noul: 0.92 } },
  usage: { input_tokens: 1_000_000, output_tokens: 48_000 },
};

test("systemone proxy POSTs the original JSON to api.typesafe.ai with Bearer auth", async () => {
  const originalFetch = globalThis.fetch;
  let captured: { url: string; init: RequestInit } | null = null;
  globalThis.fetch = (async (url: string | URL | Request, init?: RequestInit) => {
    captured = { url: String(url), init: init || {} };
    return new Response(JSON.stringify(UPSTREAM_BODY), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }) as typeof fetch;

  try {
    const response = await handleSystemOneProxy({
      body: REQUEST_BODY,
      credentials: { apiKey: "ts-test-key", connectionId: "conn-ts-1" },
      saveCallLog: () => {},
    });
    assert.equal(response.status, 200);
    assert.ok(captured);
    assert.equal(captured.url, TYPESAFE_SYSTEMONE_URL);
    assert.equal(captured.init.method, "POST");
    const headers = captured.init.headers as Record<string, string>;
    assert.equal(headers.Authorization, "Bearer ts-test-key");
    assert.equal(captured.init.body, JSON.stringify(REQUEST_BODY));
    const json = (await response.json()) as typeof UPSTREAM_BODY;
    assert.equal(json.model, "jev-1.13.0");
    assert.equal(json.usage.input_tokens, 1_000_000);
    assert.equal(json.usage.output_tokens, 48_000);
    assert.equal(json.answers.is_urgent.noul, 0.92);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("systemone success logs the response model, input tokens, and input-only $0.042/Mtok cost", async () => {
  const originalFetch = globalThis.fetch;
  const logs: Array<Record<string, unknown>> = [];
  globalThis.fetch = (async () =>
    new Response(JSON.stringify(UPSTREAM_BODY), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })) as typeof fetch;

  try {
    await handleSystemOneProxy({
      body: REQUEST_BODY,
      credentials: { apiKey: "ts-test-key", connectionId: "conn-ts-1" },
      requestedModel: "jev-latest",
      saveCallLog: (entry) => {
        logs.push(entry as unknown as Record<string, unknown>);
      },
    });
    await Promise.resolve();
    assert.equal(logs.length, 1);
    const entry = logs[0];
    assert.equal(entry.model, "jev-1.13.0");
    assert.equal(entry.requestedModel, "jev-latest");
    assert.equal(entry.provider, "typesafe");
    assert.equal(entry.path, "/v1/systemone");
    const tokens = entry.tokens as { input_tokens: number; output_tokens: number };
    assert.equal(tokens.input_tokens, 1_000_000);
    assert.equal(tokens.output_tokens, 48_000);
    const expectedCost = 1_000_000 * (JEV_INPUT_USD_PER_MTOK / 1_000_000);
    assert.equal(entry.costUsd, expectedCost);
    assert.ok((entry.costUsd as number) > 0);
    const outputWouldAdd = 48_000 * (JEV_INPUT_USD_PER_MTOK / 1_000_000);
    assert.notEqual(entry.costUsd, expectedCost + outputWouldAdd);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("systemone default pricing is input-only so output tokens do not add cost", () => {
  const pricing = getDefaultPricing() as Record<
    string,
    Record<string, { input: number; output: number }>
  >;
  const row = pricing.typesafe["jev-1.13.0"];
  assert.equal(row.input, 0.042);
  assert.equal(row.output, 0);
  const cost = computeCostFromPricing(row, {
    input_tokens: 1_000_000,
    output_tokens: 50_000,
  });
  assert.equal(cost, 0.042);
});

test("systemone 429 returns upstream status and cools the credential using retry-after", async () => {
  const originalFetch = globalThis.fetch;
  const cooldownCalls: Array<{
    connectionId: string;
    status: number;
    headers: Headers | Record<string, string> | null | undefined;
  }> = [];
  globalThis.fetch = (async () =>
    new Response(JSON.stringify({ error: "Too Many Requests" }), {
      status: 429,
      headers: { "Content-Type": "application/json", "retry-after": "12" },
    })) as typeof fetch;

  try {
    const response = await handleSystemOneProxy({
      body: REQUEST_BODY,
      credentials: { apiKey: "ts-test-key", connectionId: "conn-ts-429" },
      saveCallLog: () => {},
      markAccountUnavailable: async (
        connectionId,
        status,
        _errorText,
        _provider,
        _model,
        _profile,
        options
      ) => {
        cooldownCalls.push({ connectionId, status, headers: options.headers });
      },
    });
    assert.equal(response.status, 429);
    const json = (await response.json()) as { error: string };
    assert.equal(json.error, "Too Many Requests");
    assert.equal(response.headers.get("retry-after"), "12");
    assert.equal(cooldownCalls.length, 1);
    assert.equal(cooldownCalls[0].connectionId, "conn-ts-429");
    assert.equal(cooldownCalls[0].status, 429);
    const headers = cooldownCalls[0].headers as Headers;
    assert.equal(headers.get("retry-after"), "12");
  } finally {
    globalThis.fetch = originalFetch;
  }
});
