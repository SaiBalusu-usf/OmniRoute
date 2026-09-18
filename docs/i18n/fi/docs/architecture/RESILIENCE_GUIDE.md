# Resilience Guide (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/RESILIENCE_GUIDE.md) · 🇪🇹 [am](../../../am/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇷 [el](../../../el/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇪 [et](../../../et/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇪 [ga](../../../ga/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ha](../../../ha/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/RESILIENCE_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇭 [km](../../../km/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇲 [my](../../../my/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇵 [ne](../../../ne/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [or](../../../or/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇰 [si](../../../si/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇸 [sr](../../../sr/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇿 [uz](../../../uz/docs/architecture/RESILIENCE_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [yo](../../../yo/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/RESILIENCE_GUIDE.md)

---

OmniRoutessa on kolme erillistä mutta toisiinsa liittyvää vikasietoisuusmekanismia. Jokaisella niistä on eri laajuus ja tarkoitus. Pidä ne erillään reitityksen toimintaa selvittäessäsi.

![Kolmikerroksinen vikasietoisuusmalli](../diagrams/exported/resilience-3layers.svg)

> Lähde: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd)

## 1. Palveluntarjoajan katkaisija

**Laajuus:** koko palveluntarjoaja (esim. `glm`, `openai`, `anthropic`).

**Tarkoitus:** lopettaa liikenteen lähettäminen palveluntarjoajalle, joka epäonnistuu toistuvasti taustapalvelun tai palvelun tasolla.

**Toteutus:**

- Ydinluokka: `src/shared/utils/circuitBreaker.ts`
- Kytkentä: `src/sse/handlers/chatHelpers.ts`, `src/sse/handlers/chat.ts`
- Tila-API: `GET /api/monitoring/health`
- Nollaus-API: `POST /api/resilience/reset`
- Kääreet: `open-sse/services/accountFallback.ts`
- Tietokantataulu: `domain_circuit_breakers`

**Tilat:**

- `CLOSED` — normaali liikenne sallitaan
- `DEGRADED` — liikenne sallitaan edelleen, mutta palveluntarjoajan lisääntyneitä virheitä seurataan
- `OPEN` — palveluntarjoaja on väliaikaisesti estetty; yhdistelmäreititys ohittaa sen
- `HALF_OPEN` — nollauksen aikakatkaisu on kulunut; koepyyntö sallitaan

**Määritettävät oletusarvot (`open-sse/config/constants.ts`, käytettävissä kohdassa Hallintapaneeli → Asetukset → Vikasietoisuus):**

| Luokka      | Heikentyy kohdassa | Avautuu kohdassa | Nollauksen aikakatkaisu |
| ----------- | ------------------ | ---------------- | ----------------------- |
| OAuth       | 5 virhettä         | 8 virhettä       | 60s                     |
| API-avain   | 7 virhettä         | 12 virhettä      | 30s                     |
| Paikallinen | johdettu           | 2 virhettä       | 15s                     |

`degradationThreshold` määrittää, milloin palveluntarjoaja siirtyy tilaan `DEGRADED`; `failureThreshold` määrittää, milloin katkaisija avautuu ja palveluntarjoaja ohitetaan. Paikallisten palveluntarjoajien profiileja ei vielä näytetä vikasietoisuusasetusten sivulla.

**Laukaisukoodit:** vain palveluntarjoajatason tilakoodit `[408, 500, 502, 503, 504]`. ÄLÄ laukaise katkaisijaa tilitason virheistä (useimmat 401/403/429 — ne kuuluvat jäähdytyksen tai lukituksen käsiteltäviksi).

**Laiska palautuminen:** kun `OPEN` vanhenee, `getStatus()`, `canExecute()` ja `getRetryAfterMs()` päivittävät tilaksi `HALF_OPEN`. Tausta-ajastinta ei tarvita.

---

### Erikseen käyttöön otettava yleinen palveluntarjoajan jäähdytys (aikaikkunaportti)

Neljäs, **erikseen käyttöön otettava** kerros (`PROVIDER_COOLDOWN_ENABLED`, oletuksena **pois käytöstä**) ylläpitää
pyyntöjen välillä muistia epäonnistuvista palveluntarjoajista tiedostossa
`open-sse/services/providerCooldownTracker.ts`. Yhdistelmäkohteen
määritys käyttää sitä, jotta peräkkäiset yhdistelmäpyynnöt eivät käy uudelleen läpi juuri
epäonnistunutta palveluntarjoajaa. Palveluntarjoajatason merkinnät noudattavat `PROVIDER_PROFILES`-aikaikkunaporttia:

| Profiili  | laukeaa (`providerFailureThreshold`) jälkeen | aikavälillä (`providerFailureWindowMs`) | jäähdytysaika (`providerCooldownMs`) |
| --------- | -------------------------------------------: | --------------------------------------: | -----------------------------------: |
| OAuth     |                                         `10` |                                 `15min` |                               `5min` |
| API-avain |                                         `15` |                                 `30min` |                              `10min` |

Kynnyksen alapuolella palveluntarjoajaa **ei** katsota jäähdytettäväksi; onnistuminen tyhjentää
aikaikkunan. Yhteystason merkinnät (`provider:connectionId`) käyttävät sen sijaan edelleen
eksponentiaalista `minRetryCooldownMs → maxRetryCooldownMs`-viivettä. Ohitukset:
`OMNIROUTE_PROVIDER_BREAKER_{OAUTH,API_KEY}_{FAILURE_THRESHOLD,FAILURE_WINDOW_MS,COOLDOWN_MS}`.
Regressiosuojaus: `tests/unit/provider-cooldown-window-gate.test.ts`.

## 2. Yhteyden jäähdytysaika

**Laajuus:** yksittäinen palveluntarjoajan yhteys/tili/avain.

**Tarkoitus:** ohittaa yksi viallinen avain samalla, kun saman palveluntarjoajan muut yhteydet jatkavat pyyntöjen käsittelyä.

**Toteutus:**

- Merkitse käytöstä poistetuksi: `src/sse/services/auth.ts::markAccountUnavailable()`
- Valinta: `getProviderCredentials*` samassa tiedostossa
- Jäähdytysajan laskenta: `open-sse/services/accountFallback.ts::checkFallbackError()`
- Asetukset: `src/lib/resilience/settings.ts`

**Yhteyskohtaiset kentät:**

- `rateLimitedUntil` — aikaleima, johon asti jäähdytysaika on voimassa
- `testStatus: "unavailable"`
- `lastError`, `lastErrorType`, `errorCode`
- `backoffLevel` — eksponentiaalisen viiveen laskuri

**Oletusarvoiset jäähdytysajat:**

- OAuth-perusaika: 5 s
- API-avaimen perusaika: 3 s
- API-avaimen 429: ensisijaisesti käytetään ylävirran `Retry-After`-otsaketta, nollausotsakkeita tai jäsennettävissä olevaa nollausajan tekstiä
- Viive: `baseCooldownMs * 2 ** failureIndex`

**Samanaikaisten uusintayritysten vyöryn esto:** estää samanaikaisia virheitä pidentämästä jäähdytysaikaa liikaa tai kasvattamasta `backoffLevel`-arvoa kahdesti.

**Päättävät tilat (EIVÄT jäähdytysaikoja):**

- `banned` — asetetaan kielletyn avainsanan tai tilin käyttökiellon tunnistuksen perusteella (katso [BAN_DETECTION](../security/BAN_DETECTION.md))
- `expired` (siirtyy päättävään tilaan rajatun uudelleenyritysmäärän jälkeen — `EXPIRED_RETRY_MAX = 3` eksponentiaalisella viiveellä — jotta tilapäiset OAuth-virheet voivat korjaantua itsestään ennen tilin pysyvää deaktivointia)
- `credits_exhausted`

Nämä säilyvät, kunnes tunnistetiedot muuttuvat tai operaattori nollaa ne. Älä korvaa päättäviä tiloja tilapäisellä jäähdytystilalla.

**Laiska palautuminen:** kun `rateLimitedUntil` on menneisyydessä, yhteys voidaan jälleen valita. Onnistuneen käytön yhteydessä `clearAccountError()` tyhjentää kaikki virhekentät.

### Istuntoaffiniteetti (#7274)

**Laajuus:** yksi asiakasistunto (`X-Session-Id` / `x-codex-session-id` / `x-omniroute-session`-otsake), joka on kiinnitetty yhteen yhteyteen **millä tahansa** palveluntarjoajalla.

**Tarkoitus:** pitää monivaiheinen agentti (Claude Code, aider, mukautetut agentit) samalla tilillä pyyntöjen välillä, mikä vähentää tilien välisestä vaihdosta johtuvaa kontekstin menetystä ja toistuvia kylmäkäynnistyksen 429-virheitä palveluntarjoajilla, joilla on tilikohtainen istuntotila.

**Toteutus:**

- TTL:n määritys: `src/sse/services/sessionAffinityPin.ts::resolveSessionAffinityTtlMs()`
- Kiinnityksen valinta/luonti: `src/sse/services/sessionAffinityPin.ts::selectSessionAffinityConnection()`
- Otsakkeen poiminta (yleinen, kaikki palveluntarjoajat): `src/sse/services/auth.ts::extractSessionAffinityKey()`
- Pysyvä kiinnitystaulu: `sessionAccountAffinity` (`src/lib/db/sessionAccountAffinity.ts`)
- Asetus: `sessionAffinityTtlMs` (yleinen TTL millisekunteina, `0` poistaa käytöstä) — `src/lib/db/settings.ts`. Nimetty uudelleen vain Codexia koskeneesta `codexSessionAffinityTtlMs`-asetuksesta migraatiossa `124_generic_session_affinity_ttl.sql`, joka siirtää mahdollisen aiemmin määritetyn Codex-TTL:n uudeksi oletusarvoksi.

Ennen muutosta #7274 `resolveSessionAffinityTtlMs()` palautti välittömästi arvon `0` kaikille muille palveluntarjoajille paitsi `codex`ille, joten TTL-asetuksella (ja istunto-otsakkeilla) ei ollut vaikutusta muualla, vaikka kiinnitysmekanismi ja otsakkeiden poiminta olivat jo palveluntarjoajariippumattomia. Korjaus poisti tämän aikaisen paluun; TTL koskee nyt yhtenäisesti kaikkia palveluntarjoajia, kun sen yleiseksi arvoksi on asetettu enemmän kuin `0`.

Kolmea istuntoaffiniteetin otsaketta ei koskaan välitetä ylävirtaan — suorittimet muodostavat omat ylävirran otsakkeensa alusta alkaen sen sijaan, että ne välittäisivät asiakkaan otsakkeet sellaisinaan, joten kyseessä säilyy ainoastaan sisäinen korrelaatiotunniste.

### Hallittujen istuntoyhteyksien yksinoikeudelliset vuokrasopimukset

**Laajuus:** yksi aktiivinen hallittu HTTP-asiakas/istunto omistaa yhden valintakelpoisen OmniRoute-yhteyden.

**Tarkoitus:** tarjota pysyvä yksinoikeudellinen yhteyden omistajuus asiakkaille, jotka tarvitsevat tiukan reititysrajan pyyntöjen välillä. Tämä eroaa istuntoaffiniteetista, joka on pehmeä jatkuvuusmieltymys: yksinoikeudellinen vuokrasopimus säilyttää elinkaaritilan SQLitessä, varmistaa aktiivisen omistajan ja aktiivisen yhteyden globaalin yksikäsitteisyyden sekä hylkää vanhentuneen sukupolven ennen palveluntarjoajalle välittämistä.

Ominaisuus otetaan käyttöön erikseen kullekin API-avaimelle. Hallitulla avaimella on oltava `lease:exclusive`-käyttöalue ja eksplisiittinen, ei-tyhjä `allowedConnections`-luettelo. Mikä tahansa HTTP-asiakas voi käyttää elinkaaripäätepistettä; asiakkaan nimeä, user-agentia, palveluntarjoajaa, OAuth-menetelmää tai mallia ei vaadita. Vuokrasopimus omistaa yhteyden, ei mallia, joten mallin vaihtaminen säilyttää sidoksen niin kauan kuin yhteys pysyy normaalisti valintakelpoisena. Tavalliset mallia, kiintiötä, kuntoa, jäähdytysaikaa ja sallittujen luetteloa koskevat säännöt pysyvät määräävinä ja voivat siirtää saman sukupolven toiseen vapaaseen valintakelpoiseen yhteyteen.

Elinkaarta hallitaan päätepisteellä `POST /api/v1/session-leases`, jonka JSON-toiminnot ovat `acquire`, `renew` ja `release`. Hallitut päättelypyynnöt sisältävät läpinäkymättömän `X-OmniRoute-Lease-Owner`-arvon ja täsmällisen `X-OmniRoute-Lease-Generation`-arvon. Omistajatunniste alkaa merkkijonolla `vlo_`, jota seuraa 43 base64url-merkkiä; vain sen SHA-256-tiiviste tallennetaan. Jokainen lopullinen välitysraja sitoo myös todennetun API-avaimen tunnuksen ja aktiivisen yhteyden tunnuksen. Vuokrasopimuksen ohjausotsakkeet poistetaan lokeista, säilytetyistä pyyntövedoksista ja ylävirran suorittimien otsakkeista.

Jos tavallisella reitityksellä on valintakelpoisia hallittuja ehdokkaita, mutta jokainen vapaa ehdokas on ulkopuolisen aktiivisen vuokrasopimuksen varaama, OmniRoute palauttaa HTTP-tilan `429`, vuokrakapasiteetin puuttumista ilmaisevan koodin, kapasiteetin odotustilan sekä rajatun `Retry-After`-arvon, joka johdetaan aikaisimmasta olennaisesta vanhenemisajasta. Valintakelpoisten yhteyksien tavallinen puuttuminen ei ole vuokrasopimusristiriita, joten siihen sovelletaan edelleen nykyistä reititysvirhesemantiikkaa.

Liittyvät mekanismit pysyvät erillisinä:

- OAuth-istuntojen varaus on prosessikohtaista, pehmeää kuormanjakoa OAuth-tileille.
- Tilikohtaiset semaforit myöntävät pyyntöjen rinnakkaisuuslupia, jotka päättyvät pyynnön valmistuessa.
- Hallittujen istuntoyhteyksien yksinoikeudelliset vuokrasopimukset tarjoavat pysyvän elinkaaren kattavan omistajuuden ja sukupolvirajan.

---

## 3. Mallin lukitus

**Laajuus:** palveluntarjojan, yhteyden ja mallin yhdistelmä.

**Tarkoitus:** estää koko yhteyden poistaminen käytöstä silloin, kun vain yksi malli ei ole käytettävissä tai sen kiintiö on rajoitettu.

**Esimerkkejä:**

- Mallikohtaisia kiintiöitä käyttävät palveluntarjoajat, jotka palauttavat tilakoodin 429
- Paikalliset palveluntarjoajat, jotka palauttavat tilakoodin 404 yhden puuttuvan mallin vuoksi
- Palveluntarjoajakohtaiset tila- tai mallioikeuksien virheet (esim. Grok-tilat)

**Toteutus:** `open-sse/services/accountFallback.ts` — `lockModel()`, `clearModelLock()`, `getAllModelLockouts()`.

### Mallien jäähdytysaikojen hallintapaneeli (v3.8.0)

Käyttöliittymä: Asetukset → Mallien jäähdytysajat (`src/app/(dashboard)/dashboard/settings/components/ModelCooldownsCard.tsx`)

Luettelee aktiiviset lukitukset ja näyttää seuraavat tiedot: palveluntarjoaja, yhteys, malli, syy ja expiresAt. Ylläpitäjät voivat ottaa mallin manuaalisesti uudelleen käyttöön kortista.

**REST API:**

- `GET /api/resilience/model-cooldowns` — luettele aktiiviset lukitukset
- `DELETE /api/resilience/model-cooldowns` — manuaalinen uudelleenkäyttöönotto. Runko: `{provider, connection, model}`. Todennus: hallinta.

### Lukitusasetusten käyttöliittymä ja onnistumisiin perustuva palautuminen (v3.8.23)

Mallin lukitus muuttui aina käytössä olleesta, kovakoodatusta toiminnasta täysin määritettäväksi,
erikseen käyttöön otettavaksi ominaisuudeksi, jolla on oma asetuskorttinsa ja itsekorjautuva palautumispolku.

**Asetuskortti:** Asetukset → Mallin lukitus
(`src/app/(dashboard)/dashboard/settings/components/ModelLockoutCard.tsx`).
Tämä **eroaa** yllä olevasta vain luku -muotoisesta `ModelCooldownsCard`-kortista (joka ainoastaan
_luettelee_ aktiiviset lukitukset) — uusi kortti _määrittää parametrit_. Oletusarvot
ovat `DEFAULT_MODEL_LOCKOUT_SETTINGS`-vakiossa
(`src/lib/resilience/modelLockoutSettings.ts`):

| Asetus                  | Oletusarvo                       | Merkitys                                                           |
| ----------------------- | -------------------------------- | ------------------------------------------------------------------ |
| `enabled`               | `false`                          | Pääkytkin — mallin lukitus on **oletusarvoisesti pois käytöstä**.  |
| `errorCodes`            | `[403, 404, 429, 502, 503, 504]` | Ylävirran tilakoodit, jotka lasketaan mallikohtaisiksi virheiksi.  |
| `baseCooldownMs`        | `120_000` (120 s)                | Ensimmäisen virheen lukituksen alkuperäinen kesto.                 |
| `maxCooldownMs`         | `1_800_000` (30 min)             | Porrastetun jäähdytysajan yläraja.                                 |
| `maxBackoffSteps`       | `10`                             | Eksponentiaalisen viiveen porrastuksen enimmäismäärä.              |
| `useExponentialBackoff` | `true`                           | Pidentävätkö toistuvat virheet jäähdytysaikaa eksponentiaalisesti. |

Asetukset säilytetään tavallisen asetussäilön kautta ja validoidaan
vikasietoisuusasetusten skeemalla; kortti rajaa `baseCooldownMs`-/`maxCooldownMs`-arvot
(ehdolla `maxCooldownMs ≥ baseCooldownMs`) sekä `maxBackoffSteps`-arvon.

**Onnistumisiin perustuva palautuminen:** palautuminen **ei** perustu pelkästään ajastimen umpeutumiseen. Onnistunut
vastaus pienentää mallin virhemäärää, joten kesken jakson palautunut malli
lakkaa porrastamasta jäähdytysaikaa (ja lukitus poistuu) ennen ajastimen umpeutumista. Kun yhdistelmäkohde
onnistuu, `open-sse/services/combo.ts` kutsuu `decayModelFailureCount()`-funktiota
(`open-sse/services/accountFallback.ts`), joka **puolittaa** tallennetun
`failureCount`-arvon (`Math.floor(failureCount / 2)`); kun arvo saavuttaa arvon `0`, lukitusmerkintä
poistetaan kokonaan. Vastaava `recordModelLockoutFailure()`-funktio
kasvattaa määrää (ja pidentää jäähdytysaikaa) virheiden ilmetessä
porrastusikkunan aikana. Tämä onnistumisiin perustuva palautuminen täydentää tavallista ajastimen umpeutumista —
kumpi tahansa mekanismi voi ottaa mallin uudelleen käyttöön.

**Tila:** lukitukset säilytetään **muistissa** (prosessikohtaisissa `Map`-rakenteissa,
joissa `ModelLockoutEntry`-arvojen avaimena on `provider:connectionId:model`), eikä niitä tallenneta
tietokantaan — ne menetetään uudelleenkäynnistyksen yhteydessä. _Asetukset_ säilytetään, mutta aktiivisten
lukitusten _tila_ on väliaikainen.

---

## 4. Kiintiönjaon rinnakkaisuuden hallinta (v3.8.36)

Tilauspohjaiset tilit (GLM, MiniMax jne.) hyväksyvät usein vain noin 1–3 samanaikaista
pyyntöä; tämän rajan ylittäminen aiheuttaa 429-virheitä ja jäähdytysjaksoja. Tämä korostuu
**kiintiönjako-** (`qtSd/…`)yhdistelmissä, joissa useat API-avaimet jakavat saman ulkoisen
tilin. Kolme tasoa estää jaetun tilin kuormittamisen liiallisilla pyynnöillä.

### Yhteyskohtainen rinnakkaisuusraja (`max_concurrent`)

Kullekin palveluntarjoajayhteydelle voidaan määrittää `max_concurrent`-yläraja
(`provider_connections.max_concurrent`, määritetään yhteyden valintaikkunassa / API:ssa / tietokannassa).
Jätä se tyhjäksi, jos et halua rajoitusta. Tämä on ainoa asetus, joka ohjaa alla olevaa
sarjallistamiskerrosta — aseta arvoksi tilin todellinen rinnakkaisuusraja (esim. GLM noin 1, MiniMax noin 2).

### Kiintiönjakopyyntöjen sarjallistaminen

Kun kiintiönjakovälitys kohdistuu yhteyteen, jolle on määritetty positiivinen
`max_concurrent`-arvo, kyseiselle **tilille** lähetettävät samanaikaiset pyynnöt sarjallistetaan
yhteyskohtaisen semaforin kautta (avain `qsconn:<connectionId>`): ylimääräiset pyynnöt **odottavat
jonossa** sen sijaan, että ne kuormittaisivat tiliä liikaa. Toiminta on **häiriötilanteessa salliva**:
täysi jono tai aikakatkaisu johtaa jatkamiseen ilman paikkaa sen sijaan, että välityskelpoinen
pyyntö koskaan hylättäisiin. Ota toiminto käyttöön tai poista se käytöstä kohdassa **Asetukset → Häiriönsietokyky → Kiintiönjaon yhteyskohtainen
rinnakkaisuus** (`resilienceSettings.quotaShareConcurrencyLimit.enabled`, oletusarvoisesti
käytössä). Ilman `max_concurrent`-rajaa toiminta säilyy ennallaan.

> Kiintiönjaon reititysportti (`selectQuotaShareTarget`, DRR + P2C) on itsessään
> häiriötilanteessa salliva ja vain _alentaa prioriteettia_ yhteydeltä, joka on saavuttanut rajansa — yhden
> yhteyden varannossa se ei voi asettaa ehdotonta rajaa, joten juuri tämä semafori
> estää pyyntötulvan.

### Yhdistelmän jäähdytysjakson huomioiva uudelleenyritys

Kun toiminto on käytössä, jokaisessa yhdistelmästrategiassa pyyntö, joka muutoin johtaisi lopulliseen 429-virheeseen
LYHYEN tilapäisen jäähdytysjakson vuoksi, odottaa jakson päättymistä ja välitetään uudelleen sen sijaan, että
429-virhe palautettaisiin — tämä kattaa Gemini-tyyppiset TPM/RPM-aikaikkunat (noin 60 sekunnin retry-after)
usean mallin yhdistelmissä, esimerkiksi kun kaksimallisen yhdistelmän molemmat kohteet saavuttavat mallikohtaisen
nopeusrajoituksen. Toimintaa rajoittaa **Asetukset → Häiriönsietokyky** -kohdan `comboCooldownWait`
(`enabled`, `maxWaitMs`, `maxAttempts`, `budgetMs`). Se ei koskaan odota syyn ollessa `quota_exhausted`
(lukittu keskiyöhön asti) eikä todennukseen tai puuttuvaan resurssiin liittyvissä tapauksissa.

---

## 5. Pyyntöjonon sisäänoton hallinta (v3.8.49 · ongelma #6593)

**Soveltamisala**: paikallinen palveluntarjoaja- ja yhteyskohtainen nopeusrajoitusjono (`open-sse/services/rateLimitManager.ts`,
jonka taustalla toimii Bottleneck), yhtä tasoa alempana kuin edellä kuvatut kolme mekanismia.

**`maxWaitMs` on vanha pysyvästi tallennettu nimi suorituksen vanhenemiselle.**
`resilienceSettings.requestQueue.maxWaitMs` välitetään Bottleneckille työn
`expiration`-arvona, jonka ajastin käynnistyy vasta välityksen jälkeen. Näin ollen se rajoittaa
rajoittimen hallitsemaa suoritusta, ei paikallisessa jonossa vietettyä aikaa. Vanheneminen
ilmoitetaan luotettuna paikallisena `code: "RATE_LIMIT_EXECUTION_TIMEOUT"` -virheenä (HTTP 504);
aiempi jonon aikakatkaisun koodinimi hyväksytään vain luotetun sisäisen
taaksepäin yhteensopivuuden vuoksi. Oletusarvo on 15000ms; sen voi ohittaa
`RATE_LIMIT_MAX_WAIT_MS`-ympäristömuuttujalla tai hallintapaneelissa (**Asetukset → Häiriönsietokyky**,
käyttöliittymän raja 1–30000ms). Jonossa oloajalla ei ole aikarajaa; rajoita
jonossa olevien kutsujien määrää alla kuvatulla `maxQueueDepth`-asetuksella.

**`maxQueueDepth` — erikseen käyttöön otettava sisäänoton yläraja (uusi).** `resilienceSettings.requestQueue.maxQueueDepth`
rajoittaa, kuinka monta pyyntöä voi odottaa jonossa (ei vielä välitettynä) yhtä
palveluntarjoaja- ja yhteysyhdistelmää kohden samanaikaisesti. Kun jonossa on jo `maxQueueDepth`
pyyntöä, uusi pyyntö hylätään välittömästi tyypitetyllä
`code: "RATE_LIMIT_QUEUE_FULL"` -virheellä **ennen** kuin se koskaan saavuttaa `limiter.schedule()`-kutsun
— hylkäys on siten kevyt ja tapahtuu ennen pyynnön myöhempää
kehotteen pakkaus- tai käännöstyötä. Oletusarvo `0` =
pois käytöstä, mikä säilyttää nykyisen rajoittamattoman jonon toiminnan; sallittu alue on 0–100000.
Arvon voi ohittaa `RATE_LIMIT_MAX_QUEUE_DEPTH`-ympäristömuuttujalla tai
`resilienceSettings.requestQueue.maxQueueDepth`-asetuksella (hallintapaneeli/API-päivitys).

Sisäänottotarkistus itsessään on puhdas funktio
(`open-sse/services/rateLimitManager/admission.ts::checkQueueAdmission`), joten
sitä voidaan yksikkötestata ilman todellista Bottleneck-rajoitinta.

> Ongelman #6593 avannut RFC ehdotti myös `bypassCompressionOnRateLimit`-asetusta.
> Tämän repositorion `open-sse/services/compression/`-putki suorittaa
> kehotteen/kontekstin pakkauksen ulospäin lähtevälle LLM-pyynnölle (`chatCore.ts`,
> `resolveCompressionSettings`/`selectCompressionStrategy`-lohkon ympärillä),
> eikä HTTP-vastauksen pakkausta muodostetuille 429-vastausrungoille — kirjaimellista ohitusasetusta vastaavaa
> koodipolkua ei ole. Tämä kehotteen pakkausvaihe suoritetaan lisäksi tällä hetkellä
> _ennen_ `withRateLimit()`-kutsua pyyntöputkessa, joten toimintojen uudelleenjärjestely sen ohittamiseksi
> jonon täyttymisestä johtuvan hylkäyksen yhteydessä on erillinen ja tätä ongelmaa laajempi
> muutos; sitä **ei** tarkoituksellisesti toteutettu tässä, vaan se jätettiin jatkotoimeksi, mikäli
> suorittimen käytön vähenemisestä saatava hyöty on uudelleenjärjestelyn riskin arvoinen.

---

## 6. Hitaan tietovirran läpäisykyvyn valvontamekanismi (#9709)

Valinnainen `resilienceSettings.streamRecovery.throughputWatchdog`-suoja tunnistaa
ylävirran, joka lähettää edelleen osia mutta tuottaa avustajan tulostetta alle
määritetyn hyödyllisen tulosteen nopeuden. Se on tarkoituksellisesti erillinen
joutoaikakatkaisusta: sykepaketit ja metatiedot eivät nollaa kumpaakaan ajastinta
eikä niitä lasketa edistymiseksi. Se on myös erillinen yrityksen ehdottomasta
määräajasta (#9153), joka säilyy absoluuttisena turvarajana tulosteen laadusta
riippumatta.

Valvontamekanismi edellyttää lämpenemisjaksoa ja sen jälkeen kokonaista liukuvaa
aikaikkunaa ennen kuin se voi keskeyttää. Se laskee Chat Completions- ja Responses
API -tulostetapahtumien tekstimuutokset (konservatiivisena UTF-8-tavujen
likimääräisenä mittana), ohittaa vain käyttöä koskevat ja tyhjät tapahtumat sekä
keskeyttää arvioinnin työkalukutsu- tai päättelytapahtumien ollessa käynnissä. Se on
oletusarvoisesti poistettu käytöstä ja voidaan ottaa käyttöön asetuksella
`STREAM_THROUGHPUT_WATCHDOG_ENABLED=true`; ikkunaa, lämpenemisaikaa,
vähimmäisnopeutta ja mitattavissa olevan tulosteen vähimmäismäärää rajoittaa
normaali häiriönsietoasetusten normalisointikerros.

Kun valvontamekanismi on käytössä, sen tekemä keskeytys kohdistetaan vain aktiiviseen
ylävirtayritykseen. Ennen kuin asiakkaalle näkyviä tavuja on lähetetty, olemassa
oleva saman tilin varhainen palautuspolku voi avata yrityksen uudelleen. Vahvistuksen
jälkeen tietovirtaa ei koskaan toisteta sokeasti; vain olemassa oleva turvallinen
tietovirran keskeltä jatkamisen sopimus voi liittää loppuosan. Viimeistely tehdään
edelleen vain kerran, joten käytön laskentaa ja semaforin vapautusta ei tehdä
kahteen kertaan.

---

## 7. Ylävirran tilan uudelleenmäärittely (virheellisesti ilmoitetut kiintiövirheet)

**Soveltamisala:** yksi ylävirran yhdyskäytävä, joka ilmoittaa tilapäisestä kiintiön loppumisesta väärällä HTTP-tilalla.

**Tarkoitus:** korjata harhaanjohtava tila ENNEN luokittelua, jotta alavirran kuluttajat (varajärjestelmä, yhdistelmäkoonti ja asiakkaalle annettava vastaus) näkevät virheen todellisen, uudelleenyrityksen sallivan luonteen.

Jotkin yhdyskäytävät ilmoittavat TILAPÄISESTÄ kiintiön loppumisesta HTTP-tilalla,
joka ei salli uudelleenyritystä. `agentrouter.org` palauttaa tilan `403` (joskus
`400`) ja kiinankielisen rungon (`用户额度不足` / `额度不足`) normaalin tilan `429`
sijaan. Claude Coden kaltaiset asiakkaat käsittelevät tilan `403` pysyvänä ja
keskeyttävät istunnon, ja ilman korjausta varajärjestelmä luokittelisi sen
`AUTH_ERROR`-virheeksi kiintiötapahtuman sijaan.

**Toteutus:**

- Rekisteri + täsmäytin: `open-sse/config/upstreamStatusRestatement.ts` —
  palveluntarjoajakohtainen sääntöluettelo (`{id, fromStatuses, toStatus, textMarkers,
excludeMarkers, defaultRetryAfterMs}`), joka täsmäytetään funktiolla `applyStatusRestatement()`.
- Kutsukohta: `providerFailure:`-lohko tiedostossa `open-sse/handlers/chatCore.ts`
  (noin rivillä 3654), heti sen jälkeen, kun `parseUpstreamError()` on jäsentänyt
  virheellisen HTTP-tilan sisältävän ylävirran vastauksen (`!providerResponse.ok`),
  ja ennen minkään luokittelun suorittamista, jotta jokainen alavirran kuluttaja
  näkee korjatun tilan. `200` SSE -tietovirran sisään upotetut virheet kulkevat
  erillistä, myöhempää tietovirran jäsennyspolkua, eikä tämä koukku **kata** niitä
  tällä hetkellä — kyseessä on tunnettu rajoitus, jota ei vielä tarvita
  agentrouterin virheellisesti ilmoittamaan tilaan (joka ilmenee virheellisenä
  HTTP-tilana).
- Uudelleenyrityksen kelpoisuus: `429` sisältyy joukkoon
  `RETRY_AFTER_ELIGIBLE_STATUSES`
  (`open-sse/services/combo/unavailableRetryGate.ts`), joten uudelleenmääritetty
  virhe sisältää todellisen uudelleenyritysikkunan sen sijaan, että se näkyisi
  käyttökelvottomana `403`-tilana.
- Synteettinen `60s`-arvo `defaultRetryAfterMs` (`upstreamStatusRestatement.ts`)
  kertoo ainoastaan sen, mitä uudelleenmääritetty vastaus ilmoittaa
  **asiakkaalle**; se ei itsessään ole yhteyden sisäisen jäähdytys- tai
  lukitusjakson kesto — sitä hallitsee erikseen mekanismi, joka tosiasiallisesti
  käsittelee uudelleenmääritetyn virheen (yhteyden jäähdytyksen kasvava
  eksponentiaalinen viive, §2, perusarvo `3s` API-avainpohjaisille
  palveluntarjoajille; tai mallin lukitus, §3, agentrouterin kaltaisille
  mallikohtaista kiintiötä käyttäville palveluntarjoajille). Reititin voi tulla
  sisäisesti uudelleenyrityskelpoiseksi aiemmin kuin asiakkaalle ilmoitettu 60s:n
  ikkuna — tämä on tarkoituksellista pelivaraa, ei ohjelmavirhe.

Pysyviä virheitä (agentrouterin `无权访问模型` — ei käyttöoikeutta tähän malliin) ei
KOSKAAN määritellä uudelleen: `excludeMarkers` estää säännön, vaikka
`textMarkers` täsmäisi, joten virhe säilyttää alkuperäisen tilansa eikä mikään yritä
sitä uudelleen loputtomasti. Vastaavaa palveluntarjoajan luokittelusääntöä
(`agentrouter-model-access-denied` tiedostossa `open-sse/config/providerErrorRules.ts`:
`reason: "auth_error"`, `scope: "model"`, ilmoitettu `6h`:n perusjäähdytys)
käyttää `checkFallbackError` (`open-sse/services/accountFallback.ts`)
_ennen_ yleistä apikey-luokan `FORBIDDEN`-varhaispalautusta, ehdollisesti funktion
`honorsRuleLockScope(provider)` perusteella (#10334 — tällä hetkellä vain
agentrouterille sallittu tiedoston `providerErrorRules.ts`
`HONORS_RULE_LOCK_SCOPE_PROVIDERS`-sallittujen luettelon kautta). Säännön ilmoitettu
6h:n jäähdytys välittyy arvona `fallbackResult.baseCooldownMs`, mutta se syötetään
edelleen ennestään olemassa olevaan mallikohtaisen kiintiön lukituspolkuun
(`lockModelIfPerModelQuota()` / `recordModelLockoutFailure()`, jota #10334 ei
muuttanut jäähdytyksen lähdettä lukuun ottamatta): se rajataan alaspäin
operaattorin `mlSettings.maxCooldownMs`-arvoon (oletuksena `1_800_000ms` / 30min)
kuten kaikki muutkin mallilukitukset, ja _tallennettu lukituksen syy_ säilyy
ennestään kovakoodattuna arvona `"forbidden"`, ei säännön arvona `"auth_error"` —
vain jäähdytyksen kesto huomioidaan päästä päähän, ei syymerkkijonoa. Itse yhteys
pysyy aktiivisena; tämä ei vaikuta saman yhteyden rinnakkaisiin malleihin.

Uudelleen ilmaistut kiintiövirheet (`额度不足`) osuvat tuotannossa palveluntarjoajasääntöön
(`agentrouter-user-quota-exhausted`: `reason: "quota_exhausted"`, `scope:
"connection"`, ei omaa määritettyä jäähdytysaikaa — pysyvyyskerroksen
skaalatun viiveen oletusarvoa käytetään). Muutoksesta #10334 lähtien
`ProviderErrorRuleMatch`-objektin `scope` välitetään koko käsittelyketjun läpi,
mutta **vain** `HONORS_RULE_LOCK_SCOPE_PROVIDERS`-sallittujen palveluntarjoajien
osalta (`providerErrorRules.ts` — tällä hetkellä vain `"agentrouter"`,
rajattuna funktion `honorsRuleLockScope()` kautta). Kaikilla muilla
palveluntarjoajilla `scope` on edelleen vain informatiivinen, aivan kuten
ennen muutosta #10334. `checkFallbackError` tuo täsmänneen säännön vaikutusalueen
saataville kentässä `fallbackResult.ruleScope`;
`isAgentrouterConnectionQuotaScope()`
(`src/sse/services/auth.ts`) on yhteinen suojatarkistus, joka vahvistaa, että
`ruleScope` on aidosti turvallista tulkita koko yhteyttä koskevaksi,
itsestään palautuvaksi signaaliksi (vaikutusalue `"connection"`, syy
`quota_exhausted`, ei koskaan `permanent`, ei koskaan `creditsExhausted` —
suoja siltä varalta, että tuleva sääntö yhdistäisi vaikutusalueen
`"connection"` pysyvään tilin tilaan). Sitä kutsuu kaksi kuluttajaa:

- **Pysyvyys** (`markAccountUnavailable()`, `src/sse/services/auth.ts`):
  sen sijaan, että käsittely siirtyisi läpivientipalveluntarjoajan
  **mallikohtaiseen** lukitushaaraan (agentrouter käyttää asetusta
  `passthroughModels: true` → `hasPerModelQuota()` palauttaa arvon `true`),
  se ottaa käyttöön **väliaikaisen yhteyden jäähdytysajan** —
  `testStatus: "unavailable"` + `rateLimitedUntil`, ei koskaan lopullista tilaa
  (`credits_exhausted`/`banned`/`expired`) — joten yhteys palautuu itsestään
  jäähdytysajan päätyttyä eikä edellytä tunnistetietojen manuaalista
  nollaamista. Tämä ohitetaan yhteyksillä, joilla on `disableCooling: true`
  (#2997): kyseinen poiskytkentä siirtää käsittelyn sen sijaan mallikohtaiseen
  lukitukseen (dokumentoitu kompromissi — katso haaran yläpuolella oleva
  koodikommentti).
- **Saman pyynnön yhdistelmäreititys** (`applyComboTargetExhaustion()`,
  `open-sse/services/combo/targetExhaustion.ts`): sama suojatarkistus lisää
  yhteyden muistissa olevaan `exhaustedConnections`-joukkoon avaimella
  `${provider}:${connectionId}`. Tämä ohittaa vain jäljellä olevan SAMAN PYYNNÖN
  kohteen, jolla _itsellään on jo täsmälleen sama `connectionId`_ omassa
  kohdeobjektissaan (`getExhaustedTargetSkipReason()`,
  `open-sse/services/combo/comboPredicates.ts`, `if (provider &&
connectionId)` ennen `exhaustedConnections`-hakua) — pelkkä malliluettelon
  yhdistelmä, jossa rinnakkaiskohteilla ei ole omaa kiinnitettyä
  `connectionId`-arvoa ja sellainen ratkaistaan lähetyskohtaisesti vain
  vastauksen `X-OmniRoute-Selected-Connection-Id`-otsakkeesta, ei koskaan
  täsmää tähän avaimeen. Tässä yleisessä tapauksessa todellinen suoja sitä
  vastaan, että jäljellä oleva vaihe käyttäisi uudelleen juuri loppuun
  kulunutta tiliä, EI ole tämä Set — vaan yllä kuvattu pysyvyyskerros
  (yhteyden `rateLimitedUntil` on nyt tulevaisuudessa) yhdessä sen kanssa,
  että sama suojatarkistus estää arvon `transientRateLimitedProviders`
  asettamisen tälle virheelle (katso ”Kaksivaiheinen rakenne” ja
  `targetExhaustion.ts`-tiedoston `isAgentrouterConnectionQuotaScope`-haaran
  koodikommentti): kun kyseinen Set jätetään merkitsemättä, `combo.ts`-tiedoston
  `allowRateLimitedConnection`-pakko-ohitus
  (`open-sse/services/combo.ts:1005-1013`, `:2734-2738`) EI aktivoidu
  palveluntarjoajan jäljellä oleville vaiheille, joten tunnistetietojen
  valinnan `rateLimitedUntil`-suodatinta (`src/sse/services/auth.ts:1238`)
  noudatetaan normaalisti ja jäljellä oleva vaihe joko valitsee toisen,
  edelleen kelvollisen agentrouter-yhteyden tai epäonnistuu, koska
  tunnistetietoja ei ole saatavilla — se ei pakota itseään takaisin yhteyteen,
  jonka tämä haara juuri asetti jäähdytystilaan.

### Kaksivaiheinen rakenne: tilan uudelleenilmaisu ja sitten luokittelu

Tilan uudelleenilmaisun (`upstreamStatusRestatement.ts`) ja palveluntarjoajan
luokittelusääntöjen (`open-sse/config/providerErrorRules.ts`,
`providerRuleRegistry`) rekisterit ovat erillisiä. Molemmat käyttävät avaimina
palveluntarjoajan tunnusta ja tekstimerkkejä, mutta ne suoritetaan eri paikoissa
ja palvelevat eri tarkoituksia: uudelleenilmaisu kirjoittaa HTTP-tilan uudelleen
varhaisessa vaiheessa tiedostossa `chatCore.ts`; luokittelusäännöt valitsevat
varareitityksen `reason`-arvon ja lukituksen `scope`-arvon
(`model` / `provider` / `connection`) funktion `checkFallbackError()` sisällä
(`open-sse/services/accountFallback.ts`).

Luokittelusäännöt näkevät täydellisen virheen **tekstin** (jota tarvitaan
rungon merkkien, kuten `额度不足`, täsmäyttämiseen) vain
`providerErrorRules.ts`-tiedoston `FULL_TEXT_RULE_PROVIDERS`-sallittujen
palveluntarjoajien osalta — tällä hetkellä vain `"agentrouter"`. Jokaisen muun
**sisäänrakennetun luettelon** palveluntarjoajan kohdalla `checkFallbackError`
välittää funktiolle `getProviderErrorRuleMatch` vain rakenteisen virheen
(`{code, type}`), mikä riittää otsake-, tila- ja koodipohjaisille säännöille,
mutta ei näe rungon tekstimerkkejä. Apufunktio `resolveRuleMatchBody()` tekee
tämän valinnan: täydellinen virheteksti sallituille palveluntarjoajille,
muutoin rakenteinen virhe. **Sisäänrakennetun** palveluntarjoajan lisääminen
joukkoon `FULL_TEXT_RULE_PROVIDERS` on nimenomainen palveluntarjoajakohtainen
käyttöönotto — sen tarkoituksena on varmistaa, että oletuspolku pysyy
tavu tavulta muuttumattomana jokaiselle palveluntarjoajalle, jota luettelossa
ei ole.

Säännön `scope` (`model` / `provider` / `connection`) on erillinen
käyttöönotto verrattuna luetteloon `FULL_TEXT_RULE_PROVIDERS`:
`checkFallbackError` tuo sen saataville vain kentässä
`fallbackResult.ruleScope`, ja myöhemmät kuluttajat käsittelevät sitä muuna
kuin informatiivisena selitteenä vain saman tiedoston
`HONORS_RULE_LOCK_SCOPE_PROVIDERS`-sallittujen palveluntarjoajien osalta
(`gated via honorsRuleLockScope()` — tällä hetkellä vain `"agentrouter"`).
Katso yllä olevasta kohdasta ”Uudelleen ilmaistut kiintiövirheet”, mitä
`scope: "connection"` -täsmäys käytännössä tekee sen jälkeen, kun
palveluntarjoaja on lisätty kyseiseen sallittujen luetteloon.

**#11104 — operaattorin määrittämät säännöt ohittavat molemmat sallittujen luettelot.** Operaattori voi
määrittää palveluntarjoajakohtaisen säännön ajon aikana asetuksella `settings.providerErrorRules`
(`open-sse/config/providerErrorRules.ts::setOperatorProviderErrorRules`)
muokkaamatta tätä tiedostoa. Operaattorin säännön rajaaminen
`FULL_TEXT_RULE_PROVIDERS`-/`HONORS_RULE_LOCK_SCOPE_PROVIDERS`-sallittujen luetteloiden taakse —
joiden tarkoituksena on suojata sisäänrakennettujen katalogisääntöjen **oletusarvoista**
toimintaa — tekisi asetusmekanismista toimimattoman kaikille muille paitsi jo
luetteloissa oleville palveluntarjoajille, koska säännön määrittäminen on jo itsessään operaattorin
nimenomainen hyväksyntä. `resolveRuleMatchBody()` ja `honorsRuleLockScope()` tarkistavat
molemmat ensin `hasOperatorRuleForProvider()`-funktion: operaattorin säännön saanut palveluntarjoaja saa
raakamuotoisen virhetekstin, ja sen määrittämää `scope`-arvoa noudatetaan riippumatta siitä,
esiintyykö palveluntarjoaja lisäksi kummassakaan sallittujen luettelossa.

**Tunnettu puute — `providerRuleRegistry`-rekisteriä ei koskaan käytetä HTTP 400 -virheille.**
`checkFallbackError`-funktion `BAD_REQUEST`-haara luokittelee tilan 400 kokonaan
omien mallitaulukoidensa kautta (`MODEL_ACCESS_DENIED_PATTERNS`,
`CONTEXT_OVERFLOW_PATTERNS` jne. tiedostossa `accountFallback.ts`) ja palauttaa tuloksen ennen kuin
sen yläpuolella oleva `configuredRule`-/`getProviderErrorRuleMatch`-haara saavutetaan.
Sisäänrakennettu katalogisääntö (tai operaattorin sääntö), jonka `status: 400`, on
syntaktisesti kelvollinen, mutta sitä ei koskaan suoriteta. Mikään nykyinen sääntö ei kohdistu tilaan 400,
joten tämä ei vaikuta mihinkään tuotannossa — tuleva 400-sääntö edellyttää kuitenkin ensin
tämän haaran muuttamista, mikä on suurempi muutos kuin säännön lisääminen (se
luokittelee tilan 400 uudelleen jokaiselle palveluntarjoajalle, joka jo käyttää mallitaulukoihin perustuvaa
toimintaa), eikä kuulu yksittäisen palveluntarjoajan säännön lisäämisen laajuuteen.

### Uuden kiintiön väärin ilmoittavan yhdyskäytävän lisääminen

1. Rekisteröi yksi sääntötaulukko rekisteriin `statusRestatementRegistry`
   (`open-sse/config/upstreamStatusRestatement.ts`). Pidä `textMarkers`
   palveluntarjoajakohtaisina; älä koskaan käytä uudelleen yleisiä englanninkielisiä ilmauksia, jotka ovat ristiriidassa
   `CREDITS_EXHAUSTED_SIGNALS`-arvojen kanssa (`open-sse/services/accountFallback.ts`).
2. Rekisteröi halutessasi luokittelusäännöt tiedostossa
   `open-sse/config/providerErrorRules.ts` (`providerRuleRegistry`) oikean
   lukituksen laajuuden valitsemiseksi (`connection` tilikohtaiselle kiintiölle, `model`
   mallikohtaisille virheille). Tämä vaihe vaikuttaa tuotannossa vain niihin
   palveluntarjoajiin, joiden säännöt tarvitsevat koko virhetekstin (rungon merkkijonot): lisää
   palveluntarjoajan tunnus saman tiedoston `FULL_TEXT_RULE_PROVIDERS`-luetteloon — muutoin
   `checkFallbackError` välittää säännölle aina vain jäsennellyn
   `{code, type}`-virheen, eikä rungon tekstiin perustuva sääntö koskaan vastaa tuotantoliikenteessä.
   Säännöt, jotka vastaavat pelkästään `status`-/`headers`-tietojen perusteella (kuten Opencoden tai
   Minimaxin säännöt), eivät tarvitse tätä käyttöönottoa. Jos sääntö lisäksi määrittää
   `scope: "connection"` ja tarkoituksena on varsinainen yhteydenlaajuinen jäähdytysjakso
   sekä saman pyynnön yhdistelmän ohittaminen (ei vain informatiivinen tunniste), lisää
   palveluntarjoajan tunnus saman tiedoston `HONORS_RULE_LOCK_SCOPE_PROVIDERS`-luetteloon — tämä
   rajaa `isAgentrouterConnectionQuotaScope()`-tyylisen käsittelyn käytön funktiossa
   `markAccountUnavailable()` (`src/sse/services/auth.ts`) ja funktiossa
   `applyComboTargetExhaustion()`
   (`open-sse/services/combo/targetExhaustion.ts`); ilman sitä `scope`
   välitetään edelleen `fallbackResult.ruleScope`-arvon kautta, mutta mikään ei reagoi siihen.
3. Lisää yksikkötestit tiedostojen `tests/unit/upstream-status-restatement.test.ts`
   ja `tests/unit/agentrouter-error-rules.test.ts` mallin mukaisesti (mukaan lukien
   not-permanent- / not-creditsExhausted-suojaukset sekä — jos palveluntarjoaja tarvitsee
   sallittujen luetteloa — testi, joka varmistaa `resolveRuleMatchBody()`-funktion palauttavan
   koko tekstin vain kyseiselle palveluntarjoajalle).

Muutoksia tiedostoihin `chatCore.ts`, `classifyError` tai yhdistelmälogiikkaan ei tarvita.

#### Lähtöliikennekohtaisesti ryhmitelty lukitus (#10880)

`EGRESS_BUCKETED_LOCK_PROVIDERS`-luettelon palveluntarjoajia (opencode-perhe) käsitellään
lähtö-IP:n mukaan ryhmiteltyinä ylävirtapalveluina (opencoden ilmaistaso on ryhmitelty IP-osoitteen eikä
tilin mukaan — katso #9611): tilan 429 luokittelu arvoksi `quota_exhausted`
**tai** `rate_limit_exceeded` asettaa jäähdytysjakson jokaiselle sallitun perheen yhteydelle,
jonka viimeksi tunnettu lähtö-IP vastaa epäonnistuneen yhteyden IP-osoitetta, ennen kuin
kierto voi yrittää niitä
— näin vältetään N-1 varmasti epäonnistuvaa ylävirtakutsua (sama rakenne kuin tapauksissa #10460/#10525).
`rate_limit_exceeded` on mukana tarkoituksella: `markAccountUnavailable`-polulla
opencode-kohtaiset säännöt eivät koskaan vastaa (otsakkeita/runkoa ei välitetä
`checkFallbackError`-funktiolle, eikä opencode ole `FULL_TEXT_RULE_PROVIDERS`-luettelossa), joten 429,
jonka runko sisältää tilauskiintiön tekstin ("monthly usage limit
reached"), luokitellaan arvoksi `quota_exhausted` kiintiötekstin varatoiminnon avulla
(`buildSubscriptionQuotaFallback`, `accountFallback.ts`; 1 tunnin jäähdytysjakso) ennen kuin
`status_429`-sääntö edes saavutetaan — kun taas 429 ilman kiintiötekstiä (tavallinen
nopeusrajoitus) luokitellaan `status_429`-säännön kautta arvoksi `rate_limit_exceeded`
ja asettaa silti IP-perheen jäähdytysjaksolle. Sallitun luettelon palveluntarjoajalle IP-kohtainen
nopeusrajoitus on sama signaali kuin loppuun käytetty kiintiö. Tiedossa olevat rajoitteet:

- **Parhaan yrityksen periaate**: lukitus selvittää yhteyden viimeksi tunnetun `egress_ip`-arvon
  `proxy_logs`-taulusta (24 tunnin ikkuna, synkroninen, ei välimuistia). Jos välimuisti on kylmä (lähtevää
  IP-osoitetta ei ole koskaan tarkistettu) tai riviä ei löydy → epäonnistunut yhteys asetetaan silti
  haaran määrittämälle jäähdytysjaksolle (kirjataan kuten nykyään), mutta sisaryhteyttä ei lukita.
- **Ei koskaan lopullinen**: jäähdytysjakso on uusiutuva kiintiöikkuna
  (`testStatus: "unavailable"`); pysyvää tilaa ei koskaan johdeta
  IP-tason signaalista. `disableCooling`-yhteydet ohittavat haaran kokonaan.
- **Lukituksen rakeisuus muuttuu sallittujen palveluntarjoajien perheelle**: tämä on laajuuden
  muutos, ei pelkästään sisaryhteyksiä koskeva optimointi. opencode on `passthroughModels`-
  palveluntarjoaja, joten ennen tätä haaraa 429 tuotti mallikohtaisen lukituksen; nyt se
  tuottaa yhteyden jäähdytysjakson — myös operaattorille, jolla on käytössä vain yksi
  yhteys eikä lainkaan sisaryhteyksiä. Tämä on rakeisuus, jonka opencoden sääntötaulukko
  on jo määrittänyt oikeaksi (`scope: "connection"`,
  `providerErrorRules.ts`), mutta jota ei ole tähän asti noudatettu, koska opencode ei kuulu
  joukkoon `HONORS_RULE_LOCK_SCOPE_PROVIDERS`. Haara kirjoittaa epäonnistuneen
  yhteyden jäähdytysjakson + `backoffLevel`-arvon itse, yhteyskohtaisen
  agentrouter-haaran tapaan, ja palaa — alla olevaan mallikohtaiseen estoon ja
  yleiseen polkuun ei koskaan päädytä.
- **Yhdistelmä mukana**: agentrouter-haaran tavoin laajuus ohittaa tarkoituksella
  `persistUnavailableState`/`isCombo`-lievennyksen, jonka yhdistelmäkutsuja
  soveltaa 429-virheeseen. Mallikohtainen lukitus ei ole tämän laajuuden lievempi
  muoto, vaan väärä yksikkö: se ei kerro mitään kiintiönsä käyttäneestä IP-osoitteesta, joten yhdistelmän
  kierrätys kuluttaisi edelleen yhden varmasti epäonnistuvan kutsun jokaista sisaryhteyttä kohden.
- **Sisaryhteyksien turvallisuus**: sisaryhteyttä, joka on jo lopullisessa tilassa (banned/credits_exhausted)
  tai jo pidemmällä jäähdytysjaksolla, ei koskaan korvata uudella tilalla.
- **Eksklusiivinen sallittujen luettelo**: `EGRESS_BUCKETED_LOCK_PROVIDERS`-joukon laajentaminen on
  nimenomainen omistajan päätös; ei yleistä kytkentää (malli #10334/#10419). Sisaryhteyskysely
  käyttää sidontaan samaa sallittujen luetteloa sen sijaan, että se toistettaisiin SQL-
  literaalina, joten sen laajentaminen säilyy yhden rivin muutoksena.
- **Lähtevän IP-osoitteen kierto kumpaankin suuntaan**: hakuikkuna (24 tuntia) on paljon
  pidempi kuin lähtevän IP-osoitteen välimuistin TTL (5 min), joten ”viimeksi tunnettu IP” on historiatietoa,
  ei nykyinen tila. Jos yhteyden välityspalvelimen IP-osoite on vaihtunut ikkunan aikana,
  lukitus voi **ohittaa** aidosti jaetun IP-osoitteen (tallennettu IP-osoite on uusi,
  eikä sen kiintiötä ole käytetty loppuun) — ja vastaavasti se voi **asettaa jäähdytysjaksolle sisaryhteyden, joka on sittemmin
  siirtynyt pois** kiintiönsä käyttäneestä IP-osoitteesta. Jälkimmäinen tapaus maksaa sisaryhteydelle yhden
  jäähdytysjakson; molemmat hyväksytään historiapohjaisen
  haun parhaan yrityksen periaatteeseen kuuluvina rajoitteina.
- **Kustannus**: kaksi rajattua `proxy_logs`-taulun läpikäyntiä (aikaikkunalla suodatettuina
  `idx_pl_timestamp`-indeksin avulla), vain 429-virheiden esiintymistiheydellä. Ei uutta indeksiä (migraatio 134,
  YAGNI). Mitattu kohtuullisen kokoisella todellisen liikenteen tietokantakopiolla;
  suuren suorituskyvyn instanssi sisältää suhteellisesti enemmän rivejä samassa ikkunassa.

---

## Muut häiriönsieto-ominaisuudet

- **19 reititysstrategiaa** (priority, weighted, round-robin, context-relay, fill-first, p2c, random, least-used, cost-optimized, reset-aware, reset-window, headroom, strict-random, auto, lkgp, context-optimized, cache-optimized, fusion, pipeline) — katso [AUTO-COMBO.md](../routing/AUTO-COMBO.md).
- **Nollausajan huomioiva reititys** (v3.8.0) — priorisoi yhteydet kiintiön nollausajan perusteella.
- **Taustatilan hallittu heikentäminen** — Responses API -asetuksen `background: true` toiminta heikennetään synkroniseksi ja siitä annetaan varoitus.
- **Dynaaminen työkalurajan tunnistus** — vähentää palveluntarjoajien käyttöä, kun työkalumäärän rajat saavutetaan.
- **Hätävarajärjestelmä** — hallitaan muuttujalla `OMNIROUTE_EMERGENCY_FALLBACK`; operaattorit voivat ohittaa sen Feature Flags -sivulla ilman uudelleenkäynnistystä.

---

## Virheenkorjaus

- Kaikki palveluntarjoajan avaimet ohitetaan → tarkista sekä katkaisijan tila ETTÄ kunkin yhteyden `rateLimitedUntil`/`testStatus`.
- Palveluntarjoaja suljetaan pysyvästi pois nollausikkunan jälkeen → koodi lukee raakaa `state`-arvoa eikä käytä `getStatus()`/`canExecute()`-metodia.
- Yksi avain epäonnistuu, mutta muiden pitäisi toimia → suosi yhteyden jäähyaikaa katkaisijan sijaan.
- Vain yksi malli epäonnistuu → suosi mallin lukitusta yhteyden jäähyajan sijaan.
- Tilan pitäisi palautua automaattisesti, mutta näin ei tapahdu → tarkista tulevaisuuteen asetettu aikaleima sekä lukupolku, joka päivittää vanhentuneen tilan. Pysyvät tilat edellyttävät manuaalisia muutoksia.

---

## TLS-sormenjäljet ja häivetekniikat

Palveluntarjoajakohtaiset häivetekniikat (JA3/JA4, CCH, obfuscation) on dokumentoitu erikseen — katso `docs/security/STEALTH_GUIDE.md` (git; ei käännetä osaksi `/docs`-hakemistoa).

---

## Häiriönsietotestaus (vaihe 8 · lohko C)

Häiriönsietologiikan yksikkötestien lisäksi kolme testiä kuormittaa suoritusympäristöä
todellisissa rasitus- ja vikatilanteissa (kaikki ovat integraatio-/yötestejä — mikään niistä ei estä PR:iä):

| Testi         | Mitä                                                                                                                                                                                                                                                          | Suoritus                               |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Kaaos         | Väärennetty upstream-solmu aiheuttaa todellista viivettä, nollauksia, aikakatkaisuja ja 503-virheitä; varmistaa, että katkaisija avautuu ja palautuu sekä että `checkFallbackError` luokittelee 503-virheen palautumiskelpoiseksi varajärjestelmätilanteeksi. | `RUN_CHAOS_INT=1 npm run test:chaos`   |
| Keon kasvu    | ~500 suoratoistoa kutakin `createSSEStream`-kutsua kohden asetuksella `--expose-gc`; epäonnistuu, jos keko kasvaa enimmäisrajan yli (OOM-suojaus #3069).                                                                                                      | `npm run test:heap`                    |
| k6-kestotesti | Jatkuva kuormitus kohteeseen `/api/monitoring/health`; p95-/virhekynnykset.                                                                                                                                                                                   | `k6 run tests/load/k6-soak.js` (yöajo) |

Orkestroinnin hoitaa `.github/workflows/nightly-resilience.yml` (cron + dispatch). Oletusarvoisessa
`test:integration`-ajossa kaaos- ja kekotestit ohittavat itsensä (ilman `RUN_CHAOS_INT`/`--expose-gc`-asetusta).

---

## Katso myös

- [Arkkitehtuuriopas](./ARCHITECTURE.md) — Järjestelmäarkkitehtuuri ja sisäinen toiminta
- [Käyttöopas](../guides/USER_GUIDE.md) — Palveluntarjoajat, yhdistelmät ja CLI-integraatio
- [Automaattinen yhdistelmämoottori](../routing/AUTO-COMBO.md) — 16 tekijän pisteytys ja tilapaketit
