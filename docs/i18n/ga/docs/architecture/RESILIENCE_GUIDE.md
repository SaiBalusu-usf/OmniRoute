# Resilience Guide (Gaeilge)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/RESILIENCE_GUIDE.md) · 🇪🇹 [am](../../../am/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇷 [el](../../../el/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇪 [et](../../../et/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ha](../../../ha/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/RESILIENCE_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇭 [km](../../../km/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇲 [my](../../../my/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇵 [ne](../../../ne/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [or](../../../or/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇰 [si](../../../si/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇸 [sr](../../../sr/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇿 [uz](../../../uz/docs/architecture/RESILIENCE_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [yo](../../../yo/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/RESILIENCE_GUIDE.md)

---

Tá trí shásra athléimneachta ar leith ach gaolmhara ag OmniRoute. Tá raon feidhme agus cuspóir difriúil ag gach ceann acu. Coinnigh ar leithligh iad agus iompar ródaithe á dhífhabhtú agat.

![Samhail athléimneachta 3 shraith](../diagrams/exported/resilience-3layers.svg)

> Foinse: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd)

## 1. Scoradán Ciorcaid Soláthraí

**Raon feidhme:** an soláthraí iomlán (m.sh., `glm`, `openai`, `anthropic`).

**Cuspóir:** stop a chur le trácht a sheoladh chuig soláthraí a bhfuil teipeanna leanúnacha ag tarlú dó ar leibhéal an chórais réamhtheachta/seirbhíse.

**Cur chun feidhme:**

- Croí-aicme: `src/shared/utils/circuitBreaker.ts`
- Sreangú: `src/sse/handlers/chatHelpers.ts`, `src/sse/handlers/chat.ts`
- API stádais: `GET /api/monitoring/health`
- API athshocraithe: `POST /api/resilience/reset`
- Cumhdaigh: `open-sse/services/accountFallback.ts`
- Tábla bunachair sonraí: `domain_circuit_breakers`

**Staideanna:**

- `CLOSED` — ceadaítear gnáth-thrácht
- `DEGRADED` — ceadaítear trácht fós, ach táthar ag rianú leibhéal ardaithe teipeanna soláthraí
- `OPEN` — tá an soláthraí blocáilte go sealadach; fágann ródú teaglama ar lár é
- `HALF_OPEN` — tá an teorainn ama athshocraithe caite; ceadaítear iarratas taiscéalaíoch

**Réamhshocruithe inchumraithe (`open-sse/config/constants.ts`, ar fáil in Painéal → Socruithe → Athléimneacht):**

| Aicme       | Díghrádaithe ag | Osclaítear ag | Teorainn ama athshocraithe |
| ----------- | --------------- | ------------- | -------------------------- |
| OAuth       | 5 theip         | 8 dteip       | 60s                        |
| Eochair API | 7 dteip         | 12 theip      | 30s                        |
| Áitiúil     | díorthaithe     | 2 theip       | 15s                        |

Rialaíonn `degradationThreshold` cathain a théann soláthraí isteach i `DEGRADED`; rialaíonn `failureThreshold` cathain a osclaítear é agus a fhágtar ar lár é. Níl próifílí soláthraithe áitiúla ar fáil ar leathanach na socruithe Athléimneachta go fóill.

**Cóid tuisle:** stádais ar leibhéal an tsoláthraí `[408, 500, 502, 503, 504]` amháin. NÁ tuisle i gcás earráidí ar leibhéal an chuntais (formhór na n-earráidí 401/403/429 — baineann siad sin le tréimhse fuaraithe nó frithdhúnadh).

**Athshlánú leisciúil:** nuair a théann `OPEN` in éag, athnuann `getStatus()`, `canExecute()`, `getRetryAfterMs()` an staid go `HALF_OPEN`. Níl gá le haon amadóir cúlra.

---

### Tréimhse Fuaraithe Dhomhanda Roghnach Soláthraí (geata fuinneoige)

Coinníonn ceathrú sraith, atá **roghnach** (`PROVIDER_COOLDOWN_ENABLED`, **as** de réir réamhshocraithe),
cuimhne trastarratas ar sholáthraithe atá ag teip in
`open-sse/services/providerCooldownTracker.ts`; téitear i gcomhairle léi agus spriocanna teaglama
á réiteach ionas nach leanfaidh iarratais teaglama as a chéile de bheith ag atriall trí sholáthraí atá
díreach tar éis teip. Cloíonn iontrálacha ar leibhéal an tsoláthraí le geata fuinneoige `PROVIDER_PROFILES`:

| Próifíl     | tuisle tar éis (`providerFailureThreshold`) | laistigh de (`providerFailureWindowMs`) | fuaraíonn ar feadh (`providerCooldownMs`) |
| ----------- | ------------------------------------------: | --------------------------------------: | ----------------------------------------: |
| OAuth       |                                        `10` |                                 `15min` |                                    `5min` |
| Eochair API |                                        `15` |                                 `30min` |                                   `10min` |

Faoi bhun na tairsí, ní mheastar go bhfuil an soláthraí **ag fuarú**; glanann rath
an fhuinneog. Coinníonn iontrálacha ar leibhéal an naisc (`provider:connectionId`) an
cúlú easpónantúil `minRetryCooldownMs → maxRetryCooldownMs` ina ionad sin. Sáruithe:
`OMNIROUTE_PROVIDER_BREAKER_{OAUTH,API_KEY}_{FAILURE_THRESHOLD,FAILURE_WINDOW_MS,COOLDOWN_MS}`.
Cosaint aischéimnithe: `tests/unit/provider-cooldown-window-gate.test.ts`.

## 2. Tréimhse Shuaimhnithe Naisc

**Raon feidhme:** nasc/cuntas/eochair aonair soláthraí.

**Cuspóir:** eochair lochtach amháin a scipeáil agus naisc eile don soláthraí céanna ag leanúint de bheith ag freastal.

**Cur chun feidhme:**

- Marcáil mar neamh-infhaighte: `src/sse/services/auth.ts::markAccountUnavailable()`
- Roghnú: `getProviderCredentials*` sa chomhad céanna
- Ríomh na tréimhse suaimhnithe: `open-sse/services/accountFallback.ts::checkFallbackError()`
- Socruithe: `src/lib/resilience/settings.ts`

**Réimsí in aghaidh an naisc:**

- `rateLimitedUntil` — stampa ama go dtí go rachaidh an tréimhse shuaimhnithe in éag
- `testStatus: "unavailable"`
- `lastError`, `lastErrorType`, `errorCode`
- `backoffLevel` — cuntar cúlscoir easpónantúil

**Tréimhsí suaimhnithe réamhshocraithe:**

- Bonn OAuth: 5s
- Bonn eochrach API: 3s
- Eochair API 429: tugtar tús áite do cheanntásca réamhtheachtacha `Retry-After`/athshocraithe/téacs athshocraithe is féidir a pharsáil
- Cúlscoir: `baseCooldownMs * 2 ** failureIndex`

**Cosaint i gcoinne ruathair chomhuaineach:** cuireann sí cosc ar theipeanna comhthráthacha an tréimhse shuaimhnithe a fhadú an iomarca nó `backoffLevel` a incrimintiú faoi dhó.

**Staid chríochfoirt (NÍ tréimhsí suaimhnithe iad):**

- `banned` — socraithe trí bhrath eochairfhocail choisc / coisc cuntais (féach [BAN_DETECTION](../security/BAN_DETECTION.md))
- `expired` (aistríonn sé go staid chríochfoirt tar éis líon teoranta atrialacha — `EXPIRED_RETRY_MAX = 3` le cúlscoir easpónantúil — ionas gur féidir le hearráidí sealadacha OAuth iad féin a leigheas sula ndíghníomhaítear an cuntas go buan)
- `credits_exhausted`

Maireann siad seo go dtí go n-athraíonn na dintiúir nó go n-athshocraíonn oibreoir iad. Ná forscríobh staideanna críochfoirt le staid shealadach tréimhse suaimhnithe.

**Athshlánú leisciúil:** nuair atá `rateLimitedUntil` caite, bíonn an nasc incháilithe arís. Tar éis úsáid rathúil, glanann `clearAccountError()` gach réimse earráide.

### Cleamhnacht seisiúin (#7274)

**Raon feidhme:** seisiún cliaint amháin (ceanntásc `X-Session-Id` / `x-codex-session-id` / `x-omniroute-session`) pionnáilte le nasc amháin, i gcás **aon** soláthraí.

**Cuspóir:** gníomhaire ilseal a choinneáil (Claude Code, aider, gníomhairí saincheaptha) ar an gcuntas céanna thar iarratais, rud a laghdaíonn caillteanas comhthéacs idir cuntais agus earráidí 429 athchleachtacha ó thosú fuar ar sholáthraithe a bhfuil staid seisiúin in aghaidh an chuntais acu.

**Cur chun feidhme:**

- Réiteach TTL: `src/sse/services/sessionAffinityPin.ts::resolveSessionAffinityTtlMs()`
- Roghnú/cruthú pionna: `src/sse/services/sessionAffinityPin.ts::selectSessionAffinityConnection()`
- Eastóscadh ceanntáisc (ginearálta, aon soláthraí): `src/sse/services/auth.ts::extractSessionAffinityKey()`
- Tábla pionna marthanach: `sessionAccountAffinity` (`src/lib/db/sessionAccountAffinity.ts`)
- Socrú: `sessionAffinityTtlMs` (TTL domhanda ina ms, díchumasaíonn `0` é) — `src/lib/db/settings.ts`. Athainmníodh é ón socrú Codex amháin `codexSessionAffinityTtlMs` leis an ascnamh `124_generic_session_affinity_ttl.sql`, a thugann aon TTL Codex a bhí cumraithe roimhe seo ar aghaidh mar an réamhshocrú nua.

Roimh #7274, scoir `resolveSessionAffinityTtlMs()` láithreach le `0` i gcás gach soláthraí seachas `codex`, mar sin ní raibh aon éifeacht ag an socrú TTL (ná ag na ceanntásca seisiúin) in aon áit eile, cé go raibh an mheicníocht phionnála agus eastóscadh na gceannteideal neamhspleách ar an soláthraí cheana féin. Bhain an deisiú an filleadh luath sin; cuirtear an TTL i bhfeidhm go haonfhoirmeach anois ar gach soláthraí a luaithe a shocraítear go domhanda é os cionn `0`.

Ní chuirtear na trí cheanntásc cleamhnais seisiúin ar aghaidh chuig an gcóras réamhtheachtach riamh — tógann seiceadóirí a gceanntásca réamhtheachtacha féin ón tús seachas ceanntásca cliaint a chur ar aghaidh, mar sin fanann sé seo mar aitheantas comhghaolaithe inmheánach amháin.

### Léasanna eisiacha bainistithe do naisc seisiúin

**Raon feidhme:** tá nasc incháilithe OmniRoute amháin faoi úinéireacht cliaint/seisiúin HTTP bhainistithe ghníomhaigh amháin.

**Cuspóir:** úinéireacht eisiach mharthanach ar nasc a sholáthar do chliaint a dteastaíonn bacainn dhian ródaithe
uathu thar iarratais. Tá sé seo éagsúil le cleamhnacht seisiúin, ar rogha bhog leanúnachais í:
coinníonn léas eisiach staid saolré in SQLite, forfheidhmíonn sé uathúlacht dhomhanda an úinéara ghníomhaigh agus
an naisc ghníomhaigh, agus diúltaíonn sé do ghlúin sheanchaite roimh sheoladh chuig an soláthraí.

Is gné roghnach í seo in aghaidh na heochrach API. Ní mór raon feidhme `lease:exclusive` agus liosta
sainráite neamhfholamh `allowedConnections` a bheith ag eochair bhainistithe. Is féidir le haon chliant HTTP an críochphointe saolré a úsáid; ní theastaíonn aon
ainm cliaint, gníomhaire úsáideora, soláthraí, modh OAuth ná samhail. Is le nasc an léas,
ní le samhail, mar sin coinníonn athrú samhla an ceangal fad is a fhanann an nasc incháilithe de ghnáth.
Fanann na gnáthrialacha samhla, cuóta, sláinte, tréimhse suaimhnithe agus liosta ceadaithe i bhfeidhm agus féadfaidh siad
an ghlúin chéanna a aistriú chuig nasc incháilithe saor eile.

Is é an saolré `POST /api/v1/session-leases` leis na gníomhartha JSON `acquire`, `renew`, agus `release`.
Cuireann iarratais tátail bhainistithe luach teimhneach `X-OmniRoute-Lease-Owner` agus an
`X-OmniRoute-Lease-Generation` cruinn i láthair. Úsáideann an t-úinéir `vlo_` agus 43 carachtar base64url ina dhiaidh; ní stóráiltear ach
a hais SHA-256. Ceanglaíonn gach bacainn seolta deiridh aitheantas na heochrach API fíordheimhnithe agus
aitheantas an naisc ghníomhaigh freisin. Baintear ceanntásca rialaithe léasa de logaí, de ghrianghraif iarratais choinnithe, agus de
cheanntásca seiceadóra réamhtheachtacha.

Má tá iarrthóirí bainistithe incháilithe ag an ngnáthródú ach go bhfuil gach iarrthóir saor áitithe ag
léas gníomhach eachtrach, tugann OmniRoute HTTP `429`, cód neamh-infhaighteachta acmhainne léasa,
staid feithimh ar acmhainn, agus `Retry-After` teoranta arna dhíorthú ón dul in éag ábhartha is luaithe.
Ní ionann gnáthfholús incháilitheachta agus coinbhleacht léasa agus coinníonn sé a shéimeantaic earráide ródaithe reatha.

Fanann meicníochtaí gaolmhara ar leithligh:

- Is dáileadh bog áitiúil don phróiseas é áitíocht seisiúin OAuth do chuntais OAuth.
- Deonaíonn séamafóir cuntais ceadanna comhthráthachta iarratais agus críochnaíonn siad nuair a chuirtear iarratas i gcrích.
- Is úinéireacht mharthanach saolré le bacainn ghlúine iad léasanna eisiacha bainistithe do sheisiúin.

---

## 3. Frithdhúnadh Samhla

**Raon feidhme:** soláthraí + nasc + samhail mar thrírín.

**Cuspóir:** seachain nasc iomlán a dhíchumasú nuair nach bhfuil ach samhail amháin ar fáil nó nuair atá teorainn chuóta uirthi.

**Samplaí:**

- Soláthraithe le cuótaí in aghaidh na samhla a thugann 429 ar ais
- Soláthraithe logánta a thugann 404 ar ais i gcás samhail amháin atá ar iarraidh
- Teipeanna ceada a bhaineann go sonrach le mód/samhail an tsoláthraí (m.sh., móid Grok)

**Cur chun feidhme:** `open-sse/services/accountFallback.ts` — `lockModel()`, `clearModelLock()`, `getAllModelLockouts()`.

### Deais Tréimhsí Maolaithe Samhlacha (v3.8.0)

Comhéadan úsáideora: Socruithe → Tréimhsí Maolaithe Samhlacha (`src/app/(dashboard)/dashboard/settings/components/ModelCooldownsCard.tsx`)

Liostaítear frithdhúnadh gníomhacha leis na réimsí seo: soláthraí, nasc, samhail, cúis, expiresAt. Is féidir le hoibreoirí samhail a athchumasú de láimh ón gcárta.

**REST API:**

- `GET /api/resilience/model-cooldowns` — liostaigh frithdhúnadh gníomhacha
- `DELETE /api/resilience/model-cooldowns` — athchumasú de láimh. Corp: `{provider, connection, model}`. Fíordheimhniú: bainistíocht.

### Comhéadan úsáideora do shocruithe frithdhúnadh + aisghabháil trí mheath ratha (v3.8.23)

Athraíodh frithdhúnadh samhla ó iompar buanchumasaithe, crua-chódaithe go gné lán-inchumraithe,
roghnach lena cárta socruithe féin agus conair aisghabhála féinleighis.

**Cárta socruithe:** Socruithe → Frithdhúnadh Samhla
(`src/app/(dashboard)/dashboard/settings/components/ModelLockoutCard.tsx`).
Tá sé seo **éagsúil** ón `ModelCooldownsCard` inléite amháin thuas (nach ndéanann ach
frithdhúnadh gníomhacha a _liostú_) — déanann an cárta nua _na paraiméadair a chumrú_. Tá na luachanna réamhshocraithe
in `DEFAULT_MODEL_LOCKOUT_SETTINGS`
(`src/lib/resilience/modelLockoutSettings.ts`):

| Socrú                   | Réamhshocrú                      | Brí                                                                                       |
| ----------------------- | -------------------------------- | ----------------------------------------------------------------------------------------- |
| `enabled`               | `false`                          | Máistirlasc — tá frithdhúnadh samhla **múchta de réir réamhshocraithe**.                  |
| `errorCodes`            | `[403, 404, 429, 502, 503, 504]` | Stádais réamhtheachtacha a áirítear mar theip atá teoranta do shamhail.                   |
| `baseCooldownMs`        | `120_000` (120 s)                | Fad tosaigh an fhrithdhúnadh don chéad teip.                                              |
| `maxCooldownMs`         | `1_800_000` (30 nóim)            | Uasteorainn na tréimhse maolaithe méadaithe.                                              |
| `maxBackoffSteps`       | `10`                             | Uasmhéid céimeanna méadaithe an chúltarraingthe easpónantúil.                             |
| `useExponentialBackoff` | `true`                           | Cé acu a mhéadaíonn teipeanna arís agus arís eile an tréimhse maolaithe go heaspónantúil. |

Coinnítear na socruithe tríd an ngnáthstór socruithe agus bailíochtaítear iad trí
scéimre na socruithe athléimneachta; cuireann an cárta teorainneacha ar `baseCooldownMs`/`maxCooldownMs`
(le `maxCooldownMs ≥ baseCooldownMs`) agus ar `maxBackoffSteps`.

**Aisghabháil trí mheath ratha:** ní hionann an aisghabháil agus dul in éag an amadóra
amháin. Laghdaíonn freagra sláintiúil comhaireamh teipeanna na samhla de réir a chéile, ionas go stopann samhail a d'aisghabh
i lár na fuinneoige de bheith ag méadú (agus go nglantar í) sula ndéanfadh a hamadóir amhlaidh. Nuair a éiríonn le
sprioc teaglama, glaonn `open-sse/services/combo.ts` ar `decayModelFailureCount()`
(`open-sse/services/accountFallback.ts`), rud a **leathnaíonn síos** an
`failureCount` stóráilte (`Math.floor(failureCount / 2)`); nuair a shroicheann sé `0`, scriostar an iontráil
frithdhúnadh ina hiomláine. Méadaíonn an mhacasamhail `recordModelLockoutFailure()`
an comhaireamh (agus an tréimhse maolaithe) i gcás teipeanna laistigh den
fhuinneog mhéadaithe. Tá an meath ratha seo sa bhreis ar ghnáthdhul in éag an amadóra —
is féidir le ceachtar conair samhail a athchumasú.

**Staid:** coinnítear frithdhúnadh **sa chuimhne** (`Map`anna in aghaidh an phróisis de
`ModelLockoutEntry` agus iad eochraithe le `provider:connectionId:model`), ní choinnítear iad sa
DB — cailltear iad nuair a atosaítear an córas. Coinnítear na _socruithe_; tá an
_staid_ ghníomhach frithdhúnadh sealadach.

---

## 4. Rialú Comhthráthachta Comhroinnte Cuóta (v3.8.36)

Is minic nach nglacann cuntais síntiúis (GLM, MiniMax, srl.) ach le ~1–3 iarratas
comhthráthacha; má sháraítear é sin, spreagtar earráidí 429 agus tréimhsí fuaraithe. Bíonn sé seo géar faoi
chomhcheangail **comhroinnte cuóta** (`qtSd/…`), ina roinneann roinnt eochracha API cuntas amháin
réamhtheachtach. Cuireann trí shraith cosc ar chuntas comhroinnte a bheith báite.

### Uasteorainn chomhthráthachta in aghaidh an naisc (`max_concurrent`)

Is féidir le gach nasc soláthraí uasteorainn `max_concurrent` a dhearbhú
(`provider_connections.max_concurrent`, socraithe i módfhuinneog an naisc / san API / sa DB).
Fág folamh é mura bhfuil teorainn ag teastáil. Seo é an t-aon rialtán a thiomáineann an tsraith srathaithe
thíos — socraigh é de réir fhíorchomhthráthacht an chuntais (m.sh. GLM ~1, MiniMax ~2).

### Srathú iarratas comhroinnte cuóta

Nuair a dhíríonn seoladh comhroinnte cuóta ar nasc a dhearbhaíonn
`max_concurrent` dearfach, déantar iarratais chomhthráthacha chuig an **gcuntas** sin a shrathú trí
sheamafór in aghaidh an naisc (eochair `qsconn:<connectionId>`): **fanann iarratais bhreise sa
scuaine** seachas an cuntas a bhá. Oibríonn sé ar bhonn **fail-open** — leanann
scuaine lán nó teorainn ama ar aghaidh gan sliotán seachas iarratas inseolta a
dhiúltú riamh. Scoránaigh é in **Socruithe → Athléimneacht → Comhthráthacht in aghaidh an naisc le haghaidh
comhroinnt cuóta** (`resilienceSettings.quotaShareConcurrencyLimit.enabled`, cumasaithe de réir
réamhshocraithe). Gan uasteorainn `max_concurrent`, ní athraíonn an t-iompar.

> Oibríonn geata ródaithe na comhroinnte cuóta (`selectQuotaShareTarget`, DRR + P2C) féin ar bhonn
> fail-open agus ní dhéanann sé ach nasc atá ag a uasteorainn a _dhíthosaíochtú_ — le
> comhthiomsú aon naisc ní féidir leis teorainn chrua a chur i bhfeidhm, mar sin is é an seamafór seo a
> choinníonn an tuile faoi smacht i ndáiríre.

### Atriail a chuireann tréimhse fuaraithe an chomhcheangail san áireamh

I gcás gach straitéise comhcheangail (nuair atá sí cumasaithe), fanann iarratas a dhaingneodh earráid 429
le linn tréimhse GHARR neamhbhuan fuaraithe go dtí go mbeidh sí thart agus seoltar arís é in ionad
an 429 a thabhairt ar ais — clúdaíonn sé seo fuinneoga TPM/RPM den chineál Gemini (~60s retry-after)
i gcomhcheangail ilmhúnla, m.sh. nuair a bhuaileann an dá sprioc i gcomhcheangal 2 mhúnla
teorainn ráta in aghaidh an mhúnla. Tá sé teorannaithe ag `comboCooldownWait` (`enabled`, `maxWaitMs`, `maxAttempts`,
`budgetMs`) in **Socruithe → Athléimneacht**. Ní fhanann sé riamh i gcás `quota_exhausted`
(faoi ghlas go meán oíche) ná ar chúiseanna fíordheimhnithe/neamhaimsithe.

---

## 5. Rialú Iontrála Scuaine Iarratas (v3.8.49 · saincheist #6593)

**Raon feidhme**: an scuaine áitiúil teorannaithe ráta in aghaidh an tsoláthraí+naisc (`open-sse/services/rateLimitManager.ts`,
le Bottleneck mar bhonn taca aige), sraith amháin faoi bhun na dtrí mheicníocht thuas.

**Is ainm oidhreachta marthanaithe é `maxWaitMs` le haghaidh dhul in éag an fhorghníomhaithe.**
Cuirtear `resilienceSettings.requestQueue.maxWaitMs` ar aghaidh chuig Bottleneck mar
`expiration` poist, agus ní thosaíonn a amadóir go dtí tar éis an tseolta. Dá bhrí sin, cuireann sé teorainn le
forghníomhú atá faoi bhainistiú an teorantóra, ní leis an am a chaitear sa scuaine áitiúil. Cuirtear dul in éag
in iúl mar `code: "RATE_LIMIT_EXECUTION_TIMEOUT"` áitiúil iontaofa (HTTP 504);
ní ghlactar leis an seanainm cóid don teorainn ama scuaine ach ar mhaithe le comhoiriúnacht
shiardhátaithe inmheánach iontaofa. Is é 15000ms an réamhshocrú; sáraigh é trí
`RATE_LIMIT_MAX_WAIT_MS` (athróg timpeallachta) nó tríd an deais (**Socruithe → Athléimneacht**,
uasteorainn UI 1–30000ms). Níl spriocdháta ama ag fanacht sa scuaine; úsáid
`maxQueueDepth` thíos chun teorainn a chur le glaoiteoirí sa scuaine.

**`maxQueueDepth` — uasteorainn iontrála roghnach (nua).** Cuireann `resilienceSettings.requestQueue.maxQueueDepth`
teorainn le líon na n-iarratas ar féidir leo fanacht sa scuaine (gan a bheith seolta fós) do
sholáthraí+nasc amháin ag aon am amháin. Nuair atá `maxQueueDepth` iarratas sa scuaine cheana féin,
diúltaítear d'iarratas nua láithreach le hearráid chlóscríofa
`code: "RATE_LIMIT_QUEUE_FULL"` **sula** sroicheann sé `limiter.schedule()` riamh
— mar sin tá an diúltú saor agus tarlaíonn sé roimh aon obair iartheachtach
chomhbhrú leid / aistriúcháin don iarratas sin. Réamhshocrú `0` =
díchumasaithe, rud a chaomhnaíonn an t-iompar scuaine gan teorainn atá ann cheana; teorannaithe do 0–100000.
Sáraigh é trí `RATE_LIMIT_MAX_QUEUE_DEPTH` (athróg timpeallachta) nó
`resilienceSettings.requestQueue.maxQueueDepth` (paiste deaise/API).

Is feidhm íon í an tseiceáil iontrála féin
(`open-sse/services/rateLimitManager/admission.ts::checkQueueAdmission`) ionas
gur féidir í a thástáil mar aonad gan fíortheorantóir Bottleneck.

> Moladh san RFC a d'oscail #6593 bratach `bypassCompressionOnRateLimit`
> freisin. Is comhbhrú leide/comhthéacs ar an iarratas LLM amach é píblíne
> `open-sse/services/compression/` an stór seo (`chatCore.ts`,
> thart ar an mbloc `resolveCompressionSettings`/`selectCompressionStrategy`),
> ní comhbhrú freagartha HTTP ar chabhlacha 429 sintéisithe — níl aon
> chonair chóid chomhfhreagrach ann do bhratach sheachanta liteartha. Faoi láthair ritheann an chéim chomhbhrú leide sin
> _roimh_ `withRateLimit()` sa phíblíne iarratais freisin, mar sin
> is athrú níos leithne ar leith é í a athordú chun í a scipeáil nuair a dhiúltaítear mar gheall ar scuaine lán,
> seachas raon feidhme na saincheiste seo; **níor** cuireadh i bhfeidhm anseo í d'aon ghnó
> agus fágtar í mar obair leantach más fiú an coigilteas LAP an riosca
> athordaithe.

---

## 6. Faire faire tréchurtha do shruth mall (#9709)

Aimsíonn an chosaint roghnach `resilienceSettings.streamRecovery.throughputWatchdog`
foinse réamhtheachtach atá fós ag seoladh smután ach atá ag táirgeadh aschur cúntóra faoi bhun
an ráta chumraithe d’aschur úsáideach. Tá sí scartha d’aon ghnó ón teorainn ama díomhaoin:
ní athshocraíonn buillí croí ná meiteashonraí ceachtar amadóir agus ní áirítear iad mar dhul chun cinn. Tá sí
scartha freisin ó sprioc-am docht na hiarrachta (#9153), a fhanann ina
huasteorainn sábháilteachta absalóidí beag beann ar cháilíocht an aschuir.

Teastaíonn tréimhse téimh ón bhfaire agus fuinneog rollach iomlán ina diaidh sular
féidir léi scor a chur i bhfeidhm. Comhaireann sí deilte téacs ó imeachtaí aschuir Chat Completions agus Responses API
(seachfhreastalaí coimeádach do bhearta UTF-8), déanann sí neamhaird d’imeachtaí úsáide-amháin agus d’imeachtaí folmha, agus
cuireann sí breithiúnas ar fionraí fad atá imeachtaí glao uirlise nó réasúnaíochta ar siúl. Tá sí díchumasaithe
de réir réamhshocraithe agus is féidir í a chumasú le `STREAM_THROUGHPUT_WATCHDOG_ENABLED=true`; tá
an fhuinneog, an téamh, an ráta íosta agus an t-aschur intomhaiste íosta faoi theorainn ag
gnáthchiseal normalaithe na socruithe athléimneachta.

Nuair atá sí cumasaithe, ní chuirtear scor ón bhfaire i bhfeidhm ach ar an iarracht réamhtheachtach ghníomhach. Sula
mbíonn aon bheart infheicthe ag an gcliant ann, féadfaidh an chonair reatha luath-athshlánaithe don chuntas céanna
an iarracht a athoscailt. Tar éis ceangaltais, ní athsheinntear an sruth go dall choíche; ní féidir ach leis an
gconradh reatha sábháilte leanúnachais lár-srutha iarmhír a cheangal leis. Fanann an tabhairt chun críche
aonuaire, mar sin ní dhéantar cuntasaíocht úsáide ná scaoileadh an tseamafóir faoi dhó.

---

## 7. Athshonrú Stádais Réamhtheachtaigh (earráidí cuóta a sonraíodh go mícheart)

**Raon feidhme:** geata réamhtheachtach amháin a thuairiscíonn ídiú sealadach cuóta leis an stádas HTTP mícheart.

**Cuspóir:** stádas míthreorach a cheartú ROIMH aicmiú, ionas go bhfeicfidh tomhaltóirí iartheachtacha (an t-inneall cúltaca, comhiomlánú combo, an freagra don chliant) fíorchineál in-atriailte na teipe.

Cuireann roinnt geataí ídiú SEALADACH cuóta in iúl le stádas HTTP
nach féidir a atriail. Filleann `agentrouter.org` `403` (agus `400` uaireanta) le corp Síneach
(`用户额度不足` / `额度不足`) in ionad an `429` chaighdeánaigh. Déileálann cliaint ar nós Claude
Code le `403` mar stádas buan agus cuireann siad deireadh leis an seisiún, agus gan cheartú
dhéanfadh an t-inneall cúltaca é a aicmiú mar `AUTH_ERROR` seachas mar imeacht
cuóta.

**Cur chun feidhme:**

- Clárlann + meaitseálaí: `open-sse/config/upstreamStatusRestatement.ts` — liosta
  rialacha de réir soláthraí (`{id, fromStatuses, toStatus, textMarkers,
excludeMarkers, defaultRetryAfterMs}`), a mheaitseáiltear trí `applyStatusRestatement()`.
- Suíomh glao: an bloc `providerFailure:` in `open-sse/handlers/chatCore.ts`
  (thart ar líne 3654), díreach tar éis do `parseUpstreamError()` freagra réamhtheachtach
  a pharsáil a bhfuil stádas earráide HTTP aige (`!providerResponse.ok`), agus roimh aon
  aicmiú a reáchtáil, ionas go bhfeicfidh gach tomhaltóir iartheachtach an stádas
  ceartaithe. Leanann earráidí atá leabaithe laistigh de shruth `200` SSE conair
  parsála srutha níos déanaí ar leith agus **níl** siad cumhdaithe ag an duán seo faoi láthair — is
  teorannú aitheanta é seo nach bhfuil ag teastáil fós do mhíshonrú stádais agentrouter (a
  thagann chun solais mar stádas earráide HTTP).
- Incháilitheacht atrialach: tá `429` in `RETRY_AFTER_ELIGIBLE_STATUSES`
  (`open-sse/services/combo/unavailableRetryGate.ts`), mar sin bíonn fíorfhuinneog atrialach
  ag earráid athshonraithe seachas í a nochtadh mar `403` marbh.
- Ní insíonn an `60s` sintéiseach `defaultRetryAfterMs` (`upstreamStatusRestatement.ts`)
  ach don **chliant** cad atá sa fhreagra athshonraithe; ní hé féin
  fad inmheánach fuaraithe/frithdhúnadh amach an naisc — rialaítear é sin
  ar leithligh le cibé sásra a láimhseálann an earráid athshonraithe i ndáiríre
  (cúlú méadaitheach Connection Cooldown, §2, bonn `3s` do sholáthraithe
  API-key; nó Model Lockout, §3, do sholáthraithe cuóta de réir samhla amhail
  agentrouter). Féadfaidh an ródaire a bheith incháilithe le hatriail go hinmheánach níos luaithe
  ná an fhuinneog 60s a fhógraíonn sé don chliant — spás maolánach d’aon ghnó,
  ní fabht.

Ní athshonraítear earráidí buana (an `无权访问模型` ó agentrouter — níl rochtain ar an tsamhail seo)
RIAMH: cuireann `excludeMarkers` cros ar an riail fiú nuair a mheaitseálann `textMarkers`,
mar sin coimeádann an earráid a stádas bunaidh agus ní dhéantar atriail uirthi go deo. Téitear i gcomhairle leis an
riail aicmithe soláthraí chomhfhreagrach
(`agentrouter-model-access-denied` in `open-sse/config/providerErrorRules.ts`:
`reason: "auth_error"`, `scope: "model"`, bunfhuarú dearbhaithe `6h`) ag
`checkFallbackError` (`open-sse/services/accountFallback.ts`)
_roimh_ an luathfhilleadh cineálach `FORBIDDEN` don chatagóir apikey, agus é faoi rialú ag
`honorsRuleLockScope(provider)` (#10334 — eisiach do agentrouter faoi láthair tríd
an liosta ceadaithe `HONORS_RULE_LOCK_SCOPE_PROVIDERS` in
`providerErrorRules.ts`). Sreabhann fuarú dearbhaithe 6h na rialach tríd mar
`fallbackResult.baseCooldownMs`, ach cothaíonn sé fós an chonair frithdhúnta amach
cuóta-de-réir-samhla a bhí ann cheana (`lockModelIfPerModelQuota()` /
`recordModelLockoutFailure()`, gan athrú ag #10334 ach amháin i gcás fhoinse an fhuaraithe):
teanntar síos é go dtí `mlSettings.maxCooldownMs` an oibreora
(`1_800_000ms` / 30min de réir réamhshocraithe), amhail gach frithdhúnadh amach samhla eile, agus
fanann _cúis mharthanach an fhrithdhúnta amach_ mar an `"forbidden"` cruachódaithe a bhí ann cheana,
seachas `"auth_error"` na rialach — ní urramaítear ó cheann ceann ach fad an fhuaraithe,
ní an teaghrán cúise. Fanann an nasc féin gníomhach;
ní chuirtear isteach ar shamhlacha gaolmhara ar an nasc céanna.

Sroicheann earráidí cuóta athshonraithe (`额度不足`) riail soláthraí sa táirgeadh
(`agentrouter-user-quota-exhausted`: `reason: "quota_exhausted"`, `scope:
"connection"`, gan aon tréimhse mharana dá chuid féin dearbhaithe — tá
réamhshocrú cúlaithe scálaithe na sraithe marthanachta i bhfeidhm). Ó #10334 i
leith, úsáidtear `scope` ar `ProviderErrorRuleMatch` ó cheann ceann, ach
**amháin** i gcás soláthraithe atá ar liosta ceadaithe
`HONORS_RULE_LOCK_SCOPE_PROVIDERS` (`providerErrorRules.ts` — níl ann inniu ach
`"agentrouter"`, faoi gheata trí `honorsRuleLockScope()`). I gcás gach
soláthraí eile, níl i `scope` ach faisnéis, díreach mar a bhí roimh #10334.
Nochtann `checkFallbackError` scóip na rialach comhoiriúnaithe mar
`fallbackResult.ruleScope`; is é `isAgentrouterConnectionQuotaScope()`
(`src/sse/services/auth.ts`) an garda comhroinnte a dheimhníonn go bhfuil
`ruleScope` sábháilte i ndáiríre le hurramú mar chomhartha féin-aisghabhála
ar fud an naisc (scóip `"connection"`, cúis `quota_exhausted`, ní
`permanent` riamh, ná `creditsExhausted` riamh — cosaint in aghaidh riail amach
anseo a chuirfeadh scóip `"connection"` le chéile le staid bhuan cuntais).
Glaonn dhá thomhaltóir air:

- **Marthanacht** (`markAccountUnavailable()`, `src/sse/services/auth.ts`):
  in ionad titim isteach i mbrainse frithdhúnta **in aghaidh na samhla** de
  chuid an tsoláthraí pas-trí (tá `passthroughModels: true` ag agentrouter →
  filleann `hasPerModelQuota()` `true`), cuireann sé **tréimhse mharana
  shealadach naisc** i bhfeidhm — `testStatus: "unavailable"` +
  `rateLimitedUntil`, agus ní stádas foirceanta riamh
  (`credits_exhausted`/`banned`/`expired`) — ionas go n-aisghabhann an nasc é
  féin nuair a théann an tréimhse mharana in éag, seachas athshocrú láimhe
  dintiúr a bheith de dhíth. Déantar é seo a scipeáil i gcás nasc ag a bhfuil
  `disableCooling: true` (#2997): titeann an rogha diúltaithe sin tríd chuig
  an bhfrithdhúnadh in aghaidh na samhla ina ionad sin (comhréiteach
  doiciméadaithe — féach an nóta sa chód os cionn an bhrainse).
- **Ródú teaglama san iarratas céanna** (`applyComboTargetExhaustion()`,
  `open-sse/services/combo/targetExhaustion.ts`): marcálann an garda céanna
  an nasc sa tacar cuimhneacháin `exhaustedConnections`, eochraithe de réir
  `${provider}:${connectionId}`. Ní dhéanann sé seo ach sprioc
  SAME-REQUEST atá fágtha a scipeáil nuair a bhíonn an `connectionId`
  beacht sin _ar oibiacht sprice na sprice féin cheana féin_
  (`getExhaustedTargetSkipReason()`,
  `open-sse/services/combo/comboPredicates.ts`, `if (provider &&
connectionId)` roimh chuardach `exhaustedConnections`) — ní thagann teaglama
  simplí liosta samhlacha, nach mbíonn `connectionId` pionnáilte dá gcuid
  féin ag spriocanna siblíne agus nach réitítear ceann ach amháin in aghaidh
  an tseolta ó cheanntásc `X-OmniRoute-Selected-Connection-Id` an fhreagra,
  leis an eochair sin riamh. Sa chás coitianta sin, NÍ hé an Set seo an
  fhíorchosaint ar chéim atá fágtha agus í ag athúsáid an chuntais atá díreach
  ídithe — is í an tsraith mharthanachta thuas í (tá `rateLimitedUntil` an
  naisc anois sa todhchaí) in éineacht leis an ngarda céanna seo ag cur
  `transientRateLimitedProviders` faoi chois don teip (féach "Dearadh dhá
  chéim" agus an nóta sa chód ar an mbrainse
  `isAgentrouterConnectionQuotaScope` in `targetExhaustion.ts`): ós rud é
  nach marcáiltear an Set sin, NÍ chuirtear i bhfeidhm ceadú éigeantach
  `allowRateLimitedConnection` de chuid `combo.ts`
  (`open-sse/services/combo.ts:1005-1013`, `:2734-2738`) do na céimeanna atá
  fágtha ag an soláthraí, mar sin urramaítear scagaire `rateLimitedUntil` an
  roghnaithe dintiúr (`src/sse/services/auth.ts:1238`) mar is gnách agus
  roghnaíonn céim atá fágtha nasc agentrouter eile atá fós incháilithe nó
  teipeann uirthi gan aon dintiúir ar fáil — ní bhrúnn sí a bealach ar ais
  chuig an nasc ar chuir an brainse seo tréimhse mharana air.

### Dearadh dhá chéim: athshonrú stádais, ansin aicmiú

Is clárlanna ar leith iad athshonrú stádais
(`upstreamStatusRestatement.ts`) agus rialacha aicmithe soláthraí
(`open-sse/config/providerErrorRules.ts`, `providerRuleRegistry`) a úsáideann
aitheantas an tsoláthraí agus marcóirí téacs mar eochracha, ach ritheann siad
in áiteanna éagsúla agus freastalaíonn siad ar chuspóirí éagsúla:
athscríobhann athshonrú an stádas HTTP go luath in `chatCore.ts`; roghnaíonn
rialacha aicmithe an `reason` cúltaca agus an `scope` glasála
(`model` / `provider` / `connection`) taobh istigh de `checkFallbackError()`
(`open-sse/services/accountFallback.ts`).

Ní fheiceann rialacha aicmithe téacs **iomlán** na hearráide (atá riachtanach
chun marcóirí coirp amhail `额度不足` a mheaitseáil) ach amháin i gcás
soláthraithe atá ar liosta ceadaithe `FULL_TEXT_RULE_PROVIDERS` in
`providerErrorRules.ts` — níl ann faoi láthair ach `"agentrouter"`. I gcás
gach soláthraí eile sa **chatalóg ionsuite**, ní thugann
`checkFallbackError` do `getProviderErrorRuleMatch` ach an earráid struchtúrtha
(`{code, type}`), rud atá leordhóthanach do rialacha ceanntásc-/stádais-/cód-
bhunaithe ach nach bhfeiceann marcóirí théacs an choirp. Déanann an cúntóir
`resolveRuleMatchBody()` an roghnú seo: téacs iomlán na hearráide do
sholáthraithe ar an liosta ceadaithe, agus an earráid struchtúrtha i ngach
cás eile. Is rogha shainráite isteach in aghaidh an tsoláthraí é soláthraí
**ionsuite** a chur le `FULL_TEXT_RULE_PROVIDERS` — tá sé ann ionas go
bhfanfaidh an cosán réamhshocraithe do gach soláthraí nach bhfuil ar an liosta
gan athrú beart ar bheart.

Is rogha isteach ar leith ó `FULL_TEXT_RULE_PROVIDERS` é `scope` rialach
(`model` / `provider` / `connection`): ní nochtann `checkFallbackError` é ach
mar `fallbackResult.ruleScope`, agus ní urramaíonn tomhaltóirí iartheachtacha
é mar rud ar bith seachas lipéad faisnéiseach ach amháin i gcás soláthraithe
atá ar liosta ceadaithe `HONORS_RULE_LOCK_SCOPE_PROVIDERS` sa chomhad céanna
(`faoi gheata trí honorsRuleLockScope()` — níl ann inniu ach
`"agentrouter"`). Féach "Earráidí cuóta athshonraithe" thuas chun a fháil
amach cad a dhéanann comhoiriúnú `scope: "connection"` i ndáiríre a luaithe
a bhíonn soláthraí ar an liosta ceadaithe sin.

**#11104 — seachnaíonn rialacha arna ndearbhú ag an oibreoir an dá liosta ceadaithe.** Is féidir le hoibreoir
riail in aghaidh an tsoláthraí a dhearbhú ag am rite trí `settings.providerErrorRules`
(`open-sse/config/providerErrorRules.ts::setOperatorProviderErrorRules`)
gan an comhad seo a chur in eagar. Dá gcuirfí riail oibreora faoi réir
`FULL_TEXT_RULE_PROVIDERS`/`HONORS_RULE_LOCK_SCOPE_PROVIDERS` — liostaí ceadaithe
atá ceaptha iompraíocht **réamhshocraithe** rialacha ionsuite na catalóige a chosaint — d’fhágfaí
meicníocht na socruithe neamhghníomhach do gach soláthraí seachas iad siúd atá
liostaithe ann cheana, ós rud é gurb ionann dearbhú na rialach agus rogha shainráite
an oibreora cheana féin. Seiceálann `resolveRuleMatchBody()` agus
`honorsRuleLockScope()` araon `hasOperatorRuleForProvider()` ar dtús: faigheann
soláthraí a bhfuil riail oibreora aige téacs amh na hearráide agus urramaítear an
`scope` a dhearbhaigh sé, is cuma an bhfuil sé le feiceáil i gceachtar liosta ceadaithe.

**Bearna atá ar eolas — ní théitear i gcomhairle le `providerRuleRegistry` riamh i gcás HTTP 400.**
Aicmíonn brainse `BAD_REQUEST` de chuid `checkFallbackError` stádas 400 go hiomlán
trína eagair patrún féin (`MODEL_ACCESS_DENIED_PATTERNS`,
`CONTEXT_OVERFLOW_PATTERNS`, etc. in `accountFallback.ts`) agus filleann sé sula
sroichtear an brainse `configuredRule`/`getProviderErrorRuleMatch` os a chionn.
Tá riail ionsuite catalóige (nó riail oibreora) le `status: 400`
bailí ó thaobh comhréire de ach ní chuirfear i ngníomh riamh í. Níl aon riail atá ann faoi láthair
dírithe ar 400, mar sin ní dhéantar difear d’aon rud sa táirgeadh — ach ní mór an
brainse seo a athrú ar dtús le haghaidh riail 400 amach anseo, athrú atá níos mó ná riail
a chur leis (athraíonn sé aicmiú 400 do gach soláthraí atá ag brath cheana féin ar
iompraíocht na n-eagar patrún) agus atá lasmuigh de scóip riail aon soláthraí amháin a chur leis.

### Geata nua a chur leis a mhíléiríonn cuóta

1. Cláraigh eagar rialacha amháin in `statusRestatementRegistry`
   (`open-sse/config/upstreamStatusRestatement.ts`). Coinnigh `textMarkers`
   sonrach don soláthraí; ná hathúsáid frásaí cineálacha Béarla a thagann salach ar
   `CREDITS_EXHAUSTED_SIGNALS` (`open-sse/services/accountFallback.ts`).
2. Más mian leat, cláraigh rialacha aicmithe in
   `open-sse/config/providerErrorRules.ts` (`providerRuleRegistry`) chun
   an scóip ghlais cheart a roghnú (`connection` do chuóta ar fud an chuntais, `model` d’earráidí
   in aghaidh na samhla). Ní bhíonn éifeacht ag an gcéim seo sa táirgeadh ach amháin i gcás
   soláthraithe a dteastaíonn téacs iomlán na hearráide óna rialacha (marcóirí coirp): cuir
   aitheantas an tsoláthraí le `FULL_TEXT_RULE_PROVIDERS` sa chomhad céanna — murach sin
   ní thugann `checkFallbackError` don riail ach an earráid struchtúrtha
   `{code, type}` agus ní mheaitseálfaidh riail théacs coirp trácht beo choíche.
   Ní gá an rogha shainráite seo do rialacha nach meaitseálann ach de réir `status`/`headers`
   (amhail rialacha Opencode nó Minimax). Ar leithligh, má dhearbhaíonn an riail
   `scope: "connection"` agus más é an rún tréimhse shuaimhnithe iarbhír ar fud an naisc
   chomh maith le teaglaim a scipeáil san iarratas céanna (seachas lipéad faisnéiseach amháin), cuir
   aitheantas an tsoláthraí le `HONORS_RULE_LOCK_SCOPE_PROVIDERS` sa chomhad céanna — is é seo
   a rialaíonn úsáid ar nós `isAgentrouterConnectionQuotaScope()` in
   `markAccountUnavailable()` (`src/sse/services/auth.ts`) agus
   `applyComboTargetExhaustion()`
   (`open-sse/services/combo/targetExhaustion.ts`); gan é, téann `scope`
   ar aghaidh fós trí `fallbackResult.ruleScope` ach ní ghníomhaíonn aon rud dá réir.
3. Cuir tástálacha aonaid leis a dhéanann aithris ar `tests/unit/upstream-status-restatement.test.ts`
   agus `tests/unit/agentrouter-error-rules.test.ts` (lena n-áirítear na
   cosaintí not-permanent / not-creditsExhausted, agus — má theastaíonn
   an liosta ceadaithe ón soláthraí — tástáil a dhearbhaíonn nach bhfilleann `resolveRuleMatchBody()`
   an téacs iomlán ach don soláthraí sin).

Ní gá aon athruithe a dhéanamh ar `chatCore.ts`, `classifyError`, ná combo.

#### Glas grúpáilte de réir egress (#10880)

Caitear le soláthraithe in `EGRESS_BUCKETED_LOCK_PROVIDERS` (teaghlach opencode)
mar sheirbhísí réamhtheachtacha grúpáilte de réir IP (tá sraith saor in aisce opencode grúpáilte de réir IP, ní
de réir cuntais — féach #9611): cuireann stádas-429 atá aicmithe mar `quota_exhausted`
**nó** `rate_limit_exceeded` gach nasc sa teaghlach ceadaithe a bhfuil a sheoladh IP egress
deireanach atá ar eolas ag teacht le seoladh an naisc ar theip air i dtréimhse shuaimhnithe, sular féidir leis an
rothlú triail a bhaint astu
— rud a sheachnaíonn N-1 glao réamhtheachtach a dteipfidh orthu go cinnte (an cruth céanna le #10460/#10525).
Cuirtear `rate_limit_exceeded` san áireamh d’aon ghnó: ar chonair `markAccountUnavailable`
ní mheaitseálann na rialacha a bhaineann go sonrach le opencode riamh (ní thugtar headers/body do
`checkFallbackError`, níl opencode in `FULL_TEXT_RULE_PROVIDERS`), mar sin aicmítear 429
a bhfuil téacs chuóta an tsíntiúis ina chorp ("monthly usage limit
reached") mar `quota_exhausted` ag an gcúltiomáint téacs cuóta
(`buildSubscriptionQuotaFallback`, `accountFallback.ts`; tréimhse shuaimhnithe 1h) sula
sroichtear riail `status_429` riamh — agus aicmítear 429 gan téacs cuóta (gnáth-theorannú
ráta) trí riail `status_429` mar `rate_limit_exceeded`
agus cuirtear an teaghlach IP i dtréimhse shuaimhnithe fós. I gcás soláthraí ceadaithe, is ionann
teorainn ráta atá grúpáilte de réir IP agus an comhartha a thugann cuóta ídithe. Teorainneacha macánta:

- **Iarracht is fearr**: réitíonn an glas an `egress_ip` deireanach atá ar eolas
  don nasc ó `proxy_logs` (fuinneog 24h, sioncrónach, gan taisce). Le taisce fhuar (níor
  tástáladh an IP amach riamh) nó mura bhfuil aon ró ann → fuaraíonn an brainse an
  nasc a theip fós (taifeadta mar atá inniu), ach ní ghlasáiltear aon chomh-nasc.
- **Ní bhíonn sé críochfoirt riamh**: is fuinneog chuóta in-athnuaite é an tréimhse fuaraithe
  (`testStatus: "unavailable"`); ní dhíorthaítear staid bhuan riamh ó chomhartha ar
  leibhéal IP. Scipeálann naisc `disableCooling` an brainse go hiomlán.
- **Athraíonn gráinneacht an ghlais don teaghlach ar an liosta ceadaithe**: is athrú scóipe
  é seo, ní barrfheabhsú comh-naisc amháin. Is soláthraí `passthroughModels`
  é opencode, mar sin roimh an mbrainse seo chruthaigh 429 frithdhúnadh in aghaidh na SAMHLA;
  cruthaíonn sé tréimhse fuaraithe naisc anois — lena n-áirítear d’oibreoir nach bhfuil ach
  nasc amháin aige agus gan aon chomh-nasc ar chor ar bith. Sin í an ghráinneacht a dhearbhaíonn
  tábla rialacha opencode a bheith ceart cheana féin (`scope: "connection"`,
  `providerErrorRules.ts`), ach nár cloíodh léi go dtí seo toisc nach bhfuil opencode in
  `HONORS_RULE_LOCK_SCOPE_PROVIDERS`. Scríobhann an brainse tréimhse fuaraithe an
  naisc a theip + `backoffLevel` é féin, ag aithris ar an mbrainse agentrouter
  atá scópáilte de réir naisc, agus filleann sé — ní shroichtear riamh an bloc de réir samhla
  ná an chonair ghinearálta thíos.
- **Teaglaim san áireamh**: cosúil leis an mbrainse agentrouter, déanann an scóip neamhaird d’aon ghnó
  ar an íosghrádú `persistUnavailableState`/`isCombo` a chuireann glaoiteoir teaglaime
  i bhfeidhm ar 429. Ní leagan níos laige den scóip seo é frithdhúnadh de réir samhla,
  is é an t-aonad mícheart é: ní deir sé aon rud faoin IP ídithe, mar sin
  leanfadh rothlú na teaglaime de ghlao amháin a bhfuil teip ráthaithe air a chur amú in aghaidh an chomh-naisc.
- **Sábháilteacht comh-nasc**: ní fhorscríobhtar riamh comh-nasc atá críochfoirt cheana féin
  (banned/credits_exhausted) nó atá i dtréimhse fuaraithe níos faide cheana féin.
- **Liosta ceadaithe eisiach**: is cinneadh sainráite úinéara é
  `EGRESS_BUCKETED_LOCK_PROVIDERS` a leathnú; níl aon sreangú ginearálta ann
  (patrún #10334/#10419). Ceanglaíonn fiosrúchán na gcomh-nasc an liosta ceadaithe céanna
  seachas é a athrá mar litiréal SQL, mar sin fanann a leathnú ina athrú aon líne amháin.
- **Rothlú IP amach, sa dá threo**: tá an fhuinneog chuardaigh (24h) i bhfad
  níos leithne ná TTL thaisce an IP amach (5 nóiméad), mar sin is stair é “an IP deireanach
  atá ar eolas”, ní an staid reatha. Má rothlaigh seachfhreastalaí naisc laistigh den fhuinneog,
  d’fhéadfadh an glas IP atá comhroinnte i ndáiríre a **chailleadh** (is é an IP taifeadta an ceann nua
  nach bhfuil ídithe) — agus, go siméadrach, d’fhéadfadh sé **comh-nasc atá rothlaithe
  amach ó shin a fhuarú** ón IP ídithe. Cosnaíonn an dara cás fuinneog fuaraithe amháin
  ar an gcomh-nasc sin; glactar leis an dá cheann mar theorainneacha iarrachta is fearr a bhaineann le
  cuardach stairbhunaithe.
- **Costas**: dhá scanadh theoranta ar `proxy_logs` (scagtha de réir fuinneoige trí
  `idx_pl_timestamp`), ag minicíocht 429 amháin. Gan aon innéacs nua (aistriú 134
  YAGNI). Tomhaiseadh é ar chóip de bhunachar sonraí tráchta réadaigh de mhéid measartha; coimeádann
  ásc ard-tréchuir líon comhréireach níos mó rónna san fhuinneog chéanna.

---

## Gnéithe Athléimneachta Eile

- **19 straitéis ródaithe** (tosaíocht, ualaithe, rothlach, athsheachadadh comhthéacs, líonadh ar dtús, p2c, randamach, is lú úsáidte, optamaithe ó thaobh costais de, feasach ar athshocrú, fuinneog athshocraithe, spás breise, dianrandamach, uathoibríoch, lkgp, optamaithe don chomhthéacs, optamaithe don taisce, cumasc, píblíne) — féach [AUTO-COMBO.md](../routing/AUTO-COMBO.md).
- **Ródú feasach ar athshocrú** (v3.8.0) — tugtar tús áite do naisc de réir am athshocraithe an chuóta.
- **Díghrádú an mhóid chúlra** — déantar API na bhFreagairtí `background: true` a íosghrádú go mód sioncronach agus eisítear rabhadh.
- **Teorainn dhinimiciúil uirlisí a bhrath** — cúlaítear ó sholáthraithe nuair a shroichtear teorainneacha ar líon na n-uirlisí.
- **Cúltaca éigeandála** — rialaítear é le `OMNIROUTE_EMERGENCY_FALLBACK`; is féidir le hoibreoirí é a shárú ón leathanach Bratacha Gné gan atosú.

---

## Dífhabhtú

- Gach eochair do sholáthraí scipeáilte → seiceáil staid an scoradáin chiorcaid AGUS `rateLimitedUntil`/`testStatus` gach naisc.
- Soláthraí eisiata go buan tar éis na fuinneoige athshocraithe → tá an cód ag léamh `state` amh in ionad `getStatus()`/`canExecute()`.
- Teipeann ar eochair amháin, ach ba cheart do na cinn eile oibriú → tabhair tús áite d’fhuarú naisc thar scoradán ciorcaid.
- Ní theipeann ach ar shamhail amháin → tabhair tús áite d’eisiamh na samhla thar fhuarú naisc.
- Ba cheart don staid í féin a athshlánú ach ní dhéanann sí amhlaidh → seiceáil stampa ama amach anseo + cosán léite a athnuachan staid atá imithe in éag. Éilíonn staideanna buana athruithe láimhe.

---

## Méarlorgaireacht TLS & Ceilt

Tá ceilt a bhaineann go sonrach le soláthraithe (JA3/JA4, CCH, doiléiriú) doiciméadaithe ar leithligh — féach `docs/security/STEALTH_GUIDE.md` (git; gan a bheith tiomsaithe isteach i `/docs`).

---

## Tástáil athléimneachta (Céim 8 · Bloc C)

Taobh amuigh de thástálacha aonaid don loighic athléimneachta, déanann trí thástáil an t-am rite a thástáil faoi
dhálaí fíorstrusúla/teipe (iad uile comhtháthaithe/oíche — ní chuireann aon cheann acu bac ar PRanna):

| Tástáil     | Cad                                                                                                                                                                                                                         | Rith                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| Anord       | Insteallann nód bréige réamhtheachtach fíormhoill/athshocrú/teorainn ama/503; deimhnítear go n-osclaítear/go n-athshlánaítear an scoradán ciorcaid agus go n-aicmíonn `checkFallbackError` 503 mar chúltaca in-aisghabhála. | `RUN_CHAOS_INT=1 npm run test:chaos`       |
| Fás carnáin | ~500 sruth in aghaidh `createSSEStream` faoi `--expose-gc`; teipeann sé má fhásann an carn thar an uasteorainn (cosaint OOM #3069).                                                                                         | `npm run test:heap`                        |
| Maos k6     | Ualach leanúnach ar `/api/monitoring/health`; tairseacha p95/earráide.                                                                                                                                                      | `k6 run tests/load/k6-soak.js` (go hoíche) |

Tá sé comhordaithe ag `.github/workflows/nightly-resilience.yml` (cron + seoladh). Sa
`test:integration` réamhshocraithe, scipeálann anord agus carn iad féin (gan `RUN_CHAOS_INT`/`--expose-gc`).

---

## Féach Freisin

- [Treoir Ailtireachta](./ARCHITECTURE.md) — Ailtireacht agus gnéithe inmheánacha an chórais
- [Treoir Úsáideora](../guides/USER_GUIDE.md) — Soláthraithe, teaglamaí, comhtháthú CLI
- [Inneall Uath-Teaglama](../routing/AUTO-COMBO.md) — Scóráil 16 fhachtóir, pacáistí mód
