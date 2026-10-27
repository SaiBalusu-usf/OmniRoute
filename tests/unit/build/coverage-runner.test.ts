import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";
import { spawnSync } from "node:child_process";

const repoRoot = process.cwd();
const scripts = JSON.parse(readFileSync(join(repoRoot, "package.json"), "utf8")).scripts;

function exerciseCoverage(uncovered: boolean) {
  // Keep synthetic projects outside shared build output and inside the existing
  // test exclusion, including when this test runs under the full collector.
  const temporaryRoot = join(repoRoot, "tests", ".tmp", "coverage-runner");
  mkdirSync(temporaryRoot, { recursive: true });
  const fixture = mkdtempSync(join(temporaryRoot, "case-"));
  const write = (name: string, source: string) => {
    const destination = join(fixture, name);
    mkdirSync(resolve(destination, ".."), { recursive: true });
    writeFileSync(destination, source);
  };

  try {
    // Exercise the actual npm pipeline with tiny suites, without substituting
    // its collectors, coverage options, phase ordering or failure handling.
    write(
      "package.json",
      JSON.stringify({
        private: true,
        type: "module",
        scripts: Object.fromEntries(
          ["test:coverage", "test:coverage:runner", "test:unit:serial"].map((name) => [
            name,
            scripts[name],
          ])
        ),
      })
    );
    write("open-sse/utils/setupPolyfill.ts", "export {};\n");
    write("tests/_setup/isolateDataDir.ts", "export {};\n");

    for (const [phase, file, parent] of [
      ["main", "tests/unit/main.test.ts", "../../"],
      ["dashboard", "tests/unit/dashboard/dashboard.test.ts", "../../../"],
      ["serial", "tests/unit/serial/serial.test.ts", "../../../"],
    ]) {
      write(`phase-${phase}.mjs`, "export function exercised() { return 42; }\n");
      write(
        file,
        `import test from 'node:test';\nimport assert from 'node:assert/strict';\n` +
          `import { writeFileSync } from 'node:fs';\n` +
          `import { exercised } from '${parent}phase-${phase}.mjs';\n` +
          `test('${phase} fixture', () => { assert.equal(exercised(), 42); ` +
          `writeFileSync('${phase}.completed', 'yes'); });\n`
      );
    }
    if (uncovered) {
      write(
        "phase-main.mjs",
        "export function exercised() { return 42; }\n" +
          Array.from(
            { length: 40 },
            (_, index) => `export function uncovered${index}() {\n  return ${index};\n}\n`
          ).join("")
      );
    }
    // The main runner includes both nested TypeScript and mjs globs.
    write("tests/unit/build/nested.test.ts", "import 'node:test';\n");
    write("tests/unit/build/nested.test.mjs", "import 'node:test';\n");

    const environment = { ...process.env };
    delete environment.NODE_V8_COVERAGE;
    delete environment.NODE_TEST_CONTEXT;
    // An enclosing npm lifecycle must not redirect the synthetic project's
    // package selection or carry its configuration into the nested invocation.
    for (const key of Object.keys(environment)) {
      if (/^npm_/i.test(key)) delete environment[key];
    }
    const run = spawnSync("npm run test:coverage", {
      cwd: fixture,
      shell: true,
      env: environment,
      encoding: "utf8",
      timeout: 120_000,
      maxBuffer: 2 * 1024 * 1024,
    });
    assert.ifError(run.error);
    assert.ok(
      existsSync(join(fixture, "coverage", "coverage-summary.json")),
      `fixture coverage report missing (exit ${run.status}):\n${run.stdout}${run.stderr}`
    );
    const summary = JSON.parse(
      readFileSync(join(fixture, "coverage", "coverage-summary.json"), "utf8")
    );
    for (const phase of ["main", "dashboard", "serial"]) {
      assert.ok(existsSync(join(fixture, `${phase}.completed`)), run.stdout + run.stderr);
      assert.equal(readFileSync(join(fixture, `${phase}.completed`), "utf8"), "yes");
      const coverage = summary[join(fixture, `phase-${phase}.mjs`)];
      assert.ok(coverage, `${phase} phase coverage must survive subsequent phases`);
      assert.ok(coverage.functions.covered > 0, `${phase} function was actually covered`);
    }
    if (uncovered) {
      assert.equal(run.status, 1, "the real coverage threshold must still reject uncovered code");
      assert.ok(summary.total.functions.pct < 60);
      assert.match(run.stderr, /does not meet global threshold \(60%\)/);
    } else {
      assert.equal(run.status, 0, run.stderr);
    }
  } finally {
    const inside = relative(temporaryRoot, resolve(fixture));
    assert.ok(inside && inside !== ".." && !inside.startsWith(`..${sep}`));
    rmSync(fixture, { recursive: true, force: true });
  }
}

test("coverage retains main, dashboard and serial results", { timeout: 150_000 }, () => {
  exerciseCoverage(false);
});

test("combined coverage still enforces its existing thresholds", { timeout: 150_000 }, () => {
  exerciseCoverage(true);
});
