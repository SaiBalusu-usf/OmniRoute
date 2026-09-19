import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { execFileSync } from "node:child_process";

import {
  collectBareSpecifiers,
  colocateWorkerDeps,
  packageRootOf,
} from "../../../scripts/build/colocate-standalone.mjs";

/**
 * Regression coverage for the standalone runtime-worker dependency gap.
 *
 * The workers are esbuild'd with `--packages=external`, so their npm imports stay
 * bare specifiers resolved from `<standalone>/node_modules` when the thread starts.
 * Next's file tracing cannot see a worker that is spawned dynamically, so a
 * dependency the main app does not ALSO import statically is simply absent — and the
 * worker throws at module load.
 *
 * Measured 2026-09-19 against every on-disk release: the compression worker was missing
 * EIGHT packages (`uuid`, `safe-regex`, `smol-toml`, `socks`, `xxhash-wasm`, `yazl`,
 * `@toon-format/toon`, `omniglyph`). The worker has existed since 2026-08-25 (04dba0460)
 * and NO release ever carried them, so the gap is structural.
 *
 * `uuid` is imported at module scope, so the thread died on every spawn. Note the
 * symptom changed on 2026-09-18 (55b6ca657, #13637): before that commit a worker
 * failure degraded to UNCOMPRESSED with no log line at all; after it the failure is
 * caught and retried in-process, so compression still happens — just on the main event
 * loop. "0 worker failures" in pre-Sep-18 logs is not health; the line did not exist yet.
 */

function makePackage(
  nodeModulesDir: string,
  name: string,
  body: string,
  deps?: Record<string, string>
) {
  const dir = join(nodeModulesDir, name);
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    join(dir, "package.json"),
    JSON.stringify({ name, version: "1.0.0", main: "index.js", dependencies: deps ?? {} })
  );
  writeFileSync(join(dir, "index.js"), body);
}

test("packageRootOf maps subpaths and scopes to the installable package name", () => {
  assert.equal(packageRootOf("uuid"), "uuid");
  assert.equal(packageRootOf("omniglyph/applicability"), "omniglyph");
  assert.equal(packageRootOf("@toon-format/toon"), "@toon-format/toon");
  assert.equal(packageRootOf("@scope/pkg/sub/deep"), "@scope/pkg");
});

test("collectBareSpecifiers keeps npm packages and drops builtins, node: and relative paths", () => {
  const root = mkdtempSync(join(tmpdir(), "worker-deps-specifiers-"));
  try {
    const bundle = join(root, "bundle.js");
    writeFileSync(
      bundle,
      [
        'import { v4 as uuidv4 } from "uuid";',
        'import { z } from "zod";',
        'import toon from "@toon-format/toon";',
        'import applicability from "omniglyph/applicability";',
        'import fs from "node:fs";',
        'import path from "path";',
        'import os from "os";',
        'import "./local.js";',
        'import "../up.js";',
        'const lazily = await import("yazl");',
        'export { thing } from "socks";',
        'import "smol-toml";',
      ].join("\n")
    );

    const specs = collectBareSpecifiers(bundle).sort();
    assert.deepEqual(
      specs,
      ["@toon-format/toon", "omniglyph", "smol-toml", "socks", "uuid", "yazl", "zod"],
      "every npm dependency is collected exactly once, with subpaths folded to the package root"
    );
    assert.ok(!specs.includes("fs"), "bare Node builtins are not treated as installable packages");
    assert.ok(!specs.includes("node:fs"), "node: prefixed builtins are dropped");
    assert.ok(!specs.includes("."), "relative imports are dropped");
  } finally {
    rmSync(root, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  }
});

test("colocateWorkerDeps copies missing packages AND their dependency closure", () => {
  const root = mkdtempSync(join(tmpdir(), "worker-deps-closure-"));
  try {
    const srcNm = join(root, "src-node_modules");
    const dstNm = join(root, "standalone", "node_modules");
    mkdirSync(srcNm, { recursive: true });
    mkdirSync(dstNm, { recursive: true });

    makePackage(srcNm, "needed", "module.exports = 1;", { inner: "1.0.0" });
    makePackage(srcNm, "inner", "module.exports = 2;");
    makePackage(srcNm, "already-traced", "module.exports = 3;");
    mkdirSync(join(dstNm, "already-traced"), { recursive: true });
    writeFileSync(
      join(dstNm, "already-traced", "package.json"),
      JSON.stringify({ name: "already-traced", main: "index.js" })
    );
    writeFileSync(join(dstNm, "already-traced", "index.js"), "module.exports = 'traced';");

    const bundle = join(root, "worker.js");
    writeFileSync(bundle, 'import a from "needed";\nimport b from "already-traced";\n');

    const missing = colocateWorkerDeps({
      workerBundles: [bundle],
      srcNodeModules: srcNm,
      dstNodeModules: dstNm,
    });

    assert.deepEqual(missing, ["needed"], "only the genuinely absent package is reported");
    assert.ok(existsSync(join(dstNm, "needed", "index.js")), "the missing package is copied");
    assert.ok(existsSync(join(dstNm, "inner", "index.js")), "its dependency closure is copied too");
    assert.equal(
      execFileSync(process.execPath, ["-e", 'process.stdout.write(require("already-traced"))'], {
        cwd: join(root, "standalone"),
        encoding: "utf8",
      }),
      "traced",
      "no-clobber: an existing traced copy is left intact"
    );
  } finally {
    rmSync(root, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  }
});

// End-to-end: the point of the fix is that the worker can actually LOAD. Before it,
// `node compressionWorker.js` died with ERR_MODULE_NOT_FOUND on its first bare import.
test("a co-located worker bundle loads its external dependency at runtime", () => {
  const root = mkdtempSync(join(tmpdir(), "worker-deps-e2e-"));
  try {
    const srcNm = join(root, "src-node_modules");
    const standalone = join(root, "standalone");
    const dstNm = join(standalone, "node_modules");
    mkdirSync(srcNm, { recursive: true });
    mkdirSync(dstNm, { recursive: true });

    makePackage(srcNm, "tiny-dep", 'module.exports = "DEP_LOADED";\n');

    const workerDir = join(standalone, "open-sse", "services", "compression");
    mkdirSync(workerDir, { recursive: true });
    const bundle = join(workerDir, "worker.js");
    writeFileSync(bundle, 'import dep from "tiny-dep";\nprocess.stdout.write(String(dep));\n');
    // The worker bundles are ESM; give them their scoped package.json as the build does.
    writeFileSync(join(workerDir, "package.json"), JSON.stringify({ type: "module" }));

    assert.throws(
      () => execFileSync(process.execPath, [bundle], { encoding: "utf8", stdio: "pipe" }),
      /ERR_MODULE_NOT_FOUND/,
      "control: without co-location the worker cannot resolve its dependency"
    );

    colocateWorkerDeps({
      workerBundles: [bundle],
      srcNodeModules: srcNm,
      dstNodeModules: dstNm,
    });

    assert.equal(
      execFileSync(process.execPath, [bundle], { encoding: "utf8" }),
      "DEP_LOADED",
      "after co-location the same bundle loads its dependency"
    );
  } finally {
    rmSync(root, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  }
});
