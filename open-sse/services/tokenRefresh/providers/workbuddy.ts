// @ts-nocheck
// Mirrors tokenRefresh/providers/codebuddyCn.ts — same plugin-auth protocol
// shape, WorkBuddy's own host. See src/lib/oauth/constants/oauth.ts
// (WORKBUDDY_CONFIG) for the live verification notes.
import { runWithProxyContext } from "../../../utils/proxyFetch.ts";
import type { RefreshLogger } from "../shared.ts";

/**
 * WorkBuddy (Tencent) token refresh — POST /v2/plugin/auth/token/refresh with
 * the refresh token carried in the X-Refresh-Token header (not the body).
 *
 * Verified against the live gateway (2026-09-19): an empty body plus a malformed
 * X-Refresh-Token answers 12153 "refresh token failed: token format error", and
 * omitting the header answers 10001 "refreshToken is empty" — which is how the
 * carrier was confirmed. Success shape: { code: 0, data: { accessToken, ... } }.
 *
 * Separate from CodeBuddy CN on purpose: different host, different account, and
 * a credential from one is not valid on the other.
 */
export async function refreshWorkbuddyToken(
  refreshToken: string,
  log: RefreshLogger,
  proxyConfig: unknown = null
) {
  if (!refreshToken) return null;
  const { WORKBUDDY_CONFIG } = await import("@/lib/oauth/constants/oauth");
  const oauth = WORKBUDDY_CONFIG;
  try {
    const response = await runWithProxyContext(proxyConfig, () =>
      fetch(oauth.refreshUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Refresh-Token": refreshToken,
          "X-Product": "SaaS",
        },
        body: "{}",
      })
    );

    if (!response.ok) {
      const errorText = await response.text();
      log?.error?.("TOKEN_REFRESH", "Failed to refresh WorkBuddy token", {
        status: response.status,
        error: errorText,
      });
      return null;
    }

    const data = await response.json();
    if (data?.code !== 0 || !data?.data?.accessToken) {
      log?.error?.("TOKEN_REFRESH", "WorkBuddy token refresh returned no token", {
        code: data?.code,
        msg: data?.msg,
      });
      return null;
    }

    log?.info?.("TOKEN_REFRESH", "Successfully refreshed WorkBuddy token", {
      hasNewAccessToken: !!data.data.accessToken,
      hasNewRefreshToken: !!data.data.refreshToken,
      expiresIn: data.data.expiresIn,
    });

    return {
      accessToken: data.data.accessToken,
      // The gateway rotates the refresh token; keep the old one if it does not.
      refreshToken: data.data.refreshToken || refreshToken,
      expiresIn: data.data.expiresIn,
    };
  } catch (error) {
    log?.error?.("TOKEN_REFRESH", `Network error refreshing WorkBuddy token: ${error?.message}`);
    return null;
  }
}
