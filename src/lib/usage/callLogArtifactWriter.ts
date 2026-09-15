import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { Worker } from "node:worker_threads";

import {
  ESTIMATE_SIZE_NODE_BUDGET,
  estimateSizeFastResult,
} from "@omniroute/open-sse/utils/estimateSize.ts";
import { isAutomatedTestProcess } from "@/shared/utils/testProcess";
import type { CallLogArtifact, CallLogArtifactWriteResult } from "./callLogArtifacts.ts";
import { parseFileSize } from "../logEnv.ts";

const MAX_QUEUED_JOBS = 128;
export const DEFAULT_MAX_QUEUED_BYTES = 64 * 1024 * 1024;
const IDLE_TIMEOUT_MS = 30_000;
const CLOSE_TIMEOUT_MS = 2_000;
const WARNING_INTERVAL_MS = 30_000;

type WorkerReply = {
  id: number;
  result: CallLogArtifactWriteResult | null;
};

type QueueItem = {
  id: number;
  artifact: CallLogArtifact;
  estimatedBytes: number;
  environment: {
    pipelineMaxSizeKb?: string;
    chatDebugFile?: string;
    appLogLevel?: string;
  };
  resolve: (result: CallLogArtifactWriteResult | null) => void;
};

let worker: Worker | null = null;
let active: QueueItem | null = null;
const queue: QueueItem[] = [];
let queuedBytes = 0;
let nextId = 1;
let idleTimer: NodeJS.Timeout | null = null;
let closing = false;
let closeWaiters: Array<() => void> = [];
let lastWarningAt = 0;

function fileExistsAtRuntime(candidate: string): boolean {
  // The worker is copied explicitly by the standalone/npm packaging policies.
  // Keep this runtime probe opaque to Next's build tracer so it does not expand
  // a variable filesystem expression into a repository-wide glob.
  return Reflect.apply(fs.existsSync, fs, [candidate]) as boolean;
}

type WorkerResolutionContext = {
  moduleDir?: string;
  cwd?: string;
  entryFile?: string | null;
  fileExists?: (candidate: string) => boolean;
};

export function resolveCallLogArtifactWorker(context: WorkerResolutionContext = {}): {
  workerFile: string;
  execArgv: string[];
} {
  const moduleDir = context.moduleDir ?? path.dirname(fileURLToPath(import.meta.url));
  const cwd = context.cwd ?? process.cwd();
  const entryFile = context.entryFile === undefined ? process.argv[1] : context.entryFile;
  const exists = context.fileExists ?? fileExistsAtRuntime;

  const moduleJs = path.join(moduleDir, "callLogArtifactWorker.js");
  if (exists(moduleJs)) return { workerFile: moduleJs, execArgv: [] };

  const entryJs = entryFile
    ? path.join(path.dirname(path.resolve(entryFile)), "src/lib/usage/callLogArtifactWorker.js")
    : null;
  if (entryJs && exists(entryJs)) return { workerFile: entryJs, execArgv: [] };

  const cwdJs = path.resolve(cwd, "src/lib/usage/callLogArtifactWorker.js");
  if (exists(cwdJs)) return { workerFile: cwdJs, execArgv: [] };

  const moduleTs = path.join(moduleDir, "callLogArtifactWorker.ts");
  if (exists(moduleTs)) {
    return { workerFile: moduleTs, execArgv: ["--import", "tsx/esm"] };
  }

  const cwdTs = path.resolve(cwd, "src/lib/usage/callLogArtifactWorker.ts");
  if (exists(cwdTs)) {
    return { workerFile: cwdTs, execArgv: ["--import", "tsx/esm"] };
  }

  return { workerFile: entryJs ?? cwdJs, execArgv: [] };
}

function getMaxQueuedBytes(): number {
  const raw = process.env.CALL_LOG_ARTIFACT_MAX_QUEUED_BYTES;
  if (!raw) return DEFAULT_MAX_QUEUED_BYTES;
  const parsed = parseFileSize(raw);
  return parsed > 0 ? parsed : DEFAULT_MAX_QUEUED_BYTES;
}

function clearIdleTimer(): void {
  if (!idleTimer) return;
  clearTimeout(idleTimer);
  idleTimer = null;
}

function terminateWorker(): void {
  const current = worker;
  worker = null;
  clearIdleTimer();
  if (current) void current.terminate().catch(() => {});
}

function notifyCloseWaiters(): void {
  if (active || queue.length > 0) return;
  const waiters = closeWaiters;
  closeWaiters = [];
  for (const resolve of waiters) resolve();
}

function scheduleIdleTermination(): void {
  clearIdleTimer();
  if (!worker || active || queue.length > 0) return;
  idleTimer = setTimeout(terminateWorker, IDLE_TIMEOUT_MS);
  idleTimer.unref?.();
}

function warnRateLimited(message: string): void {
  const now = Date.now();
  if (now - lastWarningAt < WARNING_INTERVAL_MS) return;
  lastWarningAt = now;
  console.warn(message);
}

function failOpen(warn = false): void {
  if (warn) warnRateLimited("[callLogs] Call-log artifact worker failed; detail omitted.");
  const failed = active ? [active, ...queue] : [...queue];
  active = null;
  queue.length = 0;
  queuedBytes = 0;
  terminateWorker();
  for (const item of failed) item.resolve(null);
  notifyCloseWaiters();
}

function ensureWorker(): Worker {
  if (worker) return worker;

  const { workerFile, execArgv } = resolveCallLogArtifactWorker();
  // Reflect.construct keeps Next/Turbopack from interpreting the runtime-selected
  // worker path as a build-time glob and tracing tens of thousands of unrelated files.
  const created = Reflect.construct(Worker, [pathToFileURL(workerFile), { execArgv }]) as Worker;
  worker = created;
  created.on("message", (reply: WorkerReply) => {
    if (!active || reply.id !== active.id) return;
    const completed = active;
    active = null;
    queuedBytes = Math.max(0, queuedBytes - completed.estimatedBytes);
    completed.resolve(reply.result);
    pump();
  });
  created.on("error", () => failOpen(true));
  created.on("messageerror", () => failOpen(true));
  created.on("exit", (code) => {
    if (worker !== created) return;
    worker = null;
    if (code !== 0 || active) failOpen(true);
  });
  return created;
}

function pump(): void {
  if (active) return;
  const next = queue.shift();
  if (!next) {
    notifyCloseWaiters();
    scheduleIdleTermination();
    return;
  }

  active = next;
  clearIdleTimer();
  try {
    ensureWorker().postMessage({
      id: next.id,
      artifact: next.artifact,
      environment: next.environment,
    });
  } catch {
    failOpen(true);
  }
}

export function writeCallArtifactAsync(
  artifact: CallLogArtifact
): Promise<CallLogArtifactWriteResult | null> {
  const maxQueuedBytes = getMaxQueuedBytes();
  let estimatedBytes: number;
  try {
    const estimate = estimateSizeFastResult(artifact, maxQueuedBytes);
    estimatedBytes =
      estimate.status === "node-budget"
        ? Math.max(estimate.bytes, ESTIMATE_SIZE_NODE_BUDGET)
        : estimate.bytes;
  } catch {
    warnRateLimited("[callLogs] Call-log artifact size estimation failed; detail omitted.");
    return Promise.resolve(null);
  }
  if (closing || queue.length >= MAX_QUEUED_JOBS || estimatedBytes > maxQueuedBytes - queuedBytes) {
    warnRateLimited("[callLogs] Call-log artifact queue unavailable; detail omitted.");
    return Promise.resolve(null);
  }

  queuedBytes += estimatedBytes;
  return new Promise((resolve) => {
    const item = {
      id: nextId++,
      artifact,
      estimatedBytes,
      environment: {
        pipelineMaxSizeKb: process.env.CALL_LOG_PIPELINE_MAX_SIZE_KB,
        chatDebugFile: process.env.CHAT_DEBUG_FILE,
        appLogLevel: process.env.APP_LOG_LEVEL,
      },
      resolve,
    };
    queue.push(item);
    pump();
  });
}

export async function closeCallLogArtifactWriter(timeoutMs = CLOSE_TIMEOUT_MS): Promise<void> {
  closing = true;
  try {
    if (!active && queue.length === 0) {
      terminateWorker();
      return;
    }

    if (timeoutMs <= 0) {
      failOpen();
      terminateWorker();
      return;
    }

    let timeout: NodeJS.Timeout | undefined;
    await Promise.race([
      new Promise<void>((resolve) => closeWaiters.push(resolve)),
      new Promise<void>((resolve) => {
        timeout = setTimeout(resolve, timeoutMs);
        timeout.unref?.();
      }),
    ]);
    if (timeout) clearTimeout(timeout);
    if (active || queue.length > 0) failOpen();
    terminateWorker();
  } finally {
    closing = false;
  }
}

export function resetCallLogArtifactWriterForTest(): void {
  if (!isAutomatedTestProcess()) return;
  failOpen();
  closing = false;
  lastWarningAt = 0;
}

export function getCallLogArtifactQueueStats() {
  return {
    queuedJobs: queue.length,
    activeJobs: active ? 1 : 0,
    queuedBytes,
    maxQueuedJobs: MAX_QUEUED_JOBS,
    maxQueuedBytes: getMaxQueuedBytes(),
    closing,
    hasActiveWorker: Boolean(worker),
  };
}
