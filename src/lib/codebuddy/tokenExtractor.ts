import { readFile } from "fs/promises";
import { homedir, platform } from "os";
import { join } from "path";

export interface CodeBuddyAutoImportResult {
  found: boolean;
  accessToken?: string;
  refreshToken?: string;
  expiresIn?: number;
  expiresAt?: number;
  nickname?: string;
  source?: string;
  error?: string;
}

function getWorkBuddyAuthPaths(): string[] {
  const home = homedir();
  const os = platform();

  if (os === "win32") {
    const appdata = process.env.APPDATA || join(home, "AppData", "Roaming");
    return [
      join(appdata, "CodeBuddyExtension", "Data", "Public", "auth", "workbuddy-desktop-ai.info"),
      join(
        home,
        ".config",
        "CodeBuddyExtension",
        "Data",
        "Public",
        "auth",
        "workbuddy-desktop-ai.info"
      ),
    ];
  }

  if (os === "darwin") {
    return [
      join(
        home,
        "Library",
        "Application Support",
        "CodeBuddyExtension",
        "Data",
        "Public",
        "auth",
        "workbuddy-desktop-ai.info"
      ),
      join(
        home,
        ".config",
        "CodeBuddyExtension",
        "Data",
        "Public",
        "auth",
        "workbuddy-desktop-ai.info"
      ),
    ];
  }

  // Linux / BSD
  return [
    join(
      home,
      ".config",
      "CodeBuddyExtension",
      "Data",
      "Public",
      "auth",
      "workbuddy-desktop-ai.info"
    ),
    join(
      home,
      ".local",
      "share",
      "CodeBuddyExtension",
      "Data",
      "Public",
      "auth",
      "workbuddy-desktop-ai.info"
    ),
  ];
}

export async function tryWorkBuddyDesktopAuth(): Promise<CodeBuddyAutoImportResult> {
  const candidatePaths = getWorkBuddyAuthPaths();

  for (const filePath of candidatePaths) {
    try {
      const content = await readFile(filePath, "utf-8");
      const data = JSON.parse(content);
      const auth = data?.auth;

      if (auth?.accessToken) {
        const now = Date.now();
        const expiresAt = typeof auth.expiresAt === "number" ? auth.expiresAt : 0;
        const expiresIn = expiresAt > now ? Math.floor((expiresAt - now) / 1000) : 86400;

        return {
          found: true,
          accessToken: auth.accessToken,
          refreshToken: auth.refreshToken || "",
          expiresIn,
          expiresAt,
          nickname: data?.account?.nickname || data?.account?.uid,
          source: "WorkBuddy Desktop",
        };
      }
    } catch {
      // Continue to next candidate
    }
  }

  return {
    found: false,
    error: "No active WorkBuddy credentials found in local desktop storage.",
  };
}
