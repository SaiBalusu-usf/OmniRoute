# Quality Gates Reference (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

Dieses Dokument ist die verbindliche Referenz für alle CI-Qualitätsprüfungen in OmniRoute.
Es beschreibt jede Prüfung, was sie validiert, in welchem CI-Job sie ausgeführt wird, ob sie
eine Ratchet-Baseline oder eine Bestanden/Nicht-bestanden-Richtlinie verwendet und ob sie den Build blockiert oder nur informativen Charakter hat.

Eine kurze Zusammenfassung und die Allowlist-Richtlinie finden Sie im Abschnitt „Quality Gates & Ratchets“
in `AGENTS.md`. Die kritische Bewertung, Reifegradklassifizierung und den werkzeugunabhängigen
Replikationsplan desselben Systems finden Sie im
[Quality Gate Playbook](../ops/QUALITY_GATE_PLAYBOOK.md).

---

## Prüfungsinventar (~90 Skripte)

Die Skripte befinden sich unter `scripts/check/` (Richtlinienprüfungen) und `scripts/quality/` (Ratchet-Engine).
Die maßgebliche CI-Quelle ist `.github/workflows/ci.yml`.

### Schnellpfad für Release-PRs (`quality.yml`)

`.github/workflows/quality.yml` wird bei PRs ausgeführt, die auf `release/**` abzielen. Der Workflow sorgt mit
pfadgefilterten Schnellprüfungen dafür, dass Contributor-Branches vorankommen, und liefert bei Codeänderungen
zusätzlich ein informatives Produktions-Build-Signal:

| Job                                              | Umfang                                                                                                                                                                                                                                           | Blockierend                                                                                      |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `Build (advisory)`                               | Nicht als Entwurf markierte Code-PRs und Mergify-Warteschlangen-Branches; Node 24, `npm-ci-retry`, `check:node-runtime`, `npm run build` mit `OMNIROUTE_USE_TURBOPACK=1`; kein Artefakt-Upload, da kein nachgelagerter Qualitätsjob es verwendet | **Informativ** (`continue-on-error: true`; nach einer Woche stabiler Release-PR-Läufe entfernen) |
| `Docs Gates (fast-path)`                         | Dokumentations-/Code-PRs; API-Dokumentationsreferenzen und docs-all                                                                                                                                                                              | Ja                                                                                               |
| `Fast Quality Gates`                             | Code-PRs; statische Prüfungen, Typprüfung, Dashboard-Typprüfung, betroffene Unit-Tests                                                                                                                                                           | Ja                                                                                               |
| `Forgotten sibling tests`                        | Code-PRs; geänderte Module werden zu statischen Consumern und möglichen benachbarten Tests zurückverfolgt; Barrel- und dynamische Importpfade werden als informative Diagnosen mit Verweisen auf Allowlist-Ausnahmen gemeldet                    | **Informativ**                                                                                   |
| `Vitest (fast-path)`                             | Code-PRs; schnelle Vitest-Suite                                                                                                                                                                                                                  | Ja                                                                                               |
| `Unit Tests fast-path`                           | Code-PRs; Unit-Test-Suite mit 4 Shards                                                                                                                                                                                                           | Ja                                                                                               |
| `No new ESLint warnings`                         | Code-PRs; unterdrückungsbewusste Lint-Schutzprüfung                                                                                                                                                                                              | Ja für PRs aus demselben Repository, informativ für Forks                                        |
| `Merge integrity (changelog + generated skills)` | Nicht als Entwurf markierte PRs; Synchronisierung von Changelog und generierten Skills                                                                                                                                                           | Ja für PRs aus demselben Repository, informativ für Forks                                        |

#### Bericht zu vergessenen benachbarten Tests

`npm run check:forgotten-sibling-tests` verwendet den Import-Resolver hinter der Testauswirkungszuordnung erneut.
Für jedes geänderte Produktionsmodul meldet es deterministische Ketten der Form
`geändertes Modul/Symbol -> statischer Consumer -> möglicher benachbarter Test`, wenn der mögliche
Test nicht im Diff des Pull Requests enthalten ist. Die Markdown-Zusammenfassung und das JSON-Ergebnis werden
als Workflow-Artefakt `forgotten-sibling-tests` zur Kalibrierung aufbewahrt, bevor eine blockierende Einführung erfolgt.

Barrel-Re-Exporte und dynamische Importe dienen nur der Auflösungsdiagnose; sie führen niemals zu einem
blockierenden Befund. Geprüfte Ausnahmen befinden sich in
`config/quality/forgotten-sibling-allowlist.json`. Jeder Eintrag muss den Consumer und den möglichen
Test benennen, eine konkrete Begründung angeben und auf ein GitHub-Issue oder einen Pull Request verlinken. Fehlerhafte Einträge
führen standardmäßig zu einem Fehlschlag. Ausnahmen können weder einen gelöschten möglichen Test noch einen Diff unterdrücken, der `.skip`/`.todo`
hinzufügt; das Abschwächen von Assertions und andere Verschleierungen fallen weiterhin in den Zuständigkeitsbereich der unabhängig blockierenden
Prüfung `check:test-masking`.

### Job: `lint`

Wird bei jedem PR gegen `main` ausgeführt. Blockiert bei einem Fehler das Zusammenführen.

| Skript (`npm run ...`)            | Validiert                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Blockierend                             |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| `check:node-runtime`              | Die Node.js-Version liegt im unterstützten Bereich                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Ja                                      |
| `check:cycles`                    | Zirkuläre Importe — alle Module unter `src/` + `open-sse/`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Ja                                      |
| `check:route-validation:t06`      | Zod-Schemas sind für alle Routen vorhanden (Tier-6-Richtlinie)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Ja                                      |
| `check:any-budget:t11`            | Die Anzahl von `@ts-expect-error // any` überschreitet das Budget nicht (Tier-11-Sperre)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Ja                                      |
| `check:provider-consistency`      | Jeder Anbieter in `providers.ts` hat einen entsprechenden Eintrag in `providerRegistry.ts` (und umgekehrt, innerhalb der Positivliste)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Ja                                      |
| `check:model-lifecycle`           | Die drei manuell gepflegten Routingtabellen bleiben mit dem eingecheckten Lebenszyklus-Snapshot (#11503) konsistent: `FITNESS_TABLE` (`taskFitness.ts`) bewertet keine außer Betrieb genommene ID, die `REGISTRY` weiterleiten kann; jedes Ziel in `BUILT_IN_ALIASES` ist in `REGISTRY` vorhanden und fehlt im Snapshot der außer Betrieb genommenen IDs; jede außer Betrieb genommene ID, die noch in `REGISTRY` enthalten ist, wird weitergeleitet oder in `allowedRetiredInCatalog` aufgeführt; und weder eine Quelle noch ein Ziel aus `DEFAULT_DEGRADATION_MAP` erscheint in diesem Snapshot als außer Betrieb genommen. Dies beweist nicht, dass ein Modell derzeit von einem aktiven Upstream bereitgestellt wird. Offline — Vergleich mit `config/quality/model-lifecycle.json`, manuell aktualisiert mit `npm run quality:refresh-model-lifecycle` (Netzwerk; nicht in CI eingebunden). `allowedRetiredInCatalog` ist ein schrittweise abzubauender Sperrmechanismus: Einen Eintrag nur zusammen mit einem Tracking-Issue hinzufügen. | Ja                                      |
| `check:fetch-targets`             | Jedes `fetch("/api/...")` im clientseitigen `src/` wird zu einer tatsächlich vorhandenen `route.ts` aufgelöst                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Ja                                      |
| `check:deps`                      | Alle über `npm install` installierbaren Abhängigkeiten aus jeder `package.json` im Repository sind in `dependency-allowlist.json` enthalten; neue nicht festgeschriebene oder durch Slopsquatting entstandene Pakete werden markiert                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Ja                                      |
| `audit:deps`                      | `npm audit` (Root + Electron) — keine Sicherheitshinweise mit hohem/kritischem Schweregrad (überschneidet sich mit OSV-`check:vuln-ratchet`; siehe Rationalisierungs-Backlog)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Ja                                      |
| `check:lockfile`                  | Integrität von `package-lock.json` — HTTPS-Registry, Integritäts-Hashes, keine Host-Überschreibungen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Ja                                      |
| `check:licenses`                  | SPDX-Lizenz-Positivliste für Produktionsabhängigkeiten                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Ja                                      |
| `check:tracked-artifacts`         | Keine Build-Artefakte / eingecheckten `node_modules`-Symlinks (wird auch im Husky-Pre-Commit ausgeführt; Pre-Push ist absichtlich schlank — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Ja                                      |
| `check:vitest-exclusions`         | Jeder Vitest-Ausschluss nennt ein Tracking-Issue und ist in `config/quality/vitest-exclusions.json` aufgeführt (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Ja                                      |
| `check:file-size`                 | Keine Quelldatei überschreitet die Obergrenze ihrer Erweiterung (Sperrmechanismus: eingefrorene große Dateien in der Liste `frozen`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Ja                                      |
| `check:error-helper`              | Fehlerantworten in Executoren/Handlern verwenden `buildErrorBody()` / `sanitizeErrorMessage()` (Strikte Regel #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Ja                                      |
| `check:migration-numbering`       | Migrations-SQL-Dateien sind fortlaufend nummeriert, ohne Lücken oder Duplikate                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Ja                                      |
| `check:public-creds`              | Keine literalen OAuth-`client_id`/`client_secret`-Werte oder Firebase-Webschlüssel außerhalb von `publicCreds.ts` (Strikte Regel #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Ja                                      |
| `check:db-rules`                  | Kein ungekapseltes SQL außerhalb der Module unter `src/lib/db/`; keine Barrel-Importe aus `localDb.ts` (Strikte Regeln #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Ja                                      |
| `check:known-symbols`             | In ihren Dispatch-Tabellen registrierte Anbieter-Executoren, Routingstrategien und Übersetzer stimmen mit den Dateien auf dem Datenträger überein — keine verwaisten oder nicht deklarierten Symbole                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Ja                                      |
| `check:route-guard-membership`    | Jede Route, die einen Kindprozess startet, wird durch `isLocalOnlyPath()` klassifiziert (Strikte Regeln #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Ja                                      |
| `check:test-discovery`            | Jede Datei `*.test.ts` / `*.spec.ts` im Repository wird von mindestens einem Test-Runner erfasst (Sperrmechanismus: Die Liste verwaister Tests in `test-discovery-baseline.json` darf nur kleiner werden)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Ja                                      |
| `check:agent-skills-sync`         | Generierte Agent-Skills-Artefakte stimmen mit ihrem Quellkatalog überein (keine Abweichungen)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `check:provider-asset-provenance` | Für Anbieterlogos/-Assets ist ein Herkunftseintrag hinterlegt                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `lint:json`                       | JSON-Konfigurationsdateien lassen sich parsen und erfüllen die Lint-Regeln des Repositorys                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `typecheck:core`                  | TypeScript-Kompilierung ohne Fehler (nur Hinweise)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Ja                                      |
| `typecheck:noimplicit:core`       | Striktes `noImplicitAny` — zukunftsorientiert; viele bereits vorhandene Aufrufstellen benötigen weiterhin Annotationen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | **Hinweis** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | Auf `src/app/(dashboard)/**` beschränktes `tsc` (#7033) — die kuratierte Positivliste mit 27 Dateien von `typecheck:core` enthält keine Dashboard-TSX-Dateien, und auch `next build` führt für sie niemals eine Typprüfung durch (`next.config.mjs` setzt `ignoreBuildErrors: true`), sodass Regressionen durch verwaiste Bezeichner dort (#6625/#6909) für CI unsichtbar waren. Abgleich mit einer eingefrorenen Baseline der Anzahl pro Datei und TS-Code (`config/quality/dashboard-typecheck-baseline.json`, dasselbe Muster zur Erzwingung der Aktualität wie bei `check:known-symbols`) — nur NEUE Fehler, die über die Baseline-Anzahl hinausgehen, lassen das Gate fehlschlagen; mit `--update` schrittweise reduzieren, wenn ein bereits vorhandener Fehler behoben wird.                                                                                                                                                                                                                                                             | Ja                                      |

### Job: `quality-gate`

Wird nach `test-coverage` ausgeführt. Blockiert das Zusammenführen bei einem Fehler.

| Skript                       | Validiert                                                                                                                                                                                               | Blockierend                  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `quality:collect`            | Erzeugt `quality-metrics.json` (Anzahl der ESLint-Warnungen, Abdeckung aus dem zusammengeführten Shard-Bericht)                                                                                         | Ja (vorgelagert zum Ratchet) |
| `quality:ratchet`            | Keine Metrik in `quality-baseline.json` hat sich verschlechtert (ESLint-Warnungen ≤ Baseline; Abdeckung ≥ Baseline)                                                                                     | Ja                           |
| `check:duplication`          | Codeduplizierung (jscpd@4) überschreitet die Baseline in `quality-baseline.json` nicht                                                                                                                  | Ja                           |
| `check:complexity`           | Zyklomatische Komplexität auf Dateiebene überschreitet den Grenzwert nicht (ESLint-Kernregeln `complexity` + `max-lines-per-function`)                                                                  | Ja                           |
| `check:cognitive-complexity` | Ratchet für kognitive Komplexität (`eslint-plugin-sonarjs`) — separater ESLint-Durchlauf; CI führt beide zusammen als einzelnen Schritt `check:complexity-ratchets` aus                                 | Ja                           |
| `check:dead-code`            | Ratchet für ungenutzte Exporte/Dateien (knip) verschlechtert sich gegenüber der Baseline nicht                                                                                                          | Ja                           |
| `check:compression-budget`   | Budget für den Komprimierungs-Benchmark — Mindestwerte der Token-Einsparungen pro Engine dürfen sich nicht verschlechtern                                                                               | Ja                           |
| `check:type-coverage`        | Ratchet für den Prozentsatz typisierten Codes (`type-coverage`) verschlechtert sich nicht; deckt `typecheck:noimplicit:core` weitgehend ab                                                              | Ja                           |
| `check:codeql-ratchet`       | Anzahl offener CodeQL-Warnungen verschlechtert sich nicht (Abruf über `gh api`; kontrolliertes Überspringen ohne Token) — Aktualisierungsintervall und manuelle Auslösung: siehe „CodeQL-Ratchet“ unten | Ja                           |

### Job: `quality-extended`

Der gesamte Job ist beratend (`continue-on-error: true`). Die npm-basierten Ratchets werden
tatsächlich ausgeführt; die externen Scanner werden über `gh release download` installiert und
überspringen ihre Ausführung selbstständig (Exit-Code 0), wenn eine Binärdatei weiterhin fehlt.

| Skript                   | Validiert                                                                                                                                                                                                                               | Blockierend  |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `check:circular-deps`    | Keine zirkulären Abhängigkeiten (dpdm)                                                                                                                                                                                                  | **Beratend** |
| `check:bundle-size`      | Bundle-Größe überschreitet den Grenzwert nicht                                                                                                                                                                                          | **Beratend** |
| `check:secrets`          | Suche nach Geheimnissen (gitleaks) — wird übersprungen, wenn die Binärdatei fehlt                                                                                                                                                       | **Beratend** |
| `check:vuln-ratchet`     | Sicherheitslücken in Abhängigkeiten (osv-scanner) verschlechtern sich nicht — wird übersprungen, wenn die Binärdatei fehlt                                                                                                              | **Beratend** |
| `check:workflows`        | Workflow-Linting (actionlint + zizmor) — wird übersprungen, wenn die Binärdateien fehlen                                                                                                                                                | **Beratend** |
| `check:openapi-breaking` | Inkompatible Änderungen am öffentlichen API-Vertrag (`openapi.yaml`) gegenüber dem Basis-Branch (oasdiff) — gibt `openapiBreaking=N` aus; wird übersprungen, wenn oasdiff fehlt oder die Basisspezifikation nicht aufgelöst werden kann | **Beratend** |

### Job: `docs-sync-strict`

Wird bei jedem PR an `main` ausgeführt. Blockiert das Zusammenführen bei einem Fehler.

| Skript                         | Überprüft                                                                                                                                                                          | Blockierend                |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `check:docs-all`               | Meta-Gate, das die 6 unten aufgeführten Sub-Gates nacheinander ausführt                                                                                                            | Ja                         |
| ↳ `check:docs-sync`            | Versionskonsistenz zwischen CHANGELOG / OpenAPI / llm.txt                                                                                                                          | Ja                         |
| ↳ `check:docs-counts`          | Zahlenangaben im Fließtext (Anbieteranzahl, Migrationsanzahl usw.) liegen innerhalb des Ratchet-Fensters der tatsächlichen Werte                                                   | Ja                         |
| ↳ `check:env-doc-sync`         | Jede Umgebungsvariable in `.env.example` ist in einer Dokumentationstabelle dokumentiert und umgekehrt                                                                             | Ja                         |
| ↳ `check:deprecated-versions`  | Keine veralteten Versionszeichenfolgen in der Dokumentation                                                                                                                        | Ja                         |
| ↳ `check:doc-links`            | Interne Markdown-Links in der Dokumentation verweisen auf vorhandene Dateien (Format `[text]`/`(path)`)                                                                            | Ja                         |
| ↳ `check:fabricated-docs`      | In der Dokumentation genannte Routen, Umgebungsvariablen, CLI-Befehle, Hook-Namen und Dateipfade existieren in der Codebasis. Hartes Gate mit `--strict`; ohne Flag nur Soft-Fail. | Ja (über `--strict` in CI) |
| `check:cli-i18n`               | CLI-Befehlszeichenfolgen sind in allen i18n-Locale-Dateien vorhanden                                                                                                               | Ja                         |
| `check:openapi-coverage`       | Die OpenAPI-Spezifikation deckt mindestens eine schrittweise angehobene Untergrenze der tatsächlichen Routen ab                                                                    | Ja                         |
| `check:openapi-security-tiers` | Sicherheitsstufen-Anmerkungen in `openapi.yaml` stimmen mit den Klassifizierungen in `routeGuard.ts` überein                                                                       | **Hinweisgebend**          |
| `check:openapi-routes`         | Jeder Pfad in `openapi.yaml` verweist auf eine vorhandene `route.ts` (Halluzinationsschutz)                                                                                        | Ja                         |
| `check:docs-symbols`           | Jede `/api/...`-Referenz in `docs/**/*.md` verweist auf eine vorhandene `route.ts` (Halluzinationsschutz)                                                                          | Ja                         |
| `i18n translation drift`       | Nicht übersetzte Schlüssel in i18n-Locale-Dateien — nur Warnung                                                                                                                    | **Hinweisgebend**          |

### Job: `i18n-ui-coverage`

| Skript                            | Überprüft                                                                                                                                                                                                                      | Blockierend       |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| `check-ui-keys-coverage` (inline) | Die Abdeckung der UI-i18n-Schlüssel beträgt ≥ 65 %                                                                                                                                                                             | Ja                |
| `check-ui-value-drift` (inline)   | Ein neu formulierter englischer **Wert** hinterlässt keine veraltete Übersetzung                                                                                                                                               | Ja                |
| `check-new-key-coverage` (inline) | Ein **neuer** englischer Schlüssel ist in jeder Locale vorhanden                                                                                                                                                               | Ja                |
| `check-translation-ratio`         | Der Anteil echter Übersetzungen pro Locale (mit dem Englischen identische / Platzhalter- / fehlende Blätter außerhalb der Zulassungsliste) darf `config/quality/i18n-translation-baseline.json` + Toleranz nicht überschreiten | **Hinweisgebend** |

Benötigt `fetch-depth: 0` — das Value-Drift-Gate vergleicht `en.json` per Diff mit der Merge-Basis.

#### `check-ui-value-drift` — Gate gegen veraltete Übersetzungen

Erkennt genau die eine i18n-Regression, die die anderen Gates strukturell nicht erkennen können: Ein englischer Wert
wird neu formuliert, während die von der _vorherigen_ englischen Fassung abgeleiteten Übersetzungen bestehen bleiben, sodass
nicht englischsprachige Benutzer weiterhin überzeugend formulierte, aber inzwischen falsche Texte lesen.

Dies wurde tatsächlich so ausgeliefert. `oauthModal.googleOAuthWarning` wurde neu formuliert, als der Antigravity-
Anmeldehelfer eingeführt wurde (#5203); bei **39 von 43 Locales** blieb der Text bestehen, der Operatoren anwies, „die
vollständige URL zu kopieren und unten einzufügen“ — ein Ablauf, der bei diesem Anbieter nicht abgeschlossen werden kann. Dies
blieb bis #8463 unbemerkt, weil:

- `sync-ui-keys` nur **fehlende** Schlüssel ergänzt, niemals **veraltete**;
- `check-ui-keys-coverage` die _Anwesenheit_ von Schlüsseln zählt, sodass eine veraltete Übersetzung als abgedeckt gilt;
- `check-translation-drift` die Dokumentationsspiegel unter `docs/i18n/<locale>/**.md` verfolgt —
  `src/i18n/messages/*.json` wird nie gelesen. Seit der erneuten Synchronisierung 2026-09 im Job `docs-sync-strict` blockierend: Kerndokument bearbeiten → `npm run i18n:run -- --files=<doc>` (abschnittsweise, kostengünstig).

**Diff-bewusst, nicht durch eine Baseline gestützt.** Es vergleicht `en.json` am Merge-Base mit dem
Arbeitsbaum; für jeden Schlüssel, dessen englischer Wert geändert wurde, gilt jede Sprache, die
noch eine unveränderte Übersetzung enthält, als veraltet. Dadurch werden **bereits bestehende Altlasten bewusst eingefroren** — aus einem Diff
lässt sich nicht erkennen, von welchem alten englischen Text eine seit Langem bestehende Übersetzung stammt, daher bewertet
die Schranke nur, was von der aktuellen Änderung berührt wird. Die Alternative (eine Hash-Baseline pro Schlüssel) würde
eine generierte Datei von ~600 KB erfordern, dreimal so groß wie die größte bestehende Baseline, und bei jedem i18n-PR Änderungen verursachen.

Es gibt zwei Möglichkeiten, die Prüfung zu erfüllen:

1. die betroffenen Übersetzungen aktualisieren oder
2. sie auf `__MISSING__:<new english>` setzen — die Laufzeit liefert dann den korrigierten englischen Text aus
   (`src/i18n/request.ts::deepMergeFallback`, #7258), und der Schlüssel wird zur Übersetzung eingereiht.

Wenn sich die **Bedeutung** des Textes geändert hat, sollte der **Schlüssel umbenannt** werden: Ein neuer Schlüssel kann
keine veraltete Übersetzung übernehmen. Dieses Muster wurde in #8463 verwendet.

```bash
npm run i18n:check-value-drift          # strikt (wird von CI ausgeführt)
npm run i18n:check-value-drift:warn     # nur Bericht
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

Wird der Basiskatalog nicht gelesen werden können (flacher
Klon ohne die Basis-Ref), endet der Befehl mit Status 0 und `SKIP reason=base-unresolved`, analog zu `check-openapi-breaking`.

### Job: `i18n`

Vollständige i18n-Validierungsmatrix (ein Job pro Sprache). Der gesamte Job ist informativ.

| Skript                          | Validiert                                  | Blockierend                                                     |
| ------------------------------- | ------------------------------------------ | --------------------------------------------------------------- |
| `validate_translation.py quick` | Vollständigkeit der Übersetzung je Sprache | **Informativ** (`continue-on-error: true` für den gesamten Job) |

### Job: `pr-test-policy`

Wird nur für Pull Requests ausgeführt.

| Skript                 | Validiert                                                                                                                                               | Blockierend |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `check:pr-test-policy` | PRs, die Produktionscode in `src/`, `open-sse/`, `electron/` oder `bin/` ändern, müssen Tests einschließen oder aktualisieren (Harte Regel #8)          | Ja          |
| `check:test-masking`   | Geänderte Testdateien reduzieren nicht die Nettoanzahl der Assertions und fügen keine `assert.ok(true)`-Tautologien hinzu                               | Ja          |
| `check:pr-evidence`    | Die PR-Beschreibung führt Test-/VPS-Nachweise für die Änderung an (mechanisiert Harte Regel #18 durch Durchsuchen des PR-Texts — fragil, siehe Backlog) | Ja          |

### Job: `test-vitest`

Wird nach `build` ausgeführt. Blockiert den Merge bei einem Fehler.

| Suite            | Validiert                                                | Blockierend                                                                                                                                   |
| ---------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP-Server (110 Tools), autoCombo, Cache — vitest-Runner | Ja                                                                                                                                            |
| `test:vitest:ui` | UI-Komponententests — vitest-Runner                      | **Blockierend** — bereits bestehende Fehler werden in `vitest.config.ts` ausdrücklich ausgeschlossen; neue Fehler lassen den Job fehlschlagen |

### Nächtliche Workflows (zeitgesteuert, informativ)

Diese werden nach einem Cron-Zeitplan (und per `workflow_dispatch`) ausgeführt, niemals für PRs. Sie sind alle informativ.

| Workflow               | Validiert                                                                                                                                                                                           | Blockierend    |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `nightly-property`     | fast-check-Property-Tests mit einem zufälligen Seed und einer hohen Anzahl von Durchläufen                                                                                                          | **Informativ** |
| `nightly-resilience`   | Heap-Wachstumsprüfung, Chaos-Fehlerinjektion, k6-Last-/Dauertests                                                                                                                                   | **Informativ** |
| `nightly-llm-security` | promptfoo-Injection-Guard (Blockierungsmodus) + garak-Prüfungen (werden ohne Provider-Secret übersprungen)                                                                                          | **Informativ** |
| `nightly-schemathesis` | OpenAPI-Vertrags-Fuzzing (schemathesis) gegen eine laufende OmniRoute-Instanz unter Verwendung von `docs/openapi.yaml` — deckt Spezifikationsverstöße / unbehandelte 500er-Fehler auf (Phase 8 B.4) | **Informativ** |
| `nightly-mutation`     | Stryker-Mutation-Testing-Wertung für die schnelle Unit-Test-Pipeline — überlebende Mutanten decken schwache Assertions auf                                                                          | **Informativ** |
| `nightly-compat`       | Node-Engine-Kompatibilitätsmatrix über die unterstützten `engines.node`-Bereiche hinweg                                                                                                             | **Informativ** |

---

## Velocity-Phase (2026-08-30 → v4.0 LTS): Alle Baselines um 20 % gelockert

Entscheidung des Owners (2026-08-30): Bis zur Modularisierung in v4.0 ist die
Auslieferungsgeschwindigkeit wichtiger als die Einhaltung der technischen Schuldengrenze. Jede
**numerische** Ratchet-Baseline wurde in einem einzigen auditierbaren Durchgang um 20 % gelockert,
und die Phase ist in `config/quality/quality-baseline.json` deklariert:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| Was geändert wurde                                                                                                                                                                                                                               | Wo                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — Werte, bei denen niedriger besser ist, ×1,2; Prozentsätze, bei denen höher besser ist, ÷1,2 (Coverage-Untergrenze bleibt 60, `eslintErrors` bleibt 0, `eslintWarnings` 0 → 20 % der eingefrorenen Anzahl an Unterdrückungen) | `quality-baseline.json` (Hinweis `_relax_velocity_2026_08_30` listet alle Vorher- → Nachher-Werte auf) |
| `count` ×1,2 / `percentage` ×1,2                                                                                                                                                                                                                 | `complexity-baseline.json`, `duplication-baseline.json`                                                |
| `cap`, `testCap`, jede Zeilenobergrenze in `frozen[*]` / `testFrozen[*]` ×1,2                                                                                                                                                                    | `file-size-baseline.json`                                                                              |
| Anzahl pro Datei / pro TS-Code ×1,2                                                                                                                                                                                                              | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json` |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                                              | `scripts/check/check-openapi-coverage.mjs`                                                             |
| `--require-tighten` wird nur noch als Hinweis behandelt, solange `_policy.requireTighten === false`                                                                                                                                              | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| Das nächtliche `bank-ratchet-shrinks` wird pausiert (es würde die gemessene Verringerung festschreiben und den Spielraum wieder aufheben)                                                                                                        | `.github/workflows/nightly-release-green.yml`                                                          |

Allowlists (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) sind **keine** Budgets und wurden nicht verändert. Richtlinien-Gates mit Bestehen/Fehlschlagen
(Secrets, SQL-Regeln, Dokumentations-/Umgebungsvertrag, i18n-Parität, Unit-Tests) bleiben unverändert
— ein fehlgeschlagener Test bleibt ein fehlgeschlagener Test.

**Werkzeuge**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — die
  einmalige Lockerung (`scripts/quality/relax-baselines.mjs`); eine zweite Ausführung mit demselben
  Hinweis wird abgelehnt.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  misst jedes numerische Gate auf dieselbe Weise wie CI und gibt den verbleibenden Spielraum pro
  Gate aus (`scripts/quality/baseline-headroom.mjs`). Der nächtliche Job `baseline-headroom`
  veröffentlicht die Tabelle im fortlaufend gepflegten Issue **📈 Baseline-Spielraum
  (Velocity-Phase)** und fügt das Label `headroom-alert` hinzu, wenn ein Gate höchstens noch 10 %
  von seiner Obergrenze entfernt ist oder diese bereits überschritten hat. Dieses Issue dient als
  Frühwarnung: Ein Budget, das innerhalb weniger Tage aufgebraucht ist, bedeutet, dass die
  Lockerung von wenigen PRs statt vom gesamten Team verbraucht wird — prüfen Sie die
  `_rebaseline_*`-Hinweise des betreffenden Gates.

**Neucode-Modus (Clean-as-You-Code) — seit 2026-08-30, nur PR-Schnellpfad**

Bei `pull_request`-Ereignissen übergibt `quality.yml` die Option `--base-ref <PR base SHA>` an
`check:file-size`, `check:complexity-ratchets` und `check:dead-code`. In diesem Modus vergleicht
das Gate HEAD mit der Merge-Base, **beschränkt auf die vom PR geänderten Dateien**
(`scripts/check/newCodeMode.mjs`: Die Merge-Base wird in einem temporären `git worktree`
materialisiert, ESLint/knip werden dort und auf HEAD ausgeführt und die Anzahl pro Datei wird
differenziert):

- **blockierend** — der PR hat zyklomatische/kognitive Verstöße oder ungenutzte Exporte in von ihm
  geänderten Dateien hinzugefügt (`complexityNewCode=`, `cognitiveComplexityNewCode=`,
  `deadExportsNewCode=` im Protokoll);
- **hinweisend** — die globale Gesamtzahl im Vergleich zur eingefrorenen Baseline. Übernommene
  Abweichungen lassen einen unbeteiligten PR niemals fehlschlagen; die Abweichung wird beim
  Release-Abgleich erneut eingefroren und vom Headroom-Job überwacht.

`workflow_dispatch`-Ausführungen, der Release-Green-Durchlauf und der nächtliche Headroom-Job
haben keine PR-Basis und behalten den absoluten (globalen) Vergleich bei. Coverage, Duplizierung
und Type-Coverage bleiben vorerst global (ihre Werkzeuge erzeugen nicht ohne Weiteres einen
kostengünstigen Diff pro Datei) — sie sind Kandidaten für dieselbe Behandlung.

**Abschluss der Phase mit v4.0 (LTS = strenger als zuvor, nicht „zurück zum Normalzustand“)

1. Auf dem unveränderten Stand von `release/v4.0.0`: `npm run quality:headroom --json` zur Dokumentation ausführen, dann
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update` sowie `--update` für jedes Typecheck-Gate — jede Baseline wird auf den gemessenen Wert abgesenkt.
2. `_policy` aus `quality-baseline.json` löschen (aktiviert `--require-tighten` und das nächtliche
   Banking erneut), `THRESHOLD = 36` (oder höher) in `check-openapi-coverage.mjs` wiederherstellen.
3. Über die Messwerte hinaus verschärfen, wo sich die Modularisierung ausgezahlt hat: den File-Size-`cap` wieder auf 1000
   (oder 800) setzen, die Coverage-Untergrenzen um 5 erhöhen und für die modularisierten Pakete 0 ungenutzte Exporte festlegen.

## Ratchet-Baseline (`quality-baseline.json`)

Die Ratchet-Engine (`scripts/quality/check-quality-ratchet.mjs`) liest `quality-baseline.json`
und vergleicht sie mit der neu erfassten `quality-metrics.json`. Jede Metrik, die sich
über ihren Epsilonwert hinaus verschlechtert, lässt den Build fehlschlagen.

Derzeit erfasste Metriken:

| Metrik                | Richtung | Bedeutung                                          |
| --------------------- | -------- | -------------------------------------------------- |
| `eslintWarnings`      | `down`   | Die Anzahl der ESLint-Warnungen darf nicht steigen |
| `coverage.statements` | `up`     | Die Statement-Abdeckung darf nicht sinken          |
| `coverage.lines`      | `up`     | Die Zeilenabdeckung darf nicht sinken              |
| `coverage.functions`  | `up`     | Die Funktionsabdeckung darf nicht sinken           |
| `coverage.branches`   | `up`     | Die Zweigabdeckung darf nicht sinken               |

So aktualisieren Sie die Baseline nach einer tatsächlichen Verbesserung:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

Das Flag `--update` schreibt die aktuell gemessenen Werte in `quality-baseline.json`.
Committen Sie diese Datei zusammen mit der Änderung, durch die die Metrik verbessert wurde. Ein PR, der eine
Metrik verbessert, ohne die Baseline zu aktualisieren, wird von `--require-tighten` erkannt (Phase 6A.5,
Implementierung ausstehend).

### CodeQL-Ratchet: Aktualisierungsintervall und manuelle Auslösung

`check:codeql-ratchet` liest **den Repository-Status, der nach einem Zeitplan aktualisiert wird — nicht pro PR.**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` meldet
`state: configured`, `schedule: weekly`: GitHubs Scan mit Standardkonfiguration, keine Analyse
bei jedem Push. Folge: Nachdem ein PR, der Warnungen BEHEBT, gemergt wurde, liest das Ratchet
weiterhin die alte, höhere Anzahl, bis der nächste geplante Scan ausgeführt wird — daher meldet es
bei jedem offenen PR eine Regression, einschließlich der Folge-PRs des Korrektur-PRs selbst, bis der Scan den aktuellen Stand erfasst.

**Manuelle Aktualisierung**: `gh workflow run codeql.yml --ref release/vX.Y.Z` führt die
Analyse erneut aus und veröffentlicht die Warnungen innerhalb weniger Minuten neu. Lesen Sie zuerst
`.github/workflows/codeql.yml` — der Header erklärt, dass sie ausschließlich für `workflow_dispatch`
vorgesehen ist, **weil sie mit GitHubs „Standardkonfiguration“ kollidiert** (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`). Das Wiederherstellen der Trigger `push`/`pull_request`/
`schedule` erfordert **zuerst eine Aktion des Eigentümers**: Settings → Code security →
CodeQL: Default → Advanced. Fügen Sie ohne diese Umstellung keinen `schedule:`-Trigger hinzu — er
würde lediglich fehlschlagende Läufe erzeugen.

**Verschärfen Sie die Baseline, nachdem die Anzahl gesunken ist** — `node scripts/check/check-codeql-ratchet.mjs
--update` schreibt die neu gemessene Anzahl in `quality-baseline.json` →
`metrics.codeqlAlerts.value`, damit das Ratchet nicht stillschweigend eine Regression zurück
auf den alten Grenzwert zulässt. Praxisbeispiel (2026-09-02/03): PR #12502 behob 7 echte Warnungen
(13 → 6 gemessene offene Warnungen); PR #12530 verschärfte die eingefrorene Baseline von 11 → 6, um sie anzugleichen; die
verbleibenden 6 wurden anschließend mit einer Begründung für jede einzelne Warnung verworfen, sodass 0 offen blieben.

**Verwerfungen liegen im Ermessen des Operators (Strikte Regel #14)** — verwerfen Sie niemals eine CodeQL-Warnung,
ohne die technische Begründung im Verwerfungskommentar festzuhalten: `won't fix` für
eine Anforderung eines vorgelagerten Protokolls, `used in tests` für eine Test-Fixture, `false positive`
für einen Sanitizer, den CodeQL nicht erkennen kann (Präzedenzfall: `docs/security/ERROR_SANITIZATION.md`).

---

## Richtlinie für Testwiederholungen (WS5.4, v3.8.49)

Wiederholungen werden pro Runner konfiguriert, niemals pauschal global — eine pauschale Wiederholung macht aus echten Regressionen unsichtbare Flakes:

| Runner           | Richtlinie                                                                                                                                    | Begründung                                                                                                                                              |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | `retries: 1` nur in CI, mit `trace: on-first-retry`                                                                                           | Browser-/Netzwerk-Timing ist tatsächlich nicht deterministisch; eine Wiederholung mit einem Trace macht aus einem Flake ein diagnostizierbares Artefakt |
| Vitest           | KEINE globale Wiederholung. Ein nachweislich instabiler Test erhält eine explizite Wiederholung pro Test (im Diff sichtbar und im PR geprüft) | So bleibt die Quarantäneliste im Repository und ist niemals undurchsichtig                                                                              |
| node:test (Unit) | NIEMALS Wiederholungen                                                                                                                        | Ein instabiler Unit-Test ist ein Fehler im Test — beheben, nicht erneut ausführen                                                                       |

Ziel-SLOs, sobald die Flake-Telemetrie verfügbar ist (WS5.2/5.3): <1 % Flake-Rate pro Test
(Schwellenwert für „sofort beheben“), ≥95 % Erfolgsrate pro Pipeline. Branchenübliche Referenzwerte —
anhand unserer eigenen Messungen neu kalibrieren.

## Drift der Ratchets auf Release-Ebene (WS5.5, v3.8.49)

Wenn sich ein Ratchet (Dateigröße, Komplexität, eslint-Warnungen) am REINEN Release-
Tip verschlechtert — d. h., die KOMBINATION der Merges hat die Verschlechterung verursacht und kein einzelner PR reproduziert sie
in seinem eigenen Branch — obliegt die Behebung **einmalig dem Release Captain auf dem
Release-Branch**: Extraktion/Refactoring bevorzugen; die Baseline nur mit dem dokumentierten
Begründungseintrag neu setzen. Kombinationsbedingte Drift niemals auf einen Contributor-PR abwälzen und niemals
pro PR neu baselinen (das verbirgt echte Regressionen). Zuerst differenzieren: Den
roten Status in einem Probe-Worktree gegen den reinen Tip reproduzieren, bevor angenommen wird, dass der eigene PR ihn verursacht hat.

## Ratchet-Absenkungen übernehmen — die Abwärtsrichtung (#8584)

Das Ratchet ist nur zur Hälfte automatisiert, und zwar zur falschen Hälfte. Das **Anheben** eines Limits ist eine
manuelle JSON-Bearbeitung, die zehn Sekunden dauert und der schnellste Weg ist, einen roten PR wieder freizugeben.
Das **Absenken** erfordert, dass jemand `--update` ausführt und das Ergebnis committet — und bis
der Job `bank-ratchet-shrinks` eingeführt wurde, führte kein Workflow diesen Vorgang aus. Die gemessene Folge
(2026-07-25): 18 eingefrorene Dateien lagen bereits bei oder unter dem Limit von 800 Zeilen für neue Dateien, im schlimmsten
Fall beim 132-Fachen (`src/shared/validation/schemas.ts`, 19 Zeilen bei einem Limit von 2.523); die
Komplexitätsobergrenze stieg über etwa 37 Rebaseline-Hinweise hinweg von `1794 → 2169`, bei genau einer
Absenkung (−1); und „im nächsten Zyklus über `--update` verschärfen“ wurde 31-mal geschrieben und
einmal umgesetzt. Ein Limit, das länger bestehen bleibt als der Code, durch den es begründet wurde, verwandelt
jede abgeschlossene Zerlegung stillschweigend in zusätzlichen Wachstumsspielraum für die Person, die die Datei als Nächstes bearbeitet.

`nightly-release-green.yml` → Job **`bank-ratchet-shrinks`** schließt diesen Regelkreis:

|             |                                                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------------------------------- |
| Läuft bei   | `schedule` (3×/Tag) + `workflow_dispatch` — bewusst **nicht** bei `push`                                                  |
| Misst       | den höchsten `release/vX.Y.Z`, mit derselben Auflösung und demselben Injection Guard wie `release-green`                  |
| Schreibt    | `check:file-size --update` und `check:complexity-ratchets --update` (beide konstruktionsbedingt ausschließlich absenkend) |
| Verifiziert | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                                  |
| Liefert aus | einen stets aktuellen PR gegen den Release-Branch — per Force-Update aktualisiert, niemals als Spam                       |

Die Übernahme erfolgt gebündelt statt bei jedem Push, da es keine Latenzanforderung gibt (eine innerhalb von
8 Stunden übernommene Absenkung ist ausreichend), während eine Ausführung bei jedem Merge den PR-Branch während
Merge-Kampagnen wiederholt neu erstellen und jedes Mal einen vollständigen ESLint-Durchlauf verursachen würde. Die Erkennung erfolgt weiterhin bei
`push` (`release-green`); nur die Übernahme wird gebündelt.

### Der Sicherheitsprüfer

Der Job schreibt unbeaufsichtigt in die Baselines, daher sorgt `verify-ratchet-bank.mjs` dafür,
dass dies vertretbar ist. Er vergleicht den Baum nach `--update` mit `HEAD` und **bricht den Job ab,
bevor ein Commit existiert** — ohne einen PR zu öffnen —, sofern nicht jede Änderung einer der folgenden Kategorien entspricht:

- ein numerischer `frozen`- / `testFrozen`-Eintrag wurde **abgesenkt** oder **entfernt**
- `complexity-baseline.json` → `count` wurde **abgesenkt**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` wurde **abgesenkt**

Alles andere schlägt fehl: das Anheben einer Zahl, das Hinzufügen eines Eintrags, das Ändern von `cap`/`testCap` oder
das Löschen/Umschreiben eines `_rebaseline_*`-Hinweises (diese Hinweise bilden den Audit-Trail dafür, warum die jeweilige
Obergrenze existiert, und werden innerhalb desselben `frozen`-Objekts wie die Dateieinträge gespeichert).
Ein Bot, der ein Limit anheben könnte, wäre eindeutig schlechter als der Status quo. Regressions-
Guard: `tests/unit/verify-ratchet-bank.test.ts`.

Der Job pusht niemals nach `release/*` — ein Mensch mergt den PR, sodass eine fehlerhafte Messung
nicht ungeprüft übernommen werden kann.

## Richtlinie für Positivlisten

Jeder Prüfschritt, der bei bereits vorhandenen Verstößen nicht fehlschlagen darf, verwendet eine unveränderliche Positivliste
(z. B. `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). Es gilt folgende Richtlinie:

**Beheben Sie die eigentliche Ursache; verwenden Sie die Positivliste nur, wenn der Verstoß bereits vorhanden ist und
nicht im selben PR behoben werden kann.**

Beim Hinzufügen eines Eintrags zu einer Positivliste:

1. Fügen Sie einen Kommentar mit der Begründung ein.
2. Verweisen Sie auf das zugehörige Tracking-Issue (z. B. `// #3498 — Funktion aus Phase 2, noch nicht implementiert`).
3. Entfernen Sie den Eintrag in demselben PR, der den Verstoß behebt — ein veralteter Eintrag, der keinen aktiven
   Verstoß mehr unterdrückt, ist selbst ein Fehler (die stale-enforcement-Prüfung aus 6A.3 wird
   den Prüfschritt bei einem verwaisten Positivlisteneintrag fehlschlagen lassen, sobald sie implementiert ist).

Fügen Sie **keine** Positivlisteneinträge hinzu, nur damit Tests schneller erfolgreich sind. Ein erfolgreicher Prüfschritt bei einer wachsenden
Positivliste vermittelt ein falsches Gefühl von Qualität.

### Wenn ein Prüfschritt bei Ihrem PR fehlschlägt

1. **Lesen Sie die Ausgabe des Prüfschritts sorgfältig** — sie gibt genau an, welche Datei oder welches Symbol gegen
   die Regel verstoßen hat.
2. **Beheben Sie den Verstoß** — die meisten Prüfschritte sind deterministische Dateisystemprüfungen, die erfolgreich sind, sobald
   der Code korrekt ist.
3. **Wenn der Verstoß bereits vorhanden ist** (d. h., Sie haben ihn nicht verursacht, aber der Prüfschritt
   deckt ihn nun ab): Fügen Sie einen Positivlisteneintrag mit einem Begründungskommentar und einem Tracking-Issue hinzu.
4. **Wenn es sich um einen Ratchet-Prüfschritt handelt** (Testabdeckung, ESLint-Warnungen, Duplizierung, Komplexität):
   Ihre Änderung hat die Metrik verschlechtert. Beheben Sie das zugrunde liegende Problem oder führen Sie (in seltenen Fällen)
   `npm run quality:ratchet -- --update` aus, wenn die Änderung beabsichtigt und die Verschlechterung
   der Metrik akzeptabel ist — dokumentieren Sie die Gründe jedoch in der PR-Beschreibung.
5. **Hinweisgebende Prüfschritte** (`continue-on-error: true`) dienen nur der Information — sie blockieren
   das Zusammenführen nicht, erscheinen aber in der CI-Zusammenfassung. Beheben Sie sie trotzdem.

---

## Hinzufügen eines neuen Prüfschritts

1. Erstellen Sie `scripts/check/check-<name>.mjs` (oder `.ts`). Richtlinienprüfschritte beenden sich mit 0/1.
   Ratchet-Prüfschritte schreiben über `collect-metrics.mjs` eine Metrik nach `quality-metrics.json`.
2. Fügen Sie `"check:<name>": "node scripts/check/check-<name>.mjs"` zu `package.json` hinzu.
3. Binden Sie ihn in `.github/workflows/ci.yml` unter dem passenden Job ein
   (Richtlinie → `lint` oder `docs-sync-strict`; Ratchet → `quality-gate`).
4. Falls er eine Positivliste verwendet, wenden Sie `reportStaleEntries()` aus
   `scripts/check/lib/allowlist.mjs` an, damit veraltete Einträge automatisch erkannt werden.
5. Schreiben Sie einen Test in `tests/unit/build/`, der die Erkennungslogik des Prüfschritts abdeckt.
6. Aktualisieren Sie dieses Dokument (fügen Sie der Tabelle des entsprechenden Jobs eine Zeile hinzu).

---

## Agentenwerkzeuge: LSP-in-the-loop (optional)

Zusätzlich zu den CI-Prüfschritten enthält OmniRoute ein **optionales** `agent-lsp`-Grundgerüst
(eine `.mcp.json` auf Projektebene, Phase 7, Aufgabe 15). Erstellen Sie `.mcp.json`,
um Coding-Agenten einen TypeScript-Sprachserver bereitzustellen, sodass sie Symbole /
Diagnosen **vor** dem Schreiben von Code auflösen — eine „Kompilieren vor dem Behaupten“-Ergänzung zu
`typecheck:core`, die Fehler durch „erfundene Symbole“ an der Quelle reduziert. Es wird absichtlich
nicht automatisch geladen (Sie wählen und überprüfen die MCP↔LSP-Brücke); ein fehlerhafter Eintrag protokolliert lediglich einen
Verbindungsfehler und unterbricht niemals Sitzungen.

---

## Rationalisierungs-Backlog (ROI-Überprüfung — Phase 9 Welle 3)

Dieses Inventar wurde am 2026-06-17 mit `ci.yml` abgeglichen (in der vorherigen Version fehlten
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence`). Eine ROI-Überprüfung des abgeglichenen Bestands
ergab die folgenden Rationalisierungskandidaten. **Die Zusammenführungen sind mechanische CI-
Änderungen; die Umstellungen/Streichungen sind Richtlinienentscheidungen, die dem Betreiber vorbehalten sind.** Keine der nachstehenden
Änderungen wurde bisher angewendet.

**Oben ebenfalls nicht dokumentiert** (nur hinweisend, geringe Aussagekraft): der Job `docs-lint`
(markdownlint + Vale, gesamter Job mit `continue-on-error`) und die eigenständigen Scanner-Workflows
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. `semgrepFindings: 0` ist in
`quality-baseline.json` enthalten, aber in `ci.yml` nicht mit einem blockierenden Ratchet verknüpft — die Metrik ist
derzeit verwaist.

### Zusammenführen / Deduplizieren (mechanisch, geringeres Risiko)

Jeder Kandidat wurde am 2026-06-17 anhand des aktuellen Gate-Status validiert (Vertrauen ist gut, Kontrolle ist besser);
mehrere „offensichtliche“ Zusammenführungen erwiesen sich als versteckte Altlasten und sind **keine** direkt einsetzbaren Ersetzungen.

- **`check:docs-sync` wird zweimal ausgeführt** — eigenständig im Job `lint` und erneut innerhalb von `check:docs-all` (`docs-sync-strict`) sowie im Husky-Pre-Commit-Hook. ✅ **ERLEDIGT** — eigenständiger Aufruf in `lint` entfernt.
- **CVE-Scanning** — ❌ **KEINE saubere Zusammenführung.** `audit:deps` schlägt bei jeder CVE mit hohem/kritischem Schweregrad zwingend fehl; `check:vuln-ratchet` (osv) schlägt nur bei einer _Regression_ gegenüber der Baseline fehl (derzeit 1 MODERATE). Unterschiedliche Semantik — durch das Entfernen von `audit:deps` ginge das absolute Gate für hohe/kritische Schweregrade verloren. Beide beibehalten.
- **Zyklenerkennung** — ❌ **KEINE saubere Zusammenführung.** `check:circular-deps` (dpdm) meldet **91 Zyklen** (deshalb ist die Prüfung nur hinweisend); sie kann nicht auf blockierend hochgestuft werden, ohne diese zuvor zu beheben, und ihr Umfang ist größer als der der erfolgreichen, kuratierten Prüfung `check:cycles`. `check:cycles` als blockierend beibehalten; die Behebung der 91 dpdm-Zyklen ist ein eigener Backlog-Eintrag.
- **Komplexität** — ✅ **ERLEDIGT** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): ein ESLint-Durchlauf, Zählung nach ruleId, sodass die Baselines für zyklomatische Komplexität + maximale Zeilenzahl und kognitive Komplexität unabhängig bleiben; die einzelnen Prüfungen `check:complexity` / `check:cognitive-complexity` bleiben für lokale Ausführungen mit `--update` erhalten.
- **`/api`-Anti-Halluzination** — ✅ **ERLEDIGT** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): ein einziges FS-Inventar von `src/app/api`; openapi-routes + docs-symbols melden weiterhin unabhängig; die einzelnen Prüfungen bleiben für lokale Ausführungen erhalten.
- **`check:node-runtime` wird in 11 Jobs ausgeführt** — ⚠️ **geringer ROI.** Jeder Job verwendet einen separaten Runner und die Prüfung dauert <1 s; Gesamtersparnis etwa 10 s, bei gleichzeitigem Verlust einer kostengünstigen Schutzprüfung pro Job. Den Änderungsaufwand nicht wert.
- **`typecheck:noimplicit:core` im CI-Linting** — ✅ **aus dem Job `lint` entfernt** (war mit `continue-on-error` nur hinweisend); die blockierende Typoberfläche besteht aus `typecheck:core` + `check:type-coverage`. Lokales Skript beibehalten.

### Umstellen / Entscheiden (Betreiberrichtlinie)

- `check:openapi-security-tiers` (hinweisend) — ❌ **NICHT ohne Weiteres umstellbar.** Die Prüfung wird mit 0 beendet, warnt jedoch, dass bei mehreren `traffic-inspector`-Routen unter `LOCAL_ONLY_API_PREFIXES` die Annotation `x-loopback-only: true` fehlt. Für eine Erzwingung müssen diese Annotationen zuerst zu `openapi.yaml` hinzugefügt werden.
- `typecheck:noimplicit:core` (hinweisend) — weitgehend durch das blockierende Ratchet `check:type-coverage` abgedeckt. Auf ein Ratchet umstellen oder den redundanten zweiten `tsc`-Durchlauf entfernen.
- `test:vitest:ui` (jetzt **blockierend**) — bereits bestehende Fehler werden in `vitest.config.ts` explizit mit `// #8618`-Nachverfolgungskommentaren ausgeschlossen; neue Fehler lassen den Job fehlschlagen.
- `check:secrets` (gitleaks, blockierendes Ratchet, bei 3 dokumentierten Falschmeldungen eingefroren) — die 3 auf die Positivliste setzen, um 0 zu erreichen, oder auf hinweisend herabstufen. Überschneidet sich mit dem nativen GitHub-Secret-Scanning + `check:public-creds`.
- `check:pr-evidence` (blockierend, durchsucht den Fließtext des PR-Bodys mit grep) — hohes Falsch-positiv-Risiko; eine Entfernung schwächt die Durchsetzung von Hard Rule #18, daher handelt es sich um eine echte Richtlinienentscheidung.
- `semgrep` (eigenständig, hinweisend) — überschneidet sich bei den OWASP-Familien mit CodeQL; die Baseline mit einem Ratchet verknüpfen oder entfernen.

---

## Verwandte Dokumentation

- Lieferkette (Herkunftsnachweise, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — Prüfschranke für die Übereinstimmung der Schlüsselmengen

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, Job `i18n-ui-coverage`).
Vergleicht die Menge der Blattschlüssel jeder Datei unter `src/i18n/messages/<locale>.json` mit `en.json` und schlägt
bei jedem fehlenden oder zusätzlichen Blatt fehl, unabhängig davon, wann der Schlüssel hinzugefügt wurde. `__MISSING__:`-Platzhalter
gelten als vorhanden (ihr Inhalt fällt in den Zuständigkeitsbereich der Quotenschranke). Dies ist die absolute Ergänzung
zu den beiden diff-/prozentbasierten Prüfschranken: `check-ui-keys-coverage` erzwingt eine Untergrenze von 80 % pro
Gebietsschema (43 fehlende Schlüssel von ~13.000 ergeben immer noch 99,7 %), und `check-new-key-coverage` bewertet
nur die Schlüssel, die ein PR zu `en.json` hinzufügt. Ein Gebietsschema-Batch wird aus dem `en.json` des Tages generiert,
an dem sein Branch erstellt wird, und wird über mehrere Tage hinweg übersetzt, während die Basis weiterhin neue Schlüssel erhält; der Batch-PR fügt selbst keinen
Schlüssel hinzu, sodass beide verwandten Prüfungen stumm blieben, als Batch 1 (#13044) mit 43 fehlenden Schlüsseln in neun
Gebietsschemata und Batch 2 (#13660) mit 10 fehlenden Schlüsseln in acht Gebietsschemata integriert wurden (2026-09-15). Beheben Sie einen roten Status mit
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers`; ein `extra`-Blatt
bedeutet, dass die Quelle es entfernt hat — löschen Sie es aus dem Gebietsschema. `--warn` meldet Probleme, ohne fehlzuschlagen.
`--catalog=cli` führt denselben Vergleich für `bin/cli/locales` aus (`npm run i18n:check-keys:cli`);
beide Schritte befinden sich im Job `i18n-ui-coverage`.

#### `check-new-key-coverage` — i18n-Prüfschranke für neue Schlüssel

Verwandte Prüfung von `check-ui-value-drift`. Diese erkennt einen englischen Wert, der **neu formuliert** wurde,
während seine Übersetzungen unverändert blieben; diese hier erkennt einen englischen Schlüssel, der **hinzugefügt** wurde,
während einige Gebietsschemata ihn nie erhielten.

`check-ui-keys-coverage` kann diese Fehlerklasse nicht erkennen: Die Prüfung erzwingt eine prozentuale Untergrenze pro Gebietsschema, und
elf fehlende Schlüssel von ~13.000 lassen die Abdeckung bei 99,9 %. Ein Prozentsatz pro Sprache kann nicht
ausdrücken: „Diese Funktion wurde unübersetzt ausgeliefert“ — eine vollständige Funktion kann ohne jeglichen
Text in einem neuen Gebietsschema landen, ohne dass sich die Zahl je verändert.

Der damit abgebildete Vorfall: Phase 3 des Orchestration Canvas übersetzte ihre elf Schlüssel in
die damals vorhandenen 42 Gebietsschemata. Stunden später erhöhte der EU-Sprachen-Batch (#13044) die Anzahl im Repository
auf 51 Gebietsschemata, und die neun Neuzugänge (`el`, `et`, `ga`, `hr`, `lt`, `lv`, `mt`, `sl`, `sr`) erhielten
sie nie. `deepMergeFallback` ersetzt einen fehlenden Schlüssel durch Englisch, daher bestand der Fehlerzustand
in einer unübersetzten statt einer leeren Benutzeroberfläche — real und konstruktionsbedingt unbemerkt.

Wie die verwandte Prüfung ist auch diese **diff-bewusst** und vergleicht Englisch am Merge-Base mit dem Arbeitsbaum,
sodass bereits vorhandene Lücken unverändert bleiben und für die Aktivierung der Prüfschranke keine Migration erforderlich war. Ausweichlösung:
`__MISSING__:<english>` verschiebt eine Übersetzung auf später und hält zugleich das Laufzeitverhalten korrekt. `vi` verbietet
Platzhalter (`tests/unit/i18n-vi-completeness.test.ts`) und erfordert eine echte Übersetzung.

#### `check-vitest-exclusions` — Prüfschranke für zurückgestellte Tests

Eine Datei in der `exclude`-Liste von `vitest.config.ts` ist ein Test, der nicht ausgeführt wird, aber für jeden,
der den Verzeichnisbaum liest, wie Abdeckung aussieht. Zweiundsechzig Dateien sammelten sich hinter dem Kommentar
`// #8618 — pre-existing failure; remove this exclusion when fixed`. Issue #8618 wurde am
2026-08-11 geschlossen, während die darin nachverfolgte Liste von 45 auf 62 Einträge anwuchs, wobei jeder neue Eintrag einen Kommentar
übernahm, der auf ein abgeschlossenes Issue verwies. Als die Liste schließlich Datei für Datei geprüft wurde (#13204), **bestanden 51 der 62
Tests mit dem aktuellen Arbeitsbaum ohne jegliche Quellcodeänderung**.

Die Prüfschranke verlangt, dass jeder Ausschluss, der auf eine reale Datei verweist, (a) ein nachverfolgtes Issue nennt und
(b) mit seinem gemessenen Status in `config/quality/vitest-exclusions.json` erscheint, sodass das Hinzufügen eines Ausschlusses
einen überprüfbaren Diff in einer dedizierten Datei erzeugt, statt nur eine weitere Zeile in einem Array mit 60 Einträgen zu sein. Die Prüfung führt
die ausgeschlossenen Tests bewusst nicht erneut aus — das kostet ~10 Minuten und gehört in einen regelmäßigen Job; das
Inventar hält fest, wann jeder Test zuletzt gemessen wurde.
