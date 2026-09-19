import { NextResponse } from "next/server";
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";
import { tryWorkBuddyDesktopAuth } from "@/lib/codebuddy/tokenExtractor";
import { createProviderConnection } from "@/models";

/**
 * GET /api/oauth/codebuddy/auto-import
 * Auto-detect and extract WorkBuddy AI (International) tokens from:
 *   ~/.config/CodeBuddyExtension/Data/Public/auth/workbuddy-desktop-ai.info
 * If ?save=true is provided, automatically persists or updates the connection.
 *
 * 🔒 Auth-guarded: requires JWT cookie or Bearer API key.
 */
export async function GET(request: Request) {
  const authError = await requireManagementAuth(request, { invalidApiKeyStatus: 401 });
  if (authError) return authError;

  const url = new URL(request.url);
  const shouldSave = url.searchParams.get("save") === "true";

  try {
    const result = await tryWorkBuddyDesktopAuth();
    if (!result.found) {
      return NextResponse.json({
        found: false,
        error: result.error || "No WorkBuddy desktop credentials found.",
      });
    }

    let connection: unknown = null;
    if (shouldSave) {
      connection = await createProviderConnection({
        provider: "codebuddy",
        authType: "oauth",
        name: result.nickname || "WorkBuddy AI",
        email: result.nickname || null,
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
        expiresAt: result.expiresAt ? new Date(result.expiresAt).toISOString() : null,
        status: "active",
      });
    }

    return NextResponse.json({
      found: true,
      saved: shouldSave,
      connection,
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
      expiresIn: result.expiresIn,
      expiresAt: result.expiresAt,
      nickname: result.nickname,
      source: result.source,
    });
  } catch (error) {
    console.error("WorkBuddy auto-import error:", error);
    return NextResponse.json({ found: false, error: "Internal server error" }, { status: 500 });
  }
}

/**
 * POST /api/oauth/codebuddy/auto-import
 * Auto-imports and creates/updates the WorkBuddy AI connection in OmniRoute.
 */
export async function POST(request: Request) {
  const authError = await requireManagementAuth(request, { invalidApiKeyStatus: 401 });
  if (authError) return authError;

  try {
    const result = await tryWorkBuddyDesktopAuth();
    if (!result.found) {
      return NextResponse.json(
        {
          success: false,
          error: result.error || "No WorkBuddy desktop credentials found.",
        },
        { status: 404 }
      );
    }

    const connection = await createProviderConnection({
      provider: "codebuddy",
      authType: "oauth",
      name: result.nickname || "WorkBuddy AI",
      email: result.nickname || null,
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
      expiresAt: result.expiresAt ? new Date(result.expiresAt).toISOString() : null,
      status: "active",
    });

    return NextResponse.json({
      success: true,
      found: true,
      connection,
    });
  } catch (error) {
    console.error("WorkBuddy auto-import error:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
