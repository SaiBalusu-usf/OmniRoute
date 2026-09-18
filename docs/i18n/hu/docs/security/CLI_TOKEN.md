# CLI Machine-ID Token (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Áttekintés

Az OmniRoute CLI-parancsok a helyi felügyeleti API felé egy
`HMAC-SHA256(machine-id, salt)` tokennel hitelesítik magukat, amelyet az
`x-omniroute-cli-token` kérésfejlécben küldenek el.

Ez lehetővé teszi, hogy a CLI-alparancsok (`omniroute status`, `omniroute providers` stb.)
anélkül hívják meg a felügyeleti végpontokat, hogy a felhasználónak minden futtatáskor
JWT-t vagy jelszót kellene megadnia.

## Működés

1. A `getMachineTokenSync()` a `node-machine-id` segítségével beolvassa a hardveres
   gépazonosítót (hiba esetén üres karakterláncot használ, letiltva ezzel a CLI-hitelesítést).
2. Kiszámítja a `HMAC-SHA256(machine_id, salt)` értéket, és visszaadja a teljes,
   64 karakteres hexadecimális kivonatot — egy determinisztikus, nem visszafejthető,
   az adott géphez kötött tokent.
3. A CLI csak akkor küldi el a tokent `x-omniroute-cli-token` formájában, ha a feloldott
   cél egy explicit visszacsatolási URL (`localhost`, `127.0.0.0/8` vagy visszacsatolási
   IPv6). A tokent tartalmazó kérések a `redirect: error` beállítást használják, így egy
   helyi átirányítás nem továbbíthatja azt másik forráshoz. A távoli környezetek ehelyett
   hatókörrel rendelkező hozzáférési tokeneket használnak. Ha a származtatás nem érhető el,
   a CLI kihagyja a fejlécet, az `omniroute doctor` pedig jelenti a hibát ahelyett, hogy
   egy üres tokent érvényesnek tekintene.
4. A szerver (`src/server/authz/policies/management.ts`) ugyanazzal a sóval újraszámítja
   a várt tokent, és a `timingSafeEqual` segítségével hasonlítja össze, hogy megakadályozza
   az időzítésen alapuló kinyerést.

## Biztonsági tulajdonságok

| Tulajdonság                                     | Részletek                                                                                                                                                                                                                                                        |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Csak visszacsatolás**                         | Csak akkor fogadható el, ha a szerver megbízható, a partner helyét jelző bélyegzője (amelyet a tényleges TCP-partner címéből származtat) visszacsatolást jelez. A hely meghatározásához a kliens által vezérelt `Host` fejléc soha nem tekinthető megbízhatónak. |
| **Konstans idejű összehasonlítás**              | A `crypto.timingSafeEqual` megakadályozza az időzítési támadásokat.                                                                                                                                                                                              |
| **Nem visszafejthető**                          | A HMAC kimenetéből nem állítható vissza a gépazonosító.                                                                                                                                                                                                          |
| **Nincs `always`-védelmet megkerülő lehetőség** | Az `isAlwaysProtectedPath()` kiértékelése a CLI-token ellenőrzése előtt történik. Az `/api/shutdown` és az `/api/settings/database` mindig JWT-t igényel.                                                                                                        |
| **Nem exportálható**                            | A token soha nem kerül lemezre és naplózásra.                                                                                                                                                                                                                    |

## A só rotációja

A származtatott token kódmódosítás nélküli rotálásához állítsa be az
`OMNIROUTE_CLI_SALT` értékét. A rotáció után ezen a gépen minden CLI-folyamat
automatikusan az új tokent fogja használni. Ez egy olyan folyamatlista-szivárgás
után lehet hasznos, amely felfedhette a korábbi származtatott értéket.

```bash
# Tartós rotáció (adja hozzá a shell profiljához)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Ellenőrizze, hogy az új token van-e használatban
omniroute status
```

Alapértelmezett só: `omniroute-cli-auth-v1`

## Örökölt formátum (SHA-256, 32 karakteres) — továbbra is elfogadott

A fenti HMAC-formátum előtt a CLI a tokent
`SHA-256(machineId + salt).hex[0..32]` formában (32 karakteres előtagként)
származtatta a `bin/cli/utils/cliToken.mjs` fájlban (`getLegacyCliTokenSync` a
`src/lib/machineToken.ts` fájlban).

A visszafelé kompatibilitás érdekében a szerver **mindkét** formátumot elfogadja:
az ellenőrző összeállítja az `expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]`
tömböt, majd a beérkező fejlécet a `timingSafeEqual` segítségével mindegyikkel
összehasonlítja (`src/server/authz/policies/management.ts` és
`src/lib/middleware/cliTokenAuth.ts`). A token tehát akkor érvényes, ha **vagy** a
64 karakteres HMAC-kivonattal, **vagy** a 32 karakteres örökölt SHA-256-előtaggal
megegyezik.

**Kikapcsolás:** állítsa az `OMNIROUTE_DISABLE_CLI_TOKEN=true` értéket (környezeti
változóként vagy a `.env` fájlban) a CLI-tokenmechanizmus teljes letiltásához; ezt
követően minden hozzáféréshez explicit API-kulcs szükséges. Többfelhasználós gépeken
ez ajánlott, mivel a `machine-id` eszközönként (nem pedig felhasználónként) egyedi,
így ugyanazon a gépen egy másik felhasználó is kiszámíthatja ugyanazt a tokent.

## Fájlok

| Fájl                                      | Rendeltetés                                               |
| ----------------------------------------- | --------------------------------------------------------- |
| `src/lib/machineToken.ts`                 | Tokenszármaztatás (`getMachineTokenSync`)                 |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER` konstans                               |
| `src/server/authz/policies/management.ts` | Szerveroldali ellenőrzés                                  |
| `src/server/authz/routeGuard.ts`          | Visszacsatolási állomásnév ellenőrzése (`isLoopbackHost`) |

## Lásd még

- `docs/security/ROUTE_GUARD_TIERS.md` — útvonalvédelmi szintek
- `docs/architecture/AUTHZ_GUIDE.md` — teljes engedélyezési folyamat
