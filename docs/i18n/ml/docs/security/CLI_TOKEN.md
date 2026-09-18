# CLI Machine-ID Token (മലയാളം)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## അവലോകനം

OmniRoute CLI കമാൻഡുകൾ, `x-omniroute-cli-token` അഭ്യർത്ഥനാ ഹെഡർ വഴി അയയ്ക്കുന്ന
`HMAC-SHA256(machine-id, salt)` ടോക്കൺ ഉപയോഗിച്ച് പ്രാദേശിക മാനേജ്മെന്റ് API-യിൽ
ആധികാരികത ഉറപ്പാക്കുന്നു.

ഓരോ തവണ പ്രവർത്തിപ്പിക്കുമ്പോഴും ഉപയോക്താവ് JWT അല്ലെങ്കിൽ പാസ്വേഡ് നൽകേണ്ടതില്ലാതെ
മാനേജ്മെന്റ് എൻഡ്പോയിന്റുകൾ വിളിക്കാൻ ഇത് CLI ഉപകമാൻഡുകളെ (`omniroute status`,
`omniroute providers` തുടങ്ങിയവ) അനുവദിക്കുന്നു.

## ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു

1. `getMachineTokenSync()`, `node-machine-id` വഴി ഹാർഡ്വെയർ മെഷീൻ ID വായിക്കുന്നു
   (പരാജയപ്പെട്ടാൽ ഒരു ശൂന്യ സ്ട്രിംഗിലേക്ക് മടങ്ങുകയും CLI ആധികാരികത പ്രവർത്തനരഹിതമാക്കുകയും ചെയ്യുന്നു).
2. ഇത് `HMAC-SHA256(machine_id, salt)` കണക്കാക്കി, ഈ മെഷീനുമായി ബന്ധിപ്പിച്ചിട്ടുള്ള,
   നിർണായകവും തിരിച്ചെടുക്കാൻ കഴിയാത്തതുമായ ഒരു ടോക്കണായ പൂർണ്ണ 64-അക്ഷര
   ഹെക്സ് ഡൈജസ്റ്റ് തിരികെ നൽകുന്നു.
3. പരിഹരിക്കപ്പെട്ട ലക്ഷ്യസ്ഥാനം വ്യക്തമായ ഒരു ലൂപ്പ്ബാക്ക് URL (`localhost`,
   `127.0.0.0/8`, അല്ലെങ്കിൽ ലൂപ്പ്ബാക്ക് IPv6) ആയിരിക്കുമ്പോൾ മാത്രം CLI ടോക്കൺ
   `x-omniroute-cli-token` ആയി അയയ്ക്കുന്നു. ടോക്കൺ ഉൾക്കൊള്ളുന്ന അഭ്യർത്ഥനകൾ
   `redirect: error` ഉപയോഗിക്കുന്നതിനാൽ, ഒരു പ്രാദേശിക റീഡയറക്ടിന് അത് മറ്റൊരു
   ഒറിജിനിലേക്ക് കൈമാറാൻ കഴിയില്ല. വിദൂര കോൺടെക്സ്റ്റുകൾ പകരം സ്കോപ്പ് ചെയ്ത
   ആക്സസ് ടോക്കണുകൾ ഉപയോഗിക്കുന്നു. ഡെറിവേഷൻ ലഭ്യമല്ലെങ്കിൽ, CLI ഹെഡർ ഒഴിവാക്കുകയും
   ഒരു ശൂന്യ ടോക്കൺ സാധുവായി പരിഗണിക്കുന്നതിന് പകരം `omniroute doctor` പരാജയം
   റിപ്പോർട്ട് ചെയ്യുകയും ചെയ്യുന്നു.
4. സമയം അടിസ്ഥാനമാക്കിയുള്ള എക്സ്ട്രാക്ഷൻ തടയുന്നതിനായി, സെർവർ
   (`src/server/authz/policies/management.ts`) അതേ salt ഉപയോഗിച്ച് പ്രതീക്ഷിക്കുന്ന
   ടോക്കൺ വീണ്ടും കണക്കാക്കുകയും `timingSafeEqual` വഴി താരതമ്യം ചെയ്യുകയും ചെയ്യുന്നു.

## സുരക്ഷാ സവിശേഷതകൾ

| സവിശേഷത                            | വിശദാംശം                                                                                                                                                                                                                                                               |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ലൂപ്പ്ബാക്കിൽ മാത്രം**           | സെർവറിന്റെ വിശ്വസനീയമായ പിയർ-ലോക്കാലിറ്റി സ്റ്റാമ്പ് (യഥാർത്ഥ TCP പിയർ വിലാസത്തിൽ നിന്ന് നിർണ്ണയിക്കുന്നത്) ലൂപ്പ്ബാക്ക് എന്ന് സൂചിപ്പിക്കുമ്പോൾ മാത്രം സ്വീകരിക്കുന്നു. ലോക്കാലിറ്റി നിർണ്ണയിക്കാൻ ക്ലയന്റ് നിയന്ത്രിക്കുന്ന `Host` ഹെഡറിനെ ഒരിക്കലും വിശ്വസിക്കില്ല. |
| **സ്ഥിര-സമയ താരതമ്യം**             | `crypto.timingSafeEqual` ടൈമിംഗ് ആക്രമണങ്ങൾ തടയുന്നു.                                                                                                                                                                                                                  |
| **തിരിച്ചെടുക്കാനാവാത്തത്**        | HMAC ഔട്ട്പുട്ടിൽ നിന്ന് machine-id വീണ്ടെടുക്കാൻ കഴിയില്ല.                                                                                                                                                                                                            |
| **`always`-പരിരക്ഷിത ബൈപാസ് ഇല്ല** | CLI ടോക്കൺ പരിശോധനയ്ക്ക് മുമ്പ് `isAlwaysProtectedPath()` വിലയിരുത്തുന്നു. `/api/shutdown`, `/api/settings/database` എന്നിവയ്ക്ക് എല്ലായ്പ്പോഴും JWT ആവശ്യമാണ്.                                                                                                        |
| **എക്സ്പോർട്ട് ചെയ്യാനാവാത്തത്**   | ടോക്കൺ ഒരിക്കലും ഡിസ്കിലേക്ക് എഴുതുകയോ ലോഗ് ചെയ്യുകയോ ചെയ്യുന്നില്ല.                                                                                                                                                                                                   |

## Salt റൊട്ടേഷൻ

കോഡ് മാറ്റങ്ങളില്ലാതെ ഡെറൈവ് ചെയ്ത ടോക്കൺ റൊട്ടേറ്റ് ചെയ്യാൻ `OMNIROUTE_CLI_SALT`
സജ്ജമാക്കുക. റൊട്ടേഷനുശേഷം, ഈ മെഷീനിലെ എല്ലാ CLI പ്രോസസ്സുകളും പുതിയ ടോക്കൺ
സ്വയമേവ ഉപയോഗിക്കും. മുമ്പത്തെ ഡെറൈവ് ചെയ്ത മൂല്യം വെളിപ്പെടുത്തിയിരിക്കാനിടയുള്ള
ഒരു പ്രോസസ്-ലിസ്റ്റ് ചോർച്ചയ്ക്കുശേഷം ഇത് പ്രയോജനകരമാണ്.

```bash
# സ്ഥിരമായ റൊട്ടേഷൻ (ഷെൽ പ്രൊഫൈലിലേക്ക് ചേർക്കുക)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# പുതിയ ടോക്കൺ ഉപയോഗത്തിലാണെന്ന് സ്ഥിരീകരിക്കുക
omniroute status
```

ഡിഫോൾട്ട് salt: `omniroute-cli-auth-v1`

## ലെഗസി ഫോർമാറ്റ് (SHA-256, 32-അക്ഷരം) — ഇപ്പോഴും സ്വീകരിക്കുന്നു

മുകളിലെ HMAC ഫോർമാറ്റിന് മുമ്പ്, CLI അതിന്റെ ടോക്കൺ
`SHA-256(machineId + salt).hex[0..32]` (32-അക്ഷര പ്രിഫിക്സ്) ആയി
`bin/cli/utils/cliToken.mjs`-ൽ (`src/lib/machineToken.ts`-ലെ `getLegacyCliTokenSync`)
ഡെറൈവ് ചെയ്തിരുന്നു.

പിന്നോട്ടുള്ള അനുയോജ്യതയ്ക്കായി സെർവർ **രണ്ട്** ഫോർമാറ്റുകളും സ്വീകരിക്കുന്നു: വെരിഫയർ
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` നിർമ്മിക്കുകയും
വരുന്ന ഹെഡറിനെ ഓരോന്നുമായും `timingSafeEqual` ഉപയോഗിച്ച് താരതമ്യം ചെയ്യുകയും ചെയ്യുന്നു
(`src/server/authz/policies/management.ts`, `src/lib/middleware/cliTokenAuth.ts`).
അതിനാൽ, ഒരു ടോക്കൺ 64-അക്ഷര HMAC ഡൈജസ്റ്റുമായോ 32-അക്ഷര ലെഗസി SHA-256
പ്രിഫിക്സുമായോ പൊരുത്തപ്പെട്ടാൽ അത് സാധുവാണ്.

**ഒഴിവാക്കൽ:** CLI ടോക്കൺ സംവിധാനം പൂർണ്ണമായും പ്രവർത്തനരഹിതമാക്കാൻ
`OMNIROUTE_DISABLE_CLI_TOKEN=true` (env അല്ലെങ്കിൽ `.env`) സജ്ജമാക്കുക; അതിനുശേഷം
എല്ലാ ആക്സസിനും വ്യക്തമായ ഒരു API കീ ആവശ്യമാണ്. ഒന്നിലധികം ഉപയോക്താക്കളുള്ള ഹോസ്റ്റുകളിൽ
ഇത് ശുപാർശ ചെയ്യുന്നു, കാരണം `machine-id` ഓരോ ഉപകരണത്തിനുമുള്ളതാണ്
(ഓരോ ഉപയോക്താവിനുമുള്ളതല്ല), അതിനാൽ അതേ ഹോസ്റ്റിലെ മറ്റൊരു ഉപയോക്താവിന് അതേ ടോക്കൺ
കണക്കാക്കാൻ കഴിയും.

## ഫയലുകൾ

| ഫയൽ                                       | ഉദ്ദേശ്യം                                        |
| ----------------------------------------- | ------------------------------------------------ |
| `src/lib/machineToken.ts`                 | ടോക്കൺ ഡെറിവേഷൻ (`getMachineTokenSync`)          |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER` കോൺസ്റ്റന്റ്                  |
| `src/server/authz/policies/management.ts` | സെർവർ-സൈഡ് പരിശോധന                               |
| `src/server/authz/routeGuard.ts`          | ലൂപ്പ്ബാക്ക് ഹോസ്റ്റ് പരിശോധന (`isLoopbackHost`) |

## ഇതും കാണുക

- `docs/security/ROUTE_GUARD_TIERS.md` — റൂട്ട് സംരക്ഷണ ടിയറുകൾ
- `docs/architecture/AUTHZ_GUIDE.md` — പൂർണ്ണ ഓതറൈസേഷൻ പൈപ്പ്ലൈൻ
