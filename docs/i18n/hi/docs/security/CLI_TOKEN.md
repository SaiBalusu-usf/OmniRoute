# CLI Machine-ID Token (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## अवलोकन

OmniRoute CLI कमांड स्थानीय प्रबंधन API के विरुद्ध प्रमाणीकरण के लिए अनुरोध के `x-omniroute-cli-token`
हेडर के माध्यम से भेजे गए `HMAC-SHA256(machine-id, salt)` टोकन का उपयोग करते हैं।

इससे CLI उपकमांड (`omniroute status`, `omniroute providers`, आदि) प्रत्येक उपयोग पर उपयोगकर्ता से JWT या
पासवर्ड प्रदान करने की आवश्यकता के बिना प्रबंधन एंडपॉइंट्स को कॉल कर सकते हैं।

## यह कैसे काम करता है

1. `getMachineTokenSync()` हार्डवेयर मशीन ID को `node-machine-id` के माध्यम से पढ़ता है
   (विफलता पर खाली स्ट्रिंग का उपयोग करता है, जिससे CLI प्रमाणीकरण अक्षम हो जाता है)।
2. यह `HMAC-SHA256(machine_id, salt)` की गणना करता है और पूर्ण 64-वर्णीय
   हेक्स डाइजेस्ट लौटाता है—इस मशीन से जुड़ा एक नियतात्मक, अपरिवर्तनीय टोकन।
3. CLI टोकन को `x-omniroute-cli-token` के रूप में केवल तभी भेजता है, जब निर्धारित
   गंतव्य एक स्पष्ट लूपबैक URL (`localhost`, `127.0.0.0/8`, या
   लूपबैक IPv6) हो। टोकन वाले अनुरोध `redirect: error` का उपयोग करते हैं, ताकि कोई स्थानीय
   रीडायरेक्ट उसे किसी अन्य ओरिजिन पर अग्रेषित न कर सके। इसके बजाय रिमोट कॉन्टेक्स्ट सीमित-स्कोप वाले
   एक्सेस टोकन का उपयोग करते हैं। यदि व्युत्पत्ति उपलब्ध नहीं है, तो CLI हेडर को छोड़ देता है
   और `omniroute doctor` किसी खाली टोकन को मान्य मानने के बजाय विफलता की रिपोर्ट करता है।
4. सर्वर (`src/server/authz/policies/management.ts`) उसी salt के साथ अपेक्षित
   टोकन की पुनः गणना करता है और समय-आधारित निष्कर्षण रोकने के लिए `timingSafeEqual` के माध्यम से
   तुलना करता है।

## सुरक्षा गुण

| गुण                               | विवरण                                                                                                                                                                                                             |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **केवल लूपबैक**                   | केवल तभी स्वीकार किया जाता है, जब सर्वर का विश्वसनीय पीयर-लोकैलिटी स्टैम्प (वास्तविक TCP पीयर पते से प्राप्त) लूपबैक दर्शाता हो। स्थान-निर्धारण के लिए क्लाइंट-नियंत्रित `Host` हेडर पर कभी भरोसा नहीं किया जाता। |
| **स्थिर-समय तुलना**               | `crypto.timingSafeEqual` टाइमिंग हमलों को रोकता है।                                                                                                                                                               |
| **अपरिवर्तनीय**                   | HMAC आउटपुट से मशीन ID पुनर्प्राप्त नहीं की जा सकती।                                                                                                                                                              |
| **`always`-संरक्षित बायपास नहीं** | CLI टोकन की जाँच से पहले `isAlwaysProtectedPath()` का मूल्यांकन किया जाता है। `/api/shutdown` और `/api/settings/database` के लिए हमेशा JWT आवश्यक होता है।                                                        |
| **निर्यात-अयोग्य**                | टोकन को कभी डिस्क पर नहीं लिखा जाता या लॉग नहीं किया जाता।                                                                                                                                                        |

## Salt रोटेशन

कोड में बदलाव किए बिना व्युत्पन्न टोकन को रोटेट करने के लिए `OMNIROUTE_CLI_SALT` सेट करें।
रोटेशन के बाद, इस मशीन पर सभी CLI प्रक्रियाएँ स्वचालित रूप से नए टोकन का उपयोग करेंगी।
यह उस प्रक्रिया-सूची लीक के बाद उपयोगी है, जिसने संभवतः पिछले व्युत्पन्न मान को उजागर कर दिया हो।

```bash
# स्थायी रोटेशन (शेल प्रोफ़ाइल में जोड़ें)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# सत्यापित करें कि नया टोकन उपयोग में है
omniroute status
```

डिफ़ॉल्ट salt: `omniroute-cli-auth-v1`

## लीगेसी प्रारूप (SHA-256, 32-वर्णीय) — अभी भी स्वीकार्य

उपरोक्त HMAC प्रारूप से पहले, CLI अपना टोकन
`SHA-256(machineId + salt).hex[0..32]` (एक 32-वर्णीय प्रीफ़िक्स) के रूप में
`bin/cli/utils/cliToken.mjs` (`src/lib/machineToken.ts` में `getLegacyCliTokenSync`) में व्युत्पन्न करता था।

पश्चगामी संगतता के लिए सर्वर **दोनों** प्रारूप स्वीकार करता है: सत्यापनकर्ता
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` बनाता है और आने वाले
हेडर की प्रत्येक से `timingSafeEqual` द्वारा तुलना करता है
(`src/server/authz/policies/management.ts` और `src/lib/middleware/cliTokenAuth.ts`)।
इसलिए कोई टोकन तब मान्य होता है, जब वह 64-वर्णीय HMAC डाइजेस्ट या 32-वर्णीय
लीगेसी SHA-256 प्रीफ़िक्स में से **किसी एक** से मेल खाता हो।

**ऑप्ट-आउट:** CLI टोकन तंत्र को पूरी तरह अक्षम करने के लिए `OMNIROUTE_DISABLE_CLI_TOKEN=true`
(env या `.env`) सेट करें; इसके बाद सभी एक्सेस के लिए एक स्पष्ट API कुंजी आवश्यक होगी। बहु-उपयोगकर्ता
होस्ट पर इसकी अनुशंसा की जाती है, क्योंकि `machine-id` प्रति डिवाइस होता है (प्रति उपयोगकर्ता नहीं) और उसी
होस्ट पर कोई अन्य उपयोगकर्ता समान टोकन की गणना कर सकता है।

## फ़ाइलें

| फ़ाइल                                     | उद्देश्य                                 |
| ----------------------------------------- | ---------------------------------------- |
| `src/lib/machineToken.ts`                 | टोकन व्युत्पत्ति (`getMachineTokenSync`) |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER` कॉन्स्टेंट            |
| `src/server/authz/policies/management.ts` | सर्वर-साइड सत्यापन                       |
| `src/server/authz/routeGuard.ts`          | लूपबैक होस्ट जाँच (`isLoopbackHost`)     |

## यह भी देखें

- `docs/security/ROUTE_GUARD_TIERS.md` — रूट सुरक्षा स्तर
- `docs/architecture/AUTHZ_GUIDE.md` — पूर्ण प्राधिकरण पाइपलाइन
