# CLI Machine-ID Token (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Přehled

Příkazy OmniRoute CLI se vůči místnímu rozhraní API pro správu autentizují pomocí
tokenu `HMAC-SHA256(machine-id, salt)` odesílaného v hlavičce požadavku
`x-omniroute-cli-token`.

Díky tomu mohou dílčí příkazy CLI (`omniroute status`, `omniroute providers` atd.)
volat koncové body pro správu, aniž by uživatel musel při každém spuštění zadávat
JWT nebo heslo.

## Jak to funguje

1. `getMachineTokenSync()` načte hardwarové ID zařízení prostřednictvím
   `node-machine-id` (při selhání použije prázdný řetězec, čímž autentizaci CLI
   deaktivuje).
2. Vypočítá `HMAC-SHA256(machine_id, salt)` a vrátí úplný 64znakový hexadecimální
   otisk — deterministický, nevratný token svázaný s tímto zařízením.
3. CLI odesílá token jako `x-omniroute-cli-token` pouze tehdy, když je cílová
   adresa vyhodnocena jako explicitní URL zpětné smyčky (`localhost`,
   `127.0.0.0/8` nebo IPv6 zpětné smyčky). Požadavky obsahující token používají
   `redirect: error`, takže jej místní přesměrování nemůže předat jinému zdroji.
   Vzdálené kontexty místo toho používají přístupové tokeny s omezeným rozsahem.
   Pokud odvození není dostupné, CLI hlavičku vynechá a `omniroute doctor`
   nahlásí selhání, místo aby považoval prázdný token za platný.
4. Server (`src/server/authz/policies/management.ts`) znovu vypočítá očekávaný
   token se stejnou solí a porovná jej pomocí `timingSafeEqual`, aby zabránil
   jeho získání pomocí časových útoků.

## Bezpečnostní vlastnosti

| Vlastnost                          | Podrobnosti                                                                                                                                                                                                                        |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Pouze zpětná smyčka**            | Přijímá se pouze tehdy, když důvěryhodné označení lokality protistrany na serveru (odvozené ze skutečné adresy TCP protistrany) uvádí zpětnou smyčku. Klientem ovládané hlavičce `Host` se nikdy nedůvěřuje při určování lokality. |
| **Porovnání v konstantním čase**   | `crypto.timingSafeEqual` zabraňuje časovým útokům.                                                                                                                                                                                 |
| **Nevratnost**                     | Z výstupu HMAC nelze obnovit ID zařízení.                                                                                                                                                                                          |
| **Bez obcházení ochrany `always`** | `isAlwaysProtectedPath()` se vyhodnocuje před kontrolou tokenu CLI. `/api/shutdown` a `/api/settings/database` vždy vyžadují JWT.                                                                                                  |
| **Neexportovatelnost**             | Token se nikdy nezapisuje na disk ani do protokolů.                                                                                                                                                                                |

## Rotace soli

Nastavením `OMNIROUTE_CLI_SALT` můžete odvozený token změnit bez úprav kódu.
Po rotaci budou všechny procesy CLI na tomto zařízení automaticky používat nový
token. To je užitečné po úniku seznamu procesů, který mohl odhalit předchozí
odvozenou hodnotu.

```bash
# Trvalá rotace (přidejte do profilu shellu)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Ověření, že se používá nový token
omniroute status
```

Výchozí sůl: `omniroute-cli-auth-v1`

## Starší formát (SHA-256, 32 znaků) — stále podporován

Před zavedením výše uvedeného formátu HMAC odvozovalo CLI svůj token jako
`SHA-256(machineId + salt).hex[0..32]` (32znakový prefix) v souboru
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` v `src/lib/machineToken.ts`).

Kvůli zpětné kompatibilitě server přijímá **oba** formáty: ověřovací mechanismus
sestaví `expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]`
a porovná příchozí hlavičku s každým z nich pomocí `timingSafeEqual`
(`src/server/authz/policies/management.ts` a `src/lib/middleware/cliTokenAuth.ts`).
Token je tedy platný, pokud odpovídá **buď** 64znakovému otisku HMAC, nebo
32znakovému prefixu staršího formátu SHA-256.

**Deaktivace:** nastavením `OMNIROUTE_DISABLE_CLI_TOKEN=true` (v prostředí nebo
souboru `.env`) mechanismus tokenu CLI zcela deaktivujete; veškerý přístup pak
vyžaduje explicitní klíč API. Na hostitelích s více uživateli je to doporučeno,
protože `machine-id` je specifické pro zařízení (nikoli pro uživatele) a jiný
uživatel na stejném hostiteli by mohl vypočítat stejný token.

## Soubory

| Soubor                                    | Účel                                                |
| ----------------------------------------- | --------------------------------------------------- |
| `src/lib/machineToken.ts`                 | Odvození tokenu (`getMachineTokenSync`)             |
| `src/server/authz/headers.ts`             | Konstanta `CLI_TOKEN_HEADER`                        |
| `src/server/authz/policies/management.ts` | Ověření na straně serveru                           |
| `src/server/authz/routeGuard.ts`          | Kontrola hostitele zpětné smyčky (`isLoopbackHost`) |

## Viz také

- `docs/security/ROUTE_GUARD_TIERS.md` — úrovně ochrany tras
- `docs/architecture/AUTHZ_GUIDE.md` — kompletní proces autorizace
