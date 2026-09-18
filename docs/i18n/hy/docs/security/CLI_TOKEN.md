# CLI Machine-ID Token (Հայերեն)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Ընդհանուր նկարագիր

OmniRoute CLI հրամանները նույնականացվում են տեղական կառավարման API-ում՝ օգտագործելով
`HMAC-SHA256(machine-id, salt)` թոքենը, որն ուղարկվում է
`x-omniroute-cli-token` հարցման վերնագրի միջոցով։

Սա թույլ է տալիս CLI ենթահրամաններին (`omniroute status`, `omniroute providers` և այլն)
դիմել կառավարման վերջնակետերին՝ առանց օգտատիրոջից յուրաքանչյուր գործարկման ժամանակ JWT կամ
գաղտնաբառ պահանջելու։

## Ինչպես է այն աշխատում

1. `getMachineTokenSync()`-ը կարդում է սարքաշարային մեքենայի ID-ն՝ օգտագործելով `node-machine-id`
   (ձախողման դեպքում օգտագործում է դատարկ տող՝ անջատելով CLI նույնականացումը)։
2. Այն հաշվարկում է `HMAC-SHA256(machine_id, salt)` և վերադարձնում է ամբողջական 64 նիշանոց
   տասնվեցական ամփոփագիրը՝ այս մեքենային կապված որոշակի և անշրջելի թոքեն։
3. CLI-ն թոքենն ուղարկում է որպես `x-omniroute-cli-token` միայն այն դեպքում, երբ որոշված
   նպատակակետը բացահայտ loopback URL է (`localhost`, `127.0.0.0/8` կամ
   loopback IPv6)։ Թոքեն պարունակող հարցումներն օգտագործում են `redirect: error`, որպեսզի տեղական
   վերահղումը չկարողանա այն փոխանցել այլ origin-ի։ Հեռակա համատեքստերի փոխարեն օգտագործվում են սահմանափակ
   շրջանակով հասանելիության թոքեններ։ Եթե ածանցումն անհասանելի է, CLI-ն բաց է թողնում վերնագիրը,
   իսկ `omniroute doctor`-ը հաղորդում է ձախողման մասին՝ դատարկ թոքենը վավեր
   համարելու փոխարեն։
4. Սերվերը (`src/server/authz/policies/management.ts`) նույն salt-ով վերահաշվարկում է
   ակնկալվող թոքենը և համեմատում այն `timingSafeEqual`-ի միջոցով՝
   ժամանակային չափումների վրա հիմնված արտահանումը կանխելու համար։

## Անվտանգության հատկություններ

| Հատկություն                                       | Մանրամասներ                                                                                                                                                                                                                       |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Միայն loopback**                                | Ընդունվում է միայն այն դեպքում, երբ սերվերի վստահելի peer-locality նշիչը (ստացված իրական TCP peer հասցեից) ցույց է տալիս loopback։ Տեղայնությունը որոշելու համար հաճախորդի կողմից կառավարվող `Host` վերնագրին երբեք չեն վստահում։ |
| **Հաստատուն ժամանակով համեմատություն**            | `crypto.timingSafeEqual`-ը կանխում է ժամանակային գրոհները։                                                                                                                                                                        |
| **Անշրջելի**                                      | HMAC-ի ելքից հնարավոր չէ վերականգնել մեքենայի ID-ն։                                                                                                                                                                               |
| **`always`-ով պաշտպանված ուղիների շրջանցում չկա** | `isAlwaysProtectedPath()`-ը գնահատվում է CLI թոքենի ստուգումից առաջ։ `/api/shutdown`-ը և `/api/settings/database`-ը միշտ պահանջում են JWT։                                                                                        |
| **Չարտահանվող**                                   | Թոքենը երբեք չի գրվում սկավառակի վրա և չի գրանցվում մատյաններում։                                                                                                                                                                 |

## Salt-ի պտտում

Սահմանեք `OMNIROUTE_CLI_SALT`՝ ածանցված թոքենը առանց կոդի փոփոխության պտտելու համար։
Պտտումից հետո այս մեքենայի բոլոր CLI գործընթացներն ինքնաբերաբար կօգտագործեն նոր թոքենը։
Սա օգտակար է գործընթացների ցանկի արտահոսքից հետո, որը կարող էր բացահայտել
նախորդ ածանցված արժեքը։

```bash
# Մշտական պտտում (ավելացրեք shell-ի պրոֆիլում)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Ստուգեք, որ նոր թոքենն օգտագործվում է
omniroute status
```

Լռելյայն salt՝ `omniroute-cli-auth-v1`

## Ժառանգական ձևաչափ (SHA-256, 32 նիշ) — դեռ ընդունվում է

Մինչև վերը նշված HMAC ձևաչափը CLI-ն ածանցում էր իր թոքենը որպես
`SHA-256(machineId + salt).hex[0..32]` (32 նիշանոց նախածանց)
`bin/cli/utils/cliToken.mjs`-ում (`getLegacyCliTokenSync`՝ `src/lib/machineToken.ts`-ում)։

Հետադարձ համատեղելիության համար սերվերն ընդունում է **երկու** ձևաչափն էլ․ ստուգիչը կառուցում է
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` և մուտքային
վերնագիրը համեմատում յուրաքանչյուրի հետ՝ օգտագործելով `timingSafeEqual`
(`src/server/authz/policies/management.ts` և `src/lib/middleware/cliTokenAuth.ts`)։
Այսպիսով, թոքենը վավեր է, եթե այն համապատասխանում է **կամ** 64 նիշանոց HMAC ամփոփագրին, **կամ** 32 նիշանոց
ժառանգական SHA-256 նախածանցին։

**Անջատում․** սահմանեք `OMNIROUTE_DISABLE_CLI_TOKEN=true` (միջավայրում կամ `.env`-ում)՝ CLI
թոքենի մեխանիզմն ամբողջությամբ անջատելու համար․ այդ դեպքում ամբողջ հասանելիությունը պահանջում է բացահայտ API բանալի։ Բազմաօգտատեր
հոսթերում սա խորհուրդ է տրվում, քանի որ `machine-id`-ն սարքի համար է (ոչ թե օգտատիրոջ), և նույն
հոսթի մեկ այլ օգտատեր կարող է հաշվարկել նույն թոքենը։

## Ֆայլեր

| Ֆայլ                                      | Նպատակ                                     |
| ----------------------------------------- | ------------------------------------------ |
| `src/lib/machineToken.ts`                 | Թոքենի ածանցում (`getMachineTokenSync`)    |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER` հաստատուն               |
| `src/server/authz/policies/management.ts` | Սերվերային ստուգում                        |
| `src/server/authz/routeGuard.ts`          | Loopback հոսթի ստուգում (`isLoopbackHost`) |

## Տե՛ս նաև

- `docs/security/ROUTE_GUARD_TIERS.md` — երթուղիների պաշտպանության մակարդակներ
- `docs/architecture/AUTHZ_GUIDE.md` — լիարժեք լիազորման շղթա
