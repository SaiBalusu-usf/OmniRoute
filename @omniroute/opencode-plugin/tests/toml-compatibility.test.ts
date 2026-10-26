import test from "node:test";
import assert from "node:assert/strict";
import { Effect, FileSystem, Path } from "effect";
import { Primitive } from "effect/unstable/cli";

function parseThroughEffect(content: string) {
  return Effect.runPromise(
    Primitive.fileParse({ format: "toml" })
      .parse("/fixture.toml")
      .pipe(
        Effect.provide(
          FileSystem.layerNoop({
            exists: () => Effect.succeed(true),
            stat: () => Effect.succeed({ type: "File" } as FileSystem.File.Info),
            readFileString: () => Effect.succeed(content),
          })
        ),
        Effect.provide(Path.layer)
      )
  );
}

test("patched TOML preserves Effect's actual file parser contract", async () => {
  const result = await parseThroughEffect(
    'name = "fixture"\n[server]\nport = 8080\nenabled = true\n'
  );
  assert.deepEqual(JSON.parse(JSON.stringify(result)), {
    name: "fixture",
    server: { port: 8080, enabled: true },
  });
});

test("malformed TOML still rejects through Effect", async () => {
  await assert.rejects(parseThroughEffect('name = "unterminated'));
});

test("TOML prototype keys cannot mutate the host object prototype", async () => {
  try {
    await parseThroughEffect("[__proto__]\nomniFixturePolluted = true\n");
  } catch {}
  assert.equal(({} as Record<string, unknown>).omniFixturePolluted, undefined);
});
