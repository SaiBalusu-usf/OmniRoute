import { describe, it } from "node:test";
import assert from "node:assert/strict";

import {
  isAbsoluteHttpUrl,
  joinBaseUrlAndEndpoint,
  sanitizeCompatibleEndpoint,
} from "../../open-sse/utils/joinEndpointUrl.ts";
import { resolveCompatibleModelsUrl } from "../../src/app/api/providers/[id]/models/discovery/helpers.ts";

describe("joinBaseUrlAndEndpoint", () => {
  it("joins a relative models path onto the chat base URL", () => {
    assert.equal(
      joinBaseUrlAndEndpoint("https://api.example.com/v1/", "/models"),
      "https://api.example.com/v1/models"
    );
  });

  it("uses a full models URL on a different host than chat", () => {
    assert.equal(
      joinBaseUrlAndEndpoint(
        "https://api.example.com/v3/",
        "https://app.example.com/api/v3/chat/models"
      ),
      "https://app.example.com/api/v3/chat/models"
    );
  });

  it("uses a full chat URL without concatenating the base host", () => {
    assert.equal(
      joinBaseUrlAndEndpoint(
        "https://api.example.com/v3/",
        "https://api.example.com/v3/chat",
        "/chat/completions"
      ),
      "https://api.example.com/v3/chat"
    );
  });

  it("falls back to the default path when the custom endpoint is empty", () => {
    assert.equal(
      joinBaseUrlAndEndpoint("https://api.openai.com/v1", "", "/chat/completions"),
      "https://api.openai.com/v1/chat/completions"
    );
  });
});

describe("sanitizeCompatibleEndpoint", () => {
  it("accepts relative paths and http(s) URLs", () => {
    assert.equal(sanitizeCompatibleEndpoint("/v1/models"), true);
    assert.equal(sanitizeCompatibleEndpoint("https://app.example.com/api/v3/chat/models"), true);
    assert.equal(isAbsoluteHttpUrl("https://app.example.com/api/v3/chat/models"), true);
  });

  it("rejects traversal, javascript URLs, and null bytes", () => {
    assert.equal(sanitizeCompatibleEndpoint("../evil"), false);
    assert.equal(sanitizeCompatibleEndpoint("javascript:alert(1)"), false);
    assert.equal(sanitizeCompatibleEndpoint("/ok\0evil"), false);
  });
});

describe("resolveCompatibleModelsUrl", () => {
  it("returns the absolute models host instead of concatenating onto the chat host", () => {
    assert.equal(
      resolveCompatibleModelsUrl("https://api.example.com/v3/", {
        modelsPath: "https://app.example.com/api/v3/chat/models",
      }),
      "https://app.example.com/api/v3/chat/models"
    );
  });

  it("returns null when modelsPath is missing so callers can fall back", () => {
    assert.equal(resolveCompatibleModelsUrl("https://api.openai.com/v1", {}), null);
  });
});
