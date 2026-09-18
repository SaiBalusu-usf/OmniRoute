# CLI Machine-ID Token (Hrvatski)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Pregled

Naredbe OmniRoute CLI-ja autentificiraju se prema lokalnom upravljačkom API-ju pomoću
tokena `HMAC-SHA256(machine-id, salt)` poslanog putem zaglavlja zahtjeva
`x-omniroute-cli-token`.

To omogućuje podnaredbama CLI-ja (`omniroute status`, `omniroute providers` itd.)
pozivanje upravljačkih krajnjih točaka bez potrebe da korisnik pri svakom pozivu
navede JWT ili lozinku.

## Kako funkcionira

1. `getMachineTokenSync()` čita hardverski ID uređaja putem paketa `node-machine-id`
   (u slučaju neuspjeha vraća prazan niz, čime se onemogućuje autentifikacija CLI-ja).
2. Izračunava `HMAC-SHA256(machine_id, salt)` i vraća puni heksadecimalni sažetak
   od 64 znaka — deterministički, nepovratni token povezan s ovim uređajem.
3. CLI šalje token kao `x-omniroute-cli-token` samo kada je razriješeno
   odredište eksplicitni URL povratne petlje (`localhost`, `127.0.0.0/8` ili
   IPv6 povratne petlje). Zahtjevi koji sadrže token koriste `redirect: error`,
   tako da ga lokalno preusmjeravanje ne može proslijediti drugom izvorištu.
   Udaljeni konteksti umjesto toga koriste pristupne tokene ograničenog opsega.
   Ako izvođenje tokena nije dostupno, CLI izostavlja zaglavlje, a
   `omniroute doctor` prijavljuje neuspjeh umjesto da prazan token smatra valjanim.
4. Poslužitelj (`src/server/authz/policies/management.ts`) ponovno izračunava
   očekivani token pomoću iste soli i uspoređuje ga funkcijom `timingSafeEqual`
   kako bi spriječio otkrivanje tokena na temelju vremenskih razlika.

## Sigurnosna svojstva

| Svojstvo                               | Pojedinosti                                                                                                                                                                                                                                     |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Samo povratna petlja**               | Prihvaća se samo kada pouzdana poslužiteljska oznaka lokalnosti ravnopravnog člana (izvedena iz stvarne adrese TCP ravnopravnog člana) označava povratnu petlju. Lokalnost se nikada ne određuje prema zaglavlju `Host` kojim upravlja klijent. |
| **Usporedba u stalnom vremenu**        | `crypto.timingSafeEqual` sprječava napade mjerenjem vremena.                                                                                                                                                                                    |
| **Nepovratno**                         | Iz HMAC izlaza nije moguće dobiti machine-id.                                                                                                                                                                                                   |
| **Nema zaobilaženja zaštite `always`** | `isAlwaysProtectedPath()` provjerava se prije provjere tokena CLI-ja. `/api/shutdown` i `/api/settings/database` uvijek zahtijevaju JWT.                                                                                                        |
| **Nije moguće izvesti**                | Token se nikada ne zapisuje na disk niti u zapisnike.                                                                                                                                                                                           |

## Rotacija soli

Postavite `OMNIROUTE_CLI_SALT` kako biste rotirali izvedeni token bez izmjena koda.
Nakon rotacije svi procesi CLI-ja na ovom uređaju automatski će upotrebljavati
novi token. To je korisno nakon curenja popisa procesa kojim je možda otkrivena
prethodno izvedena vrijednost.

```bash
# Trajna rotacija (dodajte u profil ljuske)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Provjerite upotrebljava li se novi token
omniroute status
```

Zadana sol: `omniroute-cli-auth-v1`

## Naslijeđeni format (SHA-256, 32 znaka) — još uvijek se prihvaća

Prije prethodno opisanog HMAC formata CLI je izvodio token kao
`SHA-256(machineId + salt).hex[0..32]` (prefiks od 32 znaka) u datoteci
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` u `src/lib/machineToken.ts`).

Radi kompatibilnosti sa starijim verzijama poslužitelj prihvaća **oba** formata:
provjeravatelj stvara `expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]`
i uspoređuje dolazno zaglavlje sa svakim od njih pomoću funkcije `timingSafeEqual`
(`src/server/authz/policies/management.ts` i `src/lib/middleware/cliTokenAuth.ts`).
Token je stoga valjan ako se podudara **ili** s HMAC sažetkom od 64 znaka ili s
naslijeđenim SHA-256 prefiksom od 32 znaka.

**Isključivanje:** postavite `OMNIROUTE_DISABLE_CLI_TOKEN=true` (u okruženju ili
datoteci `.env`) kako biste u potpunosti onemogućili mehanizam tokena CLI-ja;
sav pristup tada zahtijeva eksplicitni API ključ. To se preporučuje na računalima
s više korisnika jer je `machine-id` vezan uz uređaj (ne uz korisnika), pa bi drugi
korisnik na istom računalu mogao izračunati isti token.

## Datoteke

| Datoteka                                  | Namjena                                              |
| ----------------------------------------- | ---------------------------------------------------- |
| `src/lib/machineToken.ts`                 | Izvođenje tokena (`getMachineTokenSync`)             |
| `src/server/authz/headers.ts`             | Konstanta `CLI_TOKEN_HEADER`                         |
| `src/server/authz/policies/management.ts` | Provjera na strani poslužitelja                      |
| `src/server/authz/routeGuard.ts`          | Provjera domaćina povratne petlje (`isLoopbackHost`) |

## Vidi također

- `docs/security/ROUTE_GUARD_TIERS.md` — razine zaštite ruta
- `docs/architecture/AUTHZ_GUIDE.md` — cjeloviti autorizacijski proces
