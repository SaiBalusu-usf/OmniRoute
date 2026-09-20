// @ts-nocheck
import { runWithProxyContext } from "../../../utils/proxyFetch.ts";
import type { RefreshLogger } from "../shared.ts";

/**
 * CodeBuddy / WorkBuddy AI (International) token refresh — POST /v2/plugin/auth/token/refresh
 * with the refresh token carried in the X-Refresh-Token header.
 */
export async function refreshCodebuddyToken(
  refreshToken: string,
  log: RefreshLogger,
  proxyConfig: unknown = null
) {
  if (!refreshToken) return null;
  const { CODEBUDDY_CONFIG } = await import("@/lib/oauth/constants/oauth");
  const oauth = CODEBUDDY_CONFIG;
  try {
    const response = await runWithProxyContext(proxyConfig, () =>
      fetch(oauth.refreshUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": oauth.userAgent,
          "X-Requested-With": "XMLHttpRequest",
          "X-Domain": "www.codebuddy.ai",
          "X-Refresh-Token": refreshToken,
          "X-Auth-Refresh-Source": "plugin",
          "X-Product": "SaaS",
        },
        body: "{}",
      })
    );

    const tryDesktopFallback = async () => {
      try {
        const { tryWorkBuddyDesktopAuth } = await import("@/lib/codebuddy/tokenExtractor");
        const desktopAuth = await tryWorkBuddyDesktopAuth();
        if (desktopAuth.found && desktopAuth.accessToken) {
          log?.info?.("TOKEN_REFRESH", "Recovered fresh CodeBuddy token from local desktop auth", {
            nickname: desktopAuth.nickname,
            expiresIn: desktopAuth.expiresIn,
          });
          return {
            accessToken: desktopAuth.accessToken,
            refreshToken: desktopAuth.refreshToken || refreshToken,
            expiresIn: desktopAuth.expiresIn,
          };
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        log?.warn?.("TOKEN_REFRESH", `Local desktop auth fallback failed: ${msg}`);
      }
      return null;
    };

    if (!response.ok) {
      const errorText = await response.text();
      log?.error?.("TOKEN_REFRESH", "Failed to refresh CodeBuddy token", {
        status: response.status,
        error: errorText,
      });
      return await tryDesktopFallback();
    }

    const data = await response.json();
    if (data?.code !== 0 || !data?.data?.accessToken) {
      log?.error?.("TOKEN_REFRESH", "CodeBuddy token refresh returned no token", {
        code: data?.code,
        msg: data?.msg,
      });
      return await tryDesktopFallback();
    }

    log?.info?.("TOKEN_REFRESH", "Successfully refreshed CodeBuddy token", {
      hasNewAccessToken: !!data.data.accessToken,
      hasNewRefreshToken: !!data.data.refreshToken,
      expiresIn: data.data.expiresIn,
    });

    return {
      accessToken: data.data.accessToken,
      refreshToken: data.data.refreshToken || refreshToken,
      expiresIn: data.data.expiresIn,
    };
  } catch (error) {
    log?.error?.("TOKEN_REFRESH", `Network error refreshing CodeBuddy token: ${error?.message}`);
    return null;
  }
}

export default refreshCodebuddyToken;
