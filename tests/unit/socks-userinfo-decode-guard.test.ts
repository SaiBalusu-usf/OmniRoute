import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { decodeUserinfo } from "../../src/shared/utils/decodeUserinfo.ts";
import { __getSocksOptionsForTest } from "../../open-sse/utils/proxyDispatcher.ts";

describe("decodeUserinfo helper", () => {
  it("falls back to the raw value when decoding throws", () => {
    assert.equal(decodeUserinfo("user%name"), "user%name");
  });

  it("decodes correctly encoded values as before", () => {
    assert.equal(decodeUserinfo("user%40name"), "user@name");
  });

  it("falls back to the raw password when it holds a literal percent", () => {
    assert.equal(decodeUserinfo("pa%ss"), "pa%ss");
  });
});

describe("socks userinfo percent-decoding guard", () => {
  it("keeps a literal percent in userinfo without throwing", () => {
    const opts = __getSocksOptionsForTest("socks5://user%name:pa%ss@host:1080");
    assert.equal(opts.userId, "user%name");
    assert.equal(opts.password, "pa%ss");
  });

  it("decodes correctly encoded userinfo as before", () => {
    const opts = __getSocksOptionsForTest("socks5://user%40name:pass@host:1080");
    assert.equal(opts.userId, "user@name");
  });
});
