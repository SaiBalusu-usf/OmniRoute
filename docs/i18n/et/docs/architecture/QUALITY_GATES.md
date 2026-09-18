# Quality Gates Reference (Eesti)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

See dokument on kõigi OmniRoute’i CI kvaliteediväravate autoriteetne viide.
See kirjeldab iga väravat, mida see valideerib, millises CI töös see käivitatakse, kas see kasutab
ratchet-lähtejoont või läbitud/läbikukutud poliitikat ning kas see blokeerib järgu või on nõuandev.

Lühikokkuvõtte ja lubatud loendi poliitika leiate faili `AGENTS.md` jaotisest „Quality Gates & Ratchets“.
Sama süsteemi kriitilise hinnangu, küpsusklassifikatsiooni ja tööriistast sõltumatu
replikatsiooniplaani leiate dokumendist
[Quality Gate Playbook](../ops/QUALITY_GATE_PLAYBOOK.md).

---

## Väravate loend (~90 skripti)

Skriptid asuvad kataloogides `scripts/check/` (poliitikaväravad) ja `scripts/quality/` (ratchet-mootor).
CI tõeallikas on `.github/workflows/ci.yml`.

### Väljalaske PR-i kiirtee (`quality.yml`)

`.github/workflows/quality.yml` käivitatakse PR-ide puhul, mille sihtharu on `release/**`. See hoiab kaastöötajate
harud liikumises teepõhiselt filtreeritud kiirväravate abil ning lisab koodimuudatuste jaoks ühe nõuandva tootmisjärgu signaali:

| Töö                                              | Ulatus                                                                                                                                                                                                                                        | Blokeeriv                                                                                                    |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `Build (advisory)`                               | Mittemustandina koodi-PR-id ja Mergify järjekorraharud; Node 24, `npm-ci-retry`, `check:node-runtime`, `npm run build` koos muutujaga `OMNIROUTE_USE_TURBOPACK=1`; artefakti ei laadita üles, sest ükski järgnev kvaliteeditöö ei kasuta seda | **Nõuandev** (`continue-on-error: true`; eemaldada pärast üht nädalat stabiilseid väljalaske-PR-i käivitusi) |
| `Docs Gates (fast-path)`                         | Dokumentatsiooni-/koodi-PR-id; API dokumentatsiooni viited ja docs-all                                                                                                                                                                        | Jah                                                                                                          |
| `Fast Quality Gates`                             | Koodi-PR-id; staatilised kontrollid, tüübikontroll, töölaua tüübikontroll, mõjutatud üksustestid                                                                                                                                              | Jah                                                                                                          |
| `Forgotten sibling tests`                        | Koodi-PR-id; muudetud moodulite jälitus staatiliste tarbijate ja võimalike sõsartestideni; barreli- ja dünaamilise impordi teed esitatakse nõuandva diagnostikana koos viidatud lubatud loendi eranditega                                     | **Nõuandev**                                                                                                 |
| `Vitest (fast-path)`                             | Koodi-PR-id; kiire vitest-komplekt                                                                                                                                                                                                            | Jah                                                                                                          |
| `Unit Tests fast-path`                           | Koodi-PR-id; neljaks killuks jaotatud üksustestide komplekt                                                                                                                                                                                   | Jah                                                                                                          |
| `No new ESLint warnings`                         | Koodi-PR-id; välistustest teadlik lintimise kaitse                                                                                                                                                                                            | Jah oma päritoluga harude puhul, forkide puhul nõuandev                                                      |
| `Merge integrity (changelog + generated skills)` | Mittemustandina PR-id; muudatuste logi ja genereeritud oskuste sünkroonimine                                                                                                                                                                  | Jah oma päritoluga harude puhul, forkide puhul nõuandev                                                      |

#### Unustatud sõsartestide aruanne

`npm run check:forgotten-sibling-tests` kasutab uuesti testide mõjukaardi aluseks olevat importide lahendajat.
Iga muudetud tootmismooduli kohta esitab see deterministlikud
`muudetud moodul/sümbol -> staatiline tarbija -> võimalik sõsartest` ahelad, kui võimalikku
testi tõmbetaotluse erinevustes ei leidu. Markdowni kokkuvõte ja JSON-i tulemus säilitatakse
töövoo artefaktina `forgotten-sibling-tests`, et neid enne blokeeriva kasutuselevõtu alustamist kalibreerida.

Barreli reeksport ja dünaamilised impordid on üksnes lahendusdiagnostika; need ei tekita kunagi
blokeerivat leidu. Ülevaadatud erandid asuvad failis
`config/quality/forgotten-sibling-allowlist.json`. Iga kirje peab nimetama tarbija ja võimaliku
testi, esitama konkreetse põhjenduse ning linkima GitHubi probleemi või tõmbetaotluse. Vigase vorminguga kirjed
lõpetavad kontrolli veaga. Erandid ei saa peita kustutatud võimalikku testi ega erinevust, mis lisab `.skip`/`.todo`;
väidete nõrgestamise ja muu varjamise eest vastutab jätkuvalt sõltumatult blokeeriv
`check:test-masking` värav.

### Töö: `lint`

Käivitatakse iga `main`-harule suunatud PR-i puhul. Tõrke korral blokeerib ühendamise.

| Skript (`npm run ...`)            | Kontrollib                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Blokeeriv                                   |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| `check:node-runtime`              | Node.js-i versioon jääb toetatud vahemikku                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Jah                                         |
| `check:cycles`                    | Tsüklilised impordid — kõik `src/` + `open-sse/` moodulid                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Jah                                         |
| `check:route-validation:t06`      | Zod-skeemid on kõigil marsruutidel olemas (6. taseme reegel)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Jah                                         |
| `check:any-budget:t11`            | `@ts-expect-error // any` arv ei ületa eelarvet (11. taseme catraca)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Jah                                         |
| `check:provider-consistency`      | Igal teenusepakkujal failis `providers.ts` on vastav kirje failis `providerRegistry.ts` (ja vastupidi, lubatud loendi piires)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Jah                                         |
| `check:model-lifecycle`           | Kolm käsitsi hallatavat marsruutimistabelit püsivad kooskõlas repositooriumisse salvestatud elutsükli hetktõmmisega (#11503): `FITNESS_TABLE` (`taskFitness.ts`) ei anna skoori ühelegi kõrvaldatud ID-le, mida `REGISTRY` saab marsruutida; iga `BUILT_IN_ALIASES` sihtmärk leidub registris `REGISTRY` ega esine kõrvaldatud ID-de hetktõmmises; iga kõrvaldatud ID, mis on endiselt registris `REGISTRY`, suunatakse edasi või on loetletud loendis `allowedRetiredInCatalog`; ning ükski `DEFAULT_DEGRADATION_MAP` lähte- ega sihtväärtus ei ole selles hetktõmmises märgitud kõrvaldatuks. See ei tõesta, et mudelit teenindab praegu aktiivne ülesvooluteenuse pakkuja. Võrguühenduseta — võrdleb failiga `config/quality/model-lifecycle.json`, mida värskendatakse käsitsi käsuga `npm run quality:refresh-model-lifecycle` (vajab võrku; pole CI-ga ühendatud). `allowedRetiredInCatalog` on järk-järgulise vähendamise põrkmehhanism: lisa kirje ainult koos jälgimisülesandega. | Jah                                         |
| `check:fetch-targets`             | Iga kliendipoolse `src/` kataloogi `fetch("/api/...")` viide osutab tegelikule failile `route.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Jah                                         |
| `check:deps`                      | Kõik repositooriumi kõigi `package.json` failide kaudu käsuga `npm install` installitavad sõltuvused on failis `dependency-allowlist.json`; uued fikseerimata versiooniga või nimekaaperduse ohuga paketid märgistatakse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Jah                                         |
| `audit:deps`                      | `npm audit` (juurkataloog + Electron) — puuduvad kõrge/kriitilise taseme hoiatused (kattub OSV kontrolliga `check:vuln-ratchet`; vt ratsionaliseerimise tööjärge)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Jah                                         |
| `check:lockfile`                  | Faili `package-lock.json` terviklus — HTTPS-register, terviklusräsid, hosti alistamised puuduvad                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Jah                                         |
| `check:licenses`                  | Tootmissõltuvuste SPDX-litsentside lubatud loend                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Jah                                         |
| `check:tracked-artifacts`         | Puuduvad järgitavad kompileerimisartefaktid / repositooriumisse salvestatud `node_modules` sümbollingid (käitatakse ka husky commit'i-eelse kontrollina; push'i-eelne kontroll on tahtlikult kerge — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Jah                                         |
| `check:vitest-exclusions`         | Iga Vitesti välistus nimetab jälgimisülesande ja esineb failis `config/quality/vitest-exclusions.json` (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Jah                                         |
| `check:file-size`                 | Ükski lähtefail ei ületa faililaiendipõhist piirangut (põrkmehhanism: külmutatud suured failid loendis `frozen`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Jah                                         |
| `check:error-helper`              | Täitjate/töötlejate veavastused kasutavad funktsiooni `buildErrorBody()` / `sanitizeErrorMessage()` (range reegel #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Jah                                         |
| `check:migration-numbering`       | Migratsiooni SQL-failid on nummerdatud järjestikku, ilma lünkade ja duplikaatideta                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Jah                                         |
| `check:public-creds`              | Väljaspool faili `publicCreds.ts` puuduvad literaalsed OAuthi `client_id`/`client_secret` väärtused ja Firebase Webi võtmed (range reegel #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Jah                                         |
| `check:db-rules`                  | Väljaspool `src/lib/db/` mooduleid puudub töötlemata SQL; failist `localDb.ts` puuduvad koondimpordid (ranged reeglid #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Jah                                         |
| `check:known-symbols`             | Teenusepakkujate täitjad, marsruutimisstrateegiad ja tõlkijad, mis on registreeritud nende suunamistabelites, vastavad kettal olevatele failidele — puuduvad orvuks jäänud või deklareerimata sümbolid                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Jah                                         |
| `check:route-guard-membership`    | Iga marsruut, mis käivitab alamprotsessi, on funktsiooniga `isLocalOnlyPath()` liigitatud (ranged reeglid #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Jah                                         |
| `check:test-discovery`            | Vähemalt üks testikäitaja kogub repositooriumis iga `*.test.ts` / `*.spec.ts` faili (põrkmehhanism: orbfailide loend failis `test-discovery-baseline.json` saab ainult kahaneda)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Jah                                         |
| `check:agent-skills-sync`         | Genereeritud agendioskuste artefaktid vastavad nende lähtekataloogile (hälbed puuduvad)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `check:provider-asset-provenance` | Teenusepakkujate logodel/varadel on dokumenteeritud päritolukirje                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `lint:json`                       | JSON-i konfiguratsioonifailid on parsitavad ja vastavad repositooriumi lintimisreeglitele                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `typecheck:core`                  | TypeScripti kompileerimine vigadeta (ainult soovituslikud hoiatused)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Jah                                         |
| `typecheck:noimplicit:core`       | Range `noImplicitAny` — tulevikku suunatud; paljud olemasolevad väljakutsekohad vajavad endiselt annotatsioone                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | **Soovituslik** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `tsc`, mille ulatus on piiratud kataloogiga `src/app/(dashboard)/**` (#7033) — käsu `typecheck:core` hooldatud 27 faili lubatud loend ei sisalda ühtegi töölaua TSX-faili ning ka `next build` ei tee nende tüübikontrolli (`next.config.mjs` määrab `ignoreBuildErrors: true`), mistõttu olid sealsete orvuks jäänud identifikaatorite regressioonid (#6625/#6909) CI-le nähtamatud. Võrdleb külmutatud failipõhise ja TS-koodipõhise veaarvude lähtetasemega (`config/quality/dashboard-typecheck-baseline.json`, sama aegunud kirjete jõustamise muster nagu kontrollis `check:known-symbols`) — kontroll ebaõnnestub ainult lähtetasemest suurema arvu UUTE vigade korral; olemasoleva vea parandamisel vähenda lähtetaset käsuga `--update`.                                                                                                                                                                                                                                          | Jah                                         |

### Töö: `quality-gate`

Käivitatakse pärast tööd `test-coverage`. Tõrke korral blokeerib ühendamise.

| Skript                       | Kontrollib                                                                                                                                                                                              | Blokeeriv                    |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `quality:collect`            | Väljastab faili `quality-metrics.json` (ESLinti hoiatuste arv, ühendatud osaaruande testikattuvus)                                                                                                      | Jah (ratchet'i eelnev etapp) |
| `quality:ratchet`            | Ükski faili `quality-baseline.json` mõõdik pole halvenenud (ESLinti hoiatused ≤ baastase; testikattuvus ≥ baastase)                                                                                     | Jah                          |
| `check:duplication`          | Koodi dubleerimine (jscpd@4) ei ületa failis `quality-baseline.json` määratud baastaset                                                                                                                 | Jah                          |
| `check:complexity`           | Failitaseme tsüklomaatiline keerukus ei ületa ülempiiri (ESLinti põhireeglid `complexity` + `max-lines-per-function`)                                                                                   | Jah                          |
| `check:cognitive-complexity` | Kognitiivse keerukuse ratchet (`eslint-plugin-sonarjs`) — eraldi ESLinti käivitus; CI käitab mõlemat ühendatuna ühe sammuna `check:complexity-ratchets`                                                 | Jah                          |
| `check:dead-code`            | Kasutamata eksportide/failide ratchet (knip) ei halvene võrreldes baastasemega                                                                                                                          | Jah                          |
| `check:compression-budget`   | Tihendamise jõudlustesti eelarve — mootoripõhised tokenisäästu alampiirid ei tohi langeda                                                                                                               | Jah                          |
| `check:type-coverage`        | Tüübistatud koodi osakaalu ratchet (`type-coverage`) ei halvene; hõlmab suures osas kontrolli `typecheck:noimplicit:core`                                                                               | Jah                          |
| `check:codeql-ratchet`       | Avatud CodeQL-i hoiatuste arv ei suurene (loeb käsuga `gh api`; tokeni puudumisel jäetakse kontroll tõrketa vahele) — värskendamissagedus ja käsitsi käivitamine: vt allpool jaotist „CodeQL-i ratchet“ | Jah                          |

### Töö: `quality-extended`

Kogu töö on soovituslik (`continue-on-error: true`). npm-il põhinevad ratchet'id käivitatakse
tegelikult; välised skannerid paigaldatakse käsuga `gh release download` ning jätavad kontrolli ise vahele (väljumiskood 0),
kui binaarfail endiselt puudub.

| Skript                   | Kontrollib                                                                                                                                                                                                 | Blokeeriv       |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `check:circular-deps`    | Ringseid sõltuvusi pole (dpdm)                                                                                                                                                                             | **Soovituslik** |
| `check:bundle-size`      | Paketi suurus ei ületa ülempiiri                                                                                                                                                                           | **Soovituslik** |
| `check:secrets`          | Saladuste skannimine (gitleaks) — binaarfaili puudumisel jäetakse vahele                                                                                                                                   | **Soovituslik** |
| `check:vuln-ratchet`     | Sõltuvuste turvanõrkused (osv-scanner) ei halvene — binaarfaili puudumisel jäetakse vahele                                                                                                                 | **Soovituslik** |
| `check:workflows`        | Töövoogude lintimine (actionlint + zizmor) — binaarfailide puudumisel jäetakse vahele                                                                                                                      | **Soovituslik** |
| `check:openapi-breaking` | Avaliku API lepingu (`openapi.yaml`) ühildumatud muudatused võrreldes baasharuga (oasdiff) — väljastab `openapiBreaking=N`; jäetakse vahele, kui oasdiff puudub või baasspetsifikatsiooni ei saa lahendada | **Soovituslik** |

### Töö: `docs-sync-strict`

Käivitatakse iga harule `main` suunatud PR-i korral. Tõrke korral blokeerib ühendamise.

| Skript                         | Kontrollib                                                                                                                                                                      | Blokeeriv                    |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `check:docs-all`               | Metavärav, mis käivitab allolevad 6 alamväravat järjest                                                                                                                         | Jah                          |
| ↳ `check:docs-sync`            | CHANGELOG-i / OpenAPI / llm.txt versioonide kooskõla                                                                                                                            | Jah                          |
| ↳ `check:docs-counts`          | Proosas esitatud arvud (pakkujate arv, migratsioonide arv jne) jäävad tegelike arvude järkjärgulise lävendi vahemikku                                                           | Jah                          |
| ↳ `check:env-doc-sync`         | Iga `.env.example`-is olev keskkonnamuutuja on dokumentatsiooni tabelis kirjeldatud ja vastupidi                                                                                | Jah                          |
| ↳ `check:deprecated-versions`  | Dokumentatsioonis pole aegunud versioonistringe                                                                                                                                 | Jah                          |
| ↳ `check:doc-links`            | Dokumentatsiooni sisemised markdown-lingid viitavad olemasolevatele failidele (`[tekst]`/`(path)`-kujul)                                                                        | Jah                          |
| ↳ `check:fabricated-docs`      | Dokumentatsioonis mainitud marsruudid, keskkonnamuutujad, CLI-käsud, hook'ide nimed ja failiteed on koodibaasis olemas. Range värav lipuga `--strict`; ilma liputa ei blokeeri. | Jah (CI-s lipuga `--strict`) |
| `check:cli-i18n`               | CLI-käskude stringid on olemas kõigis i18n-i lokaadifailides                                                                                                                    | Jah                          |
| `check:openapi-coverage`       | OpenAPI spetsifikatsioon katab vähemalt järk-järgult tõstetava alampiiri jagu tegelikke marsruute                                                                               | Jah                          |
| `check:openapi-security-tiers` | Turbetasemete annotatsioonid failis `openapi.yaml` on kooskõlas faili `routeGuard.ts` klassifikatsioonidega                                                                     | **Nõuandev**                 |
| `check:openapi-routes`         | Iga failis `openapi.yaml` olev tee vastab tegelikule `route.ts`-ile (hallutsinatsioonivastane kontroll)                                                                         | Jah                          |
| `check:docs-symbols`           | Iga `docs/**/*.md`-is olev `/api/...`-viide vastab tegelikule `route.ts`-ile (hallutsinatsioonivastane kontroll)                                                                | Jah                          |
| `i18n translation drift`       | Tõlkimata võtmed i18n-i lokaadifailides — ainult hoiatus                                                                                                                        | **Nõuandev**                 |

### Töö: `i18n-ui-coverage`

| Skript                                  | Kontrollib                                                                                                                                                                                                                           | Blokeeriv    |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ |
| `check-ui-keys-coverage` (tekstisisene) | Kasutajaliidese i18n-võtmete katvus on ≥ 65%                                                                                                                                                                                         | Jah          |
| `check-ui-value-drift` (tekstisisene)   | Ümber kirjutatud ingliskeelne **väärtus** ei jäta maha aegunud tõlget                                                                                                                                                                | Jah          |
| `check-new-key-coverage` (tekstisisene) | **Uus** ingliskeelne võti jõuab igasse lokaati                                                                                                                                                                                       | Jah          |
| `check-translation-ratio`               | Tegelike tõlgete suhtarv lokaadi kohta (ingliskeelsega identsed / kohatäitjad / lubatud loendist välja jäävad puuduvad väärtused) ei tohi ületada faili `config/quality/i18n-translation-baseline.json` väärtust koos lubatud varuga | **Nõuandev** |

Vajab `fetch-depth: 0` — väärtuste aegumise värav võrdleb faili `en.json` liitmislähtega.

#### `check-ui-value-drift` — aegunud tõlgete värav

Tuvastab ühe i18n-i regressiooni, mida teised väravad struktuurselt tuvastada ei suuda: ingliskeelne väärtus
kirjutatakse ümber, kuid _eelmisest_ ingliskeelsest väärtusest tuletatud tõlked jäävad alles, mistõttu
muukeelsed kasutajad loevad jätkuvalt enesekindlalt sõnastatud, kuid nüüdseks vale teksti.

See jõudis päriselt väljalaskesse. `oauthModal.googleOAuthWarning` kirjutati ümber, kui lisati Antigravity
sisselogimisabiline (#5203); **39 lokaati 43-st** säilitasid teksti, mis käskis operaatoritel „kopeerida
täielik URL ja kleepida see allolevale väljale” — töövoog, mida ei saa selle pakkuja puhul lõpule viia. See jäi
kuni #8463-ni märkamata, sest:

- `sync-ui-keys` täidab ainult **puuduvad** võtmed, mitte kunagi **aegunud** võtmeid;
- `check-ui-keys-coverage` loendab võtme _olemasolu_, seega läheb aegunud tõlge katvuses arvesse;
- `check-translation-drift` jälgib dokumentatsiooni peegelkoopiaid `docs/i18n/<locale>/**.md` —
  see ei loe kunagi faile `src/i18n/messages/*.json`. Blokeerib töös `docs-sync-strict` alates
  2026-09 uuesti sünkroonimisest: muuda põhidokumenti → `npm run i18n:run -- --files=<doc>` (jaotise tasemel, kiire).

**Muudatuseteadlik, mitte baasjoonepõhine.** See võrdleb ühendamisbaasi faili `en.json`
tööpuuga; iga võtme puhul, mille ingliskeelne väärtus muutus, loetakse aegunuks kõik lokaadid,
kus on endiselt muutmata tõlge. See **külmutab olemasoleva võla** tahtlikult — muudatusvaade
ei näita, millisest vanast ingliskeelsest tekstist ammune tõlge pärineb, seega hindab kontroll
ainult seda, mida praegune muudatus puudutab. Alternatiiv (võtmepõhine räsi-baasjoon) nõuaks
~600 KB genereeritud faili, mis oleks 3× suurem kui suurim olemasolev baasjoon ja muutuks iga i18n PR-iga.

Kontrolli saab läbida kahel viisil:

1. uuendage mõjutatud tõlkeid või
2. määrake nende väärtuseks `__MISSING__:<uus ingliskeelne tekst>` — käituskeskkond väljastab siis parandatud ingliskeelse teksti
   (`src/i18n/request.ts::deepMergeFallback`, #7258) ja võti lisatakse tõlkejärjekorda.

Kui stringi **tähendus** muutus, eelistage **võtme ümbernimetamist**: uus võti ei saa
aegunud tõlget pärida. Seda mustrit kasutati #8463 puhul.

```bash
npm run i18n:check-value-drift          # range (mida CI käitab)
npm run i18n:check-value-drift:warn     # ainult aruanne
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

Lõpetab koodiga 0 ja kuvab `SKIP reason=base-unresolved`, kui baaskataloogi ei saa lugeda (pinnapealne
kloon ilma baasviiteta), järgides `check-openapi-breaking` käitumist.

### Töö: `i18n`

Täielik i18n valideerimismaatriks (üks töö lokaadi kohta). Kogu töö on nõuandev.

| Skript                          | Valideerib                      | Blokeeriv                                               |
| ------------------------------- | ------------------------------- | ------------------------------------------------------- |
| `validate_translation.py quick` | Tõlke täielikkust lokaadi kaupa | **Nõuandev** (`continue-on-error: true` kogu töö puhul) |

### Töö: `pr-test-policy`

Käitatakse ainult tõmbetaotluste puhul.

| Skript                 | Valideerib                                                                                                                                    | Blokeeriv |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `check:pr-test-policy` | PR-id, mis muudavad tootmiskoodi kataloogides `src/`, `open-sse/`, `electron/` või `bin/`, peavad teste lisama või uuendama (range reegel #8) | Jah       |
| `check:test-masking`   | Muudetud testifailid ei vähenda väidete netoarvu ega lisa tautoloogiaid `assert.ok(true)`                                                     | Jah       |
| `check:pr-evidence`    | PR-i kirjeldus viitab muudatuse testi-/VPS-tõenditele (automatiseerib range reegli #18 PR-i teksti grep’ides — habras, vt mahajäämust)        | Jah       |

### Töö: `test-vitest`

Käitatakse pärast tööd `build`. Ebaõnnestumisel blokeerib ühendamise.

| Testikomplekt    | Valideerib                                                            | Blokeeriv                                                                                                                |
| ---------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `test:vitest`    | MCP-serverit (110 tööriista), autoCombo’t, vahemälu — vitesti käitaja | Jah                                                                                                                      |
| `test:vitest:ui` | Kasutajaliidese komponentide teste — vitesti käitaja                  | **Blokeeriv** — varasemad tõrked on failis `vitest.config.ts` selgesõnaliselt välistatud; uued tõrked kukutavad töö läbi |

### Öised töövood (ajastatud, nõuandvad)

Neid käitatakse cron-ajastuse alusel (ja sündmusega `workflow_dispatch`), mitte kunagi PR-ide puhul. Kõik on nõuandvad.

| Töövoog                | Valideerib                                                                                                                                                                                | Blokeeriv    |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `nightly-property`     | fast-check’i omadusteste juhusliku algväärtuse ja suure käituskordade arvuga                                                                                                              | **Nõuandev** |
| `nightly-resilience`   | kuhjamälu kasvu kontrolli, kaosepõhist tõrgete sisestamist, k6 koormus-/kestustesti                                                                                                       | **Nõuandev** |
| `nightly-llm-security` | promptfoo sisestusrünnete kaitset (blokeerimisrežiim) + garaki sonde (teenusepakkuja saladuse puudumisel jäetakse vahele)                                                                 | **Nõuandev** |
| `nightly-schemathesis` | OpenAPI lepingu hägustestimist (schemathesis) töötava OmniRoute’i vastu, kasutades faili `docs/openapi.yaml` — toob esile spetsifikatsioonirikkumised / töötlemata 500-vead (etapp 8 B.4) | **Nõuandev** |
| `nightly-mutation`     | Strykeri mutatsioonitestimise skoori kiirete ühiktestide rajal — ellujäänud mutandid toovad esile nõrgad väited                                                                           | **Nõuandev** |
| `nightly-compat`       | Node’i mootori ühilduvusmaatriksit toetatud `engines.node` vahemikes                                                                                                                      | **Nõuandev** |

---

## Kiirusefaas (2026-08-30 → v4.0 LTS): kõiki lähtetasemeid leevendati 20%

Omaniku otsus (2026-08-30): kuni v4.0 modulariseerimiseni on väljalaskekiirus olulisem
kui tehnilise võla piiri hoidmine. Kõiki **arvulisi** kontrollmehhanismide lähtetasemeid leevendati ühe
auditeeritava korraga 20% ning faas on deklareeritud failis `config/quality/quality-baseline.json`:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| Mis muutus                                                                                                                                                                                                   | Kus                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — väiksem-on-parem loendurid ×1.2, suurem-on-parem protsendid ÷1.2 (katvuse alampiir 60 säilitati, `eslintErrors` jääb väärtusele 0, `eslintWarnings` 0 → 20% külmutatud eiramiste arvust) | `quality-baseline.json` (`_relax_velocity_2026_08_30` märkus loetleb kõik väärtused enne → pärast)     |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                             | `complexity-baseline.json`, `duplication-baseline.json`                                                |
| `cap`, `testCap`, iga `frozen[*]` / `testFrozen[*]` rea piir ×1.2                                                                                                                                            | `file-size-baseline.json`                                                                              |
| failipõhised / TS-koodi põhised loendurid ×1.2                                                                                                                                                               | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json` |
| `THRESHOLD` 36 → 30                                                                                                                                                                                          | `scripts/check/check-openapi-coverage.mjs`                                                             |
| `--require-tighten` muutub soovituslikuks, kui `_policy.requireTighten === false`                                                                                                                            | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| öine `bank-ratchet-shrinks` peatatakse (see talletaks mõõdetud vähenemise ja tühistaks varuruumi)                                                                                                            | `.github/workflows/nightly-release-green.yml`                                                          |

Lubatud erandite loendid (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) **ei ole** eelarved ja neid ei muudetud. Läbitud/ebaõnnestunud olekuga poliitikaväravad (saladused, SQL-i reeglid,
dokumentatsiooni/keskkonna leping, i18n-i võrdsus, ühiktestid) ei muutunud — ebaõnnestunud test on endiselt ebaõnnestunud test.

**Tööriistad**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — ühekordne
  leevendamine (`scripts/quality/relax-baselines.mjs`); keeldub sama märkusega teist korda käivitumast.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  mõõdab iga arvulist väravat samal viisil nagu CI ja kuvab iga värava allesjäänud varuruumi
  (`scripts/quality/baseline-headroom.mjs`). Öine `baseline-headroom` töö postitab
  tabeli aktiivsesse probleemikirjesse **📈 Lähtetaseme varuruum (kiirusefaas)** ja lisab sildi
  `headroom-alert`, kui mõni värav on oma piirist kuni 10% kaugusel või on selle juba ületanud. See probleemikirje
  on varajane hoiatus: päevadega täituv eelarve tähendab, et leevenduse kasutavad ära
  mõned PR-id, mitte kogu meeskond — vaadake probleemse värava `_rebaseline_*` märkusi.

**Uue koodi režiim (Clean-as-You-Code) — alates 2026-08-30, ainult PR-i kiirtee**

`pull_request` sündmuste korral edastab `quality.yml` suvandi `--base-ref <PR-i baasi SHA>` käskudele `check:file-size`,
`check:complexity-ratchets` ja `check:dead-code`. Selles režiimis võrdleb värav HEAD-i
ühendamisbaasiga **ainult PR-i muudetud failide ulatuses** (`scripts/check/newCodeMode.mjs`:
ühendamisbaas materialiseeritakse ajutises `git worktree` töökataloogis, ESLint/knip käivitatakse seal ja HEAD-il ning
failipõhiseid loendureid võrreldakse erinevuste põhjal):

- **blokeeriv** — PR lisas muudetud failidesse tsüklomaatilise/kognitiivse keerukuse rikkumisi või kasutamata eksporditud liikmeid
  (`complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=` logis);
- **soovituslik** — globaalne koguarv võrreldes külmutatud lähtetasemega. Päritud kõrvalekalle ei muuda
  asjassepuutumatut PR-i kunagi punaseks; kõrvalekalle külmutatakse väljalaske kooskõlastamisel uuesti ja seda jälgib varuruumi töö.

`workflow_dispatch` käivitustel, väljalaske rohelise oleku kontrollil ja öisel varuruumi tööl puudub PR-i baas
ning need kasutavad jätkuvalt absoluutset (globaalset) võrdlust. Katvus, dubleerimine ja tüübikatvus jäävad
praegu globaalseks (nende tööriistad ei loo failipõhist erinevust soodsalt) — need on sama käsitluse kandidaadid.

**Faasi lõpetamine versioonis v4.0 (LTS = varasemast rangem, mitte „tagasi normaalsusesse”)**

1. Puhta `release/v4.0.0` tipu peal käivita tulemuse jäädvustamiseks `npm run quality:headroom --json`, seejärel
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update` ja iga tüübikontrolli lüüsi
   `--update` — iga lähtetase langeb mõõdetud väärtuseni.
2. Kustuta failist `quality-baseline.json` kirje `_policy` (aktiveerib uuesti `--require-tighten` ja igaöise
   varu kogumise), taasta failis `check-openapi-coverage.mjs` väärtus `THRESHOLD = 36` (või suurem).
3. Karmista mõõdetud väärtustest enam seal, kus modulariseerimine end ära tasus: failisuuruse `cap` tagasi väärtusele 1000
   (või 800), katvuse alampiirid +5, surnud ekspordid modulariseeritud pakettides 0.

## Ratchet’i baastase (`quality-baseline.json`)

Ratchet’i mootor (`scripts/quality/check-quality-ratchet.mjs`) loeb faili `quality-baseline.json`
ja võrdleb seda värskelt kogutud failiga `quality-metrics.json`. Iga mõõdik, mis halveneb
rohkem kui selle epsilon lubab, põhjustab järgu nurjumise.

Praegu jälgitavad mõõdikud:

| Mõõdik                | Suund  | Tähendus                                |
| --------------------- | ------ | --------------------------------------- |
| `eslintWarnings`      | `down` | ESLinti hoiatuste arv ei tohi suureneda |
| `coverage.statements` | `up`   | Lausete katvus ei tohi väheneda         |
| `coverage.lines`      | `up`   | Ridade katvus ei tohi väheneda          |
| `coverage.functions`  | `up`   | Funktsioonide katvus ei tohi väheneda   |
| `coverage.branches`   | `up`   | Harude katvus ei tohi väheneda          |

Baastaseme värskendamiseks pärast tegelikku paranemist tehke järgmist:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

Lipp `--update` kirjutab praegu mõõdetud väärtused faili `quality-baseline.json`.
Kommiteerige see fail koos muudatusega, mis mõõdikut parandas. PR, mis parandab
mõõdikut ilma baastaset värskendamata, tuvastatakse lipuga `--require-tighten` (etapp 6A.5,
rakendamine on ootel).

### CodeQL-i ratchet: värskendamissagedus ja käsitsi käivitamine

`check:codeql-ratchet` loeb **hoidla olekut, mida värskendatakse ajakava alusel — mitte iga PR-i korral.**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` annab tulemuseks
`state: configured`, `schedule: weekly`: see on GitHubi vaikeseadistuse kontroll, mitte iga tõuke
korral tehtav analüüs. Tagajärg: pärast hoiatusi PARANDAVA PR-i mestimist loeb ratchet
endiselt vana, suuremat arvu kuni järgmise ajastatud kontrolli käivitumiseni — seega teatab see
halvenemisest iga avatud PR-i puhul, sealhulgas parandava PR-i enda järelmuudatuste puhul, kuni kontroll järele jõuab.

**Käsitsi värskendamine**: `gh workflow run codeql.yml --ref release/vX.Y.Z` käivitab
analüüsi uuesti ja avaldab hoiatused mõne minuti jooksul uuesti. Lugege esmalt faili `.github/workflows/codeql.yml`
— selle päis selgitab, et see on ainult `workflow_dispatch`-põhine, **sest see on vastuolus
GitHubi „vaikeseadistusega“** (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`). Käivitajate `push`/`pull_request`/
`schedule` taastamine nõuab esmalt **omaniku toimingut**: Settings → Code security →
CodeQL: Default → Advanced. Ärge lisage käivitajat `schedule:` ilma seda ümberlülitust tegemata — see
tekitab ainult nurjunud käivitusi.

**Pärast arvu vähenemist karmistage baastaset** — `node scripts/check/check-codeql-ratchet.mjs
--update` kirjutab uue mõõdetud arvu faili `quality-baseline.json` →
`metrics.codeqlAlerts.value`, et ratchet ei lubaks vaikimisi halvenemist tagasi
vana ülempiirini. Läbitöötatud näide (2026-09-02/03): PR #12502 parandas 7 tegelikku hoiatust
(13 → 6 mõõdetud avatud hoiatust); PR #12530 karmistas fikseeritud baastaseme 11 → 6, et see vastaks tulemusele;
ülejäänud 6 märgiti seejärel iga hoiatuse kohta esitatud põhjendusega lahendatuks, kuni avatuks jäi 0 hoiatust.

**Hoiatuste lahendatuks märkimise otsustab operaator (range reegel #14)** — ärge märkige CodeQL-i hoiatust
kunagi lahendatuks ilma tehnilist põhjendust lahendatuks märkimise kommentaari lisamata: `won't fix`
ülesvooluprotokolli nõude korral, `used in tests` testifixtuuri korral, `false positive`
sellise puhastaja korral, mida CodeQL ei suuda tuvastada (pretsedent: `docs/security/ERROR_SANITIZATION.md`).

---

## Testide korduskatsete poliitika (WS5.4, v3.8.49)

Korduskatseid hallatakse iga käitaja kohta eraldi, mitte kunagi üldise lausreeglina — üldine korduskatse muudab tegelikud regressioonid nähtamatuteks ebastabiilsusteks:

| Käitaja          | Poliitika                                                                                                                                            | Põhjus                                                                                                                                   |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | `retries: 1` ainult CI-s koos seadega `trace: on-first-retry`                                                                                        | Brauseri/võrgu ajastus on tõepoolest mittedeterministlik; üks korduskatse koos jäljega muudab ebastabiilsuse diagnoositavaks artefaktiks |
| Vitest           | EI OLE üldist korduskatset. Tõendatult ebastabiilsele testile määratakse selgesõnaline testipõhine korduskatse (nähtav diffis, vaadatakse PR-is üle) | Hoiab karantiiniloendi repos, mitte kunagi läbipaistmatuna                                                                               |
| node:test (unit) | MITTE KUNAGI korduskatset                                                                                                                            | Ebastabiilne üksustest on testi viga — paranda see, ära lihtsalt käivita uuesti                                                          |

Siht-SLO-d pärast ebastabiilsuse telemeetria valmimist (WS5.2/5.3): <1% ebastabiilsuse määr testi kohta
(„paranda kohe” lävend), ≥95% läbimismäär konveieri kohta. Valdkonna võrdlusväärtused —
kalibreerida ümber meie enda mõõtmiste põhjal.

## Väljalasketaseme põrkmehhanismi nihe (WS5.5, v3.8.49)

Kui põrkmehhanism (faili suurus, keerukus, eslint-i hoiatused) halveneb PUHTA väljalaskeharu
tipus — st ühendamiste KOMBINATSIOON põhjustas regressiooni ja ükski PR eraldi ei taasesita
regressiooni oma harus — vastutab paranduse eest **üks kord väljalaskeharus väljalaskejuht**:
eelistada eraldamist/refaktoreerimist; lähtetaseme uuendamine on lubatud ainult koos dokumenteeritud
põhjenduskirjega. Ära kunagi lükka kombinatsioonist tulenevat nihet kaastöötaja PR-i kanda ega
uuenda lähtetaset iga PR-i kohta (see peidab tegelikud regressioonid). Esmalt erista põhjus:
taasesita ebaõnnestumine puhta tipu põhjal prooviks loodud worktree-s, enne kui eeldad, et selle põhjustas sinu PR.

## Põrkmehhanismi piirmäärade langetamise talletamine — allapoole liikumine (#8584)

Põrkmehhanism on ainult pooleldi automaatne ja automatiseeritud on vale pool. Piirmäära
**tõstmine** on käsitsi tehtav JSON-i muudatus, mis võtab kümme sekundit ja on kiireim viis
ebaõnnestunud PR-i blokeeringust vabastamiseks. Piirmäära **langetamiseks** peab keegi käivitama
`--update` ja tulemuse commit'ima — ning kuni töö `bank-ratchet-shrinks` lisamiseni ei käivitanud
seda ükski töövoog. Mõõdetud tagajärg (2026-07-25): 18 fikseeritud faili olid juba uute failide
800-realise piirmäära juures või sellest allpool, halvim neist 132× (`src/shared/validation/schemas.ts`,
19 rida, kuid piirmäär 2,523); keerukuse ülempiir liikus umbes 37 lähtetaseme uuendamise märkme jooksul
`1794 → 2169`, kusjuures toimus täpselt üks langus (−1); ning „kitsenda järgmises tsüklis käsuga
`--update`” kirjutati 31 korda ja järgiti ühe korra. Piirmäär, mis püsib kauem kui selle tinginud
kood, muudab iga lõpetatud osadeks jaotamise vaikimisi kasvuruumiks järgmisele faili muutjale.

`nightly-release-green.yml` → töö **`bank-ratchet-shrinks`** sulgeb selle tsükli:

|            |                                                                                                                            |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| Käivitub   | `schedule` (3× päevas) + `workflow_dispatch` — teadlikult **mitte** `push`                                                 |
| Mõõdab     | kõrgeimat `release/vX.Y.Z`, kasutades sama resolutsiooni ja sisestuskaitset nagu `release-green`                           |
| Kirjutab   | `check:file-size --update` ja `check:complexity-ratchets --update` (mõlemad saavad konstruktsiooni järgi ainult vähendada) |
| Kontrollib | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                                   |
| Tarnib     | ühe alati ajakohase PR-i väljalaskeharu vastu — sunduuendatakse, rämpsu ei tekitata                                        |

Talletamine toimub paketi kaupa, mitte iga push'i järel, sest sellel pole latentsusnõuet
(8 tunni jooksul talletatud langus on piisav), samas kui iga ühendamise järel käivitamine
ehitaks ühendamiskampaaniate ajal PR-i haru korduvalt ümber ja teeks iga kord täieliku ESLint-i
läbivaatuse. Tuvastamine jääb push'i peale (`release-green`); ainult talletamine toimub paketi kaupa.

### Ohutuse kontrollija

Töö kirjutab lähtetasemeid järelevalveta, mistõttu muudab selle vastuvõetavaks
`verify-ratchet-bank.mjs`. See võrdleb `--update`-järgset puud `HEAD`-iga ja **katkestab töö
enne ühegi commit'i loomist** — PR-i avamata — kui iga muudatus ei ole üks järgmistest:

- `frozen` / `testFrozen` numbriline kirje on **langetatud** või **eemaldatud**
- `complexity-baseline.json` → `count` on **langetatud**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` on **langetatud**

Kõik muu ebaõnnestub: arvu tõstmine, kirje lisamine, `cap`/`testCap` muutmine või
`_rebaseline_*` märkme kustutamine/ümberkirjutamine (need märkmed on auditijälg selle kohta,
miks iga ülempiir eksisteerib, ning neid hoitakse failikirjetega samas objektis `frozen`).
Robot, mis võiks piirmäära tõsta, oleks praegusest olukorrast selgelt halvem. Regressioonikaitse:
`tests/unit/verify-ratchet-bank.test.ts`.

Töö ei tee kunagi push'i harusse `release/*` — PR-i ühendab inimene, seega ei saa vigane mõõtmine
ilma ülevaatuseta harusse jõuda.

## Lubatud loendi poliitika

Iga kontroll, mis ei saa olemasolevate rikkumiste tõttu ebaõnnestuda, kasutab fikseeritud lubatud loendit
(nt `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). Poliitika on järgmine:

**Parandage algpõhjus; kasutage lubatud loendit ainult siis, kui rikkumine on juba olemas ja
seda ei saa samas PR-is parandada.**

Kirje lisamisel lubatud loendisse:

1. Lisage kommentaar koos põhjendusega.
2. Viidake jälgimisülesandele (nt `// #3498 — 2. etapi funktsioon, pole veel rakendatud`).
3. Eemaldage kirje samas PR-is, mis rikkumise parandab — aegunud kirje, mis enam
   aktiivset rikkumist ei eira, on ise viga (pärast rakendamist nurjab 6A.3 aegunud jõustamise kontroll
   üksiku lubatud loendi kirje korral kontrollvärava läbimise).

**Ärge** lisage lubatud loendisse kirjeid selleks, et testid kiiremini läbiksid. Roheline kontrollvärav koos kasvava
lubatud loendiga loob petliku kvaliteeditunde.

### Kui kontrollvärav teie PR-is ebaõnnestub

1. **Lugege kontrollvärava väljundit hoolikalt** — see ütleb täpselt, milline fail või sümbol
   reeglit rikkus.
2. **Parandage rikkumine** — enamik kontrollväravaid on deterministlikud failisüsteemi kontrollid, mis läbivad testi kohe,
   kui kood on korrektne.
3. **Kui rikkumine on juba olemas** (st teie ei tekitanud seda, kuid kontrollvärav
   nüüd hõlmab seda): lisage lubatud loendisse kirje koos põhjendava kommentaari ja jälgimisülesandega.
4. **Kui kontrollvärav on põrkmehhanism** (koodikate, ESLinti hoiatused, dubleerimine, keerukus):
   teie muudatus halvendas mõõdikut. Parandage algpõhjus või käivitage (harvadel juhtudel)
   `npm run quality:ratchet -- --update`, kui muudatus on tahtlik ja mõõdiku
   halvenemine vastuvõetav — kuid dokumenteerige PR-i kirjelduses põhjus.
5. **Nõuandvad kontrollväravad** (`continue-on-error: true`) on informatiivsed — need ei blokeeri
   liitmist, kuid kuvatakse CI kokkuvõttes. Parandage need sellegipoolest.

---

## Uue kontrollvärava lisamine

1. Looge `scripts/check/check-<name>.mjs` (või `.ts`). Poliitika kontrollväravad lõpetavad koodiga 0/1.
   Põrkmehhanismi tüüpi kontrollväravad väljastavad mõõdiku faili `quality-metrics.json` skripti `collect-metrics.mjs` kaudu.
2. Lisage `"check:<name>": "node scripts/check/check-<name>.mjs"` faili `package.json`.
3. Ühendage see failis `.github/workflows/ci.yml` sobiva töö alla
   (poliitika → `lint` või `docs-sync-strict`; põrkmehhanism → `quality-gate`).
4. Kui sellel on lubatud loend, rakendage `reportStaleEntries()` failist
   `scripts/check/lib/allowlist.mjs`, et aegunud kirjed tuvastataks automaatselt.
5. Kirjutage kausta `tests/unit/build/` test, mis katab kontrollvärava tuvastamisloogika.
6. Uuendage seda dokumenti (lisage vastava töö tabelisse rida).

---

## Agendi tööriistad: LSP tsüklis (valikuline)

Lisaks CI kontrollväravatele sisaldab OmniRoute **valikulist** `agent-lsp` alustaristut
(projektitaseme `.mcp.json`, 7. faasi ülesanne 15). Looge `.mcp.json`,
et teha TypeScripti keeleserver programmeerimisagentidele kättesaadavaks, võimaldades neil lahendada sümbolid /
diagnostika **enne** koodi kirjutamist — see on kompileeri-enne-väidet kaaslane käsule
`typecheck:core`, mis vähendab „väljamõeldud sümbolite” vigu juba nende tekkekohas. Seda ei laadita tahtlikult
automaatselt (MCP↔LSP silla valite ja kontrollite teie); vigane kirje logib ainult
ühendusvea ega katkesta kunagi seansse.

---

## Ratsionaliseerimise tööjärg (ROI ülevaatus — 9. etapp, 3. laine)

See inventuur viidi 2026-06-17 vastavusse failiga `ci.yml` (eelmisest versioonist puudusid
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence`). Kooskõlastatud komplekti ROI ülevaatus
tuvastas järgmised ratsionaliseerimise kandidaadid. **Liitmised on mehaanilised CI
muudatused; jõustamised/eemaldamised on operaatorile jäetud poliitikaotsused.** Midagi
alltoodust ei ole veel rakendatud.

**Eespool samuti dokumenteerimata** (nõuandev, nõrk signaal): töö `docs-lint`
(markdownlint + Vale, kogu tööl `continue-on-error`) ja eraldiseisvad skanneri töövood
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. `semgrepFindings: 0` asub failis
`quality-baseline.json`, kuid pole failis `ci.yml` seotud blokeeriva regressioonilävendiga — mõõdik on
praegu orvuks jäänud.

### Liitmine / dubleerimise eemaldamine (mehaaniline, väiksem risk)

Iga kandidaati kontrolliti 2026-06-17 aktiivsete kontrollväravate oleku suhtes (usalda, aga kontrolli);
mitu „ilmset” liitmist peitsid tegelikult võlga ega ole **puhtad** asendused.

- **`check:docs-sync` käivitub kaks korda** — eraldiseisvana töös `lint` ning uuesti `check:docs-all` (`docs-sync-strict`) sees ja husky commit'i-eelses konksus. ✅ **TEHTUD** — eraldiseisev käivitus tööst `lint` eemaldatud.
- **CVE skannimine** — ❌ **EI OLE puhas liitmine.** `audit:deps` nurjub rangelt iga kõrge/kriitilise CVE korral; `check:vuln-ratchet` (osv) nurjub ainult võrreldes baasjoonega toimunud _regressiooni_ korral (praegu 1 MODERATE). Semantika on erinev — `audit:deps` eemaldamine kaotaks absoluutse kõrge/kriitilise taseme kontrollvärava. Säilitada mõlemad.
- **Tsüklite tuvastamine** — ❌ **EI OLE puhas liitmine.** `check:circular-deps` (dpdm) raporteerib **91 tsüklit** (seetõttu on see nõuandev); seda ei saa enne nende lahendamist blokeerivaks muuta ning selle ulatus on laiem kui edukalt läbival, kureeritud kontrollil `check:cycles`. Säilitada `check:cycles` blokeerivana; 91 dpdm-tsükli lahendamine on eraldi tööjärje üksus.
- **Keerukus** — ✅ **TEHTUD** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): üks ESLint-i läbikäik, loendamine `ruleId` järgi, et tsüklomaatilise keerukuse + max-lines ja kognitiivse keerukuse baasjooned jääksid sõltumatuks; eraldiseisvad `check:complexity` / `check:cognitive-complexity` säilivad kohalikuks käivitamiseks võtmega `--update`.
- **`/api` hallutsineerimisvastane kontroll** — ✅ **TEHTUD** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): üks faili `src/app/api` failisüsteemi inventuur, openapi-routes + docs-symbols raporteerivad endiselt sõltumatult; eraldiseisvad kontrollid säilivad kohalikuks käivitamiseks.
- **`check:node-runtime` käivitub 11 töös** — ⚠️ **madal ROI.** Igaüks töötab eraldi täituris ja kontroll võtab <1 s; kogusääst on ~10 s, kuid selle hinnaks oleks odava tööpõhise kaitse kaotamine. Pole muudatustest tingitud vaeva väärt.
- **`typecheck:noimplicit:core` CI lintimisel** — ✅ **lintimise tööst eemaldatud** (oli nõuandev valikuga `continue-on-error`); blokeeriva tüübipinna moodustavad `typecheck:core` + `check:type-coverage`. Kohalik skript säilitati.

### Jõustamine / otsustamine (operaatori poliitika)

- `check:openapi-security-tiers` (nõuandev) — ❌ **EI OLE puhtalt jõustatav.** See lõpetab koodiga 0, kuid hoiatab, et mitmel `traffic-inspector` marsruudil loendis `LOCAL_ONLY_API_PREFIXES` puudub annotatsioon `x-loopback-only: true`. Selle jõustamiseks tuleb need annotatsioonid esmalt faili `openapi.yaml` lisada.
- `typecheck:noimplicit:core` (nõuandev) — blokeeriv regressioonilävend `check:type-coverage` katab selle suures osas. Muuta regressioonilävendiks või eemaldada üleliigne teine `tsc` läbimine.
- `test:vitest:ui` (nüüd **blokeeriv**) — olemasolevad nurjumised on failis `vitest.config.ts` sõnaselgelt välistatud jälgimiskommentaaridega `// #8618`; uued nurjumised põhjustavad töö nurjumise.
- `check:secrets` (gitleaks, blokeeriv regressioonilävend, mis on fikseeritud 3 dokumenteeritud valepositiivse leiu juures) — lisada need 3 lubatud loendisse, et jõuda 0-ni, või muuta kontroll nõuandvaks. Kattub GitHubi sisseehitatud saladuste skannimisega + `check:public-creds`.
- `check:pr-evidence` (blokeeriv, otsib PR-i kirjelduse proosast vasteid) — suur valepositiivsete tulemuste risk; selle eemaldamine nõrgendab range reegli nr 18 jõustamist, seega on see tegelik poliitikaotsus.
- `semgrep` (nõuandev eraldiseisev kontroll) — kattub OWASP-i kategooriate puhul CodeQL-iga; siduda selle baasjoon regressioonilävendiga või eemaldada.

---

## Seotud dokumentatsioon

- Tarneahel (päritolu, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — võtmekogumite võrdsuse kontroll

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, töö `i18n-ui-coverage`).
Võrdleb iga faili `src/i18n/messages/<locale>.json` lehtvõtmete kogumit failiga `en.json` ja nurjub
mis tahes puuduva või üleliigse lehtvõtme korral, olenemata võtme lisamise ajast. Kohatäited
`__MISSING__:` loetakse olemasolevaks (nende sisu kuulub suhtarvupõhise kontrolli vastutusalasse).
See täiendab täielikult kaht muud, erinevustel/protsendil põhinevat kontrolli:
`check-ui-keys-coverage` kehtestab iga lokaadi jaoks 80 % alampiiri (43 puuduvat võtit ligikaudu
13 000-st annab endiselt tulemuseks 99,7 %) ja `check-new-key-coverage` hindab ainult võtmeid,
mille PR lisab faili `en.json`. Lokaadipartii luuakse selle päeva faili `en.json` põhjal, mil selle
haru luuakse, ning tõlkimine kestab päevi, samal ajal kui baasharusse lisatakse uusi võtmeid;
partii PR ise ühtegi võtit ei lisa, mistõttu jäid mõlemad sõsarkontrollid vaikseks, kui partii 1
(#13044) liideti üheksas lokaadis 43 puuduva võtmega ja partii 2 (#13660) kaheksas lokaadis
10 puuduva võtmega (2026-09-15). Punase tulemuse parandamiseks käivitage
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers`; lehtvõti `extra`
tähendab, et lähtekataloogist on see eemaldatud — kustutage see lokaadist. `--warn` annab aru
ilma nurjumiseta. `--catalog=cli` käitab sama võrdluse kataloogis `bin/cli/locales`
(`npm run i18n:check-keys:cli`); mõlemad sammud asuvad töös `i18n-ui-coverage`.

#### `check-new-key-coverage` — uute võtmete i18n-kontroll

Kontrolli `check-ui-value-drift` sõsarkontroll. Viimane tuvastab olukorra, kus ingliskeelne väärtus
on **ümber kirjutatud**, kuid selle tõlkeid pole uuendatud; see kontroll tuvastab olukorra, kus
ingliskeelne võti on **lisatud**, kuid mõni lokaat pole seda kunagi saanud.

`check-ui-keys-coverage` ei suuda seda juhtumite klassi tuvastada: see kehtestab iga lokaadi jaoks
protsendipõhise alampiiri ning üheteistkümne puuduva võtme korral ligikaudu 13 000-st jääb katvus
99,9%-le. Protsent keele kohta ei suuda väljendada olukorda „see funktsioon anti välja tõlkimata“ —
terve funktsioon võib jõuda uude lokaati ilma ühegi tekstita, ilma et näitaja üldse muutuks.

Juhtum, mida see kontroll kajastab: Orchestration Canvase 3. etapis tõlgiti selle üksteist võtit
kõigisse tollal olemas olnud 42 lokaati. Mõni tund hiljem suurendas EL-i keelte partii (#13044)
hoidla lokaatide arvu 51-ni ning üheksa uut lokaati (`el`, `et`, `ga`, `hr`, `lt`, `lv`, `mt`,
`sl`, `sr`) ei saanud neid kunagi. `deepMergeFallback` asendab puuduva võtme ingliskeelse
tekstiga, mistõttu avaldus viga tühja kasutajaliidese asemel tõlkimata kasutajaliidesena — see oli
päris probleem, mis jäi ülesehituse tõttu märkamatuks.

Nagu selle sõsarkontroll, on ka see **erinevustest teadlik**: see võrdleb liitmise baasi
ingliskeelset sisu tööpuuga, mistõttu varasemad puudujäägid jäävad külmutatuks ja kontrolli
sisselülitamiseks polnud migratsiooni vaja. Erandmehhanism: `__MISSING__:<english>` lükkab tõlke
edasi, säilitades samal ajal käitusajal korrektse toimimise. `vi` keelab kohatäited
(`tests/unit/i18n-vi-completeness.test.ts`) ja nõuab päris tõlget.

#### `check-vitest-exclusions` — kõrvale jäetud testide kontroll

Fail `vitest.config.ts` loendis `exclude` on test, mida ei käitata, ehkki kataloogipuud lugevale
inimesele näib see katvusena. Kommentaari
`// #8618 — varasem tõrge; eemaldage see välistus pärast parandamist` taha kogunes kuuskümmend kaks
faili. Probleem #8618 suleti 2026-08-11, samal ajal kui selle jälgitav loend kasvas 45 kirjelt
62-ni ning iga uus kirje päris kommentaari, mis viitas suletud probleemile. Kui loendit viimaks
failhaaval mõõdeti (#13204), läbis **62 failist 51 testid praeguse tööpuu põhjal ilma ühegi
lähtekoodi muudatuseta**.

Kontroll nõuab, et iga välistus, mis laheneb tegelikuks failiks, (a) nimetaks jälgimisprobleemi ja
(b) esineks failis `config/quality/vitest-exclusions.json` koos mõõdetud olekuga, nii et välistuse
lisamine oleks spetsiaalses failis ülevaadatav muudatus, mitte veel üks rida 60 kirjega massiivis.
Kontroll ei käita välistatud teste tahtlikult uuesti — see võtaks ligikaudu 10 minutit ja kuulub
perioodilisse töösse; inventar talletab iga testi viimase mõõtmise aja.
