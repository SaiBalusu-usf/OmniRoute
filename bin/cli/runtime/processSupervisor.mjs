import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { writePidFile, cleanupPidFile, killAllSubprocesses, isPidRunning } from "../utils/pid.mjs";
import {
  RESTART_RESET_MS,
  DEFAULT_MAX_RESTARTS,
  shouldExitInsteadOfRestart,
  computeRestartDelayMs,
  waitUntilPortFree,
} from "./supervisorPolicy.mjs";
import { buildNodeRuntimeArgs } from "../../../scripts/build/runtime-env.mjs";
import { stopProcessGracefully } from "../../../src/shared/platform/windowsProcess.ts";
import {
  isFatalInstrumentationHookFailure,
  formatAndroidInstrumentationFailureHint,
  isFatalStartupDiagnostic,
} from "../utils/ensureAndroidCacheDir.mjs";

const CRASH_LOG_LINES = 50;

const PACKAGE_ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..", "..");
export const BUN_PRELOAD_PATH = join(PACKAGE_ROOT, "open-sse", "utils", "setupPolyfill.ts");

export function buildServerSpawnArgs(serverPath, memoryLimit, env = process.env) {
  return process.versions.bun
    ? ["--preload", BUN_PRELOAD_PATH, serverPath]
    : buildNodeRuntimeArgs(env, memoryLimit, serverPath);
}

export class ServerSupervisor {
  constructor({
    serverPath,
    env,
    maxRestarts = DEFAULT_MAX_RESTARTS,
    memoryLimit = 512,
    onCrashCallback,
  }) {
    this.serverPath = serverPath;
    this.env = env;
    this.maxRestarts = maxRestarts;
    this.memoryLimit = memoryLimit;
    this.onCrashCallback = onCrashCallback;
    this.restartCount = 0;
    this.startedAt = 0;
    this.crashLog = [];
    this.child = null;
    this.isShuttingDown = false;
    this.instrumentationFailureHintPrinted = false;
    this.fatalStartupDiagnosticPrinted = false;
  }

  start() {
    this.startedAt = Date.now();
    this.crashLog = [];
    this.instrumentationFailureHintPrinted = false;
    this.fatalStartupDiagnosticPrinted = false;

    const showLog = process.env.OMNIROUTE_SHOW_LOG === "1";
    this.child = spawn(process.execPath, buildServerSpawnArgs(this.serverPath, this.memoryLimit), {
      cwd: dirname(this.serverPath),
      env: this.env,
      stdio: showLog ? "inherit" : ["ignore", "pipe", "pipe"],
      // Tray mode has no visible console. Without this flag Windows creates a
      // console window for the supervised child and every restart can flash it.
      windowsHide: true,
    });

    writePidFile("server", this.child.pid);

    const bufferOutput = (data) => {
      const text = data.toString();
      const lines = text.split("\n").filter(Boolean);
      this.crashLog.push(...lines);
      if (this.crashLog.length > CRASH_LOG_LINES) {
        this.crashLog = this.crashLog.slice(-CRASH_LOG_LINES);
      }
      if (!this.instrumentationFailureHintPrinted && isFatalInstrumentationHookFailure(text)) {
        this.instrumentationFailureHintPrinted = true;
        process.stderr.write(
          formatAndroidInstrumentationFailureHint(
            this.env?.XDG_CACHE_HOME || process.env.XDG_CACHE_HOME
          )
        );
      }
      if (!this.fatalStartupDiagnosticPrinted && isFatalStartupDiagnostic(text)) {
        this.fatalStartupDiagnosticPrinted = true;
        process.stderr.write(text.endsWith("\n") ? text : `${text}\n`);
      }
    };

    if (this.child.stdout) this.child.stdout.on("data", bufferOutput);
    if (this.child.stderr) this.child.stderr.on("data", bufferOutput);

    this.child.on("error", (err) => this.handleExit(-1, err));
    this.child.on("exit", (code) => this.handleExit(code));

    return this.child;
  }

  handleExit(code, err) {
    const exitCode = typeof code === "number" ? code : null;
    cleanupPidFile("server");

    if (err) {
      const detail = [
        err.code && `code=${err.code}`,
        err.syscall && `syscall=${err.syscall}`,
        err.path && `path=${err.path}`,
        err.message,
      ]
        .filter(Boolean)
        .join(" ");
      const line = `⚠ Spawn error: ${detail || String(err)}`;
      console.error(line);
      this.crashLog.push(line);
    }

    if (shouldExitInsteadOfRestart(this.isShuttingDown)) {
      process.exit(exitCode ?? 0);
      return;
    }

    const aliveMs = Date.now() - this.startedAt;
    if (aliveMs >= RESTART_RESET_MS) this.restartCount = 0;

    if (this.restartCount >= this.maxRestarts) {
      console.error(`\n⚠ Server crashed ${this.maxRestarts} times in <30s.`);
      if (this.onCrashCallback) {
        const action = this.onCrashCallback(this.crashLog);
        if (action === "disable-mitm-and-retry") {
          console.error("⚠ Disabling MITM and retrying...\n");
          this.restartCount = 0;
          this.start();
          return;
        }
      }
      this.dumpCrashLog();
      process.exit(exitCode ?? 1);
      return;
    }

    this.restartCount++;
    const delay = computeRestartDelayMs(this.restartCount);
    console.error(
      `\n⚠ Server exited (code=${code ?? "?"}). Restarting in ${delay / 1000}s... (${this.restartCount}/${this.maxRestarts})`
    );
    if (this.crashLog.length) this.dumpCrashLog();
    setTimeout(async () => {
      await waitUntilPortFree(process.env.PORT || 20128);
      this.start();
    }, delay);
  }

  getRecentLog() {
    return [...this.crashLog];
  }

  dumpCrashLog() {
    console.error("\n--- Server crash log ---");
    this.crashLog.forEach((l) => console.error(l));
    console.error("--- End crash log ---\n");
  }

  stop() {
    this.isShuttingDown = true;
    if (this.child?.pid) {
      void stopProcessGracefully({ pid: this.child.pid, timeoutMs: 5000, isPidRunning });
    }
    killAllSubprocesses();
  }
}

export function detectMitmCrash(crashLog) {
  const text = crashLog.join("\n").toLowerCase();
  const signals = ["mitm", "tls socket", "certificate", "hosts", "eaccess"];
  return signals.filter((s) => text.includes(s)).length >= 2;
}
