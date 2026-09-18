# CLI Machine-ID Token (தமிழ்)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## கண்ணோட்டம்

OmniRoute CLI கட்டளைகள், `x-omniroute-cli-token` கோரிக்கைத் தலைப்பின் வழியாக அனுப்பப்படும்
`HMAC-SHA256(machine-id, salt)` டோக்கனைப் பயன்படுத்தி உள்ளூர் மேலாண்மை API உடன்
அங்கீகரிக்கின்றன.

இதனால் CLI துணைக் கட்டளைகள் (`omniroute status`, `omniroute providers` போன்றவை)
ஒவ்வொரு முறை செயல்படுத்தும்போதும் பயனர் JWT அல்லது கடவுச்சொல்லை வழங்க வேண்டிய அவசியமின்றி
மேலாண்மை முனைப்புள்ளிகளை அழைக்க முடிகிறது.

## இது செயல்படும் விதம்

1. `getMachineTokenSync()`, `node-machine-id` மூலம் வன்பொருள் இயந்திர ID-ஐப் படிக்கிறது
   (தோல்வியடைந்தால் வெற்று சரத்திற்குத் திரும்பி, CLI அங்கீகாரத்தை முடக்குகிறது).
2. இது `HMAC-SHA256(machine_id, salt)`-ஐக் கணக்கிட்டு முழுமையான 64-எழுத்து
   hex சுருக்கத்தைத் திருப்பியளிக்கிறது — இது இந்த இயந்திரத்துடன் பிணைக்கப்பட்ட,
   தீர்மானகரமான, மீளாக்க முடியாத டோக்கன் ஆகும்.
3. தீர்மானிக்கப்பட்ட இலக்கு வெளிப்படையான loopback URL (`localhost`, `127.0.0.0/8`, அல்லது
   loopback IPv6) ஆக இருக்கும்போது மட்டுமே CLI டோக்கனை `x-omniroute-cli-token` ஆக
   அனுப்புகிறது. டோக்கனைக் கொண்ட கோரிக்கைகள் `redirect: error`-ஐப் பயன்படுத்துவதால், ஓர் உள்ளூர்
   திசைமாற்றத்தால் அதை மற்றொரு origin-க்கு அனுப்ப முடியாது. தொலைநிலைச் சூழல்கள் அதற்குப் பதிலாக
   வரம்பிடப்பட்ட அணுகல் டோக்கன்களைப் பயன்படுத்துகின்றன. பெறுவித்தல் கிடைக்கவில்லை என்றால், CLI அந்தத்
   தலைப்பைத் தவிர்க்கிறது; மேலும், வெற்று டோக்கனைச் செல்லுபடியாகக் கருதுவதற்குப் பதிலாக
   `omniroute doctor` தோல்வியை அறிக்கையிடுகிறது.
4. சேவையகம் (`src/server/authz/policies/management.ts`) அதே salt-ஐப் பயன்படுத்தி
   எதிர்பார்க்கப்படும் டோக்கனை மீண்டும் கணக்கிட்டு, நேர அடிப்படையிலான பிரித்தெடுப்பைத் தடுக்க
   `timingSafeEqual` மூலம் ஒப்பிடுகிறது.

## பாதுகாப்புப் பண்புகள்

| பண்பு                                                 | விவரம்                                                                                                                                                                                                                                              |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Loopback-க்கு மட்டும்**                             | சேவையகத்தின் நம்பகமான peer-locality முத்திரை (உண்மையான TCP peer முகவரியிலிருந்து பெறப்பட்டது) loopback எனக் குறிப்பிடும்போது மட்டுமே ஏற்கப்படும். கிளையண்டால் கட்டுப்படுத்தப்படும் `Host` தலைப்பு இருப்பிடத்தைத் தீர்மானிக்க ஒருபோதும் நம்பப்படாது. |
| **மாறாத நேர ஒப்பீடு**                                 | `crypto.timingSafeEqual` நேரத் தாக்குதல்களைத் தடுக்கிறது.                                                                                                                                                                                           |
| **மீளாக்க முடியாதது**                                 | HMAC வெளியீட்டிலிருந்து machine-id-ஐ மீட்டெடுக்க முடியாது.                                                                                                                                                                                          |
| **`always`-பாதுகாக்கப்பட்டவற்றைத் தவிர்க்க முடியாது** | CLI டோக்கன் சரிபார்ப்புக்கு முன் `isAlwaysProtectedPath()` மதிப்பிடப்படுகிறது. `/api/shutdown` மற்றும் `/api/settings/database` ஆகியவற்றுக்கு எப்போதும் JWT தேவை.                                                                                   |
| **ஏற்றுமதி செய்ய முடியாதது**                          | டோக்கன் ஒருபோதும் வட்டில் எழுதப்படுவதோ பதிவுசெய்யப்படுவதோ இல்லை.                                                                                                                                                                                    |

## Salt சுழற்சி

குறியீட்டு மாற்றங்களின்றி பெறுவிக்கப்பட்ட டோக்கனைச் சுழற்ற `OMNIROUTE_CLI_SALT`-ஐ அமைக்கவும்.
சுழற்சிக்குப் பிறகு, இந்த இயந்திரத்திலுள்ள அனைத்து CLI செயல்முறைகளும் புதிய டோக்கனைத்
தானாகப் பயன்படுத்தும். முந்தைய பெறுவிக்கப்பட்ட மதிப்பை வெளிப்படுத்தியிருக்கக்கூடிய
செயல்முறைப் பட்டியல் கசிவுக்குப் பிறகு இது பயனுள்ளதாக இருக்கும்.

```bash
# நிலையான சுழற்சி (shell சுயவிவரத்தில் சேர்க்கவும்)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# புதிய டோக்கன் பயன்பாட்டில் உள்ளதா என்பதைச் சரிபார்க்கவும்
omniroute status
```

இயல்புநிலை salt: `omniroute-cli-auth-v1`

## மரபு வடிவம் (SHA-256, 32-எழுத்து) — இன்னும் ஏற்கப்படுகிறது

மேலுள்ள HMAC வடிவத்திற்கு முன்பு, CLI அதன் டோக்கனை
`SHA-256(machineId + salt).hex[0..32]` (32-எழுத்து முன்னொட்டு) ஆக
`bin/cli/utils/cliToken.mjs`-இல் (`src/lib/machineToken.ts`-இல் உள்ள `getLegacyCliTokenSync`)
பெறுவித்தது.

பின்னோக்கிய இணக்கத்தன்மைக்காக, சேவையகம் **இரண்டு** வடிவங்களையும் ஏற்கிறது: சரிபார்ப்பி
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]`-ஐ உருவாக்கி, உள்வரும்
தலைப்பை ஒவ்வொன்றுடனும் `timingSafeEqual` மூலம் ஒப்பிடுகிறது
(`src/server/authz/policies/management.ts` மற்றும் `src/lib/middleware/cliTokenAuth.ts`).
எனவே, ஒரு டோக்கன் 64-எழுத்து HMAC சுருக்கம் அல்லது 32-எழுத்து மரபு SHA-256 முன்னொட்டு
ஆகியவற்றில் **ஏதேனும் ஒன்றுடன்** பொருந்தினால் செல்லுபடியாகும்.

**விலகல்:** CLI டோக்கன் செயல்முறையை முழுமையாக முடக்க `OMNIROUTE_DISABLE_CLI_TOKEN=true`-ஐ
(env அல்லது `.env`) அமைக்கவும்; அதன் பிறகு அனைத்து அணுகலுக்கும் வெளிப்படையான API விசை தேவைப்படும்.
பல பயனர் host-களில் இது பரிந்துரைக்கப்படுகிறது, ஏனெனில் `machine-id` என்பது ஒரு சாதனத்திற்குரியது
(ஒரு பயனருக்குரியது அல்ல); அதே host-இல் உள்ள மற்றொரு பயனர் அதே டோக்கனைக் கணக்கிட முடியும்.

## கோப்புகள்

| கோப்பு                                    | நோக்கம்                                      |
| ----------------------------------------- | -------------------------------------------- |
| `src/lib/machineToken.ts`                 | டோக்கன் பெறுவித்தல் (`getMachineTokenSync`)  |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER` மாறிலி                    |
| `src/server/authz/policies/management.ts` | சேவையகப் பக்கச் சரிபார்ப்பு                  |
| `src/server/authz/routeGuard.ts`          | Loopback host சரிபார்ப்பு (`isLoopbackHost`) |

## மேலும் காண்க

- `docs/security/ROUTE_GUARD_TIERS.md` — வழித்தடப் பாதுகாப்பு நிலைகள்
- `docs/architecture/AUTHZ_GUIDE.md` — முழுமையான அங்கீகாரச் செயலாக்கத் தொடர்
