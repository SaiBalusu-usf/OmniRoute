# Quality Gates Reference (Slovenščina)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

Ta dokument je avtoritativna referenca za vsa kakovostna preverjanja CI v projektu OmniRoute.
Opisuje vsako preverjanje, kaj preverja, v katerem opravilu CI se izvaja, ali uporablja
referenčno osnovo z ragljo ali pravilnik uspeh/neuspeh ter ali blokira gradnjo ali je zgolj svetovalno.

Za kratek povzetek in pravilnik seznama dovoljenih elementov glejte razdelek »Kakovostna preverjanja in raglje«
v datoteki `AGENTS.md`. Za kritično oceno, razvrstitev zrelosti in od orodij neodvisen
načrt ponovitve istega sistema glejte
[Priročnik za kakovostna preverjanja](../ops/QUALITY_GATE_PLAYBOOK.md).

---

## Inventar preverjanj (~90 skriptov)

Skripti so v `scripts/check/` (preverjanja pravilnikov) in `scripts/quality/` (mehanizem raglje).
Avtoritativni vir za CI je `.github/workflows/ci.yml`.

### Hitra pot za PR-je izdaje (`quality.yml`)

`.github/workflows/quality.yml` se izvaja za PR-je, ki ciljajo na `release/**`. Veje sodelujočih
ohranja pretočne s hitrimi preverjanji, filtriranimi po poteh, in enim svetovalnim signalom produkcijske gradnje za
spremembe kode:

| Opravilo                                         | Obseg                                                                                                                                                                                                                                                   | Blokiranje                                                                                              |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `Build (advisory)`                               | Neosnutki PR-jev s kodo in veje čakalne vrste Mergify; Node 24, `npm-ci-retry`, `check:node-runtime`, `npm run build` z `OMNIROUTE_USE_TURBOPACK=1`; brez nalaganja artefakta, ker ga ne uporablja nobeno nadaljnje kakovostno opravilo                 | **Svetovalno** (`continue-on-error: true`; odstranite po enem tednu stabilnih izvajanj za PR-je izdaje) |
| `Docs Gates (fast-path)`                         | PR-ji dokumentacije/kode; sklici na dokumentacijo API-ja in celotna dokumentacija                                                                                                                                                                       | Da                                                                                                      |
| `Fast Quality Gates`                             | PR-ji s kodo; statična preverjanja, preverjanje tipov, preverjanje tipov nadzorne plošče, prizadeti testi enot                                                                                                                                          | Da                                                                                                      |
| `Forgotten sibling tests`                        | PR-ji s kodo; sledenje spremenjenih modulov do statičnih porabnikov in kandidatnih sorodnih testov; poti prek zbirnih modulov in dinamičnih uvozov so navedene kot svetovalna diagnostika, skupaj z navedenimi izjemami na seznamu dovoljenih elementov | **Svetovalno**                                                                                          |
| `Vitest (fast-path)`                             | PR-ji s kodo; hitri nabor testov Vitest                                                                                                                                                                                                                 | Da                                                                                                      |
| `Unit Tests fast-path`                           | PR-ji s kodo; nabor testov enot v 4 delih                                                                                                                                                                                                               | Da                                                                                                      |
| `No new ESLint warnings`                         | PR-ji s kodo; zaščita za lint, ki upošteva opustitve                                                                                                                                                                                                    | Da za PR-je iz istega izvora, svetovalno za razvejane repozitorije                                      |
| `Merge integrity (changelog + generated skills)` | Neosnutki PR-jev; dnevnik sprememb in sinhronizacija ustvarjenih veščin                                                                                                                                                                                 | Da za PR-je iz istega izvora, svetovalno za razvejane repozitorije                                      |

#### Poročilo o pozabljenih sorodnih testih

`npm run check:forgotten-sibling-tests` znova uporabi razreševalnik uvozov, na katerem temelji zemljevid vpliva testov.
Za vsak spremenjeni produkcijski modul navede deterministične verige
`spremenjeni modul/simbol -> statični porabnik -> kandidatni sorodni test`, kadar kandidatni
test ni prisoten v razlikah zahtevka za spojitev. Povzetek Markdown in rezultat JSON se ohranita kot
artefakt poteka dela `forgotten-sibling-tests` za umerjanje pred kakršno koli uvedbo blokiranja.

Ponovni izvozi prek zbirnih modulov in dinamični uvozi so samo diagnostika razreševanja; nikoli ne ustvarijo
blokirajoče ugotovitve. Pregledane izjeme so v
`config/quality/forgotten-sibling-allowlist.json`. Vsak vnos mora navesti porabnika in kandidatni
test, podati specifično utemeljitev ter vsebovati povezavo do težave ali zahtevka za spojitev v GitHubu. Nepravilno oblikovani vnosi povzročijo
varno zavrnitev. Izjeme ne morejo prezreti izbrisanega kandidatnega testa ali razlike, ki doda `.skip`/`.todo`;
slabljenje trditev in drugo prikrivanje ostajata v domeni neodvisno blokirajočega
preverjanja `check:test-masking`.

### Opravilo: `lint`

Izvaja se pri vsakem PR-ju za `main`. Ob neuspehu blokira spojitev.

| Skript (`npm run ...`)            | Preverja                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Blokira                                    |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `check:node-runtime`              | Različica Node.js je znotraj podprtega razpona                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Da                                         |
| `check:cycles`                    | Krožne uvoze — vsi moduli v `src/` + `open-sse/`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Da                                         |
| `check:route-validation:t06`      | Sheme Zod so prisotne na vseh poteh (pravilnik ravni 6)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Da                                         |
| `check:any-budget:t11`            | Število `@ts-expect-error // any` ne presega omejitve (catraca ravni 11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Da                                         |
| `check:provider-consistency`      | Vsak ponudnik v `providers.ts` ima ustrezen vnos v `providerRegistry.ts` (in obratno, znotraj seznama dovoljenih)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Da                                         |
| `check:model-lifecycle`           | Tri ročno vzdrževane usmerjevalne tabele ostajajo skladne z različico posnetka življenjskega cikla, shranjeno v repozitoriju (#11503): `FITNESS_TABLE` (`taskFitness.ts`) ne ocenjuje nobenega opuščenega ID-ja, ki ga lahko usmerja `REGISTRY`; vsak cilj `BUILT_IN_ALIASES` je prisoten v `REGISTRY` in odsoten iz posnetka opuščenih ID-jev; vsak opuščeni ID, ki je še vedno v `REGISTRY`, je preusmerjen ali naveden v `allowedRetiredInCatalog`; noben vir ali cilj `DEFAULT_DEGRADATION_MAP` pa v tem posnetku ni označen kot opuščen. To ne dokazuje, da model trenutno zagotavlja delujoča nadrejena storitev. Brez povezave — primerja z `config/quality/model-lifecycle.json`, ki se ročno osveži z `npm run quality:refresh-model-lifecycle` (zahteva omrežje; ni vključen v CI). `allowedRetiredInCatalog` je postopoma krčljiva varovalka: vnos dodajte samo skupaj s sledilno težavo. | Da                                         |
| `check:fetch-targets`             | Vsak `fetch("/api/...")` v odjemalskem delu `src/` se razreši v dejanski `route.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Da                                         |
| `check:deps`                      | Vse odvisnosti, ki jih je mogoče namestiti z `npm install`, iz vseh datotek `package.json` v repozitoriju so navedene v `dependency-allowlist.json`; novi nepripeti paketi ali paketi z zavajajoče podobnimi imeni so označeni                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Da                                         |
| `audit:deps`                      | `npm audit` (koren + electron) — brez opozoril visoke/kritične stopnje (prekriva se z osv `check:vuln-ratchet`; glejte Seznam za racionalizacijo)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Da                                         |
| `check:lockfile`                  | Celovitost datoteke `package-lock.json` — register https, zgoščene vrednosti celovitosti, brez preglasitev gostitelja                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Da                                         |
| `check:licenses`                  | Seznam dovoljenih licenc SPDX za produkcijske odvisnosti                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Da                                         |
| `check:tracked-artifacts`         | Brez gradbenih artefaktov / potrjenih simbolnih povezav `node_modules` (izvede se tudi v husky pre-commit; pre-push je namenoma lahek — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Da                                         |
| `check:vitest-exclusions`         | Vsaka izključitev Vitest navaja sledilno težavo in je navedena v `config/quality/vitest-exclusions.json` (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Da                                         |
| `check:file-size`                 | Nobena izvorna datoteka ne presega omejitve za posamezno končnico (zaskočni mehanizem: velike datoteke, zamrznjene na seznamu `frozen`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Da                                         |
| `check:error-helper`              | Odzivi z napakami v izvajalnikih/obdelovalnikih uporabljajo `buildErrorBody()` / `sanitizeErrorMessage()` (strogo pravilo št. 12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Da                                         |
| `check:migration-numbering`       | Migracijske datoteke SQL so zaporedno oštevilčene, brez vrzeli ali podvojenih številk                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Da                                         |
| `check:public-creds`              | Brez dobesednih vrednosti OAuth `client_id`/`client_secret` ali spletnih ključev Firebase zunaj `publicCreds.ts` (strogo pravilo št. 11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Da                                         |
| `check:db-rules`                  | Brez neposrednega SQL-a zunaj modulov `src/lib/db/`; brez zbirnih uvozov iz `localDb.ts` (strogi pravili št. 2/št. 5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Da                                         |
| `check:known-symbols`             | Izvajalniki ponudnikov, strategije usmerjanja in prevajalniki, registrirani v svojih odpremnih tabelah, se ujemajo z datotekami na disku — brez osirotelih ali nedeklariranih simbolov                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Da                                         |
| `check:route-guard-membership`    | Vsaka pot, ki ustvari podrejeni proces, je razvrščena s funkcijo `isLocalOnlyPath()` (strogi pravili št. 15/št. 17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Da                                         |
| `check:test-discovery`            | Vsako datoteko `*.test.ts` / `*.spec.ts` v repozitoriju zbere vsaj en izvajalnik testov (zaskočni mehanizem: seznam osirotelih datotek v `test-discovery-baseline.json` se lahko le krajša)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Da                                         |
| `check:agent-skills-sync`         | Ustvarjeni artefakti veščin agentov se ujemajo z njihovim izvornim katalogom (brez odstopanj)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `check:provider-asset-provenance` | Logotipi/sredstva ponudnikov imajo zabeležen vnos o izvoru                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `lint:json`                       | Razčlenjevanje konfiguracijskih datotek JSON in skladnost s pravili preverjanja kode v repozitoriju                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `typecheck:core`                  | Prevajanje kode TypeScript brez napak (samo svetovalna opozorila)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Da                                         |
| `typecheck:noimplicit:core`       | Strogi `noImplicitAny` — usmerjeno v prihodnost; številna obstoječa mesta klicev še vedno potrebujejo oznake tipov                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | **Svetovalno** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `tsc`, omejen na `src/app/(dashboard)/**` (#7033) — skrbno izbran seznam 27 datotek v `typecheck:core` ne vključuje nobene datoteke TSX nadzorne plošče, prav tako jih `next build` nikoli ne preverja glede tipov (`next.config.mjs` nastavi `ignoreBuildErrors: true`), zato regresije osirotelih identifikatorjev na tem mestu (#6625/#6909) v CI niso bile vidne. Primerja z zamrznjenim izhodiščem števila napak po datoteki in kodi TS (`config/quality/dashboard-typecheck-baseline.json`, enak vzorec uveljavljanja zastarelosti kot pri `check:known-symbols`) — preverjanje spodleti samo zaradi NOVIH napak, ki presegajo izhodiščno število; ko je obstoječa napaka odpravljena, izhodišče znižajte z `--update`.                                                                                                                                                                        | Da                                         |

### Opravilo: `quality-gate`

Zažene se po `test-coverage`. Ob neuspehu blokira združitev.

| Skript                       | Preverja                                                                                                                                                                                           | Blokira                                    |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `quality:collect`            | Ustvari `quality-metrics.json` (število opozoril ESLint, pokritost iz združenega poročila segmentov)                                                                                               | Da (predhodni korak za zaskočni mehanizem) |
| `quality:ratchet`            | Nobena metrika v `quality-baseline.json` ni nazadovala (opozorila ESLint ≤ izhodišče; pokritost ≥ izhodišče)                                                                                       | Da                                         |
| `check:duplication`          | Podvajanje kode (jscpd@4) ne presega izhodišča v `quality-baseline.json`                                                                                                                           | Da                                         |
| `check:complexity`           | Ciklomatska kompleksnost na ravni datoteke ne presega zgornje meje (osnovni pravili ESLint `complexity` + `max-lines-per-function`)                                                                | Da                                         |
| `check:cognitive-complexity` | Zaskočni mehanizem za kognitivno kompleksnost (`eslint-plugin-sonarjs`) — ločen prehod ESLint; CI oba združi v en sam korak `check:complexity-ratchets`                                            | Da                                         |
| `check:dead-code`            | Zaskočni mehanizem za neuporabljene izvoze/datoteke (knip) ne nazaduje glede na izhodišče                                                                                                          | Da                                         |
| `check:compression-budget`   | Proračun primerjalnega preizkusa stiskanja — najnižje dovoljeno število prihranjenih žetonov za posamezen pogon ne sme nazadovati                                                                  | Da                                         |
| `check:type-coverage`        | Zaskočni mehanizem za odstotek tipizirane kode (`type-coverage`) ne nazaduje; večinoma nadomešča `typecheck:noimplicit:core`                                                                       | Da                                         |
| `check:codeql-ratchet`       | Število odprtih opozoril CodeQL ne nazaduje (bere prek `gh api`; brez žetona preverjanje elegantno preskoči) — pogostost osveževanja in ročni sprožilec: glejte »Zaskočni mehanizem CodeQL« spodaj | Da                                         |

### Opravilo: `quality-extended`

Celotno opravilo je svetovalno (`continue-on-error: true`). Varovalni mehanizmi, ki temeljijo na npm, se dejansko izvedejo; zunanji pregledovalniki se namestijo prek `gh release download` in se samodejno preskočijo (izhodna koda 0), če binarna datoteka še vedno ni na voljo.

| Skript                   | Preverja                                                                                                                                                                                              | Blokiranje     |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `check:circular-deps`    | Ni krožnih odvisnosti (dpdm)                                                                                                                                                                          | **Svetovalno** |
| `check:bundle-size`      | Velikost svežnja ne presega zgornje meje                                                                                                                                                              | **Svetovalno** |
| `check:secrets`          | Pregled skrivnosti (gitleaks) — preskoči se, če binarna datoteka ni na voljo                                                                                                                          | **Svetovalno** |
| `check:vuln-ratchet`     | Ranljivosti odvisnosti (osv-scanner) se ne poslabšajo — preskoči se, če binarna datoteka ni na voljo                                                                                                  | **Svetovalno** |
| `check:workflows`        | Preverjanje delovnih tokov (actionlint + zizmor) — preskoči se, če binarne datoteke niso na voljo                                                                                                     | **Svetovalno** |
| `check:openapi-breaking` | Prelomne spremembe javne pogodbe API (`openapi.yaml`) glede na osnovno vejo (oasdiff) — izpiše `openapiBreaking=N`; preskoči se, če oasdiff ni na voljo ali osnovne specifikacije ni mogoče razrešiti | **Svetovalno** |

### Opravilo: `docs-sync-strict`

Izvede se pri vsakem PR-ju za `main`. Ob neuspehu prepreči združitev.

| Skript                         | Preverja                                                                                                                                                                                         | Blokiranje                |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------- |
| `check:docs-all`               | Metapregrada, ki zaporedno izvede spodnjih 6 podpregrad                                                                                                                                          | Da                        |
| ↳ `check:docs-sync`            | Skladnost različic v CHANGELOG / OpenAPI / llm.txt                                                                                                                                               | Da                        |
| ↳ `check:docs-counts`          | Števila v besedilu (število ponudnikov, število migracij itd.) so znotraj varovalnega okna dejanskih vrednosti                                                                                   | Da                        |
| ↳ `check:env-doc-sync`         | Vsaka spremenljivka okolja v `.env.example` je dokumentirana v tabeli dokumentacije in obratno                                                                                                   | Da                        |
| ↳ `check:deprecated-versions`  | V dokumentaciji ni nizov opuščenih različic                                                                                                                                                      | Da                        |
| ↳ `check:doc-links`            | Notranje povezave markdown v dokumentaciji se razrešijo v dejanske datoteke (oblika `[text]`/`(path)`)                                                                                           | Da                        |
| ↳ `check:fabricated-docs`      | Poti, spremenljivke okolja, ukazi CLI, imena hookov in poti datotek, navedeni v dokumentaciji, obstajajo v kodni zbirki. Stroga pregrada prek `--strict`; brez zastavice je neuspeh nezavezujoč. | Da (prek `--strict` v CI) |
| `check:cli-i18n`               | Nizi ukazov CLI so prisotni v vseh področnih datotekah i18n                                                                                                                                      | Da                        |
| `check:openapi-coverage`       | Specifikacija OpenAPI pokriva vsaj varovalno spodnjo mejo dejanskih poti                                                                                                                         | Da                        |
| `check:openapi-security-tiers` | Opombe o varnostnih ravneh v `openapi.yaml` so skladne s klasifikacijami v `routeGuard.ts`                                                                                                       | **Svetovalno**            |
| `check:openapi-routes`         | Vsaka pot v `openapi.yaml` se razreši v dejanski `route.ts` (preprečevanje halucinacij)                                                                                                          | Da                        |
| `check:docs-symbols`           | Vsak sklic `/api/...` v `docs/**/*.md` se razreši v dejanski `route.ts` (preprečevanje halucinacij)                                                                                              | Da                        |
| `i18n translation drift`       | Neprevedeni ključi v področnih datotekah i18n — samo opozorilo                                                                                                                                   | **Svetovalno**            |

### Opravilo: `i18n-ui-coverage`

| Skript                              | Preverja                                                                                                                                                                                                        | Blokira        |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `check-ui-keys-coverage` (vgrajeno) | Pokritost ključev i18n uporabniškega vmesnika je ≥ 65 %                                                                                                                                                         | Da             |
| `check-ui-value-drift` (vgrajeno)   | Prepisana angleška **vrednost** za seboj ne pusti zastarelega prevoda                                                                                                                                           | Da             |
| `check-new-key-coverage` (vgrajeno) | **Nov** angleški ključ je dodan v vse podprte jezike                                                                                                                                                            | Da             |
| `check-translation-ratio`           | Delež pravih prevodov za posamezen jezik (vrednosti, enake angleškim / označbe mest / manjkajoče vrednosti zunaj seznama dovoljenih) ne sme preseči `config/quality/i18n-translation-baseline.json` + tolerance | **Svetovalno** |

Zahteva `fetch-depth: 0` — preverjanje odklona vrednosti primerja razlike v `en.json` glede na osnovo združevanja.

#### `check-ui-value-drift` — preverjanje zastarelih prevodov

Zazna tisto regresijo i18n, ki je druga preverjanja strukturno ne morejo odkriti: angleška vrednost
je prepisana, prevodi, izpeljani iz _prejšnje_ angleške različice, pa ostanejo, zato
neangleško govoreči uporabniki še naprej berejo samozavestno zapisano, a zdaj napačno besedilo.

To se je dejansko zgodilo v izdani različici. `oauthModal.googleOAuthWarning` je bil prepisan, ko je bil
dodan pomočnik za prijavo Antigravity (#5203); **39 od 43 jezikov** je obdržalo besedilo, ki je upravljavcem
naročalo, naj »kopirajo celoten URL in ga prilepijo spodaj« — potek, ki ga pri tem ponudniku ni mogoče
dokončati. Težava je ostala neopažena do #8463, ker:

- `sync-ui-keys` dopolni samo ključe, ki **manjkajo**, nikoli tistih, ki so **zastareli**;
- `check-ui-keys-coverage` šteje _prisotnost_ ključev, zato se zastarel prevod šteje kot pokrit;
- `check-translation-drift` spremlja zrcalne kopije dokumentacije `docs/i18n/<locale>/**.md` —
  datotek `src/i18n/messages/*.json` nikoli ne bere. Od ponovne sinhronizacije 2026-09 blokira v opravilu
  `docs-sync-strict`: uredite osrednji dokument → `npm run i18n:run -- --files=<doc>` (na ravni razdelka, hitro).

**Upošteva razlike in ne uporablja osnovne vrednosti.** Primerja `en.json` v osnovi združevanja z
delovnim drevesom; za vsak ključ, katerega angleška vrednost se je spremenila, se vsak jezik, ki še vedno
vsebuje nespremenjen prevod, šteje kot zastarel. S tem se namenoma **zamrzne obstoječi dolg** — iz razlike
ni mogoče razbrati, iz katere stare angleške različice je nastal dolgo obstoječi prevod, zato preverjanje
presoja samo tisto, česar se dotika trenutna sprememba. Alternativa (osnovna vrednost z zgoščeno vrednostjo
za vsak ključ) bi zahtevala približno 600 KB veliko ustvarjeno datoteko, trikrat večjo od največje obstoječe
osnovne datoteke, ki bi se spreminjala ob vsakem PR-ju za i18n.

Preverjanje je mogoče uspešno opraviti na dva načina:

1. posodobite zadevne prevode ali
2. nastavite jih na `__MISSING__:<new english>` — izvajalno okolje nato prikaže popravljeno angleško besedilo
   (`src/i18n/request.ts::deepMergeFallback`, #7258), ključ pa se uvrsti v čakalno vrsto za prevod.

Če se je spremenil **pomen** niza, raje **preimenujte ključ**: nov ključ ne more podedovati
zastarelega prevoda. Ta vzorec je bil uporabljen v #8463.

```bash
npm run i18n:check-value-drift          # strogo (to izvaja CI)
npm run i18n:check-value-drift:warn     # samo poročilo
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

Konča se s kodo 0 in sporočilom `SKIP reason=base-unresolved`, kadar osnovnega kataloga ni mogoče prebrati (plitva
kopija brez osnovnega sklica), enako kot `check-openapi-breaking`.

### Opravilo: `i18n`

Celotna matrika preverjanja i18n (eno opravilo na jezik). Celotno opravilo je svetovalno.

| Skript                          | Preverja                             | Blokira                                                        |
| ------------------------------- | ------------------------------------ | -------------------------------------------------------------- |
| `validate_translation.py quick` | Popolnost prevoda za posamezen jezik | **Svetovalno** (`continue-on-error: true` za celotno opravilo) |

### Opravilo: `pr-test-policy`

Izvede se samo pri zahtevah za vlečenje.

| Skript                 | Preverja                                                                                                                                                            | Blokira |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `check:pr-test-policy` | PR-ji, ki spreminjajo produkcijsko kodo v `src/`, `open-sse/`, `electron/` ali `bin/`, morajo vključevati ali posodobiti teste (strogo pravilo št. 8)               | Da      |
| `check:test-masking`   | Spremenjene testne datoteke ne zmanjšajo neto števila preverjanj in ne dodajajo tavtologij `assert.ok(true)`                                                        | Da      |
| `check:pr-evidence`    | Telo PR-ja navaja dokazila o testiranju/VPS za spremembo (mehanizira strogo pravilo št. 18 z iskanjem po besedilu PR-ja — krhko, glejte seznam načrtovanih opravil) | Da      |

### Opravilo: `test-vitest`

Izvede se po `build`. Ob neuspehu blokira združitev.

| Zbirka           | Preverja                                                                | Blokirajoče                                                                                                            |
| ---------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | Strežnik MCP (110 orodij), autoCombo, predpomnilnik — izvajalnik vitest | Da                                                                                                                     |
| `test:vitest:ui` | Testi komponent uporabniškega vmesnika — izvajalnik vitest              | **Blokirajoče** — obstoječe napake so izrecno izključene v `vitest.config.ts`; nove napake povzročijo neuspeh opravila |

### Nočni delovni tokovi (načrtovani, svetovalni)

Izvajajo se po urniku cron (in prek `workflow_dispatch`), nikoli ob zahtevah za spojitev. Vsi so svetovalni.

| Delovni tok            | Preverja                                                                                                                                                                        | Blokirajoče    |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `nightly-property`     | Lastnostni testi fast-check z naključnim semenom in velikim številom izvajanj                                                                                                   | **Svetovalno** |
| `nightly-resilience`   | Preverjanje rasti kopice, vbrizgavanje kaotičnih napak, obremenitveni/vzdržljivostni testi k6                                                                                   | **Svetovalno** |
| `nightly-llm-security` | Zaščita promptfoo pred vbrizgavanjem (način blokiranja) in preizkusi garak (preskočeni brez skrivnosti ponudnika)                                                               | **Svetovalno** |
| `nightly-schemathesis` | Mehko testiranje pogodbe OpenAPI (schemathesis) proti delujočemu OmniRoute z uporabo `docs/openapi.yaml` — razkrije kršitve specifikacije/neobravnavane napake 500 (Faza 8 B.4) | **Svetovalno** |
| `nightly-mutation`     | Rezultat mutacijskega testiranja Stryker za hitro vejo enotnih testov — preživeli mutanti razkrijejo šibke trditve                                                              | **Svetovalno** |
| `nightly-compat`       | Matrika združljivosti izvajalnega okolja Node v podprtih razponih `engines.node`                                                                                                | **Svetovalno** |

---

## Faza hitrosti (2026-08-30 → v4.0 LTS): vsaka izhodiščna meja je zrahljana za 20 %

Odločitev lastnika (2026-08-30): do modularizacije v4.0 je hitrost izdajanja pomembnejša
od omejevanja tehničnega dolga. Vsaka **številska** izhodiščna meja zaskočnega mehanizma je bila v enem
sledljivem koraku zrahljana za 20 %, faza pa je deklarirana v `config/quality/quality-baseline.json`:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| Kaj se je spremenilo                                                                                                                                                                                                            | Kje                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — števci, pri katerih je manj bolje, ×1.2; odstotki, pri katerih je več bolje, ÷1.2 (spodnja meja pokritosti je ostala 60, `eslintErrors` ostaja 0, `eslintWarnings` 0 → 20 % zamrznjenega števila izločitev) | `quality-baseline.json` (opomba `_relax_velocity_2026_08_30` navaja vse vrednosti prej → potem)        |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                                                | `complexity-baseline.json`, `duplication-baseline.json`                                                |
| `cap`, `testCap`, omejitev vrstic za vsak `frozen[*]` / `testFrozen[*]` ×1.2                                                                                                                                                    | `file-size-baseline.json`                                                                              |
| števci na datoteko / na kodo TS ×1.2                                                                                                                                                                                            | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json` |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                             | `scripts/check/check-openapi-coverage.mjs`                                                             |
| `--require-tighten` postane zgolj priporočilen, kadar je `_policy.requireTighten === false`                                                                                                                                     | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| nočno opravilo `bank-ratchet-shrinks` je začasno ustavljeno (shranilo bi izmerjeno zmanjšanje in izničilo rezervni prostor)                                                                                                     | `.github/workflows/nightly-release-green.yml`                                                          |

Seznami dovoljenih izjem (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) **niso** proračuni in niso bili spremenjeni. Pravila prehod/neuspeh (skrivnosti, pravila SQL,
pogodba dokumentacije/okolja, skladnost i18n, testi enot) ostajajo nespremenjena — neuspešen test je še vedno neuspešen test.

**Orodja**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — enkratna
  sprostitev (`scripts/quality/relax-baselines.mjs`); zavrne ponovni zagon z isto opombo.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  izmeri vsako številsko kontrolo tako kot CI in izpiše preostali rezervni prostor za vsako kontrolo
  (`scripts/quality/baseline-headroom.mjs`). Nočno opravilo `baseline-headroom` objavi
  tabelo v aktivni zadevi **📈 Rezervni prostor izhodiščnih meja (faza hitrosti)** in doda oznako
  `headroom-alert`, kadar je katera koli kontrola znotraj 10 % svoje zgornje meje ali jo že presega. Ta zadeva
  služi kot zgodnje opozorilo: proračun, ki se zapolni v nekaj dneh, pomeni, da sprostitev porabi
  nekaj zahtevkov PR, ne pa celotna ekipa — preverite opombe `_rebaseline_*` problematične kontrole.

**Način za novo kodo (Clean-as-You-Code) — od 2026-08-30, samo hitra pot za PR**

Ob dogodkih `pull_request` datoteka `quality.yml` posreduje `--base-ref <PR base SHA>` ukazom `check:file-size`,
`check:complexity-ratchets` in `check:dead-code`. V tem načinu kontrola primerja HEAD z
osnovo združitve, **omejeno na datoteke, ki jih je spremenil PR** (`scripts/check/newCodeMode.mjs`:
osnova združitve se materializira v začasnem drevesu `git worktree`, ESLint/knip se izvedeta tam in na HEAD,
nato pa se izračunajo razlike med števci za posamezne datoteke):

- **blokirajoče** — PR je v spremenjenih datotekah dodal kršitve ciklomatične/kognitivne kompleksnosti ali neuporabljene izvoze
  (`complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=` v dnevniku);
- **priporočilno** — globalna skupna vrednost v primerjavi z zamrznjeno izhodiščno mejo. Podedovano odstopanje nikoli ne povzroči
  neuspeha nedolžnega PR-ja; odstopanje se ob uskladitvi izdaje znova zamrzne, spremlja pa ga opravilo za rezervni prostor.

Zagoni `workflow_dispatch`, pregled release-green in nočno opravilo za rezervni prostor nimajo osnove PR
ter ohranijo absolutno (globalno) primerjavo. Pokritost, podvajanje in pokritost tipov za zdaj ostajajo globalni
(njihova orodja ne ustvarijo poceni razlik na ravni datotek) — kandidati za enako obravnavo.

**Zaključek faze pri v4.0 (LTS = strožje kot prej, ne »nazaj na običajno«)**

1. Na čisti konici veje `release/v4.0.0`: za evidenco zaženite `npm run quality:headroom --json`, nato pa
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update` in `--update` za vsako preverjanje tipov —
   vsaka izhodiščna vrednost se zniža na izmerjeno vrednost.
2. Izbrišite `_policy` iz `quality-baseline.json` (s tem znova aktivirate `--require-tighten` in nočno
   shranjevanje pribitkov) ter obnovite `THRESHOLD = 36` (ali več) v `check-openapi-coverage.mjs`.
3. Zaostrite merila prek izmerjenih vrednosti tam, kjer se je modularizacija obrestovala: `cap` za velikost datotek vrnite na 1000
   (ali 800), spodnje meje pokritosti zvišajte za 5, število neuporabljenih izvozov pa nastavite na 0 za modularizirane pakete.

## Osnovno stanje zaskočke (`quality-baseline.json`)

Mehanizem zaskočke (`scripts/quality/check-quality-ratchet.mjs`) prebere `quality-baseline.json`
in ga primerja s sveže zbrano datoteko `quality-metrics.json`. Vsaka metrika, ki se poslabša
za več kot njen epsilon, povzroči neuspešno gradnjo.

Trenutno spremljane metrike:

| Metrika               | Smer   | Pomen                                      |
| --------------------- | ------ | ------------------------------------------ |
| `eslintWarnings`      | `down` | Število opozoril ESLint se ne sme povečati |
| `coverage.statements` | `up`   | Pokritost stavkov se ne sme zmanjšati      |
| `coverage.lines`      | `up`   | Pokritost vrstic se ne sme zmanjšati       |
| `coverage.functions`  | `up`   | Pokritost funkcij se ne sme zmanjšati      |
| `coverage.branches`   | `up`   | Pokritost vej se ne sme zmanjšati          |

Za posodobitev osnovnega stanja po dejanskem izboljšanju:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

Zastavica `--update` zapiše trenutno izmerjene vrednosti v `quality-baseline.json`.
To datoteko objavite skupaj s spremembo, ki je izboljšala metriko. Zahtevo PR, ki izboljša
metriko brez posodobitve osnovnega stanja, bo zaznal `--require-tighten` (faza 6A.5,
implementacija je v pripravi).

### Zaskočka CodeQL: pogostost osveževanja in ročni sprožilec

`check:codeql-ratchet` bere **stanje repozitorija, ki se osvežuje po urniku — ne za vsak PR.**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` poroča
`state: configured`, `schedule: weekly`: gre za pregled s privzeto nastavitvijo GitHuba, ne za
analizo ob vsakem potisku. Posledica: ko je PR, ki ODPRAVI opozorila, združen, zaskočka še naprej
bere staro, višje število do naslednjega načrtovanega pregleda — zato poroča o poslabšanju
pri vsakem odprtem PR-ju, vključno z nadaljnjimi spremembami popravljalnega PR-ja, dokler pregled ne dohiti stanja.

**Ročna osvežitev**: `gh workflow run codeql.yml --ref release/vX.Y.Z` znova zažene
analizo in v nekaj minutah ponovno objavi opozorila. Najprej preberite `.github/workflows/codeql.yml`
— glava datoteke pojasnjuje, da uporablja samo `workflow_dispatch`, **ker je v navzkrižju s
GitHubovo »privzeto nastavitvijo«** (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`). Za obnovitev sprožilcev `push`/`pull_request`/
`schedule` je najprej potrebno **dejanje lastnika**: Settings → Code security →
CodeQL: Default → Advanced. Ne dodajajte sprožilca `schedule:`, dokler ta preklop ni opravljen — povzročil
bo samo neuspešne zagone.

**Po zmanjšanju števila zaostrite osnovno stanje** — `node scripts/check/check-codeql-ratchet.mjs
--update` zapiše novo izmerjeno število v `quality-baseline.json` →
`metrics.codeqlAlerts.value`, tako da zaskočka ne dovoli neopaznega poslabšanja nazaj
do stare zgornje meje. Praktični primer (2026-09-02/03): PR #12502 je odpravil 7 resničnih opozoril
(13 → 6 izmerjenih odprtih); PR #12530 je zaostril zamrznjeno osnovno stanje z 11 → 6, da se je ujemalo;
preostalih 6 je bilo nato zavrnjenih z utemeljitvijo za vsako opozorilo posebej, tako da je število odprtih padlo na 0.

**Zavrnitve so odločitev upravljavca (strogo pravilo št. 14)** — opozorila CodeQL nikoli ne zavrnite,
ne da bi v komentarju ob zavrnitvi navedli tehnično utemeljitev: `won't fix` za
zahtevo nadrejenega protokola, `used in tests` za testni pripomoček, `false positive`
za razkuževalnik, ki ga CodeQL ne more zaznati (precedens: `docs/security/ERROR_SANITIZATION.md`).

---

## Pravilnik ponovnih poskusov testov (WS5.4, v3.8.49)

Ponovni poskusi se določajo za vsak izvajalnik posebej, nikoli globalno — splošen ponovni poskus resnične regresije spremeni
v nevidne nestabilnosti:

| Izvajalnik       | Pravilnik                                                                                                                                   | Zakaj                                                                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | `retries: 1` samo v CI, z `trace: on-first-retry`                                                                                           | Časovno usklajevanje brskalnika/omrežja je dejansko nedeterministično; en ponovni poskus s sledjo spremeni nestabilnost v diagnostični artefakt |
| Vitest           | BREZ globalnega ponovnega poskusa. Dokazano nestabilen test dobi izrecen ponovni poskus na ravni testa (viden v razliki, pregledan v PR-ju) | Seznam izoliranih testov ostane v repozitoriju in ni nikoli nepregleden                                                                         |
| node:test (unit) | NIKOLI brez ponovnega poskusa                                                                                                               | Nestabilen test enote je napaka v testu — popravite ga, ne zaganjajte ga znova                                                                  |

Ciljni SLO-ji, ko bo na voljo telemetrija nestabilnosti (WS5.2/5.3): <1-% stopnja nestabilnosti na test
(prag »popravi takoj«), ≥95-% uspešnost na cevovod. Referenčne vrednosti panoge —
ponovno jih umerite glede na naše meritve.

## Odklon raglje na ravni izdaje (WS5.5, v3.8.49)

Ko raglja (velikost datoteke, kompleksnost, opozorila eslint) nazaduje na ČISTEM vrhu izdaje
— tj. nazadovanje je povzročila KOMBINACIJA združitev in ga noben posamezen PR ne poustvari
na svoji veji — je za popravek **enkratno odgovoren vodja izdaje, in sicer na veji
izdaje**: prednost dajte izločitvi/refaktoriranju; izhodiščno vrednost na novo določite samo z dokumentiranim
vnosom utemeljitve. Kombinacijskega odklona nikoli ne prelagajte na PR sodelujočega in nikoli
ne določajte nove izhodiščne vrednosti za vsak PR posebej (to skrije resnične regresije). Najprej razločite vzrok: rdeče stanje poustvarite
na čistem vrhu v preizkusnem delovnem drevesu, preden domnevate, da ga je povzročil vaš PR.

## Shranjevanje zmanjšanj raglje — smer navzdol (#8584)

Raglja je avtomatizirana le napol, in sicer napačna polovica. **Zvišanje** omejitve je
ročno urejanje JSON-a, ki traja deset sekund in je najhitrejši način za odblokiranje rdečega PR-ja.
**Znižanje** zahteva, da nekdo zažene `--update` in potrdi rezultat — dokler
ni bilo uvedeno opravilo `bank-ratchet-shrinks`, tega ni izvajal noben potek dela. Izmerjena posledica
(2026-07-25): 18 zamrznjenih datotek je bilo že na meji 800 vrstic za nove datoteke ali pod njo, najslabša
pa pri 132× (`src/shared/validation/schemas.ts`, 19 vrstic z omejitvijo 2.523); zgornja meja
kompleksnosti se je prek približno 37 opomb o ponovni določitvi izhodišča premaknila z `1794 → 2169`, pri čemer je bilo natanko eno
zmanjšanje (−1); zapis »zaostri z `--update` v naslednjem ciklu« pa se je pojavil 31-krat in bil upoštevan
enkrat. Omejitev, ki preživi kodo, zaradi katere je nastala, vsako dokončano
razgradnjo potiho spremeni v dovoljenje za rast za naslednjo osebo, ki ureja datoteko.

`nightly-release-green.yml` → opravilo **`bank-ratchet-shrinks`** sklene to zanko:

|              |                                                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------------------------------- |
| Izvaja se ob | `schedule` (3×/dan) + `workflow_dispatch` — namenoma **ne** ob `push`                                               |
| Meri         | najvišjo vejo `release/vX.Y.Z`, z enakim razreševanjem in zaščito pred vbrizgavanjem kot `release-green`            |
| Zapiše       | `check:file-size --update` in `check:complexity-ratchets --update` (oba sta po zasnovi namenjena samo zmanjševanju) |
| Preveri      | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                            |
| Dostavi      | en vedno posodobljen PR za vejo izdaje — prisilno posodobljen, nikoli podvojen                                      |

Shranjevanje poteka paketno in ne ob vsakem potisku, ker zanj ni zahteve glede zakasnitve (zmanjšanje,
shranjeno v 8 urah, je sprejemljivo), medtem ko bi izvajanje ob vsaki združitvi med kampanjami združevanja
vedno znova gradilo vejo PR-ja in vsakič zahtevalo celoten pregled ESLint. Zaznavanje ostaja vezano na
potisk (`release-green`); paketno je le shranjevanje.

### Varnostni preverjevalnik

Opravilo nenadzorovano zapisuje v izhodiščne vrednosti, zato sprejemljivost tega zagotavlja `verify-ratchet-bank.mjs`.
Primerja drevo po `--update` z `HEAD` in **prekine opravilo,
še preden obstaja kakršna koli potrditev** — ne da bi odprlo PR — razen če je vsaka sprememba ena od naslednjih:

- številski vnos `frozen` / `testFrozen`, ki je **znižan** ali **odstranjen**
- `complexity-baseline.json` → `count` je **znižan**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` je **znižan**

Vse drugo povzroči neuspeh: zvišanje števila, dodajanje vnosa, spreminjanje `cap`/`testCap` ali
brisanje/prepisovanje opombe `_rebaseline_*` (te opombe so revizijska sled razlogov za obstoj posamezne
zgornje meje in so shranjene znotraj istega objekta `frozen` kot vnosi datotek).
Bot, ki bi lahko zvišal omejitev, bi bil nedvomno slabši od obstoječega stanja. Varovalo pred regresijo:
`tests/unit/verify-ratchet-bank.test.ts`.

Opravilo nikoli ne potiska v `release/*` — PR združi človek, zato napačna meritev
ne more pristati brez pregleda.

## Pravilnik seznama dovoljenih izjem

Vsako preverjanje, ki ne sme spodleteti zaradi že obstoječih kršitev, uporablja zamrznjen seznam dovoljenih izjem
(npr. `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). Pravilnik je:

**Odpravite temeljni vzrok; seznam dovoljenih izjem uporabite le, kadar je kršitev že obstajala in
je ni mogoče odpraviti v istem PR-ju.**

Ko dodajate vnos na seznam dovoljenih izjem:

1. Vključite komentar z utemeljitvijo.
2. Navedite povezano sledilno težavo (npr. `// #3498 — Funkcionalnost 2. faze, še ni implementirana`).
3. Vnos odstranite v istem PR-ju, ki odpravi kršitev — zastarel vnos, ki ne
   prezre več aktivne kršitve, je tudi sam napaka (preverjanje zastarelega uveljavljanja 6A.3 bo,
   ko bo implementirano, spodletelo zaradi osirotelega vnosa na seznamu dovoljenih izjem).

Vnosov na seznam dovoljenih izjem **ne** dodajajte zato, da bi testi hitreje uspeli. Uspešno preverjanje ob vse daljšem
seznamu dovoljenih izjem daje lažen občutek kakovosti.

### Ko preverjanje za vaš PR spodleti

1. **Pozorno preberite izpis preverjanja** — natančno vam pove, katera datoteka ali simbol je kršil
   pravilo.
2. **Odpravite kršitev** — večina preverjanj je determinističnih preverjanj datotečnega sistema, ki uspejo takoj,
   ko je koda pravilna.
3. **Če je kršitev že obstajala** (tj. niste je uvedli vi, vendar jo preverjanje zdaj
   zajema): dodajte vnos na seznam dovoljenih izjem s komentarjem, ki vsebuje utemeljitev in povezano sledilno težavo.
4. **Če je preverjanje omejevalnik** (pokritost, opozorila ESLint, podvajanje, kompleksnost):
   vaša sprememba je poslabšala metriko. Odpravite temeljno težavo ali pa (redko) zaženite
   `npm run quality:ratchet -- --update`, če je sprememba namerna in je poslabšanje
   metrike sprejemljivo — vendar v opisu PR-ja dokumentirajte razlog.
5. **Svetovalna preverjanja** (`continue-on-error: true`) so informativna — ne blokirajo
   združitve, vendar se prikažejo v povzetku CI. Kljub temu jih odpravite.

---

## Dodajanje novega preverjanja

1. Ustvarite `scripts/check/check-<name>.mjs` (ali `.ts`). Preverjanja pravilnikov se končajo s kodo 0/1.
   Preverjanja vrste omejevalnik prek `collect-metrics.mjs` zapišejo metriko v `quality-metrics.json`.
2. Dodajte `"check:<name>": "node scripts/check/check-<name>.mjs"` v `package.json`.
3. Povežite ga v `.github/workflows/ci.yml` pod ustreznim opravilom
   (pravilnik → `lint` ali `docs-sync-strict`; omejevalnik → `quality-gate`).
4. Če uporablja seznam dovoljenih izjem, uporabite `reportStaleEntries()` iz
   `scripts/check/lib/allowlist.mjs`, da se zastareli vnosi samodejno zaznajo.
5. V `tests/unit/build/` napišite test, ki pokriva logiko zaznavanja preverjanja.
6. Posodobite ta dokument (dodajte vrstico v tabelo ustreznega opravila).

---

## Orodja za agente: LSP v zanki (izbirno)

Poleg preverjanj CI OmniRoute vključuje **izbirno** ogrodje `agent-lsp`
(datoteka `.mcp.json` na ravni projekta, Faza 7, naloga 15). Ustvarite `.mcp.json`,
da programerskim agentom omogočite dostop do jezikovnega strežnika TypeScript, tako da razrešijo simbole /
diagnostiko **pred** pisanjem kode — kot dopolnilo preverjanju `typecheck:core` po načelu prevajanja pred zatrjevanjem,
ki napake zaradi »izmišljenih simbolov« odpravlja pri viru. Namenoma se ne naloži
samodejno (most MCP↔LSP izberete in preverite sami); nedelujoč vnos zgolj zabeleži
napako povezave in nikoli ne prekine sej.

---

## Zaostanek racionalizacije (pregled ROI — Faza 9 Val 3)

Ta inventar je bil 2026-06-17 usklajen z `ci.yml` (prejšnja različica je izpustila
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence`). Pregled ROI usklajenega nabora
je opredelil naslednje kandidate za racionalizacijo. **Združitve so mehanske spremembe CI;
preklopi/opustitve pa so politične odločitve, pridržane upravljavcu.** Nič od spodaj navedenega
še ni uporabljeno.

**Prav tako zgoraj ni dokumentirano** (svetovalno, šibek signal): opravilo `docs-lint`
(markdownlint + Vale, celotno opravilo ima `continue-on-error`) in samostojni delovni tokovi pregledovalnikov
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. `semgrepFindings: 0` je v
`quality-baseline.json`, vendar ni povezan z blokirajočim mehanizmom za preprečevanje regresij v `ci.yml` — metrika je
trenutno osirotela.

### Združitev / odstranjevanje podvajanj (mehansko, manjše tveganje)

Vsak kandidat je bil 2026-06-17 preverjen glede na dejansko stanje kontrol (zaupaj, vendar preveri);
izkazalo se je, da več »očitnih« združitev skriva tehnični dolg in **niso** neposredno nadomestljive.

- **`check:docs-sync` se izvede dvakrat** — samostojno v opravilu `lint` in znova znotraj `check:docs-all` (`docs-sync-strict`) ter v predpotrditvenem kavlju husky. ✅ **KONČANO** — samostojni klic v `lint` je odstranjen.
- **Pregledovanje CVE** — ❌ **NI čista združitev.** `audit:deps` povzroči strogo napako ob katerem koli CVE z visoko/kritično resnostjo; `check:vuln-ratchet` (osv) pa odpove samo ob _regresiji_ glede na izhodiščno vrednost (trenutno 1 MODERATE). Semantika se razlikuje — opustitev `audit:deps` bi odstranila absolutno kontrolo za visoko/kritično resnost. Ohranite oboje.
- **Zaznavanje ciklov** — ❌ **NI čista združitev.** `check:circular-deps` (dpdm) poroča o **91 ciklih** (zato je svetovalen); brez njihove predhodne odprave ga ni mogoče povišati v blokirajočo kontrolo, poleg tega ima širši obseg kot uspešna, skrbno izbrana kontrola `check:cycles`. `check:cycles` naj ostane blokirajoč; odprava 91 ciklov dpdm je ločena postavka zaostanka.
- **Kompleksnost** — ✅ **KONČANO** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): en prehod ESLint, štetje po ruleId, tako da izhodiščne vrednosti za ciklomatsko kompleksnost + največje število vrstic ter kognitivno kompleksnost ostanejo neodvisne; posamezna ukaza `check:complexity` / `check:cognitive-complexity` ostajata za lokalni `--update`.
- **Preprečevanje halucinacij za `/api`** — ✅ **KONČANO** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): en popis datotečnega sistema za `src/app/api`, openapi-routes + docs-symbols še vedno poročata neodvisno; posamezni ukazi ostajajo za lokalna izvajanja.
- **`check:node-runtime` se izvaja v 11 opravilih** — ⚠️ **nizek ROI.** Vsako se izvaja na ločenem izvajalniku in preverjanje traja <1 s; skupni prihranek je ~10 s, v zameno pa bi izgubili poceni zaščito za vsako opravilo. Sprememba ni vredna pretresov.
- **`typecheck:noimplicit:core` v preverjanju lint v CI** — ✅ **odstranjeno iz opravila lint** (bilo je svetovalno z `continue-on-error`); blokirajočo kontrolo površine tipov predstavljata `typecheck:core` + `check:type-coverage`. Lokalni skript je ohranjen.

### Preklop / odločitev (politika upravljavca)

- `check:openapi-security-tiers` (svetovalno) — ❌ **NI mogoče preprosto preklopiti.** Konča se s kodo 0, vendar opozori, da več poti `traffic-inspector` pod `LOCAL_ONLY_API_PREFIXES` nima pripisa `x-loopback-only: true`. Pred uveljavitvijo je treba te pripise najprej dodati v `openapi.yaml`.
- `typecheck:noimplicit:core` (svetovalno) — v veliki meri ga nadomešča blokirajoči mehanizem `check:type-coverage` za preprečevanje regresij. Preklopite ga v mehanizem za preprečevanje regresij ali opustite odvečni drugi prehod `tsc`.
- `test:vitest:ui` (zdaj **blokirajoče**) — obstoječe napake so izrecno izključene v `vitest.config.ts` s sledilnimi komentarji `// #8618`; nove napake povzročijo neuspeh opravila.
- `check:secrets` (gitleaks, blokirajoči mehanizem za preprečevanje regresij, zamrznjen pri 3 dokumentiranih lažno pozitivnih zadetkih) — dodajte 3 zadetke na seznam dovoljenih, da dosežete 0, ali ga znižajte na svetovalnega. Prekriva se z izvornim GitHubovim pregledovanjem skrivnosti + `check:public-creds`.
- `check:pr-evidence` (blokirajoče, preiskuje besedilo telesa PR) — visoko tveganje lažno pozitivnih zadetkov; opustitev oslabi uveljavljanje Strogega pravila št. 18, zato gre za pravo politično odločitev.
- `semgrep` (samostojno svetovalno preverjanje) — pri družinah OWASP se prekriva s CodeQL; povežite njegovo izhodiščno vrednost z mehanizmom za preprečevanje regresij ali ga opustite.

---

## Povezana dokumentacija

- Dobavna veriga (izvor, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — varovalo za enakost nabora ključev

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, opravilo `i18n-ui-coverage`).
Primerja nabor končnih ključev vsake datoteke `src/i18n/messages/<locale>.json` z datoteko `en.json` in spodleti
ob vsakem manjkajočem ali dodatnem končnem ključu, ne glede na to, kdaj je bil ključ dodan. Oznake mesta
`__MISSING__:` štejejo kot prisotne (njihova vsebina je stvar varovala razmerja). To je absolutno dopolnilo
obeh varoval na podlagi razlik/odstotkov: `check-ui-keys-coverage` zahteva najmanj 80 % za vsak
jezik (43 manjkajočih ključev od približno 13.000 še vedno pomeni 99,7 %), `check-new-key-coverage` pa presoja
samo ključe, ki jih PR doda v `en.json`. Paket za posamezne jezike se ustvari iz različice `en.json` na dan,
ko je njegova veja odcepljena, prevajanje pa traja več dni, medtem ko se v osnovno vejo še naprej dodajajo ključi; PR paketa sam
ne doda nobenega ključa, zato sta obe sorodni varovali ostali tihi, ko je paket 1 (#13044) pristal s 43 manjkajočimi ključi v devetih
jezikih, paket 2 (#13660) pa z 10 manjkajočimi ključi v osmih (2026-09-15). Neuspešno preverjanje popravite z
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers`; `extra` končni ključ
pomeni, da ga je vir odstranil — izbrišite ga iz jezika. `--warn` poroča brez povzročitve neuspeha.
`--catalog=cli` izvede enako primerjavo nad `bin/cli/locales` (`npm run i18n:check-keys:cli`);
oba koraka sta del opravila `i18n-ui-coverage`.

#### `check-new-key-coverage` — varovalo i18n za nove ključe

Sorodno varovalo `check-ui-value-drift`. Slednje zazna angleško vrednost, ki je bila **prepisana**,
medtem ko njeni prevodi niso bili posodobljeni; to varovalo pa zazna angleški ključ, ki je bil **dodan**,
vendar ga nekateri jeziki nikoli niso prejeli.

`check-ui-keys-coverage` tega razreda težav ne more zaznati: zahteva najmanjši odstotek za vsak jezik,
enajst manjkajočih ključev od približno 13.000 pa še vedno pomeni 99,9-odstotno pokritost. Odstotek za posamezen jezik ne more
izraziti »ta funkcionalnost je bila izdana neprevedena« — celotna funkcionalnost je lahko dodana v nov jezik brez kakršnega koli
besedila, ne da bi se številka sploh spremenila.

Dogodek, ki ga varovalo kodira: 3. faza Orchestration Canvas je prevedla svojih enajst ključev v
42 jezikov, ki so takrat obstajali. Nekaj ur pozneje je paket jezikov EU (#13044) povečal število jezikov v repozitoriju
na 51, devet novih (`el`, `et`, `ga`, `hr`, `lt`, `lv`, `mt`, `sl`, `sr`) pa jih ni
nikoli prejelo. `deepMergeFallback` manjkajoči ključ nadomesti z angleščino, zato je bil način odpovedi
nepreveden uporabniški vmesnik in ne prazen uporabniški vmesnik — resnična težava, ki je zaradi zasnove ostala tiha.

Tako kot sorodno varovalo tudi to **upošteva razlike** in primerja angleščino v osnovi združitve z delovnim
drevesom, zato obstoječe vrzeli ostanejo zamrznjene in za vklop varovala ni bila potrebna selitev. Izhod v sili:
`__MISSING__:<english>` odloži prevod, hkrati pa ohrani pravilno delovanje med izvajanjem. `vi` prepoveduje
oznake mesta (`tests/unit/i18n-vi-completeness.test.ts`) in zahteva pravi prevod.

#### `check-vitest-exclusions` — varovalo za odložene teste

Datoteka na seznamu `exclude` v `vitest.config.ts` je test, ki se ne izvaja, vendar je vsakomur, ki pregleduje
drevo, videti kot pokritost. Za komentarjem se je nabralo dvainšestdeset datotek
`// #8618 — obstoječa napaka; odstranite to izključitev, ko bo odpravljena`. Težava #8618 je bila zaprta
2026-08-11, medtem ko se je seznam, ki ga je spremljala, povečal s 45 na 62 vnosov, pri čemer je vsak nov vnos podedoval komentar,
ki je kazal na zaprto težavo. Ko je bil seznam nazadnje izmerjen za vsako datoteko posebej (#13204), je **51 od 62
testov uspelo na trenutnem drevesu brez kakršne koli spremembe izvorne kode**.

Varovalo zahteva, da vsaka izključitev, ki se razreši v dejansko datoteko, (a) navede težavo za sledenje in
(b) obstaja v `config/quality/vitest-exclusions.json` z izmerjenim stanjem, tako da je dodajanje izključitve
razlika, ki jo je mogoče pregledati v namenski datoteki, namesto še ene vrstice v polju s 60 vnosi. Namenoma
ne izvaja znova izključenih testov — to traja približno 10 minut in sodi v periodično opravilo; evidenca
beleži, kdaj je bil vsak test nazadnje izmerjen.
