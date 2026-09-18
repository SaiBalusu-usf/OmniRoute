# Quality Gates Reference (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

Dette dokumentet er den autoritative referansen for alle CI-kvalitetsporter i OmniRoute.
Det beskriver hver port, hva den validerer, hvilken CI-jobb den kjører i, om den bruker
en ratchet-baseline eller en bestått/ikke bestått-policy, og om den blokkerer bygget eller kun er rådgivende.

For et kort sammendrag og policyen for tillatelseslisten, se delen "Quality Gates & Ratchets"
i `AGENTS.md`. For den kritiske vurderingen, modenhetsklassifiseringen og den verktøyagnostiske
replikeringsplanen for det samme systemet, se
[Håndbok for kvalitetsporter](../ops/QUALITY_GATE_PLAYBOOK.md).

---

## Portoversikt (~90 skript)

Skriptene ligger under `scripts/check/` (policyporter) og `scripts/quality/` (ratchet-motor).
Den autoritative CI-kilden er `.github/workflows/ci.yml`.

### Hurtigløp for release-PR-er (`quality.yml`)

`.github/workflows/quality.yml` kjører på PR-er rettet mot `release/**`. Den holder bidragsyternes
grener i bevegelse med stifiltrerte hurtigporter, i tillegg til ett rådgivende signal fra produksjonsbygg for
kodeendringer:

| Jobb                                             | Omfang                                                                                                                                                                                                                           | Blokkerende                                                                                            |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `Build (advisory)`                               | Ikke-utkast av kode-PR-er og Mergify-køgrener; Node 24, `npm-ci-retry`, `check:node-runtime`, `npm run build` med `OMNIROUTE_USE_TURBOPACK=1`; ingen opplasting av artefakter fordi ingen etterfølgende kvalitetsjobb bruker dem | **Rådgivende** (`continue-on-error: true`; fjern etter én uke med stabile kjøringer for release-PR-er) |
| `Docs Gates (fast-path)`                         | Dokumentasjons-/kode-PR-er; referanser i API-dokumentasjonen og docs-all                                                                                                                                                         | Ja                                                                                                     |
| `Fast Quality Gates`                             | Kode-PR-er; statiske kontroller, typekontroll, typekontroll av instrumentpanelet, berørte enhetstester                                                                                                                           | Ja                                                                                                     |
| `Forgotten sibling tests`                        | Kode-PR-er; endrede moduler spores til statiske konsumenter og mulige tilhørende tester; barrel- og dynamiske importstier rapporteres som rådgivende diagnostikk, med refererte unntak i tillatelseslisten                       | **Rådgivende**                                                                                         |
| `Vitest (fast-path)`                             | Kode-PR-er; rask Vitest-testpakke                                                                                                                                                                                                | Ja                                                                                                     |
| `Unit Tests fast-path`                           | Kode-PR-er; enhetstestpakke fordelt på 4 shards                                                                                                                                                                                  | Ja                                                                                                     |
| `No new ESLint warnings`                         | Kode-PR-er; undertrykkelsesbevisst lint-vakt                                                                                                                                                                                     | Ja for PR-er fra samme repository, rådgivende for forks                                                |
| `Merge integrity (changelog + generated skills)` | Ikke-utkast av PR-er; synkronisering av endringslogg og genererte ferdigheter                                                                                                                                                    | Ja for PR-er fra samme repository, rådgivende for forks                                                |

#### Rapport om glemte tilhørende tester

`npm run check:forgotten-sibling-tests` gjenbruker importløseren bak kartet over testpåvirkning.
For hver endrede produksjonsmodul rapporterer den deterministiske kjeder av typen
`endret modul/symbol -> statisk konsument -> mulig tilhørende test` når den mulige
testen ikke finnes i pull request-diffen. Markdown-sammendraget og JSON-resultatet beholdes som
arbeidsflytartefaktet `forgotten-sibling-tests` for kalibrering før en eventuell blokkerende utrulling.

Barrel-re-eksporter og dynamiske importer er kun diagnostikk for oppløsning; de oppretter aldri et
blokkerende funn. Gjennomgåtte unntak ligger i
`config/quality/forgotten-sibling-allowlist.json`. Hver oppføring må angi konsumenten og den mulige
testen, gi en spesifikk begrunnelse og lenke til en GitHub-sak eller pull request. Feilformede oppføringer
fører til avvisning. Unntak kan ikke undertrykke en slettet mulig test eller en diff som legger til `.skip`/`.todo`;
svekkelse av assertions og annen maskering håndteres fortsatt av den uavhengig blokkerende
`check:test-masking`-porten.

### Jobb: `lint`

Kjører på hver PR til `main`. Blokkerer sammenslåing ved feil.

| Skript (`npm run ...`)            | Validerer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Blokkerende                                |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| `check:node-runtime`              | Node.js-versjonen er innenfor det støttede området                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Ja                                         |
| `check:cycles`                    | Sirkulære importer — alle moduler i `src/` + `open-sse/`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Ja                                         |
| `check:route-validation:t06`      | Zod-skjemaer finnes på alle ruter (retningslinjer for nivå 6)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Ja                                         |
| `check:any-budget:t11`            | Antallet `@ts-expect-error // any` overskrider ikke grensen (nivå 11-catraca)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Ja                                         |
| `check:provider-consistency`      | Hver leverandør i `providers.ts` har en samsvarende oppføring i `providerRegistry.ts` (og omvendt, innenfor tillatelseslisten)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Ja                                         |
| `check:model-lifecycle`           | De tre manuelt vedlikeholdte rutingtabellene forblir konsistente med det innsjekkede livssyklusøyeblikksbildet (#11503): `FITNESS_TABLE` (`taskFitness.ts`) poengsetter ingen utfaset id som `REGISTRY` kan rute; hvert mål i `BUILT_IN_ALIASES` finnes i `REGISTRY` og er fraværende i øyeblikksbildet over utfasede id-er; hver utfaset id som fortsatt finnes i `REGISTRY`, videresendes eller er oppført i `allowedRetiredInCatalog`; og ingen kilde eller mål i `DEFAULT_DEGRADATION_MAP` er markert som utfaset i dette øyeblikksbildet. Dette beviser ikke at en modell for øyeblikket betjenes av en aktiv oppstrømstjeneste. Frakoblet — sammenligner med `config/quality/model-lifecycle.json`, som oppdateres manuelt med `npm run quality:refresh-model-lifecycle` (krever nettverk; ikke koblet til CI). `allowedRetiredInCatalog` er en gradvis innstrammingsmekanisme: legg bare til en oppføring med en sporingssak. | Ja                                         |
| `check:fetch-targets`             | Hver `fetch("/api/...")` i `src/` på klientsiden peker til en faktisk `route.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Ja                                         |
| `check:deps`                      | Alle avhengigheter som kan installeres med `npm install`, på tvers av hver `package.json` i repositoriet, finnes i `dependency-allowlist.json`; nye avhengigheter som ikke er låst til en versjon, eller pakker med navn som etterligner andre pakker, flagges                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Ja                                         |
| `audit:deps`                      | `npm audit` (rot + electron) — ingen varsler med høy eller kritisk alvorlighetsgrad (overlapper med osv `check:vuln-ratchet`; se rasjonaliseringsetterslepet)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Ja                                         |
| `check:lockfile`                  | Integriteten til `package-lock.json` — https-register, integritetshasher, ingen vertsoverstyringer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Ja                                         |
| `check:licenses`                  | SPDX-lisenstillatelsesliste for produksjonsavhengigheter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Ja                                         |
| `check:tracked-artifacts`         | Ingen byggartefakter / innsendte `node_modules`-symbolske lenker (kjøres også i Husky pre-commit; pre-push er bevisst lett — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Ja                                         |
| `check:vitest-exclusions`         | Hvert Vitest-unntak angir en sporingssak og finnes i `config/quality/vitest-exclusions.json` (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Ja                                         |
| `check:file-size`                 | Ingen kildefil overskrider grensen per filtype (skralle: fastlåste store filer i `frozen`-listen)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Ja                                         |
| `check:error-helper`              | Feilsvar i eksekutorer/behandlere bruker `buildErrorBody()` / `sanitizeErrorMessage()` (ufravikelig regel nr. 12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Ja                                         |
| `check:migration-numbering`       | SQL-migreringsfiler er nummerert fortløpende, uten hull eller duplikater                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Ja                                         |
| `check:public-creds`              | Ingen bokstavelige OAuth-verdier for `client_id`/`client_secret` eller Firebase Web-nøkler utenfor `publicCreds.ts` (ufravikelig regel nr. 11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Ja                                         |
| `check:db-rules`                  | Ingen rå SQL utenfor modulene i `src/lib/db/`; ingen barrel-importer fra `localDb.ts` (ufravikelige regler nr. 2/5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Ja                                         |
| `check:known-symbols`             | Leverandøreksekverere, rutingsstrategier og oversettere som er registrert i sine dispatch-tabeller, samsvarer med filene på disken – ingen foreldreløse eller udeklarerte symboler                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Ja                                         |
| `check:route-guard-membership`    | Hver rute som starter en underprosess, er klassifisert av `isLocalOnlyPath()` (ufravikelige regler nr. 15/17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Ja                                         |
| `check:test-discovery`            | Hver `*.test.ts`- / `*.spec.ts`-fil i repoet samles inn av minst én testkjører (skrallemekanisme: listen over foreldreløse filer i `test-discovery-baseline.json` kan bare krympe)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Ja                                         |
| `check:agent-skills-sync`         | Genererte agentferdighetsartefakter samsvarer med kildekatalogen (ingen avvik)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `check:provider-asset-provenance` | Leverandørlogoer/-ressurser har en registrert proveniensoppføring                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `lint:json`                       | JSON-konfigurasjonsfiler kan analyseres og oppfyller repoets lint-regler                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `typecheck:core`                  | TypeScript-kompilering uten feil (kun rådgivende advarsler)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Ja                                         |
| `typecheck:noimplicit:core`       | Streng `noImplicitAny` — fremtidsrettet; mange eksisterende kallsteder trenger fortsatt annotasjoner                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | **Rådgivende** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `tsc` avgrenset til `src/app/(dashboard)/**` (#7033) — den nøye utvalgte tillatelseslisten på 27 filer i `typecheck:core` inkluderer ingen TSX-filer for kontrollpanelet, og `next build` typesjekker dem heller aldri (`next.config.mjs` angir `ignoreBuildErrors: true`), så regresjoner med foreldreløse identifikatorer der (#6625/#6909) var usynlige for CI. Sammenligner mot en fastlåst grunnlinje for antall per fil/per TS-kode (`config/quality/dashboard-typecheck-baseline.json`, samme mønster for håndheving av utdatert grunnlinje som `check:known-symbols`) — bare NYE feil utover det grunnlinjefestede antallet får kontrollen til å feile; reduser grunnlinjen med `--update` når en eksisterende feil rettes.                                                                                                                                                                                                  | Ja                                         |

### Jobb: `quality-gate`

Kjøres etter `test-coverage`. Blokkerer sammenslåing ved feil.

| Skript                       | Validerer                                                                                                                                                                             | Blokkerende                          |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| `quality:collect`            | Genererer `quality-metrics.json` (antall ESLint-advarsler, dekning fra den sammenslåtte delrapporten)                                                                                 | Ja (oppstrøms for skrallemekanismen) |
| `quality:ratchet`            | Ingen måleverdi i `quality-baseline.json` har blitt dårligere (ESLint-advarsler ≤ grunnlinjen; dekning ≥ grunnlinjen)                                                                 | Ja                                   |
| `check:duplication`          | Kodeduplisering (jscpd@4) overskrider ikke grunnlinjen i `quality-baseline.json`                                                                                                      | Ja                                   |
| `check:complexity`           | Syklomatisk kompleksitet på filnivå overskrider ikke grensen (ESLint-kjernereglene `complexity` + `max-lines-per-function`)                                                           | Ja                                   |
| `check:cognitive-complexity` | Skrallemekanisme for kognitiv kompleksitet (`eslint-plugin-sonarjs`) — separat ESLint-kjøring; CI kjører begge samlet som det ene trinnet `check:complexity-ratchets`                 | Ja                                   |
| `check:dead-code`            | Skrallemekanismen for ubrukte eksporter/filer (knip) blir ikke dårligere sammenlignet med grunnlinjen                                                                                 | Ja                                   |
| `check:compression-budget`   | Budsjett for komprimeringsreferansetesten — minimumskravene til tokenbesparelser per motor må ikke bli dårligere                                                                      | Ja                                   |
| `check:type-coverage`        | Skrallemekanismen for prosentandel typet kode (`type-coverage`) blir ikke dårligere; erstatter i stor grad `typecheck:noimplicit:core`                                                | Ja                                   |
| `check:codeql-ratchet`       | Antallet åpne CodeQL-varsler blir ikke høyere (leses via `gh api`; hoppes elegant over uten token) — oppdateringsfrekvens og manuell utløsning: se «CodeQL-skrallemekanisme» nedenfor | Ja                                   |

### Jobb: `quality-extended`

Hele jobben er rådgivende (`continue-on-error: true`). De npm-baserte sperrehakene kjører på
ordentlig; de eksterne skannerne installeres via `gh release download` og hopper over seg selv (exit 0)
når en binærfil fortsatt mangler.

| Skript                   | Validerer                                                                                                                                                                                                                     | Blokkerende    |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `check:circular-deps`    | Ingen sirkulære avhengigheter (dpdm)                                                                                                                                                                                          | **Rådgivende** |
| `check:bundle-size`      | Pakkestørrelsen overstiger ikke grensen                                                                                                                                                                                       | **Rådgivende** |
| `check:secrets`          | Skanning etter hemmeligheter (gitleaks) — hoppes over hvis binærfilen mangler                                                                                                                                                 | **Rådgivende** |
| `check:vuln-ratchet`     | Sårbarheter i avhengigheter (osv-scanner) forverres ikke — hoppes over hvis binærfilen mangler                                                                                                                                | **Rådgivende** |
| `check:workflows`        | Linting av arbeidsflyter (actionlint + zizmor) — hoppes over hvis binærfilene mangler                                                                                                                                         | **Rådgivende** |
| `check:openapi-breaking` | Inkompatible endringer i den offentlige API-kontrakten (`openapi.yaml`) sammenlignet med basisgrenen (oasdiff) — sender ut `openapiBreaking=N`; hoppes over hvis oasdiff mangler eller basisspesifikasjonen ikke kan fastslås | **Rådgivende** |

### Jobb: `docs-sync-strict`

Kjører for hver PR til `main`. Blokkerer sammenslåing ved feil.

| Skript                         | Validerer                                                                                                                                                               | Blokkerende              |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `check:docs-all`               | Metakontroll som kjører de 6 underkontrollene nedenfor sekvensielt                                                                                                      | Ja                       |
| ↳ `check:docs-sync`            | Versjonssamsvar mellom CHANGELOG / OpenAPI / llm.txt                                                                                                                    | Ja                       |
| ↳ `check:docs-counts`          | Antall i prosa (antall leverandører, antall migreringer osv.) er innenfor sperrehakevinduet til de faktiske antallene                                                   | Ja                       |
| ↳ `check:env-doc-sync`         | Hver miljøvariabel i `.env.example` er dokumentert i en dokumentasjonstabell, og omvendt                                                                                | Ja                       |
| ↳ `check:deprecated-versions`  | Ingen utdaterte versjonsstrenger i dokumentasjonen                                                                                                                      | Ja                       |
| ↳ `check:doc-links`            | Interne markdown-lenker i dokumentasjonen peker til faktiske filer (`[text]`/`(path)`-format)                                                                           | Ja                       |
| ↳ `check:fabricated-docs`      | Ruter, miljøvariabler, CLI-kommandoer, hook-navn og filbaner som er oppgitt i dokumentasjonen, finnes i kodebasen. Hard kontroll via `--strict`; myk feil uten flagget. | Ja (via `--strict` i CI) |
| `check:cli-i18n`               | CLI-kommandostrenger finnes i alle i18n-lokaliseringsfiler                                                                                                              | Ja                       |
| `check:openapi-coverage`       | OpenAPI-spesifikasjonen dekker minst et sperrehakejustert minimum av faktiske ruter                                                                                     | Ja                       |
| `check:openapi-security-tiers` | Merknader om sikkerhetsnivåer i `openapi.yaml` samsvarer med klassifiseringene i `routeGuard.ts`                                                                        | **Rådgivende**           |
| `check:openapi-routes`         | Hver bane i `openapi.yaml` peker til en faktisk `route.ts` (anti-hallusinasjon)                                                                                         | Ja                       |
| `check:docs-symbols`           | Hver `/api/...`-referanse i `docs/**/*.md` peker til en faktisk `route.ts` (anti-hallusinasjon)                                                                         | Ja                       |
| `i18n translation drift`       | Ikke-oversatte nøkler i i18n-lokaliseringsfiler — kun advarsel                                                                                                          | **Rådgivende**           |

### Jobb: `i18n-ui-coverage`

| Skript                              | Validerer                                                                                                                                                                                                              | Blokkerende    |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `check-ui-keys-coverage` (innebygd) | Dekningen av UI-i18n-nøkler er ≥ 65 %                                                                                                                                                                                  | Ja             |
| `check-ui-value-drift` (innebygd)   | En omskrevet engelsk **verdi** etterlater ingen foreldet oversettelse                                                                                                                                                  | Ja             |
| `check-new-key-coverage` (innebygd) | En **ny** engelsk nøkkel når alle språkinnstillinger                                                                                                                                                                   | Ja             |
| `check-translation-ratio`           | Andelen reelle oversettelser per språkinnstilling (identisk med engelsk / plassholder / manglende blader utenfor tillatelseslisten) må ikke overstige `config/quality/i18n-translation-baseline.json` + slingringsmonn | **Rådgivende** |

Krever `fetch-depth: 0` — porten for verdiavvik sammenligner `en.json` med flettebasen.

#### `check-ui-value-drift` — port for foreldede oversettelser

Fanger opp den ene i18n-regresjonen som de andre portene strukturelt sett ikke kan oppdage: En engelsk verdi
skrives om, mens oversettelsene som er utledet fra den _forrige_ engelske teksten, blir stående, slik at
ikke-engelske brukere fortsetter å lese selvsikkert formulerte, men nå feilaktige tekster.

Dette ble faktisk levert. `oauthModal.googleOAuthWarning` ble skrevet om da Antigravity-
innloggingshjelperen ble lansert (#5203); **39 av 43 språkinnstillinger** beholdt tekst som ba operatører om å «kopiere
hele URL-en og lime den inn nedenfor» — en flyt som ikke kan fullføres for denne leverandøren. Det
gikk upåaktet hen frem til #8463 fordi:

- `sync-ui-keys` fyller bare inn nøkler som **mangler**, aldri nøkler som er **foreldede**;
- `check-ui-keys-coverage` teller nøkkelens _tilstedeværelse_, så en foreldet oversettelse regnes som dekket;
- `check-translation-drift` sporer dokumentasjonsspeilene `docs/i18n/<locale>/**.md` —
  den leser aldri `src/i18n/messages/*.json`. Blokkerende i jobben `docs-sync-strict` siden
  re-synkroniseringen i 2026-09: rediger et kjernedokument → `npm run i18n:run -- --files=<doc>` (på seksjonsnivå, rimelig).

**Diff-bevisst, ikke basert på en referanseverdi.** Den sammenligner `en.json` ved flettebasen med
arbeidstreet. For hver nøkkel der den engelske verdien er endret, er enhver språkinnstilling som fortsatt har en
urørt oversettelse, foreldet. Dette **fryser bevisst eksisterende etterslep** — en diff
kan ikke avsløre hvilken gammel engelsk tekst en langvarig oversettelse stammer fra, så porten vurderer
bare det den gjeldende endringen berører. Alternativet (en hash-referanseverdi per nøkkel) ville kreve
en generert fil på ~600 KB, 3× større enn den største eksisterende referanseverdien, og skape endringsstøy i hver i18n-PR.

Det finnes to måter å oppfylle kravet på:

1. oppdater de berørte oversettelsene, eller
2. sett dem til `__MISSING__:<new english>` — kjøretidsmiljøet viser da den korrigerte engelske teksten
   (`src/i18n/request.ts::deepMergeFallback`, #7258), og nøkkelen legges i oversettelseskøen.

Hvis strengens **betydning** er endret, bør du foretrekke å **gi nøkkelen et nytt navn**: En ny nøkkel kan ikke arve
en foreldet oversettelse. Det var mønsteret #8463 brukte.

```bash
npm run i18n:check-value-drift          # streng (det CI kjører)
npm run i18n:check-value-drift:warn     # bare rapportering
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

Avslutter med 0 og `SKIP reason=base-unresolved` når basiskatalogen ikke kan leses (grunn
klone uten basereferansen), på samme måte som `check-openapi-breaking`.

### Jobb: `i18n`

Full valideringsmatrise for i18n (én jobb per språkinnstilling). Hele jobben er rådgivende.

| Skript                          | Validerer                                        | Blokkerende                                                |
| ------------------------------- | ------------------------------------------------ | ---------------------------------------------------------- |
| `validate_translation.py quick` | Oversettelsesfullstendighet per språkinnstilling | **Rådgivende** (`continue-on-error: true` for hele jobben) |

### Jobb: `pr-test-policy`

Kjører bare ved pull requests.

| Skript                 | Validerer                                                                                                                              | Blokkerende |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `check:pr-test-policy` | PR-er som endrer produksjonskode i `src/`, `open-sse/`, `electron/` eller `bin/`, må inkludere eller oppdatere tester (hard regel #8)  | Ja          |
| `check:test-masking`   | Endrede testfiler reduserer ikke nettoantallet av assert-uttrykk og legger ikke til `assert.ok(true)`-tautologier                      | Ja          |
| `check:pr-evidence`    | PR-teksten viser til test-/VPS-bevis for endringen (automatiserer hard regel #18 ved å søke gjennom PR-teksten — skjørt, se Etterslep) | Ja          |

### Jobb: `test-vitest`

Kjører etter `build`. Blokkerer sammenslåing ved feil.

| Testpakke        | Validerer                                                         | Blokkerende                                                                                                          |
| ---------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP-server (110 verktøy), autoCombo, hurtigbuffer — vitest-kjører | Ja                                                                                                                   |
| `test:vitest:ui` | Tester av UI-komponenter — vitest-kjører                          | **Blokkerende** — eksisterende feil er eksplisitt ekskludert i `vitest.config.ts`; nye feil gjør at jobben mislykkes |

### Nattlige arbeidsflyter (planlagte, rådgivende)

Disse kjøres etter en cron-plan (og `workflow_dispatch`), aldri på PR-er. Alle er rådgivende.

| Arbeidsflyt            | Validerer                                                                                                                                                                | Blokkerende    |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| `nightly-property`     | fast-check-egenskapstester med et tilfeldig seed og et høyt antall kjøringer                                                                                             | **Rådgivende** |
| `nightly-resilience`   | grensekontroll for heap-vekst, feilinjeksjon med kaos og k6-belastnings-/utholdenhetstesting                                                                             | **Rådgivende** |
| `nightly-llm-security` | promptfoo-injeksjonsbeskyttelse (blokkeringsmodus) + garak-prober (hoppes over uten en leverandørhemmelighet)                                                            | **Rådgivende** |
| `nightly-schemathesis` | Fuzzing av OpenAPI-kontrakten (schemathesis) mot en kjørende OmniRoute ved bruk av `docs/openapi.yaml` — avdekker spesifikasjonsbrudd / uhåndterte 500-feil (Fase 8 B.4) | **Rådgivende** |
| `nightly-mutation`     | Stryker-mutasjonstestscore for den raske enhetstestbanen — overlevende mutanter avdekker svake assert-setninger                                                          | **Rådgivende** |
| `nightly-compat`       | Kompatibilitetsmatrise for Node-motoren på tvers av de støttede `engines.node`-intervallene                                                                              | **Rådgivende** |

---

## Velocity-fase (2026-08-30 → v4.0 LTS): alle grunnverdier lempet med 20 %

Beslutning fra eier (2026-08-30): Frem til modulariseringen i v4.0 er leveringshastighet viktigere
enn å holde den tekniske gjelden i sjakk. Alle **numeriske** grunnverdier for ratchet-mekanismer ble lempet med 20 % i én
reviderbar operasjon, og fasen er deklarert i `config/quality/quality-baseline.json`:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| Hva ble endret                                                                                                                                                                                                          | Hvor                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — antall der lavere er bedre ×1,2, prosentandeler der høyere er bedre ÷1,2 (dekningsgulvet på 60 beholdt, `eslintErrors` forblir 0, `eslintWarnings` 0 → 20 % av det fryste antallet undertrykkelser) | `quality-baseline.json` (`_relax_velocity_2026_08_30`-merknaden viser alle før → etter)                |
| `count` ×1,2 / `percentage` ×1,2                                                                                                                                                                                        | `complexity-baseline.json`, `duplication-baseline.json`                                                |
| `cap`, `testCap`, alle linjegrenser i `frozen[*]` / `testFrozen[*]` ×1,2                                                                                                                                                | `file-size-baseline.json`                                                                              |
| antall per fil / per TS-kode ×1,2                                                                                                                                                                                       | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json` |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                     | `scripts/check/check-openapi-coverage.mjs`                                                             |
| `--require-tighten` blir veiledende så lenge `_policy.requireTighten === false`                                                                                                                                         | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| nattlig `bank-ratchet-shrinks` settes på pause (den ville ha lagret den målte reduksjonen og fjernet slingringsmonnet)                                                                                                  | `.github/workflows/nightly-release-green.yml`                                                          |

Tillatelseslister (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) er **ikke** budsjetter og ble ikke endret. Bestått/ikke bestått-policyporter (hemmeligheter, SQL-regler,
docs/env-kontrakt, i18n-paritet, enhetstester) er uendret — en rød test er fortsatt en rød test.

**Verktøy**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — engangslempingen
  (`scripts/quality/relax-baselines.mjs`); nekter å kjøre to ganger med samme merknad.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  måler hver numeriske port på samme måte som CI og skriver ut gjenværende slingringsmonn per port
  (`scripts/quality/baseline-headroom.mjs`). Den nattlige `baseline-headroom`-jobben publiserer
  tabellen i den løpende saken **📈 Slingringsmonn for grunnverdier (velocity-fase)** og legger til
  etiketten `headroom-alert` når en port er innenfor 10 % av grensen eller allerede har overskredet den. Denne saken
  fungerer som tidlig varsling: Et budsjett som fylles på få dager, betyr at lempingen blir brukt opp av
  noen få PR-er, ikke av hele teamet — se på `_rebaseline_*`-merknadene for porten det gjelder.

**Modus for ny kode (Clean-as-You-Code) — siden 2026-08-30, kun rask PR-flyt**

Ved `pull_request`-hendelser sender `quality.yml` `--base-ref <PR base SHA>` til `check:file-size`,
`check:complexity-ratchets` og `check:dead-code`. I denne modusen sammenligner porten HEAD med
merge-basen, **begrenset til filene PR-en berørte** (`scripts/check/newCodeMode.mjs`: merge-basen
materialiseres i en midlertidig `git worktree`, ESLint/knip kjøres der og på HEAD, og antallene
per fil sammenlignes):

- **blokkerende** — PR-en la til syklomatiske/kognitive brudd eller døde eksporter i filer den endret
  (`complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=` i loggen);
- **veiledende** — global sum sammenlignet med den fryste grunnverdien. Nedarvet avvik gjør aldri en
  uskyldig PR rød; avviket fryses på nytt ved avstemmingen før utgivelse og overvåkes av slingringsmonnjobben.

`workflow_dispatch`-kjøringer, release-green-gjennomgangen og den nattlige slingringsmonnjobben har ingen PR-base
og beholder den absolutte (globale) sammenligningen. Dekning, duplisering og typedekning forblir globale
foreløpig (verktøyene deres produserer ikke en differanse per fil på en rimelig måte) — kandidater for samme behandling.

**Avslutning av fasen ved v4.0 (LTS = strammere enn før, ikke «tilbake til normalen»)**

1. På den rene spissen av `release/v4.0.0`: Kjør `npm run quality:headroom --json` for dokumentasjon, deretter
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update` og hver typekontrollports
   `--update` — alle grunnlinjer senkes til den målte verdien.
2. Slett `_policy` fra `quality-baseline.json` (aktiverer `--require-tighten` og den nattlige
   akkumuleringen på nytt), og gjenopprett `THRESHOLD = 36` (eller høyere) i `check-openapi-coverage.mjs`.
3. Stram inn utover det målte der modulariseringen ga resultater: Sett `cap` for filstørrelse tilbake til 1000
   (eller 800), øk minimumsgrensene for dekning med 5, og sett døde eksporter til 0 for de modulariserte pakkene.

## Ratchet-grunnlinje (`quality-baseline.json`)

Ratchet-motoren (`scripts/quality/check-quality-ratchet.mjs`) leser `quality-baseline.json`
og sammenligner den med den nylig innsamlede `quality-metrics.json`. Alle måleverdier som forverres
utover sin epsilon, fører til at bygget mislykkes.

Måleverdier som spores for øyeblikket:

| Måleverdi             | Retning | Betydning                             |
| --------------------- | ------- | ------------------------------------- |
| `eslintWarnings`      | `down`  | Antallet ESLint-advarsler må ikke øke |
| `coverage.statements` | `up`    | Dekningen av utsagn må ikke synke     |
| `coverage.lines`      | `up`    | Linjedekningen må ikke synke          |
| `coverage.functions`  | `up`    | Funksjonsdekningen må ikke synke      |
| `coverage.branches`   | `up`    | Forgreningsdekningen må ikke synke    |

Slik oppdaterer du grunnlinjen etter en reell forbedring:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

Flagget `--update` skriver de gjeldende målte verdiene til `quality-baseline.json`.
Commit denne filen sammen med endringen som forbedret måleverdien. En PR som forbedrer en
måleverdi uten å oppdatere grunnlinjen, vil bli fanget opp av `--require-tighten` (fase 6A.5,
venter på implementering).

### CodeQL-ratchet: oppdateringsfrekvens og manuell utløsning

`check:codeql-ratchet` leser **tilstanden til repositoriet, som oppdateres etter en tidsplan — ikke per PR.**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` rapporterer
`state: configured`, `schedule: weekly`: GitHubs skanning med standardoppsett, ikke en analyse
for hver push. Konsekvens: Etter at en PR som RETTER varsler, er slått sammen, fortsetter ratchet-motoren
å lese det gamle, høyere antallet frem til neste planlagte skanning kjøres — dermed rapporterer den en regresjon
for hver åpne PR, inkludert oppfølgingsendringer til den rettende PR-en, frem til skanningen er ajour.

**Manuell oppdatering**: `gh workflow run codeql.yml --ref release/vX.Y.Z` kjører
analysen på nytt og publiserer varslene igjen i løpet av få minutter. Les `.github/workflows/codeql.yml`
først — overskriften forklarer at den bare bruker `workflow_dispatch`, **fordi den er i konflikt med
GitHubs «default setup»** (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`). Gjenoppretting av utløsere for `push`/`pull_request`/
`schedule` krever først en **handling fra eieren**: Settings → Code security →
CodeQL: Default → Advanced. Ikke legg til en `schedule:`-utløser uten denne endringen — det
vil bare føre til mislykkede kjøringer.

**Stram inn grunnlinjen etter at antallet synker** — `node scripts/check/check-codeql-ratchet.mjs
--update` skriver det nye målte antallet til `quality-baseline.json` →
`metrics.codeqlAlerts.value`, slik at ratchet-motoren ikke stilltiende tillater en regresjon tilbake
til den gamle grensen. Praktisk eksempel (2026-09-02/03): PR #12502 rettet 7 reelle varsler
(13 → 6 målte åpne); PR #12530 strammet inn den låste grunnlinjen fra 11 → 6 for å samsvare; de
gjenværende 6 ble deretter avvist med en begrunnelse for hvert varsel, ned til 0 åpne.

**Avvisninger avgjøres av operatøren (ufravikelig regel nr. 14)** — avvis aldri et CodeQL-varsel
uten å registrere den tekniske begrunnelsen i avvisningskommentaren: `won't fix` for
et krav i en oppstrømsprotokoll, `used in tests` for en testfikstur, `false positive`
for en sanitering CodeQL ikke kan se (presedens: `docs/security/ERROR_SANITIZATION.md`).

---

## Retningslinjer for nye testforsøk (WS5.4, v3.8.49)

Nye forsøk konfigureres per testkjører, aldri som en global standard — et generelt nytt forsøk gjør reelle regresjoner
til usynlige sporadiske feil:

| Testkjører        | Retningslinje                                                                                                                     | Hvorfor                                                                                                                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e)  | `retries: 1` kun i CI, med `trace: on-first-retry`                                                                                | Nettleser-/nettverkstiming er genuint ikke-deterministisk; ett nytt forsøk med sporing gjør en sporadisk feil til en diagnostiserbar artefakt |
| Vitest            | INGEN globale nye forsøk. En bekreftet ustabil test får et eksplisitt nytt forsøk per test (synlig i diffen, gjennomgått i PR-en) | Holder karantenelisten i repoet, aldri ugjennomsiktig                                                                                         |
| node:test (enhet) | INGEN nye forsøk, noensinne                                                                                                       | En ustabil enhetstest er en feil i testen — rett den, ikke kjør den på nytt                                                                   |

Mål-SLO-er når telemetri for sporadiske feil er på plass (WS5.2/5.3): <1 % forekomst av sporadiske feil per test
(terskel for «rett nå»), ≥95 % beståttandel per pipeline. Referanseverdier fra bransjen —
kalibrer på nytt mot våre egne målinger.

## Ratchet-avvik på utgivelsesnivå (WS5.5, v3.8.49)

Når en ratchet (filstørrelse, kompleksitet, eslint-advarsler) regresserer på den RENE utgivelsestuppen
— det vil si at KOMBINASJONEN av sammenslåinger førte til regresjonen, og ingen enkelt PR gjenskaper
regresjonen på sin egen gren — tilhører rettingen **utgivelsesansvarlig, én gang, på
utgivelsesgrenen**: foretrekk utskilling/refaktorering; oppdater bare referansenivået med den dokumenterte
begrunnelsesoppføringen. Skyv aldri kombinasjonsavvik over på en bidragsyters PR, og oppdater aldri
referansenivået per PR (det skjuler reelle regresjoner). Skill først mellom årsakene: gjenskap
feilen mot den rene tuppen i et test-worktree før du antar at PR-en din forårsaket den.

## Lagring av ratchet-reduksjoner — den nedadgående retningen (#8584)

Ratchet-mekanismen er bare halvautomatisk, og det er feil halvdel. Å **heve** en grense er en
manuell JSON-redigering som tar ti sekunder, og er den raskeste måten å oppheve blokkeringen av en PR med feil.
Å **senke** en grense krever at noen kjører `--update` og committer resultatet — og før
jobben `bank-ratchet-shrinks` kom på plass, var det ingen arbeidsflyt som gjorde dette. Den målte konsekvensen
(2026-07-25): 18 fryste filer lå allerede på eller under grensen på 800 linjer for nye filer, den verste
på 132× (`src/shared/validation/schemas.ts`, 19 linjer med en grense på 2 523); det
øvre kompleksitetstaket steg `1794 → 2169` gjennom ~37 merknader om oppdatering av referansenivået, med nøyaktig én
reduksjon (−1); og «stram inn via `--update` i neste syklus» ble skrevet 31 ganger og fulgt opp
én gang. En grense som overlever koden som ga grunnlag for den, gjør i stillhet hver fullførte
oppdeling om til vekstrom for den neste som redigerer filen.

`nightly-release-green.yml` → jobben **`bank-ratchet-shrinks`** lukker denne sløyfen:

|             |                                                                                                                  |
| ----------- | ---------------------------------------------------------------------------------------------------------------- |
| Kjører ved  | `schedule` (3×/dag) + `workflow_dispatch` — bevisst **ikke** `push`                                              |
| Måler       | den høyeste `release/vX.Y.Z`, med samme oppløsning og injeksjonsvern som `release-green`                         |
| Skriver     | `check:file-size --update` og `check:complexity-ratchets --update` (begge kan konstruksjonsmessig bare redusere) |
| Verifiserer | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                         |
| Leverer     | én alltid oppdatert PR mot utgivelsesgrenen — tvangsoppdatert, aldri spammet                                     |

Lagring gjøres satsvis i stedet for ved hver push fordi den ikke har noe latenskrav (en reduksjon
lagret innen 8 timer er godt nok), mens en kjøring per sammenslåing ville bygget PR-grenen på nytt gjentatte ganger
under sammenslåingskampanjer og betalt kostnaden for en full ESLint-gjennomgang hver gang. Deteksjon skjer fortsatt ved
push (`release-green`); bare lagringen gjøres satsvis.

### Sikkerhetsverifikatoren

Jobben skriver til referansenivåene uten tilsyn, så `verify-ratchet-bank.mjs` er det som gjør
dette akseptabelt. Den sammenligner treet etter `--update` med `HEAD` og **avbryter jobben
før noen commit finnes** — uten å åpne noen PR — med mindre hver endring er én av følgende:

- en numerisk `frozen`- / `testFrozen`-oppføring som er **senket** eller **fjernet**
- `complexity-baseline.json` → `count` er **senket**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` er **senket**

Alt annet feiler: å heve et tall, legge til en oppføring, endre `cap`/`testCap` eller
slette/omskrive en `_rebaseline_*`-merknad (disse merknadene er revisjonssporet som forklarer hvorfor hvert
tak finnes, og lagres i det samme `frozen`-objektet som filoppføringene).
En bot som kunne heve en grense, ville vært klart verre enn status quo. Regresjonsvern:
`tests/unit/verify-ratchet-bank.test.ts`.

Jobben pusher aldri til `release/*` — et menneske slår sammen PR-en, slik at en feilaktig måling
ikke kan bli lagt inn uten gjennomgang.

## Tillatelseslistepolicy

Hver port som ikke kan feile på eksisterende brudd, bruker en fryst tillatelsesliste
(f.eks. `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). Policyen er:

**Rett opp den underliggende årsaken; bruk tillatelseslisten bare når bruddet allerede eksisterer og
ikke kan rettes i samme PR.**

Når du legger til en oppføring i en tillatelsesliste:

1. Inkluder en kommentar med begrunnelsen.
2. Referer til sporingsoppgaven (f.eks. `// #3498 — Fase 2-funksjonalitet, ennå ikke implementert`).
3. Fjern oppføringen i samme PR som retter bruddet — en foreldet oppføring som ikke lenger
   undertrykker et aktivt brudd, er i seg selv en feil (6A.3-kontrollen for foreldet håndheving vil
   gjøre at porten feiler på en foreldreløs oppføring i tillatelseslisten når den er implementert).

Legg **ikke** til oppføringer i tillatelseslisten for å få testene til å bestå raskere. En grønn port med en voksende
tillatelsesliste gir en falsk trygghet om kvaliteten.

### Når en port feiler på PR-en din

1. **Les resultatet fra porten nøye** — det forteller deg nøyaktig hvilken fil eller hvilket symbol som brøt
   regelen.
2. **Rett bruddet** — de fleste porter er deterministiske filsystemkontroller som består så snart
   koden er korrekt.
3. **Hvis bruddet allerede eksisterer** (dvs. du introduserte det ikke, men porten
   dekker det nå): Legg til en oppføring i tillatelseslisten med en begrunnende kommentar og en sporingsoppgave.
4. **Hvis porten er en skrallemekanisme** (dekning, ESLint-advarsler, duplisering, kompleksitet):
   Endringen din gjorde måleverdien dårligere. Rett det underliggende problemet, eller kjør (unntaksvis)
   `npm run quality:ratchet -- --update` hvis endringen er tilsiktet og forverringen av måleverdien
   er akseptabel — men dokumenter hvorfor i PR-beskrivelsen.
5. **Rådgivende porter** (`continue-on-error: true`) er kun informative — de blokkerer ikke
   sammenslåing, men vises i CI-sammendraget. Rett dem likevel.

---

## Legge til en ny port

1. Opprett `scripts/check/check-<name>.mjs` (eller `.ts`). Policyporter avsluttes med 0/1.
   Porter av skralletypen sender en måleverdi til `quality-metrics.json` via `collect-metrics.mjs`.
2. Legg til `"check:<name>": "node scripts/check/check-<name>.mjs"` i `package.json`.
3. Koble den til i `.github/workflows/ci.yml` under riktig jobb
   (policy → `lint` eller `docs-sync-strict`; skralle → `quality-gate`).
4. Hvis den har en tillatelsesliste, bruk `reportStaleEntries()` fra
   `scripts/check/lib/allowlist.mjs` slik at foreldede oppføringer oppdages automatisk.
5. Skriv en test i `tests/unit/build/` som dekker portens deteksjonslogikk.
6. Oppdater dette dokumentet (legg til en rad i den relevante jobbtabellen).

---

## Agentverktøy: LSP-in-the-loop (valgfritt)

I tillegg til CI-portene leveres OmniRoute med et **valgfritt** `agent-lsp`-rammeverk
(en `.mcp.json` på prosjektnivå, fase 7, oppgave 15). Opprett `.mcp.json`
for å eksponere en TypeScript-språkserver for kodeagenter, slik at de løser symboler /
diagnostikk **før** de skriver kode — et «kompiler før du hevder»-supplement til
`typecheck:core` som stopper feil med «oppdiktede symboler» ved kilden. Det lastes med vilje
ikke inn automatisk (du velger og verifiserer MCP↔LSP-broen); en ødelagt oppføring logger bare en
tilkoblingsfeil og avbryter aldri økter.

---

## Rasjonaliseringsrestanse (ROI-gjennomgang — fase 9 bølge 3)

Denne oversikten ble avstemt mot `ci.yml` 2026-06-17 (den forrige versjonen utelot
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence`). En ROI-gjennomgang av det avstemte settet
identifiserte følgende kandidater for rasjonalisering. **Sammenslåingene er mekaniske
CI-endringer; omgjøringene/fjerningene er policybeslutninger som er forbeholdt operatøren.** Ingenting nedenfor
er tatt i bruk ennå.

**Også udokumentert ovenfor** (rådgivende, svakt signal): `docs-lint`-jobben
(markdownlint + Vale, hele jobben har `continue-on-error`) og de frittstående skannerarbeidsflytene
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. `semgrepFindings: 0` finnes i
`quality-baseline.json`, men er ikke koblet til en blokkerende ratchet i `ci.yml` — måleverdien er
for øyeblikket foreldreløs.

### Slå sammen / dedupliser (mekanisk, lavere risiko)

Hver kandidat ble validert mot den aktive gate-tilstanden 2026-06-17 (stol på, men verifiser);
flere «åpenbare» sammenslåinger viste seg å skjule teknisk gjeld og er **ikke** problemfrie direkteerstatninger.

- **`check:docs-sync` kjøres to ganger** — frittstående i `lint`-jobben og på nytt i `check:docs-all` (`docs-sync-strict`) og husky pre-commit-hooken. ✅ **FERDIG** — den frittstående `lint`-kjøringen er fjernet.
- **CVE-skanning** — ❌ **IKKE en problemfri sammenslåing.** `audit:deps` feiler kategorisk ved enhver CVE med høy/kritisk alvorlighetsgrad; `check:vuln-ratchet` (osv) feiler bare ved en _regresjon_ mot referanseverdien (for øyeblikket 1 MODERATE). Ulik semantikk — fjerning av `audit:deps` ville fjerne den absolutte gaten for høy/kritisk alvorlighetsgrad. Behold begge.
- **Syklusdeteksjon** — ❌ **IKKE en problemfri sammenslåing.** `check:circular-deps` (dpdm) rapporterer **91 sykluser** (det er derfor den er rådgivende); den kan ikke gjøres blokkerende før de er løst, og den har et bredere omfang enn den grønne, kuraterte `check:cycles`. Behold `check:cycles` som blokkerende; håndtering av de 91 dpdm-syklusene er en egen restanse.
- **Kompleksitet** — ✅ **FERDIG** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): én ESLint-gjennomgang, teller etter ruleId slik at referanseverdiene for syklomatisk kompleksitet+max-lines og kognitiv kompleksitet forblir uavhengige; de individuelle `check:complexity` / `check:cognitive-complexity` beholdes for lokal `--update`.
- **`/api`-antihallusinasjon** — ✅ **FERDIG** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): én FS-oversikt over `src/app/api`, openapi-routes + docs-symbols rapporterer fortsatt uavhengig; de individuelle kontrollene beholdes for lokale kjøringer.
- **`check:node-runtime` kjøres i 11 jobber** — ⚠️ **lav ROI.** Hver av dem bruker en separat runner, og kontrollen tar <1s; total besparelse er ~10s, mot å miste en rimelig beskyttelse per jobb. Ikke verdt omarbeidingen.
- **`typecheck:noimplicit:core` i CI-lint** — ✅ **fjernet fra lint-jobben** (var rådgivende med `continue-on-error`); den blokkerende typeoverflaten er `typecheck:core` + `check:type-coverage`. Lokalt skript er beholdt.

### Endre / avgjør (operatørpolicy)

- `check:openapi-security-tiers` (rådgivende) — ❌ **KAN IKKE problemfritt gjøres blokkerende.** Den avslutter med 0, men advarer om at flere `traffic-inspector`-ruter under `LOCAL_ONLY_API_PREFIXES` mangler annotasjonen `x-loopback-only: true`. Håndheving krever at disse annotasjonene først legges til i `openapi.yaml`.
- `typecheck:noimplicit:core` (rådgivende) — i stor grad innlemmet i den blokkerende `check:type-coverage`-ratcheten. Gjør den om til en ratchet, eller fjern den overflødige andre `tsc`-gjennomgangen.
- `test:vitest:ui` (nå **blokkerende**) — eksisterende feil er uttrykkelig ekskludert i `vitest.config.ts` med sporingskommentarene `// #8618`; nye feil gjør at jobben feiler.
- `check:secrets` (gitleaks, blokkerende ratchet fryst ved 3 dokumenterte falske positiver) — legg de 3 til i tillatelseslisten for å nå 0, eller nedgrader den til rådgivende. Overlapper med GitHubs innebygde hemmelighetsskanning + `check:public-creds`.
- `check:pr-evidence` (blokkerende, søker med grep i prosateksten i PR-beskrivelsen) — høy risiko for falske positiver; fjerning svekker håndhevingen av Hard Rule #18, så dette er en reell policyavgjørelse.
- `semgrep` (rådgivende, frittstående) — overlapper med CodeQL for OWASP-familiene; koble referanseverdien til en ratchet, eller fjern den.

---

## Relatert dokumentasjon

- Leverandørkjede (proveniens, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — kontroll for samsvar mellom nøkkelsett

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, jobb `i18n-ui-coverage`).
Sammenligner settet av bladnøkler i hver `src/i18n/messages/<locale>.json` med `en.json` og feiler
ved enhver manglende eller ekstra bladnøkkel, uavhengig av når nøkkelen ble lagt til. Plassholdere
med `__MISSING__:` regnes som til stede (innholdet i dem håndteres av terskelkontrollen). Dette er
det absolutte motstykket til de to diff-baserte/prosentbaserte kontrollene: `check-ui-keys-coverage`
håndhever en nedre grense på 80 % per språkvariant (43 manglende nøkler av ~13 000 vises fortsatt
som 99,7 %), og `check-new-key-coverage` vurderer bare nøklene en PR legger til i `en.json`. En gruppe
med språkvarianter genereres fra dagens `en.json` når grenen opprettes, og oversettes i flere dager
mens basisgrenen fortsetter å få nye nøkler. Gruppe-PR-en legger ikke selv til noen nøkler, så begge
søsterkontrollene forble tause da gruppe 1 (#13044) ble slått sammen med 43 manglende nøkler i ni
språkvarianter, og gruppe 2 (#13660) med 10 manglende nøkler i åtte (2026-09-15). Rett en rød kontroll
med `node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers`; en `extra`-bladnøkkel
betyr at kilden har fjernet den — slett den fra språkvarianten. `--warn` rapporterer uten å feile.
`--catalog=cli` kjører den samme sammenligningen for `bin/cli/locales`
(`npm run i18n:check-keys:cli`); begge trinnene ligger i jobben `i18n-ui-coverage`.

#### `check-new-key-coverage` — i18n-kontroll for nye nøkler

Søsterkontroll til `check-ui-value-drift`. Den oppdager når en engelsk verdi er blitt **skrevet om**
uten at oversettelsene er oppdatert; denne oppdager når en engelsk nøkkel er blitt **lagt til**
uten at enkelte språkvarianter har mottatt den.

`check-ui-keys-coverage` kan ikke oppdage denne typen avvik: Den håndhever en prosentvis nedre grense
per språkvariant, og elleve manglende nøkler av ~13 000 gir fortsatt en dekning på 99,9 %. En
prosentandel per språk kan ikke uttrykke «denne funksjonen ble levert uoversatt» — en hel funksjon
kan bli lagt til i en ny språkvariant uten tekst, uten at tallet noen gang endres.

Hendelsen den representerer: Fase 3 av Orchestration Canvas fikk sine elleve nøkler oversatt til de
42 språkvariantene som eksisterte på det tidspunktet. Noen timer senere økte EU-språkgruppen
(#13044) antallet språkvarianter i repositoriet til 51, og de ni nye (`el`, `et`, `ga`, `hr`, `lt`,
`lv`, `mt`, `sl`, `sr`) mottok dem aldri. `deepMergeFallback` bruker engelsk som erstatning for en
manglende nøkkel, så feilmodusen var et uoversatt brukergrensesnitt fremfor et tomt
brukergrensesnitt — et reelt problem som med hensikt ikke ga noe varsel.

Som søsterkontrollen er den **diff-bevisst** og sammenligner engelsk ved flettingsbasen med
arbeidstreet, slik at eksisterende mangler forblir frosset og kontrollen ikke krevde noen migrering
for å aktiveres. Nødutgang: `__MISSING__:<english>` utsetter en oversettelse samtidig som korrekt
kjøretidsatferd opprettholdes. `vi` forbyr plassholdere
(`tests/unit/i18n-vi-completeness.test.ts`) og krever en reell oversettelse.

#### `check-vitest-exclusions` — kontroll for parkerte tester

En fil i `exclude`-listen til `vitest.config.ts` er en test som ikke kjøres, men den ser ut som
dekning for den som leser treet. Sekstito filer samlet seg opp bak kommentaren
`// #8618 — pre-existing failure; remove this exclusion when fixed`. Sak #8618 ble lukket
2026-08-11, mens listen den fulgte, vokste fra 45 til 62 oppføringer. Hver ny oppføring arvet en
kommentar som viste til en avsluttet sak. Da listen til slutt ble målt fil for fil (#13204),
**bestod 51 av de 62 mot det gjeldende treet uten noen kildekodeendring**.

Kontrollen krever at hver ekskludering som peker på en faktisk fil, (a) angir en sporingssak og
(b) finnes i `config/quality/vitest-exclusions.json` med sin målte status. Dermed blir det å legge
til en ekskludering en diff som kan gjennomgås i en egen fil, fremfor enda en linje i en matrise med
60 oppføringer. Den kjører bevisst ikke de ekskluderte testene på nytt — det tar ~10 minutter og
hører hjemme i en periodisk jobb; inventaret registrerer når hver test sist ble målt.
