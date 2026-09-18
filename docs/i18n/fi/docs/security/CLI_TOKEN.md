# CLI Machine-ID Token (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Yleiskatsaus

OmniRoute CLI -komennot todentautuvat paikalliseen hallinta-APIin käyttämällä
`HMAC-SHA256(machine-id, salt)`-tunnistetta, joka lähetetään
`x-omniroute-cli-token`-pyyntöotsakkeessa.

Näin CLI-alikomennot (`omniroute status`, `omniroute providers` jne.) voivat
kutsua hallinnan päätepisteitä ilman, että käyttäjän tarvitsee antaa JWT:tä tai
salasanaa jokaisella suorituskerralla.

## Toimintaperiaate

1. `getMachineTokenSync()` lukee laitteiston konetunnisteen `node-machine-id`-paketin
   avulla (virheen ilmetessä käytetään tyhjää merkkijonoa, mikä poistaa CLI-todennuksen
   käytöstä).
2. Se laskee arvon `HMAC-SHA256(machine_id, salt)` ja palauttaa koko 64 merkin
   heksadesimaalisen tiivisteen — deterministisen, peruuttamattoman ja tähän
   koneeseen sidotun tunnisteen.
3. CLI lähettää tunnisteen otsakkeessa `x-omniroute-cli-token` vain, kun ratkaistu
   kohde on eksplisiittinen loopback-URL (`localhost`, `127.0.0.0/8` tai
   loopback-IPv6). Tunnisteen sisältävissä pyynnöissä käytetään asetusta
   `redirect: error`, joten paikallinen uudelleenohjaus ei voi välittää tunnistetta
   toiseen originiin. Etäkontekstit käyttävät sen sijaan rajattuja käyttöoikeustunnisteita.
   Jos tunnisteen johtaminen ei ole mahdollista, CLI jättää otsakkeen pois, ja
   `omniroute doctor` ilmoittaa virheestä sen sijaan, että tyhjää tunnistetta
   pidettäisiin kelvollisena.
4. Palvelin (`src/server/authz/policies/management.ts`) laskee odotetun tunnisteen
   uudelleen samalla suolalla ja vertaa sitä `timingSafeEqual`-toiminnolla
   estääkseen ajoitukseen perustuvan selvittämisen.

## Suojausominaisuudet

| Ominaisuus                          | Kuvaus                                                                                                                                                                                                                                                         |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Vain loopback-yhteydet**          | Hyväksytään vain, kun palvelimen luotettu vertaisosapuolen paikallisuusmerkintä (joka johdetaan todellisesta TCP-vertaisosoitteesta) ilmaisee loopback-yhteyden. Asiakkaan hallitsemaan `Host`-otsakkeeseen ei koskaan luoteta paikallisuuden määrittämisessä. |
| **Vakioaikainen vertailu**          | `crypto.timingSafeEqual` estää ajoitushyökkäykset.                                                                                                                                                                                                             |
| **Peruuttamaton**                   | Konetunnistetta ei voi palauttaa HMAC-tulosteesta.                                                                                                                                                                                                             |
| **Ei `always`-suojauksen ohitusta** | `isAlwaysProtectedPath()` arvioidaan ennen CLI-tunnisteen tarkistusta. `/api/shutdown` ja `/api/settings/database` edellyttävät aina JWT:tä.                                                                                                                   |
| **Ei vietävissä**                   | Tunnistetta ei koskaan kirjoiteta levylle tai lokiin.                                                                                                                                                                                                          |

## Suolan vaihtaminen

Aseta `OMNIROUTE_CLI_SALT`, jos haluat vaihtaa johdetun tunnisteen ilman
koodimuutoksia. Vaihdon jälkeen kaikki tämän koneen CLI-prosessit käyttävät
uutta tunnistetta automaattisesti. Tästä on hyötyä, jos prosessiluettelon
vuoto on saattanut paljastaa aiemman johdetun arvon.

```bash
# Pysyvä vaihto (lisää komentotulkin profiiliin)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Varmista, että uusi tunniste on käytössä
omniroute status
```

Oletussuola: `omniroute-cli-auth-v1`

## Vanha muoto (SHA-256, 32 merkkiä) — hyväksytään edelleen

Ennen edellä kuvattua HMAC-muotoa CLI johti tunnisteensa muodossa
`SHA-256(machineId + salt).hex[0..32]` (32 merkin etuliite) tiedostossa
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` tiedostossa `src/lib/machineToken.ts`).

Taaksepäin yhteensopivuuden vuoksi palvelin hyväksyy **molemmat** muodot: tarkistin muodostaa
arvon `expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` ja vertaa
saapuvaa otsaketta kuhunkin `timingSafeEqual`-toiminnolla
(`src/server/authz/policies/management.ts` ja `src/lib/middleware/cliTokenAuth.ts`).
Tunniste on siis kelvollinen, jos se vastaa **joko** 64 merkin HMAC-tiivistettä tai
32 merkin vanhan SHA-256-muodon etuliitettä.

**Käytöstä poistaminen:** aseta `OMNIROUTE_DISABLE_CLI_TOKEN=true` (ympäristössä tai
`.env`-tiedostossa), jos haluat poistaa CLI-tunnistemekanismin kokonaan käytöstä.
Tällöin kaikki käyttö edellyttää eksplisiittistä API-avainta. Tätä suositellaan
monen käyttäjän isäntäkoneissa, sillä `machine-id` on laitekohtainen (ei
käyttäjäkohtainen), ja toinen saman isäntäkoneen käyttäjä voisi laskea saman tunnisteen.

## Tiedostot

| Tiedosto                                  | Tarkoitus                                     |
| ----------------------------------------- | --------------------------------------------- |
| `src/lib/machineToken.ts`                 | Tunnisteen johtaminen (`getMachineTokenSync`) |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER`-vakio                      |
| `src/server/authz/policies/management.ts` | Palvelinpuolen tarkistus                      |
| `src/server/authz/routeGuard.ts`          | Loopback-isäntätarkistus (`isLoopbackHost`)   |

## Katso myös

- `docs/security/ROUTE_GUARD_TIERS.md` — reittien suojaustasot
- `docs/architecture/AUTHZ_GUIDE.md` — koko valtuutusputki
