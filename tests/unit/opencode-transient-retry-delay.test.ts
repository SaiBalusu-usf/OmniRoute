import { describe, it, beforeEach, afterEach, before, after } from "node:test";
import assert from "node:assert";
import net from "node:net";
import { OpencodeExecutor } from "../../open-sse/executors/opencode.ts";
import { BaseExecutor } from "../../open-sse/executors/base.ts";
import type { ExecutorLog, ProviderCredentials } from "../../open-sse/executors/base.ts";
import {
  TRANSIENT_RETRY_DELAY_MS,
  transientRetryDelayMs,
  sleepAbortable,
} from "../../open-sse/executors/opencodeTransientFailure.ts";
import { resolveProxyForRequest } from "../../open-sse/utils/proxyFetch.ts";

const log: ExecutorLog = { debug() {}, info() {}, warn() {}, error() {} };

const FP_A = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const FP_B = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
const FP_C = "cccccccccccccccccccccccccccccccc";
const FP_D = "dddddddddddddddddddddddddddddddd";
const FP_E = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

let serverA: net.Server;
let serverB: net.Server;
let serverC: net.Server;
let serverD: net.Server;
let serverE: net.Server;
let portA = 0;
let portB = 0;
let portC = 0;
let portD = 0;
let portE = 0;

function listen(server: net.Server): Promise<number> {
  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => {
      resolve((server.address() as net.AddressInfo).port);
    });
  });
}

before(async () => {
  serverA = net.createServer((s) => s.destroy());
  serverB = net.createServer((s) => s.destroy());
  serverC = net.createServer((s) => s.destroy());
  serverD = net.createServer((s) => s.destroy());
  serverE = net.createServer((s) => s.destroy());
  portA = await listen(serverA);
  portB = await listen(serverB);
  portC = await listen(serverC);
  portD = await listen(serverD);
  portE = await listen(serverE);
});

after(() => {
  serverA?.close();
  serverB?.close();
  serverC?.close();
  serverD?.close();
  serverE?.close();
});

function portFor(fp: string): number {
  if (fp === FP_A) return portA;
  if (fp === FP_B) return portB;
  if (fp === FP_C) return portC;
  if (fp === FP_D) return portD;
  return portE;
}

function credentialsFor(fingerprints: string[]): ProviderCredentials {
  return {
    apiKey: null,
    accessToken: null,
    connectionId: "noauth",
    providerSpecificData: {
      fingerprints,
      accountProxies: fingerprints.map((fp) => ({
        fingerprint: fp,
        proxy: { type: "http", host: "127.0.0.1", port: portFor(fp) },
      })),
    },
  };
}

const GEO_BODY = JSON.stringify({
  error: { type: "RegionError", message: "This model is not available in your country." },
});
// Empty upstream rejection: 400 without an error field (see isEmptyUpstreamRejection).
const EMPTY_BODY =
  '{"id":"chatcmpl_44fn2g6e7kk","object":"chat.completion","created":1787419957,"model":"muse-spark-1.2-contributor-free","choices":[{"index":0,"message":{"role":"assistant"},"finish_reason":null}]}';

describe("opencode transient retry delay", () => {
  let originalFetch: typeof globalThis.fetch;
  let observed: string[];
  let dispatchAt: number[];

  beforeEach(() => {
    originalFetch = globalThis.fetch;
    observed = [];
    dispatchAt = [];
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  function installFetch(plan: Array<{ status: number; body?: string }>) {
    let call = 0;
    globalThis.fetch = (async (input: RequestInfo | URL) => {
      const url =
        typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url;
      const resolved = resolveProxyForRequest(url);
      observed.push(resolved.proxyUrl ? new URL(resolved.proxyUrl).port : "direct");
      dispatchAt.push(Date.now());
      const step = plan[Math.min(call, plan.length - 1)];
      call++;
      return new Response(step.body ?? JSON.stringify({ ok: step.status === 200 }), {
        status: step.status,
        headers: { "Content-Type": "application/json" },
      });
    }) as typeof globalThis.fetch;
  }

  function run(
    exec: OpencodeExecutor,
    creds: ProviderCredentials,
    signal: AbortSignal | null = null
  ) {
    return exec.execute({
      model: "muse-spark-1.3-contributor-free",
      body: { messages: [{ role: "user", content: "hi" }], stream: false },
      stream: false,
      signal,
      credentials: creds,
      log,
    });
  }

  // Wrap setTimeout to record armed delays (assert our own delay never appears,
  // regardless of ambient timers from the polyfill/test setup).
  async function collectDelays<T>(fn: () => Promise<T>): Promise<{ result: T; delays: number[] }> {
    const real = globalThis.setTimeout;
    const delays: number[] = [];
    (globalThis as Record<string, unknown>).setTimeout = ((
      ...args: [handler: () => void, ms?: number, ...rest: unknown[]]
    ) => {
      delays.push(typeof args[1] === "number" ? args[1] : 0);
      return (real as (...a: unknown[]) => unknown)(...args);
    }) as typeof setTimeout;
    try {
      const result = await fn();
      return { result, delays };
    } finally {
      globalThis.setTimeout = real;
    }
  }

  function ownSleeps(delays: number[]): number[] {
    return delays.filter((d) => d === TRANSIENT_RETRY_DELAY_MS);
  }

  describe("pure helpers", () => {
    it("delay matches the intra-URL retry pause by value, parameterized by attempt", () => {
      assert.strictEqual(TRANSIENT_RETRY_DELAY_MS, 1500);
      assert.strictEqual(transientRetryDelayMs(1), BaseExecutor.WAF_RETRY_CONFIG.delayMs);
      assert.strictEqual(transientRetryDelayMs(5), TRANSIENT_RETRY_DELAY_MS);
    });

    it("sleepAbortable resolves true after the delay without a signal", async () => {
      assert.strictEqual(await sleepAbortable(20), true);
    });

    it("sleepAbortable resolves false on mid-sleep abort and cleans up", async () => {
      const controller = new AbortController();
      const pending = sleepAbortable(10_000, controller.signal);
      setTimeout(() => controller.abort(), 20);
      assert.strictEqual(await pending, false);
      controller.abort(); // second abort must be a no-op, never a throw
    });

    it("sleepAbortable resolves false without arming a timer when already aborted", async () => {
      const controller = new AbortController();
      controller.abort();
      const { result, delays } = await collectDelays(() =>
        sleepAbortable(TRANSIENT_RETRY_DELAY_MS, controller.signal)
      );
      assert.strictEqual(result, false);
      assert.deepStrictEqual(ownSleeps(delays), []);
    });
  });

  describe("rotation loop", () => {
    it("attempt 0 pauses nothing (no delay armed on the first slot)", async () => {
      const exec = new OpencodeExecutor("opencode-zen");
      installFetch([{ status: 500 }, { status: 200 }]);
      const { result, delays } = await collectDelays(() =>
        run(exec, credentialsFor([FP_A, FP_B]))
      );
      assert.strictEqual((result as { response: Response }).response.status, 200);
      assert.deepStrictEqual(ownSleeps(delays), []);
    });

    it("first retry after a 500 is immediate (no pause before slot 2)", async () => {
      const exec = new OpencodeExecutor("opencode-zen");
      installFetch([{ status: 500 }, { status: 200 }]);
      const result = await run(exec, credentialsFor([FP_A, FP_B]));
      assert.strictEqual((result as { response: Response }).response.status, 200);
      assert.strictEqual(dispatchAt.length, 2);
      assert.ok(
        dispatchAt[1] - dispatchAt[0] < TRANSIENT_RETRY_DELAY_MS,
        `first retry must stay immediate, got ${dispatchAt[1] - dispatchAt[0]}ms`
      );
    });

    it("pauses before slot 3 after two consecutive 500s", async () => {
      const exec = new OpencodeExecutor("opencode-zen");
      installFetch([{ status: 500 }, { status: 500 }, { status: 200 }]);
      const result = await run(exec, credentialsFor([FP_A, FP_B, FP_C]));
      assert.strictEqual((result as { response: Response }).response.status, 200);
      assert.strictEqual(dispatchAt.length, 3);
      assert.ok(
        dispatchAt[1] - dispatchAt[0] < TRANSIENT_RETRY_DELAY_MS,
        `slot 2 must stay immediate, got ${dispatchAt[1] - dispatchAt[0]}ms`
      );
      assert.ok(
        dispatchAt[2] - dispatchAt[1] >= TRANSIENT_RETRY_DELAY_MS,
        `expected >= 1500ms pause before slot 3, got ${dispatchAt[2] - dispatchAt[1]}ms`
      );
    });

    it("persists the pause on a longer run (slots 3 and 4 both wait)", async () => {
      const exec = new OpencodeExecutor("opencode-zen");
      installFetch([{ status: 500 }, { status: 500 }, { status: 500 }, { status: 200 }]);
      const result = await run(exec, credentialsFor([FP_A, FP_B, FP_C, FP_D]));
      assert.strictEqual((result as { response: Response }).response.status, 200);
      assert.strictEqual(dispatchAt.length, 4);
      assert.ok(
        dispatchAt[2] - dispatchAt[1] >= TRANSIENT_RETRY_DELAY_MS,
        `slot 3 must wait, got ${dispatchAt[2] - dispatchAt[1]}ms`
      );
      assert.ok(
        dispatchAt[3] - dispatchAt[2] >= TRANSIENT_RETRY_DELAY_MS,
        `slot 4 must wait again, got ${dispatchAt[3] - dispatchAt[2]}ms`
      );
    });

    it("mixed consecutive transients (500 then empty-400) pause before slot 3", async () => {
      const exec = new OpencodeExecutor("opencode-zen");
      installFetch([{ status: 500 }, { status: 400, body: EMPTY_BODY }, { status: 200 }]);
      const result = await run(exec, credentialsFor([FP_A, FP_B, FP_C]));
      assert.strictEqual((result as { response: Response }).response.status, 200);
      assert.strictEqual(dispatchAt.length, 3);
      assert.ok(
        dispatchAt[2] - dispatchAt[1] >= TRANSIENT_RETRY_DELAY_MS,
        `mixed streak must pause, got ${dispatchAt[2] - dispatchAt[1]}ms`
      );
    });

    it("429 resets the streak, rebuilt streak pauses again (slot 5)", async () => {
      const exec = new OpencodeExecutor("opencode-zen");
      installFetch([
        { status: 500 },
        { status: 429 },
        { status: 500 },
        { status: 500 },
        { status: 200 },
      ]);
      const result = await run(exec, credentialsFor([FP_A, FP_B, FP_C, FP_D, FP_E]));
      assert.strictEqual((result as { response: Response }).response.status, 200);
      assert.strictEqual(dispatchAt.length, 5);
      for (const i of [1, 2, 3]) {
        assert.ok(
          dispatchAt[i] - dispatchAt[i - 1] < TRANSIENT_RETRY_DELAY_MS,
          `slots 2-4 stay immediate, gap ${i} got ${dispatchAt[i] - dispatchAt[i - 1]}ms`
        );
      }
      assert.ok(
        dispatchAt[4] - dispatchAt[3] >= TRANSIENT_RETRY_DELAY_MS,
        `rebuilt streak must pause before slot 5, got ${dispatchAt[4] - dispatchAt[3]}ms`
      );
    });

    it("abort mid-pause serves the last 500 with no further dispatch", async () => {
      const exec = new OpencodeExecutor("opencode-zen");
      installFetch([{ status: 500 }, { status: 500 }, { status: 200 }]);
      const controller = new AbortController();
      setTimeout(() => controller.abort(), 100);
      const startedAt = Date.now();
      const result = await run(
        exec,
        credentialsFor([FP_A, FP_B, FP_C]),
        controller.signal
      );
      const elapsed = Date.now() - startedAt;
      assert.strictEqual((result as { response: Response }).response.status, 500);
      assert.strictEqual(observed.length, 2, "no third dispatch after abort");
      assert.ok(elapsed < TRANSIENT_RETRY_DELAY_MS, `broke early (${elapsed}ms)`);
      const state = (exec as unknown as { accounts: Array<{ cooldownUntil: number }> }).accounts;
      for (const a of state) assert.strictEqual(a.cooldownUntil, 0, "no marking on abort");
    });

    it("pre-aborted signal pauses nothing and serves the last failure", async () => {
      const exec = new OpencodeExecutor("opencode-zen");
      installFetch([{ status: 500 }, { status: 500 }, { status: 200 }]);
      const controller = new AbortController();
      controller.abort();
      const { result, delays } = await collectDelays(() =>
        run(exec, credentialsFor([FP_A, FP_B, FP_C]), controller.signal)
      );
      // Slots 1-2 dispatch (streak builds), slot 3 sees the abort and breaks.
      assert.strictEqual((result as { response: Response }).response.status, 500);
      assert.strictEqual(observed.length, 2);
      assert.deepStrictEqual(ownSleeps(delays), []);
    });

    it("fast path never pauses", async () => {
      const exec = new OpencodeExecutor("opencode-zen");
      installFetch([{ status: 500 }]);
      const creds = credentialsFor([FP_A]);
      (creds.providerSpecificData as Record<string, unknown>).accountProxies = [];
      const { result, delays } = await collectDelays(() => run(exec, creds));
      assert.strictEqual((result as { response: Response }).response.status, 500);
      assert.strictEqual(observed.length, 1);
      assert.deepStrictEqual(ownSleeps(delays), []);
    });

    it("429 breaks the streak (no pause anywhere)", async () => {
      const exec = new OpencodeExecutor("opencode-zen");
      installFetch([{ status: 500 }, { status: 429 }, { status: 200 }]);
      const result = await run(exec, credentialsFor([FP_A, FP_B, FP_C]));
      assert.strictEqual((result as { response: Response }).response.status, 200);
      assert.strictEqual(dispatchAt.length, 3);
      for (let i = 1; i < dispatchAt.length; i++) {
        assert.ok(
          dispatchAt[i] - dispatchAt[i - 1] < TRANSIENT_RETRY_DELAY_MS,
          `429 breaks the streak, gap ${i} must not pause`
        );
      }
    });

    it("geo-403 keeps its timing and breaks the streak", async () => {
      assert.strictEqual(transientRetryDelayMs(1), BaseExecutor.WAF_RETRY_CONFIG.delayMs);
      const exec = new OpencodeExecutor("opencode-zen");
      installFetch([{ status: 500 }, { status: 403, body: GEO_BODY }, { status: 200 }]);
      const result = await run(exec, credentialsFor([FP_A, FP_B, FP_C]));
      assert.strictEqual((result as { response: Response }).response.status, 200);
      assert.strictEqual(dispatchAt.length, 3);
      for (let i = 1; i < dispatchAt.length; i++) {
        assert.ok(
          dispatchAt[i] - dispatchAt[i - 1] < TRANSIENT_RETRY_DELAY_MS,
          `geo-403 must not pause, gap ${i} got ${dispatchAt[i] - dispatchAt[i - 1]}ms`
        );
      }
    });
  });
});
