import { describe, it } from "node:test";
import assert from "node:assert/strict";
import plugin from "../src/index.js";

/**
 * Strict fallback (re-anchored): the pinned host sources cited in the plan
 * (`packages/plugin/...`, `packages/core/...`) do not exist in this repo
 * (`ls packages` → `browser-pool` only), and no `includeUsage` marking is
 * proven anywhere outside node_modules. The repo-verifiable facts are:
 * (a) the host mock in `gemini-language.test.ts` mounts a callable `sdk`
 *     domain next to `language` — the `sdk` domain exists on the host;
 * (b) `@opencode-ai/plugin 1.18.29` is the pinned contract reference
 *     (`package.json`), its `sdk`-event option shape is UNKNOWN here.
 * Consequence: no options-only marking is proven → strict fallback: register
 * the hook (domain exists, probed at runtime) and record the observation in
 * `options` only; the pure telemetry core stays unported and unimported.
 */

interface SdkInput {
  model: { id: string; providerID: string };
  package: string;
  options: Record<string, unknown>;
}

function hostCtx(opts: {
  telemetry?: boolean;
  withAisdk?: boolean;
  sdkImpl?: (cb: (input: SdkInput) => void | Promise<void>) => Promise<{ dispose: () => Promise<void> }>;
}): { ctx: Record<string, unknown>; sdkCallbacks: Array<(input: SdkInput) => void | Promise<void>> } {
  const sdkCallbacks: Array<(input: SdkInput) => void | Promise<void>> = [];
  const registration = Promise.resolve({ dispose: async () => {} });
  const options: Record<string, unknown> = {
    baseURL: "https://gw.example.com",
    providerId: "omni",
    apiKey: "k",
  };
  if (opts.telemetry !== undefined) options["telemetry"] = opts.telemetry;
  const ctx: Record<string, unknown> = {
    options,
    catalog: { transform: () => registration, reload: async () => {} },
    integration: { transform: () => registration },
  };
  if (opts.withAisdk !== false) {
    ctx["aisdk"] = {
      language: () => registration,
      sdk:
        opts.sdkImpl ??
        ((cb: (input: SdkInput) => void | Promise<void>) => {
          sdkCallbacks.push(cb);
          return registration;
        }),
    };
  }
  return { ctx, sdkCallbacks };
}

async function setupQuiet(ctx: Record<string, unknown>): Promise<void> {
  const warn = console.warn;
  const log = console.log;
  console.warn = () => {};
  console.log = () => {};
  try {
    await (plugin as unknown as { setup: (c: unknown) => Promise<void> }).setup(ctx);
  } finally {
    console.warn = warn;
    console.log = log;
  }
}

describe("aisdk.sdk telemetry hook (parity, option off by default)", () => {
  it("an older host without the aisdk domain still loads (catalog only)", async () => {
    const { ctx } = hostCtx({ telemetry: true, withAisdk: false });
    await setupQuiet(ctx);
  });

  it("registers nothing when the option is off (default)", async () => {
    const { ctx, sdkCallbacks } = hostCtx({});
    await setupQuiet(ctx);
    assert.equal(sdkCallbacks.length, 0, "telemetry off must not touch aisdk.sdk");
  });

  it("registers the hook when the option is on and the domain exists", async () => {
    const { ctx, sdkCallbacks } = hostCtx({ telemetry: true });
    await setupQuiet(ctx);
    assert.equal(sdkCallbacks.length, 1, "telemetry on must register aisdk.sdk");
  });

  it("ignores models from other providers and marks only its own (options-only, no fetch)", async () => {
    const { ctx, sdkCallbacks } = hostCtx({ telemetry: true });
    await setupQuiet(ctx);
    assert.equal(sdkCallbacks.length, 1);
    const foreign: SdkInput = {
      model: { id: "m", providerID: "some-other-provider" },
      package: "@ai-sdk/openai-compatible",
      options: {},
    };
    await sdkCallbacks[0]!(foreign);
    assert.deepEqual(foreign.options, {}, "another provider's options are untouched");
    const own: SdkInput = {
      model: { id: "m", providerID: "omni" },
      package: "@ai-sdk/openai-compatible",
      options: {},
    };
    await sdkCallbacks[0]!(own);
    assert.equal(
      own.options["telemetry"],
      true,
      "own models carry an options-only telemetry mark, never a wrapped fetch"
    );
  });

  it("a host that refuses the sdk hook still keeps its catalog", async () => {
    const { ctx } = hostCtx({
      telemetry: true,
      sdkImpl: () => {
        throw new Error("refused");
      },
    });
    await setupQuiet(ctx);
  });
});
