# CLI Machine-ID Token (አማርኛ)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## አጠቃላይ እይታ

የOmniRoute CLI ትዕዛዞች በ`x-omniroute-cli-token` የጥያቄ ራስጌ በኩል የሚላክን
የ`HMAC-SHA256(machine-id, salt)` ቶከን በመጠቀም በአካባቢያዊው የአስተዳደር API ላይ
ማንነታቸውን ያረጋግጣሉ።

ይህም የCLI ንዑስ ትዕዛዞች (`omniroute status`፣ `omniroute providers`፣ ወዘተ)
ተጠቃሚው በእያንዳንዱ ጥሪ JWT ወይም የይለፍ ቃል እንዲያቀርብ ሳያስፈልግ
የአስተዳደር መጨረሻ ነጥቦችን እንዲጠሩ ያስችላል።

## እንዴት እንደሚሠራ

1. `getMachineTokenSync()` በ`node-machine-id` በኩል የሃርድዌር ማሽን መለያውን ያነባል
   (ሲሳነው ወደ ባዶ ሕብረቁምፊ ይመለሳል፣ ይህም የCLI ማረጋገጫን ያሰናክላል)።
2. `HMAC-SHA256(machine_id, salt)`ን ያሰላል እና ሙሉውን ባለ64-ቁምፊ
   hex digest ይመልሳል — ከዚህ ማሽን ጋር የተሳሰረ ወጥና ወደኋላ ሊቀለበስ የማይችል ቶከን።
3. CLIው ቶከኑን እንደ `x-omniroute-cli-token` የሚልከው የተፈታው
   መድረሻ ግልጽ የloopback URL (`localhost`፣ `127.0.0.0/8`፣ ወይም
   loopback IPv6) ሲሆን ብቻ ነው። ቶከኑን የያዙ ጥያቄዎች `redirect: error`ን ይጠቀማሉ፣ ስለዚህ አካባቢያዊ
   ማዘዋወር ወደ ሌላ origin ሊያስተላልፈው አይችልም። የርቀት አውዶች በምትኩ ወሰን የተበጀላቸውን
   የመዳረሻ ቶከኖች ይጠቀማሉ። ማመንጨት የማይቻል ከሆነ CLIው ራስጌውን አያካትትም
   እና `omniroute doctor` ባዶ ቶከንን ትክክለኛ አድርጎ ከመቁጠር ይልቅ ውድቀቱን ሪፖርት ያደርጋል።
4. አገልጋዩ (`src/server/authz/policies/management.ts`) በተመሳሳይ salt
   የሚጠበቀውን ቶከን እንደገና ያሰላል እና በጊዜ ልዩነት ላይ የተመሠረተ ማውጣትን
   ለመከላከል በ`timingSafeEqual` ያወዳድራል።

## የደህንነት ባህሪያት

| ባህሪ                        | ዝርዝር                                                                                                                                                           |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Loopback ብቻ**            | የአገልጋዩ እምነት የተጣለበት የpeer-locality ማህተም (ከትክክለኛው የTCP peer አድራሻ የሚገኝ) loopback እንደሆነ ሲገልጽ ብቻ ተቀባይነት ያገኛል። በደንበኛው የሚቆጣጠረው `Host` ራስጌ ለአካባቢያዊነት ፈጽሞ እምነት አይጣልበትም። |
| **በቋሚ ጊዜ ማወዳደር**           | `crypto.timingSafeEqual` የጊዜ መለኪያ ጥቃቶችን ይከላከላል።                                                                                                                |
| **ወደኋላ የማይቀለበስ**           | ከHMAC ውጤት machine-idን መልሶ ማግኘት አይቻልም።                                                                                                                          |
| **የ`always`-ጥበቃ ማለፊያ የለም** | `isAlwaysProtectedPath()` ከCLI ቶከን ምርመራው በፊት ይገመገማል። `/api/shutdown` እና `/api/settings/database` ሁልጊዜ JWT ይፈልጋሉ።                                               |
| **ወደ ውጭ የማይላክ**            | ቶከኑ ፈጽሞ ወደ ዲስክ አይጻፍም ወይም በመዝገብ አይመዘገብም።                                                                                                                        |

## የSalt ማዞር

የተገኘውን ቶከን የኮድ ለውጦች ሳያስፈልጉ ለማዞር `OMNIROUTE_CLI_SALT`ን ያቀናብሩ።
ከማዞሩ በኋላ በዚህ ማሽን ላይ ያሉ ሁሉም የCLI ሂደቶች አዲሱን ቶከን
በራስ-ሰር ይጠቀማሉ። ከዚህ ቀደም የተገኘውን እሴት አጋልጦ ሊሆን ከሚችል
የሂደት ዝርዝር ፍሰት በኋላ ጠቃሚ ነው።

```bash
# ቋሚ ማዞር (ወደ shell profile ያክሉ)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# አዲሱ ቶከን ጥቅም ላይ መዋሉን ያረጋግጡ
omniroute status
```

ነባሪ salt፦ `omniroute-cli-auth-v1`

## የቆየ ቅርጸት (SHA-256፣ ባለ32-ቁምፊ) — አሁንም ተቀባይነት አለው

ከላይ ካለው የHMAC ቅርጸት በፊት CLIው ቶከኑን
`SHA-256(machineId + salt).hex[0..32]` (ባለ32-ቁምፊ ቅድመ ክፍል) በ
`bin/cli/utils/cliToken.mjs` (በ`src/lib/machineToken.ts` ውስጥ `getLegacyCliTokenSync`) ያመነጭ ነበር።

ለኋላቀር ተኳኋኝነት አገልጋዩ **ሁለቱንም** ቅርጸቶች ይቀበላል፦ አረጋጋጩ
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]`ን ይገነባል እና ገቢውን
ራስጌ በ`timingSafeEqual`
(`src/server/authz/policies/management.ts` እና `src/lib/middleware/cliTokenAuth.ts`) ከእያንዳንዱ ጋር ያወዳድራል።
ስለዚህ አንድ ቶከን ከባለ64-ቁምፊው HMAC digest **ወይም** ከባለ32-ቁምፊው
የቆየ SHA-256 ቅድመ ክፍል ከአንዳቸው ጋር ከተዛመደ ትክክለኛ ነው።

**ማሰናከል፦** የCLI ቶከን ዘዴውን ሙሉ በሙሉ ለማሰናከል `OMNIROUTE_DISABLE_CLI_TOKEN=true`ን (env ወይም `.env`) ያቀናብሩ፤ ከዚያ ሁሉም መዳረሻ ግልጽ API key ይፈልጋል። ብዙ ተጠቃሚዎች ባሉባቸው
hosts ላይ ይህ ይመከራል፤ ምክንያቱም `machine-id` በመሣሪያ ደረጃ እንጂ በተጠቃሚ ደረጃ አይደለም፣ እና በተመሳሳይ
host ላይ ያለ ሌላ ተጠቃሚ ተመሳሳዩን ቶከን ማስላት ይችላል።

## ፋይሎች

| ፋይል                                       | ዓላማ                                    |
| ----------------------------------------- | -------------------------------------- |
| `src/lib/machineToken.ts`                 | ቶከን ማመንጨት (`getMachineTokenSync`)      |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER` ቋሚ እሴት              |
| `src/server/authz/policies/management.ts` | በአገልጋይ በኩል ማረጋገጥ                       |
| `src/server/authz/routeGuard.ts`          | የloopback host ምርመራ (`isLoopbackHost`) |

## በተጨማሪ ይመልከቱ

- `docs/security/ROUTE_GUARD_TIERS.md` — የroute ጥበቃ ደረጃዎች
- `docs/architecture/AUTHZ_GUIDE.md` — ሙሉ የፈቃድ መስጫ ሂደት
