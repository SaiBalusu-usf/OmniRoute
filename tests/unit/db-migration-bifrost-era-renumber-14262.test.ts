// ENVIRONMENT NOTE (sandbox better-sqlite3 / glibc limitation, not a code defect):
// This test constructs or exercises a real better-sqlite3-backed SQLite database.
// better-sqlite3 is a native addon; production and CI load it normally, but some
// sandboxes/dev boxes ship a system glibc older than the prebuilt binary requires
// ("GLIBC_2.29 not found"), so the native module fails to dlopen and any test that
// reaches better-sqlite3 directly (or asserts stdout that the load-failure warning
// would pollute) fails HERE while passing in CI. This is a known environment
// limitation, not a defect in the code under test: the OmniRoute runtime itself
// cascades to node:sqlite/sql.js when better-sqlite3 is unavailable. See
// tests/unit/_helpers/betterSqlite3Availability.ts for a guard helper.
//
// These tests cover issue #14262: installs that ran the old bifrost-era migrations
// at slots 100–105 logged a "CRITICAL: 6 migration version(s) have been renumbered"
// warning on every boot. The fix adds RENAMED_MIGRATION_COMPATIBILITY entries for each
// old name so the reconciler clears the stale ledger row and the canonical migration runs.
import assert from "node:assert/strict";
import fs, { type PathLike } from "node:fs";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

import Database from "better-sqlite3";

const serial = { concurrency: false };

async function importFresh(modulePath: string) {
  const url = pathToFileURL(path.resolve(modulePath)).href;
  return import(`${url}?test=${Date.now()}-${Math.random().toString(16).slice(2)}`);
}

function withMockedMigrationFs(files: Record<string, string>, fn: () => void) {
  const originalExistsSync = fs.existsSync;
  const originalReaddirSync = fs.readdirSync;
  const originalReadFileSync = fs.readFileSync;
  const isMigrationDir = (target: PathLike) =>
    String(target).replaceAll("\\", "/").endsWith("/src/lib/db/migrations") ||
    String(target).replaceAll("\\", "/").endsWith("/migrations");

  fs.existsSync = (target) => {
    const fileName = path.basename(String(target));
    if (isMigrationDir(target) || Object.hasOwn(files, fileName)) return true;
    return originalExistsSync(target);
  };
  fs.readdirSync = ((target: PathLike) => {
    if (isMigrationDir(target)) return Object.keys(files);
    return originalReaddirSync(target);
  }) as typeof fs.readdirSync;
  fs.readFileSync = ((target: PathLike, options?: { encoding?: BufferEncoding | null }) => {
    const fileName = path.basename(String(target));
    if (Object.hasOwn(files, fileName)) return files[fileName];
    return originalReadFileSync(target, options);
  }) as typeof fs.readFileSync;

  try {
    fn();
  } finally {
    fs.existsSync = originalExistsSync;
    fs.readdirSync = originalReaddirSync;
    fs.readFileSync = originalReadFileSync;
  }
}

/**
 * Scaffold a minimal OmniRoute database that has the tables required by
 * migrations 101 and 105 so the ALTER TABLE statements succeed, and that
 * covers the api_keys/combos/usage_history tables used by those migrations.
 */
function scaffoldMinimalDb(db: InstanceType<typeof Database>) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS api_keys (
      id TEXT PRIMARY KEY,
      key TEXT NOT NULL,
      name TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS combos (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      data TEXT NOT NULL DEFAULT '{}'
    );
    CREATE TABLE IF NOT EXISTS usage_history (
      id TEXT PRIMARY KEY,
      timestamp TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS key_value (
      namespace TEXT NOT NULL,
      key TEXT NOT NULL,
      value TEXT,
      PRIMARY KEY (namespace, key)
    );
  `);
}

test(
  "reconcileRenumberedMigrations clears bifrost_models at slot 100 and runs cli_access_tokens",
  serial,
  async () => {
    const runner = await importFresh("src/lib/db/migrationRunner.ts");
    const db = new Database(":memory:");

    try {
      db.exec(`
        CREATE TABLE _omniroute_migrations (
          version TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          applied_at TEXT NOT NULL DEFAULT (datetime('now'))
        );
      `);
      // Simulate an old install that ran the bifrost_models migration at slot 100
      db.prepare("INSERT INTO _omniroute_migrations (version, name) VALUES (?, ?)").run(
        "100",
        "bifrost_models"
      );
      scaffoldMinimalDb(db);

      withMockedMigrationFs(
        {
          "100_cli_access_tokens.sql": `
            CREATE TABLE IF NOT EXISTS cli_access_tokens (
              id TEXT PRIMARY KEY,
              token_hash TEXT NOT NULL UNIQUE,
              token_prefix TEXT NOT NULL,
              name TEXT NOT NULL,
              scope TEXT NOT NULL DEFAULT 'read',
              created_at TEXT NOT NULL DEFAULT (datetime('now'))
            );
          `,
        },
        () => runner.runMigrations(db)
      );

      const applied = db
        .prepare("SELECT version, name FROM _omniroute_migrations ORDER BY version")
        .all();
      assert.deepEqual(applied, [{ version: "100", name: "cli_access_tokens" }]);

      // The canonical migration ran and created the table
      assert.ok(
        db
          .prepare("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?")
          .get("cli_access_tokens"),
        "cli_access_tokens table must exist after reconciliation"
      );
    } finally {
      db.close();
    }
  }
);

test(
  "reconcileRenumberedMigrations clears bifrost_shadow at slot 101 and runs api_key_usage_limits",
  serial,
  async () => {
    const runner = await importFresh("src/lib/db/migrationRunner.ts");
    const db = new Database(":memory:");

    try {
      db.exec(`
        CREATE TABLE _omniroute_migrations (
          version TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          applied_at TEXT NOT NULL DEFAULT (datetime('now'))
        );
      `);
      db.prepare("INSERT INTO _omniroute_migrations (version, name) VALUES (?, ?)").run(
        "101",
        "bifrost_shadow"
      );
      scaffoldMinimalDb(db);

      withMockedMigrationFs(
        {
          "101_api_key_usage_limits.sql": `
            ALTER TABLE api_keys ADD COLUMN usage_limit_enabled INTEGER NOT NULL DEFAULT 0;
            ALTER TABLE api_keys ADD COLUMN daily_usage_limit_usd REAL;
            ALTER TABLE api_keys ADD COLUMN weekly_usage_limit_usd REAL;
          `,
        },
        () => runner.runMigrations(db)
      );

      const applied = db
        .prepare("SELECT version, name FROM _omniroute_migrations ORDER BY version")
        .all();
      assert.deepEqual(applied, [{ version: "101", name: "api_key_usage_limits" }]);

      // The canonical migration ran and added the columns
      const cols = db.prepare("PRAGMA table_info(api_keys)").all() as Array<{ name: string }>;
      const colNames = new Set(cols.map((c) => c.name));
      assert.ok(colNames.has("usage_limit_enabled"), "usage_limit_enabled column must exist");
      assert.ok(colNames.has("daily_usage_limit_usd"), "daily_usage_limit_usd column must exist");
      assert.ok(colNames.has("weekly_usage_limit_usd"), "weekly_usage_limit_usd column must exist");
    } finally {
      db.close();
    }
  }
);

test(
  "reconcileRenumberedMigrations clears all six bifrost-era slots (100–105) in a single run",
  serial,
  async () => {
    const runner = await importFresh("src/lib/db/migrationRunner.ts");
    const db = new Database(":memory:");

    try {
      db.exec(`
        CREATE TABLE _omniroute_migrations (
          version TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          applied_at TEXT NOT NULL DEFAULT (datetime('now'))
        );
      `);
      // Simulate the exact ledger state reported in issue #14262
      const oldNames: Array<[string, string]> = [
        ["100", "bifrost_models"],
        ["101", "bifrost_shadow"],
        ["102", "virtual_keys"],
        ["103", "cost_events"],
        ["104", "traffic_shadow_log"],
        ["105", "traffic_shadow_config"],
      ];
      for (const [version, name] of oldNames) {
        db.prepare("INSERT INTO _omniroute_migrations (version, name) VALUES (?, ?)").run(
          version,
          name
        );
      }
      scaffoldMinimalDb(db);

      withMockedMigrationFs(
        {
          "100_cli_access_tokens.sql": `
            CREATE TABLE IF NOT EXISTS cli_access_tokens (id TEXT PRIMARY KEY, name TEXT);
          `,
          "101_api_key_usage_limits.sql": `
            ALTER TABLE api_keys ADD COLUMN usage_limit_enabled INTEGER NOT NULL DEFAULT 0;
          `,
          "102_compression_engines_map.sql": `
            INSERT OR IGNORE INTO key_value (namespace, key, value)
            VALUES ('compression', 'activeComboId', 'null');
          `,
          "103_strip_legacy_combo_config_keys.sql": `
            UPDATE combos SET data = data WHERE 1=0;
          `,
          "104_normalize_database_cache_size.sql": `
            UPDATE key_value SET value = '16384'
            WHERE namespace = 'databaseSettings' AND key = 'cacheSize'
              AND TRIM(value) IN ('-2000');
          `,
          "105_usage_history_endpoint.sql": `
            ALTER TABLE usage_history ADD COLUMN endpoint TEXT;
          `,
        },
        () => runner.runMigrations(db)
      );

      // All six slots now carry the canonical names
      const applied = db
        .prepare("SELECT version, name FROM _omniroute_migrations ORDER BY version")
        .all() as Array<{ version: string; name: string }>;

      const appliedMap = new Map(applied.map((r) => [r.version, r.name]));
      assert.equal(appliedMap.get("100"), "cli_access_tokens");
      assert.equal(appliedMap.get("101"), "api_key_usage_limits");
      assert.equal(appliedMap.get("102"), "compression_engines_map");
      assert.equal(appliedMap.get("103"), "strip_legacy_combo_config_keys");
      assert.equal(appliedMap.get("104"), "normalize_database_cache_size");
      assert.equal(appliedMap.get("105"), "usage_history_endpoint");

      // No stale old names remain
      for (const [version, oldName] of oldNames) {
        const stale = applied.find((r) => r.version === version && r.name === oldName);
        assert.equal(stale, undefined, `stale row (${version}, ${oldName}) must not persist`);
      }
    } finally {
      db.close();
    }
  }
);
