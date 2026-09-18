# Resilience Guide (Hausa)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/RESILIENCE_GUIDE.md) · 🇪🇹 [am](../../../am/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇷 [el](../../../el/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇪 [et](../../../et/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇪 [ga](../../../ga/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/RESILIENCE_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇭 [km](../../../km/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇲 [my](../../../my/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇵 [ne](../../../ne/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [or](../../../or/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇰 [si](../../../si/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇸 [sr](../../../sr/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇿 [uz](../../../uz/docs/architecture/RESILIENCE_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [yo](../../../yo/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/RESILIENCE_GUIDE.md)

---

OmniRoute yana da hanyoyin juriya guda uku masu bambanci amma masu alaƙa. Kowannensu yana da iyaka da manufa daban. Ka ware su yayin gano matsalolin halayen rarraba hanya.

![Tsarin juriya mai matakai 3](../diagrams/exported/resilience-3layers.svg)

> Tushe: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd)

## 1. Mai Katse Da'irar Mai Bayarwa

**Iyaka:** dukkan mai bayarwa (misali, `glm`, `openai`, `anthropic`).

**Manufa:** dakatar da aika zirga-zirga zuwa mai bayarwa da ke ci gaba da gazawa a matakin upstream/sabis.

**Aiwatarwa:**

- Babban class: `src/shared/utils/circuitBreaker.ts`
- Haɗawa: `src/sse/handlers/chatHelpers.ts`, `src/sse/handlers/chat.ts`
- API na matsayi: `GET /api/monitoring/health`
- API na sake saiti: `POST /api/resilience/reset`
- Wrappers: `open-sse/services/accountFallback.ts`
- Teburin DB: `domain_circuit_breakers`

**Matsayi:**

- `CLOSED` — an yarda da zirga-zirga ta yau da kullum
- `DEGRADED` — har yanzu an yarda da zirga-zirga, amma ana bin diddigin ƙaruwar gazawar mai bayarwa
- `OPEN` — an toshe mai bayarwa na ɗan lokaci; rarraba hanyar combo tana tsallake shi
- `HALF_OPEN` — lokacin jira na sake saiti ya ƙare; an yarda da buƙatar gwaji

**Tsoffin ƙimomin da za a iya saita su (`open-sse/config/constants.ts`, waɗanda ake nunawa a Dashboard → Settings → Resilience):**

| Nau'i   | Ya zama DEGRADED a | Ya zama OPEN a | Lokacin jiran sake saiti |
| ------- | ------------------ | -------------- | ------------------------ |
| OAuth   | gazawa 5           | gazawa 8       | 60s                      |
| API-key | gazawa 7           | gazawa 12      | 30s                      |
| Local   | ana samo shi       | gazawa 2       | 15s                      |

`degradationThreshold` yana sarrafa lokacin da mai bayarwa zai shiga `DEGRADED`; `failureThreshold` yana sarrafa lokacin da zai buɗe kuma a tsallake shi. Har yanzu ba a nuna bayanan martabar masu bayarwa na Local a shafin saitunan Resilience ba.

**Lambobin jawo yankewa:** matsayai na matakin mai bayarwa `[408, 500, 502, 503, 504]` kawai. KADA a jawo yankewa saboda kurakuran matakin asusu (yawancin 401/403/429 — waɗannan na tsarin cooldown ko lockout ne).

**Farfadowa lokacin buƙata:** idan lokacin `OPEN` ya ƙare, `getStatus()`, `canExecute()`, `getRetryAfterMs()` suna sabunta matsayin zuwa `HALF_OPEN`. Ba a buƙatar mai ƙidayar lokaci da ke aiki a bango.

---

### Cooldown na Mai Bayarwa na Duniya na Zaɓi (ƙofar taga)

Mataki na huɗu, na **zaɓi** (`PROVIDER_COOLDOWN_ENABLED`, a kashe yake ta tsohuwa), yana adana
bayanan masu bayarwa da ke gazawa a tsakanin buƙatu a cikin
`open-sse/services/providerCooldownTracker.ts`, kuma tsarin tantance maƙasudin combo yana
duba shi domin buƙatun combo masu jere su daina sake bi ta kan mai bayarwar da ya
gaza kwanan nan. Shigarwar matakin mai bayarwa suna bin ƙofar tagar `PROVIDER_PROFILES`:

| Bayanan martaba | yana farawa bayan (`providerFailureThreshold`) | cikin (`providerFailureWindowMs`) | yana hucewa na (`providerCooldownMs`) |
| --------------- | ---------------------------------------------: | --------------------------------: | ------------------------------------: |
| OAuth           |                                           `10` |                           `15min` |                                `5min` |
| API key         |                                           `15` |                           `30min` |                               `10min` |

Idan bai kai ma'aunin ba, **ba** a ɗauki mai bayarwar a matsayin wanda yake cikin cooldown ba; nasara tana share
tagar. Shigarwar matakin haɗi (`provider:connectionId`) kuwa suna ci gaba da amfani da
ja-da-baya mai ƙaruwa na `minRetryCooldownMs → maxRetryCooldownMs`. Ƙimomin maye gurbi:
`OMNIROUTE_PROVIDER_BREAKER_{OAUTH,API_KEY}_{FAILURE_THRESHOLD,FAILURE_WINDOW_MS,COOLDOWN_MS}`.
Kariyar hana komawar matsala: `tests/unit/provider-cooldown-window-gate.test.ts`.

## 2. Lokacin Dakatar da Haɗi

**Iyaka:** haɗin mai samarwa/asusu/maɓalli guda ɗaya.

**Manufa:** tsallake maɓalli mara kyau guda ɗaya yayin da sauran haɗe-haɗen mai samarwa ɗaya suke ci gaba da aiki.

**Aiwatarwa:**

- Sanya a matsayin mara samuwa: `src/sse/services/auth.ts::markAccountUnavailable()`
- Zaɓi: `getProviderCredentials*` a cikin fayil ɗaya
- Lissafin lokacin dakatarwa: `open-sse/services/accountFallback.ts::checkFallbackError()`
- Saituna: `src/lib/resilience/settings.ts`

**Filaye na kowane haɗi:**

- `rateLimitedUntil` — hatimin lokaci har lokacin dakatarwa ya ƙare
- `testStatus: "unavailable"`
- `lastError`, `lastErrorType`, `errorCode`
- `backoffLevel` — ma'aunin jinkirin da ke ƙaruwa ninki-ninki

**Tsoffin lokutan dakatarwa:**

- Tushen OAuth: 5s
- Tushen API-key: 3s
- API-key 429: yana fifita `Retry-After`/taken sake saiti/saƙon sake saiti da ake iya tantancewa daga tushen sama
- Jinkirin sake gwadawa: `baseCooldownMs * 2 ** failureIndex`

**Kariyar hana cunkoson buƙatu lokaci guda:** tana hana gazawa masu faruwa lokaci guda tsawaita lokacin dakatarwa fiye da kima ko ƙara `backoffLevel` sau biyu.

**Yanayin ƙarshe (BA lokutan dakatarwa ba):**

- `banned` — ana saita shi ta hanyar gano kalmar da aka hana / haramcin asusu (duba [BAN_DETECTION](../security/BAN_DETECTION.md))
- `expired` (yana komawa yanayin ƙarshe bayan iyakantattun sake-gwaje — `EXPIRED_RETRY_MAX = 3` tare da jinkirin da ke ƙaruwa ninki-ninki — domin kurakuran OAuth na ɗan lokaci su iya gyaruwa da kansu kafin a kashe asusun na dindindin)
- `credits_exhausted`

Waɗannan suna dawwama har sai bayanan shaidar shiga sun canza ko wani mai gudanarwa ya sake saita su. Kada a maye gurbin yanayin ƙarshe da yanayin dakatarwa na ɗan lokaci.

**Farfadowa yayin buƙata:** idan lokacin `rateLimitedUntil` ya wuce, haɗin zai sake cancantar zaɓi. Bayan amfani mai nasara, `clearAccountError()` yana share duk filayen kuskure.

### Mannewar zama (#7274)

**Iyaka:** zaman abokin ciniki guda ɗaya (taken `X-Session-Id` / `x-codex-session-id` / `x-omniroute-session`) da aka ɗaure da haɗi guda ɗaya, ga **kowane** mai samarwa.

**Manufa:** riƙe wakili mai tattaunawa mai matakai da yawa (Claude Code, aider, wakilai na musamman) a kan asusu ɗaya tsakanin buƙatu, tare da rage asarar mahallin da ke faruwa saboda sauya asusu da maimaitattun 429 na fara-aiki daga sanyi a kan masu samarwa masu yanayin zama na kowane asusu.

**Aiwatarwa:**

- Ƙayyade TTL: `src/sse/services/sessionAffinityPin.ts::resolveSessionAffinityTtlMs()`
- Zaɓi/ƙirƙirar ɗauri: `src/sse/services/sessionAffinityPin.ts::selectSessionAffinityConnection()`
- Ciro take (na gama-gari, ga kowane mai samarwa): `src/sse/services/auth.ts::extractSessionAffinityKey()`
- Teburin ɗauri mai dorewa: `sessionAccountAffinity` (`src/lib/db/sessionAccountAffinity.ts`)
- Saiti: `sessionAffinityTtlMs` (TTL na gama-gari a ms, `0` yana kashe shi) — `src/lib/db/settings.ts`. An sauya masa suna daga `codexSessionAffinityTtlMs` na Codex kaɗai ta ƙaura `124_generic_session_affinity_ttl.sql`, wadda ke ɗauko duk wani TTL na Codex da aka saita a baya a matsayin sabon tsohon ƙima.

Kafin #7274, `resolveSessionAffinityTtlMs()` yana katsewa nan take zuwa `0` ga kowane mai samarwa in ban da `codex`, don haka saitin TTL (da taken zaman) ba su da wani tasiri a ko'ina ba duk da cewa tsarin ɗauri da ciro take sun riga sun kasance masu zaman kansu daga mai samarwa. Gyaran ya cire wannan dawowar da wuri; yanzu TTL yana aiki daidai ga kowane mai samarwa da zarar an saita shi a matakin gama-gari sama da `0`.

Ba a taɓa tura taken mannewar zama guda ukun zuwa tushen sama ba — masu aiwatarwa suna gina nasu taken tushen sama daga tushe maimakon wuce taken abokin ciniki kai tsaye, don haka wannan yana ci gaba da kasancewa ID na dangantaka na ciki kaɗai.

### Keɓantattun hayar haɗin zama da ake sarrafawa

**Iyaka:** abokin cinikin HTTP/zama da ake sarrafawa guda ɗaya mai aiki yana mallakar haɗin OmniRoute guda ɗaya da ya cancanta.

**Manufa:** samar da keɓantacciyar mallakar haɗi mai dorewa ga abokan cinikin da ke buƙatar shingen turawa mai tsauri
tsakanin buƙatu. Wannan ya bambanta da mannewar zama, wanda fifikon ci gaba ne mai sassauci:
haya ta keɓantacciyar mallaka tana adana yanayin zagayowar rayuwa a SQLite, tana tabbatar da keɓantuwar mai-mallaka mai aiki da
haɗi mai aiki a matakin gama-gari, sannan tana ƙin tsohon tsari kafin turawa ga mai samarwa.

Ana kunna wannan fasalin ne da zaɓi ga kowane API key. Dole ne maɓallin da ake sarrafawa ya kasance da iyakar `lease:exclusive` da
jerin `allowedConnections` bayyananne wanda ba fanko ba. Duk wani abokin cinikin HTTP zai iya amfani da maƙurar zagayowar rayuwa; ba a
buƙatar sunan abokin ciniki, user-agent, mai samarwa, hanyar OAuth, ko model. Hayar tana mallakar haɗi,
ba model ba, don haka canjin model yana riƙe ɗaurin muddin haɗin yana ci gaba da
cancanta bisa ƙa'ida. Dokokin model, ƙayyadaddun amfani, lafiya, lokacin dakatarwa, da allowlist na yau da kullum suna ci gaba da kasancewa masu iko kuma za su iya
mayar da wannan tsarin zuwa wani haɗi mai 'yanci da ya cancanta.

Zagayowar rayuwar ita ce `POST /api/v1/session-leases` tare da ayyukan JSON `acquire`, `renew`, da `release`.
Buƙatun inference da ake sarrafawa suna gabatar da ƙimar `X-OmniRoute-Lease-Owner` marar bayyanar ma'ana da kuma ainihin
`X-OmniRoute-Lease-Generation`. Mai mallakar yana amfani da `vlo_` sannan haruffan base64url guda 43; ana adana
hash ɗinsa na SHA-256 kaɗai. Kowane shingen turawa na ƙarshe kuma yana ɗaure ID na API key da aka tabbatar da kuma
ID na haɗi mai aiki. Ana cire taken sarrafa haya daga logs, hotunan buƙatu da aka adana, da
taken masu aiwatarwa na tushen sama.

Idan tsarin turawa na yau da kullum yana da 'yan takarar da ake sarrafawa masu cancanta amma kowane ɗan takara mai 'yanci yana hannun
wata haya mai aiki ta wani daban, OmniRoute yana dawo da HTTP `429`, lambar lease-capacity-unavailable, yanayin
jiran samun gurbi, da iyakantaccen `Retry-After` da aka samo daga lokacin ƙarewa mafi kusa da ya dace.
Rashin cancanta na yau da kullum ba takaddamar haya ba ce kuma yana riƙe ma'anar kuskuren turawa da yake da ita.

Hanyoyin da suke da alaƙa suna ci gaba da kasancewa daban:

- Mamaye zaman OAuth rarrabawa ce mai sassauci ta cikin tsari ga asusun OAuth.
- Semaphores na asusu suna bayar da izinin buƙatu masu gudana lokaci guda kuma suna ƙarewa idan buƙata ta kammala.
- Keɓantattun hayar haɗin zama da ake sarrafawa mallakar zagayowar rayuwa ce mai dorewa tare da shingen tsari.

---

## 3. Kulle Samfuri

**Iyaka:** haɗin provider + connection + model.

**Manufa:** guje wa kashe connection gaba ɗaya alhali model ɗaya ne kawai babu shi ko aka iyakance masa quota.

**Misalai:**

- Providers masu quota na kowane model da ke mayar da 429
- Providers na gida da ke mayar da 404 saboda model ɗaya da ya ɓace
- Gazawar izinin mode/model da ta keɓanta ga provider (misali, modes na Grok)

**Aiwatarwa:** `open-sse/services/accountFallback.ts` — `lockModel()`, `clearModelLock()`, `getAllModelLockouts()`.

### Dashboard na Lokutan Jira na Model (v3.8.0)

UI: Settings → Model Cooldowns (`src/app/(dashboard)/dashboard/settings/components/ModelCooldownsCard.tsx`)

Yana jera lockouts masu aiki tare da: provider, connection, model, dalili, expiresAt. Masu gudanarwa za su iya sake kunna model da hannu daga card ɗin.

**REST API:**

- `GET /api/resilience/model-cooldowns` — jera lockouts masu aiki
- `DELETE /api/resilience/model-cooldowns` — sake kunnawa da hannu. Body: `{provider, connection, model}`. Auth: management.

### UI na saitunan lockout + farfaɗowa ta success-decay (v3.8.23)

Model lockout ya sauya daga halayya mai hardcoded wadda take aiki koyaushe zuwa fasali mai cikakken daidaitawa,
wanda sai an zaɓi kunna shi, mai card na saitunansa da kuma hanyar farfaɗowa mai gyara kanta.

**Card na saituna:** Settings → Model Lockout
(`src/app/(dashboard)/dashboard/settings/components/ModelLockoutCard.tsx`).
Wannan ya **bambanta** da `ModelCooldownsCard` mai read-only da ke sama (wanda kawai
ke _jera_ lockouts masu aiki) — sabon card ɗin yana _daidaita sigogin_. Tsoffin ƙimomi
suna cikin `DEFAULT_MODEL_LOCKOUT_SETTINGS`
(`src/lib/resilience/modelLockoutSettings.ts`):

| Saiti                   | Tsohuwar ƙima                    | Ma'ana                                                                    |
| ----------------------- | -------------------------------- | ------------------------------------------------------------------------- |
| `enabled`               | `false`                          | Babban maɓallin kunnawa — model lockout yana **a kashe a tsohuwar ƙima**. |
| `errorCodes`            | `[403, 404, 429, 502, 503, 504]` | Upstream statuses waɗanda ake ƙirga a matsayin gazawa da ta shafi model.  |
| `baseCooldownMs`        | `120_000` (120 s)                | Tsawon lockout na farko don gazawar farko.                                |
| `maxCooldownMs`         | `1_800_000` (30 min)             | Iyakar lokacin jira bayan an ƙara shi.                                    |
| `maxBackoffSteps`       | `10`                             | Matsakaicin matakan ƙaruwar exponential-backoff.                          |
| `useExponentialBackoff` | `true`                           | Ko gazawa mai maimaituwa za ta ƙara lokacin jira ta hanyar exponential.   |

Ana adana saituna ta hanyar settings store na yau da kullum kuma ana tantance su ta
resilience settings schema; card ɗin yana taƙaita `baseCooldownMs`/`maxCooldownMs`
(tare da `maxCooldownMs ≥ baseCooldownMs`) da `maxBackoffSteps`.

**Farfaɗowa ta success-decay:** farfaɗowa **ba** ƙarewar timer kaɗai ba ce. Response mai lafiya
yana rage adadin gazawar model a hankali, ta yadda model da ya farfaɗo
a tsakiyar window zai daina ƙaruwa (kuma a cire lockout ɗinsa) kafin timer ɗinsa ya ƙare. Idan combo target
ya yi nasara, `open-sse/services/combo.ts` yana kiran `decayModelFailureCount()`
(`open-sse/services/accountFallback.ts`), wanda ke **raba** `failureCount` da aka adana
zuwa rabi (`Math.floor(failureCount / 2)`); idan ya kai `0`, ana goge lockout
entry ɗin gaba ɗaya. Takwaransa `recordModelLockoutFailure()`
yana ƙara count ɗin (kuma yana ƙara lokacin jira) idan an samu gazawa a cikin
escalation window. Wannan success-decay ƙari ne ga ƙarewar timer ta yau da kullum —
kowace hanya na iya sake kunna model.

**State:** ana riƙe lockouts **a cikin memory** (`Map`s na kowane process na
`ModelLockoutEntry` waɗanda `provider:connectionId:model` ya zama key ɗinsu), ba a adana su a
DB — ana rasa su idan an restart. Ana adana _settings_; amma
_state_ na lockout mai aiki na wucin gadi ne.

---

## 4. Sarrafa Buƙatun Lokaci Guda na Quota-Share (v3.8.36)

Asusun biyan kuɗi (GLM, MiniMax, da sauransu) sau da yawa suna karɓar buƙatu na lokaci guda kusan ~1–3 kawai; wuce wannan adadin yana haifar da kurakuran 429 da lokutan dakatawa. Wannan matsalar ta fi tsanani a haɗin **quota-share** (`qtSd/…`), inda maɓallan API da yawa suke amfani da asusun upstream guda ɗaya tare. Matakai uku suna hana a cika asusun da ake rabawa da buƙatu fiye da kima.

### Iyakar buƙatun lokaci guda ga kowace haɗi (`max_concurrent`)

Kowace haɗin mai samarwa na iya bayyana iyakar `max_concurrent`
(`provider_connections.max_concurrent`, ana saita ta a taga haɗi / API / DB).
Bar ta babu komai idan ba a son iyaka. Wannan shi ne saitin guda ɗaya da ke tafiyar da matakin jera buƙatu da ke ƙasa — saita shi zuwa ainihin ƙarfin buƙatun lokaci guda na asusun (misali GLM ~1, MiniMax ~2).

### Jera buƙatun quota-share

Lokacin da aikawa ta quota-share ta nufi haɗin da ya bayyana ƙimar
`max_concurrent` mai kyau, ana jera buƙatun lokaci guda zuwa wannan **asusun** ta hanyar semaphore na kowace haɗi (maɓalli `qsconn:<connectionId>`): buƙatun da suka wuce iyaka suna **jira a cikin layi** maimakon su cika asusun. Tsarin **fail-open** ne — idan layin ya cika ko lokaci ya ƙare, za a ci gaba ba tare da slot ba maimakon a taɓa ƙin buƙatar da za a iya aikawa. Ana kunna ko kashe shi a **Settings → Resilience → Quota-share per-connection concurrency** (`resilienceSettings.quotaShareConcurrencyLimit.enabled`, a kunne ta tsohuwa). Idan babu iyakar `max_concurrent`, halayen ba sa canzawa.

> Ƙofar zaɓin hanya ta quota-share (`selectQuotaShareTarget`, DRR + P2C) ita ma
> **fail-open** ce kuma kawai tana _rage fifikon_ haɗin da ya kai iyaka — idan
> pool ɗin yana da haɗi guda ɗaya, ba za ta iya tilasta iyakar kai tsaye ba, don haka wannan semaphore ne a zahiri yake
> hana ambaliyar buƙatu.

### Sake gwadawa mai la'akari da lokacin dakatarwar combo

Ga kowace dabarar combo (idan an kunna ta), buƙatar da za ta tabbatar da 429
saboda ɗan gajeren lokacin dakatarwa na wucin gadi za ta jira ya ƙare sannan a sake aika ta maimakon
mayar da 429 — wannan ya ƙunshi tagogin TPM/RPM irin na Gemini (~60s retry-after)
a combo masu model da yawa, misali idan duk wuraren da ake nufi na combo mai model 2 sun ci karo da
iyakar ƙimar buƙatu ta kowane model. `comboCooldownWait` ne ke iyakance shi (`enabled`, `maxWaitMs`, `maxAttempts`,
`budgetMs`) a **Settings → Resilience**. Ba ya taɓa jira kan `quota_exhausted`
(an kulle har zuwa tsakar dare) ko dalilan auth/not-found.

---

## 5. Sarrafa Karɓar Buƙatu Cikin Layi (v3.8.49 · issue #6593)

**Iyakar aiki**: layin iyakance ƙimar buƙatu na gida ga kowane mai samarwa+haɗi (`open-sse/services/rateLimitManager.ts`,
wanda Bottleneck ke tallafawa), mataki ɗaya ƙasa da hanyoyi ukun da ke sama.

**`maxWaitMs` tsohon suna ne da aka adana don ƙarewar lokacin aiwatarwa.**
Ana aika `resilienceSettings.requestQueue.maxWaitMs` zuwa Bottleneck a matsayin
`expiration` na job, wanda mai ƙidayar lokacinsa yake farawa ne kawai bayan an aika buƙatar. Saboda haka, yana iyakance
aiwatarwar da limiter ke sarrafawa, ba lokacin da aka shafe ana jira a layin gida ba. Ana
bayyana ƙarewar lokaci a matsayin amintaccen `code: "RATE_LIMIT_EXECUTION_TIMEOUT"` na gida (HTTP 504);
ana karɓar tsohon sunan lambar ƙarewar lokacin layi ne kawai don amintaccen
dacewar baya ta cikin gida. Tsohuwar ƙima ita ce 15000ms; ana iya maye gurbinta ta
`RATE_LIMIT_MAX_WAIT_MS` (env) ko dashboard (**Settings → Resilience**,
iyakar UI 1–30000ms). Zama a layi ba shi da wa’adin lokaci; yi amfani da
`maxQueueDepth` da ke ƙasa don iyakance masu kira da ke jira.

**`maxQueueDepth` — iyakar karɓa ta zaɓi (sabuwa).** `resilienceSettings.requestQueue.maxQueueDepth`
yana iyakance yawan buƙatun da za su iya zama a layi (ba a aika su ba tukuna) ga
mai samarwa+haɗi guda ɗaya a lokaci guda. Idan layin ya riga ya ƙunshi buƙatu
`maxQueueDepth`, za a ƙi sabuwar buƙata nan take tare da kuskure mai nau’in
`code: "RATE_LIMIT_QUEUE_FULL"` **kafin** ta taɓa isa ga `limiter.schedule()`
— don haka ƙin yana da sauƙin kuɗin sarrafawa kuma yana faruwa kafin duk wani aikin
matse prompt / fassara na downstream ga wannan buƙatar. Tsohuwar ƙima `0` =
a kashe, wanda ke kiyaye halin layi mara iyaka da ake da shi; iyaka 0–100000.
Ana iya maye gurbinta ta `RATE_LIMIT_MAX_QUEUE_DEPTH` (env) ko
`resilienceSettings.requestQueue.maxQueueDepth` (gyaran dashboard/API).

Binciken karɓar kansa pure function ne
(`open-sse/services/rateLimitManager/admission.ts::checkQueueAdmission`) don haka
ana iya yi masa unit test ba tare da ainihin limiter na Bottleneck ba.

> RFC da ya buɗe #6593 ya kuma ba da shawarar flag na `bypassCompressionOnRateLimit`.
> Pipeline na `open-sse/services/compression/` na wannan repo yana yin
> matse prompt/context kan buƙatar LLM mai fita (`chatCore.ts`,
> a kusa da block na `resolveCompressionSettings`/`selectCompressionStrategy`),
> ba matse martanin HTTP kan jikin 429 da aka ƙirƙira ba — babu
> madaidaicin hanyar code don flag na bypass kai tsaye. Wannan matakin matse prompt
> a halin yanzu kuma yana gudana _kafin_ `withRateLimit()` a cikin pipeline na buƙata, don haka
> sake tsara shi domin tsallake shi idan an ƙi buƙata saboda layi ya cika wani sauyi ne daban kuma mafi girma
> fiye da iyakar aikin wannan issue; da gangan **ba a** aiwatar da shi
> a nan ba, kuma an bar shi a matsayin aikin gaba idan ribar rage amfani da CPU ta cancanci
> haɗarin sake tsara tsarin.

---

## 6. Mai sa ido kan yawan fitarwar rafi mai jinkiri (#9709)

Kariyar zaɓi ta `resilienceSettings.streamRecovery.throughputWatchdog` tana gano
tushen sama da har yanzu yake aika gutsattsari amma yake samar da fitowar mataimaki ƙasa da
ƙimar fitowa mai amfani da aka saita. An ware ta da gangan daga wa'adin rashin aiki:
sakon bugun zuciya da metadata ba sa sake saita kowane lokaci kuma ba a ƙirga su a matsayin ci gaba. Haka kuma
ta bambanta da wa'adin ƙarshe mai tsauri na yunƙuri (#9153), wanda yake ci gaba da zama cikakken
iyakar tsaro ba tare da la'akari da ingancin fitowa ba.

Mai sa idon yana buƙatar lokacin dumama sannan cikakkiyar taga mai mirgina kafin
ya iya katsewa. Yana ƙirga bambance-bambancen rubutu daga abubuwan fitowar Chat Completions da Responses API
(wani kiyasin bytes na UTF-8 mai taka-tsantsan), yana yin watsi da abubuwan da suke ɗauke da usage kawai da marasa komai, kuma
yana dakatar da yanke hukunci yayin da abubuwan kiran kayan aiki ko reasoning suke gudana. A kashe yake
ta tsohuwa kuma ana iya kunna shi da `STREAM_THROUGHPUT_WATCHDOG_ENABLED=true`; ana iyakance
taga, dumama, mafi ƙarancin ƙima, da mafi ƙarancin fitowar da za a iya aunawa ta
matakin daidaita saitunan juriya na yau da kullum.

Idan an kunna shi, ana amfani da katsewar mai sa ido ne kawai ga yunƙurin tushen sama da ke aiki. Kafin
duk wani bytes da abokin ciniki zai iya gani, hanyar dawo da wuri ta asusu ɗaya da ake da ita za ta iya sake buɗe
yunƙurin. Bayan commit, ba a sake kunna rafin kai tsaye ba; yarjejeniyar ci gaba
mai aminci a tsakiyar rafi da ake da ita ce kaɗai za ta iya haɗa kari. Kammalawa tana ci gaba da zama
sau ɗaya tak, don haka ba a maimaita lissafin usage da sakin semaphore.

---

## 7. Sake Bayyana Matsayin Tushen Sama (kurakuran quota da aka bayyana ba daidai ba)

**Iyaka:** ƙofar tushen sama guda ɗaya da ke bayar da rahoton ƙarewar quota na ɗan lokaci da matsayin HTTP mara daidai.

**Manufa:** gyara matsayi mai ruɗarwa KAFIN rarrabewa, domin masu amfani na ƙasa (fallback engine, combo aggregation, amsar da abokin ciniki ke gani) su ga ainihin yanayin gazawar da za a iya sake gwadawa.

Wasu ƙofofi suna nuna ƙarewar quota na ƊAN LOKACI da matsayin HTTP
wanda ba za a sake gwadawa ba. `agentrouter.org` yana mayar da `403` (wani lokaci `400`) tare da saƙon Sinanci
(`用户额度不足` / `额度不足`) maimakon daidaitaccen `429`. Abokan ciniki kamar Claude
Code suna ɗaukar `403` a matsayin na dindindin kuma su katse zaman, kuma ba tare da gyara ba
fallback engine zai rarraba shi a matsayin `AUTH_ERROR` maimakon aukuwar quota.

**Aiwatarwa:**

- Rijista + mai daidaitawa: `open-sse/config/upstreamStatusRestatement.ts` — jerin
  ƙa'idoji na kowane provider (`{id, fromStatuses, toStatus, textMarkers,
excludeMarkers, defaultRetryAfterMs}`), waɗanda ake daidaitawa ta `applyStatusRestatement()`.
- Wurin kira: ɓangaren `providerFailure:` a cikin `open-sse/handlers/chatCore.ts`
  (kusa da layi na 3654), nan da nan bayan `parseUpstreamError()` ya fassara amsar tushen sama
  mai matsayin HTTP na kuskure (`!providerResponse.ok`), kuma kafin a gudanar da kowace
  rarrabewa, domin kowane mai amfani na ƙasa ya ga matsayin da aka gyara.
  Kurakuran da aka saka cikin rafin SSE mai `200` suna bin wata hanya ta daban,
  ta fassara rafi daga baya kuma **ba** wannan hook ɗin ne yake rufe su a yau ba — wannan
  sanannen iyakancewa ne, kuma har yanzu ba a buƙace shi don kuskuren matsayin agentrouter ba (wanda
  yake bayyana a matsayin matsayin HTTP na kuskure).
- Cancantar sake gwadawa: `429` yana cikin `RETRY_AFTER_ELIGIBLE_STATUSES`
  (`open-sse/services/combo/unavailableRetryGate.ts`), don haka kuskuren da aka sake bayyana
  yana ɗauke da ainihin tagar sake gwadawa maimakon bayyana a matsayin mataccen `403`.
- `60s` na wucin gadi na `defaultRetryAfterMs` (`upstreamStatusRestatement.ts`)
  shi ne kawai abin da amsar da aka sake bayyana take gaya wa **abokin ciniki**; ba shi ne kansa
  tsawon lokacin cooldown/lockout na cikin haɗin ba — ana sarrafa wannan
  dabam ta duk wata hanyar da a zahiri take kula da kuskuren da aka sake bayyana
  (ƙarin backoff na Connection Cooldown, §2, tushe `3s` ga providers masu API-key;
  ko Model Lockout, §3, ga providers masu quota na kowane model kamar
  agentrouter). Router zai iya sake cancantar gwadawa a ciki da wuri
  fiye da tagar 60s da yake sanar da abokin ciniki — sarari ne na gangan,
  ba bug ba.

Kurakuran dindindin (`无权访问模型` na agentrouter — babu izinin shiga wannan model) ba a
SAKE bayyana su HAR ABADA: `excludeMarkers` yana ƙin amincewa da ƙa'idar ko da `textMarkers` ya dace,
don haka kuskuren yana riƙe matsayinsa na asali kuma babu abin da zai ci gaba da sake gwada shi har abada.
Ƙa'idar rarraba provider da ta dace
(`agentrouter-model-access-denied` a cikin `open-sse/config/providerErrorRules.ts`:
`reason: "auth_error"`, `scope: "model"`, cooldown na tushe da aka ayyana na `6h`) ana
duba ta wajen `checkFallbackError` (`open-sse/services/accountFallback.ts`)
_kafin_ komawar wuri ta nau'in apikey ta gama-gari ta `FORBIDDEN`, bisa sharadin
`honorsRuleLockScope(provider)` (#10334 — a yanzu ta keɓanta ga agentrouter ta
jerin izini na `HONORS_RULE_LOCK_SCOPE_PROVIDERS` a cikin
`providerErrorRules.ts`). Cooldown na 6h da ƙa'idar ta ayyana yana wucewa a matsayin
`fallbackResult.baseCooldownMs`, amma har yanzu yana shiga hanyar lockout ta
quota na kowane model da ta riga ta kasance (`lockModelIfPerModelQuota()` /
`recordModelLockoutFailure()`, wanda #10334 bai canza ba sai tushen cooldown):
ana takaita shi zuwa `mlSettings.maxCooldownMs` na mai gudanarwa
(tsoho `1_800_000ms` / 30min), kamar kowane lockout na model, kuma
_dalilin lockout da aka adana_ yana ci gaba da zama `"forbidden"` da aka riga aka hardcode,
ba `"auth_error"` na ƙa'idar ba — tsawon lokacin cooldown kaɗai ake girmamawa
daga farko zuwa ƙarshe, ba rubutun dalilin ba. Haɗin kansa yana ci gaba da aiki;
sauran models a kan wannan haɗin ba su shafa ba.

Kurakuran ƙa’ida da aka sake bayyana (`额度不足`) suna dacewa da wata ƙa’idar mai bayarwa a yanayin samarwa
(`agentrouter-user-quota-exhausted`: `reason: "quota_exhausted"`, `scope:
"connection"`, ba ta ayyana wani lokacin jiran sake gwadawa na kanta ba — ana amfani da
tsohon ƙimar scaled backoff ta matakin adanawa). Tun daga #10334, `scope` a kan
`ProviderErrorRuleMatch` ANA amfani da shi daga farko har ƙarshe, amma **kawai** ga masu bayarwa da ke cikin
jerin izini na `HONORS_RULE_LOCK_SCOPE_PROVIDERS` (`providerErrorRules.ts` —
a yau `"agentrouter"` kawai, wanda aka killace ta `honorsRuleLockScope()`). Ga kowane
mai bayarwa dabam, `scope` ya ci gaba da zama na bayani kawai, daidai kamar yadda yake kafin #10334.
`checkFallbackError` yana bayyana scope na ƙa’idar da ta dace a matsayin
`fallbackResult.ruleScope`; `isAgentrouterConnectionQuotaScope()`
(`src/sse/services/auth.ts`) shi ne kariyar gama-gari da ke tabbatar da cewa
`ruleScope` yana da aminci da gaske a mutunta shi a matsayin sigina mai shafar haɗin gaba ɗaya, wanda zai murmure da kansa
(scope `"connection"`, reason `quota_exhausted`, ba zai taɓa zama `permanent` ba,
ba zai taɓa zama `creditsExhausted` ba — kariya daga wata ƙa’ida ta gaba da za ta haɗa scope
`"connection"` da yanayin asusu na dindindin). Masu amfani guda biyu suna kiran sa:

- **Adanawa** (`markAccountUnavailable()`, `src/sse/services/auth.ts`):
  maimakon shiga reshen kullewar **kowane model dabam** na mai bayarwa mai wucewa kai tsaye
  (agentrouter yana da `passthroughModels: true` → `hasPerModelQuota()`
  yana dawo da `true`), yana amfani da **lokacin dakatar da haɗi na wucin gadi** —
  `testStatus: "unavailable"` + `rateLimitedUntil`, ba tare da wani matsayi na ƙarshe ba
  (`credits_exhausted`/`banned`/`expired`) — don haka haɗin zai murmure
  da kansa da zarar lokacin dakatarwar ya ƙare, maimakon buƙatar sake saita bayanan shaidar shiga da hannu.
  Ana tsallake wannan ga haɗe-haɗen da ke da `disableCooling: true` (#2997): wannan ficewar
  tana barin tsarin ya wuce zuwa kullewar kowane model dabam maimakon haka (wani sasanci da aka rubuta —
  duba sharhin lambar da ke sama da reshen).
- **Juyar da combo a cikin buƙata guda** (`applyComboTargetExhaustion()`,
  `open-sse/services/combo/targetExhaustion.ts`): wannan kariyar guda tana sanya
  haɗin cikin saitin `exhaustedConnections` na cikin ƙwaƙwalwa, wanda aka yi masa maɓalli da
  `${provider}:${connectionId}`. Wannan yana tsallake ne kawai wata manufa ta SAME-REQUEST da ta rage
  wadda _ita kanta ta riga ta ƙunshi ainihin wannan `connectionId`_ a kan abin manufa nata
  (`getExhaustedTargetSkipReason()`,
  `open-sse/services/combo/comboPredicates.ts`, `if (provider &&
connectionId)` kafin binciken `exhaustedConnections`) — combo na jerin
  model kawai, inda manufofin ‘yan’uwa ba su ƙunshi wani `connectionId` da aka ɗaure na
  kansu ba, kuma ana tantance ɗaya ne kawai a kowace aikawa daga header ɗin
  `X-OmniRoute-Selected-Connection-Id` na amsar, ba zai taɓa dacewa da wannan maɓallin ba. Ga
  wannan yanayi na yau da kullum, ainihin kariyar da ke hana wani sashe da ya rage sake amfani da
  asusun da ya ƙare yanzu BA wannan Set ba ne — matakin adanawa na sama ne
  (`rateLimitedUntil` na haɗin yanzu yana nan gaba) haɗe da
  wannan kariyar guda da ke hana `transientRateLimitedProviders` don
  gazawar (duba "Tsari mai matakai biyu" da sharhin lambar da ke kan
  reshen `isAgentrouterConnectionQuotaScope` a cikin `targetExhaustion.ts`): da yake
  ba a yi wa wannan Set alama ba, tilasta izinin `allowRateLimitedConnection` na `combo.ts`
  (`open-sse/services/combo.ts:1005-1013`, `:2734-2738`) BA ya fara aiki ga
  sauran sassan mai bayarwar, don haka ana mutunta tacewar `rateLimitedUntil` ta zaɓen
  bayanan shaidar shiga (`src/sse/services/auth.ts:1238`) yadda aka saba, kuma
  wani sashe da ya rage ko dai ya zaɓi wani haɗin agentrouter dabam wanda har yanzu ya cancanta,
  ko kuma ya gaza saboda babu bayanan shaidar shiga da ake da su — ba ya tilasta
  komawa kan haɗin da wannan reshen ya sa a lokacin dakatarwa yanzu.

### Tsari mai matakai biyu: sake bayyana matsayi, sannan rarrabewa

Sake bayyana matsayi (`upstreamStatusRestatement.ts`) da ƙa’idojin
rarrabewar mai bayarwa (`open-sse/config/providerErrorRules.ts`,
`providerRuleRegistry`) rajistoci ne daban-daban waɗanda dukkansu ke amfani da id na mai bayarwa
da alamomin rubutu a matsayin maɓalli, amma suna aiki a wurare daban-daban kuma suna da
manufofi daban-daban: sake bayyanawa yana sake rubuta matsayin HTTP tun da wuri a cikin `chatCore.ts`;
ƙa’idojin rarrabewa suna zaɓar `reason` na fallback da scope na kullewa
(`model` / `provider` / `connection`) a cikin `checkFallbackError()`
(`open-sse/services/accountFallback.ts`).

Ƙa’idojin rarrabewa suna ganin cikakken **rubutun** kuskure ne kawai (wanda ake buƙata don dacewa da
alamomin body kamar `额度不足`) ga masu bayarwa da aka jera a jerin izini na `FULL_TEXT_RULE_PROVIDERS`
a cikin `providerErrorRules.ts` — a halin yanzu `"agentrouter"` kawai. Ga
duk wani mai bayarwa na **built-in catalog** dabam, `checkFallbackError` yana ba
`getProviderErrorRuleMatch` kuskuren da aka tsara kawai (`{code, type}`), wanda
ya isa ga ƙa’idojin da suka dogara da header/status/code amma ba ya iya ganin alamomin rubutun body.
Mataimakin `resolveRuleMatchBody()` yana yin wannan zaɓen: cikakken rubutun kuskure
ga masu bayarwa da ke cikin jerin izini, kuskuren da aka tsara kuwa ga sauran. Ƙara
wani mai bayarwa na **built-in** zuwa `FULL_TEXT_RULE_PROVIDERS` zaɓin shiga ne na takamaiman mai bayarwa
a bayyane — yana nan ne domin hanyar tsoho ga kowane mai bayarwa da ba ya cikin
jerin ta ci gaba da kasancewa ba tare da wani canjin byte ko ɗaya ba.

`scope` na wata ƙa’ida (`model` / `provider` / `connection`) wani zaɓin shiga ne dabam
da `FULL_TEXT_RULE_PROVIDERS`: `checkFallbackError` yana bayyana shi ne kawai a matsayin
`fallbackResult.ruleScope`, kuma masu amfani na gaba suna mutunta shi a matsayin
wani abu fiye da alamar bayani ne kawai ga masu bayarwa da ke cikin
jerin izini na `HONORS_RULE_LOCK_SCOPE_PROVIDERS` a wannan fayil ɗin (`gated via
honorsRuleLockScope()` — a yau `"agentrouter"` kawai). Duba "Kurakuran ƙa’ida
da aka sake bayyana" a sama don fahimtar abin da dacewar `scope: "connection"` ke yi a zahiri da zarar
mai bayarwa yana cikin wannan jerin izinin.

**#11104 — ƙa'idodin da operator ya ayyana suna tsallake allowlists biyun.** Operator zai iya
ayyana ƙa'ida ta musamman ga kowane provider a lokacin aiki ta hanyar `settings.providerErrorRules`
(`open-sse/config/providerErrorRules.ts::setOperatorProviderErrorRules`)
ba tare da gyara wannan fayil ba. Sanya ƙa'idar operator a ƙarƙashin ikon
`FULL_TEXT_RULE_PROVIDERS`/`HONORS_RULE_LOCK_SCOPE_PROVIDERS` — allowlists
da aka tsara don kare halayyar **tsoho** ta ƙa'idodin catalog da aka gina a ciki — zai
sa tsarin settings ya zama marar tasiri ga kowane provider ban da waɗanda aka riga aka
jera a wurin, domin ayyana ƙa'idar da kansa ya riga ya zama bayyanannen
opt-in na operator. `resolveRuleMatchBody()` da `honorsRuleLockScope()` duka suna fara duba
`hasOperatorRuleForProvider()`: provider mai ƙa'idar operator yana samun
ainihin rubutun kuskure kuma ana mutunta `scope` da ya ayyana, ba tare da la'akari da
ko ya bayyana a ɗaya daga cikin allowlists ɗin ba.

**Gibin da aka sani — ba a taɓa tuntuɓar `providerRuleRegistry` don HTTP 400 ba.**
Reshen `BAD_REQUEST` na `checkFallbackError` yana rarraba status 400 gaba ɗaya
ta hanyar jerin patterns nasa (`MODEL_ACCESS_DENIED_PATTERNS`,
`CONTEXT_OVERFLOW_PATTERNS`, da sauransu a cikin `accountFallback.ts`) kuma yana dawowa kafin
a isa reshen `configuredRule`/`getProviderErrorRuleMatch` da ke samansa.
Ƙa'idar catalog da aka gina a ciki (ko ƙa'idar operator) mai `status: 400`
tana da ingantaccen syntax amma ba za ta taɓa aiki ba. Babu wata ƙa'ida da ke nufin 400 a yau,
don haka babu abin da wannan ya shafa a production — amma ƙa'idar 400 ta gaba tana buƙatar
a fara gyara wannan reshe, wanda canji ne mafi girma fiye da ƙara ƙa'ida (yana
sake rarraba 400 ga kowane provider da ya riga ya dogara da halayyar
pattern-array) kuma ya fita daga iyakar ƙarin ƙa'ida ga provider guda.

### Ƙara sabon gateway da ke bayyana quota ba daidai ba

1. Yi rajistar rule array guda ɗaya a cikin `statusRestatementRegistry`
   (`open-sse/config/upstreamStatusRestatement.ts`). Ka tabbatar `textMarkers`
   sun keɓanta ga provider; kada a sake amfani da jimlolin Turanci na gama-gari da ke karo da
   `CREDITS_EXHAUSTED_SIGNALS` (`open-sse/services/accountFallback.ts`).
2. Idan ana so, yi rajistar ƙa'idodin classification a cikin
   `open-sse/config/providerErrorRules.ts` (`providerRuleRegistry`) don zaɓar
   lock scope da ya dace (`connection` don quota na duk account, `model` don
   kurakurai na kowane model). Wannan matakin yana aiki a production ne kawai ga
   providers waɗanda ƙa'idodinsu ke buƙatar cikakken rubutun kuskure (body markers): ƙara
   provider id zuwa `FULL_TEXT_RULE_PROVIDERS` a cikin wannan fayil ɗin — in ba haka ba
   `checkFallbackError` zai miƙa wa ƙa'idar structured
   `{code, type}` error kawai, kuma ƙa'idar body-text ba za ta taɓa dacewa da live traffic ba.
   Ƙa'idodin da ke dacewa bisa `status`/`headers` kawai (kamar na Opencode ko
   na Minimax) ba sa buƙatar wannan opt-in. Haka kuma, idan ƙa'idar ta ayyana
   `scope: "connection"` kuma manufar ita ce ainihin cooldown na duk connection
   tare da tsallake combo a request ɗin nan take (ba wai informational label kawai ba), ƙara
   provider id zuwa `HONORS_RULE_LOCK_SCOPE_PROVIDERS` a cikin wannan fayil ɗin — wannan
   shi ne ke ba da izinin amfani irin na `isAgentrouterConnectionQuotaScope()` a cikin
   `markAccountUnavailable()` (`src/sse/services/auth.ts`) da
   `applyComboTargetExhaustion()`
   (`open-sse/services/combo/targetExhaustion.ts`); idan babu shi, `scope`
   har yanzu yana wucewa ta `fallbackResult.ruleScope` amma babu abin da ke aiki da shi.
3. Ƙara unit tests masu kwaikwayon `tests/unit/upstream-status-restatement.test.ts`
   da `tests/unit/agentrouter-error-rules.test.ts` (ciki har da
   matakan kariya na not-permanent / not-creditsExhausted, da — idan provider yana buƙatar
   allowlist — test da ke tabbatar da cewa `resolveRuleMatchBody()` yana dawo da
   cikakken rubutu ga wannan provider kawai).

Ba a buƙatar canje-canje ga `chatCore.ts`, `classifyError`, ko combo.

#### Lock da aka rarraba bisa egress (#10880)

Providers da ke cikin `EGRESS_BUCKETED_LOCK_PROVIDERS` (iyalan opencode) ana ɗaukarsu
a matsayin upstream da aka rarraba bisa IP (free tier na opencode an rarraba shi bisa IP ne, ba
bisa account ba — duba #9611): status-429 da aka rarraba a matsayin `quota_exhausted`
**ko** `rate_limit_exceeded` yana sanya cooldown ga kowane connection na iyalin da ke allowlist
wanda egress IP ɗinsa na ƙarshe da aka sani ya dace da na connection da ya gaza, kafin
rotation ya iya gwada su
— don kauce wa kiran upstream guda N-1 da tabbas za su gaza (tsari iri ɗaya da #10460/#10525).
An haɗa `rate_limit_exceeded` da gangan: a hanyar `markAccountUnavailable`
ƙa'idodin musamman na opencode ba sa dacewa (ba a miƙa headers/body zuwa
`checkFallbackError`, kuma opencode ba ya cikin `FULL_TEXT_RULE_PROVIDERS`), don haka 429
wanda body ɗinsa ke ɗauke da rubutun subscription-quota ("monthly usage limit
reached") ana rarraba shi a matsayin `quota_exhausted` ta hanyar quota-text fallback
(`buildSubscriptionQuotaFallback`, `accountFallback.ts`; cooldown na 1h) kafin
a taɓa isa ga ƙa'idar `status_429` — yayin da 429 mara quota-text (rate limiting
kawai) ake rarraba shi ta ƙa'idar `status_429` a matsayin `rate_limit_exceeded`
kuma har yanzu yana sanya cooldown ga iyalin IP. Ga provider da ke cikin allowlist, rate limit
da aka rarraba bisa IP alama ɗaya ce da quota da ya ƙare. Iyakokin gaskiya:

- **Ƙoƙari gwargwadon iko**: makullin yana gano `egress_ip` na ƙarshe da aka sani na haɗin
  daga `proxy_logs` (tazarar awa 24, ana aiwatarwa kai tsaye, babu cache). Idan cache ɗin bai taɓa samun bayanai ba (ba a taɓa gwada
  egress IP ba) ko kuma babu layi → har yanzu reshen yana sanya haɗin da ya gaza cikin lokacin jira
  (ana rubuta shi kamar yadda ake yi yanzu), sai dai ba a kulle ɗan'uwan haɗin ba.
- **Ba ya zama na dindindin**: lokacin jiran ƙuntatawar kaso ne mai sabuntawa
  (`testStatus: "unavailable"`); ba a taɓa samo wani yanayi na dindindin daga
  siginar matakin IP ba. Haɗin `disableCooling` suna tsallake reshen gaba ɗaya.
- **Ƙayyadadden matakin makulli yana canzawa ga rukunin da ke cikin jerin izini**: wannan canjin
  yanki ne, ba kawai ingantawa ga 'yan'uwan haɗi ba. opencode mai samar da `passthroughModels`
  ne, don haka kafin wannan reshen, kuskuren 429 yana haifar da makulli na kowane MODEL; yanzu
  yana haifar da lokacin jiran haɗi — har ma ga mai gudanarwa da ke amfani da haɗi guda ɗaya
  ba tare da wani ɗan'uwan haɗi ba sam. Wannan shi ne matakin da teburin dokokin opencode
  ya riga ya ayyana a matsayin daidai (`scope: "connection"`,
  `providerErrorRules.ts`), amma har yanzu ba a taɓa mutunta shi ba saboda opencode ba ya cikin
  `HONORS_RULE_LOCK_SCOPE_PROVIDERS`. Reshen da kansa yana rubuta lokacin jiran
  haɗin da ya gaza + `backoffLevel`, yana kwaikwayon reshen agentrouter
  mai yankin haɗi, sannan ya dawo — ba a taɓa isa ga toshewar kowane model da
  hanyar gama-gari da ke ƙasa ba.
- **An haɗa Combo**: kamar reshen agentrouter, yankin da gangan yana
  watsi da rage darajar `persistUnavailableState`/`isCombo` da mai kiran combo
  yake amfani da ita ga 429. Makullin kowane model ba wani nau'i ne mafi rauni na wannan yankin ba,
  raka'ar da ba daidai ba ce: ba ya nuna komai game da IP ɗin da aka ƙare masa kaso, don haka juyawar combo
  za ta ci gaba da ɓata kira guda ɗaya da tabbas zai gaza ga kowane ɗan'uwan haɗi.
- **Kariyar 'yan'uwan haɗi**: ba a taɓa sake rubuta ɗan'uwan haɗin da ya riga ya kai yanayi na ƙarshe (banned/credits_exhausted)
  ko wanda ya riga ya ke cikin lokacin jira mafi tsawo ba.
- **Keɓantaccen jerin izini**: faɗaɗa `EGRESS_BUCKETED_LOCK_PROVIDERS`
  shawara ce bayyananniya ta mai shi; babu haɗin gama-gari (tsari #10334/#10419). Query ɗin
  'yan'uwan haɗi yana ɗaure wannan jerin izinin iri ɗaya maimakon maimaita shi a matsayin literal na SQL,
  don haka faɗaɗa shi zai ci gaba da kasancewa canjin layi guda ɗaya.
- **Juyawar Egress IP, a duka ɓangarorin**: tazarar binciken (awa 24) ta fi
  TTL na cache ɗin egress-IP (minti 5) faɗi sosai, don haka "IP na ƙarshe da aka sani" tarihi ne,
  ba yanayin yanzu ba. Idan proxy na wani haɗi ya juya a cikin wannan tazara,
  makullin na iya **rasa** IP da ake rabawa da gaske (IP ɗin da aka rubuta shi ne sabon wanda
  ba a ƙare masa kaso ba) — haka kuma yana iya **sanya ɗan'uwan haɗin da tun daga lokacin
  ya juya ya bar** IP ɗin da aka ƙare masa kaso cikin lokacin jira. Yanayi na biyu yana sa wannan ɗan'uwan haɗin ya rasa
  tazarar lokacin jira guda ɗaya; an amince da dukansu a matsayin iyakokin ƙoƙari gwargwadon iko na binciken
  da ya dogara da tarihi.
- **Kuɗin aiki**: bincike biyu masu iyaka na `proxy_logs` (an tace su da tazara ta hanyar
  `idx_pl_timestamp`), kawai a mitar 429. Babu sabon index (migration 134
  YAGNI). An auna a kan kwafin DB na zirga-zirgar gaske mai matsakaicin girma; instance mai yawan
  throughput yana riƙe da layuka masu ƙaruwa daidai gwargwado a cikin tazara ɗaya.

---

## Sauran Fasalolin Juriya

- **Dabarun routing guda 19** (priority, weighted, round-robin, context-relay, fill-first, p2c, random, least-used, cost-optimized, reset-aware, reset-window, headroom, strict-random, auto, lkgp, context-optimized, cache-optimized, fusion, pipeline) — duba [AUTO-COMBO.md](../routing/AUTO-COMBO.md).
- **Routing mai la'akari da reset** (v3.8.0) — yana fifita haɗe-haɗe bisa lokacin sake saita quota.
- **Rage darajar yanayin bango** — Responses API `background: true` yana komawa yanayin sync tare da gargaɗi.
- **Gano iyakar kayan aiki ta atomatik** — yana rage amfani da masu samarwa idan an kai iyakar adadin kayan aiki.
- **Madadin gaggawa** — `OMNIROUTE_EMERGENCY_FALLBACK` ne ke sarrafa shi; masu gudanarwa za su iya sauya saitinsa daga shafin Feature Flags ba tare da sake farawa ba.

---

## Gyaran Kurakurai

- An tsallake dukkan maɓallan wani mai samarwa → bincika yanayin circuit breaker DA KUMA `rateLimitedUntil`/`testStatus` na kowane haɗi.
- An cire mai samarwa na dindindin bayan lokacin reset → lambar tana karanta ɗanyen `state` maimakon `getStatus()`/`canExecute()`.
- Maɓalli ɗaya ya gaza, ya kamata sauran su yi aiki → fifita lokacin sanyaya haɗi a kan circuit breaker.
- Model ɗaya kawai ya gaza → fifita kulle model a kan lokacin sanyaya haɗi.
- Ya kamata yanayin ya farfaɗo da kansa amma bai yi ba → bincika timestamp na gaba + hanyar karantawa da ke sabunta yanayin da wa'adinsa ya ƙare. Matsayi na dindindin na buƙatar sauye-sauye da hannu.

---

## Gano Asalin TLS & Ɓoyewa

An rubuta bayanan ɓoyewa na musamman ga kowane mai samarwa (JA3/JA4, CCH, obfuscation) daban — duba `docs/security/STEALTH_GUIDE.md` (git; ba a haɗa shi cikin `/docs` ba).

---

## Gwajin juriya (Mataki na 8 · Toshe C)

Baya ga gwaje-gwajen unit na dabarun juriya, gwaje-gwaje uku suna gwada runtime a ƙarƙashin
ainihin yanayin matsin lamba/gazawa (duk integration/nightly ne — babu wanda ke hana PRs):

| Gwaji       | Abin da yake yi                                                                                                                                                                                                                 | Gudanarwa                                |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Chaos       | Node na fake-upstream yana saka ainihin latency/reset/timeout/503; yana tabbatar da cewa circuit breaker yana buɗewa/farfadowa kuma `checkFallbackError` yana ware 503 a matsayin fallback da za a iya farfaɗowa daga gare shi. | `RUN_CHAOS_INT=1 npm run test:chaos`     |
| Heap-growth | ~500 streams ga kowane `createSSEStream` a ƙarƙashin `--expose-gc`; yana gazawa idan heap ya girma fiye da iyakar da aka saita (kariyar OOM #3069).                                                                             | `npm run test:heap`                      |
| k6 soak     | Ci gaba da lodawa a kan `/api/monitoring/health`; iyakokin p95/kuskure.                                                                                                                                                         | `k6 run tests/load/k6-soak.js` (nightly) |

`.github/workflows/nightly-resilience.yml` ne ke tsara gudanarwarsu (cron + dispatch). A cikin
tsohon saitin `test:integration`, chaos da heap suna tsallake kansu (ba tare da `RUN_CHAOS_INT`/`--expose-gc` ba).

---

## Duba Kuma

- [Jagorar Tsarin Gine-gine](./ARCHITECTURE.md) — Tsarin gine-ginen tsarin da yadda yake aiki a ciki
- [Jagorar Mai Amfani](../guides/USER_GUIDE.md) — Masu samar da sabis, haɗe-haɗe, haɗawar CLI
- [Injin Haɗe-haɗe na Atomatik](../routing/AUTO-COMBO.md) — Kimantawa mai abubuwa 16, fakitin yanayi
