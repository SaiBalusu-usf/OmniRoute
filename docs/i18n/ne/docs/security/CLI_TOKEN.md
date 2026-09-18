# CLI Machine-ID Token (नेपाली)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## सिंहावलोकन

OmniRoute CLI आदेशहरूले `x-omniroute-cli-token` अनुरोध हेडरमार्फत पठाइने
`HMAC-SHA256(machine-id, salt)` टोकन प्रयोग गरेर स्थानीय व्यवस्थापन API सँग
प्रमाणीकरण गर्छन्।

यसले CLI उप-आदेशहरूलाई (`omniroute status`, `omniroute providers`, आदि)
प्रत्येक पटक चलाउँदा प्रयोगकर्ताले JWT वा पासवर्ड उपलब्ध गराउनु नपरी
व्यवस्थापन एन्डपोइन्टहरू कल गर्न अनुमति दिन्छ।

## यसले कसरी काम गर्छ

1. `getMachineTokenSync()` ले `node-machine-id` मार्फत हार्डवेयर मेसिन ID पढ्छ
   (असफल भएमा खाली स्ट्रिङ प्रयोग गर्छ, जसले CLI प्रमाणीकरण असक्षम पार्छ)।
2. यसले `HMAC-SHA256(machine_id, salt)` गणना गर्छ र पूर्ण 64-वर्णको
   हेक्स डाइजेस्ट फर्काउँछ — यो मेसिनसँग आबद्ध निर्धारणात्मक, अपरिवर्तनीय टोकन हो।
3. समाधान गरिएको गन्तव्य स्पष्ट लुपब्याक URL (`localhost`, `127.0.0.0/8`, वा
   लुपब्याक IPv6) हुँदा मात्र CLI ले टोकनलाई `x-omniroute-cli-token` का रूपमा
   पठाउँछ। टोकन समावेश भएका अनुरोधहरूले `redirect: error` प्रयोग गर्छन्, त्यसैले
   स्थानीय रिडाइरेक्टले यसलाई अर्को ओरिजिनमा फर्वार्ड गर्न सक्दैन। रिमोट कन्टेक्स्टहरूले
   यसको सट्टा सीमित-स्कोपका पहुँच टोकनहरू प्रयोग गर्छन्। डेरिभेसन उपलब्ध नभएमा,
   CLI ले हेडर समावेश गर्दैन र खाली टोकनलाई मान्य मान्नुको सट्टा `omniroute doctor`
   ले असफलता रिपोर्ट गर्छ।
4. सर्भरले (`src/server/authz/policies/management.ts`) उही salt प्रयोग गरी
   अपेक्षित टोकन पुनः गणना गर्छ र समय-आधारित निष्कर्षण रोक्न `timingSafeEqual`
   मार्फत तुलना गर्छ।

## सुरक्षा गुणहरू

| गुण                              | विवरण                                                                                                                                                                                                                  |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **लुपब्याकमा मात्र**             | सर्भरको विश्वसनीय पियर-लोक्यालिटी स्ट्याम्पले (वास्तविक TCP पियर ठेगानाबाट प्राप्त) लुपब्याक जनाएको अवस्थामा मात्र स्वीकार गरिन्छ। लोक्यालिटीका लागि क्लाइन्टद्वारा नियन्त्रित `Host` हेडरलाई कहिल्यै विश्वास गरिँदैन। |
| **स्थिर-समय तुलना**              | `crypto.timingSafeEqual` ले टाइमिङ आक्रमणहरू रोक्छ।                                                                                                                                                                    |
| **अपरिवर्तनीय**                  | HMAC आउटपुटबाट machine-id पुनः प्राप्त गर्न सकिँदैन।                                                                                                                                                                   |
| **`always`-सुरक्षित बाइपास छैन** | CLI टोकन जाँचअघि `isAlwaysProtectedPath()` मूल्याङ्कन गरिन्छ। `/api/shutdown` र `/api/settings/database` लाई सधैँ JWT आवश्यक पर्छ।                                                                                     |
| **निर्यात गर्न नमिल्ने**         | टोकनलाई कहिल्यै डिस्कमा लेखिँदैन वा लग गरिँदैन।                                                                                                                                                                        |

## Salt रोटेसन

कोड परिवर्तन नगरी व्युत्पन्न टोकन रोटेट गर्न `OMNIROUTE_CLI_SALT` सेट गर्नुहोस्।
रोटेसनपछि, यस मेसिनमा रहेका सबै CLI प्रक्रियाहरूले नयाँ टोकन स्वतः प्रयोग गर्नेछन्।
पहिलेको व्युत्पन्न मान उजागर गरेको हुन सक्ने प्रक्रिया-सूची लिकपछि यो उपयोगी हुन्छ।

```bash
# स्थायी रोटेसन (शेल प्रोफाइलमा थप्नुहोस्)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# नयाँ टोकन प्रयोग भइरहेको छ भनी प्रमाणित गर्नुहोस्
omniroute status
```

पूर्वनिर्धारित salt: `omniroute-cli-auth-v1`

## पुरानो ढाँचा (SHA-256, 32-वर्ण) — अझै स्वीकार्य

माथिको HMAC ढाँचाअघि, CLI ले आफ्नो टोकनलाई
`SHA-256(machineId + salt).hex[0..32]` (`bin/cli/utils/cliToken.mjs` मा रहेको
32-वर्णको प्रिफिक्स) का रूपमा व्युत्पन्न गर्थ्यो (`src/lib/machineToken.ts` मा
`getLegacyCliTokenSync`)।

पश्चगामी अनुकूलताका लागि सर्भरले **दुवै** ढाँचाहरू स्वीकार गर्छ: प्रमाणीकरणकर्ताले
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` निर्माण गर्छ र
आउने हेडरलाई प्रत्येकसँग `timingSafeEqual` मार्फत तुलना गर्छ
(`src/server/authz/policies/management.ts` र `src/lib/middleware/cliTokenAuth.ts`)।
त्यसैले टोकन 64-वर्णको HMAC डाइजेस्ट वा 32-वर्णको पुरानो SHA-256 प्रिफिक्समध्ये
**कुनै एकसँग** मेल खाएमा मान्य हुन्छ।

**अप्ट-आउट:** CLI टोकन संयन्त्र पूर्ण रूपमा असक्षम पार्न `OMNIROUTE_DISABLE_CLI_TOKEN=true`
(env वा `.env`) सेट गर्नुहोस्; त्यसपछि सबै पहुँचका लागि स्पष्ट API key आवश्यक पर्छ।
बहु-प्रयोगकर्ता होस्टहरूमा यो सिफारिस गरिन्छ, किनभने `machine-id` प्रति-प्रयोगकर्ता नभई
प्रति-उपकरण हुन्छ र उही होस्टको अर्को प्रयोगकर्ताले उही टोकन गणना गर्न सक्छ।

## फाइलहरू

| फाइल                                      | उद्देश्य                               |
| ----------------------------------------- | -------------------------------------- |
| `src/lib/machineToken.ts`                 | टोकन डेरिभेसन (`getMachineTokenSync`)  |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER` स्थिराङ्क           |
| `src/server/authz/policies/management.ts` | सर्भर-साइड प्रमाणीकरण                  |
| `src/server/authz/routeGuard.ts`          | लुपब्याक होस्ट जाँच (`isLoopbackHost`) |

## यो पनि हेर्नुहोस्

- `docs/security/ROUTE_GUARD_TIERS.md` — रुट सुरक्षा तहहरू
- `docs/architecture/AUTHZ_GUIDE.md` — पूर्ण प्राधिकरण पाइपलाइन
