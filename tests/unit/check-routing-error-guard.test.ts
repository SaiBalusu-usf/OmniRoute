import test from "node:test";
import assert from "node:assert/strict";

const { findSwallowedCatches, findVoidAsyncSites, findStaleVoidAsyncEntries } =
  await import("../../scripts/check/check-routing-error-guard.mjs");

function file(path, source) {
  return { path, source };
}

test("routing error guard: swallowed catch flags a bare catch block", () => {
  const violations = findSwallowedCatches([
    file(
      "open-sse/services/combo/example.ts",
      "try {\n  await work();\n} catch {\n  pending = fallback;\n}\n"
    ),
  ]);
  assert.equal(violations.length, 1);
  assert.match(violations[0], /example\.ts:\d+ :: swallowed-catch ::/);
});

test("routing error guard: swallowed catch passes a catch that rethrows", () => {
  const violations = findSwallowedCatches([
    file(
      "open-sse/services/combo/example.ts",
      "try {\n  await work();\n} catch (err) {\n  log.warn(err);\n  throw err;\n}\n"
    ),
  ]);
  assert.deepEqual(violations, []);
});

test("routing error guard: swallowed catch passes a catch with an English marker", () => {
  const violations = findSwallowedCatches([
    file(
      "open-sse/services/combo/example.ts",
      "try {\n  clone = result.clone();\n} catch {\n  // no-effect: clone fallback\n  clone = result;\n}\n"
    ),
  ]);
  assert.deepEqual(violations, []);
});

test("routing error guard: swallowed catch accepts a no-effect marker on read", () => {
  const violations = findSwallowedCatches([
    file(
      "open-sse/services/combo/example.ts",
      "try {\n  clone = result.clone();\n} catch {\n  // no-effect: legacy-intentional\n  clone = result;\n}\n"
    ),
  ]);
  assert.deepEqual(violations, []);
});

test("routing error guard: swallowed catch ignores chained promise catches", () => {
  const violations = findSwallowedCatches([
    file(
      "open-sse/services/combo/example.ts",
      "const quota = await fetchQuota(id).catch(() => null);\n"
    ),
  ]);
  assert.deepEqual(violations, []);
});

test("routing error guard: void async passes a listed site", () => {
  const source =
    "void (async () => {\n  try {\n    await persist();\n  } catch (err) {\n    log.warn(\n      // no-effect: best-effort persist\n      err\n    );\n  }\n})();\n// Failed to record Last Known Good Provider\n";
  const violations = findVoidAsyncSites(
    [file("open-sse/services/combo/example.ts", source)],
    [
      {
        file: "open-sse/services/combo/example.ts",
        anchor: "Failed to record Last Known Good Provider",
        reason: "success-path best-effort persist",
      },
    ]
  );
  assert.deepEqual(violations, []);
});

test("routing error guard: void async flags an unlisted site", () => {
  const violations = findVoidAsyncSites(
    [file("open-sse/services/combo/example.ts", "void (async () => {\n  await work();\n})();\n")],
    []
  );
  assert.equal(violations.length, 1);
  assert.match(violations[0], /example\.ts:\d+ :: void-async ::/);
});

test("routing error guard: void async flags an allowlist entry without a reason", () => {
  const source = "void (async () => {\n  await work();\n})();\n// some anchor\n";
  const violations = findVoidAsyncSites(
    [file("open-sse/services/combo/example.ts", source)],
    [{ file: "open-sse/services/combo/example.ts", anchor: "some anchor" }]
  );
  assert.equal(violations.length, 1);
  assert.match(violations[0], /reason/);
});

test("routing error guard: void async reports an orphan allowlist entry as stale", () => {
  const stale = findStaleVoidAsyncEntries(
    [
      {
        file: "open-sse/services/combo/removed.ts",
        anchor: "gone",
        reason: "leftover",
      },
    ],
    [file("open-sse/services/combo/example.ts", "const x = 1;\n")]
  );
  assert.equal(stale.length, 1);
  assert.match(stale[0], /removed\.ts/);
});

test("routing error guard: stale pin clear counts a failed clear and warns", async () => {
  const { clearStaleLKGP, getStaleLKGPClearStats, resetStaleLKGPClearStats } =
    await import("../../open-sse/services/combo.ts");
  resetStaleLKGPClearStats();
  const warnings = [];
  const throwing = async () => {
    throw new Error("clear down");
  };
  await clearStaleLKGP("combo", "ek", "id", { warn: (...args) => warnings.push(args) }, "COMBO", {
    clearLKGP: throwing,
  });
  assert.deepEqual(getStaleLKGPClearStats(), { attempted: 1, failed: 1 });
  assert.equal(warnings.length, 1);
});

test("routing error guard: stale pin clear counts a successful clear without warning", async () => {
  const { clearStaleLKGP, getStaleLKGPClearStats, resetStaleLKGPClearStats } =
    await import("../../open-sse/services/combo.ts");
  resetStaleLKGPClearStats();
  const warnings = [];
  await clearStaleLKGP("combo", "ek", "id", { warn: (...args) => warnings.push(args) }, "COMBO", {
    clearLKGP: async () => {},
  });
  assert.deepEqual(getStaleLKGPClearStats(), { attempted: 1, failed: 0 });
  assert.deepEqual(warnings, []);
});
