# Quality Gates Reference (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

Tämä asiakirja on kaikkien OmniRouten CI-laatuporttien ensisijainen viite.
Siinä kuvataan jokainen portti, mitä se validoi, missä CI-työssä se suoritetaan, käyttääkö se
ratchet-vertailutasoa vai hyväksy/hylkää-käytäntöä ja estääkö se koontiversion muodostamisen vai onko se neuvoa-antava.

Lyhyt yhteenveto ja sallittujen kohteiden luettelon käytäntö ovat `AGENTS.md`-tiedoston
"Quality Gates & Ratchets" -osiossa. Saman järjestelmän kriittinen arviointi, kypsyysluokitus ja
työkaluista riippumaton toisintamissuunnitelma ovat
[laatuporttien käsikirjassa](../ops/QUALITY_GATE_PLAYBOOK.md).

---

## Porttiluettelo (~90 komentosarjaa)

Komentosarjat sijaitsevat hakemistoissa `scripts/check/` (käytäntöportit) ja `scripts/quality/` (ratchet-moottori).
CI:n ensisijainen totuuslähde on `.github/workflows/ci.yml`.

### Julkaisu-PR:ien nopea polku (`quality.yml`)

`.github/workflows/quality.yml` suoritetaan `release/**`-haaroihin kohdistuville PR:ille. Se pitää osallistujien
haarat liikkeessä polkusuodatetuilla nopeilla porteilla sekä yhdellä neuvoa-antavalla tuotantokoontisignaalilla
koodimuutoksia varten:

| Työ                                              | Laajuus                                                                                                                                                                                                                                             | Estävä                                                                                           |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `Build (advisory)`                               | Ei-luonnostilaiset koodi-PR:t ja Mergify-jonon haarat; Node 24, `npm-ci-retry`, `check:node-runtime`, `npm run build` käyttäen asetusta `OMNIROUTE_USE_TURBOPACK=1`; artefaktia ei lähetetä, koska mikään myöhempi laatutyö ei käytä sitä           | **Neuvoa-antava** (`continue-on-error: true`; poista viikon vakaiden julkaisu-PR-ajojen jälkeen) |
| `Docs Gates (fast-path)`                         | Dokumentaatio-/koodi-PR:t; API-dokumentaation viittaukset ja docs-all                                                                                                                                                                               | Kyllä                                                                                            |
| `Fast Quality Gates`                             | Koodi-PR:t; staattiset tarkistukset, tyyppitarkistus, hallintapaneelin tyyppitarkistus, muutosten vaikutuspiirissä olevat yksikkötestit                                                                                                             | Kyllä                                                                                            |
| `Forgotten sibling tests`                        | Koodi-PR:t; muuttuneet moduulit jäljitetään staattisiin käyttäjiin ja ehdolla oleviin rinnakkaistesteihin; barrel- ja dynaamisen tuonnin polut raportoidaan neuvoa-antavina diagnostiikkatietoina viitattuine sallittujen poikkeusten luetteloineen | **Neuvoa-antava**                                                                                |
| `Vitest (fast-path)`                             | Koodi-PR:t; nopea vitest-testikokonaisuus                                                                                                                                                                                                           | Kyllä                                                                                            |
| `Unit Tests fast-path`                           | Koodi-PR:t; neljään osaan jaettu yksikkötestikokonaisuus                                                                                                                                                                                            | Kyllä                                                                                            |
| `No new ESLint warnings`                         | Koodi-PR:t; vaimennukset huomioiva lint-suoja                                                                                                                                                                                                       | Kyllä samasta alkuperästä tuleville, neuvoa-antava haarautuksille                                |
| `Merge integrity (changelog + generated skills)` | Ei-luonnostilaiset PR:t; muutoslokin ja generoitujen taitojen synkronointi                                                                                                                                                                          | Kyllä samasta alkuperästä tuleville, neuvoa-antava haarautuksille                                |

#### Unohdettujen rinnakkaistestien raportti

`npm run check:forgotten-sibling-tests` käyttää uudelleen testien vaikutuskartan taustalla olevaa tuonnin ratkaisinta.
Se raportoi jokaisesta muuttuneesta tuotantomoduulista deterministiset
`muuttunut moduuli/symboli -> staattinen käyttäjä -> ehdolla oleva rinnakkaistesti` -ketjut, kun ehdolla oleva
testi puuttuu pull requestin diffistä. Markdown-yhteenveto ja JSON-tulos säilytetään
`forgotten-sibling-tests`-työnkulun artefaktina kalibrointia varten ennen estävän käytännön käyttöönottoa.

Barrel-uudelleenviennit ja dynaamiset tuonnit ovat vain ratkaisudiagnostiikkaa; ne eivät koskaan muodosta
estävää havaintoa. Tarkistetut poikkeukset sijaitsevat tiedostossa
`config/quality/forgotten-sibling-allowlist.json`. Jokaisessa merkinnässä on nimettävä käyttäjä ja ehdolla oleva
testi, annettava täsmällinen perustelu ja linkitettävä GitHub-issue tai pull request. Virheellisesti muodostetut merkinnät
hylätään oletusarvoisesti. Poikkeukset eivät voi ohittaa poistettua ehdolla olevaa testiä tai diffiä, joka lisää `.skip`/`.todo`-merkinnän;
assertioiden heikentäminen ja muu peittely kuuluvat itsenäisesti estävän
`check:test-masking`-portin vastuulle.

### Työ: `lint`

Suoritetaan jokaiselle `main`-haaraan kohdistuvalle PR:lle. Epäonnistuminen estää yhdistämisen.

| Skripti (`npm run ...`)           | Tarkistaa                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Estävä                                        |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `check:node-runtime`              | Node.js-versio on tuetulla versiovälillä                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Kyllä                                         |
| `check:cycles`                    | Kehämäiset tuonnit — kaikki `src/`- ja `open-sse/`-moduulit                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Kyllä                                         |
| `check:route-validation:t06`      | Zod-skeemat ovat käytössä kaikilla reiteillä (tason 6 käytäntö)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Kyllä                                         |
| `check:any-budget:t11`            | `@ts-expect-error // any` -esiintymien määrä ei ylitä budjettia (tason 11 räikkä)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Kyllä                                         |
| `check:provider-consistency`      | Jokaisella `providers.ts`-tiedoston palveluntarjoajalla on vastaava merkintä `providerRegistry.ts`-tiedostossa (ja päinvastoin sallittujen luettelon rajoissa)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Kyllä                                         |
| `check:model-lifecycle`           | Kolme käsin ylläpidettävää reititystaulukkoa pysyvät yhdenmukaisina versionhallintaan tallennetun elinkaaritilannevedoksen kanssa (#11503): `FITNESS_TABLE` (`taskFitness.ts`) ei pisteytä mitään käytöstä poistettua tunnusta, jonka `REGISTRY` voi reitittää; jokainen `BUILT_IN_ALIASES`-kohde on `REGISTRY`-rekisterissä eikä esiinny käytöstä poistettujen tunnusten tilannevedoksessa; jokainen edelleen `REGISTRY`-rekisterissä oleva käytöstä poistettu tunnus joko välitetään eteenpäin tai luetellaan `allowedRetiredInCatalog`-luettelossa; eikä mikään `DEFAULT_DEGRADATION_MAP`-lähde tai -kohde näy tilannevedoksessa käytöstä poistettuna. Tämä ei todista, että aktiivinen ylävirran palvelu tarjoaa mallia tällä hetkellä. Offline-tila — vertaa tiedostoon `config/quality/model-lifecycle.json`, joka päivitetään käsin komennolla `npm run quality:refresh-model-lifecycle` (vaatii verkkoyhteyden; ei kytketty CI:hin). `allowedRetiredInCatalog` on asteittain pienennettävä räikkä: lisää merkintä vain, jos sille on seurantatehtävä. | Kyllä                                         |
| `check:fetch-targets`             | Jokainen asiakaspuolen `src/`-hakemistossa oleva `fetch("/api/...")` viittaa todelliseen `route.ts`-tiedostoon                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Kyllä                                         |
| `check:deps`                      | Kaikki repositorion jokaisen `package.json`-tiedoston `npm install` -asennettavat riippuvuudet ovat `dependency-allowlist.json`-tiedostossa; uudet kiinnittämättömät tai kirjoitusvirheillä kaapatut paketit merkitään                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Kyllä                                         |
| `audit:deps`                      | `npm audit` (juuri + electron) — ei korkean tai kriittisen tason varoituksia (päällekkäinen osv-tarkistuksen `check:vuln-ratchet` kanssa; katso Rationalisointijono)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Kyllä                                         |
| `check:lockfile`                  | `package-lock.json`-tiedoston eheys — https-rekisteri, eheystiivisteet, ei palvelinohituksia                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Kyllä                                         |
| `check:licenses`                  | Tuotantoriippuvuuksien SPDX-lisenssien sallittujen luettelo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Kyllä                                         |
| `check:tracked-artifacts`         | Ei koontiartefakteja eikä versionhallintaan tallennettuja `node_modules`-symbolisia linkkejä (suoritetaan myös huskyn pre-commit-vaiheessa; pre-push on tarkoituksella kevyt — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Kyllä                                         |
| `check:vitest-exclusions`         | Jokainen Vitest-poissulku nimeää seurantatehtävän ja esiintyy tiedostossa `config/quality/vitest-exclusions.json` (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Kyllä                                         |
| `check:file-size`                 | Mikään lähdetiedosto ei ylitä tiedostopäätekohtaista enimmäiskokoa (räikkä: suuret jäädytetyt tiedostot `frozen`-luettelossa)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Kyllä                                         |
| `check:error-helper`              | Suorittimien ja käsittelijöiden virhevastaukset käyttävät funktioita `buildErrorBody()` / `sanitizeErrorMessage()` (ehdoton sääntö #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Kyllä                                         |
| `check:migration-numbering`       | Migraatioiden SQL-tiedostot on numeroitu peräkkäin ilman aukkoja tai kaksoiskappaleita                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Kyllä                                         |
| `check:public-creds`              | Ei literaalisia OAuth-arvoja `client_id`/`client_secret` eikä Firebase Web -avaimia `publicCreds.ts`-tiedoston ulkopuolella (ehdoton sääntö #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Kyllä                                         |
| `check:db-rules`                  | Ei raakaa SQL:ää `src/lib/db/`-moduulien ulkopuolella; ei barrel-tuonteja `localDb.ts`-tiedostosta (ehdottomat säännöt #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Kyllä                                         |
| `check:known-symbols`             | Välitystauluihinsa rekisteröidyt palveluntarjoajien suorittimet, reititysstrategiat ja muuntimet vastaavat levyllä olevia tiedostoja — ei irrallisia tai ilmoittamattomia symboleja                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Kyllä                                         |
| `check:route-guard-membership`    | Jokainen aliprosessin käynnistävä reitti on luokiteltu funktiolla `isLocalOnlyPath()` (ehdottomat säännöt #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Kyllä                                         |
| `check:test-discovery`            | Vähintään yksi testiajuri kerää repositorion jokaisen `*.test.ts`- / `*.spec.ts`-tiedoston (räikkä: `test-discovery-baseline.json`-tiedoston irrallisten testien luettelo voi vain lyhentyä)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Kyllä                                         |
| `check:agent-skills-sync`         | Luodut agenttitaitoartefaktit vastaavat lähdeluetteloaan (ei poikkeamia)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `check:provider-asset-provenance` | Palveluntarjoajien logoilla ja resursseilla on kirjattu alkuperätieto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `lint:json`                       | JSON-määritystiedostot jäsentyvät ja täyttävät repositorion lint-säännöt                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `typecheck:core`                  | TypeScript-käännös ilman virheitä (vain neuvoa-antavat varoitukset)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Kyllä                                         |
| `typecheck:noimplicit:core`       | Tiukka `noImplicitAny` — tulevaisuuteen suuntautuva; monet ennestään olemassa olevat kutsukohdat tarvitsevat edelleen annotaatioita                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | **Neuvoa-antava** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `tsc`, jonka kohteeksi on rajattu `src/app/(dashboard)/**` (#7033) — komennon `typecheck:core` kuratoitu 27 tiedoston sallittujen luettelo ei sisällä yhtäkään hallintapaneelin TSX-tiedostoa, eikä `next build` myöskään koskaan tyyppitarkista niitä (`next.config.mjs` asettaa arvon `ignoreBuildErrors: true`), joten irrallisten tunnisteiden regressiot siellä (#6625/#6909) eivät näkyneet CI:ssä. Vertaa jäädytettyyn tiedosto- ja TS-koodikohtaisten määrien perustasoon (`config/quality/dashboard-typecheck-baseline.json`, sama vanhentuneisuuden valvontamalli kuin tarkistuksessa `check:known-symbols`) — vain perustason määrän ylittävät UUDET virheet hylkäävät tarkistuksen; pienennä räikkää valinnalla `--update`, kun ennestään olemassa oleva virhe korjataan.                                                                                                                                                                                                                                                                         | Kyllä                                         |

### Työ: `quality-gate`

Suoritetaan `test-coverage`-työn jälkeen. Estää yhdistämisen epäonnistuessaan.

| Skripti                      | Tarkistaa                                                                                                                                                                             | Estävä                           |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| `quality:collect`            | Tuottaa tiedoston `quality-metrics.json` (ESLint-varoitusten määrä, kattavuus yhdistetystä osaraportista)                                                                             | Kyllä (ratchet-vaiheen edeltäjä) |
| `quality:ratchet`            | Mikään tiedoston `quality-baseline.json` mittari ei ole heikentynyt (ESLint-varoitukset ≤ lähtötaso; kattavuus ≥ lähtötaso)                                                           | Kyllä                            |
| `check:duplication`          | Koodin päällekkäisyys (jscpd@4) ei ylitä tiedostossa `quality-baseline.json` määritettyä lähtötasoa                                                                                   | Kyllä                            |
| `check:complexity`           | Tiedostotason syklomaattinen kompleksisuus ei ylitä ylärajaa (ESLintin ytimen `complexity` + `max-lines-per-function`)                                                                | Kyllä                            |
| `check:cognitive-complexity` | Kognitiivisen kompleksisuuden ratchet-tarkistus (`eslint-plugin-sonarjs`) — erillinen ESLint-ajo; CI suorittaa molemmat yhdistettynä yhtenä `check:complexity-ratchets`-vaiheena      | Kyllä                            |
| `check:dead-code`            | Käyttämättömien vientien/tiedostojen ratchet-tarkistus (knip) ei heikkene lähtötasoon verrattuna                                                                                      | Kyllä                            |
| `check:compression-budget`   | Pakkausvertailun budjetti — moottorikohtaisten token-säästöjen vähimmäisrajat eivät saa heikentyä                                                                                     | Kyllä                            |
| `check:type-coverage`        | Tyypitetyn koodin prosenttiosuuden ratchet-tarkistus (`type-coverage`) ei heikkene; korvaa suurelta osin tarkistuksen `typecheck:noimplicit:core`                                     | Kyllä                            |
| `check:codeql-ratchet`       | Avointen CodeQL-hälytysten määrä ei kasva (luetaan komennolla `gh api`; ohitetaan hallitusti ilman tunnistetta) — päivitysväli ja manuaalinen käynnistys: katso alta ”CodeQL-ratchet” | Kyllä                            |

### Työ: `quality-extended`

Koko työ on neuvoa-antava (`continue-on-error: true`). npm-pohjaiset ratchet-tarkistukset suoritetaan
oikeasti; ulkoiset tarkistimet asennetaan komennolla `gh release download`, ja ne ohittavat tarkistuksen itse (exit 0),
jos binääritiedostoa ei edelleenkään ole.

| Skripti                  | Tarkistaa                                                                                                                                                                                                | Estävä            |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `check:circular-deps`    | Ei syklisiä riippuvuuksia (dpdm)                                                                                                                                                                         | **Neuvoa-antava** |
| `check:bundle-size`      | Paketin koko ei ylitä ylärajaa                                                                                                                                                                           | **Neuvoa-antava** |
| `check:secrets`          | Salaisuuksien tarkistus (gitleaks) — ohitetaan, jos binääritiedosto puuttuu                                                                                                                              | **Neuvoa-antava** |
| `check:vuln-ratchet`     | Riippuvuuksien haavoittuvuudet (osv-scanner) eivät lisäänny — ohitetaan, jos binääritiedosto puuttuu                                                                                                     | **Neuvoa-antava** |
| `check:workflows`        | Työnkulkujen lint-tarkistus (actionlint + zizmor) — ohitetaan, jos binääritiedostot puuttuvat                                                                                                            | **Neuvoa-antava** |
| `check:openapi-breaking` | Julkisen API-sopimuksen (`openapi.yaml`) rikkovat muutokset perushaaraan verrattuna (oasdiff) — tuottaa arvon `openapiBreaking=N`; ohitetaan, jos oasdiff puuttuu tai perusmääritystä ei voida ratkaista | **Neuvoa-antava** |

### Työ: `docs-sync-strict`

Suoritetaan jokaisessa `main`-haaraan kohdistuvassa PR:ssä. Estää yhdistämisen epäonnistuessaan.

| Skripti                        | Validoi                                                                                                                                                                                                           | Estävä                    |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `check:docs-all`               | Metaportti, joka suorittaa alla olevat 6 aliporttia peräkkäin                                                                                                                                                     | Kyllä                     |
| ↳ `check:docs-sync`            | CHANGELOGin / OpenAPIn / llm.txt:n versioiden yhdenmukaisuus                                                                                                                                                      | Kyllä                     |
| ↳ `check:docs-counts`          | Tekstissä ilmoitetut lukumäärät (palveluntarjoajien määrä, migraatioiden määrä jne.) ovat todellisten lukumäärien räikkäikkunan sisällä                                                                           | Kyllä                     |
| ↳ `check:env-doc-sync`         | Jokainen `.env.example`-tiedoston ympäristömuuttuja on dokumentoitu dokumentaation taulukossa ja päinvastoin                                                                                                      | Kyllä                     |
| ↳ `check:deprecated-versions`  | Dokumentaatiossa ei ole vanhentuneita versiojonoja                                                                                                                                                                | Kyllä                     |
| ↳ `check:doc-links`            | Dokumentaation sisäiset markdown-linkit viittaavat olemassa oleviin tiedostoihin (`[teksti]`/`(polku)`-muoto)                                                                                                     | Kyllä                     |
| ↳ `check:fabricated-docs`      | Dokumentaatiossa mainitut reitit, ympäristömuuttujat, CLI-komennot, hookien nimet ja tiedostopolut ovat olemassa koodikannassa. Tiukka portti `--strict`-valitsimella; ilman valitsinta virhe ei estä etenemistä. | Kyllä (`--strict` CI:ssä) |
| `check:cli-i18n`               | CLI-komentojonot ovat mukana kaikissa i18n-lokaalitiedostoissa                                                                                                                                                    | Kyllä                     |
| `check:openapi-coverage`       | OpenAPI-määritys kattaa vähintään räikällä määritetyn reittien todelliseen määrään perustuvan vähimmäistason                                                                                                      | Kyllä                     |
| `check:openapi-security-tiers` | `openapi.yaml`-tiedoston suojaustasomerkinnät vastaavat `routeGuard.ts`-tiedoston luokituksia                                                                                                                     | **Neuvoa-antava**         |
| `check:openapi-routes`         | Jokainen `openapi.yaml`-tiedoston polku viittaa olemassa olevaan `route.ts`-tiedostoon (hallusinaatioiden esto)                                                                                                   | Kyllä                     |
| `check:docs-symbols`           | Jokainen `docs/**/*.md`-tiedostojen `/api/...`-viittaus viittaa olemassa olevaan `route.ts`-tiedostoon (hallusinaatioiden esto)                                                                                   | Kyllä                     |
| `i18n translation drift`       | Kääntämättömät avaimet i18n-lokaalitiedostoissa — vain varoitus                                                                                                                                                   | **Neuvoa-antava**         |

### Työ: `i18n-ui-coverage`

| Skripti                             | Validoi                                                                                                                                                                                                                           | Estävä            |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `check-ui-keys-coverage` (sisäinen) | Käyttöliittymän i18n-avainten kattavuus on ≥ 65 %                                                                                                                                                                                 | Kyllä             |
| `check-ui-value-drift` (sisäinen)   | Uudelleenkirjoitettu englanninkielinen **arvo** ei jätä jälkeensä vanhentuneita käännöksiä                                                                                                                                        | Kyllä             |
| `check-new-key-coverage` (sisäinen) | **Uusi** englanninkielinen avain lisätään jokaiseen lokaaliin                                                                                                                                                                     | Kyllä             |
| `check-translation-ratio`           | Todellisten käännösten osuus lokaaleittain (englannin kanssa identtiset / paikkamerkit / puuttuvat lehdet sallittujen luettelon ulkopuolella) ei saa ylittää arvoa `config/quality/i18n-translation-baseline.json` + liikkumavara | **Neuvoa-antava** |

Edellyttää asetusta `fetch-depth: 0` — arvon muuttumista valvova portti vertaa `en.json`-tiedostoa yhdistämiskantaan.

#### `check-ui-value-drift` — vanhentuneiden käännösten portti

Havaitsee sen yhden i18n-regression, jota muut portit eivät rakenteellisesti pysty näkemään: englanninkielinen arvo
kirjoitetaan uudelleen, mutta _aiempaan_ englanninkieliseen tekstiin perustuvat käännökset jäävät ennalleen, jolloin
muunkieliset käyttäjät lukevat edelleen vakuuttavasti muotoiltua mutta nyt virheellistä tekstiä.

Tämä päätyi oikeasti julkaisuun. `oauthModal.googleOAuthWarning` kirjoitettiin uudelleen, kun Antigravityn
kirjautumisapuri julkaistiin (#5203); **39 lokaalia 43:sta** säilytti tekstin, jossa ylläpitäjiä kehotettiin "kopioimaan
koko URL-osoite ja liittämään se alle" — työnkulku, jota kyseisellä palveluntarjoajalla ei voi suorittaa loppuun. Ongelmaa
ei huomattu ennen tapausta #8463, koska:

- `sync-ui-keys` täydentää vain **puuttuvat** avaimet, ei koskaan **vanhentuneita**;
- `check-ui-keys-coverage` laskee avaimen _olemassaolon_, joten vanhentunut käännös katsotaan katetuksi;
- `check-translation-drift` seuraa dokumentaation `docs/i18n/<locale>/**.md`-peilejä —
  se ei koskaan lue `src/i18n/messages/*.json`-tiedostoja. Estävä työssä `docs-sync-strict` vuoden
  2026-09 uudelleensynkronoinnista lähtien: muokkaa ydindokumenttia → `npm run i18n:run -- --files=<doc>` (osiotasoinen, kevyt).

**Diff-tietoinen, ei perustasoon pohjautuva.** Se vertaa yhdistämiskannan `en.json`-tiedostoa
työpuuhun. Jokaisen avaimen kohdalla, jonka englanninkielinen arvo muuttui, muuttamattoman
käännöksen yhä sisältävä kieliversio on vanhentunut. Tämä tarkoituksella **jäädyttää ennestään
olemassa olevan velan** — diff ei voi paljastaa, mistä vanhasta englanninkielisestä tekstistä
pitkäaikainen käännös on peräisin, joten tarkistus arvioi vain nykyisen muutoksen koskettamia
kohtia. Vaihtoehto (avainkohtainen hajautusarvoperustaso) vaatisi noin 600 KB:n generoidun
tiedoston, joka olisi kolme kertaa suurinta nykyistä perustasoa suurempi ja muuttuisi jokaisessa
i18n-PR:ssä.

Tarkistuksen voi läpäistä kahdella tavalla:

1. päivitä kyseiset käännökset tai
2. aseta niiden arvoksi `__MISSING__:<new english>` — suoritusympäristö tarjoaa tällöin korjatun
   englanninkielisen tekstin (`src/i18n/request.ts::deepMergeFallback`, #7258), ja avain asetetaan
   käännösjonoon.

Jos merkkijonon **merkitys** muuttui, suosi **avaimen nimeämistä uudelleen**: uusi avain ei voi
periä vanhentunutta käännöstä. Tätä mallia käytettiin muutoksessa #8463.

```bash
npm run i18n:check-value-drift          # tiukka (CI:n suorittama tarkistus)
npm run i18n:check-value-drift:warn     # vain raportointi
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

Päättyy koodilla 0 ja tulosteella `SKIP reason=base-unresolved`, kun perusluetteloa ei voida
lukea (matala klooni ilman perusviittausta), kuten `check-openapi-breaking`.

### Työ: `i18n`

Täysi i18n-validointimatriisi (yksi työ kieliversiota kohden). Koko työ on neuvoa-antava.

| Skripti                         | Validoi                                  | Estää yhdistämisen                                        |
| ------------------------------- | ---------------------------------------- | --------------------------------------------------------- |
| `validate_translation.py quick` | Käännösten kattavuuden kieliversioittain | **Neuvoa-antava** (`continue-on-error: true` koko työssä) |

### Työ: `pr-test-policy`

Suoritetaan vain pull requesteille.

| Skripti                | Validoi                                                                                                                                                              | Estää yhdistämisen |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `check:pr-test-policy` | PR:ien, jotka muuttavat tuotantokoodia hakemistoissa `src/`, `open-sse/`, `electron/` tai `bin/`, on sisällettävä testejä tai päivitettävä niitä (ehdoton sääntö #8) | Kyllä              |
| `check:test-masking`   | Muutetut testitiedostot eivät vähennä assert-lauseiden nettomäärää eivätkä lisää `assert.ok(true)`-tautologioita                                                     | Kyllä              |
| `check:pr-evidence`    | PR:n kuvaus mainitsee muutosta koskevan testi-/VPS-näytön (automatisoi ehdottoman säännön #18 etsimällä tekstiä PR:n kuvauksesta — hauras, katso kehitysjono)        | Kyllä              |

### Työ: `test-vitest`

Suoritetaan `build`-työn jälkeen. Epäonnistuminen estää yhdistämisen.

| Testikokonaisuus | Validoi                                                                   | Estää yhdistämisen                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP-palvelin (110 työkalua), autoCombo, välimuisti — vitest-testisuoritin | Kyllä                                                                                                                                                       |
| `test:vitest:ui` | Käyttöliittymäkomponenttien testit — vitest-testisuoritin                 | **Estää yhdistämisen** — ennestään epäonnistuvat testit on nimenomaisesti suljettu pois tiedostossa `vitest.config.ts`; uudet epäonnistumiset kaatavat työn |

### Öiset työnkulut (ajastettuja, neuvoa-antavia)

Nämä suoritetaan cron-aikataulun mukaisesti (sekä `workflow_dispatch`-käynnistyksellä), eivät koskaan PR:ille. Kaikki ovat neuvoa-antavia.

| Työnkulku              | Validoi                                                                                                                                                                                                     | Estää yhdistämisen |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `nightly-property`     | fast-check-ominaisuustestit satunnaisella siemenluvulla ja suurella suorituskertojen määrällä                                                                                                               | **Neuvoa-antava**  |
| `nightly-resilience`   | keon kasvun tarkistus, häiriöitä injektoivat kaaostestit sekä k6-kuormitus- ja pitkäkestoisuustestit                                                                                                        | **Neuvoa-antava**  |
| `nightly-llm-security` | promptfoo-injektiosuojaus (estotila) + garak-tarkistukset (ohitetaan ilman palveluntarjoajan salaisuutta)                                                                                                   | **Neuvoa-antava**  |
| `nightly-schemathesis` | OpenAPI-sopimuksen fuzz-testaus (schemathesis) aktiivista OmniRoute-instanssia vasten käyttäen tiedostoa `docs/openapi.yaml` — tuo esiin määritysrikkomuksia / käsittelemättömiä 500-virheitä (vaihe 8 B.4) | **Neuvoa-antava**  |
| `nightly-mutation`     | Stryker-mutaatiotestauksen pistemäärä nopeassa yksikkötestilinjassa — selviävät mutantit paljastavat heikot assert-lauseet                                                                                  | **Neuvoa-antava**  |
| `nightly-compat`       | Node-version yhteensopivuusmatriisi tuettujen `engines.node`-versiovälien välillä                                                                                                                           | **Neuvoa-antava**  |

---

## Nopeusvaihe (2026-08-30 → v4.0 LTS): jokaista lähtötasoa väljennettiin 20 %

Omistajan päätös (2026-08-30): v4.0:n modularisointiin asti toimitusnopeus on tärkeämpää
kuin teknisen velan pitäminen ennallaan. Jokaista **numeerista** räikän lähtötasoa väljennettiin 20 %
yhdellä auditoitavalla muutoksella, ja vaihe on määritetty tiedostossa `config/quality/quality-baseline.json`:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| Mikä muuttui                                                                                                                                                                                                                | Missä                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `metrics.*.value` — pienempi on parempi -määrät ×1,2, suurempi on parempi -prosentit ÷1,2 (kattavuuden alaraja pidettiin arvossa 60, `eslintErrors` pysyy arvossa 0, `eslintWarnings` 0 → 20 % jäädytetystä ohitusmäärästä) | `quality-baseline.json` (`_relax_velocity_2026_08_30`-huomautus luettelee kaikki ennen → jälkeen -arvot) |
| `count` ×1,2 / `percentage` ×1,2                                                                                                                                                                                            | `complexity-baseline.json`, `duplication-baseline.json`                                                  |
| `cap`, `testCap` sekä jokainen `frozen[*]`- / `testFrozen[*]`-rivikatto ×1,2                                                                                                                                                | `file-size-baseline.json`                                                                                |
| tiedostokohtaiset / TS-koodikohtaiset määrät ×1,2                                                                                                                                                                           | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json`   |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                         | `scripts/check/check-openapi-coverage.mjs`                                                               |
| `--require-tighten` muuttuu neuvoa-antavaksi, kun `_policy.requireTighten === false`                                                                                                                                        | `scripts/quality/check-quality-ratchet.mjs`                                                              |
| öinen `bank-ratchet-shrinks` keskeytetään (se kirjaisi mitatun pienenemisen talteen ja poistaisi liikkumavaran)                                                                                                             | `.github/workflows/nightly-release-green.yml`                                                            |

Sallittujen poikkeusten luettelot (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) **eivät** ole budjetteja, eikä niitä muutettu. Hyväksytty/hylätty-käytäntöportit (salaisuudet, SQL-säännöt,
dokumentaation ja ympäristön välinen sopimus, i18n-vastaavuus, yksikkötestit) eivät muutu — epäonnistunut testi on edelleen epäonnistunut testi.

**Työkalut**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — kertaluonteinen
  väljennys (`scripts/quality/relax-baselines.mjs`); kieltäytyy suorittamasta toimintoa kahdesti samalla
  huomautuksella.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  mittaa jokaisen numeerisen portin samalla tavalla kuin CI ja tulostaa jäljellä olevan liikkumavaran porteittain
  (`scripts/quality/baseline-headroom.mjs`). Öinen `baseline-headroom`-työ julkaisee
  taulukon jatkuvasti päivitettävään tehtävään **📈 Lähtötasojen liikkumavara (nopeusvaihe)** ja lisää
  `headroom-alert`-tunnisteen, kun jokin portti on enintään 10 %:n päässä ylärajastaan tai on jo ylittänyt sen. Kyseinen tehtävä
  toimii ennakkovaroituksena: jos budjetti täyttyy muutamassa päivässä, väljennys kuluu
  muutamaan PR:ään eikä koko tiimin käyttöön — tarkista kyseisen portin `_rebaseline_*`-huomautukset.

**Uuden koodin tila (Clean-as-You-Code) — 2026-08-30 alkaen, vain PR-pikapolulla**

`pull_request`-tapahtumissa `quality.yml` välittää `--base-ref <PR:n pohjan SHA>` komennoille `check:file-size`,
`check:complexity-ratchets` ja `check:dead-code`. Tässä tilassa portti vertaa HEAD-versiota
yhdistämiskantaan **rajoittuen PR:n muuttamiin tiedostoihin** (`scripts/check/newCodeMode.mjs`:
yhdistämiskanta materialisoidaan kertakäyttöiseen `git worktree` -työpuuhun, ESLint/knip suoritetaan siinä ja HEAD-versiossa, ja
tiedostokohtaisten määrien erot lasketaan):

- **estävä** — PR lisäsi syklomaattisen tai kognitiivisen kompleksisuuden rikkomuksia tai kuolleita vientejä muuttamiinsa tiedostoihin
  (`complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=` lokissa);
- **neuvoa-antava** — globaali kokonaismäärä verrattuna jäädytettyyn lähtötasoon. Peritty poikkeama ei koskaan hylkää
  viatonta PR:ää; poikkeama jäädytetään uudelleen julkaisun täsmäytyksessä, ja liikkumavaraa mittaava työ valvoo sitä.

`workflow_dispatch`-suorituksilla, release-green-tarkistuskierroksella ja öisellä liikkumavaraa mittaavalla työllä ei ole PR-pohjaa,
joten ne käyttävät edelleen absoluuttista (globaalia) vertailua. Kattavuus, duplikaatit ja tyyppikattavuus pysyvät toistaiseksi globaaleina
(niiden työkalut eivät tuota tiedostokohtaista eroa kevyesti) — ne ovat ehdokkaita samaan käsittelyyn.

**Vaiheen päättäminen versiossa v4.0 (LTS = aiempaa tiukempi, ei ”paluu normaaliin”)**

1. Puhtaan `release/v4.0.0`-haaran kärjessä: suorita dokumentointia varten `npm run quality:headroom --json` ja sitten
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update` sekä kunkin tyyppitarkistusportin
   `--update` — jokainen vertailutaso laskee mitattuun arvoon.
2. Poista `_policy` tiedostosta `quality-baseline.json` (ottaa `--require-tighten`-asetuksen ja öisen
   pankituksen uudelleen käyttöön) ja palauta `THRESHOLD = 36` (tai suurempi) tiedostossa `check-openapi-coverage.mjs`.
3. Tiukenna mitattuja arvoja pidemmälle siellä, missä modularisointi tuotti tulosta: palauta tiedostokoon `cap`-arvoksi 1000
   (tai 800), nosta kattavuuden alarajoja 5:llä ja aseta kuolleiden vientien määräksi 0 modularisoiduissa paketeissa.

## Ratchet-perustaso (`quality-baseline.json`)

Ratchet-moottori (`scripts/quality/check-quality-ratchet.mjs`) lukee tiedoston `quality-baseline.json`
ja vertaa sitä juuri kerättyyn `quality-metrics.json`-tiedostoon. Jos jokin mittari heikkenee
epsilon-arvoaan enemmän, koonti epäonnistuu.

Tällä hetkellä seurattavat mittarit:

| Mittari               | Suunta | Merkitys                               |
| --------------------- | ------ | -------------------------------------- |
| `eslintWarnings`      | `down` | ESLint-varoitusten määrä ei saa kasvaa |
| `coverage.statements` | `up`   | Lausekattavuus ei saa laskea           |
| `coverage.lines`      | `up`   | Rivikattavuus ei saa laskea            |
| `coverage.functions`  | `up`   | Funktiokattavuus ei saa laskea         |
| `coverage.branches`   | `up`   | Haarakattavuus ei saa laskea           |

Päivitä perustaso aidon parannuksen jälkeen seuraavasti:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

`--update`-valitsin kirjoittaa nykyiset mitatut arvot tiedostoon `quality-baseline.json`.
Commitoi tämä tiedosto yhdessä mittaria parantaneen muutoksen kanssa. PR, joka parantaa
mittaria päivittämättä perustasoa, havaitaan `--require-tighten`-valitsimella (vaihe 6A.5,
toteutus odottaa).

### CodeQL-ratchet: päivitysväli ja manuaalinen käynnistys

`check:codeql-ratchet` lukee **repositoriotilaa, joka päivitetään ajastetusti — ei PR-kohtaisesti.**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` ilmoittaa
`state: configured`, `schedule: weekly`: kyseessä on GitHubin oletusasetuksen tarkistus, ei jokaisen
pushin yhteydessä suoritettava analyysi. Tästä seuraa, että kun hälytyksiä KORJAAVA PR on yhdistetty,
ratchet lukee edelleen vanhaa, suurempaa määrää seuraavan ajastetun tarkistuksen suorittamiseen asti —
joten se ilmoittaa regressiosta jokaisessa avoimessa PR:ssä, myös korjaavan PR:n omissa
jatkomuutoksissa, kunnes tarkistus saa tilanteen ajan tasalle.

**Manuaalinen päivitys**: `gh workflow run codeql.yml --ref release/vX.Y.Z` suorittaa
analyysin uudelleen ja julkaisee hälytykset uudelleen muutamassa minuutissa. Lue ensin
`.github/workflows/codeql.yml` — sen otsikko selittää, että se käyttää vain
`workflow_dispatch`-käynnistystä, **koska se on ristiriidassa GitHubin oletusasetuksen kanssa**
(`CodeQL analyses from advanced configurations cannot be processed when the default setup is enabled`).
`push`/`pull_request`/`schedule`-käynnistysten palauttaminen edellyttää ensin **omistajan toimenpidettä**:
Settings → Code security → CodeQL: Default → Advanced. Älä lisää `schedule:`-käynnistystä ilman tätä
vaihtoa — se tuottaa ainoastaan epäonnistuvia suorituksia.

**Tiukenna perustasoa määrän laskettua** — `node scripts/check/check-codeql-ratchet.mjs
--update` kirjoittaa uuden mitatun määrän tiedostoon `quality-baseline.json` →
`metrics.codeqlAlerts.value`, jotta ratchet ei salli huomaamatta regressiota takaisin
vanhaan ylärajaan. Käytännön esimerkki (2026-09-02/03): PR #12502 korjasi 7 todellista hälytystä
(13 → 6 mitattua avointa hälytystä); PR #12530 tiukensi jäädytettyä perustasoa arvosta 11 arvoon 6
vastaamaan mittaustulosta; jäljellä olevat 6 hälytystä hylättiin tämän jälkeen hälytyskohtaisin
perusteluin, jolloin avoimia hälytyksiä jäi 0.

**Hylkäykset ovat operaattorin päätettävissä (ehdoton sääntö #14)** — älä koskaan hylkää
CodeQL-hälytystä kirjaamatta teknistä perustelua hylkäyskommenttiin: `won't fix`, jos kyseessä
on ylemmän tason protokollavaatimus, `used in tests`, jos kyseessä on testifixture, ja
`false positive`, jos kyseessä on puhdistus, jota CodeQL ei pysty havaitsemaan
(ennakkotapaus: `docs/security/ERROR_SANITIZATION.md`).

---

## Testien uudelleenyrityskäytäntö (WS5.4, v3.8.49)

Uudelleenyritykset määritetään suorittajakohtaisesti, eivät koskaan yleisenä käytäntönä — yleinen uudelleenyritys muuttaa todelliset regressiot
näkymättömiksi satunnaisiksi häiriöiksi:

| Suorittaja               | Käytäntö                                                                                                                                                           | Miksi                                                                                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e)         | `retries: 1` vain CI:ssä sekä `trace: on-first-retry`                                                                                                              | Selaimen/verkon ajoitus on aidosti epädeterministinen; yksi uudelleenyritys ja jäljitys tekevät satunnaisesta häiriöstä diagnosoitavan artefaktin |
| Vitest                   | EI yleistä uudelleenyritystä. Todistetusti epävakaalle testille määritetään eksplisiittinen testikohtainen uudelleenyritys (näkyy diffissä ja tarkastetaan PR:ssä) | Pitää karanteeniluettelon repossa eikä koskaan läpinäkymättömänä                                                                                  |
| node:test (yksikkötesti) | EI uudelleenyrityksiä koskaan                                                                                                                                      | Epävakaa yksikkötesti on testissä oleva virhe — korjaa se, älä vain suorita sitä uudelleen                                                        |

Tavoiteltavat SLO:t, kun epävakaustelemtria on käytössä (WS5.2/5.3): <1 %:n epävakausaste testiä kohden
(”korjaa nyt” -kynnys), ≥95 %:n läpäisyaste putkea kohden. Toimialan viitearvoja —
kalibroi ne uudelleen omien mittaustemme perusteella.

## Julkaisutason räikän poikkeama (WS5.5, v3.8.49)

Kun räikkä (tiedostokoko, monimutkaisuus, eslint-varoitukset) taantuu PUHTAAN julkaisun
kärjessä — eli yhdistämisten YHDISTELMÄ aiheutti taantuman eikä yksikään PR yksinään toista
taantumaa omassa haarassaan — korjaus kuuluu **julkaisuvastaavalle, kerran,
julkaisuhaarassa**: suosi erottamista/refaktorointia; määritä perustaso uudelleen vain dokumentoidun
perustelumerkinnän kanssa. Älä koskaan siirrä yhdistelmäpoikkeamaa osallistujan PR:ään äläkä koskaan
määritä perustasoa uudelleen PR-kohtaisesti (se piilottaa todelliset regressiot). Tee ensin ero:
toista virhe puhdasta kärkeä vasten erillisessä worktree-työpuussa, ennen kuin oletat PR:si aiheuttaneen sen.

## Räikkärajojen pienennysten tallettaminen — alaspäin suuntautuva liike (#8584)

Räikkä on vain puoliksi automaattinen, ja juuri väärältä puolelta. Ylärajan **nostaminen** on
manuaalinen JSON-muokkaus, joka kestää kymmenen sekuntia ja on nopein tapa vapauttaa virhetilassa oleva PR.
Ylärajan **laskeminen** edellyttää, että joku suorittaa komennon `--update` ja commitoi tuloksen — ja ennen kuin
`bank-ratchet-shrinks`-työ otettiin käyttöön, mikään työnkulku ei tehnyt sitä. Mitattu seuraus
(2026-07-25): 18 jäädytettyä tiedostoa oli jo uusien tiedostojen 800 rivin ylärajan tasolla tai sen alapuolella, pahin
132-kertaisesti (`src/shared/validation/schemas.ts`, 19 rivillä 2 523:n yläraja);
monimutkaisuuden yläraja nousi `1794 → 2169` noin 37 perustason uudelleenmääritysmerkinnän aikana ja laski tasan kerran
(−1); ja ”tiukenna komennolla `--update` seuraavalla kierroksella” kirjoitettiin 31 kertaa mutta toteutettiin
kerran. Yläraja, joka säilyy sen oikeuttaneen koodin jälkeen, muuttaa huomaamatta jokaisen valmiin
pilkkomisen kasvunvaraksi sille, joka muokkaa tiedostoa seuraavaksi.

`nightly-release-green.yml` → työ **`bank-ratchet-shrinks`** sulkee tämän silmukan:

|           |                                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------------ |
| Suoritus  | `schedule` (3×/päivä) + `workflow_dispatch` — tarkoituksella **ei** `push`                                   |
| Mittaus   | korkein `release/vX.Y.Z`, sama ratkaisu- ja injektiosuoja kuin `release-green`                               |
| Kirjoitus | `check:file-size --update` ja `check:complexity-ratchets --update` (molemmat rakenteeltaan vain pienentäviä) |
| Varmistus | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                     |
| Toimitus  | yksi aina ajan tasalla oleva PR julkaisuhaaraa vasten — pakkopäivitetään, ei koskaan roskapostiteta          |

Tallettaminen tehdään erissä eikä jokaisen pushin yhteydessä, koska sille ei ole viivevaatimusta (8 tunnin
kuluessa talletettu pienennys riittää), kun taas yhdistämiskohtainen suoritus rakentaisi PR-haaran toistuvasti
uudelleen yhdistämiskampanjoiden aikana ja maksaisi täydestä ESLint-läpikäynnistä joka kerta. Havaitseminen tapahtuu edelleen
pushin yhteydessä (`release-green`); vain tallettaminen tehdään erissä.

### Turvallisuuden varmistin

Työ kirjoittaa perustasoihin ilman valvontaa, joten `verify-ratchet-bank.mjs` tekee
tästä hyväksyttävää. Se vertaa komennon `--update` jälkeistä puuta `HEAD`:iin ja **keskeyttää työn
ennen minkään commitin luomista** — avaamatta PR:ää — ellei jokainen muutos ole jokin seuraavista:

- numeerisen `frozen`- / `testFrozen`-merkinnän **laskeminen** tai **poistaminen**
- `complexity-baseline.json` → `count` **laskettu**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` **laskettu**

Kaikki muu epäonnistuu: luvun nostaminen, merkinnän lisääminen, `cap`/`testCap`-arvon muuttaminen tai
`_rebaseline_*`-merkinnän poistaminen/uudelleenkirjoittaminen (nämä merkinnät ovat tarkastusketju sille, miksi kukin
yläraja on olemassa, ja ne tallennetaan samaan `frozen`-objektiin kuin tiedostomerkinnät).
Botti, joka voisi nostaa ylärajaa, olisi ehdottomasti nykytilannetta huonompi. Regressiosuoja:
`tests/unit/verify-ratchet-bank.test.ts`.

Työ ei koskaan pushaa haaraan `release/*` — ihminen yhdistää PR:n, joten virheellinen mittaus
ei voi päätyä mukaan ilman tarkastusta.

## Sallittujen poikkeusten käytäntö

Jokainen tarkistus, joka ei voi epäonnistua ennestään olemassa olevien rikkomusten vuoksi, käyttää jäädytettyä sallittujen poikkeusten luetteloa
(esim. `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). Käytäntö on:

**Korjaa juurisyy; käytä sallittujen poikkeusten luetteloa vain, kun rikkomus on ollut olemassa jo ennestään eikä sitä voida korjata samassa PR:ssä.**

Kun lisäät merkinnän sallittujen poikkeusten luetteloon:

1. Lisää kommentti, jossa perustelet poikkeuksen.
2. Viittaa seurantatehtävään (esim. `// #3498 — Vaiheen 2 ominaisuus, ei vielä toteutettu`).
3. Poista merkintä samassa PR:ssä, joka korjaa rikkomuksen — vanhentunut merkintä, joka ei enää
   ohita aktiivista rikkomusta, on itsessään virhe (6A.3:n vanhentuneiden sääntöjen valvonta
   hylkää tarkistuksen irrallisen sallittujen poikkeusten merkinnän vuoksi, kun se on toteutettu).

**Älä** lisää sallittujen poikkeusten merkintöjä vain saadaksesi testit läpäistyä nopeammin. Läpäisty tarkistus ja samalla kasvava
sallittujen poikkeusten luettelo luovat väärän käsityksen laadusta.

### Kun tarkistus epäonnistuu PR:ssäsi

1. **Lue tarkistuksen tuloste huolellisesti** — se kertoo täsmälleen, mikä tiedosto tai symboli rikkoi
   sääntöä.
2. **Korjaa rikkomus** — useimmat tarkistukset ovat deterministisiä tiedostojärjestelmän tarkistuksia, jotka läpäistään heti,
   kun koodi on oikein.
3. **Jos rikkomus on ollut olemassa jo ennestään** (eli et aiheuttanut sitä, mutta tarkistus
   kattaa sen nyt): lisää sallittujen poikkeusten merkintä, perustelukommentti ja viittaus seurantatehtävään.
4. **Jos tarkistus on räikkätyyppinen** (kattavuus, ESLint-varoitukset, duplikaatio, kompleksisuus):
   muutoksesi heikensi mittaria. Korjaa taustalla oleva ongelma tai suorita (harvoin)
   `npm run quality:ratchet -- --update`, jos muutos on tarkoituksellinen ja mittarin
   heikkeneminen hyväksyttävää — mutta dokumentoi syy PR:n kuvauksessa.
5. **Neuvoa-antavat tarkistukset** (`continue-on-error: true`) ovat informatiivisia — ne eivät estä
   yhdistämistä, mutta näkyvät CI-yhteenvedossa. Korjaa ne silti.

---

## Uuden tarkistuksen lisääminen

1. Luo `scripts/check/check-<name>.mjs` (tai `.ts`). Käytäntötarkistukset palauttavat lopetuskoodin 0/1.
   Räikkätyyppiset tarkistukset kirjoittavat mittarin tiedostoon `quality-metrics.json` komentosarjan `collect-metrics.mjs` kautta.
2. Lisää `"check:<name>": "node scripts/check/check-<name>.mjs"` tiedostoon `package.json`.
3. Kytke se tiedostossa `.github/workflows/ci.yml` asianmukaiseen työhön
   (käytäntö → `lint` tai `docs-sync-strict`; räikkä → `quality-gate`).
4. Jos sillä on sallittujen poikkeusten luettelo, käytä funktiota `reportStaleEntries()` tiedostosta
   `scripts/check/lib/allowlist.mjs`, jotta vanhentuneet merkinnät havaitaan automaattisesti.
5. Kirjoita hakemistoon `tests/unit/build/` testi, joka kattaa tarkistuksen tunnistuslogiikan.
6. Päivitä tämä asiakirja (lisää rivi asianmukaiseen työtaulukkoon).

---

## Agenttityökalut: LSP osana työnkulkua (valinnainen)

CI-tarkistusten lisäksi OmniRoute sisältää **valinnaisen** `agent-lsp`-rungon
(projektitason `.mcp.json`, vaihe 7, tehtävä 15). Luo `.mcp.json`
ja tuo TypeScript-kielipalvelin ohjelmointiagenttien saataville, jotta ne selvittävät symbolit /
diagnostiikan **ennen** koodin kirjoittamista — se täydentää `typecheck:core`-tarkistusta kääntämällä ennen väitteiden esittämistä
ja vähentää ”keksittyjen symbolien” virheitä niiden alkulähteellä. Sitä ei tarkoituksella
ladata automaattisesti (valitset ja varmennat MCP↔LSP-sillan itse); virheellinen merkintä kirjaa vain
yhteysvirheen lokiin eikä koskaan riko istuntoja.

---

## Rationalisointijono (ROI-katselmus — vaihe 9, aalto 3)

Tämä inventaario täsmäytettiin `ci.yml`-tiedostoon 2026-06-17 (aiemmasta versiosta puuttuivat
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence`). Täsmäytetylle joukolle tehty ROI-katselmus
tunnisti seuraavat rationalisointiehdokkaat. **Yhdistämiset ovat mekaanisia CI-muutoksia;
vaihdot ja poistot ovat operaattorille varattuja käytäntöpäätöksiä.** Mitään alla mainittua
ei ole vielä otettu käyttöön.

**Myös edellä dokumentoimatta** (neuvoa-antavia, signaali heikko): `docs-lint`-työ
(markdownlint + Vale, koko työssä `continue-on-error`) sekä erilliset tarkistustyönkulut
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. `semgrepFindings: 0` on
`quality-baseline.json`-tiedostossa, mutta sitä ei ole kytketty estävään räikkään
`ci.yml`-tiedostossa — mittari on tällä hetkellä irrallinen.

### Yhdistäminen / päällekkäisyyksien poistaminen (mekaaninen, pienempi riski)

Jokainen ehdokas validoitiin aktiivista porttitilaa vasten 2026-06-17 (luota, mutta varmista);
useat ”ilmeiset” yhdistämiset osoittautuivat peittävän teknistä velkaa, eivätkä ne ole
**suoraan korvaavia**.

- **`check:docs-sync` suoritetaan kahdesti** — erikseen `lint`-työssä sekä uudelleen osana `check:docs-all`-tarkistusta (`docs-sync-strict`) ja huskyn pre-commit-koukkua. ✅ **TEHTY** — erillinen `lint`-suoritus poistettu.
- **CVE-tarkistus** — ❌ **EI ole siisti yhdistäminen.** `audit:deps` epäonnistuu ehdottomasti mistä tahansa vakavasta tai kriittisestä CVE:stä; `check:vuln-ratchet` (osv) epäonnistuu vain, jos perustasoon nähden tapahtuu _heikennys_ (tällä hetkellä 1 MODERATE). Semantiikka on erilainen — `audit:deps`-tarkistuksen poistaminen poistaisi ehdottoman vakavien ja kriittisten haavoittuvuuksien portin. Säilytä molemmat.
- **Syklien tunnistus** — ❌ **EI ole siisti yhdistäminen.** `check:circular-deps` (dpdm) raportoi **91 sykliä** (siksi se on neuvoa-antava); sitä ei voida muuttaa estäväksi ennen niiden ratkaisemista, ja sen kattavuus on laajempi kuin vihreän, kuratoidun `check:cycles`-tarkistuksen. Säilytä `check:cycles` estävänä; 91 dpdm-syklin ratkaiseminen kuuluu omaan työjonoonsa.
- **Monimutkaisuus** — ✅ **TEHTY** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): yksi ESLint-läpikäynti, laskenta ruleId-arvon mukaan, jotta syklomaattisuuden ja rivien enimmäismäärän sekä kognitiivisen monimutkaisuuden perustasot pysyvät erillisinä; yksittäiset `check:complexity` / `check:cognitive-complexity` säilyvät paikallista `--update`-ajoa varten.
- **`/api`-antihallusinaatio** — ✅ **TEHTY** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): yksi `src/app/api`-hakemiston tiedostojärjestelmäinventaario, openapi-routes + docs-symbols raportoivat edelleen erikseen; yksittäiset tarkistukset säilyvät paikallisia ajoja varten.
- **`check:node-runtime` suoritetaan 11 työssä** — ⚠️ **pieni ROI.** Jokainen on erillinen suoritusympäristö, ja tarkistus kestää alle sekunnin; kokonaissäästö olisi noin 10 sekuntia, mutta samalla menetettäisiin edullinen työkohtainen suojaus. Ei muutostyön arvoinen.
- **`typecheck:noimplicit:core` CI:n lint-tarkistuksessa** — ✅ **poistettu lint-työstä** (oli neuvoa-antava `continue-on-error`); estävä tyyppipinta muodostuu tarkistuksista `typecheck:core` + `check:type-coverage`. Paikallinen komentosarja säilytettiin.

### Vaihda / päätä (operaattorin käytäntö)

- `check:openapi-security-tiers` (neuvoa-antava) — ❌ **EI voida siististi muuttaa estäväksi.** Se päättyy koodilla 0, mutta varoittaa, että useilta `traffic-inspector`-reiteiltä kohdassa `LOCAL_ONLY_API_PREFIXES` puuttuu `x-loopback-only: true`-annotaatio. Sen pakottaminen edellyttää ensin näiden annotaatioiden lisäämistä `openapi.yaml`-tiedostoon.
- `typecheck:noimplicit:core` (neuvoa-antava) — estävä `check:type-coverage`-räikkä korvaa sen suurelta osin. Muuta se räikäksi tai poista tarpeeton toinen `tsc`-ajo.
- `test:vitest:ui` (nyt **estävä**) — aiemmat virheet on nimenomaisesti suljettu pois `vitest.config.ts`-tiedostossa `// #8618`-seurantakommenteilla; uudet virheet kaatavat työn.
- `check:secrets` (gitleaks, estävä räikkä jäädytetty kolmeen dokumentoituun väärään positiiviseen) — lisää kolme löydöstä sallittujen luetteloon nollatason saavuttamiseksi tai alenna tarkistus neuvoa-antavaksi. Päällekkäinen GitHubin oman salaisuuksien tarkistuksen ja `check:public-creds`-tarkistuksen kanssa.
- `check:pr-evidence` (estävä, tekee grep-haun PR-kuvauksen tekstistä) — suuri väärien positiivisten riski; poistaminen heikentäisi ehdottoman säännön #18 valvontaa, joten kyseessä on aito käytäntöpäätös.
- `semgrep` (neuvoa-antava erillinen tarkistus) — päällekkäinen CodeQL:n kanssa OWASP-perheiden osalta; kytke sen perustaso räikkään tai poista se.

---

## Aiheeseen liittyvä dokumentaatio

- Toimitusketju (alkuperä, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — avainjoukkojen vastaavuuden portti

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, työ `i18n-ui-coverage`).
Vertaa jokaisen `src/i18n/messages/<locale>.json`-tiedoston lehtiavainjoukkoa `en.json`-tiedostoon ja epäonnistuu,
jos jokin lehtiavain puuttuu tai on ylimääräinen riippumatta siitä, milloin avain lisättiin. `__MISSING__:`
-paikkamerkit lasketaan olemassa oleviksi (niiden sisältö kuuluu suhdeportin vastuulle). Tämä täydentää täysin
kahta diff-pohjaista/prosenttipohjaista porttia: `check-ui-keys-coverage` vaatii kullekin
kielialueelle vähintään 80 %:n kattavuuden (43 puuttuvaa avainta noin 13 000:sta näyttää silti 99,7 %), ja `check-new-key-coverage` arvioi
vain avaimet, jotka PR lisää `en.json`-tiedostoon. Kielialue-erä luodaan sen päivän `en.json`-tiedostosta,
jona sen haara luodaan, ja sitä käännetään useita päiviä samalla, kun pohjaan lisätään jatkuvasti avaimia; erän PR ei itse lisää
yhtään avainta, joten kumpikaan rinnakkaisporteista ei reagoinut, kun erä 1 (#13044) yhdistettiin yhdeksällä
kielialueella 43 avainta vajavaisena ja erä 2 (#13660) kahdeksalla kielialueella 10 avainta vajavaisena (2026-09-15). Korjaa virhetila komennolla
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers`; `extra`-lehtiavain
tarkoittaa, että lähteestä on poistettu se — poista se kielialueesta. `--warn` raportoi epäonnistumatta.
`--catalog=cli` suorittaa saman vertailun hakemistolle `bin/cli/locales` (`npm run i18n:check-keys:cli`);
molemmat vaiheet kuuluvat työhön `i18n-ui-coverage`.

#### `check-new-key-coverage` — uusien avainten i18n-portti

`check-ui-value-drift`-portin rinnakkaisportti. Se havaitsee tilanteen, jossa englanninkielinen arvo on **kirjoitettu uudelleen**
mutta sen käännökset ovat jääneet ennalleen; tämä havaitsee tilanteen, jossa englanninkielinen avain on **lisätty**
mutta jotkin kielialueet eivät ole koskaan saaneet sitä.

`check-ui-keys-coverage` ei pysty havaitsemaan tällaista tilannetta: se vaatii prosentuaalisen vähimmäiskattavuuden kielialueittain, ja
yksitoista puuttuvaa avainta noin 13 000:sta jättää kattavuudeksi 99,9 %. Kielikohtainen prosenttiluku ei pysty
ilmaisemaan, että ”tämä ominaisuus julkaistiin kääntämättömänä” — kokonainen ominaisuus voidaan lisätä uuteen kielialueeseen ilman
tekstiä luvun muuttumatta lainkaan.

Portin taustalla oleva häiriötilanne: Orchestration Canvasin vaiheessa 3 sen yksitoista avainta käännettiin
kaikille tuolloin olemassa olleille 42 kielialueelle. Tunteja myöhemmin EU-kielten erä (#13044) kasvatti repossa olevien
kielialueiden määrän 51:een, eivätkä yhdeksän uutta tulokasta (`el`, `et`, `ga`, `hr`, `lt`, `lv`, `mt`, `sl`, `sr`) koskaan
saaneet niitä. `deepMergeFallback` korvaa puuttuvan avaimen englanninkielisellä tekstillä, joten häiriö ilmeni
kääntämättömänä eikä tyhjänä käyttöliittymänä — todellisena ja rakenteensa vuoksi hiljaisena.

Rinnakkaisporttinsa tavoin se on **diff-tietoinen** ja vertaa yhdistämispohjan englanninkielistä versiota työpuuhun,
joten ennestään olemassa olevat puutteet pysyvät jäädytettyinä eikä portin käyttöönotto vaatinut migraatiota. Poikkeusmekanismi:
`__MISSING__:<english>` lykkää käännöstä säilyttäen samalla oikean toiminnan ajon aikana. `vi` kieltää
paikkamerkit (`tests/unit/i18n-vi-completeness.test.ts`) ja vaatii oikean käännöksen.

#### `check-vitest-exclusions` — sivuun jätettyjen testien portti

`vitest.config.ts`-tiedoston `exclude`-luettelossa oleva tiedosto on testi, jota ei suoriteta, mutta joka näyttää
kattavuudelta puuta tarkastelevalle. Kommentin
`// #8618 — aiempi virhe; poista tämä poissulku, kun se on korjattu` taakse kertyi 62 tiedostoa. Issue #8618 suljettiin
2026-08-11 samalla, kun sen seuraama luettelo kasvoi 45 merkinnästä 62:een ja jokainen uusi merkintä peri suljettuun issueen
viittaavan kommentin. Kun luettelo lopulta mitattiin tiedosto kerrallaan (#13204), **51 tiedostoa 62:sta
läpäisi testit nykyistä puuta vasten ilman lähdekoodimuutoksia**.

Portti edellyttää, että jokainen todelliseksi tiedostoksi ratkeava poissulku (a) nimeää seuranta-issuen ja
(b) esiintyy tiedostossa `config/quality/vitest-exclusions.json` mitatun tilansa kanssa, joten uuden lisääminen näkyy
tarkastettavana diffina erillisessä tiedostossa eikä vain uutena rivinä 60 merkinnän taulukossa. Se ei tarkoituksellisesti
suorita poissuljettuja testejä uudelleen — se kestää noin 10 minuuttia ja kuuluu säännöllisesti suoritettavaan työhön;
inventaario kirjaa, milloin kukin testi mitattiin viimeksi.
