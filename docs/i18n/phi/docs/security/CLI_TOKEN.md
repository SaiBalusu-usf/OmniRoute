# CLI Machine-ID Token (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Pangkalahatang-ideya

Nagpapatotoo ang mga command ng OmniRoute CLI sa lokal na management API gamit ang
`HMAC-SHA256(machine-id, salt)` token na ipinapadala sa pamamagitan ng
`x-omniroute-cli-token` request header.

Nagbibigay-daan ito sa mga CLI subcommand (`omniroute status`, `omniroute providers`, atbp.)
na tumawag sa mga management endpoint nang hindi kinakailangang magbigay ang user ng JWT o
password sa bawat pagpapatakbo.

## Paano ito gumagana

1. Binabasa ng `getMachineTokenSync()` ang hardware machine ID sa pamamagitan ng `node-machine-id`
   (bumabalik sa isang walang-lamang string kapag nabigo, na nagdi-disable sa CLI auth).
2. Kinukuwenta nito ang `HMAC-SHA256(machine_id, salt)` at ibinabalik ang buong 64-char
   hex digest — isang deterministiko at hindi maibabalik na token na nakatali sa machine na ito.
3. Ipinapadala lamang ng CLI ang token bilang `x-omniroute-cli-token` kapag ang natukoy na
   destinasyon ay isang tahasang loopback URL (`localhost`, `127.0.0.0/8`, o
   loopback IPv6). Gumagamit ang mga request na may dalang token ng `redirect: error`, upang hindi
   ito maipasa ng isang lokal na redirect sa ibang origin. Sa halip, gumagamit ang mga remote
   context ng mga scoped access token. Kung hindi available ang derivation, hindi isinasama ng CLI
   ang header at iniuulat ng `omniroute doctor` ang pagkabigo sa halip na ituring na valid ang
   isang walang-lamang token.
4. Muling kinukuwenta ng server (`src/server/authz/policies/management.ts`) ang
   inaasahang token gamit ang parehong salt at inihahambing ito sa pamamagitan ng `timingSafeEqual`
   upang pigilan ang pagkuha batay sa timing.

## Mga katangian ng seguridad

| Katangian                                      | Detalye                                                                                                                                                                                                                                          |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Loopback lamang**                            | Tinatanggap lamang kapag sinasabi ng pinagkakatiwalaang peer-locality stamp ng server (na hinango mula sa tunay na TCP peer address) na loopback ito. Hindi kailanman pinagkakatiwalaan ang client-controlled na `Host` header para sa locality. |
| **Constant-time na paghahambing**              | Pinipigilan ng `crypto.timingSafeEqual` ang mga timing attack.                                                                                                                                                                                   |
| **Hindi maibabalik**                           | Hindi mababawi ang machine-id mula sa output ng HMAC.                                                                                                                                                                                            |
| **Walang pag-bypass sa proteksiyong `always`** | Sinusuri ang `isAlwaysProtectedPath()` bago ang pagsusuri sa CLI token. Palaging nangangailangan ng JWT ang `/api/shutdown` at `/api/settings/database`.                                                                                         |
| **Hindi nae-export**                           | Hindi kailanman isinusulat sa disk o itinatala sa log ang token.                                                                                                                                                                                 |

## Pag-rotate ng salt

Itakda ang `OMNIROUTE_CLI_SALT` upang i-rotate ang hinangong token nang walang pagbabago sa code.
Pagkatapos ng rotation, awtomatikong gagamitin ng lahat ng CLI process sa machine na ito ang bagong token.
Kapaki-pakinabang ito pagkatapos ng pagtagas ng process list na maaaring naglantad sa
nakaraang hinangong value.

```bash
# Permanenteng rotation (idagdag sa shell profile)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Tiyaking ginagamit ang bagong token
omniroute status
```

Default na salt: `omniroute-cli-auth-v1`

## Legacy na format (SHA-256, 32-char) — tinatanggap pa rin

Bago ang HMAC format sa itaas, hinango ng CLI ang token nito bilang
`SHA-256(machineId + salt).hex[0..32]` (isang 32-char prefix) sa
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` sa `src/lib/machineToken.ts`).

Para sa backward compatibility, tinatanggap ng server ang **parehong** format: binubuo ng verifier ang
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` at inihahambing ang
papasok na header sa bawat isa gamit ang `timingSafeEqual`
(`src/server/authz/policies/management.ts` at `src/lib/middleware/cliTokenAuth.ts`).
Kaya valid ang isang token kung tumutugma ito sa **alinman** sa 64-char HMAC digest o sa 32-char
legacy SHA-256 prefix.

**Pag-opt out:** itakda ang `OMNIROUTE_DISABLE_CLI_TOKEN=true` (env o `.env`) upang ganap na i-disable ang
mekanismo ng CLI token; pagkatapos nito, nangangailangan ang lahat ng access ng tahasang API key. Sa mga multi-user
host, inirerekomenda ito dahil ang `machine-id` ay para sa bawat device (hindi para sa bawat user) at maaaring
kuwentahin ng ibang user sa parehong host ang kaparehong token.

## Mga file

| File                                      | Layunin                                       |
| ----------------------------------------- | --------------------------------------------- |
| `src/lib/machineToken.ts`                 | Derivation ng token (`getMachineTokenSync`)   |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER` constant                   |
| `src/server/authz/policies/management.ts` | Pag-verify sa panig ng server                 |
| `src/server/authz/routeGuard.ts`          | Pagsusuri sa loopback host (`isLoopbackHost`) |

## Tingnan din

- `docs/security/ROUTE_GUARD_TIERS.md` — mga antas ng proteksiyon sa route
- `docs/architecture/AUTHZ_GUIDE.md` — kumpletong authorization pipeline
