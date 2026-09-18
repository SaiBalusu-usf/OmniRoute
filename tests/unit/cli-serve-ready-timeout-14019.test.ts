import test from "node:test";
import assert from "node:assert/strict";

const fs = await import("node:fs");
const path = await import("node:path");

const servePath = path.resolve(import.meta.dirname, "../../bin/cli/commands/serve.mjs");
const serveSource = fs.readFileSync(servePath, "utf-8");

// Isolate the runWithSupervisor function body (it is a top-level function, not
// passed `opts`, unlike runServe). Bounded by the next top-level declaration.
const runWithSupervisorMatch = serveSource.match(
  /async function runWithSupervisor\([\s\S]*?\nexport function reportReadinessTimeout/
);

test("#14019: runWithSupervisor is present and isolated for inspection", () => {
  assert.ok(
    runWithSupervisorMatch,
    "expected to locate runWithSupervisor's full body in serve.mjs"
  );
});

test("#14019: runWithSupervisor destructures readyTimeout from its options parameter", () => {
  assert.match(
    serveSource,
    /async function runWithSupervisor\(\s*[\s\S]*?\{\s*trayReadyPort,\s*trayReadyToken,\s*readyTimeout\s*\}\s*=\s*\{\}/,
    "runWithSupervisor's options object parameter should destructure readyTimeout alongside trayReadyPort/trayReadyToken"
  );
});

test("#14019: runWithSupervisor never references the undefined `opts` binding", () => {
  const body = runWithSupervisorMatch[0];
  assert.ok(
    !/\bopts\.readyTimeout\b/.test(body),
    "runWithSupervisor has no `opts` parameter — referencing opts.readyTimeout inside it throws " +
      "a ReferenceError on every default `omniroute serve` run (regression: #14019)"
  );
  assert.match(
    body,
    /resolveReadyTimeoutMs\(\{\s*timeoutMs:\s*readyTimeout\s*\}\)/,
    "runWithSupervisor should resolve the ready timeout from its own destructured readyTimeout parameter"
  );
});

test("#14019: runServe threads its own opts.readyTimeout into the runWithSupervisor call", () => {
  assert.match(
    serveSource,
    /runWithSupervisor\([\s\S]*?\{\s*trayReadyPort:\s*opts\.trayReadyPort,\s*trayReadyToken:\s*opts\.trayReadyToken,\s*readyTimeout:\s*opts\.readyTimeout,?\s*\}/,
    "runServe should pass opts.readyTimeout through to runWithSupervisor's options object"
  );
});
