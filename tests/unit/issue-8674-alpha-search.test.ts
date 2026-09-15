import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

const ROUTE_PATH = path.join(process.cwd(), "src/app/api/v1/alpha/search/route.ts");

test("issue-8674: /v1/alpha/search route file exists", () => {
  assert.equal(
    existsSync(ROUTE_PATH),
    true,
    "route.ts should exist under src/app/api/v1/alpha/search/"
  );
});

test("issue-8674: route exports POST and OPTIONS, not GET", () => {
  const src = readFileSync(ROUTE_PATH, "utf8");
  assert.match(src, /export const POST = withInjectionGuard\(postHandler\)/);
  assert.match(src, /export async function OPTIONS\(\)/);
  assert.doesNotMatch(src, /export async function GET\(/);
});

test("issue-8674: schema validates search_query, open/click/find/screenshot, response_length", () => {
  const src = readFileSync(ROUTE_PATH, "utf8");
  assert.match(src, /codexAlphaSearchSchema/);
  assert.match(src, /search_query: z\.array\(codexSearchQueryItemSchema\)\.optional\(\)/);
  assert.match(src, /q: z\.string\(\)\.trim\(\)\.min\(1/);
  assert.match(src, /recency: z\.coerce\.number\(\)\.int\(\)\.positive\(\)\.optional\(\)/);
  assert.match(src, /domains: z\.array\(z\.string\(\)\.trim\(\)\.min\(1\)\)\.optional\(\)/);
  assert.match(src, /open: z\.array\(z\.unknown\(\)\)\.optional\(\)/);
  assert.match(src, /click: z\.array\(z\.unknown\(\)\)\.optional\(\)/);
  assert.match(src, /find: z\.array\(z\.unknown\(\)\)\.optional\(\)/);
  assert.match(src, /screenshot: z\.array\(z\.unknown\(\)\)\.optional\(\)/);
  assert.match(src, /response_length: z\.enum\(\["short", "medium", "long"\]\)\.optional\(\)/);
});

test("issue-8674: unsupported operations rejected with the documented message", () => {
  const src = readFileSync(ROUTE_PATH, "utf8");
  assert.match(src, /Unsupported operation for \/v1\/alpha\/search: \$\{key\}/);
  assert.match(src, /UNSUPPORTED_COMMAND_KEYS = \["open", "click", "find", "screenshot"\]/);
});

test("issue-8674: empty search_query rejected with the documented message", () => {
  const src = readFileSync(ROUTE_PATH, "utf8");
  assert.match(src, /commands\.search_query must contain at least one query/);
});

test("issue-8674: response_length maps to max_results per spec (short=3, medium=5, long=10)", () => {
  const src = readFileSync(ROUTE_PATH, "utf8");
  assert.match(src, /short:\s*3/);
  assert.match(src, /medium:\s*5/);
  assert.match(src, /long:\s*10/);
});

test("issue-8674: recency maps to time_range buckets (day/week/month/year)", () => {
  const src = readFileSync(ROUTE_PATH, "utf8");
  assert.match(src, /function recencyToTimeRange/);
  assert.match(src, /recency <= 1\) return "day"/);
  assert.match(src, /recency <= 7\) return "week"/);
  assert.match(src, /recency <= 31\) return "month"/);
  assert.match(src, /return "year"/);
});

test("issue-8674: success response shape includes encrypted_output, output, results, usage", () => {
  const src = readFileSync(ROUTE_PATH, "utf8");
  assert.match(src, /encrypted_output: null/);
  assert.match(src, /output,/);
  assert.match(src, /results: allResults/);
  assert.match(src, /usage: \{ queries_used: queriesUsed, search_cost_usd: searchCostUsd \}/);
});

test("issue-8674: auth goes through enforceApiKeyPolicy like /v1/search", () => {
  const src = readFileSync(ROUTE_PATH, "utf8");
  assert.match(src, /enforceApiKeyPolicy\(request, "search"\)/);
});

test("issue-8674: errors are sanitized through toJsonErrorPayload, never raw err.stack/message directly", () => {
  const src = readFileSync(ROUTE_PATH, "utf8");
  assert.match(src, /toJsonErrorPayload\(/);
  assert.doesNotMatch(src, /err\.stack/);
});
