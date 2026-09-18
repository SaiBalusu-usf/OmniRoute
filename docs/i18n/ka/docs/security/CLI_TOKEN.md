# CLI Machine-ID Token (ქართული)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## მიმოხილვა

OmniRoute CLI-ის ბრძანებები ლოკალურ მართვის API-სთან ავთენტიფიკაციისთვის იყენებს
`HMAC-SHA256(machine-id, salt)` ტოკენს, რომელიც იგზავნება
`x-omniroute-cli-token` მოთხოვნის სათაურის მეშვეობით.

ეს საშუალებას აძლევს CLI-ის ქვე-ბრძანებებს (`omniroute status`, `omniroute providers` და ა.შ.),
გამოიძახონ მართვის საბოლოო წერტილები ისე, რომ მომხმარებელს ყოველ გამოძახებაზე JWT-ის ან
პაროლის მითითება არ დასჭირდეს.

## მუშაობის პრინციპი

1. `getMachineTokenSync()` კითხულობს აპარატურის მანქანის ID-ს `node-machine-id`-ის
   მეშვეობით (შეცდომის შემთხვევაში იყენებს ცარიელ სტრიქონს, რაც CLI ავთენტიფიკაციას თიშავს).
2. ის გამოთვლის `HMAC-SHA256(machine_id, salt)`-ს და აბრუნებს სრულ, 64-სიმბოლოიან
   თექვსმეტობით დაიჯესტს — დეტერმინისტულ, შეუქცევად ტოკენს, რომელიც ამ მანქანასთანაა დაკავშირებული.
3. CLI ტოკენს `x-omniroute-cli-token`-ის სახით აგზავნის მხოლოდ მაშინ, როდესაც განსაზღვრული
   დანიშნულება აშკარად loopback URL-ია (`localhost`, `127.0.0.0/8` ან
   loopback IPv6). ტოკენის შემცველი მოთხოვნები იყენებს `redirect: error`-ს, ამიტომ ლოკალური
   გადამისამართება მას სხვა წყაროზე ვერ გადააგზავნის. დისტანციური კონტექსტები სანაცვლოდ იყენებს
   მოქმედების არით შეზღუდულ წვდომის ტოკენებს. თუ ტოკენის მიღება შეუძლებელია, CLI გამოტოვებს სათაურს,
   ხოლო `omniroute doctor` შეატყობინებს შეცდომას, ნაცვლად იმისა, რომ ცარიელი ტოკენი
   ვალიდურად მიიჩნიოს.
4. სერვერი (`src/server/authz/policies/management.ts`) იმავე salt-ით ხელახლა გამოთვლის
   მოსალოდნელ ტოკენს და დროით ანალიზზე დაფუძნებული ამოღების თავიდან ასაცილებლად მას
   `timingSafeEqual`-ის მეშვეობით ადარებს.

## უსაფრთხოების თვისებები

| თვისება                                     | დეტალები                                                                                                                                                                                                                           |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **მხოლოდ loopback**                         | მიიღება მხოლოდ მაშინ, როდესაც სერვერის სანდო peer-locality აღნიშვნა (მიღებული რეალური TCP peer მისამართიდან) მიუთითებს loopback-ზე. ლოკალურობის განსაზღვრისას კლიენტის მიერ კონტროლირებადი `Host` სათაური არასდროს ითვლება სანდოდ. |
| **მუდმივი დროის შედარება**                  | `crypto.timingSafeEqual` დროით ანალიზზე დაფუძნებულ შეტევებს უშლის ხელს.                                                                                                                                                            |
| **შეუქცევადი**                              | HMAC-ის შედეგიდან machine-id-ის აღდგენა შეუძლებელია.                                                                                                                                                                               |
| **`always`-ით დაცვის გვერდის ავლის გარეშე** | `isAlwaysProtectedPath()` ფასდება CLI ტოკენის შემოწმებამდე. `/api/shutdown` და `/api/settings/database` ყოველთვის მოითხოვს JWT-ს.                                                                                                  |
| **არაექსპორტირებადი**                       | ტოკენი არასდროს იწერება დისკზე ან ჟურნალში.                                                                                                                                                                                        |

## Salt-ის როტაცია

დააყენეთ `OMNIROUTE_CLI_SALT`, რათა მიღებული ტოკენი კოდის ცვლილების გარეშე შეცვალოთ.
როტაციის შემდეგ ამ მანქანაზე გაშვებული ყველა CLI პროცესი ახალ ტოკენს
ავტომატურად გამოიყენებს. ეს სასარგებლოა პროცესების სიის გაჟონვის შემდეგ, რომელსაც შესაძლოა
წინა მიღებული მნიშვნელობა გამოეაშკარავებინა.

```bash
# მუდმივი როტაცია (დაამატეთ shell-ის პროფილში)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# გადაამოწმეთ, რომ ახალი ტოკენი გამოიყენება
omniroute status
```

ნაგულისხმევი salt: `omniroute-cli-auth-v1`

## მოძველებული ფორმატი (SHA-256, 32-სიმბოლოიანი) — კვლავ მიიღება

ზემოთ აღწერილ HMAC ფორმატამდე CLI თავის ტოკენს იღებდა ფორმულით
`SHA-256(machineId + salt).hex[0..32]` (32-სიმბოლოიანი პრეფიქსი)
`bin/cli/utils/cliToken.mjs`-ში (`getLegacyCliTokenSync` ფაილში `src/lib/machineToken.ts`).

უკუთავსებადობისთვის სერვერი **ორივე** ფორმატს იღებს: ვერიფიკატორი ქმნის
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]`-ს და შემომავალ
სათაურს თითოეულ მათგანს `timingSafeEqual`-ის მეშვეობით ადარებს
(`src/server/authz/policies/management.ts` და `src/lib/middleware/cliTokenAuth.ts`).
ამრიგად, ტოკენი ვალიდურია, თუ ემთხვევა **ან** 64-სიმბოლოიან HMAC დაიჯესტს, **ან** 32-სიმბოლოიან
მოძველებულ SHA-256 პრეფიქსს.

**უარის თქმა:** CLI ტოკენის მექანიზმის სრულად გასათიშად დააყენეთ
`OMNIROUTE_DISABLE_CLI_TOKEN=true` (გარემოში ან `.env`-ში); ამის შემდეგ ყველა წვდომა
ცალსახად მითითებულ API გასაღებს მოითხოვს. მრავალმომხმარებლიან ჰოსტებზე ეს რეკომენდებულია,
რადგან `machine-id` მოწყობილობისთვისაა უნიკალური (და არა მომხმარებლისთვის) და იმავე ჰოსტზე
სხვა მომხმარებელს იგივე ტოკენის გამოთვლა შეუძლია.

## ფაილები

| ფაილი                                     | დანიშნულება                                  |
| ----------------------------------------- | -------------------------------------------- |
| `src/lib/machineToken.ts`                 | ტოკენის მიღება (`getMachineTokenSync`)       |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER` მუდმივა                   |
| `src/server/authz/policies/management.ts` | სერვერის მხარეს ვერიფიკაცია                  |
| `src/server/authz/routeGuard.ts`          | Loopback ჰოსტის შემოწმება (`isLoopbackHost`) |

## აგრეთვე იხილეთ

- `docs/security/ROUTE_GUARD_TIERS.md` — მარშრუტის დაცვის დონეები
- `docs/architecture/AUTHZ_GUIDE.md` — ავტორიზაციის სრული კონვეიერი
