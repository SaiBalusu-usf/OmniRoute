import { randomUUID } from "node:crypto";
import { CodeBuddyCnExecutor } from "./codebuddy-cn.ts";
import type { ProviderCredentials } from "./base.ts";
import type { KeyHealth } from "../services/apiKeyRotator.ts";

/**
 * CodeBuddyExecutor — talks to https://www.codebuddy.ai/v2/chat/completions
 *
 * Faithfully mimics the official WorkBuddy AI desktop application (v5.5.6) request protocol:
 * - Emits X-Trace-ID, X-Request-ID, X-Conversation-ID, X-Session-ID,
 *   X-Conversation-Request-ID, X-Conversation-Message-ID trace headers (clean 32-char hex UUIDs)
 * - Sets X-Product: "SaaS", X-IDE-Type: "Desktop", X-IDE-Name: "WorkBuddy",
 *   X-IDE-Version: "5.5.6", X-Product-Version: "5.5.6", X-Agent-Intent: "chat"
 * - Sets X-Model-ID with the bare model ID
 * - Carries x-codebuddy-request: "1" and x-requested-with: "XMLHttpRequest"
 */
export class CodeBuddyExecutor extends CodeBuddyCnExecutor {
  constructor() {
    super("codebuddy");
  }

  override buildHeaders(
    credentials: ProviderCredentials,
    stream = true,
    clientHeaders?: Record<string, string> | null,
    model?: string,
    health?: Record<string, KeyHealth>,
    body?: unknown
  ): Record<string, string> {
    const headers = super.buildHeaders(credentials, stream, clientHeaders, model, health, body);

    const generateHexId = (): string => randomUUID().replace(/-/g, "");
    const traceId =
      clientHeaders?.["x-trace-id"]?.replace(/-/g, "") ||
      clientHeaders?.["x-request-id"]?.replace(/-/g, "") ||
      generateHexId();
    const convId =
      clientHeaders?.["x-conversation-id"]?.replace(/-/g, "") ||
      clientHeaders?.["x-session-id"]?.replace(/-/g, "") ||
      generateHexId();

    const cleanModel = model
      ? model.replace(/^(?:codebuddy-cn|codebuddy|cbai|cbcn|workbuddy|wb)\//i, "")
      : undefined;

    headers["x-codebuddy-request"] = "1";
    headers["x-requested-with"] = "XMLHttpRequest";
    headers["X-Product"] = "SaaS";
    headers["X-IDE-Type"] = "Desktop";
    headers["X-IDE-Name"] = "WorkBuddy";
    headers["X-IDE-Version"] = "5.5.6";
    headers["X-Product-Version"] = "5.5.6";
    headers["X-Trace-ID"] = traceId;
    headers["X-Request-ID"] = traceId;
    headers["X-Conversation-ID"] = convId;
    headers["X-Session-ID"] = convId;
    headers["X-Conversation-Request-ID"] = traceId;
    headers["X-Conversation-Message-ID"] = traceId;
    headers["X-Agent-Intent"] = "chat";
    if (cleanModel) {
      headers["X-Model-ID"] = cleanModel;
    }

    return headers;
  }
}

export default CodeBuddyExecutor;
