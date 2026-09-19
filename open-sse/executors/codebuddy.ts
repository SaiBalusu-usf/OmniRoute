import { CodeBuddyCnExecutor } from "./codebuddy-cn.ts";

/**
 * CodeBuddyExecutor — talks to https://www.codebuddy.ai/v2/chat/completions
 *
 * WorkBuddy AI (International) shares the same SSE streaming requirement,
 * reasoning parameters (reasoning_summary: "auto"), agent prompt sanitization,
 * and compact tool fallback as CodeBuddy CN.
 */
export class CodeBuddyExecutor extends CodeBuddyCnExecutor {
  constructor() {
    super("codebuddy");
  }
}

export default CodeBuddyExecutor;
