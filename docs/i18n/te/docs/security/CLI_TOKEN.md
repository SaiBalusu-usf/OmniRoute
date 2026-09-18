# CLI Machine-ID Token (తెలుగు)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## అవలోకనం

OmniRoute CLI కమాండ్లు స్థానిక నిర్వహణ APIతో ప్రామాణీకరించుకోవడానికి,
`x-omniroute-cli-token` అభ్యర్థన హెడర్ ద్వారా పంపే
`HMAC-SHA256(machine-id, salt)` టోకెన్ను ఉపయోగిస్తాయి.

దీనివల్ల CLI ఉపకమాండ్లు (`omniroute status`, `omniroute providers` మొదలైనవి)
ప్రతి అమలులోనూ వినియోగదారు JWT లేదా పాస్వర్డ్ను అందించాల్సిన అవసరం లేకుండా
నిర్వహణ ఎండ్పాయింట్లను కాల్ చేయగలవు.

## ఇది ఎలా పనిచేస్తుంది

1. `getMachineTokenSync()` అనేది `node-machine-id` ద్వారా హార్డ్వేర్ మెషీన్ IDని
   చదువుతుంది (విఫలమైతే ఖాళీ స్ట్రింగ్కు మారుతుంది, తద్వారా CLI ప్రామాణీకరణ నిలిపివేయబడుతుంది).
2. ఇది `HMAC-SHA256(machine_id, salt)`ను గణించి, పూర్తి 64-అక్షరాల
   hex డైజెస్ట్ను తిరిగి ఇస్తుంది — ఇది ఈ మెషీన్కు అనుసంధానమైన, నిర్ణాయకమైన,
   తిరిగి మూల విలువగా మార్చలేని టోకెన్.
3. పరిష్కరించబడిన గమ్యస్థానం స్పష్టమైన లూప్బ్యాక్ URL (`localhost`, `127.0.0.0/8`,
   లేదా లూప్బ్యాక్ IPv6) అయినప్పుడు మాత్రమే CLI టోకెన్ను
   `x-omniroute-cli-token`గా పంపుతుంది. టోకెన్ను కలిగి ఉన్న అభ్యర్థనలు
   `redirect: error`ను ఉపయోగిస్తాయి, కాబట్టి స్థానిక రీడైరెక్ట్ దానిని మరొక
   మూలానికి ఫార్వర్డ్ చేయలేదు. రిమోట్ సందర్భాలు బదులుగా పరిమిత పరిధి గల
   యాక్సెస్ టోకెన్లను ఉపయోగిస్తాయి. ఉత్పాదన అందుబాటులో లేకపోతే, CLI హెడర్ను
   వదిలివేస్తుంది మరియు ఖాళీ టోకెన్ను చెల్లుబాటైనదిగా పరిగణించకుండా
   `omniroute doctor` వైఫల్యాన్ని నివేదిస్తుంది.
4. సర్వర్ (`src/server/authz/policies/management.ts`) అదే saltతో ఆశించిన
   టోకెన్ను మళ్లీ గణించి, సమయ ఆధారిత సంగ్రహణను నిరోధించడానికి
   `timingSafeEqual` ద్వారా పోలుస్తుంది.

## భద్రతా లక్షణాలు

| లక్షణం                          | వివరాలు                                                                                                                                                                                                      |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **లూప్బ్యాక్కు మాత్రమే**        | నిజమైన TCP పీర్ చిరునామా నుంచి ఉత్పన్నమైన సర్వర్ విశ్వసనీయ పీర్-స్థానికత ముద్ర లూప్బ్యాక్ అని సూచించినప్పుడు మాత్రమే అంగీకరించబడుతుంది. స్థానికత కోసం క్లయింట్ నియంత్రిత `Host` హెడర్ను ఎప్పుడూ విశ్వసించరు. |
| **స్థిర-సమయ పోలిక**             | `crypto.timingSafeEqual` సమయ ఆధారిత దాడులను నిరోధిస్తుంది.                                                                                                                                                   |
| **తిరిగి మార్చలేనిది**          | HMAC అవుట్పుట్ నుంచి machine-idని తిరిగి పొందడం సాధ్యం కాదు.                                                                                                                                                 |
| **`always`-రక్షిత బైపాస్ లేదు** | CLI టోకెన్ తనిఖీకి ముందు `isAlwaysProtectedPath()` మూల్యాంకనం చేయబడుతుంది. `/api/shutdown` మరియు `/api/settings/database`కు ఎల్లప్పుడూ JWT అవసరం.                                                            |
| **ఎగుమతి చేయలేనిది**            | టోకెన్ను ఎప్పుడూ డిస్క్కు వ్రాయరు లేదా లాగ్ చేయరు.                                                                                                                                                           |

## Salt రొటేషన్

కోడ్ మార్పులు లేకుండానే ఉత్పన్నమైన టోకెన్ను మార్చడానికి `OMNIROUTE_CLI_SALT`ను
సెట్ చేయండి. రొటేషన్ తర్వాత, ఈ మెషీన్లోని అన్ని CLI ప్రాసెస్లు స్వయంచాలకంగా
కొత్త టోకెన్ను ఉపయోగిస్తాయి. మునుపటి ఉత్పన్న విలువను బహిర్గతం చేసి ఉండగల
ప్రాసెస్-జాబితా లీక్ తర్వాత ఇది ఉపయోగకరంగా ఉంటుంది.

```bash
# శాశ్వత రొటేషన్ (షెల్ ప్రొఫైల్కు జోడించండి)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# కొత్త టోకెన్ ఉపయోగంలో ఉందని ధృవీకరించండి
omniroute status
```

డిఫాల్ట్ salt: `omniroute-cli-auth-v1`

## పాత ఫార్మాట్ (SHA-256, 32-అక్షరాలు) — ఇప్పటికీ అంగీకరించబడుతుంది

పైన పేర్కొన్న HMAC ఫార్మాట్కు ముందు, CLI తన టోకెన్ను
`bin/cli/utils/cliToken.mjs`లో (`src/lib/machineToken.ts`లోని
`getLegacyCliTokenSync`) `SHA-256(machineId + salt).hex[0..32]`
(32-అక్షరాల ప్రీఫిక్స్)గా ఉత్పన్నం చేసేది.

వెనుకబడిన అనుకూలత కోసం సర్వర్ **రెండు** ఫార్మాట్లను అంగీకరిస్తుంది: వెరిఫైయర్
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]`ను నిర్మించి,
ఇన్కమింగ్ హెడర్ను ప్రతి దానితో `timingSafeEqual` ఉపయోగించి పోలుస్తుంది
(`src/server/authz/policies/management.ts` మరియు `src/lib/middleware/cliTokenAuth.ts`).
కాబట్టి ఒక టోకెన్ 64-అక్షరాల HMAC డైజెస్ట్తో **లేదా** 32-అక్షరాల పాత SHA-256
ప్రీఫిక్స్తో సరిపోలితే చెల్లుబాటు అవుతుంది.

**నిలిపివేత:** CLI టోకెన్ యంత్రాంగాన్ని పూర్తిగా నిలిపివేయడానికి
`OMNIROUTE_DISABLE_CLI_TOKEN=true`ను (env లేదా `.env`) సెట్ చేయండి; ఆ తర్వాత అన్ని
యాక్సెస్లకు స్పష్టమైన API కీ అవసరం. బహుళ-వినియోగదారు హోస్ట్లలో ఇది సిఫార్సు
చేయబడుతుంది, ఎందుకంటే `machine-id` ఒక్కో పరికరానికి సంబంధించినది (ఒక్కో
వినియోగదారుకు కాదు), మరియు అదే హోస్ట్లోని మరొక వినియోగదారు అదే టోకెన్ను
గణించగలరు.

## ఫైల్లు

| ఫైల్                                      | ప్రయోజనం                                   |
| ----------------------------------------- | ------------------------------------------ |
| `src/lib/machineToken.ts`                 | టోకెన్ ఉత్పాదన (`getMachineTokenSync`)     |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER` స్థిరాంకం               |
| `src/server/authz/policies/management.ts` | సర్వర్-వైపు ధృవీకరణ                        |
| `src/server/authz/routeGuard.ts`          | లూప్బ్యాక్ హోస్ట్ తనిఖీ (`isLoopbackHost`) |

## ఇవి కూడా చూడండి

- `docs/security/ROUTE_GUARD_TIERS.md` — రూట్ రక్షణ స్థాయిలు
- `docs/architecture/AUTHZ_GUIDE.md` — పూర్తి అధికార నిర్ధారణ పైప్లైన్
