/**
 * Regression guard for the tinycms dashboard outage (2026-09-17/18).
 *
 * The TinyCMS signer's wasm-bindgen glue originally required browser globals,
 * so setupDomMocks() installed `global.window`/`global.document`/canvas
 * constructors as REAL Node globals and left them installed for the process
 * lifetime. With `window` defined, every `typeof window === 'undefined'`
 * check in the Next.js server flipped to browser-mode and
 * `getLocationOrigin()` crashed on the missing `window.location` — 500-ing
 * the entire dashboard until the next restart.
 *
 * The glue now resolves those objects to module-local shims, so the wasm runs
 * without touching globalThis at all. This test pins that invariant.
 */
import test from "node:test";
import assert from "node:assert/strict";

const DOM_GLOBALS = ["window", "document", "Window", "HTMLCanvasElement", "CanvasRenderingContext2D"] as const;

function snapshot(): Record<string, string> {
  const out: Record<string, string> = {};
  for (const k of DOM_GLOBALS) out[k] = typeof (globalThis as Record<string, unknown>)[k];
  return out;
}

test("TinyCMS wasm signs payloads without touching server globals", async () => {
  const before = snapshot();
  const signer = await import("../../open-sse/executors/tinycmsSigner.ts");
  await signer.initTinyCmsWasm();

  const payload = signer.generateSecurePayload(
    "R0000000-0000-0000-0000-000000000000",
    "1758240000",
    "11111111-2222-4333-8444-555555555555",
    "regression-guard-challenge",
    "203.0.113.9",
    2
  );

  assert.ok(payload, "generateSecurePayload must return a payload");
  assert.equal(typeof payload.signature, "string");
  assert.ok(payload.signature.length > 0, "signature must be non-empty");
  assert.equal(typeof payload.fingerprint, "string");
  assert.equal(payload.client_ip, "203.0.113.9");
  assert.ok(payload.pow && typeof payload.pow.hash === "string");
  assert.equal(typeof payload.v, "string");

  const after = snapshot();
  assert.deepEqual(
    after,
    before,
    "signer must not install window/document/canvas globals on globalThis"
  );
  assert.equal(after.window, "undefined", "globalThis.window must stay undefined on the server");
});
