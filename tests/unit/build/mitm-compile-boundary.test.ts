import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { mkdtemp, mkdir, writeFile, readFile, rm, readdir } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { buildMitm } from "../../../scripts/build/buildMitm.mjs";

const root = fileURLToPath(new URL("../../../", import.meta.url));

test("MITM packaging must not report success after copying uncompiled sources", () => {
  const script = readFileSync(
    new URL("../../../scripts/build/prepublish.ts", import.meta.url),
    "utf8"
  );
  assert.match(script, /await buildMitm\(ROOT, mitmDest\)/);
  assert.doesNotMatch(script, /MITM compile warning \(non-fatal\)/);
  assert.doesNotMatch(script, /cpSync\(mitmSrc, mitmDest, \{ recursive: true \}\)/);
});

test("compiled MITM utilities resolve aliases, redact tokens and preserve CJS shims", async () => {
  const staging = await mkdtemp(join(root, ".tmp-mitm-build-"));
  try {
    await buildMitm(root, staging);
    const { maskSecret } = await import(pathToFileURL(join(staging, "maskSecrets.js")).href);
    const { sanitizeHeaders } = await import(
      pathToFileURL(join(staging, "sanitizeHeaders.js")).href
    );
    assert.equal(maskSecret("Bearer fixture-token"), "Bearer ***");
    assert.equal(sanitizeHeaders({ "set-cookie": "session=fixture" })["set-cookie"], "[REDACTED]");
    assert.equal(
      await readFile(join(staging, "server.cjs"), "utf8"),
      await readFile(join(root, "src/mitm/server.cjs"), "utf8")
    );
    for (const name of await readdir(join(root, "src/mitm/_internal"))) {
      if (name.endsWith(".cjs"))
        assert.equal(
          await readFile(join(staging, "_internal", name), "utf8"),
          await readFile(join(root, "src/mitm/_internal", name), "utf8")
        );
    }
  } finally {
    await rm(staging, { recursive: true, force: true });
  }
});

test("unresolvable MITM imports stop packaging without a TypeScript fallback", async () => {
  const fixture = await mkdtemp(join(root, ".tmp-mitm-invalid-"));
  try {
    await mkdir(join(fixture, "src/mitm"), { recursive: true });
    await writeFile(join(fixture, "tsconfig.json"), "{}");
    await writeFile(join(fixture, "src/mitm/main.ts"), 'import "./missing-file";');
    await assert.rejects(buildMitm(fixture, join(fixture, "dist")), /Could not resolve/);
  } finally {
    await rm(fixture, { recursive: true, force: true });
  }
});
