# CLI Machine-ID Token (Lietuvių)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Apžvalga

„OmniRoute“ CLI komandos autentifikuojamos vietinėje valdymo API naudojant
`HMAC-SHA256(machine-id, salt)` prieigos raktą, siunčiamą per
`x-omniroute-cli-token` užklausos antraštę.

Tai leidžia CLI antrinėms komandoms (`omniroute status`, `omniroute providers` ir kt.)
kreiptis į valdymo galinius taškus, nereikalaujant, kad naudotojas kiekvieną kartą
pateiktų JWT arba slaptažodį.

## Kaip tai veikia

1. `getMachineTokenSync()` nuskaito aparatinės įrangos įrenginio ID naudodama
   `node-machine-id` (nepavykus naudojama tuščia eilutė ir išjungiamas CLI
   autentifikavimas).
2. Ji apskaičiuoja `HMAC-SHA256(machine_id, salt)` ir grąžina visą 64 simbolių
   šešioliktainę maišos reikšmę — deterministinį, negrįžtamą ir su šiuo įrenginiu
   susietą prieigos raktą.
3. CLI siunčia prieigos raktą kaip `x-omniroute-cli-token` tik tada, kai nustatyta
   paskirties vieta yra aiškus grįžtamojo ryšio URL (`localhost`, `127.0.0.0/8`
   arba grįžtamojo ryšio IPv6). Užklausoms su prieigos raktu naudojama
   `redirect: error`, todėl vietinis peradresavimas negali jo persiųsti kitam
   šaltiniui. Nuotoliniuose kontekstuose vietoj jo naudojami apribotos apimties
   prieigos raktai. Jei išvesti prieigos rakto neįmanoma, CLI antraštės neįtraukia,
   o `omniroute doctor` praneša apie klaidą, užuot tuščią prieigos raktą laikęs
   galiojančiu.
4. Serveris (`src/server/authz/policies/management.ts`) iš naujo apskaičiuoja
   numatomą prieigos raktą naudodamas tą pačią druską ir palygina jį per
   `timingSafeEqual`, kad būtų išvengta išgavimo pagal vykdymo trukmę.

## Saugumo savybės

| Savybė                             | Išsami informacija                                                                                                                                                                                                           |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tik grįžtamojo ryšio sąsaja**    | Priimama tik tada, kai serverio patikima lygiaverčio mazgo vietos žyma (nustatyta pagal tikrąjį TCP lygiaverčio mazgo adresą) nurodo grįžtamąjį ryšį. Kliento valdoma `Host` antrašte vietai nustatyti niekada nepasitikima. |
| **Pastovios trukmės palyginimas**  | `crypto.timingSafeEqual` apsaugo nuo laiko matavimu pagrįstų atakų.                                                                                                                                                          |
| **Negrįžtamumas**                  | Iš HMAC išvesties negalima atkurti įrenginio ID.                                                                                                                                                                             |
| **Nėra `always` apsaugos apėjimo** | `isAlwaysProtectedPath()` įvertinama prieš tikrinant CLI prieigos raktą. `/api/shutdown` ir `/api/settings/database` visada reikalauja JWT.                                                                                  |
| **Neeksportuojamas**               | Prieigos raktas niekada neįrašomas į diską ir neregistruojamas žurnaluose.                                                                                                                                                   |

## Druskos keitimas

Nustatykite `OMNIROUTE_CLI_SALT`, kad pakeistumėte išvestinį prieigos raktą
nekeisdami kodo. Pakeitus druską, visi šio įrenginio CLI procesai automatiškai
naudos naują prieigos raktą. Tai naudinga po procesų sąrašo nutekėjimo, per kurį
galėjo būti atskleista ankstesnė išvestinė reikšmė.

```bash
# Nuolatinis pakeitimas (pridėkite prie apvalkalo profilio)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Patikrinkite, ar naudojamas naujas prieigos raktas
omniroute status
```

Numatytoji druska: `omniroute-cli-auth-v1`

## Senasis formatas (SHA-256, 32 simboliai) — vis dar priimamas

Prieš naudojant pirmiau aprašytą HMAC formatą, CLI išvesdavo prieigos raktą kaip
`SHA-256(machineId + salt).hex[0..32]` (32 simbolių prefiksą) faile
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` faile `src/lib/machineToken.ts`).

Siekiant atgalinio suderinamumo, serveris priima **abu** formatus: tikrintuvas sudaro
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` ir palygina
gautą antraštę su kiekvienu iš jų naudodamas `timingSafeEqual`
(`src/server/authz/policies/management.ts` ir `src/lib/middleware/cliTokenAuth.ts`).
Taigi prieigos raktas galioja, jei atitinka **arba** 64 simbolių HMAC maišos reikšmę,
arba 32 simbolių senojo SHA-256 formato prefiksą.

**Atsisakymas:** nustatykite `OMNIROUTE_DISABLE_CLI_TOKEN=true` (aplinkoje arba
`.env`), kad visiškai išjungtumėte CLI prieigos rakto mechanizmą; tokiu atveju
visai prieigai reikės aiškiai nurodyto API rakto. Kelių naudotojų serveriuose tai
rekomenduojama, nes `machine-id` priskiriamas įrenginiui (o ne naudotojui), todėl
kitas to paties serverio naudotojas galėtų apskaičiuoti tokį patį prieigos raktą.

## Failai

| Failas                                    | Paskirtis                                            |
| ----------------------------------------- | ---------------------------------------------------- |
| `src/lib/machineToken.ts`                 | Prieigos rakto išvedimas (`getMachineTokenSync`)     |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER` konstanta                         |
| `src/server/authz/policies/management.ts` | Tikrinimas serverio pusėje                           |
| `src/server/authz/routeGuard.ts`          | Grįžtamojo ryšio mazgo tikrinimas (`isLoopbackHost`) |

## Taip pat žr.

- `docs/security/ROUTE_GUARD_TIERS.md` — maršrutų apsaugos lygiai
- `docs/architecture/AUTHZ_GUIDE.md` — visas autorizavimo procesas
