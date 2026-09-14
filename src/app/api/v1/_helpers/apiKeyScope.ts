import { getApiKeyMetadata } from "@/lib/db/apiKeys";
import { extractApiKey } from "@/sse/services/auth";
import { isDashboardSessionAuthenticated } from "@/shared/utils/apiAuth";

export interface ApiKeyRequestScope {
  apiKey: string | null;
  apiKeyId: string | null;
  apiKeyMetadata: Awaited<ReturnType<typeof getApiKeyMetadata>>;
  rejection: Response | null;
  isSessionAuth: boolean;
}

export async function getApiKeyRequestScope(request: Request): Promise<ApiKeyRequestScope> {
  const isSessionAuth = await isDashboardSessionAuthenticated(request);
  const apiKey = extractApiKey(request);
  if (!apiKey) {
    return { apiKey: null, apiKeyId: null, apiKeyMetadata: null, rejection: null, isSessionAuth };
  }

  const apiKeyMetadata = await getApiKeyMetadata(apiKey);
  return {
    apiKey,
    apiKeyId: apiKeyMetadata?.id || null,
    apiKeyMetadata,
    rejection: null,
    isSessionAuth,
  };
}

/**
 * Canonical per-record ownership check for API-key-scoped resources (batches,
 * files, etc.): the operator's own dashboard (session auth) may act on ANY
 * record, matching the sweep-scoping model in deleteCompletedBatches()
 * (GHSA-wvxc-jp3v-5mg5 -- session auth is the instance-wide operator, an API
 * key is scoped to its own records). A record with no owner (null/undefined
 * api_key_id, e.g. created before ownership tracking existed) is visible to
 * any caller.
 */
export function scopeCheck(
  scope: Pick<ApiKeyRequestScope, "isSessionAuth" | "apiKeyId">,
  recordApiKeyId: string | null | undefined
): boolean {
  if (scope.isSessionAuth) return true;
  if (recordApiKeyId === null || recordApiKeyId === undefined) return true;
  return recordApiKeyId === scope.apiKeyId;
}
