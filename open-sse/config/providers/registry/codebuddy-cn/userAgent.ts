/**
 * Tencent CodeBuddy CN (copilot.tencent.com) CLI version string.
 *
 * Single source of truth, shared by OAuth (`src/lib/oauth/constants/oauth.ts`),
 * chat completions (`./index.ts`) and usage/quota probes. It MUST stay identical
 * across those surfaces — an auth request and a chat request carrying different
 * client fingerprints is exactly what Tencent's WAF flags as anomalous (#12702).
 *
 * Lives in its own dependency-free module (not `lib/oauth/constants/oauth.ts`)
 * so the registry entry can import it without pulling the oauth constants file,
 * which owns server-only edges (#13376 client-bundle compatibility).
 */
export const CODEBUDDY_CN_USER_AGENT = "CLI/2.108.1 CodeBuddy/2.108.1";
