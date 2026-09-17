import { existsSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { isAutostartEnabled } from "./autostart.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const MENU_INDEX = { STATUS: 0, DASHBOARD: 1, LOGS: 2, AUTOSTART: 3, QUIT: 4 };

export function isTraySupported() {
  const p = process.platform;
  if (!["darwin", "linux", "win32"].includes(p)) return false;
  if (p === "linux" && !process.env.DISPLAY && !process.env.WAYLAND_DISPLAY) return false;
  return true;
}

async function loadSystray2() {
  const { loadSystray } = await import("../runtime/trayRuntime.ts");
  return loadSystray();
}

function getIconBase64() {
  // systray2 expects an ICO payload on Windows; the PNG asset is used elsewhere.
  const iconPath = join(__dirname, process.platform === "win32" ? "icon.ico" : "icon.png");
  if (existsSync(iconPath)) return readFileSync(iconPath).toString("base64");
  return "";
}

export async function initSystrayUnix(
  { port, onQuit, onOpenDashboard, onShowLogs },
  loadCtor = loadSystray2
) {
  const SysTray = await loadCtor();
  if (!SysTray) return null;

  const autostartEnabled = isAutostartEnabled();
  const items = [
    { title: `OmniRoute  •  port ${port}`, tooltip: "Server running", enabled: false },
    { title: "Open Dashboard", enabled: true },
    { title: "Show Logs", enabled: true },
    {
      title: autostartEnabled ? "✓ Auto-start (click to disable)" : "Enable Auto-start",
      enabled: true,
    },
    { title: "Quit OmniRoute", enabled: true },
  ];

  let tray;
  try {
    tray = new SysTray({
      menu: {
        icon: getIconBase64(),
        isTemplateIcon: false,
        title: "",
        tooltip: `OmniRoute — port ${port}`,
        items,
      },
      debug: false,
      copyDir: false,
    });
  } catch {
    return null;
  }

  tray.onClick(async (action) => {
    if (action.seq_id === MENU_INDEX.DASHBOARD) {
      onOpenDashboard?.();
    } else if (action.seq_id === MENU_INDEX.LOGS) {
      onShowLogs?.();
    } else if (action.seq_id === MENU_INDEX.AUTOSTART) {
      const { enable, disable, isAutostartEnabled: isEnabled } = await import("./autostart.mjs");
      const wasOn = isEnabled();
      if (wasOn) disable();
      else enable();
      const nowOn = !wasOn;
      tray.sendAction({
        type: "update-item",
        item: {
          title: nowOn ? "✓ Auto-start (click to disable)" : "Enable Auto-start",
          enabled: true,
        },
        seq_id: MENU_INDEX.AUTOSTART,
      });
    } else if (action.seq_id === MENU_INDEX.QUIT) {
      onQuit?.();
    }
  });

  await tray.ready();

  return tray;
}

export function getSystrayChildPid(tray) {
  if (!tray) return null;
  try {
    const proc = tray._process || (typeof tray.process === "function" ? tray.process() : null);
    if (proc && typeof proc.pid === "number") return proc.pid;
  } catch {}
  return null;
}

export function killSystrayUnix(tray) {
  try {
    const pid = getSystrayChildPid(tray);
    if (pid) {
      try {
        process.kill(pid, "SIGKILL");
      } catch {}
    }
    tray.kill(false);
  } catch {}
}
