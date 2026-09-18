# Quality Gates Reference (Azərbaycan dili)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

Bu sənəd OmniRoute-da bütün CI keyfiyyət qapıları üçün əsas istinaddır.
O, hər bir qapını, qapının nəyi yoxladığını, hansı CI tapşırığında işlədiyini, ratchet baza səviyyəsindən, yoxsa keçdi/qaldı siyasətindən istifadə etdiyini və yığmanı bloklayıb-bloklamadığını, yaxud yalnız tövsiyə xarakterli olub-olmadığını təsvir edir.

Qısa xülasə və icazə siyahısı siyasəti üçün `AGENTS.md` faylındakı "Keyfiyyət Qapıları və Ratchet-lər" bölməsinə baxın. Eyni sistemin kritik qiymətləndirilməsi, yetkinlik təsnifatı və alətdən asılı olmayan təkrarlama planı üçün
[Keyfiyyət Qapıları üzrə Təlimata](../ops/QUALITY_GATE_PLAYBOOK.md) baxın.

---

## Qapı İnventarı (~90 skript)

Skriptlər `scripts/check/` (siyasət qapıları) və `scripts/quality/` (ratchet mühərriki) qovluqlarında yerləşir.
CI üçün əsas həqiqət mənbəyi `.github/workflows/ci.yml` faylıdır.

### Buraxılış PR-ları üçün sürətli yol (`quality.yml`)

`.github/workflows/quality.yml` `release/**` hədəfli PR-larda işləyir. O, yol üzrə filtrlənmiş sürətli qapılarla iştirakçıların budaqlarında işi davam etdirməsinə imkan verir və kod dəyişiklikləri üçün əlavə olaraq istehsal yığmasına dair bir tövsiyə xarakterli siqnal təqdim edir:

| Tapşırıq                                         | Əhatə dairəsi                                                                                                                                                                                                                                         | Bloklama                                                                                                         |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `Build (advisory)`                               | Qaralama olmayan kod PR-ları və Mergify növbə budaqları; Node 24, `npm-ci-retry`, `check:node-runtime`, `OMNIROUTE_USE_TURBOPACK=1` ilə `npm run build`; heç bir sonrakı keyfiyyət tapşırığı onu istifadə etmədiyi üçün artefakt yüklənmir            | **Tövsiyə xarakterli** (`continue-on-error: true`; buraxılış PR-larında bir həftəlik stabil icradan sonra silin) |
| `Docs Gates (fast-path)`                         | Sənəd/kod PR-ları; API sənədləri istinadları və bütün sənədlər                                                                                                                                                                                        | Bəli                                                                                                             |
| `Fast Quality Gates`                             | Kod PR-ları; statik yoxlamalar, tip yoxlaması, idarəetmə panelinin tip yoxlaması, təsirlənmiş vahid testləri                                                                                                                                          | Bəli                                                                                                             |
| `Forgotten sibling tests`                        | Kod PR-ları; dəyişdirilmiş modulların statik istehlakçılara və namizəd eyni səviyyəli testlərə qədər izlənməsi; barrel və dinamik idxal yolları istinad edilən icazə siyahısı istisnaları ilə birlikdə tövsiyə xarakterli diaqnostika kimi bildirilir | **Tövsiyə xarakterli**                                                                                           |
| `Vitest (fast-path)`                             | Kod PR-ları; sürətli vitest dəsti                                                                                                                                                                                                                     | Bəli                                                                                                             |
| `Unit Tests fast-path`                           | Kod PR-ları; 4 hissəli vahid test dəsti                                                                                                                                                                                                               | Bəli                                                                                                             |
| `No new ESLint warnings`                         | Kod PR-ları; susdurmaları nəzərə alan lint qoruyucusu                                                                                                                                                                                                 | Öz mənbəli PR-lar üçün bəli, fork-lar üçün tövsiyə xarakterli                                                    |
| `Merge integrity (changelog + generated skills)` | Qaralama olmayan PR-lar; dəyişiklik jurnalı və yaradılmış bacarıqların sinxronlaşdırılması                                                                                                                                                            | Öz mənbəli PR-lar üçün bəli, fork-lar üçün tövsiyə xarakterli                                                    |

#### Unudulmuş eyni səviyyəli testlər hesabatı

`npm run check:forgotten-sibling-tests` testlərin təsir xəritəsinin arxasındakı idxal həlledicisindən yenidən istifadə edir.
Hər dəyişdirilmiş istehsal modulu üçün namizəd test pull request fərqində olmadıqda deterministik
`dəyişdirilmiş modul/simvol -> statik istehlakçı -> namizəd eyni səviyyəli test` zəncirlərini bildirir. Markdown xülasəsi və JSON nəticəsi hər hansı bloklayıcı tətbiqdən əvvəl kalibrləmə üçün `forgotten-sibling-tests` iş axını artefaktı kimi saxlanılır.

Barrel təkrar ixracları və dinamik idxallar yalnız həll diaqnostikasıdır; onlar heç vaxt bloklayıcı nəticə yaratmır. Nəzərdən keçirilmiş istisnalar
`config/quality/forgotten-sibling-allowlist.json` faylında yerləşir. Hər qeyd istehlakçını və namizəd testi göstərməli, konkret əsaslandırma təqdim etməli və GitHub məsələsinə və ya pull request-ə keçid verməlidir. Səhv formatlanmış qeydlər qapalı şəkildə xətaya səbəb olur. İstisnalar silinmiş namizəd testi və ya `.skip`/`.todo` əlavə edən fərqi gizlədə bilməz;
assertion zəiflətməsi və digər maskalama halları müstəqil şəkildə bloklayıcı olan
`check:test-masking` qapısının məsuliyyətində qalır.

### Tapşırıq: `lint`

`main` budağına açılan hər PR-da işləyir. Uğursuzluq halında birləşdirməni bloklayır.

| Skript (`npm run ...`)            | Yoxlayır                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Bloklayıcı                                         |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------- |
| `check:node-runtime`              | Node.js versiyasının dəstəklənən diapazonda olmasını                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Bəli                                               |
| `check:cycles`                    | Dövri importları — bütün `src/` + `open-sse/` modulları                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Bəli                                               |
| `check:route-validation:t06`      | Bütün marşrutlarda Zod sxemlərinin mövcudluğunu (Tier 6 siyasəti)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Bəli                                               |
| `check:any-budget:t11`            | `@ts-expect-error // any` sayının büdcəni aşmamasını (Tier 11 turniketi)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Bəli                                               |
| `check:provider-consistency`      | `providers.ts` daxilindəki hər provayder üçün `providerRegistry.ts` daxilində uyğun qeydin olmasını (və əksinə, icazə siyahısı çərçivəsində)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Bəli                                               |
| `check:model-lifecycle`           | Əl ilə saxlanılan üç marşrutlaşdırma cədvəlinin repozitoriyaya daxil edilmiş həyat dövrü ani görüntüsü ilə uyğun qalmasını (#11503): `FITNESS_TABLE` (`taskFitness.ts`) `REGISTRY` tərəfindən marşrutlaşdırıla bilən heç bir istifadədən çıxarılmış id-yə xal vermir; hər `BUILT_IN_ALIASES` hədəfi `REGISTRY` daxilində mövcuddur və istifadədən çıxarılmış id-lərin ani görüntüsündə yoxdur; `REGISTRY` daxilində hələ də olan hər istifadədən çıxarılmış id yönləndirilir və ya `allowedRetiredInCatalog` siyahısında göstərilir; həmçinin heç bir `DEFAULT_DEGRADATION_MAP` mənbəyi və ya hədəfi həmin ani görüntüdə istifadədən çıxarılmış kimi görünmür. Bu, modelin hazırda aktiv yuxarı axın xidməti tərəfindən təqdim edildiyini sübut etmir. Oflayn — əl ilə `npm run quality:refresh-model-lifecycle` vasitəsilə yenilənən `config/quality/model-lifecycle.json` ilə müqayisə edir (şəbəkə tələb olunur; CI-a qoşulmayıb). `allowedRetiredInCatalog` tədricən azaldılan kilid mexanizmidir: yalnız izləmə məsələsi olduqda qeyd əlavə edin. | Bəli                                               |
| `check:fetch-targets`             | Müştəri tərəfindəki `src/` daxilində hər `fetch("/api/...")` çağırışının real `route.ts` faylına uyğun gəlməsini                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Bəli                                               |
| `check:deps`                      | Repozitoriyadakı hər `package.json` üzrə `npm install` ilə quraşdırıla bilən bütün asılılıqların `dependency-allowlist.json` daxilində olmasını; yeni sabitlənməmiş və ya slopsquatting riski daşıyan paketlərin işarələnməsini                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Bəli                                               |
| `audit:deps`                      | `npm audit` (kök + electron) — yüksək/kritik xəbərdarlıq yoxdur (osv `check:vuln-ratchet` ilə üst-üstə düşür; Rasionallaşdırma üzrə görüləcək işlər siyahısına baxın)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Bəli                                               |
| `check:lockfile`                  | `package-lock.json` bütövlüyünü — https reyestri, bütövlük heşləri, host əvəzləmələrinin olmaması                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Bəli                                               |
| `check:licenses`                  | İstehsal asılılıqları üçün SPDX lisenziya icazə siyahısını                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Bəli                                               |
| `check:tracked-artifacts`         | Qurma artefaktlarının / repozitoriyaya daxil edilmiş `node_modules` simvolik keçidlərinin olmamasını (həmçinin husky pre-commit zamanı işləyir; pre-push qəsdən yüngül saxlanılıb — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Bəli                                               |
| `check:vitest-exclusions`         | Hər Vitest istisnasının bir izləmə məsələsini göstərməsini və `config/quality/vitest-exclusions.json` daxilində yer almasını (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Bəli                                               |
| `check:file-size`                 | Heç bir mənbə faylının genişlənmə üzrə limiti aşmamasını (kilid mexanizmi: böyük, dondurulmuş fayllar `frozen` siyahısındadır)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Bəli                                               |
| `check:error-helper`              | İcraçılarda/işləyicilərdə xəta cavablarının `buildErrorBody()` / `sanitizeErrorMessage()` istifadə etməsini (Sərt Qayda #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Bəli                                               |
| `check:migration-numbering`       | Miqrasiya SQL fayllarının ardıcıl nömrələnməsini, boşluqların və dublikatların olmamasını                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Bəli                                               |
| `check:public-creds`              | `publicCreds.ts` xaricində literal OAuth `client_id`/`client_secret` və ya Firebase Web açarlarının olmamasını (Sərt Qayda #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Bəli                                               |
| `check:db-rules`                  | `src/lib/db/` modulları xaricində birbaşa SQL-in olmamasını; `localDb.ts` faylından barrel-importların olmamasını (Sərt Qaydalar #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Bəli                                               |
| `check:known-symbols`             | Dispetçer cədvəllərində qeydiyyata alınmış provayder icraçılarının, marşrutlaşdırma strategiyalarının və çeviricilərin diskdəki fayllarla uyğun gəlməsini — sahibsiz və ya elan edilməmiş simvolların olmamasını                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Bəli                                               |
| `check:route-guard-membership`    | Alt proses yaradan hər marşrutun `isLocalOnlyPath()` tərəfindən təsnif edilməsini (Sərt Qaydalar #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Bəli                                               |
| `check:test-discovery`            | Repozitoriyadakı hər `*.test.ts` / `*.spec.ts` faylının ən azı bir test icraçısı tərəfindən toplanmasını (kilid mexanizmi: `test-discovery-baseline.json` daxilindəki sahibsiz fayllar siyahısı yalnız kiçilə bilər)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Bəli                                               |
| `check:agent-skills-sync`         | Yaradılmış agent bacarıqları artefaktlarının mənbə kataloqu ilə uyğun gəlməsini (kənarlaşma yoxdur)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `check:provider-asset-provenance` | Provayder loqolarının/aktivlərinin qeydə alınmış mənşə qeydinin olmasını                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `lint:json`                       | JSON konfiqurasiya fayllarının təhlil olunmasını və repozitoriyanın lint qaydalarına cavab verməsini                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `typecheck:core`                  | TypeScript kompilyasiyasının xətasız olmasını (yalnız tövsiyə xarakterli xəbərdarlıqlar)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Bəli                                               |
| `typecheck:noimplicit:core`       | Ciddi `noImplicitAny` — gələcəyə yönəlikdir; əvvəlcədən mövcud olan bir çox çağırış nöqtəsi hələ də annotasiya tələb edir                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | **Tövsiyə xarakterli** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `src/app/(dashboard)/**` ilə məhdudlaşdırılmış `tsc` (#7033) — `typecheck:core` üçün seçilmiş 27 fayllıq icazə siyahısına heç bir idarəetmə paneli TSX faylı daxil deyil və `next build` də onları heç vaxt tip yoxlamasından keçirmir (`next.config.mjs` daxilində `ignoreBuildErrors: true` təyin edilir), buna görə oradakı sahibsiz identifikator reqressiyaları (#6625/#6909) CI üçün görünməz idi. Dondurulmuş, hər fayl/hər TS-kodu üzrə say bazası (`config/quality/dashboard-typecheck-baseline.json`, `check:known-symbols` ilə eyni köhnəlmə nəzarəti nümunəsi) ilə fərqləri müqayisə edir — yalnız baza sayından artıq olan YENİ xətalar keçidi uğursuz edir; əvvəlcədən mövcud olan xəta düzəldildikdə `--update` ilə kilidi aşağı salın.                                                                                                                                                                                                                                                                                                 | Bəli                                               |

### Tapşırıq: `quality-gate`

`test-coverage` tapşırığından sonra işə düşür. Uğursuz olduqda birləşdirməni bloklayır.

| Skript                       | Yoxlayır                                                                                                                                                                                   | Bloklayıcı                     |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| `quality:collect`            | `quality-metrics.json` faylını yaradır (ESLint xəbərdarlıqlarının sayı, birləşdirilmiş hissə hesabatından əhatə göstəricisi)                                                               | Bəli (ratchet-dən əvvəl gəlir) |
| `quality:ratchet`            | `quality-baseline.json` faylındakı hər bir metrik geriləməyib (ESLint xəbərdarlıqları ≤ baza göstəricisi; əhatə ≥ baza göstəricisi)                                                        | Bəli                           |
| `check:duplication`          | Kod təkrarlanması (jscpd@4) `quality-baseline.json` faylındakı baza göstəricisini aşmır                                                                                                    | Bəli                           |
| `check:complexity`           | Fayl səviyyəli siklomatik mürəkkəblik həddi aşmır (əsas ESLint `complexity` + `max-lines-per-function`)                                                                                    | Bəli                           |
| `check:cognitive-complexity` | Koqnitiv mürəkkəblik ratchet-i (`eslint-plugin-sonarjs`) — ayrıca ESLint keçidi; CI hər ikisini vahid `check:complexity-ratchets` addımı kimi işə salır                                    | Bəli                           |
| `check:dead-code`            | İstifadə olunmayan ixracların / faylların ratchet-i (knip) baza göstəricisi ilə müqayisədə geriləmir                                                                                       | Bəli                           |
| `check:compression-budget`   | Sıxılma bençmarkı büdcəsi — hər mühərrik üzrə token qənaətinin minimum hədləri geriləməməlidir                                                                                             | Bəli                           |
| `check:type-coverage`        | Tipləşdirilmə faizi ratchet-i (`type-coverage`) geriləmir; əsasən `typecheck:noimplicit:core` yoxlamasını əhatə edir                                                                       | Bəli                           |
| `check:codeql-ratchet`       | Açıq CodeQL xəbərdarlıqlarının sayı artmır (`gh api` vasitəsilə oxuyur; token olmadıqda xətasız ötürür) — yeniləmə tezliyi və əl ilə işə salma: aşağıdakı "CodeQL ratchet" bölməsinə baxın | Bəli                           |

### Tapşırıq: `quality-extended`

Bütün tapşırıq tövsiyə xarakterlidir (`continue-on-error: true`). npm əsaslı ratchet-lər
real olaraq işə düşür; xarici skanerlər `gh release download` vasitəsilə quraşdırılır və
binar fayl hələ də mövcud olmadıqda özünü ötürür (exit 0).

| Skript                   | Yoxlayır                                                                                                                                                                                                      | Bloklayıcı    |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `check:circular-deps`    | Dövri asılılıqların olmaması (dpdm)                                                                                                                                                                           | **Tövsiyəvi** |
| `check:bundle-size`      | Paket ölçüsünün həddi aşmaması                                                                                                                                                                                | **Tövsiyəvi** |
| `check:secrets`          | Məxfi məlumatların skan edilməsi (gitleaks) — binar fayl olmadıqda ötürülür                                                                                                                                   | **Tövsiyəvi** |
| `check:vuln-ratchet`     | Asılılıqlardakı zəifliklər (osv-scanner) geriləmir — binar fayl olmadıqda ötürülür                                                                                                                            | **Tövsiyəvi** |
| `check:workflows`        | İş axınının lint yoxlaması (actionlint + zizmor) — binar fayllar olmadıqda ötürülür                                                                                                                           | **Tövsiyəvi** |
| `check:openapi-breaking` | Əsas budaqla müqayisədə ictimai API müqaviləsində (`openapi.yaml`) pozucu dəyişikliklər — `openapiBreaking=N` çıxarır; oasdiff olmadıqda və ya baza spesifikasiyasını müəyyən etmək mümkün olmadıqda ötürülür | **Tövsiyəvi** |

### Tapşırıq: `docs-sync-strict`

`main` budağına yönəlmiş hər PR üçün işə düşür. Uğursuz olduqda birləşdirməni bloklayır.

| Skript                         | Yoxlayır                                                                                                                                                                                        | Bloklayıcı                         |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `check:docs-all`               | Aşağıdakı 6 alt keçidi ardıcıl işə salan meta-keçid                                                                                                                                             | Bəli                               |
| ↳ `check:docs-sync`            | CHANGELOG / OpenAPI / llm.txt versiyalarının uyğunluğu                                                                                                                                          | Bəli                               |
| ↳ `check:docs-counts`          | Mətndəki sayların (provayder sayı, miqrasiya sayı və s.) real sayların ratchet pəncərəsi daxilində olması                                                                                       | Bəli                               |
| ↳ `check:env-doc-sync`         | `.env.example` faylındakı hər bir mühit dəyişəninin sənədlərdəki cədvəldə təsvir edilməsi və əksinə                                                                                             | Bəli                               |
| ↳ `check:deprecated-versions`  | Sənədlərdə köhnəlmiş versiya sətirlərinin olmaması                                                                                                                                              | Bəli                               |
| ↳ `check:doc-links`            | Sənədlərdəki daxili markdown keçidlərinin real fayllara yönəlməsi (`[mətn]`/`(path)` formatında)                                                                                                | Bəli                               |
| ↳ `check:fabricated-docs`      | Sənədlərdə göstərilən marşrutların, mühit dəyişənlərinin, CLI əmrlərinin, hook adlarının və fayl yollarının kod bazasında mövcud olması. `--strict` ilə sərt keçid; bayraq olmadan yumşaq xəta. | Bəli (CI-də `--strict` vasitəsilə) |
| `check:cli-i18n`               | CLI əmr sətirlərinin bütün i18n lokal fayllarında mövcud olması                                                                                                                                 | Bəli                               |
| `check:openapi-coverage`       | OpenAPI spesifikasiyasının real marşrutların ən azı ratchet ilə müəyyən edilmiş minimum sayını əhatə etməsi                                                                                     | Bəli                               |
| `check:openapi-security-tiers` | `openapi.yaml` faylındakı təhlükəsizlik səviyyəsi annotasiyalarının `routeGuard.ts` təsnifatları ilə uyğunluğu                                                                                  | **Tövsiyə xarakterli**             |
| `check:openapi-routes`         | `openapi.yaml` faylındakı hər yolun real `route.ts` faylına uyğun gəlməsi (hallüsinasiyaya qarşı)                                                                                               | Bəli                               |
| `check:docs-symbols`           | `docs/**/*.md` daxilindəki hər `/api/...` istinadının real `route.ts` faylına uyğun gəlməsi (hallüsinasiyaya qarşı)                                                                             | Bəli                               |
| `i18n translation drift`       | i18n lokal fayllarında tərcümə edilməmiş açarlar — yalnız xəbərdarlıq                                                                                                                           | **Tövsiyə xarakterli**             |

### Tapşırıq: `i18n-ui-coverage`

| Skript                            | Yoxlayır                                                                                                                                                                                                    | Bloklayıcı             |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `check-ui-keys-coverage` (daxili) | UI i18n açarlarının əhatə səviyyəsi ≥ 65% olmalıdır                                                                                                                                                         | Bəli                   |
| `check-ui-value-drift` (daxili)   | Yenidən yazılmış ingiliscə **dəyər** geridə köhnəlmiş tərcümə saxlamamalıdır                                                                                                                                | Bəli                   |
| `check-new-key-coverage` (daxili) | **Yeni** ingilis dili açarı hər lokala çatmalıdır                                                                                                                                                           | Bəli                   |
| `check-translation-ratio`         | Hər lokal üzrə real tərcümə nisbəti (icazə siyahısından kənarda ingiliscə ilə eyni olan / yer tutucu / çatışmayan yarpaqlar) `config/quality/i18n-translation-baseline.json` + ehtiyat həddini keçməməlidir | **Tövsiyə xarakterli** |

`fetch-depth: 0` tələb olunur — dəyər yayınması keçidi `en.json` faylını birləşdirmə bazası ilə müqayisə edir.

#### `check-ui-value-drift` — köhnəlmiş tərcümə keçidi

Digər keçidlərin struktur baxımından görə bilmədiyi yeganə i18n reqressiyasını aşkarlayır: ingiliscə dəyər
yenidən yazılır, lakin _əvvəlki_ ingiliscə mətndən törədilmiş tərcümələr olduğu kimi qalır və nəticədə
ingiliscə bilməyən istifadəçilər inamlı üslubda yazılmış, lakin artıq yanlış olan mətni oxumağa davam edirlər.

Bu problem həqiqətən istehsal versiyasına buraxılıb. Antigravity giriş köməkçisi əlavə ediləndə (#5203)
`oauthModal.googleOAuthWarning` yenidən yazılmışdı; **43 lokaldan 39-u** operatorlara "tam URL-ni
kopyalayıb aşağıya yapışdırmağı" deyən mətni saxlamışdı — həmin provayder üçün tamamlanması mümkün
olmayan bir proses. Bu problem #8463-ə qədər diqqətdən yayınmışdı, çünki:

- `sync-ui-keys` yalnız **olmayan** açarları əlavə edir, **köhnəlmiş** açarları isə heç vaxt yeniləmir;
- `check-ui-keys-coverage` açarın _mövcudluğunu_ hesablayır, buna görə köhnəlmiş tərcümə əhatə olunmuş sayılır;
- `check-translation-drift` `docs/i18n/<locale>/**.md` sənədləşdirmə güzgülərini izləyir —
  `src/i18n/messages/*.json` fayllarını heç vaxt oxumur. 2026-09 yenidən sinxronizasiyasından bəri
  `docs-sync-strict` tapşırığında bloklayıcıdır: əsas sənədi redaktə edin → `npm run i18n:run -- --files=<doc>` (bölmə səviyyəsində, az resurs tələb edir).

**Fərqləri nəzərə alır, baza vəziyyətinə əsaslanmır.** O, birləşdirmə bazasındakı `en.json` faylını
iş ağacı ilə müqayisə edir; ingiliscə dəyəri dəyişmiş hər açar üçün hələ də
toxunulmamış tərcüməni saxlayan istənilən lokal köhnəlmiş sayılır. Bu, bilərəkdən **əvvəldən mövcud olan borcu dondurur** —
fərq uzun müddətdir mövcud olan tərcümənin hansı köhnə ingiliscə mətndən gəldiyini göstərə bilməz, buna görə də yoxlama
yalnız cari dəyişikliyin toxunduğu hissələri qiymətləndirir. Alternativ variant (hər açar üçün heş baza vəziyyəti)
təxminən 600 KB ölçülü yaradılan fayl tələb edərdi; bu, mövcud ən böyük baza faylından 3 dəfə böyükdür və
hər i18n PR-də dəyişiklik yaradardı.

Bu yoxlamanı təmin etməyin iki yolu var:

1. təsirlənmiş tərcümələri yeniləyin və ya
2. onları `__MISSING__:<new english>` olaraq təyin edin — bundan sonra icra mühiti düzəldilmiş ingiliscə mətni təqdim edir
   (`src/i18n/request.ts::deepMergeFallback`, #7258) və açar tərcümə növbəsinə əlavə olunur.

Sətrin **mənası** dəyişibsə, **açarın adını dəyişməyə** üstünlük verin: yeni açar
köhnəlmiş tərcüməni miras ala bilməz. #8463-də istifadə olunan nümunə budur.

```bash
npm run i18n:check-value-drift          # ciddi (CI-nin işlətdiyi)
npm run i18n:check-value-drift:warn     # yalnız hesabat
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

Baza kataloqu oxuna bilmədikdə (`base ref` olmayan dayaz klon) `SKIP reason=base-unresolved`
mesajı ilə 0 kodu qaytarır; bu, `check-openapi-breaking` davranışını təkrarlayır.

### Tapşırıq: `i18n`

Tam i18n doğrulama matrisi (hər lokal üçün bir tapşırıq). Bütün tapşırıq tövsiyə xarakterlidir.

| Skript                          | Nəyi doğrulayır                     | Bloklama                                                            |
| ------------------------------- | ----------------------------------- | ------------------------------------------------------------------- |
| `validate_translation.py quick` | Hər lokal üzrə tərcümələrin tamlığı | **Tövsiyə xarakterli** (bütün tapşırıqda `continue-on-error: true`) |

### Tapşırıq: `pr-test-policy`

Yalnız pull request-lərdə işləyir.

| Skript                 | Nəyi doğrulayır                                                                                                                                     | Bloklama |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `check:pr-test-policy` | `src/`, `open-sse/`, `electron/` və ya `bin/` daxilində istehsal kodunu dəyişən PR-lər testləri daxil etməli və ya yeniləməlidir (Sərt Qayda #8)    | Bəli     |
| `check:test-masking`   | Dəyişdirilmiş test faylları təsdiqlərin xalis sayını azaltmır və `assert.ok(true)` tavtologiyaları əlavə etmir                                      | Bəli     |
| `check:pr-evidence`    | PR mətni dəyişiklik üçün test/VPS sübutuna istinad edir (PR mətnində axtarış etməklə Sərt Qayda #18-i avtomatlaşdırır — kövrəkdir, Backlog-a baxın) | Bəli     |

### Tapşırıq: `test-vitest`

`build`-dən sonra işləyir. Uğursuz olduqda birləşdirməni bloklayır.

| Test dəsti       | Nəyi doğrulayır                                          | Bloklama                                                                                                                              |
| ---------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP serveri (110 alət), autoCombo, keş — vitest icraçısı | Bəli                                                                                                                                  |
| `test:vitest:ui` | UI komponent testləri — vitest icraçısı                  | **Bloklayır** — əvvəlcədən mövcud olan xətalar `vitest.config.ts`-də açıq şəkildə istisna edilib; yeni xətalar tapşırığı uğursuz edir |

### Gecəlik iş axınları (planlaşdırılmış, tövsiyə xarakterli)

Bunlar cron cədvəli üzrə (və `workflow_dispatch` vasitəsilə) işləyir, PR-lərdə isə heç vaxt işləmir. Hamısı tövsiyə xarakterlidir.

| İş axını               | Nəyi doğrulayır                                                                                                                                                                                      | Bloklama               |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `nightly-property`     | təsadüfi başlanğıc dəyəri + yüksək icra sayı ilə fast-check xüsusiyyət testləri                                                                                                                      | **Tövsiyə xarakterli** |
| `nightly-resilience`   | yığın artımı yoxlaması, xaos nasazlığı inyeksiyası, k6 yük/davamlı yük testi                                                                                                                         | **Tövsiyə xarakterli** |
| `nightly-llm-security` | promptfoo inyeksiya qoruması (bloklama rejimi) + garak yoxlamaları (provayder sirri olmadıqda ötürülür)                                                                                              | **Tövsiyə xarakterli** |
| `nightly-schemathesis` | `docs/openapi.yaml` istifadə edərək canlı OmniRoute-a qarşı OpenAPI müqaviləsinin fazzinqi (schemathesis) — spesifikasiya pozuntularını / idarə olunmamış 500 xətalarını üzə çıxarır (Mərhələ 8 B.4) | **Tövsiyə xarakterli** |
| `nightly-mutation`     | sürətli vahid test xətti üzrə Stryker mutasiya testi göstəricisi — sağ qalan mutantlar zəif təsdiqləri üzə çıxarır                                                                                   | **Tövsiyə xarakterli** |
| `nightly-compat`       | dəstəklənən `engines.node` diapazonları üzrə Node mühərriki uyğunluq matrisi                                                                                                                         | **Tövsiyə xarakterli** |

---

## Sürət mərhələsi (2026-08-30 → v4.0 LTS): bütün baza hədləri 20% yumşaldıldı

Məsul şəxsin qərarı (2026-08-30): v4.0 modullaşdırılmasına qədər buraxılış sürəti
texniki borcun sərhəddə saxlanmasından daha vacibdir. Bütün **ədədi** ratchet baza hədləri audit edilə bilən
vahid keçiddə 20% yumşaldıldı və mərhələ `config/quality/quality-baseline.json` faylında elan edildi:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| Nə dəyişdi                                                                                                                                                                                                                            | Harada                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — aşağı olduqda daha yaxşı olan saylar ×1.2, yüksək olduqda daha yaxşı olan faizlər ÷1.2 (əhatəetmə minimumu 60 saxlanıldı, `eslintErrors` 0 olaraq qalır, `eslintWarnings` 0 → dondurulmuş susdurma sayının 20%-i) | `quality-baseline.json` (`_relax_velocity_2026_08_30` qeydi hər əvvəlki → sonrakı dəyəri sadalayır)    |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                                                      | `complexity-baseline.json`, `duplication-baseline.json`                                                |
| `cap`, `testCap`, hər `frozen[*]` / `testFrozen[*]` sətir həddi ×1.2                                                                                                                                                                  | `file-size-baseline.json`                                                                              |
| hər fayl / hər TS kodu üzrə saylar ×1.2                                                                                                                                                                                               | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json` |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                                   | `scripts/check/check-openapi-coverage.mjs`                                                             |
| `_policy.requireTighten === false` olduqda `--require-tighten` tövsiyə xarakteri alır                                                                                                                                                 | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| gecəlik `bank-ratchet-shrinks` dayandırılır (əks halda ölçülmüş azalmanı qeydə alaraq əlavə ehtiyatı ləğv edərdi)                                                                                                                     | `.github/workflows/nightly-release-green.yml`                                                          |

İcazə siyahıları (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) büdcə **deyil** və onlara toxunulmayıb. Keçdi/qaldı siyasəti keçidləri (məxfi məlumatlar, SQL qaydaları,
sənədlər/mühit müqaviləsi, i18n uyğunluğu, vahid testləri) dəyişməyib — uğursuz test hələ də uğursuz testdir.

**Alətlər**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — birdəfəlik
  yumşaltma (`scripts/quality/relax-baselines.mjs`); eyni qeydlə ikinci dəfə işləməkdən imtina edir.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  hər ədədi keçidi CI ilə eyni qaydada ölçür və hər keçid üzrə qalan ehtiyatı göstərir
  (`scripts/quality/baseline-headroom.mjs`). Gecəlik `baseline-headroom` tapşırığı cədvəli aktual
  **📈 Baza ehtiyatı (sürət mərhələsi)** məsələsinə göndərir və hər hansı keçid həddinin 10%-i daxilindədirsə
  və ya artıq onu keçibsə, `headroom-alert` etiketini əlavə edir. Həmin məsələ erkən xəbərdarlıqdır:
  bir neçə günə dolan büdcə yumşalmanın bütün komanda tərəfindən deyil, bir neçə PR tərəfindən
  istifadə edildiyini göstərir — problemli keçidin `_rebaseline_*` qeydlərinə baxın.

**Yeni kod rejimi (Clean-as-You-Code) — 2026-08-30 tarixindən, yalnız PR sürətli yolu**

`pull_request` hadisələrində `quality.yml`, `check:file-size`, `check:complexity-ratchets` və
`check:dead-code` üçün `--base-ref <PR base SHA>` ötürür. Bu rejimdə keçid HEAD-i merge-base ilə
**yalnız PR-ın toxunduğu fayllar çərçivəsində** müqayisə edir (`scripts/check/newCodeMode.mjs`:
merge-base müvəqqəti `git worktree` daxilində materiallaşdırılır, ESLint/knip orada və HEAD üzərində
işlədilir, hər fayl üzrə sayların fərqi hesablanır):

- **bloklayıcı** — PR dəyişdirdiyi fayllara siklomatik/koqnitiv pozuntular və ya ölü eksportlar əlavə edib
  (jurnalda `complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=`);
- **tövsiyə xarakterli** — qlobal cəmin dondurulmuş baza həddi ilə müqayisəsi. Miras qalmış yayınma
  günahsız PR-ı heç vaxt uğursuz etmir; yayınma buraxılış uzlaşdırılması zamanı yenidən dondurulur və
  ehtiyat tapşırığı tərəfindən izlənilir.

`workflow_dispatch` icralarında, release-green yoxlamasında və gecəlik ehtiyat tapşırığında PR bazası
yoxdur və onlar mütləq (qlobal) müqayisəni saxlayır. Əhatəetmə, dublikatlar və tip əhatəetməsi hələlik
qlobal qalır (onların alətləri hər fayl üzrə fərqi az xərclə yaratmır) — eyni yanaşma üçün namizədlərdir.

**v4.0-da mərhələnin bağlanması (LTS = əvvəlkindən daha sərt, "normal vəziyyətə qayıdış" deyil)**

1. Təmiz `release/v4.0.0` uc nöqtəsində: qeyd üçün `npm run quality:headroom --json`, sonra
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update`, hər typecheck keçidinin
   `--update` əmri — bütün baza göstəriciləri ölçülmüş dəyərə enir.
2. `quality-baseline.json` faylından `_policy` bölməsini silin (`--require-tighten` və gecə
   ehtiyat toplamasını yenidən aktivləşdirir), `check-openapi-coverage.mjs` faylında `THRESHOLD = 36`
   (və ya daha yüksək) dəyərini bərpa edin.
3. Modullaşdırmanın fayda verdiyi yerlərdə hədləri ölçülmüş göstəricilərdən daha da sərtləşdirin: fayl ölçüsü
   `cap` dəyərini yenidən 1000-ə (və ya 800-ə), əhatəetmə minimumlarını +5-ə, modullaşdırılmış paketlər üçün
   istifadə olunmayan ixracların sayını isə 0-a təyin edin.

## Ratchet baza səviyyəsi (`quality-baseline.json`)

Ratchet mühərriki (`scripts/quality/check-quality-ratchet.mjs`) `quality-baseline.json`
faylını oxuyur və onu yeni toplanmış `quality-metrics.json` ilə müqayisə edir. Epsilon
həddindən artıq geriləyən hər hansı metrika qurulmanın uğursuz olmasına səbəb olur.

Hazırda izlənilən metrikalar:

| Metrika               | İstiqamət | Mənası                                      |
| --------------------- | --------- | ------------------------------------------- |
| `eslintWarnings`      | `down`    | ESLint xəbərdarlıqlarının sayı artmamalıdır |
| `coverage.statements` | `up`      | Təlimat əhatəsi azalmamalıdır               |
| `coverage.lines`      | `up`      | Sətir əhatəsi azalmamalıdır                 |
| `coverage.functions`  | `up`      | Funksiya əhatəsi azalmamalıdır              |
| `coverage.branches`   | `up`      | Budaq əhatəsi azalmamalıdır                 |

Real yaxşılaşmadan sonra baza səviyyəsini yeniləmək üçün:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

`--update` bayrağı cari ölçülmüş dəyərləri `quality-baseline.json` faylına yazır.
Bu faylı metrikanı yaxşılaşdıran dəyişikliklə birlikdə commit edin. Metrikanı
yaxşılaşdırıb baza səviyyəsini yeniləməyən PR `--require-tighten` tərəfindən aşkarlanacaq
(Mərhələ 6A.5, icrası gözlənilir).

### CodeQL ratchet-i: yeniləmə tezliyi və əl ilə işə salma

`check:codeql-ratchet` **hər PR üzrə deyil, cədvəl əsasında yenilənən repozitoriya vəziyyətini** oxuyur.
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` əmri
`state: configured`, `schedule: weekly` bildirir: bu, hər push üçün analiz deyil,
GitHub-un standart quraşdırma skanıdır. Nəticə etibarilə, xəbərdarlıqları ARADAN QALDIRAN
PR birləşdirildikdən sonra ratchet növbəti planlaşdırılmış skan işə düşənədək köhnə,
daha yüksək sayı oxumağa davam edir — buna görə də skan yenilənənədək bütün açıq
PR-lərdə, o cümlədən düzəliş PR-nin sonrakı dəyişikliklərində geriləmə bildirir.

**Əl ilə yeniləmə**: `gh workflow run codeql.yml --ref release/vX.Y.Z` analizi yenidən
işə salır və xəbərdarlıqları bir neçə dəqiqə ərzində təkrar dərc edir. Əvvəlcə
`.github/workflows/codeql.yml` faylını oxuyun — onun başlığı bunun **GitHub-un "default setup"
rejimi ilə ziddiyyət təşkil etdiyinə görə** yalnız `workflow_dispatch` olduğunu izah edir
(`CodeQL analyses from advanced configurations cannot be processed when the default setup is enabled`).
`push`/`pull_request`/`schedule` trigger-lərini bərpa etmək üçün əvvəlcə **sahib tərəfindən əməliyyat**
tələb olunur: Settings → Code security → CodeQL: Default → Advanced. Bu keçid edilmədən
`schedule:` trigger-i əlavə etməyin — bu, yalnız uğursuz icralar yaradacaq.

**Say azaldıqdan sonra baza səviyyəsini sərtləşdirin** — `node scripts/check/check-codeql-ratchet.mjs
--update` yeni ölçülmüş sayı `quality-baseline.json` →
`metrics.codeqlAlerts.value` daxilinə yazır, beləliklə ratchet köhnə yuxarı həddə doğru
geriləməyə səssizcə icazə vermir. İşlənmiş nümunə (2026-09-02/03): PR #12502 7 real
xəbərdarlığı aradan qaldırdı (ölçülmüş açıq xəbərdarlıq sayı 13 → 6); PR #12530 uyğunluq
üçün dondurulmuş baza səviyyəsini 11 → 6 olaraq sərtləşdirdi; qalan 6 xəbərdarlıq isə
sonradan hər xəbərdarlıq üzrə əsaslandırma ilə rədd edilərək açıq xəbərdarlıqların sayı 0-a endirildi.

**Rəddetmələr operatorun qərarıdır (Sərt Qayda #14)** — rəddetmə şərhində texniki
əsaslandırmanı qeyd etmədən heç vaxt CodeQL xəbərdarlığını rədd etməyin: yuxarı axın
protokolu tələbi üçün `won't fix`, test qurğusu üçün `used in tests`, CodeQL-in görə
bilmədiyi sanitarizator üçün `false positive` (presedent: `docs/security/ERROR_SANITIZATION.md`).

---

## Testlərin təkrar icra siyasəti (WS5.4, v3.8.49)

Təkrar icra hər bir icraçı üçün ayrıca tətbiq olunur, heç vaxt qlobal şəkildə tətbiq edilmir — ümumi təkrar icra real reqressiyaları
görünməz qeyri-sabitliklərə çevirir:

| İcraçı           | Siyasət                                                                                                                                                          | Səbəb                                                                                                                                         |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | Yalnız CI-də `retries: 1`, `trace: on-first-retry` ilə                                                                                                           | Brauzer/şəbəkə vaxtlaması həqiqətən qeyri-determinikdir; izləmə ilə bir təkrar icra qeyri-sabitliyi diaqnostika edilə bilən artefakta çevirir |
| Vitest           | Qlobal təkrar icra YOXDUR. Qeyri-sabitliyi təsdiqlənmiş test üçün ayrıca, test səviyyəsində təkrar icra təyin edilir (diff-də görünür, PR-da nəzərdən keçirilir) | Karantin siyahısını qeyri-şəffaf deyil, repozitoriyada saxlayır                                                                               |
| node:test (unit) | Heç vaxt təkrar icra YOXDUR                                                                                                                                      | Qeyri-sabit modul testi testdəki xətadır — onu düzəldin, yenidən sınamaqla keçirməyə çalışmayın                                               |

Qeyri-sabitlik telemetriyası tətbiq edildikdən sonra hədəf SLO-lar (WS5.2/5.3): hər test üzrə <1% qeyri-sabitlik dərəcəsi
(“indi düzəlt” həddi), hər konveyer üzrə ≥95% keçid dərəcəsi. Bunlar sənaye üzrə istinad dəyərləridir —
öz ölçmələrimiz əsasında yenidən kalibrlənməlidir.

## Buraxılış səviyyəsində ratchet sürüşməsi (WS5.5, v3.8.49)

Ratchet (fayl ölçüsü, mürəkkəblik, eslint xəbərdarlıqları) TƏMİZ buraxılış
ucunda reqressiyaya uğradıqda — yəni birləşdirmələrin KOMBİNASİYASI reqressiyaya səbəb olduqda və heç bir PR bunu öz
budağında ayrıca təkrarlamadıqda — düzəliş **buraxılış kapitanına aiddir və buraxılış
budağında bir dəfə** edilməlidir: çıxarma/refaktorinqə üstünlük verin; baza səviyyəsini yalnız sənədləşdirilmiş
əsaslandırma qeydi ilə yeniləyin. Kombinasiya sürüşməsini heç vaxt töhfəçinin PR-ına yükləməyin və
hər PR üçün baza səviyyəsini yeniləməyin (bu, real reqressiyaları gizlədir). Əvvəlcə fərqləndirin: problemin sizin PR-dan
qaynaqlandığını fərz etməzdən əvvəl probe iş ağacında təmiz uc üzərində qırmızı nəticəni təkrarlayın.

## Ratchet azalmalarının qeydə alınması — aşağı istiqamət (#8584)

Ratchet yalnız yarı-avtomatikdir və avtomatik olan hissə yanlış hissədir. Həddin **artırılması**
on saniyə çəkən əl ilə JSON redaktəsidir və qırmızı PR-ın blokdan çıxarılmasının ən sürətli yoludur.
Həddin **azaldılması** üçün isə kimsə `--update` icra etməli və nəticəni commit etməlidir — və
`bank-ratchet-shrinks` tapşırığı tətbiq edilənədək heç bir iş axını bunu icra etmirdi. Ölçülmüş nəticə
(2026-07-25): artıq yeni fayllar üçün 800 sətirlik həddə və ya ondan aşağı olan 18 dondurulmuş fayl, ən pis
halda 132× (`src/shared/validation/schemas.ts`, 2,523 həddi daşıyan 19 sətir);
mürəkkəblik tavanı təxminən 37 baza yeniləmə qeydi ərzində `1794 → 2169` yüksəlib və cəmi bir
azalma (−1) olub; “növbəti dövrdə `--update` vasitəsilə sərtləşdirin” ifadəsi 31 dəfə yazılıb və
yalnız bir dəfə yerinə yetirilib. Onu doğuran koddan daha uzunömürlü olan hədd, tamamlanmış hər bir
parçalanmanı faylı növbəti dəfə redaktə edən şəxs üçün səssizcə böyümə güzəştinə çevirir.

`nightly-release-green.yml` → **`bank-ratchet-shrinks`** tapşırığı bu dövrəni bağlayır:

|          |                                                                                                                              |
| -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| İşləyir  | `schedule` (gündə 3×) + `workflow_dispatch` — məqsədli şəkildə `push` **deyil**                                              |
| Ölçür    | ən yüksək `release/vX.Y.Z`, `release-green` ilə eyni həll və inyeksiya qoruması                                              |
| Yazır    | `check:file-size --update` və `check:complexity-ratchets --update` (hər ikisi konstruksiyaya görə yalnız azalma tətbiq edir) |
| Yoxlayır | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                                     |
| Göndərir | buraxılış budağına qarşı həmişə aktual olan bir PR — məcburi yenilənir, heç vaxt spam edilmir                                |

Qeydəalma hər `push` üzrə deyil, paketləşdirilmiş şəkildə aparılır, çünki gecikmə tələbi yoxdur (azalmanın
8 saat ərzində qeydə alınması kifayətdir), hər birləşdirmə üzrə icra isə birləşdirmə kampaniyaları zamanı
PR budağını təkrar-təkrar quracaq və hər dəfə tam ESLint keçidinin xərcini ödəyəcəkdi. Aşkarlama `push`
üzərində qalır (`release-green`); yalnız qeydəalma paketləşdirilir.

### Təhlükəsizlik yoxlayıcısı

Tapşırıq baza səviyyələrinə nəzarətsiz şəkildə yazır, buna görə bunu məqbul edən
`verify-ratchet-bank.mjs`-dir. O, `--update` sonrasındakı ağacı `HEAD` ilə müqayisə edir və hər bir
dəyişiklik aşağıdakılardan biri olmadıqda **hər hansı commit yaranmazdan əvvəl tapşırığı dayandırır** —
heç bir PR açılmır:

- `frozen` / `testFrozen` daxilindəki rəqəmsal qeydin **azaldılması** və ya **silinməsi**
- `complexity-baseline.json` → `count` dəyərinin **azaldılması**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` dəyərinin **azaldılması**

Başqa hər şey uğursuzluqla nəticələnir: rəqəmin artırılması, qeydin əlavə edilməsi, `cap`/`testCap`
dəyərinin dəyişdirilməsi və ya `_rebaseline_*` qeydinin silinməsi/yenidən yazılması (bu qeydlər hər bir
tavanın niyə mövcud olduğuna dair audit izidir və fayl qeydləri ilə eyni `frozen` obyekti daxilində saxlanılır).
Həddi artıra bilən bot mövcud vəziyyətdən qəti şəkildə daha pis olardı. Reqressiya qoruması:
`tests/unit/verify-ratchet-bank.test.ts`.

Tapşırıq heç vaxt `release/*` budağına göndərmir — PR-ı insan birləşdirir, buna görə yanlış ölçmə
nəzərdən keçirilmədən tətbiq edilə bilməz.

## İcazə siyahısı siyasəti

Əvvəldən mövcud olan pozuntular səbəbindən uğursuz ola bilməyən hər bir yoxlama sabitləşdirilmiş icazə siyahısından
(məsələn, `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`) istifadə edir. Siyasət belədir:

**Əsas səbəbi aradan qaldırın; icazə siyahısından yalnız pozuntu əvvəldən mövcud olduqda və
eyni PR çərçivəsində düzəldilə bilmədikdə istifadə edin.**

İcazə siyahısına qeyd əlavə edərkən:

1. Əsaslandırmanı ehtiva edən şərh əlavə edin.
2. İzləmə məsələsinə istinad edin (məsələn, `// #3498 — Mərhələ 2 funksionallığı, hələ həyata keçirilməyib`).
3. Pozuntunu düzəldən eyni PR çərçivəsində qeydi silin — artıq aktiv pozuntunu
   istisna etməyən köhnəlmiş qeyd özü də qüsurdur (6A.3 köhnəlmiş-tətbiqetmə funksiyası
   həyata keçirildikdən sonra sahibsiz icazə siyahısı qeydi yoxlamanın uğursuz olmasına
   səbəb olacaq).

Testlərin daha tez keçməsi üçün icazə siyahısına qeydlər əlavə **etməyin**. Böyüyən
icazə siyahısı ilə uğurlu yoxlama yanlış keyfiyyət təəssüratı yaradır.

### PR-nizdə yoxlama uğursuz olduqda

1. **Yoxlama çıxışını diqqətlə oxuyun** — o, qaydanı hansı faylın və ya simvolun pozduğunu
   dəqiq göstərir.
2. **Pozuntunu düzəldin** — yoxlamaların əksəriyyəti kod düzgün olan kimi uğurla keçən
   deterministik fayl sistemi yoxlamalarıdır.
3. **Pozuntu əvvəldən mövcuddursa** (yəni onu siz yaratmamısınız, lakin yoxlama artıq
   onu əhatə edir): əsaslandırma şərhi və izləmə məsələsi ilə birlikdə icazə siyahısına qeyd əlavə edin.
4. **Yoxlama ratçetdirsə** (əhatə dairəsi, ESLint xəbərdarlıqları, təkrarlanma, mürəkkəblik):
   dəyişikliyiniz göstəricini pisləşdirib. Əsas problemi düzəldin və ya (nadir hallarda) dəyişiklik
   qəsdən edilibsə və göstəricinin pisləşməsi məqbuldursa, `npm run quality:ratchet -- --update`
   əmrini icra edin — lakin səbəbini PR təsvirində sənədləşdirin.
5. **Məsləhət xarakterli yoxlamalar** (`continue-on-error: true`) məlumat məqsədlidir — onlar
   birləşdirməni bloklamır, lakin CI xülasəsində görünür. Buna baxmayaraq, onları düzəldin.

---

## Yeni yoxlamanın əlavə edilməsi

1. `scripts/check/check-<name>.mjs` (və ya `.ts`) yaradın. Siyasət yoxlamaları 0/1 çıxış kodu ilə tamamlanır.
   Ratçet tipli yoxlamalar `collect-metrics.mjs` vasitəsilə `quality-metrics.json` faylına göstərici yazır.
2. `package.json` faylına `"check:<name>": "node scripts/check/check-<name>.mjs"` əlavə edin.
3. Onu `.github/workflows/ci.yml` daxilində uyğun tapşırığa
   (siyasət → `lint` və ya `docs-sync-strict`; ratçet → `quality-gate`) qoşun.
4. İcazə siyahısı varsa, köhnəlmiş qeydlərin avtomatik aşkarlanması üçün
   `scripts/check/lib/allowlist.mjs` faylındakı `reportStaleEntries()` funksiyasını tətbiq edin.
5. `tests/unit/build/` daxilində yoxlamanın aşkarlama məntiqini əhatə edən test yazın.
6. Bu sənədi yeniləyin (müvafiq tapşırıq cədvəlinə sətir əlavə edin).

---

## Agent alətləri: dövrədə LSP (seçimlidir)

CI yoxlamalarına əlavə olaraq, OmniRoute **seçimli** `agent-lsp` ilkin strukturunu
(layihə səviyyəli `.mcp.json`, Fase 7 Task 15) təqdim edir. TypeScript dil serverini
kodlaşdırma agentləri üçün əlçatan etmək məqsədilə `.mcp.json` yaradın ki, onlar kodu yazmazdan
**əvvəl** simvolları / diaqnostikanı müəyyənləşdirsinlər — bu, “uydurulmuş simvol” xətalarını
mənbədə azaldan və `typecheck:core` yoxlamasını tamamlayan, iddiadan əvvəl kompilyasiya yanaşmasıdır.
O, qəsdən avtomatik yüklənmir (MCP↔LSP körpüsünü siz seçir və yoxlayırsınız); nasaz qeyd yalnız
bağlantı xətasını jurnala yazır və sessiyaları heç vaxt pozmur.

---

## Rasionallaşdırma üçün görüləcək işlər siyahısı (ROI icmalı — Mərhələ 9 Dalğa 3)

Bu inventar 2026-06-17 tarixində `ci.yml` ilə tutuşdurulub (əvvəlki versiyada
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence` buraxılmışdı). Tutuşdurulmuş dəstin ROI icmalı
aşağıdakı rasionallaşdırma namizədlərini müəyyən etdi. **Birləşdirmələr mexaniki CI
dəyişiklikləridir; aktivləşdirmə/statusun aşağı salınması qərarları operator üçün saxlanılan siyasət qərarlarıdır.** Aşağıdakılardan heç biri
hələ tətbiq edilməyib.

**Yuxarıda sənədləşdirilməyənlər də var** (məsləhət xarakterli, zəif siqnal): `docs-lint` işi
(markdownlint + Vale, bütün iş üçün `continue-on-error`) və ayrıca skaner iş axınları
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. `semgrepFindings: 0`
`quality-baseline.json` daxilindədir, lakin `ci.yml` daxilində bloklayıcı ratchet-ə qoşulmayıb — metrik
hazırda sahibsizdir.

### Birləşdirmə / dublikatların aradan qaldırılması (mexaniki, daha az riskli)

Hər bir namizəd 2026-06-17 tarixində aktiv keçid vəziyyəti ilə müqayisədə yoxlanılıb (etibar et, amma yoxla);
bir neçə «aşkar» birləşdirmənin əslində texniki borcu gizlətdiyi üzə çıxdı və onlar **təmiz şəkildə birbaşa əvəzlənə bilmir**.

- **`check:docs-sync` iki dəfə icra olunur** — `lint` işində ayrıca və yenidən `check:docs-all` (`docs-sync-strict`) daxilində, həmçinin husky pre-commit hook-unda. ✅ **TAMAMLANDI** — ayrıca `lint` çağırışı silindi.
- **CVE skanı** — ❌ **Təmiz birləşdirmə DEYİL.** `audit:deps` istənilən yüksək/kritik CVE olduqda sərt şəkildə uğursuz olur; `check:vuln-ratchet` (osv) isə yalnız baza səviyyəsi ilə müqayisədə _reqressiya_ olduqda uğursuz olur (hazırda 1 MODERATE). Semantikaları fərqlidir — `audit:deps` silinsəydi, mütləq yüksək/kritik keçid itirilərdi. Hər ikisini saxlayın.
- **Dövr aşkarlanması** — ❌ **Təmiz birləşdirmə DEYİL.** `check:circular-deps` (dpdm) **91 dövr** bildirir (məhz buna görə məsləhət xarakterlidir); əvvəlcə onlar həll edilmədən bloklayıcı səviyyəyə qaldırıla bilməz və yaşıl statuslu, seçilmiş `check:cycles` ilə müqayisədə daha geniş əhatə dairəsinə malikdir. `check:cycles` bloklayıcı olaraq saxlanılsın; 91 dpdm dövrünün həlli ayrıca görüləcək işdir.
- **Mürəkkəblik** — ✅ **TAMAMLANDI** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): bir ESLint keçidi, cyclomatic+max-lines və cognitive baza səviyyələrinin müstəqil qalması üçün ruleId üzrə hesablanır; ayrıca `check:complexity` / `check:cognitive-complexity` lokal `--update` üçün saxlanılır.
- **`/api` anti-hallüsinasiya** — ✅ **TAMAMLANDI** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): `src/app/api` üçün bir FS inventarı, openapi-routes + docs-symbols hələ də müstəqil hesabat verir; ayrı-ayrı yoxlamalar lokal icralar üçün saxlanılır.
- **`check:node-runtime` 11 işdə icra olunur** — ⚠️ **aşağı ROI.** Hər biri ayrıca runner-dır və yoxlama <1s çəkir; ucuz, hər iş üzrə qoruyucunun itirilməsi müqabilində ümumi qənaət təxminən 10s-dir. Yaradacağı qarışıqlığa dəyməz.
- **CI lint-də `typecheck:noimplicit:core`** — ✅ **lint işindən silindi** (məsləhət xarakterli `continue-on-error` idi); bloklayıcı tip səthi `typecheck:core` + `check:type-coverage` kombinasiyasıdır. Lokal skript saxlanılıb.

### Aktivləşdirmə / qərar vermə (operator siyasəti)

- `check:openapi-security-tiers` (məsləhət xarakterli) — ❌ **Təmiz şəkildə aktivləşdirilə BİLMƏZ.** O, 0 çıxış kodu ilə bitir, lakin `LOCAL_ONLY_API_PREFIXES` altındakı bir neçə `traffic-inspector` marşrutunda `x-loopback-only: true` annotasiyasının olmadığını bildirir. Onu məcburi etmək üçün əvvəlcə həmin annotasiyaları `openapi.yaml` faylına əlavə etmək lazımdır.
- `typecheck:noimplicit:core` (məsləhət xarakterli) — əsasən bloklayıcı `check:type-coverage` ratchet-i ilə əhatə olunur. Ratchet-ə çevirin və ya təkrarlanan ikinci `tsc` keçidini silin.
- `test:vitest:ui` (indi **bloklayıcıdır**) — əvvəlcədən mövcud olan xətalar `vitest.config.ts` daxilində `// #8618` izləmə şərhləri ilə açıq şəkildə istisna edilib; yeni xətalar işi uğursuz edir.
- `check:secrets` (gitleaks, 3 sənədləşdirilmiş yanlış müsbət nəticədə dondurulmuş bloklayıcı ratchet) — 0-a çatmaq üçün bu 3 nəticəni icazə siyahısına əlavə edin və ya məsləhət xarakterli səviyyəyə endirin. GitHub-un daxili secret-scanning funksiyası + `check:public-creds` ilə üst-üstə düşür.
- `check:pr-evidence` (bloklayıcıdır, PR mətnində grep axtarışı aparır) — yanlış müsbət nəticə riski yüksəkdir; silinərsə, Hard Rule #18 tələbinin tətbiqini zəiflədir, buna görə də bu, həqiqi siyasət qərarıdır.
- `semgrep` (ayrıca, məsləhət xarakterli) — OWASP ailələri üzrə CodeQL ilə üst-üstə düşür; onun baza səviyyəsini ratchet-ə qoşun və ya silin.

---

## Əlaqəli sənədlər

- Təchizat zənciri (mənşə, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — açar dəstlərinin uyğunluq keçidi

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, `i18n-ui-coverage` işi).
Hər bir `src/i18n/messages/<locale>.json` faylındakı son səviyyə açarları dəstini `en.json` ilə müqayisə edir və
açarın nə vaxt əlavə edilməsindən asılı olmayaraq, hər hansı çatışmayan və ya əlavə son səviyyə açarı olduqda uğursuz olur. `__MISSING__:` yer tutucuları
mövcud hesab edilir (onların məzmunu nisbət keçidinin işidir). Bu, fərqə əsaslanan/faiz əsaslı iki keçidin tam
tamamlayıcısıdır: `check-ui-keys-coverage` hər bir lokal üçün 80 % minimum həddi tətbiq edir
(~13,000 açardan 43-nün olmaması yenə də 99.7 % kimi görünür), `check-new-key-coverage` isə
yalnız PR tərəfindən `en.json` faylına əlavə edilən açarları qiymətləndirir. Lokal paketi, onun budağının ayrıldığı günün `en.json` faylından yaradılır
və baza yeni açarlar əlavə etməyə davam edərkən tərcümə prosesi günlərlə çəkir; paket PR-ı özü heç bir
açar əlavə etmir, buna görə də paket 1 (#13044) doqquz lokalda 43 açar əskik, paket 2 (#13660) isə səkkiz lokalda 10 açar əskik halda birləşdiriləndə (2026-09-15) hər iki əlaqəli keçid susdu.
Uğursuzluğu
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers` ilə düzəldin; `extra` son səviyyə açarı
mənbənin onu sildiyini bildirir — onu lokaldan silin. `--warn` uğursuzluq yaratmadan hesabat verir.
`--catalog=cli` eyni müqayisəni `bin/cli/locales` üzərində işlədir (`npm run i18n:check-keys:cli`);
hər iki addım `i18n-ui-coverage` işindədir.

#### `check-new-key-coverage` — yeni açarlar üçün i18n keçidi

`check-ui-value-drift` keçidinin əlaqəli keçididir. O, ingiliscə dəyərin tərcümələri yenilənmədən **yenidən yazıldığı**
halı aşkarlayır; bu isə bəzi lokalların heç vaxt almadığı ingiliscə açarın **əlavə edildiyi**
halı aşkarlayır.

`check-ui-keys-coverage` bu kateqoriyanı görə bilmir: o, hər lokal üçün faiz həddi tətbiq edir və
~13,000 son səviyyə açarından on birinin olmaması əhatə səviyyəsini 99.9 %-də saxlayır. Dil üzrə faiz
“bu funksiya tərcümə edilmədən buraxılıb” fikrini ifadə edə bilməz — bütöv bir funksiya yeni lokala heç bir
mətn olmadan əlavə edilə və rəqəmi heç dəyişdirməyə bilər.

Onun kodlaşdırdığı insident: Orchestration Canvas-ın 3-cü mərhələsinin on bir açarı həmin vaxt mövcud olan
42 lokalın hamısına tərcümə edilmişdi. Bir neçə saat sonra Aİ dilləri paketi (#13044) repodakı
lokalların sayını 51-ə çatdırdı və doqquz yeni lokal (`el`, `et`, `ga`, `hr`, `lt`, `lv`, `mt`, `sl`, `sr`) bu açarları heç vaxt
almadı. `deepMergeFallback` olmayan açarı ingiliscə mətnlə əvəz edir, buna görə uğursuzluq
boş interfeys deyil, tərcümə edilməmiş interfeys şəklində idi — real və quruluş etibarilə səssiz.

Əlaqəli keçid kimi, bu da **fərqi nəzərə alır**: birləşdirmə bazasındakı ingiliscə məzmunu işçi
ağacla müqayisə edir, buna görə əvvəlcədən mövcud olan boşluqlar dondurulmuş qalır və keçidin aktivləşdirilməsi üçün miqrasiya tələb olunmur. Çıxış yolu:
`__MISSING__:<english>` icra vaxtında düzgün davranışı qoruyaraq tərcüməni təxirə salır. `vi`
yer tutucuları qadağan edir (`tests/unit/i18n-vi-completeness.test.ts`) və real tərcümə tələb edir.

#### `check-vitest-exclusions` — dayandırılmış testlər üçün keçid

`vitest.config.ts` faylının `exclude` siyahısındakı fayl icra edilməyən testdir və ağacı oxuyan şəxsə
əhatə kimi görünür. Altmış iki fayl
`// #8618 — pre-existing failure; remove this exclusion when fixed` şərhinin arxasında toplandı. #8618 məsələsi
2026-08-11 tarixində bağlandı, lakin onun izlədiyi siyahı 45 qeyddən 62-yə qədər artdı və hər yeni qeyd
artıq bağlanmış məsələyə işarə edən şərhi miras aldı. Siyahı nəhayət fayl-fayl ölçüləndə (#13204), **62 fayldan 51-i
mənbədə heç bir dəyişiklik olmadan cari ağacda uğurla keçdi**.

Keçid real fayla uyğun gələn hər bir istisnanın (a) izləmə məsələsini göstərməsini və
(b) ölçülmüş statusu ilə birlikdə `config/quality/vitest-exclusions.json` faylında yer almasını tələb edir; beləliklə, yeni istisnanın əlavə edilməsi
60 qeyddən ibarət massivdə daha bir sətir olmaq əvəzinə, ayrıca faylda nəzərdən keçirilə bilən fərqə çevrilir. O, qəsdən
istisna edilmiş testləri yenidən işə salmır — bu, ~10 dəqiqə çəkir və dövri işə aiddir; inventar
hər birinin son ölçülmə vaxtını qeyd edir.
