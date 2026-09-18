# CLI Machine-ID Token (Gaeilge)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Forléargas

Fíordheimhníonn orduithe OmniRoute CLI leis an API bainistíochta áitiúil trí úsáid a bhaint as comhartha
`HMAC-SHA256(machine-id, salt)` a sheoltar trí cheanntásc iarratais
`x-omniroute-cli-token`.

Ligeann sé seo d'fho-orduithe CLI (`omniroute status`, `omniroute providers`, srl.)
críochphointí bainistíochta a ghlaoch gan iallach a chur ar an úsáideoir JWT nó
pasfhocal a sholáthar gach uair a ritear iad.

## Conas a oibríonn sé

1. Léann `getMachineTokenSync()` aitheantas crua-earraí an mheaisín trí `node-machine-id`
   (téitear siar go teaghrán folamh má theipeann air, rud a dhíchumasaíonn fíordheimhniú CLI).
2. Ríomhann sé `HMAC-SHA256(machine_id, salt)` agus tugann sé ar ais an díolaim heicsidheachúlach
   iomlán 64-charachtar — comhartha cinntitheach, do-aisiompaithe atá ceangailte leis an meaisín seo.
3. Ní sheolann an CLI an comhartha mar `x-omniroute-cli-token` ach amháin nuair is URL
   aisfhillte sainráite (`localhost`, `127.0.0.0/8`, nó IPv6 aisfhillte) é an ceann scríbe
   réitithe. Úsáideann iarratais a iompraíonn an comhartha `redirect: error`, ionas nach féidir
   le hatreorú áitiúil é a chur ar aghaidh chuig foinse eile. Úsáideann comhthéacsanna cianda
   comharthaí rochtana scópáilte ina ionad sin. Mura bhfuil an díorthú ar fáil, fágann an CLI
   an ceanntásc ar lár agus tuairiscíonn `omniroute doctor` an teip seachas glacadh le comhartha
   folamh mar chomhartha bailí.
4. Athríomhann an freastalaí (`src/server/authz/policies/management.ts`) an comhartha
   ionchais leis an salt céanna agus cuireann sé i gcomparáid é trí `timingSafeEqual` chun
   eastóscadh bunaithe ar uainiú a chosc.

## Airíonna slándála

| Airí                                   | Sonra                                                                                                                                                                                                                                                                                       |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Aisfhilleadh amháin**                | Ní ghlactar leis ach amháin nuair a léiríonn stampa iontaofa an fhreastalaí maidir le logántacht an phiara (arna dhíorthú ó fhíorsheoladh TCP an phiara) gur aisfhilleadh atá ann. Ní chuirtear muinín riamh sa cheanntásc `Host`, atá faoi rialú an chliaint, chun logántacht a chinneadh. |
| **Comparáid ama thairisigh**           | Cuireann `crypto.timingSafeEqual` cosc ar ionsaithe uainiúcháin.                                                                                                                                                                                                                            |
| **Do-aisiompaithe**                    | Ní féidir an machine-id a aisghabháil ó aschur HMAC.                                                                                                                                                                                                                                        |
| **Gan seachaint ar chosaint `always`** | Déantar `isAlwaysProtectedPath()` a mheas roimh sheiceáil an chomhartha CLI. Bíonn JWT de dhíth i gcónaí ar `/api/shutdown` agus `/api/settings/database`.                                                                                                                                  |
| **Do-easpórtáilte**                    | Ní scríobhtar an comhartha ar diosca ná ní logáiltear é riamh.                                                                                                                                                                                                                              |

## Rothlú salt

Socraigh `OMNIROUTE_CLI_SALT` chun an comhartha díorthaithe a rothlú gan athruithe ar an gcód.
Tar éis an rothlaithe, úsáidfidh gach próiseas CLI ar an meaisín seo an comhartha nua
go huathoibríoch. Tá sé úsáideach tar éis sceitheadh liosta próiseas a d'fhéadfadh an
luach díorthaithe roimhe seo a nochtadh.

```bash
# Rothlú buan (cuir leis an bpróifíl bhlaoisce)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Deimhnigh go bhfuil an comhartha nua in úsáid
omniroute status
```

Salt réamhshocraithe: `omniroute-cli-auth-v1`

## Formáid oidhreachta (SHA-256, 32-charachtar) — glactar léi fós

Roimh an bhformáid HMAC thuas, dhíorthaigh an CLI a chomhartha mar
`SHA-256(machineId + salt).hex[0..32]` (réimír 32-charachtar) in
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` in `src/lib/machineToken.ts`).

Ar mhaithe le comhoiriúnacht siarghabhálach, glacann an freastalaí leis an **dá** fhormáid:
tógann an fíoraitheoir `expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]`
agus cuireann sé an ceanntásc isteach i gcomparáid le gach ceann acu trí `timingSafeEqual`
(`src/server/authz/policies/management.ts` agus `src/lib/middleware/cliTokenAuth.ts`).
Mar sin, bíonn comhartha bailí má mheaitseálann sé **ceachtar** den díolaim HMAC 64-charachtar
nó den réimír oidhreachta SHA-256 32-charachtar.

**Diúltú:** socraigh `OMNIROUTE_DISABLE_CLI_TOKEN=true` (timpeallacht nó `.env`) chun sásra
an chomhartha CLI a dhíchumasú go hiomlán; beidh eochair API shainráite de dhíth ansin le
haghaidh gach rochtana. Moltar é seo ar óstaigh ilúsáideora, ós rud é go mbaineann `machine-id`
leis an ngléas (ní leis an úsáideoir) agus go bhféadfadh úsáideoir eile ar an óstach céanna
an comhartha céanna a ríomh.

## Comhaid

| Comhad                                    | Cuspóir                                        |
| ----------------------------------------- | ---------------------------------------------- |
| `src/lib/machineToken.ts`                 | Díorthú comhartha (`getMachineTokenSync`)      |
| `src/server/authz/headers.ts`             | Tairiseach `CLI_TOKEN_HEADER`                  |
| `src/server/authz/policies/management.ts` | Fíorú ar thaobh an fhreastalaí                 |
| `src/server/authz/routeGuard.ts`          | Seiceáil óstaigh aisfhillte (`isLoopbackHost`) |

## Féach freisin

- `docs/security/ROUTE_GUARD_TIERS.md` — leibhéil chosanta bealaí
- `docs/architecture/AUTHZ_GUIDE.md` — píblíne iomlán údaraithe
