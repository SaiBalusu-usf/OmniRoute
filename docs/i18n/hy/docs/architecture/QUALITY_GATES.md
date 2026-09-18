# Quality Gates Reference (Հայերեն)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

Այս փաստաթուղթը OmniRoute-ի բոլոր CI որակի անցակետերի հեղինակավոր տեղեկատուն է։
Այն նկարագրում է յուրաքանչյուր անցակետը, թե ինչ է այն վավերացնում, որ CI առաջադրանքում է գործարկվում, արդյոք օգտագործում է
աստիճանական ելակետ, թե անցնել/ձախողվել քաղաքականություն, և արդյոք արգելափակում է կառուցումը, թե ունի խորհրդատվական բնույթ։

Համառոտ ամփոփագրի և թույլատրվածների ցանկի քաղաքականության համար տե՛ս "Quality Gates & Ratchets" բաժինը
`AGENTS.md`-ում։ Նույն համակարգի քննադատական գնահատման, հասունության դասակարգման և գործիքներից անկախ
վերարտադրման պլանի համար տե՛ս
[Որակի անցակետերի ուղեցույցը](../ops/QUALITY_GATE_PLAYBOOK.md)։

---

## Անցակետերի գույքացանկ (~90 սկրիպտ)

Սկրիպտերը գտնվում են `scripts/check/`-ում (քաղաքականության անցակետեր) և `scripts/quality/`-ում (աստիճանական սահմանաչափերի շարժիչ)։
CI-ի ճշմարտության աղբյուրը `.github/workflows/ci.yml`-ն է։

### Թողարկման PR-ի արագ ուղի (`quality.yml`)

`.github/workflows/quality.yml`-ը գործարկվում է `release/**`-ին ուղղված PR-ների համար։ Այն նպաստողների
ճյուղերի ընթացքն ապահովում է ուղիներով զտված արագ անցակետերի, ինչպես նաև կոդի
փոփոխությունների համար արտադրական կառուցման մեկ խորհրդատվական ազդանշանի միջոցով․

| Առաջադրանք                                       | Շրջանակ                                                                                                                                                                                                                                      | Արգելափակող                                                                                                    |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `Build (advisory)`                               | Ոչ սևագիր կոդային PR-ներ և Mergify հերթի ճյուղեր՝ Node 24, `npm-ci-retry`, `check:node-runtime`, `npm run build`՝ `OMNIROUTE_USE_TURBOPACK=1`-ով․ արտեֆակտ չի վերբեռնվում, քանի որ հաջորդող որակի առաջադրանքներից ոչ մեկը չի օգտագործում այն | **Խորհրդատվական** (`continue-on-error: true`; հեռացնել թողարկման PR-ների կայուն գործարկումներից մեկ շաբաթ անց) |
| `Docs Gates (fast-path)`                         | Փաստաթղթային/կոդային PR-ներ․ API փաստաթղթերի հղումներ և docs-all                                                                                                                                                                             | Այո                                                                                                            |
| `Fast Quality Gates`                             | Կոդային PR-ներ․ ստատիկ ստուգումներ, տիպերի ստուգում, վահանակի տիպերի ստուգում, փոփոխություններից ազդված մոդուլային թեստեր                                                                                                                    | Այո                                                                                                            |
| `Forgotten sibling tests`                        | Կոդային PR-ներ․ փոփոխված մոդուլների հետագծում մինչև ստատիկ սպառողներն ու հարակից թեստերի թեկնածուները․ barrel և դինամիկ ներմուծման ուղիները հաղորդվում են որպես խորհրդատվական ախտորոշումներ՝ թույլատրվածների ցանկում հղված բացառություններով | **Խորհրդատվական**                                                                                              |
| `Vitest (fast-path)`                             | Կոդային PR-ներ․ արագ vitest հավաքակազմ                                                                                                                                                                                                       | Այո                                                                                                            |
| `Unit Tests fast-path`                           | Կոդային PR-ներ․ 4 հատվածից բաղկացած մոդուլային թեստերի հավաքակազմ                                                                                                                                                                            | Այո                                                                                                            |
| `No new ESLint warnings`                         | Կոդային PR-ներ․ բացառումները հաշվի առնող lint պաշտպանիչ ստուգում                                                                                                                                                                             | Այո՝ սեփական ծագմամբ PR-ների համար, խորհրդատվական՝ fork-երի համար                                              |
| `Merge integrity (changelog + generated skills)` | Ոչ սևագիր PR-ներ․ փոփոխությունների մատյանի և գեներացված հմտությունների համաժամեցում                                                                                                                                                          | Այո՝ սեփական ծագմամբ PR-ների համար, խորհրդատվական՝ fork-երի համար                                              |

#### Մոռացված հարակից թեստերի հաշվետվություն

`npm run check:forgotten-sibling-tests`-ը վերօգտագործում է թեստերի ազդեցության քարտեզի հիմքում ընկած ներմուծումների լուծիչը։
Յուրաքանչյուր փոփոխված արտադրական մոդուլի համար այն ներկայացնում է որոշարկված
`փոփոխված մոդուլ/խորհրդանիշ -> ստատիկ սպառող -> հարակից թեստի թեկնածու` շղթաներ, երբ թեկնածու
թեստը բացակայում է pull request-ի diff-ից։ Markdown ամփոփագիրը և JSON արդյունքը պահպանվում են որպես
`forgotten-sibling-tests` աշխատանքային հոսքի արտեֆակտ՝ նախքան որևէ արգելափակող ներդրում չափաբերման համար։

Barrel վերաարտահանումները և դինամիկ ներմուծումները միայն լուծման ախտորոշումներ են․ դրանք երբեք
արգելափակող բացահայտում չեն ստեղծում։ Վերանայված բացառությունները գտնվում են
`config/quality/forgotten-sibling-allowlist.json`-ում։ Յուրաքանչյուր գրառում պետք է նշի սպառողն ու թեկնածու
թեստը, ներկայացնի կոնկրետ հիմնավորում և հղում պարունակի GitHub issue-ի կամ pull request-ի։ Սխալ կազմված գրառումները հանգեցնում են
անվտանգ ձախողման։ Բացառությունները չեն կարող անտեսել ջնջված թեկնածու թեստը կամ `.skip`/`.todo` ավելացնող diff-ը․
պնդումների թուլացումը և այլ քողարկումները շարունակում են վերահսկվել անկախ արգելափակող
`check:test-masking` անցակետի կողմից։

### Առաջադրանք՝ `lint`

Գործարկվում է `main`-ին ուղղված յուրաքանչյուր PR-ի համար։ Ձախողման դեպքում արգելափակում է միաձուլումը։

| Սկրիպտ (`npm run ...`)            | Ստուգում է                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Արգելափակող է                                 |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `check:node-runtime`              | Node.js-ի տարբերակը աջակցվող միջակայքում է                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Այո                                           |
| `check:cycles`                    | Ցիկլային ներմուծումներ՝ բոլոր `src/` + `open-sse/` մոդուլներում                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Այո                                           |
| `check:route-validation:t06`      | Zod սխեմաների առկայությունը բոլոր երթուղիներում (6-րդ մակարդակի քաղաքականություն)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Այո                                           |
| `check:any-budget:t11`            | `@ts-expect-error // any`-ի քանակը չի գերազանցում սահմանաչափը (11-րդ մակարդակի catraca)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Այո                                           |
| `check:provider-consistency`      | `providers.ts`-ի յուրաքանչյուր մատակարար ունի համապատասխան գրառում `providerRegistry.ts`-ում (և հակառակը՝ թույլատրվածների ցանկի սահմաններում)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Այո                                           |
| `check:model-lifecycle`           | Ձեռքով սպասարկվող երթուղավորման երեք աղյուսակները համահունչ են մնում պահոցում գրանցված կյանքի ցիկլի ակնթարթային պատկերին (#11503). `FITNESS_TABLE`-ը (`taskFitness.ts`) միավոր չի տալիս դուրս բերված որևէ id-ի, որը `REGISTRY`-ն կարող է երթուղավորել. `BUILT_IN_ALIASES`-ի յուրաքանչյուր թիրախ առկա է `REGISTRY`-ում և բացակայում է դուրս բերված id-ների ակնթարթային պատկերից. `REGISTRY`-ում դեռ առկա յուրաքանչյուր դուրս բերված id վերահղվում է կամ նշված է `allowedRetiredInCatalog`-ում. և `DEFAULT_DEGRADATION_MAP`-ի ոչ մի աղբյուր կամ թիրախ այդ ակնթարթային պատկերում դուրս բերված չէ։ Սա չի ապացուցում, որ մոդելը ներկայումս սպասարկվում է գործող վերին հոսքի ծառայության կողմից։ Անցանց է՝ համեմատում է `config/quality/model-lifecycle.json`-ի հետ, որը ձեռքով թարմացվում է `npm run quality:refresh-model-lifecycle`-ի միջոցով (ցանցային է, CI-ին միացված չէ)։ `allowedRetiredInCatalog`-ը աստիճանական կրճատման ճարգելակ է. գրառում ավելացրեք միայն հետևման խնդրի առկայության դեպքում։ | Այո                                           |
| `check:fetch-targets`             | Հաճախորդի կողմի `src/`-ում գտնվող յուրաքանչյուր `fetch("/api/...")` հղվում է իրական `route.ts`-ի                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Այո                                           |
| `check:deps`                      | Պահոցի յուրաքանչյուր `package.json`-ում առկա՝ `npm install`-ով տեղադրվող բոլոր կախվածությունները ներառված են `dependency-allowlist.json`-ում. նոր՝ տարբերակով չամրագրված կամ slopsquatting-ի ենթարկված փաթեթները նշվում են                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Այո                                           |
| `audit:deps`                      | `npm audit` (արմատային + electron) — բարձր/կրիտիկական մակարդակի ոչ մի ծանուցում (հատվում է osv `check:vuln-ratchet`-ի հետ. տե՛ս հիմնավորման հետագա աշխատանքների ցանկը)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Այո                                           |
| `check:lockfile`                  | `package-lock.json`-ի ամբողջականություն — https ռեեստր, ամբողջականության հեշեր, հոսթի վերասահմանումներ չկան                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Այո                                           |
| `check:licenses`                  | Արտադրական կախվածությունների համար թույլատրված SPDX լիցենզիաների ցանկ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Այո                                           |
| `check:tracked-artifacts`         | Չկան կառուցման արտեֆակտներ / commit արված `node_modules` խորհրդանշական հղումներ (աշխատում է նաև husky pre-commit-ում․ pre-push-ը միտումնավոր թեթև է — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Այո                                           |
| `check:vitest-exclusions`         | Vitest-ի յուրաքանչյուր բացառություն նշում է հետևման խնդիր և առկա է `config/quality/vitest-exclusions.json`-ում (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Այո                                           |
| `check:file-size`                 | Ոչ մի սկզբնաղբյուրային ֆայլ չի գերազանցում տվյալ ընդլայնման համար սահմանված առավելագույն չափը (ratchet՝ մեծ, անփոփոխ ֆայլերը `frozen` ցանկում են)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Այո                                           |
| `check:error-helper`              | Կատարիչների/մշակիչների սխալի պատասխաններն օգտագործում են `buildErrorBody()` / `sanitizeErrorMessage()` (Խիստ կանոն #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Այո                                           |
| `check:migration-numbering`       | Միգրացիայի SQL ֆայլերը համարակալված են հաջորդաբար՝ առանց բացթողումների կամ կրկնությունների                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Այո                                           |
| `check:public-creds`              | Բառացի OAuth `client_id`/`client_secret` կամ Firebase Web բանալիներ չկան `publicCreds.ts`-ից դուրս (Խիստ կանոն #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Այո                                           |
| `check:db-rules`                  | `src/lib/db/` մոդուլներից դուրս չմշակված SQL չկա, և `localDb.ts`-ից barrel ներմուծումներ չկան (Խիստ կանոններ #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Այո                                           |
| `check:known-symbols`             | Դիսպետչերական աղյուսակներում գրանցված մատակարարների կատարիչները, երթուղման ռազմավարությունները և թարգմանիչները համապատասխանում են սկավառակի ֆայլերին՝ առանց որբ կամ չհայտարարված սիմվոլների                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Այո                                           |
| `check:route-guard-membership`    | Դուստր գործընթաց գործարկող յուրաքանչյուր երթուղի դասակարգվում է `isLocalOnlyPath()`-ի միջոցով (Խիստ կանոններ #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Այո                                           |
| `check:test-discovery`            | Ռեպոզիտորիայում առկա յուրաքանչյուր `*.test.ts` / `*.spec.ts` ֆայլ հավաքվում է առնվազն մեկ թեստային գործարկիչի կողմից (արգելանիվ․ `test-discovery-baseline.json`-ում որբ ֆայլերի ցանկը կարող է միայն կրճատվել)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Այո                                           |
| `check:agent-skills-sync`         | Գեներացված agent-skills արտեֆակտները համապատասխանում են իրենց սկզբնաղբյուր կատալոգին (շեղում չկա)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `check:provider-asset-provenance` | Մատակարարների լոգոների/ռեսուրսների համար գրանցված է ծագման մասին գրառում                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `lint:json`                       | JSON կազմաձևման ֆայլերը վերլուծվում են և համապատասխանում են ռեպոզիտորիայի lint կանոններին                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `typecheck:core`                  | TypeScript-ի կոմպիլյացիա՝ առանց սխալների (միայն խորհրդատվական նախազգուշացումներ)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Այո                                           |
| `typecheck:noimplicit:core`       | Խիստ `noImplicitAny` — նախատեսված է ապագայի համար․ նախկինում գոյություն ունեցող բազմաթիվ կանչերի կետեր դեռևս անոտացիաների կարիք ունեն                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | **Խորհրդատվական** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `tsc`, որի տիրույթը սահմանափակված է `src/app/(dashboard)/**`-ով (#7033) — `typecheck:core`-ի հատուկ ընտրված 27 ֆայլից բաղկացած թույլատրելի ցանկը չի ներառում վահանակի որևէ TSX ֆայլ, իսկ `next build`-ը նույնպես երբեք չի ստուգում դրանց տիպերը (`next.config.mjs`-ում սահմանված է `ignoreBuildErrors: true`), ուստի այնտեղ առկա չկապված նույնացուցիչների հետընթացները (#6625/#6909) անտեսանելի էին CI-ի համար։ Տարբերությունները համեմատվում են յուրաքանչյուր ֆայլի/TS կոդի քանակների սառեցված ելակետային ցուցանիշների հետ (`config/quality/dashboard-typecheck-baseline.json`, նույն հնացածության վերահսկման ձևանմուշը, ինչ `check:known-symbols`-ի դեպքում) — դարպասի ձախողում են առաջացնում միայն ելակետային քանակը գերազանցող ՆՈՐ սխալները․ երբ նախկինում գոյություն ունեցող սխալն ուղղվում է, շեմը նվազեցրեք `--update`-ով։                                                                                                                                                                  | Այո                                           |

### Առաջադրանք՝ `quality-gate`

Գործարկվում է `test-coverage`-ից հետո։ Ձախողման դեպքում արգելափակում է միաձուլումը։

| Սկրիպտ                       | Ստուգում է                                                                                                                                                                                                                | Արգելափակող                   |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `quality:collect`            | Արտածում է `quality-metrics.json`-ը (ESLint-ի նախազգուշացումների քանակը, ծածկույթը՝ միավորված հատվածային հաշվետվությունից)                                                                                                | Այո (ratchet-ի նախորդող քայլ) |
| `quality:ratchet`            | `quality-baseline.json`-ի յուրաքանչյուր չափանիշ չի վատթարացել (ESLint-ի նախազգուշացումներ ≤ ելակետային ցուցանիշ, ծածկույթ ≥ ելակետային ցուցանիշ)                                                                          | Այո                           |
| `check:duplication`          | Կոդի կրկնօրինակումը (jscpd@4) չի գերազանցում `quality-baseline.json`-ում սահմանված ելակետային ցուցանիշը                                                                                                                   | Այո                           |
| `check:complexity`           | Ֆայլի մակարդակի ցիկլոմատիկ բարդությունը չի գերազանցում սահմանաչափը (հիմնական ESLint-ի `complexity` + `max-lines-per-function`)                                                                                            | Այո                           |
| `check:cognitive-complexity` | Կոգնիտիվ բարդության ratchet (`eslint-plugin-sonarjs`) — ESLint-ի առանձին անցում․ CI-ն երկուսն էլ գործարկում է միավորված՝ որպես մեկ `check:complexity-ratchets` քայլ                                                       | Այո                           |
| `check:dead-code`            | Չօգտագործվող արտահանումների / ֆայլերի ratchet-ը (knip) չի վատթարանում ելակետային ցուցանիշի համեմատ                                                                                                                        | Այո                           |
| `check:compression-budget`   | Սեղմման հենանիշի բյուջե — յուրաքանչյուր շարժիչի համար թոքենների խնայողության նվազագույն շեմերը չպետք է վատթարանան                                                                                                         | Այո                           |
| `check:type-coverage`        | Տիպավորվածության տոկոսի ratchet-ը (`type-coverage`) չի վատթարանում․ հիմնականում ներառում է `typecheck:noimplicit:core`-ի գործառույթները                                                                                   | Այո                           |
| `check:codeql-ratchet`       | Բաց CodeQL զգուշացումների քանակը չի վատթարանում (ընթերցում է `gh api`-ի միջոցով․ թոքենի բացակայության դեպքում բարեհաջող բաց է թողնում) — թարմացման հաճախականության և ձեռքով գործարկման մասին տե՛ս ստորև՝ «CodeQL ratchet» | Այո                           |

### Առաջադրանք՝ `quality-extended`

Ամբողջ առաջադրանքը խորհրդատվական է (`continue-on-error: true`)։ npm-ի վրա հիմնված սահմանաչափերի ստուգումներն իրականում գործարկվում են,
իսկ արտաքին սկանավորիչները տեղադրվում են `gh release download`-ի միջոցով և ինքնուրույն բաց են թողնում ստուգումը (ելքի կոդ՝ 0),
եթե երկուական ֆայլը դեռևս բացակայում է։

| Սկրիպտ                   | Ստուգում է                                                                                                                                                                                                                         | Արգելափակող       |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `check:circular-deps`    | Շրջանաձև կախվածությունների բացակայությունը (dpdm)                                                                                                                                                                                  | **Խորհրդատվական** |
| `check:bundle-size`      | Փաթեթի չափը չի գերազանցում սահմանաչափը                                                                                                                                                                                             | **Խորհրդատվական** |
| `check:secrets`          | Գաղտնիքների սկանավորում (gitleaks) — բաց է թողնվում, եթե երկուական ֆայլը բացակայում է                                                                                                                                              | **Խորհրդատվական** |
| `check:vuln-ratchet`     | Կախվածությունների խոցելիությունները (osv-scanner) չեն վատթարանում — բաց է թողնվում, եթե երկուական ֆայլը բացակայում է                                                                                                               | **Խորհրդատվական** |
| `check:workflows`        | Աշխատանքային հոսքերի ստատիկ ստուգում (actionlint + zizmor) — բաց է թողնվում, եթե երկուական ֆայլերը բացակայում են                                                                                                                   | **Խորհրդատվական** |
| `check:openapi-breaking` | Հանրային API պայմանագրի (`openapi.yaml`) անհամատեղելի փոփոխությունները՝ բազային ճյուղի համեմատ (oasdiff) — արտածում է `openapiBreaking=N`; բաց է թողնվում, եթե oasdiff-ը բացակայում է կամ բազային սպեցիֆիկացիան հնարավոր չէ որոշել | **Խորհրդատվական** |

### Առաջադրանք՝ `docs-sync-strict`

Գործարկվում է դեպի `main` ուղղված յուրաքանչյուր PR-ի համար։ Ձախողման դեպքում արգելափակում է միաձուլումը։

| Սկրիպտ                           | Ստուգում է                                                                                                                                                                                                                  | Արգելափակող                       |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `check:docs-all`                 | Մետա-անցակետ, որը ստորև նշված 6 ենթաանցակետերը գործարկում է հաջորդաբար                                                                                                                                                      | Այո                               |
| ↳ `check:docs-sync`              | CHANGELOG / OpenAPI / llm.txt տարբերակների համապատասխանությունը                                                                                                                                                             | Այո                               |
| ↳ `check:docs-counts`            | Տեքստում նշված թվերը (մատակարարների քանակը, միգրացիաների քանակը և այլն) գտնվում են իրական թվերի համար սահմանված թույլատրելի միջակայքում                                                                                     | Այո                               |
| ↳ `check:env-doc-sync`           | `.env.example`-ի յուրաքանչյուր միջավայրի փոփոխական փաստաթղթավորված է փաստաթղթերի աղյուսակում, և հակառակը                                                                                                                    | Այո                               |
| ↳ `check:deprecated-versions`    | Փաստաթղթերում հնացած տարբերակների տողերի բացակայությունը                                                                                                                                                                    | Այո                               |
| ↳ `check:doc-links`              | Փաստաթղթերի ներքին markdown հղումները մատնանշում են իրական ֆայլեր (`[text]`/`(path)` ձևաչափով)                                                                                                                              | Այո                               |
| ↳ `check:fabricated-docs`        | Փաստաթղթերում նշված երթուղիները, միջավայրի փոփոխականները, CLI հրամանները, hook-երի անունները և ֆայլերի ուղիները գոյություն ունեն կոդային բազայում։ Խիստ անցակետ՝ `--strict`-ի միջոցով, իսկ առանց դրոշակի՝ ոչ խիստ ձախողում։ | Այո (CI-ում `--strict`-ի միջոցով) |
| `check:cli-i18n`                 | CLI հրամանների տողերն առկա են բոլոր i18n տեղայնացման ֆայլերում                                                                                                                                                              | Այո                               |
| `check:openapi-coverage`         | OpenAPI սպեցիֆիկացիան ընդգրկում է իրական երթուղիների համար սահմանված նվազագույն շեմը                                                                                                                                        | Այո                               |
| `check:openapi-security-tiers`   | `openapi.yaml`-ում անվտանգության մակարդակների նշումները համապատասխանում են `routeGuard.ts`-ի դասակարգումներին                                                                                                               | **Խորհրդատվական**                 |
| `check:openapi-routes`           | `openapi.yaml`-ի յուրաքանչյուր ուղի համապատասխանում է իրական `route.ts`-ի (հալյուցինացիաների կանխարգելում)                                                                                                                  | Այո                               |
| `check:docs-symbols`             | `docs/**/*.md`-ում յուրաքանչյուր `/api/...` հղում համապատասխանում է իրական `route.ts`-ի (հալյուցինացիաների կանխարգելում)                                                                                                    | Այո                               |
| `i18n թարգմանությունների շեղում` | i18n տեղայնացման ֆայլերի չթարգմանված բանալիները՝ միայն նախազգուշացում                                                                                                                                                       | **Խորհրդատվական**                 |

### Առաջադրանք՝ `i18n-ui-coverage`

| Սկրիպտ                                  | Ստուգում է                                                                                                                                                                                                                             | Արգելափակող       |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `check-ui-keys-coverage` (ներկառուցված) | UI-ի i18n բանալիների ծածկույթը ≥ 65% է                                                                                                                                                                                                 | Այո               |
| `check-ui-value-drift` (ներկառուցված)   | Վերագրված անգլերեն **արժեքը** չի թողնում հնացած թարգմանություն                                                                                                                                                                         | Այո               |
| `check-new-key-coverage` (ներկառուցված) | **Նոր** անգլերեն բանալին հասնում է բոլոր լոկալներին                                                                                                                                                                                    | Այո               |
| `check-translation-ratio`               | Իրական թարգմանությունների հարաբերակցությունը՝ ըստ լոկալի (անգլերենին նույնական / տեղապահ / բացակայող տերևներ՝ թույլատրվածների ցանկից դուրս), չպետք է գերազանցի `config/quality/i18n-translation-baseline.json`-ը + թույլատրելի շեղումը | **Խորհրդատվական** |

Պահանջում է `fetch-depth: 0`․ արժեքների շեղման արգելակիչը համեմատում է `en.json`-ը միաձուլման բազայի հետ։

#### `check-ui-value-drift` — հնացած թարգմանությունների արգելակիչ

Հայտնաբերում է i18n-ի այն միակ ռեգրեսիան, որը մյուս արգելակիչները կառուցվածքային առումով չեն կարող տեսնել․ անգլերեն արժեքը
վերագրվում է, իսկ _նախորդ_ անգլերենից ստացված թարգմանությունները մնում են անփոփոխ, ուստի
ոչ անգլախոս օգտատերերը շարունակում են կարդալ վստահ ձևակերպված, բայց արդեն սխալ տեքստ։

Սա իրականում թողարկվել է։ `oauthModal.googleOAuthWarning`-ը վերագրվել էր, երբ ավելացվեց Antigravity-ի
մուտքի օգնականը (#5203), սակայն **43 լոկալներից 39-ը** պահպանել էին տեքստը, որը օպերատորներին ասում էր՝ «պատճենել
ամբողջական URL-ը և տեղադրել այն ստորև»․ այդ մատակարարի դեպքում այս հոսքը չի կարող ավարտվել։ Սա
աննկատ մնաց մինչև #8463-ը, քանի որ՝

- `sync-ui-keys`-ը լրացնում է միայն **բացակայող** բանալիները, ոչ երբեք **հնացածները**,
- `check-ui-keys-coverage`-ը հաշվում է բանալու _առկայությունը_, ուստի հնացած թարգմանությունը համարվում է ծածկված,
- `check-translation-drift`-ը հետևում է `docs/i18n/<locale>/**.md` փաստաթղթերի հայելային պատճեններին՝
  այն երբեք չի կարդում `src/i18n/messages/*.json`։ 2026-09-ի կրկնակի համաժամեցումից ի վեր արգելափակում է `docs-sync-strict` առաջադրանքում․ խմբագրեք հիմնական փաստաթուղթը → `npm run i18n:run -- --files=<doc>` (բաժնի մակարդակով, քիչ ծախսատար)։

**Հաշվի է առնում տարբերությունը, ոչ թե հիմնային ցուցանիշը։** Այն համեմատում է միաձուլման բազայի `en.json`-ը
աշխատանքային ծառի հետ։ Յուրաքանչյուր բանալու համար, որի անգլերեն արժեքը փոխվել է, ցանկացած լոկալ, որը դեռ պահպանում է
անփոփոխ թարգմանությունը, համարվում է հնացած։ Սա միտումնավոր **սառեցնում է նախկինում եղած պարտքը**․ տարբերությունը
չի կարող ցույց տալ, թե վաղեմի թարգմանությունը որ հին անգլերեն տարբերակից է ստացվել, ուստի արգելակիչը գնահատում է
միայն ընթացիկ փոփոխության դիպած մասերը։ Այլընտրանքը՝ յուրաքանչյուր բանալու համար հեշերի հիմնային ցուցանիշը, կպահանջեր
մոտ 600 ԿԲ ծավալով գեներացված ֆայլ՝ 3× ավելի մեծ, քան գոյություն ունեցող ամենամեծ հիմնային ցուցանիշը, և կփոփոխվեր յուրաքանչյուր i18n PR-ի ժամանակ։

Այն բավարարելու երկու եղանակ կա․

1. թարմացնել համապատասխան թարգմանությունները, կամ
2. դրանք սահմանել որպես `__MISSING__:<new english>`․ այդ դեպքում գործարկման միջավայրը մատուցում է ուղղված անգլերենը
   (`src/i18n/request.ts::deepMergeFallback`, #7258), իսկ բանալին ավելացվում է թարգմանության հերթին։

Եթե փոխվել է տողի **իմաստը**, նախընտրելի է **վերանվանել բանալին**․ նոր բանալին չի կարող ժառանգել
հնացած թարգմանություն։ Հենց այս մոտեցումն է կիրառվել #8463-ում։

```bash
npm run i18n:check-value-drift          # խիստ ռեժիմ (այն, ինչ գործարկում է CI-ը)
npm run i18n:check-value-drift:warn     # միայն հաշվետվություն
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

Ավարտվում է 0 կոդով և `SKIP reason=base-unresolved` հաղորդագրությամբ, երբ բազային կատալոգը հնարավոր չէ կարդալ (մակերեսային
կլոն՝ առանց բազային հղման)՝ կրկնելով `check-openapi-breaking`-ի վարքագիծը։

### Առաջադրանք՝ `i18n`

i18n-ի ամբողջական վավերացման մատրիցա (մեկ առաջադրանք՝ յուրաքանչյուր լոկալի համար)։ Ամբողջ առաջադրանքը խորհրդատվական է։

| Սկրիպտ                          | Ստուգում է                                   | Արգելափակող                                                             |
| ------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------- |
| `validate_translation.py quick` | Թարգմանության ամբողջականությունը՝ ըստ լոկալի | **Խորհրդատվական** (`continue-on-error: true`՝ ամբողջ առաջադրանքի համար) |

### Առաջադրանք՝ `pr-test-policy`

Գործարկվում է միայն pull request-ների համար։

| Սկրիպտ                 | Ստուգում է                                                                                                                                                  | Արգելափակող |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `check:pr-test-policy` | PR-ները, որոնք փոխում են արտադրական կոդը `src/`, `open-sse/`, `electron/` կամ `bin/` պանակներում, պետք է ներառեն կամ թարմացնեն թեստեր (Խիստ կանոն #8)       | Այո         |
| `check:test-masking`   | Փոփոխված թեստային ֆայլերը չեն նվազեցնում assert-ների զուտ քանակը և չեն ավելացնում `assert.ok(true)` տավտոլոգիաներ                                           | Այո         |
| `check:pr-evidence`    | PR-ի նկարագրությունը նշում է փոփոխության թեստային/VPS ապացույցները (մեքենայացնում է Խիստ կանոն #18-ը՝ PR-ի տեքստը grep-ով որոնելով․ փխրուն է, տե՛ս Backlog) | Այո         |

### Առաջադրանք՝ `test-vitest`

Գործարկվում է `build`-ից հետո։ Ձախողման դեպքում արգելափակում է միաձուլումը։

| Փաթեթ            | Ստուգում է                                                              | Արգելափակող                                                                                                                                     |
| ---------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP սերվերը (110 գործիք), autoCombo-ն, քեշը — vitest թեստային գործարկիչ | Այո                                                                                                                                             |
| `test:vitest:ui` | UI բաղադրիչների թեստերը — vitest թեստային գործարկիչ                     | **Արգելափակող** — նախկինում առկա ձախողումները բացահայտորեն բացառված են `vitest.config.ts`-ում․ նոր ձախողումների դեպքում առաջադրանքը ձախողվում է |

### Գիշերային աշխատանքային հոսքեր (պլանավորված, խորհրդատվական)

Սրանք գործարկվում են cron ժամանակացույցով (և `workflow_dispatch`-ով), բայց երբեք՝ PR-ների դեպքում։ Բոլորը խորհրդատվական են։

| Աշխատանքային հոսք      | Ստուգում է                                                                                                                                                                                | Արգելափակող       |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `nightly-property`     | fast-check հատկությունների թեստերը՝ պատահական սկզբնական արժեքով և գործարկումների մեծ քանակով                                                                                              | **Խորհրդատվական** |
| `nightly-resilience`   | կույտի աճի սահմանային ստուգումը, քաոսային խափանումների ներարկումը, k6 ծանրաբեռնվածության/երկարատև աշխատանքի թեստերը                                                                       | **Խորհրդատվական** |
| `nightly-llm-security` | promptfoo ներարկումների պաշտպանությունը (արգելափակման ռեժիմ) + garak զոնդերը (մատակարարի գաղտնիքի բացակայության դեպքում բաց են թողնվում)                                                  | **Խորհրդատվական** |
| `nightly-schemathesis` | OpenAPI պայմանագրի ֆազինգը (schemathesis)՝ կենդանի OmniRoute-ի նկատմամբ՝ օգտագործելով `docs/openapi.yaml` — բացահայտում է սպեցիֆիկացիայի խախտումները / չմշակված 500 սխալները (Փուլ 8 B.4) | **Խորհրդատվական** |
| `nightly-mutation`     | Stryker մուտացիոն թեստավորման գնահատականը արագ միավորային ուղու համար — գոյատևած մուտանտները բացահայտում են թույլ ստուգումները                                                            | **Խորհրդատվական** |
| `nightly-compat`       | Node շարժիչի համատեղելիության մատրիցը՝ աջակցվող `engines.node` միջակայքերում                                                                                                              | **Խորհրդատվական** |

---

## Արագության փուլ (2026-08-30 → v4.0 LTS). բոլոր ելակետերը թուլացվել են 20%-ով

Սեփականատիրոջ որոշումը (2026-08-30). մինչև v4.0-ի մոդուլայնացումը թողարկման արագությունն ավելի կարևոր է,
քան տեխնիկական պարտքի սահմանը պահպանելը։ Բոլոր **թվային** աստիճանական սահմանափակումների ելակետերը մեկ
աուդիտի ենթակա գործողությամբ թուլացվել են 20%-ով, իսկ փուլը հայտարարված է `config/quality/quality-baseline.json`-ում.

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| Ինչ է փոխվել                                                                                                                                                                                                                                                    | Որտեղ                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `metrics.*.value` — այն հաշվիչները, որոնց դեպքում ցածրն ավելի լավ է՝ ×1.2, այն տոկոսները, որոնց դեպքում բարձրն ավելի լավ է՝ ÷1.2 (ծածկույթի նվազագույն շեմը պահպանվել է 60, `eslintErrors`-ը մնում է 0, `eslintWarnings`՝ 0 → սառեցված ճնշումների քանակի 20%-ը) | `quality-baseline.json` (`_relax_velocity_2026_08_30` նշումը թվարկում է յուրաքանչյուր նախքան → հետո արժեքը) |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                                                                                | `complexity-baseline.json`, `duplication-baseline.json`                                                     |
| `cap`, `testCap`, յուրաքանչյուր `frozen[*]` / `testFrozen[*]` տողի սահմանաչափ՝ ×1.2                                                                                                                                                                             | `file-size-baseline.json`                                                                                   |
| ըստ ֆայլի / ըստ TS կոդի հաշվիչները՝ ×1.2                                                                                                                                                                                                                        | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json`      |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                                                             | `scripts/check/check-openapi-coverage.mjs`                                                                  |
| `--require-tighten`-ը դառնում է խորհրդատվական, քանի դեռ `_policy.requireTighten === false`                                                                                                                                                                      | `scripts/quality/check-quality-ratchet.mjs`                                                                 |
| գիշերային `bank-ratchet-shrinks`-ը դադարեցվում է (այն կգրանցեր չափված կրճատումը և կչեղարկեր պահուստը)                                                                                                                                                           | `.github/workflows/nightly-release-green.yml`                                                               |

Թույլատրելի արժեքների ցանկերը (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) **բյուջեներ չեն** և չեն փոփոխվել։ Անցման/ձախողման քաղաքականության դարպասները (գաղտնիքներ, SQL կանոններ,
փաստաթղթերի/միջավայրի պայմանագիր, i18n համարժեքություն, միավորային թեստեր) անփոփոխ են. կարմիր թեստը շարունակում է կարմիր մնալ։

**Գործիքակազմ**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — մեկանգամյա
  թուլացում (`scripts/quality/relax-baselines.mjs`). հրաժարվում է երկրորդ անգամ գործարկվել նույն
  նշումով։
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  չափում է յուրաքանչյուր թվային դարպասը նույն կերպ, ինչպես CI-ն, և արտածում է յուրաքանչյուր դարպասի մնացած պահուստը
  (`scripts/quality/baseline-headroom.mjs`)։ Գիշերային `baseline-headroom` առաջադրանքը աղյուսակը հրապարակում է
  գործող **📈 Ելակետային պահուստ (արագության փուլ)** խնդրում և ավելացնում է
  `headroom-alert` պիտակը, երբ որևէ դարպաս իր սահմանաչափից առավելագույնը 10% հեռավորության վրա է կամ արդեն գերազանցել է այն։ Այդ խնդիրը
  վաղ նախազգուշացումն է. օրերի ընթացքում լցվող բյուջեն նշանակում է, որ թուլացումը սպառվում է մի քանի
  PR-ների, ոչ թե ամբողջ թիմի կողմից. դիտեք խնդրահարույց դարպասի `_rebaseline_*` նշումները։

**Նոր կոդի ռեժիմ (Clean-as-You-Code) — 2026-08-30-ից, միայն PR-ի արագ ուղու համար**

`pull_request` իրադարձությունների դեպքում `quality.yml`-ը `--base-ref <PR base SHA>` է փոխանցում `check:file-size`,
`check:complexity-ratchets` և `check:dead-code` հրամաններին։ Այդ ռեժիմում դարպասը HEAD-ը համեմատում է
միաձուլման հիմքի հետ՝ **սահմանափակվելով PR-ի փոփոխած ֆայլերով** (`scripts/check/newCodeMode.mjs`.
միաձուլման հիմքը նյութականացվում է ժամանակավոր `git worktree`-ում, ESLint/knip-ը գործարկվում են այնտեղ և HEAD-ի վրա, ապա
ըստ ֆայլերի հաշվիչների տարբերությունները հաշվարկվում են).

- **արգելափակող** — PR-ն իր փոփոխած ֆայլերում ավելացրել է ցիկլոմատիկ/ճանաչողական բարդության խախտումներ կամ չօգտագործվող արտահանումներ
  (`complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=` մատյանում).
- **խորհրդատվական** — գլոբալ հանրագումարը՝ սառեցված ելակետի համեմատ։ Ժառանգված շեղումը երբեք կարմիր չի դարձնում
  անմեղ PR-ը. շեղումը վերասառեցվում է թողարկման համաձայնեցման ժամանակ և վերահսկվում պահուստի առաջադրանքով։

`workflow_dispatch` գործարկումները, release-green ստուգումն ու գիշերային պահուստի առաջադրանքը PR-ի հիմք չունեն
և պահպանում են բացարձակ (գլոբալ) համեմատությունը։ Ծածկույթը, կրկնօրինակումը և տեսակների ծածկույթն առայժմ մնում են գլոբալ
(դրանց գործիքները չեն կարող ցածր ծախսով կազմել ըստ ֆայլերի տարբերություն). դրանք նույն մոտեցման թեկնածուներ են։

**Փուլի ավարտը v4.0-ում (LTS = նախկինից ավելի խիստ, ոչ թե «վերադարձ սովորականին»)**

1. Մաքուր `release/v4.0.0` ճյուղի վերջին commit-ի վրա՝ արձանագրության համար գործարկել `npm run quality:headroom --json`, ապա՝
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update`, ինչպես նաև յուրաքանչյուր typecheck gate-ի
   `--update` տարբերակը. յուրաքանչյուր baseline իջեցվում է մինչև չափված արժեքը։
2. Հեռացնել `_policy`-ն `quality-baseline.json`-ից (կրկին ակտիվացնում է `--require-tighten`-ը և գիշերային
   banking-ը), վերականգնել `THRESHOLD = 36`-ը (կամ ավելի բարձր արժեք) `check-openapi-coverage.mjs`-ում։
3. Չափված արժեքից էլ ավելի խստացնել այնտեղ, որտեղ մոդուլայնացումն արդյունք է տվել. file-size-ի `cap`-ը վերադարձնել 1000-ի
   (կամ 800-ի), coverage-ի նվազագույն շեմերը բարձրացնել +5-ով, իսկ մոդուլայնացված package-ների dead export-ների քանակը սահմանել 0։

## Ratchet-ի ելակետային մակարդակ (`quality-baseline.json`)

Ratchet շարժիչը (`scripts/quality/check-quality-ratchet.mjs`) կարդում է `quality-baseline.json`-ը
և համեմատում այն նոր հավաքված `quality-metrics.json`-ի հետ։ Ցանկացած չափիչի՝ իր epsilon-ից
ավելի վատթարացումը ձախողում է build-ը։

Ներկայումս հետևվող չափիչները՝

| Չափիչ                 | Ուղղություն | Նշանակություն                                  |
| --------------------- | ----------- | ---------------------------------------------- |
| `eslintWarnings`      | `down`      | ESLint-ի նախազգուշացումների քանակը չպետք է աճի |
| `coverage.statements` | `up`        | Հրահանգների ծածկույթը չպետք է նվազի            |
| `coverage.lines`      | `up`        | Տողերի ծածկույթը չպետք է նվազի                 |
| `coverage.functions`  | `up`        | Ֆունկցիաների ծածկույթը չպետք է նվազի           |
| `coverage.branches`   | `up`        | Ճյուղերի ծածկույթը չպետք է նվազի               |

Իրական բարելավումից հետո ելակետային մակարդակը թարմացնելու համար՝

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

`--update` դրոշը ներկայումս չափված արժեքները գրում է `quality-baseline.json`-ում։
Commit արեք այս ֆայլը չափիչը բարելաված փոփոխության հետ միասին։ Չափիչը բարելավող,
սակայն ելակետային մակարդակը չթարմացնող PR-ը կբացահայտվի `--require-tighten`-ի միջոցով (փուլ 6A.5,
իրականացումը սպասվում է)։

### CodeQL ratchet. թարմացման հաճախականությունը և ձեռքով գործարկումը

`check:codeql-ratchet`-ը կարդում է **պահոցի վիճակը, որը թարմացվում է ժամանակացույցով, այլ ոչ թե յուրաքանչյուր PR-ի համար։**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup`-ը հաղորդում է
`state: configured`, `schedule: weekly`՝ GitHub-ի լռելյայն կարգավորմամբ սկանավորում, այլ ոչ թե յուրաքանչյուր push-ի
վերլուծություն։ Հետևանքը՝ ահազանգերը ՇՏԿՈՂ PR-ի միաձուլումից հետո ratchet-ը շարունակում է կարդալ
հին՝ ավելի մեծ քանակը, մինչև հաջորդ ժամանակացուցային սկանավորումը գործարկվի, ուստի այն հետընթաց է արձանագրում
յուրաքանչյուր բաց PR-ի համար՝ ներառյալ շտկող PR-ի հետագա փոփոխությունները, մինչև սկանավորումը հասնի դրանց։

**Ձեռքով թարմացում**. `gh workflow run codeql.yml --ref release/vX.Y.Z`-ը կրկին գործարկում է
վերլուծությունը և րոպեների ընթացքում վերահրապարակում ահազանգերը։ Նախ կարդացեք `.github/workflows/codeql.yml`-ը.
դրա վերնագիրը բացատրում է, որ այն միայն `workflow_dispatch`-ով է գործարկվում, **քանի որ հակասում է
GitHub-ի «լռելյայն կարգավորմանը»** (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`)։ `push`/`pull_request`/
`schedule` գործարկիչների վերականգնումը նախ պահանջում է **սեփականատիրոջ գործողություն**՝ Settings → Code security →
CodeQL: Default → Advanced։ Առանց այդ փոխարկման մի ավելացրեք `schedule:` գործարկիչ՝ այն
միայն ձախողված գործարկումներ կառաջացնի։

**Քանակի նվազումից հետո խստացրեք ելակետային մակարդակը** — `node scripts/check/check-codeql-ratchet.mjs
--update`-ը նոր չափված քանակը գրում է `quality-baseline.json` →
`metrics.codeqlAlerts.value`-ում, որպեսզի ratchet-ը լռելյայն չթույլատրի հետընթաց դեպի
հին վերին շեմը։ Իրական օրինակ (2026-09-02/03). PR #12502-ը շտկեց 7 իրական ահազանգ
(չափված բաց ահազանգերը՝ 13 → 6), PR #12530-ը սառեցված ելակետային մակարդակը խստացրեց 11 → 6՝ համապատասխանեցնելու համար, իսկ
մնացած 6-ը հետագայում մերժվեցին՝ յուրաքանչյուր ահազանգի համար հիմնավորում ներկայացնելով, մինչև բաց ահազանգերի քանակը դարձավ 0։

**Մերժումները օպերատորի որոշումն են (Կոշտ կանոն #14)** — երբեք մի մերժեք CodeQL ահազանգը
առանց մերժման մեկնաբանությունում տեխնիկական հիմնավորումը գրանցելու. `won't fix`՝
վերին մակարդակի արձանագրության պահանջի համար, `used in tests`՝ թեստային ֆիքստուրայի համար, `false positive`՝
այն sanitizer-ի համար, որը CodeQL-ը չի կարող տեսնել (նախադեպ՝ `docs/security/ERROR_SANITIZATION.md`)։

---

## Թեստերի կրկնափորձի քաղաքականություն (WS5.4, v3.8.49)

Կրկնափորձը սահմանվում է յուրաքանչյուր գործարկիչի համար առանձին, երբեք՝ որպես համընդհանուր կանոն. համընդհանուր կրկնափորձը իրական ռեգրեսիաները վերածում է անտեսանելի անկայուն խափանումների.

| Գործարկիչ        | Քաղաքականություն                                                                                                                    | Պատճառ                                                                                                                              |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | `retries: 1`՝ միայն CI-ում, `trace: on-first-retry`-ով                                                                              | Բրաուզերի/ցանցի ժամանակային վարքն իսկապես ոչ որոշակի է. հետագծմամբ մեկ կրկնափորձը անկայուն խափանումը դարձնում է ախտորոշելի արտեֆակտ |
| Vitest           | Համընդհանուր կրկնափորձ ՉԿԱ։ Ապացուցված անկայուն թեստը ստանում է հստակ, թեստին հատուկ կրկնափորձ (տեսանելի diff-ում, ստուգված PR-ում) | Կարանտինային ցանկը պահում է ռեպոզիտորիում՝ երբեք չդարձնելով այն ոչ թափանցիկ                                                         |
| node:test (unit) | Կրկնափորձ ՉԿԱ՝ երբեք                                                                                                                | Անկայուն միավորային թեստը սխալ է թեստում. շտկեք այն, այլ ոչ թե պարզապես նորից գործարկեք                                             |

Թիրախային SLO-ները՝ անկայունության հեռաչափության ներդրումից հետո (WS5.2/5.3). յուրաքանչյուր թեստի համար անկայունության մակարդակը՝ <1%
(«շտկել հիմա» շեմ), յուրաքանչյուր խողովակաշարի համար անցման մակարդակը՝ ≥95%։ Ոլորտի հղումային արժեքներ են.
վերաչափարկեք դրանք՝ ըստ մեր սեփական չափումների։

## Թողարկման մակարդակի սահմանափակիչի շեղում (WS5.5, v3.8.49)

Երբ սահմանափակիչը (ֆայլի չափ, բարդություն, eslint-ի զգուշացումներ) հետընթաց է գրանցում ՄԱՔՈՒՐ թողարկման
վերջնակետում, այսինքն՝ հետընթացն առաջացել է միաձուլումների ՀԱՄԱԿՑՈՒԹՅՈՒՆԻՑ, և ոչ մի առանձին PR այն չի վերարտադրում
իր սեփական ճյուղում, շտկումը պատկանում է **թողարկման պատասխանատուին՝ մեկ անգամ, թողարկման
ճյուղում**. նախընտրեք առանձնացումը/վերակառուցումը, իսկ ելակետը փոխեք միայն փաստաթղթավորված
հիմնավորման գրառմամբ։ Երբեք համակցությունից առաջացած շեղումը մի վերագրեք մասնակցի PR-ին և երբեք
մի փոխեք ելակետը յուրաքանչյուր PR-ի համար (դա թաքցնում է իրական ռեգրեսիաները)։ Նախ տարբերակեք պատճառը.
կարմիր կարգավիճակը վերարտադրեք մաքուր վերջնակետի նկատմամբ՝ փորձնական worktree-ում, նախքան ենթադրելը, որ այն առաջացրել է ձեր PR-ը։

## Սահմանափակիչների նվազեցումների ամրագրում՝ նվազման ուղղությունը (#8584)

Սահմանափակիչն ավտոմատ է միայն կիսով չափ, ընդ որում՝ սխալ կեսով։ Սահմանաչափի **բարձրացումը**
ձեռքով JSON-ի խմբագրում է, որը տևում է տասը վայրկյան և կարմիր PR-ն ապաշրջափակելու ամենաարագ եղանակն է։
Այն **նվազեցնելու** համար որևէ մեկը պետք է գործարկի `--update` և commit անի արդյունքը, իսկ մինչև
`bank-ratchet-shrinks` առաջադրանքի ներդրումը դա չէր անում ոչ մի workflow։ Չափված հետևանքը
(2026-07-25). 18 սառեցված ֆայլ արդեն գտնվում էր նոր ֆայլերի 800 տող սահմանաչափի մակարդակին կամ դրանից ներքև, իսկ վատագույնը՝
132× (`src/shared/validation/schemas.ts`, 19 տող՝ 2,523 սահմանաչափով), բարդության վերին շեմը
մոտավորապես 37 ելակետի փոփոխման նշումների ընթացքում բարձրացել էր `1794 → 2169`՝ ունենալով ճիշտ մեկ
նվազում (−1), իսկ «հաջորդ շրջափուլում խստացնել `--update`-ի միջոցով» գրառվել էր 31 անգամ և կատարվել՝
մեկ անգամ։ Սահմանաչափը, որը շարունակում է գոյություն ունենալ իրեն առաջացրած կոդից ավելի երկար, յուրաքանչյուր ավարտված
տրոհում աննկատ վերածում է աճի թույլտվության՝ ֆայլը հաջորդը խմբագրող անձի համար։

`nightly-release-green.yml` → **`bank-ratchet-shrinks`** առաջադրանքը փակում է այդ շրջափուլը.

|               |                                                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Գործարկվում է | `schedule` (օրական 3×) + `workflow_dispatch` — միտումնավոր **ոչ** `push`-ով                                              |
| Չափում է      | ամենաբարձր `release/vX.Y.Z`-ը՝ նույն լուծման և ներմուծումից պաշտպանության մեխանիզմով, ինչ `release-green`-ը              |
| Գրում է       | `check:file-size --update` և `check:complexity-ratchets --update` (երկուսն էլ կառուցվածքով միայն նվազեցնող են)           |
| Ստուգում է    | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                                 |
| Առաքում է     | թողարկման ճյուղի նկատմամբ միշտ արդիական մեկ PR՝ հարկադրաբար թարմացվող, երբեք ավելորդ հաղորդագրություններով չծանրաբեռնված |

Ամրագրումը կատարվում է խմբաքանակով, ոչ թե յուրաքանչյուր push-ի դեպքում, քանի որ այն չունի ուշացման պահանջ
(8 ժամվա ընթացքում ամրագրված նվազեցումը լիովին ընդունելի է), մինչդեռ յուրաքանչյուր միաձուլման գործարկումը բազմիցս կվերակառուցեր
PR-ի ճյուղը միաձուլման արշավների ընթացքում և ամեն անգամ կվճարեր ESLint-ի ամբողջական անցման արժեքը։ Հայտնաբերումը
շարունակում է կատարվել push-ի ժամանակ (`release-green`), իսկ խմբաքանակով կատարվում է միայն ամրագրումը։

### Անվտանգության ստուգիչը

Առաջադրանքն առանց վերահսկման գրում է ելակետերում, ուստի հենց `verify-ratchet-bank.mjs`-ն է դա
ընդունելի դարձնում։ Այն համեմատում է `--update`-ից հետո ստացված ծառը `HEAD`-ի հետ և **ընդհատում է առաջադրանքը
նախքան որևէ commit-ի ստեղծումը**՝ առանց PR բացելու, եթե բոլոր փոփոխությունները հետևյալներից որևէ մեկը չեն.

- `frozen` / `testFrozen` թվային գրառում, որը **նվազեցվել** կամ **հեռացվել** է
- `complexity-baseline.json` → `count`՝ **նվազեցված**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value`՝ **նվազեցված**

Ցանկացած այլ բան հանգեցնում է ձախողման՝ թվի բարձրացումը, գրառման ավելացումը, `cap`/`testCap`-ի փոփոխությունը կամ
`_rebaseline_*` նշման ջնջումը/վերագրումը (այդ նշումները յուրաքանչյուր վերին շեմի գոյության պատճառների աուդիտային պատմությունն են
և պահվում են նույն `frozen` օբյեկտում, ինչ ֆայլերի գրառումները)։
Բոտը, որը կարող է բարձրացնել սահմանաչափը, հաստատ ավելի վատ կլիներ, քան առկա վիճակը։ Ռեգրեսիայից պաշտպանություն՝
`tests/unit/verify-ratchet-bank.test.ts`։

Առաջադրանքը երբեք push չի անում դեպի `release/*`. PR-ը միաձուլում է մարդը, ուստի սխալ չափումը
չի կարող հայտնվել համակարգում առանց ստուգման։

## Թույլատրվածների ցանկի քաղաքականություն

Նախապես գոյություն ունեցող խախտումների պատճառով չձախողվող յուրաքանչյուր ստուգիչ օգտագործում է սառեցված թույլատրվածների ցանկ
(օրինակ՝ `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`)։ Քաղաքականությունը հետևյալն է․

**Շտկեք սկզբնական պատճառը․ թույլատրվածների ցանկն օգտագործեք միայն այն դեպքում, երբ խախտումը նախապես գոյություն է ունեցել և
չի կարող շտկվել նույն PR-ում։**

Թույլատրվածների ցանկում գրառում ավելացնելիս՝

1. Ներառեք հիմնավորում պարունակող մեկնաբանություն։
2. Հղում կատարեք հետևման issue-ին (օրինակ՝ `// #3498 — 2-րդ փուլի գործառույթ, դեռ ներդրված չէ`)։
3. Հեռացրեք գրառումն այն նույն PR-ում, որը շտկում է խախտումը․ հնացած գրառումը, որն այլևս
   չի ճնշում ակտիվ խախտումը, ինքնին թերություն է (6A.3 stale-enforcement-ը ներդրվելուց հետո
   կձախողի ստուգիչը՝ որբացած allowlist գրառման պատճառով)։

**Մի՛** ավելացրեք գրառումներ թույլատրվածների ցանկում՝ թեստերն ավելի արագ անցկացնելու համար։ Կանաչ ստուգիչը՝ աճող
թույլատրվածների ցանկով, որակի կեղծ զգացում է ստեղծում։

### Երբ ստուգիչը ձախողվում է ձեր PR-ում

1. **Ուշադիր կարդացեք ստուգիչի ելքը**․ այն ճշգրտորեն նշում է, թե որ ֆայլը կամ խորհրդանիշն է խախտել
   կանոնը։
2. **Շտկեք խախտումը**․ ստուգիչների մեծ մասը ֆայլային համակարգի դետերմինիստական ստուգումներ են, որոնք հաջողվում են հենց որ
   կոդը ճիշտ է։
3. **Եթե խախտումը նախապես գոյություն է ունեցել** (այսինքն՝ դուք չեք այն ներմուծել, բայց ստուգիչն այժմ
   ընդգրկում է այն), թույլատրվածների ցանկում ավելացրեք գրառում՝ հիմնավորման մեկնաբանությամբ և հետևման issue-ով։
4. **Եթե ստուգիչը ռատչետ է** (ծածկույթ, ESLint-ի նախազգուշացումներ, կրկնօրինակում, բարդություն),
   ձեր փոփոխությունը վատթարացրել է չափանիշը։ Շտկեք հիմքում ընկած խնդիրը կամ (հազվադեպ) գործարկեք
   `npm run quality:ratchet -- --update`, եթե փոփոխությունը միտումնավոր է, և չափանիշի
   վատթարացումն ընդունելի է, սակայն PR-ի նկարագրության մեջ փաստաթղթավորեք պատճառը։
5. **Խորհրդատվական ստուգիչները** (`continue-on-error: true`) տեղեկատվական են․ դրանք չեն արգելափակում
   միավորումը, սակայն հայտնվում են CI ամփոփագրում։ Միևնույն է՝ շտկեք դրանք։

---

## Նոր ստուգիչի ավելացում

1. Ստեղծեք `scripts/check/check-<name>.mjs` (կամ `.ts`)։ Քաղաքականության ստուգիչներն ավարտվում են 0/1 կոդով։
   Ռատչետ տեսակի ստուգիչները չափանիշ են գրում `quality-metrics.json`-ում՝ `collect-metrics.mjs`-ի միջոցով։
2. `package.json`-ում ավելացրեք `"check:<name>": "node scripts/check/check-<name>.mjs"`։
3. Միացրեք այն `.github/workflows/ci.yml`-ում՝ համապատասխան job-ի ներքո
   (քաղաքականություն → `lint` կամ `docs-sync-strict`, ռատչետ → `quality-gate`)։
4. Եթե այն ունի թույլատրվածների ցանկ, կիրառեք `reportStaleEntries()`-ը
   `scripts/check/lib/allowlist.mjs`-ից, որպեսզի հնացած գրառումները հայտնաբերվեն ինքնաբերաբար։
5. `tests/unit/build/`-ում գրեք թեստ, որն ընդգրկում է ստուգիչի հայտնաբերման տրամաբանությունը։
6. Թարմացրեք այս փաստաթուղթը (համապատասխան job-ի աղյուսակում ավելացրեք տող)։

---

## Գործակալների գործիքակազմ․ LSP-in-the-loop (ըստ ցանկության)

CI ստուգիչներից բացի, OmniRoute-ը ներառում է **ըստ ցանկության միացվող** `agent-lsp` հիմնակմախք
(նախագծի մակարդակի `.mcp.json`, Fase 7 Task 15)։ Ստեղծեք `.mcp.json`,
որպեսզի կոդավորման գործակալներին հասանելի դարձնեք TypeScript լեզվական սերվեր, և նրանք լուծեն խորհրդանիշները /
ախտորոշումները կոդ գրելուց **առաջ**․ սա `typecheck:core`-ին ուղեկցող compile-before-claim մոտեցում է,
որը սկզբնաղբյուրում նվազեցնում է «հորինված խորհրդանիշների» սխալները։ Այն միտումնավոր
ինքնաբերաբար չի բեռնվում (դուք եք ընտրում և ստուգում MCP↔LSP կամուրջը)․ սխալ գրառումը միայն գրանցում է
միացման սխալ և երբեք չի խափանում աշխատաշրջանները։

---

## Ռացիոնալացման կուտակված աշխատանքներ (ROI-ի վերանայում — Փուլ 9 Ալիք 3)

Այս գույքացանկը 2026-06-17-ին համադրվել է `ci.yml`-ի հետ (նախորդ տարբերակում բաց էին թողնվել
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence`)։ Համադրված հավաքածուի ROI-ի վերանայմամբ
բացահայտվել են ռացիոնալացման հետևյալ թեկնածուները։ **Միավորումները CI-ի մեխանիկական
փոփոխություններ են, իսկ փոխարկումները/հեռացումները՝ օպերատորին վերապահված քաղաքականության որոշումներ։** Ստորև
նշվածներից դեռ ոչինչ չի կիրառվել։

**Վերևում նաև փաստագրված չեն** (խորհրդատվական, թույլ ազդանշանով)՝ `docs-lint` առաջադրանքը
(markdownlint + Vale, ամբողջ առաջադրանքի համար՝ `continue-on-error`) և ինքնուրույն սկանավորման աշխատանքային հոսքերը՝
`semgrep.yml` / `codeql.yml` / `scorecard.yml`։ `semgrepFindings: 0`-ն առկա է
`quality-baseline.json`-ում, սակայն կապված չէ `ci.yml`-ում արգելափակող ճշգրտիչի հետ․ չափորոշիչը
ներկայումս որբ է։

### Միավորում / կրկնությունների վերացում (մեխանիկական, ավելի ցածր ռիսկով)

Յուրաքանչյուր թեկնածու 2026-06-17-ին վավերացվել է գործող անցակետի վիճակի նկատմամբ (վստահել, բայց ստուգել)․
մի քանի «ակնհայտ» միավորումներ, պարզվեց, թաքցնում են տեխնիկական պարտք և **չեն** կարող կիրառվել որպես մաքուր ուղղակի փոխարինումներ։

- **`check:docs-sync`-ը գործարկվում է երկու անգամ** — առանձին՝ `lint` առաջադրանքում, և կրկին՝ `check:docs-all`-ի (`docs-sync-strict`) ու husky-ի pre-commit hook-ի ներսում։ ✅ **ԱՎԱՐՏՎԱԾ Է** — առանձին `lint` կանչը հեռացվել է։
- **CVE սկանավորում** — ❌ **Մաքուր միավորում ՉԷ։** `audit:deps`-ը կոշտ ձախողվում է ցանկացած բարձր/կրիտիկական CVE-ի դեպքում, իսկ `check:vuln-ratchet`-ը (osv) ձախողվում է միայն ելակետի համեմատ _հետընթացի_ դեպքում (ներկայումս՝ 1 MODERATE)։ Իմաստաբանությունը տարբեր է․ `audit:deps`-ի հեռացումը կվերացնի բարձր/կրիտիկական մակարդակի բացարձակ անցակետը։ Պահել երկուսն էլ։
- **Ցիկլերի հայտնաբերում** — ❌ **Մաքուր միավորում ՉԷ։** `check:circular-deps`-ը (dpdm) հաղորդում է **91 ցիկլի** մասին (հենց այդ պատճառով էլ այն խորհրդատվական է)․ այն չի կարող դառնալ արգելափակող՝ առանց դրանք նախապես վերացնելու, և դրա ընդգրկույթն ավելի լայն է, քան հաջող անցնող, նպատակային `check:cycles`-ինը։ `check:cycles`-ը պահել արգելափակող․ dpdm-ի 91 ցիկլերի վերացումն առանձին կուտակված աշխատանք է։
- **Բարդություն** — ✅ **ԱՎԱՐՏՎԱԾ Է** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`)․ ESLint-ի մեկ անցում, հաշվարկը՝ ըստ ruleId-ի, որպեսզի ցիկլոմատիկ+max-lines և կոգնիտիվ ելակետերը մնան անկախ․ առանձին `check:complexity` / `check:cognitive-complexity` հրամանները պահպանվել են տեղային `--update`-ի համար։
- **`/api` հակահալյուցինացիոն ստուգում** — ✅ **ԱՎԱՐՏՎԱԾ Է** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`)․ `src/app/api`-ի ֆայլային համակարգի մեկ գույքագրում, openapi-routes + docs-symbols-ը դեռ զեկուցում են առանձին․ առանձին հրամանները պահպանվել են տեղային գործարկումների համար։
- **`check:node-runtime`-ը գործարկվում է 11 առաջադրանքում** — ⚠️ **ցածր ROI։** Յուրաքանչյուրն առանձին runner է, իսկ ստուգումը տևում է <1 վրկ․ ընդհանուր խնայողությունը մոտ ~10 վրկ է՝ յուրաքանչյուր առաջադրանքի համար էժան պաշտպանիչ ստուգումը կորցնելու դիմաց։ Չարժե նման փոփոխությունների իրարանցումը։
- **`typecheck:noimplicit:core`-ը CI-ի lint-ում** — ✅ **հեռացվել է lint առաջադրանքից** (խորհրդատվական էր՝ `continue-on-error`)․ տիպերի արգելափակող մակերեսն ապահովում են `typecheck:core` + `check:type-coverage`։ Տեղային սկրիպտը պահպանվել է։

### Փոխարկել / որոշել (օպերատորի քաղաքականություն)

- `check:openapi-security-tiers` (խորհրդատվական) — ❌ **Հնարավոր չէ մաքուր կերպով փոխարկել։** Այն ավարտվում է 0 կոդով, սակայն զգուշացնում է, որ `LOCAL_ONLY_API_PREFIXES`-ի տակ գտնվող մի քանի `traffic-inspector` երթուղիներում բացակայում է `x-loopback-only: true` նշագրումը։ Դրա պարտադրումը նախ պահանջում է այդ նշագրումներն ավելացնել `openapi.yaml`-ում։
- `typecheck:noimplicit:core` (խորհրդատվական) — հիմնականում ներառված է արգելափակող `check:type-coverage` ճշգրտիչի մեջ։ Փոխարկել ճշգրտիչի կամ հեռացնել կրկնվող երկրորդ `tsc` անցումը։
- `test:vitest:ui` (այժմ **արգելափակող**) — նախապես գոյություն ունեցող ձախողումները բացահայտորեն բացառված են `vitest.config.ts`-ում՝ `// #8618` հետագծման մեկնաբանություններով․ նոր ձախողումները ձախողում են առաջադրանքը։
- `check:secrets` (gitleaks, արգելափակող ճշգրտիչ՝ սառեցված 3 փաստագրված կեղծ դրական արդյունքի վրա) — այդ 3-ը ներառել թույլատրելի ցանկում՝ 0-ի հասնելու համար, կամ իջեցնել խորհրդատվականի մակարդակի։ Համընկնում է GitHub-ի ներկառուցված գաղտնիքների սկանավորման + `check:public-creds`-ի հետ։
- `check:pr-evidence` (արգելափակող, grep-ով որոնում է PR-ի մարմնի արձակ տեքստում) — կեղծ դրական արդյունքների բարձր ռիսկ․ հեռացնելու դեպքում թուլացնում է Խիստ կանոն #18-ի կիրառումը, ուստի սա իսկական քաղաքականության որոշում է։
- `semgrep` (առանձին խորհրդատվական) — OWASP ընտանիքների մասով համընկնում է CodeQL-ի հետ․ դրա ելակետը կապել ճշգրտիչի հետ կամ հեռացնել։

---

## Առնչվող փաստաթղթեր

- Մատակարարման շղթա (ծագում, SBOM, Trivy, Scorecard)՝ [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — բանալիների բազմությունների համարժեքության շեմ

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, առաջադրանք՝ `i18n-ui-coverage`)։
Համեմատում է յուրաքանչյուր `src/i18n/messages/<locale>.json`-ի վերջնային բանալիների բազմությունը `en.json`-ի հետ և ձախողվում է
ցանկացած բացակայող կամ ավելորդ վերջնային բանալու դեպքում՝ անկախ այն բանից, թե երբ է բանալին ավելացվել։ `__MISSING__:` տեղապահները
համարվում են առկա (դրանց բովանդակությունը հարաբերակցության շեմի գործն է)։ Այն երկու տարբերությունների վրա հիմնված/տոկոսային շեմերի բացարձակ լրացումն է․ `check-ui-keys-coverage`-ը յուրաքանչյուր
տեղայնացման համար պարտադրում է 80 % նվազագույն շեմ (մոտ 13,000-ից 43 բացակայող բանալու դեպքում արդյունքը դեռ 99.7 % է), իսկ `check-new-key-coverage`-ը գնահատում է
միայն այն բանալիները, որոնք PR-ն ավելացնում է `en.json`-ում։ Տեղայնացումների խմբաքանակը ստեղծվում է այն օրվա `en.json`-ից,
երբ առանձնացվում է դրա ճյուղը, և թարգմանվում է օրեր շարունակ, մինչ հիմնական ճյուղում շարունակում են բանալիներ ավելանալ․ խմբաքանակի PR-ն ինքնին որևէ
բանալի չի ավելացնում, ուստի հարակից երկու ստուգումներն էլ լուռ մնացին, երբ խմբաքանակ 1-ը (#13044) միավորվեց՝ ինը
տեղայնացումներում 43 բանալի պակաս ունենալով, իսկ խմբաքանակ 2-ը (#13660)՝ ութում 10 բանալի պակաս ունենալով (2026-09-15)։ Կարմիր արդյունքը շտկեք
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers` հրամանով․ `extra` վերջնային բանալին
նշանակում է, որ այն հեռացվել է սկզբնաղբյուրից՝ ջնջեք այն տեղայնացումից։ `--warn`-ը հաղորդում է խնդրի մասին՝ առանց ձախողման։
`--catalog=cli`-ն նույն համեմատությունը կատարում է `bin/cli/locales`-ի համար (`npm run i18n:check-keys:cli`)․
երկու քայլերն էլ գտնվում են `i18n-ui-coverage` առաջադրանքում։

#### `check-new-key-coverage` — նոր բանալիների i18n շեմ

`check-ui-value-drift`-ի հարակից ստուգումն է։ Վերջինս հայտնաբերում է, երբ անգլերեն արժեքը **վերաշարադրվել է**,
իսկ դրա թարգմանությունները մնացել են անփոփոխ, մինչդեռ այս ստուգումը հայտնաբերում է, երբ անգլերեն բանալին **ավելացվել է**,
բայց որոշ տեղայնացումներ այն այդպես էլ չեն ստացել։

`check-ui-keys-coverage`-ը չի կարող տեսնել այս դասի խնդիրը․ այն յուրաքանչյուր տեղայնացման համար պարտադրում է տոկոսային նվազագույն շեմ, իսկ
մոտ 13,000 վերջնային բանալիներից տասնմեկի բացակայության դեպքում ծածկույթը մնում է 99.9%։ Յուրաքանչյուր լեզվի համար հաշվարկվող տոկոսը չի կարող
արտահայտել «այս գործառույթը թողարկվել է առանց թարգմանության» միտքը․ նոր տեղայնացման մեջ կարող է մի ամբողջ գործառույթ ավելացվել առանց որևէ
տեքստի՝ ընդհանրապես չփոխելով թիվը։

Դրա հիմքում ընկած միջադեպը հետևյալն է․ Orchestration Canvas-ի Phase 3-ը թարգմանել էր իր տասնմեկ բանալիները
այն ժամանակ գոյություն ունեցող 42 տեղայնացումների համար։ Ժամեր անց ԵՄ լեզուների խմբաքանակը (#13044) պահոցում
տեղայնացումների թիվը հասցրեց 51-ի, իսկ ինը նորեկները (`el`, `et`, `ga`, `hr`, `lt`, `lv`, `mt`, `sl`, `sr`) այդպես էլ
չստացան դրանք։ `deepMergeFallback`-ը բացակայող բանալու փոխարեն օգտագործում է անգլերենը, ուստի ձախողումն արտահայտվում էր
չթարգմանված, այլ ոչ թե դատարկ միջերեսով․ այն իրական էր և կառուցվածքային առումով՝ անաղմուկ։

Ինչպես իր հարակից ստուգումը, այն **հաշվի է առնում տարբերությունները**՝ միավորման բազայում եղած անգլերենը համեմատելով աշխատանքային
ծառի հետ, այնպես որ նախկինում գոյություն ունեցող բացերը մնում են սառեցված, և շեմն ակտիվացնելու համար տեղափոխում անհրաժեշտ չէր։ Շրջանցման միջոցը՝
`__MISSING__:<english>`-ը հետաձգում է թարգմանությունը՝ միաժամանակ պահպանելով կատարման միջավայրի ճիշտ աշխատանքը։ `vi`-ն արգելում է
տեղապահները (`tests/unit/i18n-vi-completeness.test.ts`) և պահանջում է իրական թարգմանություն։

#### `check-vitest-exclusions` — հետաձգված թեստերի շեմ

`vitest.config.ts`-ի `exclude` ցուցակում գտնվող ֆայլը թեստ է, որը չի գործարկվում, սակայն ծառը կարդացողի համար այն
ծածկույթի տպավորություն է ստեղծում։ Վաթսուներկու ֆայլ էր կուտակվել
`// #8618 — pre-existing failure; remove this exclusion when fixed` մեկնաբանության հետևում։ #8618 խնդիրը փակվել էր
2026-08-11-ին, մինչդեռ դրա հետևած ցուցակը 45 գրառումից աճել էր մինչև 62, և յուրաքանչյուր նոր գրառում ժառանգել էր փակված խնդրին
հղվող մեկնաբանությունը։ Երբ ցուցակը վերջապես չափվեց ֆայլ առ ֆայլ (#13204), **62-ից 51-ը
անցան ընթացիկ ծառի նկատմամբ՝ առանց սկզբնաղբյուրի որևէ փոփոխության**։

Շեմը պահանջում է, որ իրական ֆայլի վերածվող յուրաքանչյուր բացառություն (ա) նշի հետևման խնդիրը և
(բ) առկա լինի `config/quality/vitest-exclusions.json`-ում՝ իր չափված կարգավիճակով, որպեսզի նորի ավելացումը
60 գրառում ունեցող զանգվածի ևս մեկ տողի փոխարեն լինի հատուկ ֆայլում վերանայելի տարբերություն։ Այն դիտավորյալ
չի վերագործարկում բացառված թեստերը․ դա տևում է մոտ 10 րոպե և պարբերական առաջադրանքի գործն է․
գույքացուցակը գրանցում է, թե յուրաքանչյուրն առավել վերջերս երբ է չափվել։
