# CLI Machine-ID Token (Igbo)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Nchịkọta

Iwu OmniRoute CLI na-eme nkwenye njirimara megide API njikwa mpaghara site n'iji token
`HMAC-SHA256(machine-id, salt)` nke a na-eziga site na nkụnye eji isi mee arịrịọ
`x-omniroute-cli-token`.

Nke a na-enye obere iwu CLI (`omniroute status`, `omniroute providers`, wdg.)
ohere ịkpọ endpoint njikwa na-enweghị ịmanye onye ọrụ ịnye JWT ma ọ bụ
okwuntughe oge ọ bụla a kpọrọ iwu.

## Otu o si arụ ọrụ

1. `getMachineTokenSync()` na-agụ ID ngwaike nke igwe site na `node-machine-id`
   (ọ bụrụ na nke a ada, ọ na-eji eriri efu, nke na-agbanyụ nkwenye njirimara CLI).
2. Ọ na-agbakọ `HMAC-SHA256(machine_id, salt)` ma weghachi digest hex zuru ezu nwere
   mkpụrụedemede 64 — token a na-enweta otu ihe mgbe niile, nke a na-apụghị ịtụgharị
   azụ, ma jikọtara ya na igwe a.
3. CLI na-eziga token ahụ dịka `x-omniroute-cli-token` naanị mgbe ebe njedebe
   a chọpụtara bụ URL loopback doro anya (`localhost`, `127.0.0.0/8`, ma ọ bụ
   loopback IPv6). Arịrịọ ndị bu token ahụ na-eji `redirect: error`, ya mere
   ntụgharị mpaghara agaghị eziga ya n'ebe mmalite ọzọ. Context ndị dị anya
   na-eji token nnweta nwere oke kama. Ọ bụrụ na enweghị ike ịmepụta token ahụ,
   CLI agaghị etinye nkụnye eji isi mee ahụ, `omniroute doctor` ga-akọkwa ọdịda ahụ
   kama ile token efu anya dịka nke ziri ezi.
4. Sava (`src/server/authz/policies/management.ts`) na-eji otu salt ahụ gbakọọ
   token a tụrụ anya ya ọzọ ma jiri `timingSafeEqual` tụnyere ha iji gbochie
   iwepụta token site na nyocha oge.

## Njirimara nchekwa

| Njirimara                          | Nkọwa                                                                                                                                                                                                                     |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Naanị loopback**                 | A na-anabata ya naanị mgbe akara mpaghara-peer nke sava tụkwasịrị obi (nke sitere na adreesị ezigbo TCP peer) gosiri loopback. A naghị atụkwasị nkụnye eji isi mee `Host` nke client na-achịkwa obi iji chọpụta mpaghara. |
| **Ntụnyere na-ewe otu oge**        | `crypto.timingSafeEqual` na-egbochi mwakpo dabere n'ịtụ oge.                                                                                                                                                              |
| **A pụghị ịtụgharị ya azụ**        | Enweghị ike iji mmepụta HMAC weghachite machine-id.                                                                                                                                                                       |
| **Enweghị ngafe nchekwa `always`** | A na-enyocha `isAlwaysProtectedPath()` tupu nyocha token CLI. `/api/shutdown` na `/api/settings/database` na-achọ JWT mgbe niile.                                                                                         |
| **A pụghị ibupụ ya**               | A naghị ede token ahụ na diski ma ọ bụ dekọọ ya na log.                                                                                                                                                                   |

## Ịgbanwe salt

Tọọ `OMNIROUTE_CLI_SALT` iji gbanwee token a na-emepụta na-enweghị mgbanwe
na koodu. Mgbe mgbanwe ahụ gasịrị, usoro CLI niile dị n'igwe a ga-eji token
ọhụrụ ahụ na-akpaghị aka. Nke a bara uru mgbe ọdịpụ ozi sitere na ndepụta usoro
nwere ike ikpughe uru e mepụtara na mbụ.

```bash
# Mgbanwe na-adịgide adịgide (tinye na profaịlụ shell)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Nyochaa na a na-eji token ọhụrụ ahụ
omniroute status
```

Salt ndabara: `omniroute-cli-auth-v1`

## Ọdịdị ochie (SHA-256, mkpụrụedemede 32) — a ka na-anabata ya

Tupu ọdịdị HMAC dị n'elu, CLI na-emepụta token ya dịka
`SHA-256(machineId + salt).hex[0..32]` (prefix nwere mkpụrụedemede 32) n'ime
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` n'ime `src/lib/machineToken.ts`).

Maka ndakọrịta na ụdị ndị gara aga, sava na-anabata ọdịdị **abụọ ahụ**: verifier na-emepụta
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` ma jiri
`timingSafeEqual` tụnyere nkụnye eji isi mee batara na nke ọ bụla
(`src/server/authz/policies/management.ts` na `src/lib/middleware/cliTokenAuth.ts`).
Ya mere, token ziri ezi ma ọ bụrụ na ọ dakọtara na **nke ọ bụla** n'ime digest HMAC nwere
mkpụrụedemede 64 ma ọ bụ prefix SHA-256 ochie nwere mkpụrụedemede 32.

**Ịjụ iji ya:** tọọ `OMNIROUTE_DISABLE_CLI_TOKEN=true` (env ma ọ bụ `.env`) iji gbanyụọ
usoro token CLI kpamkpam; mgbe ahụ, nnweta niile ga-achọ API key doro anya. N'igwe
nwere ọtụtụ ndị ọrụ, a na-atụ aro nke a, n'ihi na `machine-id` bụ nke ngwaọrụ
dum (ọ bụghị nke onye ọrụ ọ bụla), onye ọrụ ọzọ nọ n'otu igwe ahụ nwekwara ike
ịgbakọ otu token ahụ.

## Faịlụ

| Faịlụ                                     | Ebumnuche                                |
| ----------------------------------------- | ---------------------------------------- |
| `src/lib/machineToken.ts`                 | Mmepụta token (`getMachineTokenSync`)    |
| `src/server/authz/headers.ts`             | Constant `CLI_TOKEN_HEADER`              |
| `src/server/authz/policies/management.ts` | Nnyocha n'akụkụ sava                     |
| `src/server/authz/routeGuard.ts`          | Nnyocha host loopback (`isLoopbackHost`) |

## Leekwa

- `docs/security/ROUTE_GUARD_TIERS.md` — ọkwa nchekwa route
- `docs/architecture/AUTHZ_GUIDE.md` — usoro authorization zuru ezu
