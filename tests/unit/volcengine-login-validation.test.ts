import test from "node:test";
import assert from "node:assert/strict";
import {
  volcengineLoginSchema,
  volcengineCodeSchema,
  volcengineIdentitySchema,
} from "../../src/shared/validation/schemas/volcengineLogin.ts";

test("login accepts manual mode and bounded phone sessions", () => {
  assert.ok(volcengineLoginSchema.safeParse({}).success);
  assert.ok(
    volcengineLoginSchema.safeParse({ phone: "+86 138-0000-0000", timeout: 300000 }).success
  );
});

test("login rejects malformed, non-object and unbounded input", () => {
  for (const input of [
    null,
    [],
    { phone: 1 },
    { phone: "x".repeat(65) },
    { timeout: -1 },
    { timeout: 0 },
    { timeout: Infinity },
    { timeout: 600001 },
    { timeout: "300000" },
  ]) {
    assert.equal(volcengineLoginSchema.safeParse(input).success, false);
  }
});

test("SMS submission requires a bounded string without numeric coercion", () => {
  assert.ok(
    volcengineCodeSchema.safeParse({ code: "001234", captcha: "abc", timeout: 90000 }).success
  );
  for (const input of [
    {},
    { code: 123456 },
    { code: {} },
    { code: "" },
    { code: "a".repeat(33) },
    { code: "123456", captcha: "a".repeat(129) },
    { code: "123456", timeout: 600001 },
  ]) {
    assert.equal(volcengineCodeSchema.safeParse(input).success, false);
  }
});

test("identity selection rejects coercible and non-integer indexes", () => {
  assert.ok(volcengineIdentitySchema.safeParse({ index: 0 }).success);
  for (const index of [null, false, "0", -1, 0.5, Infinity, Number.MAX_SAFE_INTEGER + 1]) {
    assert.equal(volcengineIdentitySchema.safeParse({ index }).success, false);
  }
});
