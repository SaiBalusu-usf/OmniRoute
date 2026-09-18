# Decision Ledger - OmniRoute-reasoning-fix

## 2026-09-18 - OpenCode Zen Free-Tier Contract: PR #14013 & #14011 + 6-Tool Placeholder Injection

- **Decision:** Apply upstream PR #14013 (request contract for OpenCode Zen free tier) and PR #14011 (refusal classification), and configure `OPENCODE_FREE_TIER_PLACEHOLDER_TOOLS=glob,grep,read,edit,write,bash` in `~/.omniroute/.env`.
- **Reasoning:** OpenCode upstream Console (`/zen/v1`) enforces four strict conditions for free-tier models: `stream: true`, non-empty `tools` array declaring at least 6 recognized official OpenCode client tool names, canonical session IDs (`ses_...`), and versioned User-Agent (`opencode/<semver>`). Falling back to `_noop` failed with 403 because upstream validates tool names against client capabilities. Configuring the 6 proven official client tools allows bare requests to succeed with 200 OK while preserving tool observation learning.
- **Affected Paths:** `open-sse/executors/opencodeFreeTierContract.ts`, `open-sse/executors/opencodeToolObservation.ts`, `open-sse/utils/opencodeHeaders.ts`, `open-sse/executors/opencode.ts`, `open-sse/executors/opencodeAccountHealth.ts`, `open-sse/executors/opencodeGeoBlock.ts`, `open-sse/services/errorClassifier.ts`, `.env.example`, `~/.omniroute/.env`.
