import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

// Each Node test process owns its own fixture directory. Never read or modify
// the operator's installed OpenCode authentication/configuration during tests.
const directory = mkdtempSync(join(tmpdir(), "omniroute-plugin-test-"));
process.env.OPENCODE_DATA_DIR = directory;
process.on("exit", () => rmSync(directory, { recursive: true, force: true }));
