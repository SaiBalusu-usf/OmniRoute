# CLI Machine-ID Token (मराठी)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## आढावा

OmniRoute CLI आदेश स्थानिक व्यवस्थापन API वर प्रमाणीकरण करण्यासाठी विनंतीच्या
`x-omniroute-cli-token` शीर्षलेखाद्वारे पाठवलेले
`HMAC-SHA256(machine-id, salt)` टोकन वापरतात.

यामुळे CLI उप-आदेशांना (`omniroute status`, `omniroute providers`, इ.)
वापरकर्त्याने प्रत्येक वेळी JWT किंवा पासवर्ड पुरवण्याची आवश्यकता न ठेवता
व्यवस्थापन एंडपॉइंट कॉल करता येतात.

## हे कसे कार्य करते

1. `getMachineTokenSync()` हे `node-machine-id` द्वारे हार्डवेअर मशीन ID वाचते
   (अपयश आल्यास रिकामी स्ट्रिंग वापरते, ज्यामुळे CLI प्रमाणीकरण अक्षम होते).
2. ते `HMAC-SHA256(machine_id, salt)` गणित करते आणि संपूर्ण 64-वर्णीय
   हेक्स डायजेस्ट परत करते — या मशीनशी निगडित असलेले निर्धारक, अपरिवर्तनीय टोकन.
3. निराकरण केलेले गंतव्य स्पष्ट लूपबॅक URL (`localhost`, `127.0.0.0/8`, किंवा
   लूपबॅक IPv6) असेल तेव्हाच CLI टोकन `x-omniroute-cli-token` म्हणून पाठवते.
   टोकन असलेल्या विनंत्या `redirect: error` वापरतात, त्यामुळे स्थानिक
   रीडायरेक्ट ते दुसऱ्या ओरिजिनकडे अग्रेषित करू शकत नाही. दूरस्थ संदर्भांमध्ये
   त्याऐवजी व्याप्तीबद्ध प्रवेश टोकन वापरली जातात. टोकन तयार करणे उपलब्ध नसल्यास,
   CLI शीर्षलेख वगळते आणि रिकामे टोकन वैध मानण्याऐवजी `omniroute doctor`
   अपयशाची नोंद करतो.
4. सर्व्हर (`src/server/authz/policies/management.ts`) त्याच salt सह अपेक्षित
   टोकनची पुन्हा गणना करतो आणि वेळेवर आधारित टोकन निष्कर्षण रोखण्यासाठी
   `timingSafeEqual` द्वारे तुलना करतो.

## सुरक्षा गुणधर्म

| गुणधर्म                           | तपशील                                                                                                                                                                                                                      |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **केवळ लूपबॅक**                   | सर्व्हरचा विश्वासार्ह पीअर-लोकॅलिटी स्टॅम्प (वास्तविक TCP पीअर पत्त्यावरून प्राप्त केलेला) लूपबॅक दर्शवतो तेव्हाच स्वीकारले जाते. स्थानिकता ठरवण्यासाठी क्लायंट-नियंत्रित `Host` शीर्षलेखावर कधीही विश्वास ठेवला जात नाही. |
| **स्थिर-वेळ तुलना**               | `crypto.timingSafeEqual` टाइमिंग हल्ले प्रतिबंधित करते.                                                                                                                                                                    |
| **अपरिवर्तनीय**                   | HMAC आउटपुटवरून machine-id पुनर्प्राप्त करता येत नाही.                                                                                                                                                                     |
| **`always`-संरक्षित बायपास नाही** | CLI टोकन तपासणीपूर्वी `isAlwaysProtectedPath()` चे मूल्यमापन केले जाते. `/api/shutdown` आणि `/api/settings/database` यांना नेहमी JWT आवश्यक असते.                                                                          |
| **निर्यात न करता येण्याजोगे**     | टोकन कधीही डिस्कवर लिहिले किंवा लॉग केले जात नाही.                                                                                                                                                                         |

## Salt रोटेशन

कोडमध्ये बदल न करता तयार केलेले टोकन बदलण्यासाठी `OMNIROUTE_CLI_SALT` सेट करा.
रोटेशननंतर, या मशीनवरील सर्व CLI प्रक्रिया नवीन टोकन आपोआप वापरतील.
मागील तयार केलेले मूल्य उघड झाले असण्याची शक्यता असलेल्या प्रोसेस-लिस्ट
गळतीनंतर हे उपयुक्त ठरते.

```bash
# कायमस्वरूपी रोटेशन (शेल प्रोफाइलमध्ये जोडा)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# नवीन टोकन वापरले जात असल्याचे सत्यापित करा
omniroute status
```

डीफॉल्ट salt: `omniroute-cli-auth-v1`

## लेगसी स्वरूप (SHA-256, 32-वर्णीय) — अजूनही स्वीकारले जाते

वरील HMAC स्वरूपापूर्वी, CLI त्याचे टोकन
`SHA-256(machineId + salt).hex[0..32]` (`bin/cli/utils/cliToken.mjs` मधील
`src/lib/machineToken.ts` (`getLegacyCliTokenSync`) मध्ये 32-वर्णीय उपसर्ग)
म्हणून तयार करत असे.

मागील आवृत्त्यांशी सुसंगततेसाठी सर्व्हर **दोन्ही** स्वरूपे स्वीकारतो: पडताळक
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` तयार करतो आणि
येणाऱ्या शीर्षलेखाची प्रत्येकाशी `timingSafeEqual` वापरून तुलना करतो
(`src/server/authz/policies/management.ts` आणि `src/lib/middleware/cliTokenAuth.ts`).
म्हणून टोकन 64-वर्णीय HMAC डायजेस्ट किंवा 32-वर्णीय लेगसी SHA-256 उपसर्ग यांपैकी
**कोणत्याही एकाशी** जुळल्यास ते वैध असते.

**नकार देणे:** CLI टोकन यंत्रणा पूर्णपणे अक्षम करण्यासाठी
`OMNIROUTE_DISABLE_CLI_TOKEN=true` (env किंवा `.env`) सेट करा; त्यानंतर सर्व
प्रवेशासाठी स्पष्ट API की आवश्यक असते. एकाधिक वापरकर्ते असलेल्या होस्टवर याची
शिफारस केली जाते, कारण `machine-id` हे प्रत्येक उपकरणासाठी असते (प्रत्येक
वापरकर्त्यासाठी नाही) आणि त्याच होस्टवरील दुसरा वापरकर्ता तेच टोकन तयार करू शकतो.

## फाइल्स

| फाइल                                      | उद्देश                                 |
| ----------------------------------------- | -------------------------------------- |
| `src/lib/machineToken.ts`                 | टोकन निर्मिती (`getMachineTokenSync`)  |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER` स्थिरांक            |
| `src/server/authz/policies/management.ts` | सर्व्हर-साइड पडताळणी                   |
| `src/server/authz/routeGuard.ts`          | लूपबॅक होस्ट तपासणी (`isLoopbackHost`) |

## हे देखील पहा

- `docs/security/ROUTE_GUARD_TIERS.md` — मार्ग संरक्षण स्तर
- `docs/architecture/AUTHZ_GUIDE.md` — संपूर्ण प्राधिकरण पाइपलाइन
