# CLI Machine-ID Token (Yorùbá)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Àkótán

Àwọn àṣẹ OmniRoute CLI ń jẹ́rìí-ìdánimọ̀ sí API ìṣàkóso agbègbè nípa lílo
àmì `HMAC-SHA256(machine-id, salt)` tí a fi ránṣẹ́ nípasẹ̀ àkọlé ìbéèrè
`x-omniroute-cli-token`.

Èyí ń jẹ́ kí àwọn àṣẹ abẹ́ CLI (`omniroute status`, `omniroute providers`, àti bẹ́ẹ̀ bẹ́ẹ̀ lọ)
lè pe àwọn endpoint ìṣàkóso láìní kí olùlò pèsè JWT tàbí
ọ̀rọ̀ aṣínà ní gbogbo ìgbà tí a bá pè é.

## Bí ó ṣe ń ṣiṣẹ́

1. `getMachineTokenSync()` ń ka ID ẹ̀rọ hardware nípasẹ̀ `node-machine-id`
   (ó máa lo okun òfo bí ó bá kùnà, èyí tí yóò pa ìjẹ́rìí-ìdánimọ̀ CLI).
2. Ó ń ṣírò `HMAC-SHA256(machine_id, salt)`, ó sì ń dá digest hex olóǹkà 64
   kíkún padà — àmì tó ṣeé tún mú jáde lọ́nà kan náà, tí kò ṣeé yí padà, tí ó sì so mọ́ ẹ̀rọ yìí.
3. CLI máa ń fi àmì náà ránṣẹ́ gẹ́gẹ́ bí `x-omniroute-cli-token` nìkan nígbà tí
   ibi tí a ti yanjú jẹ́ URL loopback pàtó (`localhost`, `127.0.0.0/8`, tàbí
   loopback IPv6). Àwọn ìbéèrè tó gbé àmì náà máa ń lo `redirect: error`, nítorí náà
   ìdarí-padà agbègbè kò lè fi ránṣẹ́ sí origin mìíràn. Àwọn context jíjìn máa ń lo
   àwọn access token tó ní ààlà dípò rẹ̀. Bí ìṣẹ̀dá àmì kò bá ṣeé ṣe, CLI kò ní fi
   àkọlé náà kún un, `omniroute doctor` yóò sì jabo ìkùnà náà dípò kí ó ka àmì òfo
   sí èyí tó fẹsẹ̀múlẹ̀.
4. Server (`src/server/authz/policies/management.ts`) tún ń ṣírò
   àmì tí a retí pẹ̀lú salt kan náà, ó sì ń fi wé e nípasẹ̀ `timingSafeEqual`
   láti dènà ìyọjáde tó dá lórí àkókò.

## Àwọn àbùdá ààbò

| Àbùdá                              | Àlàyé                                                                                                                                                                                       |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Loopback nìkan**                 | A máa ń gbà á nìkan nígbà tí àmì ìgbẹ́kẹ̀lé nípa ibi peer ti server (tí a mú jáde láti àdírẹ́sì peer TCP gidi) bá sọ pé loopback ni. A kò fi àkọlé `Host` tí client ń ṣàkóso gbẹ́kẹ̀ lé fún ibi. |
| **Ìfiwéra àkókò-dídúróṣinṣin**     | `crypto.timingSafeEqual` ń dènà àwọn ìkọlù tó dá lórí àkókò.                                                                                                                                |
| **Kò ṣeé yí padà**                 | Àbájáde HMAC kò lè gba machine-id padà.                                                                                                                                                     |
| **Kò sí yíyẹra fún ààbò `always`** | A máa ń ṣàyẹ̀wò `isAlwaysProtectedPath()` ṣáájú àyẹ̀wò àmì CLI. `/api/shutdown` àti `/api/settings/database` máa ń nílò JWT nígbà gbogbo.                                                     |
| **Kò ṣeé kó jáde**                 | A kì í kọ àmì náà sí disk tàbí sí log láé.                                                                                                                                                  |

## Yíyí salt padà

Ṣètò `OMNIROUTE_CLI_SALT` láti yí àmì tí a mú jáde padà láìyí code.
Lẹ́yìn yíyí náà, gbogbo àwọn process CLI lórí ẹ̀rọ yìí yóò lo àmì tuntun
láìfọwọ́ṣe. Èyí wúlò lẹ́yìn jǹjò àkójọ process tí ó ṣeé ṣe kí ó ti ṣí
iye tí a mú jáde tẹ́lẹ̀ payá.

```bash
# Yíyí tó máa dúró (fi kún profile shell)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Ṣàyẹ̀wò pé àmì tuntun ti bẹ̀rẹ̀ sí í lò
omniroute status
```

Salt àìyípadà: `omniroute-cli-auth-v1`

## Ìgúnlẹ̀ àtijọ́ (SHA-256, olóǹkà 32) — a ṣì ń gbà á

Ṣáájú ìgúnlẹ̀ HMAC tó wà lókè, CLI ń mú àmì rẹ̀ jáde gẹ́gẹ́ bí
`SHA-256(machineId + salt).hex[0..32]` (ìpele ìbẹ̀rẹ̀ olóǹkà 32) nínú
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` nínú `src/lib/machineToken.ts`).

Fún ìbámu sẹ́yìn, server ń gba **àwọn ìgúnlẹ̀ méjèèjì**: olùjẹ́rìí ń kọ
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]`, ó sì ń fi
àkọlé tó wọlé wé ọ̀kọ̀ọ̀kan nípasẹ̀ `timingSafeEqual`
(`src/server/authz/policies/management.ts` àti `src/lib/middleware/cliTokenAuth.ts`).
Nítorí náà, àmì kan fẹsẹ̀múlẹ̀ bí ó bá bá **èyíkéyìí** nínú digest HMAC olóǹkà 64 tàbí
ìpele ìbẹ̀rẹ̀ SHA-256 àtijọ́ olóǹkà 32 mu.

**Kíkúrò nínú rẹ̀:** ṣètò `OMNIROUTE_DISABLE_CLI_TOKEN=true` (env tàbí `.env`) láti pa
ètò àmì CLI náà pátápátá; gbogbo àyè wọlé yóò wá nílò API key pàtó. Lórí àwọn host
olúlò-púpọ̀, a ṣe ìmọ̀ràn èyí, nítorí pé `machine-id` jẹ́ ti ẹ̀rọ kọ̀ọ̀kan (kì í ṣe ti
olùlò kọ̀ọ̀kan), olùlò mìíràn lórí host kan náà sì lè ṣírò àmì kan náà.

## Àwọn fáìlì

| Fáìlì                                     | Ìdí                                    |
| ----------------------------------------- | -------------------------------------- |
| `src/lib/machineToken.ts`                 | Ìmújáde àmì (`getMachineTokenSync`)    |
| `src/server/authz/headers.ts`             | Constant `CLI_TOKEN_HEADER`            |
| `src/server/authz/policies/management.ts` | Ìjẹ́rìí ní ẹ̀gbẹ́ server                  |
| `src/server/authz/routeGuard.ts`          | Àyẹ̀wò host loopback (`isLoopbackHost`) |

## Tún wo

- `docs/security/ROUTE_GUARD_TIERS.md` — àwọn ipele ààbò route
- `docs/architecture/AUTHZ_GUIDE.md` — gbogbo pipeline fífúnni-láṣẹ
