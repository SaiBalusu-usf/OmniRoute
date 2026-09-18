# CLI Machine-ID Token (සිංහල)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## දළ විශ්ලේෂණය

OmniRoute CLI විධාන, `x-omniroute-cli-token` ඉල්ලීම් ශීර්ෂකය හරහා යවන
`HMAC-SHA256(machine-id, salt)` ටෝකනයක් භාවිතයෙන් දේශීය කළමනාකරණ API වෙත
සත්යාපනය වේ.

මෙමගින් CLI උපවිධානවලට (`omniroute status`, `omniroute providers`, ආදිය)
සෑම ක්රියාත්මක කිරීමකදීම පරිශීලකයාගෙන් JWT එකක් හෝ මුරපදයක් සැපයීම අවශ්ය නොවී
කළමනාකරණ අන්ත ලක්ෂ්ය ඇමතීමට හැකි වේ.

## එය ක්රියා කරන ආකාරය

1. `getMachineTokenSync()` විසින් `node-machine-id` හරහා දෘඩාංග යන්ත්ර ID එක කියවයි
   (අසමත් වුවහොත් හිස් තන්තුවක් භාවිත කරන අතර, එමගින් CLI සත්යාපනය අක්රිය වේ).
2. එය `HMAC-SHA256(machine_id, salt)` ගණනය කර සම්පූර්ණ අක්ෂර 64ක
   hex සාරාංශය ආපසු ලබා දෙයි — මෙම යන්ත්රයට බැඳුණු, නියත සහ ආපසු හැරවිය නොහැකි ටෝකනයකි.
3. නිරාකරණය කළ ගමනාන්තය පැහැදිලි loopback URL එකක් (`localhost`, `127.0.0.0/8`, හෝ
   loopback IPv6) වන විට පමණක් CLI විසින් ටෝකනය `x-omniroute-cli-token` ලෙස යවයි.
   ටෝකනය රැගෙන යන ඉල්ලීම් `redirect: error` භාවිත කරන බැවින්, දේශීය
   යළි-යොමු කිරීමකට එය වෙනත් මූලයක් වෙත යැවිය නොහැක. දුරස්ථ සන්දර්භ ඒ වෙනුවට විෂය පථයට
   සීමා කළ ප්රවේශ ටෝකන භාවිත කරයි. ව්යුත්පන්න කිරීම නොලැබේ නම්, CLI විසින් ශීර්ෂකය
   ඉවත් කරන අතර හිස් ටෝකනයක් වලංගු ලෙස සැලකීම වෙනුවට `omniroute doctor` විසින්
   අසමත් වීම වාර්තා කරයි.
4. කාලය මත පදනම් වූ උකහා ගැනීම් වැළැක්වීම සඳහා සේවාදායකය
   (`src/server/authz/policies/management.ts`) එකම salt එක භාවිතයෙන් අපේක්ෂිත
   ටෝකනය නැවත ගණනය කර `timingSafeEqual` හරහා සංසන්දනය කරයි.

## ආරක්ෂක ගුණාංග

| ගුණාංගය                              | විස්තරය                                                                                                                                                                                                                       |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Loopback සඳහා පමණි**               | සේවාදායකයේ විශ්වාසදායක peer-locality සලකුණ (සැබෑ TCP peer ලිපිනයෙන් ව්යුත්පන්න කළ) loopback බව පෙන්වන විට පමණක් පිළිගනු ලැබේ. ස්ථානීයත්වය තීරණය කිරීම සඳහා සේවාලාභියාට පාලනය කළ හැකි `Host` ශීර්ෂකය කිසිවිටෙක විශ්වාස නොකෙරේ. |
| **නියත-කාලීන සංසන්දනය**              | `crypto.timingSafeEqual` කාල-පාදක ප්රහාර වළක්වයි.                                                                                                                                                                             |
| **ආපසු හැරවිය නොහැකි**               | HMAC ප්රතිදානයෙන් machine-id එක නැවත ලබාගත නොහැක.                                                                                                                                                                             |
| **`always`-ආරක්ෂිත මඟහැරීමක් නොමැත** | CLI ටෝකන පරීක්ෂාවට පෙර `isAlwaysProtectedPath()` ඇගයීමට ලක් වේ. `/api/shutdown` සහ `/api/settings/database` සඳහා සැමවිටම JWT අවශ්ය වේ.                                                                                        |
| **අපනයනය කළ නොහැකි**                 | ටෝකනය කිසිවිටෙක තැටියට ලියනු හෝ ලොග් කරනු නොලැබේ.                                                                                                                                                                             |

## Salt මාරු කිරීම

කේත වෙනස්කම් නොමැතිව ව්යුත්පන්න කළ ටෝකනය මාරු කිරීමට `OMNIROUTE_CLI_SALT` සකසන්න.
මාරු කිරීමෙන් පසු, මෙම යන්ත්රයේ සියලුම CLI ක්රියාවලි ස්වයංක්රීයව නව ටෝකනය
භාවිත කරනු ඇත. පෙර ව්යුත්පන්න කළ අගය හෙළිදරව් කර තිබිය හැකි ක්රියාවලි-ලැයිස්තු
කාන්දුවකින් පසු මෙය ප්රයෝජනවත් වේ.

```bash
# ස්ථිර මාරු කිරීම (shell පැතිකඩට එක් කරන්න)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# නව ටෝකනය භාවිත වන බව තහවුරු කරන්න
omniroute status
```

පෙරනිමි salt එක: `omniroute-cli-auth-v1`

## පැරණි ආකෘතිය (SHA-256, අක්ෂර 32) — තවමත් පිළිගනු ලැබේ

ඉහත HMAC ආකෘතියට පෙර, CLI විසින් එහි ටෝකනය
`SHA-256(machineId + salt).hex[0..32]` (අක්ෂර 32ක උපසර්ගයක්) ලෙස
`bin/cli/utils/cliToken.mjs` තුළ ව්යුත්පන්න කරන ලදී (`src/lib/machineToken.ts` තුළ
`getLegacyCliTokenSync`).

පසුගාමී අනුකූලතාව සඳහා සේවාදායකය ආකෘති **දෙකම** පිළිගනී: සත්යාපකය
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` ගොඩනඟා,
ලැබෙන ශීර්ෂකය එක් එක් අගය සමඟ `timingSafeEqual` භාවිතයෙන් සංසන්දනය කරයි
(`src/server/authz/policies/management.ts` සහ `src/lib/middleware/cliTokenAuth.ts`).
එබැවින් ටෝකනයක් අක්ෂර 64ක HMAC සාරාංශයට හෝ අක්ෂර 32ක පැරණි SHA-256
උපසර්ගයට යන **දෙකෙන් එකකට** ගැළපේ නම් එය වලංගු වේ.

**ඉවත් වීම:** CLI ටෝකන යාන්ත්රණය සම්පූර්ණයෙන් අක්රිය කිරීමට
`OMNIROUTE_DISABLE_CLI_TOKEN=true` (env හෝ `.env`) සකසන්න; ඉන්පසු සියලු ප්රවේශ සඳහා
පැහැදිලි API යතුරක් අවශ්ය වේ. බහු-පරිශීලක ධාරකවල මෙය නිර්දේශ කෙරේ, මන්ද
`machine-id` එක එක් පරිශීලකයෙකුට නොව එක් උපාංගයකට අදාළ වන අතර එම ධාරකයේම වෙනත්
පරිශීලකයෙකුට එකම ටෝකනය ගණනය කළ හැකි බැවිනි.

## ගොනු

| ගොනුව                                     | අරමුණ                                         |
| ----------------------------------------- | --------------------------------------------- |
| `src/lib/machineToken.ts`                 | ටෝකන ව්යුත්පන්න කිරීම (`getMachineTokenSync`) |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER` නියතය                      |
| `src/server/authz/policies/management.ts` | සේවාදායක-පාර්ශ්ව සත්යාපනය                     |
| `src/server/authz/routeGuard.ts`          | Loopback ධාරක පරීක්ෂාව (`isLoopbackHost`)     |

## මෙයද බලන්න

- `docs/security/ROUTE_GUARD_TIERS.md` — මාර්ග ආරක්ෂණ මට්ටම්
- `docs/architecture/AUTHZ_GUIDE.md` — සම්පූර්ණ අවසරකරණ නළ මාර්ගය
