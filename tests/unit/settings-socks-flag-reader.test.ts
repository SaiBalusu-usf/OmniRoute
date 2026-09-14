import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { isSocks5ProxyEnabled } from "@omniroute/open-sse/utils/proxyDispatcher";

// The two settings routes must share the single flag reader instead of
// duplicating the opt-out formula. Static checks pin the two owned paths
// only — sibling sites (agent goal policy, outbound url guard, dashboard
// modal) carry the same list under distinct opt-in semantics, out of scope.
const ROUTES = ["src/app/api/settings/proxies/route.ts", "src/app/api/settings/proxy/route.ts"];

const FLAG_LIST = '["false", "0", "no", "off"]';

const MATRIX: Array<[string | undefined, boolean]> = [
  ["false", false],
  ["0", false],
  ["no", false],
  ["off", false],
  [" OFF ", false],
  ["False", false],
  [undefined, true],
];

test("flag reader honors the opt-out matrix (unset defaults ON)", () => {
  const saved: Record<string, string | undefined> = {
    ENABLE_SOCKS5_PROXY: process.env.ENABLE_SOCKS5_PROXY,
  };
  try {
    for (const [value, expected] of MATRIX) {
      if (value === undefined) {
        delete process.env.ENABLE_SOCKS5_PROXY;
      } else {
        process.env.ENABLE_SOCKS5_PROXY = value;
      }
      assert.equal(isSocks5ProxyEnabled(), expected, `value: ${String(value)}`);
    }
  } finally {
    if (saved.ENABLE_SOCKS5_PROXY === undefined) {
      delete process.env.ENABLE_SOCKS5_PROXY;
    } else {
      process.env.ENABLE_SOCKS5_PROXY = saved.ENABLE_SOCKS5_PROXY;
    }
  }
});

for (const route of ROUTES) {
  test(`${route} shares the flag reader (no local opt-out list)`, () => {
    const content = fs.readFileSync(route, "utf8");
    assert.ok(!content.includes(FLAG_LIST), `${route} must not duplicate the opt-out list`);
    assert.ok(content.includes("isSocks5ProxyEnabled"), `${route} must use the shared flag reader`);
  });
}
