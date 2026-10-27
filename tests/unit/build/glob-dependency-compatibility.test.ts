import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const require = createRequire(import.meta.url);

test("legacy and coverage glob consumers retain compatible brace expansion", () => {
  type Matcher = (path: string, pattern: string) => boolean;
  const lock = JSON.parse(readFileSync(join(process.cwd(), "package-lock.json"), "utf8"));
  const consumers = Object.keys(lock.packages).filter((path) => path.endsWith("/minimatch"));
  assert.ok(consumers.length > 0, "the locked glob consumers must be exercised");
  for (const path of consumers) {
    assert.ok(path.startsWith("node_modules/") && !path.split("/").includes(".."));
    const module = require(join(process.cwd(), path)) as Matcher | { minimatch: Matcher };
    const match = typeof module === "function" ? module : module.minimatch;
    assert.equal(match("src/auth/login.ts", "src/{auth,api}/*.ts"), true);
    assert.equal(match("src/private/login.ts", "src/{auth,api}/*.ts"), false);
    assert.equal(match("src/api/request.ts", "src/{auth,api}/*.ts"), true);
  }
});

test("default coverage exclusions expand brace patterns without dependency API errors", () => {
  const TestExclude = require("test-exclude");
  const filter = new TestExclude();
  assert.equal(filter.shouldInstrument("src/lib/credentialBoundary.ts"), true);
  assert.equal(filter.shouldInstrument("tests/unit/example.test.ts"), false);
});
