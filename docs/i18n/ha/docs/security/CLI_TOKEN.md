# CLI Machine-ID Token (Hausa)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Bayani

Umarnin OmniRoute CLI suna tantance sahihanci da API na gudanarwa na gida ta amfani da
alamar `HMAC-SHA256(machine-id, salt)` da ake aikawa ta cikin kan buƙatar
`x-omniroute-cli-token`.

Wannan yana ba ƙananan umarnin CLI (`omniroute status`, `omniroute providers`, da sauransu)
damar kiran wuraren ƙarshen gudanarwa ba tare da buƙatar mai amfani ya bayar da JWT ko
kalmar sirri a kowane kira ba.

## Yadda yake aiki

1. `getMachineTokenSync()` yana karanta ID ɗin na'urar daga kayan aiki ta hanyar `node-machine-id`
   (yana komawa zuwa tsagaggen kirtani idan an samu matsala, wanda ke kashe tantancewar CLI).
2. Yana ƙididdige `HMAC-SHA256(machine_id, salt)` sannan ya dawo da cikakken taƙaitaccen
   hex mai haruffa 64 — alama mai tabbataccen sakamako, wadda ba za a iya juya ta ba kuma aka ɗaure ta da wannan na'ura.
3. CLI yana aika alamar a matsayin `x-omniroute-cli-token` ne kawai idan wurin da aka warware
   URL ne na loopback da aka bayyana kai tsaye (`localhost`, `127.0.0.0/8`, ko
   loopback IPv6). Buƙatun da ke ɗauke da alamar suna amfani da `redirect: error`, don haka karkatarwa ta gida
   ba za ta iya tura ta zuwa wani asali ba. Mahallai masu nisa suna amfani da keɓaɓɓun
   alamun samun dama maimakon haka. Idan ba a iya samar da alamar ba, CLI ba zai haɗa kan buƙatar ba,
   kuma `omniroute doctor` zai bayar da rahoton gazawar maimakon ɗaukar tsagaggen alama
   a matsayin ingantacciya.
4. Sabar (`src/server/authz/policies/management.ts`) tana sake ƙididdige
   alamar da ake tsammani da salt ɗin guda sannan ta kwatanta ta ta hanyar `timingSafeEqual` domin
   hana fitar da ita ta hanyar bambancin lokaci.

## Kadarorin tsaro

| Kadara                                 | Cikakken bayani                                                                                                                                                                                                                                              |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Loopback kawai**                     | Ana karɓa ne kawai idan hatimin kasancewar takwara a gida da sabar ta amince da shi (wanda aka samo daga ainihin adireshin takwarar TCP) ya nuna loopback. Ba a taɓa amincewa da kan `Host` da abokin ciniki ke sarrafawa wajen tantance kasancewar gida ba. |
| **Kwatantawa mai daidaitaccen lokaci** | `crypto.timingSafeEqual` yana hana hare-haren lokaci.                                                                                                                                                                                                        |
| **Ba za a iya juya shi ba**            | Ba za a iya dawo da machine-id daga sakamakon HMAC ba.                                                                                                                                                                                                       |
| **Babu tsallake kariyar `always`**     | Ana tantance `isAlwaysProtectedPath()` kafin duba alamar CLI. `/api/shutdown` da `/api/settings/database` koyaushe suna buƙatar JWT.                                                                                                                         |
| **Ba za a iya fitar da shi ba**        | Ba a taɓa rubuta alamar zuwa faifai ko shigar da ita cikin rajista ba.                                                                                                                                                                                       |

## Sauya salt

Saita `OMNIROUTE_CLI_SALT` domin sauya alamar da ake samarwa ba tare da canjin lamba ba.
Bayan sauyawa, duk matakan CLI a wannan na'ura za su yi amfani da sabuwar alamar
kai tsaye. Wannan yana da amfani bayan fallasar jerin matakai da wataƙila ta bayyana
ƙimar da aka samar a baya.

```bash
# Sauyawa na dindindin (ƙara zuwa bayanin martabar shell)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Tabbatar ana amfani da sabuwar alamar
omniroute status
```

Salt na asali: `omniroute-cli-auth-v1`

## Tsohon tsari (SHA-256, haruffa 32) — har yanzu ana karɓarsa

Kafin tsarin HMAC da ke sama, CLI yana samar da alamarsa a matsayin
`SHA-256(machineId + salt).hex[0..32]` (gaba mai haruffa 32) a cikin
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` a cikin `src/lib/machineToken.ts`).

Domin dacewa da tsoffin nau'ikan, sabar tana karɓar **dukkan** tsarukan biyu: mai tabbatarwa yana gina
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` sannan yana kwatanta
kan buƙatar da ya shigo da kowannensu ta amfani da `timingSafeEqual`
(`src/server/authz/policies/management.ts` da `src/lib/middleware/cliTokenAuth.ts`).
Saboda haka, alama tana aiki idan ta dace da **ko dai** taƙaitaccen HMAC mai haruffa 64 ko kuma
gaban tsohon SHA-256 mai haruffa 32.

**Kashewa:** saita `OMNIROUTE_DISABLE_CLI_TOKEN=true` (env ko `.env`) domin kashe tsarin
alamar CLI gaba ɗaya; daga nan duk samun dama zai buƙaci takamaiman maɓallin API. A kan na'urori
masu amfani da yawa, ana ba da shawarar yin hakan, domin `machine-id` na kowace na'ura ne (ba na kowane mai amfani ba), kuma wani
mai amfani a wannan na'urar zai iya ƙididdige alamar iri ɗaya.

## Fayiloli

| Fayil                                     | Manufa                                        |
| ----------------------------------------- | --------------------------------------------- |
| `src/lib/machineToken.ts`                 | Samar da alama (`getMachineTokenSync`)        |
| `src/server/authz/headers.ts`             | Ƙimar dindindin ta `CLI_TOKEN_HEADER`         |
| `src/server/authz/policies/management.ts` | Tabbatarwa a ɓangaren sabar                   |
| `src/server/authz/routeGuard.ts`          | Duba mai masaukin loopback (`isLoopbackHost`) |

## Duba kuma

- `docs/security/ROUTE_GUARD_TIERS.md` — matakan kariyar hanya
- `docs/architecture/AUTHZ_GUIDE.md` — cikakken tsarin bayar da izini
