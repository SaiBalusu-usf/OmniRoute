import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";

test("browser-login runtime resolves an explicitly declared matching Playwright core", () => {
  const root = new URL("../../../", import.meta.url);
  const manifest = JSON.parse(readFileSync(new URL("package.json", root), "utf8"));
  assert.equal(manifest.dependencies["playwright-core"], manifest.dependencies.playwright);
  assert.ok(manifest.dependencies["playwright-core"]);
  const runtimeRequire = createRequire(
    new URL("open-sse/vendor/codex-chatgpt-web/browser-login.ts", root)
  );
  assert.equal(runtimeRequire("playwright-core").chromium.name(), "chromium");
});
