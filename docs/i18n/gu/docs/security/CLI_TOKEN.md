# CLI Machine-ID Token (ગુજરાતી)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## અવલોકન

OmniRoute CLI કમાન્ડ્સ સ્થાનિક મેનેજમેન્ટ API સામે પ્રમાણીકરણ કરવા માટે
`HMAC-SHA256(machine-id, salt)` ટોકનનો ઉપયોગ કરે છે, જે
`x-omniroute-cli-token` રિક્વેસ્ટ હેડર દ્વારા મોકલવામાં આવે છે.

આનાથી CLI સબકમાન્ડ્સ (`omniroute status`, `omniroute providers`, વગેરે)
દરેક વખત કમાન્ડ ચલાવતી વખતે વપરાશકર્તાએ JWT અથવા પાસવર્ડ આપ્યા વિના
મેનેજમેન્ટ એન્ડપોઇન્ટ્સને કૉલ કરી શકે છે.

## તે કેવી રીતે કાર્ય કરે છે

1. `getMachineTokenSync()` હાર્ડવેર મશીન IDને `node-machine-id` દ્વારા વાંચે છે
   (નિષ્ફળતા પર ખાલી સ્ટ્રિંગનો ઉપયોગ કરે છે, જે CLI પ્રમાણીકરણને અક્ષમ કરે છે).
2. તે `HMAC-SHA256(machine_id, salt)`ની ગણતરી કરે છે અને સંપૂર્ણ 64-અક્ષરનો
   hex ડાઇજેસ્ટ પરત કરે છે — આ મશીન સાથે જોડાયેલ નિર્ધારિત અને અપ્રતિવર્તનીય ટોકન.
3. ઉકેલાયેલ ગંતવ્ય સ્પષ્ટ લૂપબૅક URL (`localhost`, `127.0.0.0/8`, અથવા
   લૂપબૅક IPv6) હોય ત્યારે જ CLI ટોકનને `x-omniroute-cli-token` તરીકે મોકલે છે.
   ટોકન ધરાવતી રિક્વેસ્ટ્સ `redirect: error`નો ઉપયોગ કરે છે, જેથી કોઈ સ્થાનિક
   રીડાયરેક્ટ તેને અન્ય ઓરિજિન પર ફોરવર્ડ ન કરી શકે. રિમોટ કોન્ટેક્સ્ટ્સ તેના બદલે
   સ્કોપ્ડ ઍક્સેસ ટોકન્સનો ઉપયોગ કરે છે. જો ટોકન વ્યુત્પન્ન કરવું શક્ય ન હોય, તો CLI
   હેડરને છોડી દે છે અને ખાલી ટોકનને માન્ય ગણવાને બદલે `omniroute doctor`
   નિષ્ફળતાની જાણ કરે છે.
4. સર્વર (`src/server/authz/policies/management.ts`) સમાન salt સાથે અપેક્ષિત
   ટોકનની ફરી ગણતરી કરે છે અને સમય-આધારિત નિષ્કર્ષણ અટકાવવા માટે `timingSafeEqual`
   દ્વારા સરખામણી કરે છે.

## સુરક્ષા ગુણધર્મો

| ગુણધર્મ                           | વિગત                                                                                                                                                                                                           |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **માત્ર લૂપબૅક**                  | સર્વરના વિશ્વસનીય પીઅર-લોકૅલિટી સ્ટૅમ્પ (વાસ્તવિક TCP પીઅર ઍડ્રેસ પરથી મેળવેલ) મુજબ લૂપબૅક હોય ત્યારે જ સ્વીકારવામાં આવે છે. લોકૅલિટી માટે ક્લાયન્ટ-નિયંત્રિત `Host` હેડર પર ક્યારેય વિશ્વાસ કરવામાં આવતો નથી. |
| **સ્થિર-સમયની સરખામણી**           | `crypto.timingSafeEqual` ટાઇમિંગ હુમલાઓને અટકાવે છે.                                                                                                                                                           |
| **અપ્રતિવર્તનીય**                 | HMAC આઉટપુટમાંથી machine-id પુનઃપ્રાપ્ત કરી શકાતું નથી.                                                                                                                                                        |
| **`always`-સંરક્ષિત બાયપાસ નહીં** | CLI ટોકનની ચકાસણી પહેલાં `isAlwaysProtectedPath()`નું મૂલ્યાંકન કરવામાં આવે છે. `/api/shutdown` અને `/api/settings/database` માટે હંમેશાં JWT જરૂરી છે.                                                        |
| **નિકાસ ન કરી શકાય તેવું**        | ટોકન ક્યારેય ડિસ્ક પર લખાતું કે લૉગ થતું નથી.                                                                                                                                                                  |

## Salt રોટેશન

કોડમાં ફેરફાર કર્યા વિના વ્યુત્પન્ન ટોકનને રોટેટ કરવા માટે `OMNIROUTE_CLI_SALT`
સેટ કરો. રોટેશન પછી, આ મશીન પરની બધી CLI પ્રોસેસ આપમેળે નવા ટોકનનો ઉપયોગ કરશે.
અગાઉનું વ્યુત્પન્ન મૂલ્ય જાહેર થયું હોઈ શકે એવા પ્રોસેસ-લિસ્ટ લીક પછી આ ઉપયોગી છે.

```bash
# કાયમી રોટેશન (શેલ પ્રોફાઇલમાં ઉમેરો)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# નવું ટોકન ઉપયોગમાં છે તેની ચકાસણી કરો
omniroute status
```

ડિફૉલ્ટ salt: `omniroute-cli-auth-v1`

## લેગસી ફોર્મેટ (SHA-256, 32-અક્ષર) — હજી પણ સ્વીકાર્ય

ઉપરના HMAC ફોર્મેટ પહેલાં, CLI તેના ટોકનને
`SHA-256(machineId + salt).hex[0..32]` (32-અક્ષરનો પ્રીફિક્સ) તરીકે
`bin/cli/utils/cliToken.mjs`માં વ્યુત્પન્ન કરતું હતું (`src/lib/machineToken.ts`માં `getLegacyCliTokenSync`).

પાછળની સુસંગતતા માટે સર્વર **બંને** ફોર્મેટ સ્વીકારે છે: વેરિફાયર
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` બનાવે છે અને
આવતા હેડરની દરેક સાથે `timingSafeEqual` દ્વારા સરખામણી કરે છે
(`src/server/authz/policies/management.ts` અને `src/lib/middleware/cliTokenAuth.ts`).
તેથી ટોકન 64-અક્ષરના HMAC ડાઇજેસ્ટ અથવા 32-અક્ષરના લેગસી SHA-256 પ્રીફિક્સમાંથી
**કોઈપણ એક** સાથે મેળ ખાય તો તે માન્ય છે.

**ઑપ્ટ-આઉટ:** CLI ટોકન પદ્ધતિને સંપૂર્ણપણે અક્ષમ કરવા માટે
`OMNIROUTE_DISABLE_CLI_TOKEN=true` (env અથવા `.env`) સેટ કરો; ત્યારબાદ તમામ ઍક્સેસ
માટે સ્પષ્ટ API key જરૂરી રહેશે. બહુ-વપરાશકર્તા હોસ્ટ્સ પર આની ભલામણ કરવામાં આવે છે,
કારણ કે `machine-id` પ્રતિ-ડિવાઇસ હોય છે (પ્રતિ-વપરાશકર્તા નહીં) અને સમાન હોસ્ટ પરનો
અન્ય વપરાશકર્તા સમાન ટોકનની ગણતરી કરી શકે છે.

## ફાઇલો

| ફાઇલ                                      | હેતુ                                     |
| ----------------------------------------- | ---------------------------------------- |
| `src/lib/machineToken.ts`                 | ટોકન વ્યુત્પત્તિ (`getMachineTokenSync`) |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER` અચળાંક                |
| `src/server/authz/policies/management.ts` | સર્વર-સાઇડ ચકાસણી                        |
| `src/server/authz/routeGuard.ts`          | લૂપબૅક હોસ્ટ ચકાસણી (`isLoopbackHost`)   |

## આ પણ જુઓ

- `docs/security/ROUTE_GUARD_TIERS.md` — રૂટ સુરક્ષા સ્તરો
- `docs/architecture/AUTHZ_GUIDE.md` — સંપૂર્ણ અધિકૃતતા પાઇપલાઇન
