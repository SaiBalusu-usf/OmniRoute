# Quality Gates Reference (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

Ten dokument stanowi wiążący materiał referencyjny dla wszystkich bramek jakości CI w OmniRoute.
Opisuje każdą bramkę, zakres jej weryfikacji, zadanie CI, w którym jest uruchamiana, to, czy
wykorzystuje bazową wartość mechanizmu zapadkowego, czy zasady zaliczenia/niezaliczenia, oraz to,
czy blokuje kompilację, czy ma charakter doradczy.

Krótkie podsumowanie i zasady listy dozwolonych wyjątków znajdują się w sekcji „Quality Gates & Ratchets”
w pliku `AGENTS.md`. Krytyczną ocenę, klasyfikację dojrzałości oraz niezależny od narzędzi
plan odtworzenia tego samego systemu zawiera
[Podręcznik bramek jakości](../ops/QUALITY_GATE_PLAYBOOK.md).

---

## Wykaz bramek (~90 skryptów)

Skrypty znajdują się w katalogach `scripts/check/` (bramki zasad) i `scripts/quality/` (mechanizm zapadkowy).
Źródłem prawdy dla CI jest plik `.github/workflows/ci.yml`.

### Szybka ścieżka PR-ów wydania (`quality.yml`)

Plik `.github/workflows/quality.yml` jest uruchamiany dla PR-ów kierowanych do `release/**`. Umożliwia sprawne
przetwarzanie gałęzi współtwórców dzięki szybkim bramkom filtrowanym według ścieżek, a w przypadku zmian
w kodzie zapewnia dodatkowo jeden doradczy sygnał dotyczący kompilacji produkcyjnej:

| Zadanie                                          | Zakres                                                                                                                                                                                                                                                            | Blokowanie                                                                                           |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `Build (advisory)`                               | PR-y z kodem niebędące wersjami roboczymi oraz gałęzie kolejki Mergify; Node 24, `npm-ci-retry`, `check:node-runtime`, `npm run build` z `OMNIROUTE_USE_TURBOPACK=1`; bez przesyłania artefaktu, ponieważ żadne późniejsze zadanie jakości go nie wykorzystuje    | **Doradcze** (`continue-on-error: true`; usunąć po tygodniu stabilnych uruchomień dla PR-ów wydania) |
| `Docs Gates (fast-path)`                         | PR-y z dokumentacją/kodem; odwołania w dokumentacji API oraz pełny zestaw dokumentacji                                                                                                                                                                            | Tak                                                                                                  |
| `Fast Quality Gates`                             | PR-y z kodem; kontrole statyczne, sprawdzanie typów, sprawdzanie typów panelu, testy jednostkowe objętych zmianami elementów                                                                                                                                      | Tak                                                                                                  |
| `Forgotten sibling tests`                        | PR-y z kodem; śledzenie zmienionych modułów do statycznych konsumentów i potencjalnych testów pokrewnych; ścieżki przez pliki zbiorczo eksportujące i importy dynamiczne są raportowane jako diagnostyka doradcza z odwołaniami do wyjątków na liście dozwolonych | **Doradcze**                                                                                         |
| `Vitest (fast-path)`                             | PR-y z kodem; szybki zestaw testów vitest                                                                                                                                                                                                                         | Tak                                                                                                  |
| `Unit Tests fast-path`                           | PR-y z kodem; zestaw testów jednostkowych podzielony na 4 fragmenty                                                                                                                                                                                               | Tak                                                                                                  |
| `No new ESLint warnings`                         | PR-y z kodem; mechanizm ochronny lintowania uwzględniający wyciszenia                                                                                                                                                                                             | Tak dla PR-ów z tego samego repozytorium, doradcze dla forków                                        |
| `Merge integrity (changelog + generated skills)` | PR-y niebędące wersjami roboczymi; synchronizacja dziennika zmian i wygenerowanych umiejętności                                                                                                                                                                   | Tak dla PR-ów z tego samego repozytorium, doradcze dla forków                                        |

#### Raport zapomnianych testów pokrewnych

Polecenie `npm run check:forgotten-sibling-tests` ponownie wykorzystuje mechanizm rozpoznawania importów
stanowiący podstawę mapy wpływu na testy. Dla każdego zmienionego modułu produkcyjnego raportuje
deterministyczne łańcuchy `zmieniony moduł/symbol -> statyczny konsument -> potencjalny test pokrewny`,
jeśli potencjalnego testu nie ma w różnicy zmian pull requestu. Podsumowanie w formacie Markdown oraz
wynik JSON są zachowywane jako artefakt przepływu pracy `forgotten-sibling-tests` na potrzeby kalibracji
przed wdrożeniem trybu blokującego.

Ponowne eksporty z plików zbiorczych i importy dynamiczne służą wyłącznie do diagnostyki rozpoznawania;
nigdy nie powodują wystąpienia blokującego wyniku. Zatwierdzone wyjątki znajdują się w pliku
`config/quality/forgotten-sibling-allowlist.json`. Każdy wpis musi wskazywać konsumenta i potencjalny
test, zawierać konkretne uzasadnienie oraz odsyłać do zgłoszenia GitHub lub pull requestu. Nieprawidłowo
sformułowane wpisy powodują błąd. Wyjątki nie mogą ukrywać usuniętego potencjalnego testu ani różnicy,
która dodaje `.skip`/`.todo`; osłabianie asercji i inne formy maskowania pozostają w gestii niezależnie
blokującej bramki `check:test-masking`.

### Zadanie: `lint`

Uruchamiane dla każdego PR-u do `main`. W przypadku niepowodzenia blokuje scalanie.

| Skrypt (`npm run ...`)            | Sprawdza                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Blokujący                                    |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `check:node-runtime`              | Wersja Node.js mieści się w obsługiwanym zakresie                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Tak                                          |
| `check:cycles`                    | Importy cykliczne — wszystkie moduły `src/` + `open-sse/`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Tak                                          |
| `check:route-validation:t06`      | Obecność schematów Zod we wszystkich trasach (polityka poziomu 6)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Tak                                          |
| `check:any-budget:t11`            | Liczba wystąpień `@ts-expect-error // any` nie przekracza limitu (catraca poziomu 11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Tak                                          |
| `check:provider-consistency`      | Każdy dostawca w `providers.ts` ma odpowiadający mu wpis w `providerRegistry.ts` (i odwrotnie, w ramach listy dozwolonych)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Tak                                          |
| `check:model-lifecycle`           | Trzy ręcznie utrzymywane tabele routingu pozostają spójne z zapisaną w repozytorium migawką cyklu życia (#11503): `FITNESS_TABLE` (`taskFitness.ts`) nie przyznaje oceny żadnemu wycofanemu identyfikatorowi, który `REGISTRY` może trasować; każdy cel `BUILT_IN_ALIASES` znajduje się w `REGISTRY` i nie występuje w migawce wycofanych identyfikatorów; każdy wycofany identyfikator nadal obecny w `REGISTRY` jest przekierowywany lub wymieniony w `allowedRetiredInCatalog`; a żadne źródło ani cel `DEFAULT_DEGRADATION_MAP` nie jest oznaczone jako wycofane w tej migawce. Nie dowodzi to, że model jest obecnie obsługiwany przez aktywną usługę nadrzędną. Tryb offline — porównuje z `config/quality/model-lifecycle.json`, odświeżanym ręcznie za pomocą `npm run quality:refresh-model-lifecycle` (wymaga sieci; nie jest podłączone do CI). `allowedRetiredInCatalog` jest stopniowo ograniczaną listą wyjątków: wpis należy dodawać wyłącznie wraz ze zgłoszeniem śledzącym. | Tak                                          |
| `check:fetch-targets`             | Każde `fetch("/api/...")` w klienckim kodzie `src/` prowadzi do rzeczywistego pliku `route.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Tak                                          |
| `check:deps`                      | Wszystkie zależności możliwe do zainstalowania za pomocą `npm install` ze wszystkich plików `package.json` w repozytorium znajdują się w `dependency-allowlist.json`; nowe pakiety bez przypiętej wersji lub podszywające się pod inne pakiety są oznaczane                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Tak                                          |
| `audit:deps`                      | `npm audit` (katalog główny + electron) — brak ostrzeżeń o wysokim/krytycznym poziomie ważności (częściowo pokrywa się z `check:vuln-ratchet` narzędzia osv; zobacz Rejestr racjonalizacji)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Tak                                          |
| `check:lockfile`                  | Integralność `package-lock.json` — rejestr https, skróty integralności, brak nadpisań hosta                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Tak                                          |
| `check:licenses`                  | Lista dozwolonych licencji SPDX dla zależności produkcyjnych                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Tak                                          |
| `check:tracked-artifacts`         | Brak artefaktów kompilacji / zatwierdzonych dowiązań symbolicznych `node_modules` (uruchamiane również w husky pre-commit; pre-push jest celowo uproszczony — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Tak                                          |
| `check:vitest-exclusions`         | Każde wykluczenie Vitest wskazuje zgłoszenie śledzące i znajduje się w `config/quality/vitest-exclusions.json` (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Tak                                          |
| `check:file-size`                 | Żaden plik źródłowy nie przekracza limitu dla danego rozszerzenia (mechanizm zapadkowy: duże pliki zamrożone na liście `frozen`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Tak                                          |
| `check:error-helper`              | Odpowiedzi błędów w executorach/handlerach używają `buildErrorBody()` / `sanitizeErrorMessage()` (Twarda reguła nr 12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Tak                                          |
| `check:migration-numbering`       | Pliki SQL migracji są numerowane kolejno, bez luk ani duplikatów                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Tak                                          |
| `check:public-creds`              | Brak literałów OAuth `client_id`/`client_secret` ani kluczy Firebase Web poza `publicCreds.ts` (Twarda reguła nr 11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Tak                                          |
| `check:db-rules`                  | Brak surowego SQL poza modułami `src/lib/db/`; brak importów zbiorczych z `localDb.ts` (Twarde reguły nr 2/5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Tak                                          |
| `check:known-symbols`             | Wykonawcy dostawców, strategie routingu i translatory zarejestrowane w swoich tabelach dyspozytorskich odpowiadają plikom na dysku — bez osieroconych ani niezadeklarowanych symboli                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Tak                                          |
| `check:route-guard-membership`    | Każda trasa uruchamiająca proces podrzędny jest sklasyfikowana przez `isLocalOnlyPath()` (Twarde reguły nr 15/17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Tak                                          |
| `check:test-discovery`            | Każdy plik `*.test.ts` / `*.spec.ts` w repozytorium jest wykrywany przez co najmniej jeden mechanizm uruchamiania testów (mechanizm zapadkowy: lista osieroconych plików w `test-discovery-baseline.json` może się tylko kurczyć)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Tak                                          |
| `check:agent-skills-sync`         | Wygenerowane artefakty umiejętności agentów są zgodne z katalogiem źródłowym (brak rozbieżności)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `check:provider-asset-provenance` | Logo/zasoby dostawców mają zarejestrowany wpis dotyczący pochodzenia                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `lint:json`                       | Pliki konfiguracyjne JSON są poprawnie parsowane i spełniają reguły lintowania repozytorium                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `typecheck:core`                  | Kompilacja TypeScript bez błędów (tylko ostrzeżenia informacyjne)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Tak                                          |
| `typecheck:noimplicit:core`       | Rygorystyczne `noImplicitAny` — ukierunkowane na przyszłość; wiele istniejących miejsc wywołań nadal wymaga adnotacji                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | **Informacyjne** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `tsc` ograniczone do `src/app/(dashboard)/**` (#7033) — starannie dobrana lista 27 dozwolonych plików w `typecheck:core` nie obejmuje żadnych plików TSX panelu, a `next build` również nigdy nie sprawdza ich typów (`next.config.mjs` ustawia `ignoreBuildErrors: true`), przez co regresje związane z osieroconymi identyfikatorami (#6625/#6909) były niewidoczne dla CI. Porównuje wyniki z zamrożoną wartością bazową liczby błędów dla każdego pliku i kodu TS (`config/quality/dashboard-typecheck-baseline.json`, ten sam wzorzec wymuszania aktualności co w `check:known-symbols`) — tylko NOWE błędy wykraczające poza wartość bazową powodują niepowodzenie bramki; po naprawieniu istniejącego wcześniej błędu obniż wartość bazową za pomocą `--update`.                                                                                                                                                                                                                      | Tak                                          |

### Zadanie: `quality-gate`

Uruchamiane po `test-coverage`. W przypadku niepowodzenia blokuje scalanie.

| Skrypt                       | Sprawdza                                                                                                                                                                                        | Blokujące                          |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `quality:collect`            | Generuje `quality-metrics.json` (liczba ostrzeżeń ESLint, pokrycie z połączonego raportu fragmentów)                                                                                            | Tak (przed mechanizmem zapadkowym) |
| `quality:ratchet`            | Żadna metryka w `quality-baseline.json` nie uległa pogorszeniu (ostrzeżenia ESLint ≤ wartość bazowa; pokrycie ≥ wartość bazowa)                                                                 | Tak                                |
| `check:duplication`          | Duplikacja kodu (jscpd@4) nie przekracza wartości bazowej w `quality-baseline.json`                                                                                                             | Tak                                |
| `check:complexity`           | Złożoność cyklomatyczna na poziomie pliku nie przekracza limitu (podstawowe reguły ESLint `complexity` + `max-lines-per-function`)                                                              | Tak                                |
| `check:cognitive-complexity` | Mechanizm zapadkowy złożoności poznawczej (`eslint-plugin-sonarjs`) — oddzielne uruchomienie ESLint; CI wykonuje oba sprawdzenia połączone w jeden krok `check:complexity-ratchets`             | Tak                                |
| `check:dead-code`            | Mechanizm zapadkowy nieużywanych eksportów/plików (knip) nie wykazuje pogorszenia względem wartości bazowej                                                                                     | Tak                                |
| `check:compression-budget`   | Budżet testu wydajności kompresji — minimalne progi oszczędności tokenów dla poszczególnych silników nie mogą ulec pogorszeniu                                                                  | Tak                                |
| `check:type-coverage`        | Mechanizm zapadkowy procentowego pokrycia typami (`type-coverage`) nie wykazuje pogorszenia; w dużej mierze zastępuje `typecheck:noimplicit:core`                                               | Tak                                |
| `check:codeql-ratchet`       | Liczba otwartych alertów CodeQL nie wzrasta (odczyt przez `gh api`; łagodne pominięcie bez tokenu) — częstotliwość odświeżania i ręczne wyzwalanie: zobacz „Mechanizm zapadkowy CodeQL” poniżej | Tak                                |

### Zadanie: `quality-extended`

Całe zadanie ma charakter doradczy (`continue-on-error: true`). Mechanizmy zapadkowe oparte na npm są uruchamiane
faktycznie; zewnętrzne skanery są instalowane za pomocą `gh release download` i samoczynnie pomijają działanie (kod wyjścia 0),
gdy plik binarny jest nadal niedostępny.

| Skrypt                   | Sprawdza                                                                                                                                                                                                                    | Blokujące    |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `check:circular-deps`    | Brak cyklicznych zależności (dpdm)                                                                                                                                                                                          | **Doradcze** |
| `check:bundle-size`      | Rozmiar pakietu nie przekracza limitu                                                                                                                                                                                       | **Doradcze** |
| `check:secrets`          | Skanowanie pod kątem sekretów (gitleaks) — pomijane, jeśli plik binarny jest niedostępny                                                                                                                                    | **Doradcze** |
| `check:vuln-ratchet`     | Podatności zależności (osv-scanner) nie ulegają regresji — pomijane, jeśli plik binarny jest niedostępny                                                                                                                    | **Doradcze** |
| `check:workflows`        | Lintowanie przepływów pracy (actionlint + zizmor) — pomijane, jeśli pliki binarne są niedostępne                                                                                                                            | **Doradcze** |
| `check:openapi-breaking` | Zmiany niekompatybilne w kontrakcie publicznego API (`openapi.yaml`) względem gałęzi bazowej (oasdiff) — emituje `openapiBreaking=N`; pomijane, jeśli oasdiff jest niedostępny lub nie można rozpoznać specyfikacji bazowej | **Doradcze** |

### Zadanie: `docs-sync-strict`

Uruchamiane dla każdego PR do `main`. W przypadku niepowodzenia blokuje scalanie.

| Skrypt                         | Sprawdza                                                                                                                                                                                              | Blokujące                   |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| `check:docs-all`               | Meta-bramka, która kolejno uruchamia 6 poniższych bramek podrzędnych                                                                                                                                  | Tak                         |
| ↳ `check:docs-sync`            | Spójność wersji CHANGELOG / OpenAPI / llm.txt                                                                                                                                                         | Tak                         |
| ↳ `check:docs-counts`          | Liczby w treści (liczba dostawców, liczba migracji itp.) mieszczą się w oknie mechanizmu zapadkowego względem rzeczywistych wartości                                                                  | Tak                         |
| ↳ `check:env-doc-sync`         | Każda zmienna środowiskowa w `.env.example` jest udokumentowana w tabeli dokumentacji i odwrotnie                                                                                                     | Tak                         |
| ↳ `check:deprecated-versions`  | Brak przestarzałych ciągów wersji w dokumentacji                                                                                                                                                      | Tak                         |
| ↳ `check:doc-links`            | Wewnętrzne odnośniki markdown w dokumentacji wskazują istniejące pliki (format `[tekst]`/`(ścieżka)`)                                                                                                 | Tak                         |
| ↳ `check:fabricated-docs`      | Trasy, zmienne środowiskowe, polecenia CLI, nazwy hooków i ścieżki plików przywołane w dokumentacji istnieją w bazie kodu. Twarda bramka przy użyciu `--strict`; miękkie niepowodzenie bez tej flagi. | Tak (przez `--strict` w CI) |
| `check:cli-i18n`               | Ciągi poleceń CLI są obecne we wszystkich plikach ustawień regionalnych i18n                                                                                                                          | Tak                         |
| `check:openapi-coverage`       | Specyfikacja OpenAPI obejmuje co najmniej określone przez mechanizm zapadkowy minimum rzeczywistych tras                                                                                              | Tak                         |
| `check:openapi-security-tiers` | Adnotacje poziomów zabezpieczeń w `openapi.yaml` są zgodne z klasyfikacjami w `routeGuard.ts`                                                                                                         | **Doradcze**                |
| `check:openapi-routes`         | Każda ścieżka w `openapi.yaml` wskazuje rzeczywisty plik `route.ts` (ochrona przed halucynacjami)                                                                                                     | Tak                         |
| `check:docs-symbols`           | Każde odwołanie `/api/...` w `docs/**/*.md` wskazuje rzeczywisty plik `route.ts` (ochrona przed halucynacjami)                                                                                        | Tak                         |
| `dryf tłumaczeń i18n`          | Nieprzetłumaczone klucze w plikach ustawień regionalnych i18n — tylko ostrzeżenie                                                                                                                     | **Doradcze**                |

### Zadanie: `i18n-ui-coverage`

| Skrypt                            | Weryfikuje                                                                                                                                                                                                                                      | Blokujący    |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `check-ui-keys-coverage` (inline) | Pokrycie kluczy i18n interfejsu użytkownika wynosi ≥ 65%                                                                                                                                                                                        | Tak          |
| `check-ui-value-drift` (inline)   | Zmieniona angielska **wartość** nie pozostawia nieaktualnego tłumaczenia                                                                                                                                                                        | Tak          |
| `check-new-key-coverage` (inline) | **Nowy** angielski klucz trafia do każdej lokalizacji                                                                                                                                                                                           | Tak          |
| `check-translation-ratio`         | Współczynnik rzeczywistych tłumaczeń dla każdej lokalizacji (wartości identyczne z angielskimi / symbole zastępcze / brakujące liście spoza listy dozwolonych) nie może przekraczać `config/quality/i18n-translation-baseline.json` + marginesu | **Doradczy** |

Wymaga `fetch-depth: 0` — bramka wykrywająca rozbieżności wartości porównuje `en.json` z bazą scalania.

#### `check-ui-value-drift` — bramka nieaktualnych tłumaczeń

Wykrywa jedną regresję i18n, której pozostałe bramki z przyczyn strukturalnych nie są w stanie zauważyć: angielska wartość
zostaje zmieniona, a tłumaczenia utworzone na podstawie _poprzedniej_ angielskiej wersji pozostają bez zmian, przez co
użytkownicy nieanglojęzyczni nadal czytają pewnie brzmiącą, lecz obecnie błędną treść.

Taka sytuacja rzeczywiście trafiła do wydania. `oauthModal.googleOAuthWarning` został zmieniony po dodaniu
pomocnika logowania Antigravity (#5203); **39 z 43 lokalizacji** zachowało tekst nakazujący operatorom „skopiować
pełny adres URL i wkleić go poniżej” — w przypadku tego dostawcy nie da się w ten sposób ukończyć procesu. Problem
pozostał niezauważony aż do #8463, ponieważ:

- `sync-ui-keys` uzupełnia wyłącznie **nieobecne** klucze, nigdy te **nieaktualne**;
- `check-ui-keys-coverage` sprawdza _obecność_ kluczy, więc nieaktualne tłumaczenie jest uznawane za pokryte;
- `check-translation-drift` śledzi kopie dokumentacji `docs/i18n/<locale>/**.md` —
  nigdy nie odczytuje `src/i18n/messages/*.json`. Blokuje w zadaniu `docs-sync-strict` od
  ponownej synchronizacji 2026-09: edycja głównego dokumentu → `npm run i18n:run -- --files=<doc>` (na poziomie sekcji, niski koszt).

**Uwzględnia różnice, nie korzysta z bazowego punktu odniesienia.** Porównuje `en.json` z bazy scalania
z drzewem roboczym; dla każdego klucza, którego angielska wartość uległa zmianie, każda lokalizacja nadal zawierająca
niezmienione tłumaczenie jest nieaktualna. Celowo **zamraża istniejący dług** — różnica
nie pozwala ustalić, z której starej angielskiej wersji pochodzi istniejące od dawna tłumaczenie, dlatego bramka ocenia
wyłącznie elementy zmodyfikowane przez bieżącą zmianę. Alternatywa (bazowy zestaw skrótów dla poszczególnych kluczy) wymagałaby
wygenerowanego pliku o rozmiarze około 600 KB, 3× większego od największego istniejącego bazowego punktu odniesienia, zmieniającego się przy każdym PR dotyczącym i18n.

Można spełnić jej wymagania na dwa sposoby:

1. zaktualizować odpowiednie tłumaczenia lub
2. ustawić je na `__MISSING__:<new english>` — środowisko uruchomieniowe wyświetli wtedy poprawiony tekst angielski
   (`src/i18n/request.ts::deepMergeFallback`, #7258), a klucz trafi do kolejki tłumaczeń.

Jeśli zmieniło się **znaczenie** ciągu, najlepiej **zmienić nazwę klucza**: nowy klucz nie może odziedziczyć
nieaktualnego tłumaczenia. Ten wzorzec zastosowano w #8463.

```bash
npm run i18n:check-value-drift          # tryb ścisły (uruchamiany przez CI)
npm run i18n:check-value-drift:warn     # tylko raport
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

Kończy działanie z kodem 0 i komunikatem `SKIP reason=base-unresolved`, gdy nie można odczytać katalogu bazowego (płytki
klon bez bazowego odwołania), analogicznie do `check-openapi-breaking`.

### Zadanie: `i18n`

Pełna macierz walidacji i18n (jedno zadanie na lokalizację). Całe zadanie ma charakter doradczy.

| Skrypt                          | Weryfikuje                                     | Blokujący                                                   |
| ------------------------------- | ---------------------------------------------- | ----------------------------------------------------------- |
| `validate_translation.py quick` | Kompletność tłumaczenia dla każdej lokalizacji | **Doradczy** (`continue-on-error: true` dla całego zadania) |

### Zadanie: `pr-test-policy`

Uruchamiane wyłącznie dla pull requestów.

| Skrypt                 | Weryfikuje                                                                                                                                                         | Blokujący |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| `check:pr-test-policy` | PR-y zmieniające kod produkcyjny w `src/`, `open-sse/`, `electron/` lub `bin/` muszą zawierać lub aktualizować testy (twarda reguła nr 8)                          | Tak       |
| `check:test-masking`   | Zmienione pliki testowe nie zmniejszają łącznej liczby asercji ani nie dodają tautologii `assert.ok(true)`                                                         | Tak       |
| `check:pr-evidence`    | Treść PR-a przytacza dowody z testów/VPS dotyczące zmiany (automatyzuje twardą regułę nr 18 przez przeszukiwanie treści PR-a — rozwiązanie kruche, zobacz Backlog) | Tak       |

### Zadanie: `test-vitest`

Uruchamiane po `build`. Niepowodzenie blokuje scalanie.

| Zestaw           | Sprawdza                                                                                | Blokujący                                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | Serwer MCP (110 narzędzi), autoCombo, pamięć podręczna — narzędzie uruchamiające vitest | Tak                                                                                                                                             |
| `test:vitest:ui` | Testy komponentów interfejsu użytkownika — narzędzie uruchamiające vitest               | **Blokujący** — istniejące wcześniej niepowodzenia są jawnie wykluczone w `vitest.config.ts`; nowe niepowodzenia powodują niepowodzenie zadania |

### Nocne przepływy pracy (zaplanowane, doradcze)

Są uruchamiane zgodnie z harmonogramem cron (oraz przez `workflow_dispatch`), nigdy dla żądań PR. Wszystkie mają charakter doradczy.

| Przepływ pracy         | Sprawdza                                                                                                                                                                                | Blokujący    |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `nightly-property`     | Testy właściwości fast-check z losowym ziarnem i dużą liczbą uruchomień                                                                                                                 | **Doradczy** |
| `nightly-resilience`   | Próg wzrostu sterty, chaotyczne wstrzykiwanie błędów, testy obciążeniowe/długotrwałe k6                                                                                                 | **Doradczy** |
| `nightly-llm-security` | Ochrona przed wstrzyknięciami promptfoo (tryb blokowania) oraz sondy garak (pomijane bez sekretu dostawcy)                                                                              | **Doradczy** |
| `nightly-schemathesis` | Fuzzing kontraktu OpenAPI (schemathesis) względem działającej instancji OmniRoute z użyciem `docs/openapi.yaml` — ujawnia naruszenia specyfikacji / nieobsłużone błędy 500 (Faza 8 B.4) | **Doradczy** |
| `nightly-mutation`     | Wynik testów mutacyjnych Stryker dla szybkiej ścieżki testów jednostkowych — ocalałe mutanty ujawniają słabe asercje                                                                    | **Doradczy** |
| `nightly-compat`       | Macierz zgodności silnika Node dla obsługiwanych zakresów `engines.node`                                                                                                                | **Doradczy** |

---

## Faza szybkości (2026-08-30 → v4.0 LTS): każdy poziom bazowy poluzowany o 20%

Decyzja właściciela (2026-08-30): do czasu modularyzacji w v4.0 szybkość dostarczania jest ważniejsza
niż utrzymywanie długu na dotychczasowym poziomie. Każdy **liczbowy** bazowy próg zapadkowy został
poluzowany o 20% w ramach jednej audytowalnej operacji, a faza jest zadeklarowana w
`config/quality/quality-baseline.json`:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| Co się zmieniło                                                                                                                                                                                                                                                  | Gdzie                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — liczby, dla których mniej znaczy lepiej, ×1.2; wartości procentowe, dla których więcej znaczy lepiej, ÷1.2 (minimalne pokrycie pozostaje na poziomie 60, `eslintErrors` nadal wynosi 0, `eslintWarnings` 0 → 20% zamrożonej liczby wyciszeń) | `quality-baseline.json` (uwaga `_relax_velocity_2026_08_30` zawiera wszystkie zmiany przed → po)       |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                                                                                 | `complexity-baseline.json`, `duplication-baseline.json`                                                |
| `cap`, `testCap`, każdy limit wierszy `frozen[*]` / `testFrozen[*]` ×1.2                                                                                                                                                                                         | `file-size-baseline.json`                                                                              |
| liczby dla poszczególnych plików / kodu TS ×1.2                                                                                                                                                                                                                  | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json` |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                                                              | `scripts/check/check-openapi-coverage.mjs`                                                             |
| `--require-tighten` ma charakter doradczy, gdy `_policy.requireTighten === false`                                                                                                                                                                                | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| nocne zadanie `bank-ratchet-shrinks` zostaje wstrzymane (zapisałoby zmierzony spadek i zniwelowało zapas)                                                                                                                                                        | `.github/workflows/nightly-release-green.yml`                                                          |

Listy dozwolonych wyjątków (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) **nie** są budżetami i nie zostały zmienione. Bramy zasad typu zaliczone/niezaliczone (sekrety, reguły SQL,
zgodność dokumentacji ze środowiskiem, spójność i18n, testy jednostkowe) pozostają bez zmian — niezaliczony test nadal oznacza niezaliczony test.

**Narzędzia**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — jednorazowe
  poluzowanie (`scripts/quality/relax-baselines.mjs`); odmawia ponownego uruchomienia z tą samą
  notatką.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  mierzy każdą bramę liczbową w taki sam sposób jak CI i wyświetla pozostały zapas dla każdej bramy
  (`scripts/quality/baseline-headroom.mjs`). Nocne zadanie `baseline-headroom` publikuje
  tabelę w aktualizowanym zgłoszeniu **📈 Zapas poziomów bazowych (faza szybkości)** i dodaje etykietę
  `headroom-alert`, gdy dowolna brama znajduje się w granicach 10% swojego limitu lub już go przekracza. To zgłoszenie
  stanowi wczesne ostrzeżenie: budżet wyczerpujący się w ciągu kilku dni oznacza, że poluzowanie jest zużywane przez
  kilka PR-ów, a nie przez cały zespół — sprawdź uwagi `_rebaseline_*` dotyczące problematycznej bramy.

**Tryb nowego kodu (Clean-as-You-Code) — od 2026-08-30, tylko szybka ścieżka PR**

Przy zdarzeniach `pull_request` plik `quality.yml` przekazuje `--base-ref <PR base SHA>` do `check:file-size`,
`check:complexity-ratchets` i `check:dead-code`. W tym trybie brama porównuje HEAD z bazą
scalania **wyłącznie w odniesieniu do plików zmodyfikowanych przez PR** (`scripts/check/newCodeMode.mjs`:
baza scalania jest materializowana w tymczasowym `git worktree`, ESLint/knip są uruchamiane w nim oraz na HEAD,
a liczby dla poszczególnych plików są porównywane):

- **blokujące** — PR dodał naruszenia złożoności cyklomatycznej/kognitywnej lub martwe eksporty w zmienionych plikach
  (`complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=` w dzienniku);
- **doradcze** — globalna suma względem zamrożonego poziomu bazowego. Odziedziczone odchylenia nigdy nie powodują
  niezaliczenia niewinnego PR-u; odchylenia są ponownie zamrażane podczas uzgadniania wydania i monitorowane przez zadanie sprawdzające zapas.

Uruchomienia `workflow_dispatch`, kontrola release-green oraz nocne zadanie sprawdzające zapas nie mają bazy PR
i zachowują porównanie bezwzględne (globalne). Pokrycie, duplikacja i pokrycie typami pozostają na razie globalne
(ich narzędzia nie generują tanio różnic dla poszczególnych plików) — są kandydatami do takiego samego podejścia.

**Zamknięcie fazy w v4.0 (LTS = bardziej rygorystyczne niż wcześniej, a nie „powrót do normy”)**

1. Na czystym wierzchołku `release/v4.0.0`: uruchom `npm run quality:headroom --json` w celach ewidencyjnych, a następnie
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update` oraz
   `--update` dla każdej bramki kontroli typów — każda wartość bazowa zostanie obniżona do wartości zmierzonej.
2. Usuń `_policy` z `quality-baseline.json` (ponownie aktywuje `--require-tighten` i nocne
   akumulowanie), przywróć `THRESHOLD = 36` (lub wyższy) w `check-openapi-coverage.mjs`.
3. Zaostrz limity poniżej zmierzonych wartości tam, gdzie modularyzacja przyniosła efekty: przywróć `cap` rozmiaru pliku do 1000
   (lub 800), zwiększ minima pokrycia o 5, ustaw liczbę martwych eksportów na 0 dla zmodularyzowanych pakietów.

## Bazowy poziom mechanizmu zapadkowego (`quality-baseline.json`)

Mechanizm zapadkowy (`scripts/quality/check-quality-ratchet.mjs`) odczytuje plik `quality-baseline.json`
i porównuje go ze świeżo zebranym plikiem `quality-metrics.json`. Każda metryka, która pogorszy się
o wartość większą niż jej epsilon, powoduje niepowodzenie kompilacji.

Obecnie śledzone metryki:

| Metryka               | Kierunek | Znaczenie                                 |
| --------------------- | -------- | ----------------------------------------- |
| `eslintWarnings`      | `down`   | Liczba ostrzeżeń ESLint nie może wzrosnąć |
| `coverage.statements` | `up`     | Pokrycie instrukcji nie może spaść        |
| `coverage.lines`      | `up`     | Pokrycie wierszy nie może spaść           |
| `coverage.functions`  | `up`     | Pokrycie funkcji nie może spaść           |
| `coverage.branches`   | `up`     | Pokrycie gałęzi nie może spaść            |

Aby zaktualizować poziom bazowy po rzeczywistej poprawie:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

Flaga `--update` zapisuje bieżące zmierzone wartości w pliku `quality-baseline.json`.
Zatwierdź ten plik razem ze zmianą, która poprawiła metrykę. PR, który poprawia
metrykę bez aktualizacji poziomu bazowego, zostanie wykryty przez `--require-tighten` (Faza 6A.5,
oczekuje na implementację).

### Mechanizm zapadkowy CodeQL: częstotliwość odświeżania i ręczne wyzwalanie

`check:codeql-ratchet` odczytuje **stan repozytorium, odświeżany zgodnie z harmonogramem — nie dla każdego PR.**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` raportuje
`state: configured`, `schedule: weekly`: jest to skan domyślnej konfiguracji GitHub, a nie analiza
wykonywana przy każdym wysłaniu zmian. Konsekwencja: po scaleniu PR, który NAPRAWIA alerty, mechanizm zapadkowy nadal odczytuje
starą, wyższą liczbę aż do uruchomienia następnego zaplanowanego skanowania — dlatego raportuje regresję
dla każdego otwartego PR, w tym dla kolejnych zmian dotyczących naprawiającego PR, dopóki wyniki skanowania nie zostaną zaktualizowane.

**Ręczne odświeżenie**: `gh workflow run codeql.yml --ref release/vX.Y.Z` ponownie uruchamia
analizę i w ciągu kilku minut ponownie publikuje alerty. Najpierw przeczytaj `.github/workflows/codeql.yml`
— jego nagłówek wyjaśnia, że używa wyłącznie `workflow_dispatch` **ponieważ powoduje konflikt z
„konfiguracją domyślną” GitHub** (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`). Przywrócenie wyzwalaczy `push`/`pull_request`/
`schedule` wymaga najpierw **działania właściciela**: Settings → Code security →
CodeQL: Default → Advanced. Nie dodawaj wyzwalacza `schedule:` bez tego przełączenia — będzie
on jedynie powodował nieudane uruchomienia.

**Zaostrz poziom bazowy po spadku liczby** — `node scripts/check/check-codeql-ratchet.mjs
--update` zapisuje nową zmierzoną liczbę w `quality-baseline.json` →
`metrics.codeqlAlerts.value`, dzięki czemu mechanizm zapadkowy nie dopuści po cichu do regresji z powrotem
do starego limitu. Przykład (2026-09-02/03): PR #12502 naprawił 7 rzeczywistych alertów
(13 → 6 zmierzonych otwartych alertów); PR #12530 zaostrzył zamrożony poziom bazowy z 11 → 6, aby był zgodny z wynikiem; pozostałe
6 alertów zostało następnie odrzuconych z indywidualnym uzasadnieniem, co zmniejszyło ich liczbę do 0 otwartych alertów.

**Decyzja o odrzuceniu alertów należy do operatora (Twarda reguła #14)** — nigdy nie odrzucaj alertu CodeQL
bez zapisania technicznego uzasadnienia w komentarzu odrzucenia: `won't fix` w przypadku
wymagania protokołu nadrzędnego, `used in tests` w przypadku danych testowych, `false positive`
w przypadku mechanizmu oczyszczania danych, którego CodeQL nie potrafi wykryć (precedens: `docs/security/ERROR_SANITIZATION.md`).

---

## Zasady ponawiania testów (WS5.4, v3.8.49)

Ponawianie jest konfigurowane osobno dla każdego runnera, nigdy globalnie — globalne ponawianie zamienia rzeczywiste regresje
w niewidoczne niestabilności:

| Runner           | Zasada                                                                                                                                            | Dlaczego                                                                                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Playwright (e2e) | `retries: 1` wyłącznie w CI, z `trace: on-first-retry`                                                                                            | Czas wykonania operacji przeglądarki/sieci jest rzeczywiście niedeterministyczny; jedno ponowienie ze śladem zamienia niestabilność w artefakt możliwy do zdiagnozowania |
| Vitest           | BEZ globalnego ponawiania. Test o potwierdzonej niestabilności otrzymuje jawne ponawianie na poziomie testu (widoczne w diffie i sprawdzane w PR) | Utrzymuje listę kwarantanny w repozytorium, nigdy jako nieprzejrzystą konfigurację                                                                                       |
| node:test (unit) | BEZ ponawiania, bez wyjątków                                                                                                                      | Niestabilny test jednostkowy oznacza błąd w teście — napraw go, zamiast uruchamiać ponownie                                                                              |

Docelowe SLO po wdrożeniu telemetrii niestabilności (WS5.2/5.3): współczynnik niestabilności <1% na test
(próg „napraw teraz”), współczynnik powodzenia ≥95% na potok. Wartości referencyjne z branży —
należy je ponownie skalibrować na podstawie własnych pomiarów.

## Dryf limitów zapadkowych na poziomie wydania (WS5.5, v3.8.49)

Gdy limit zapadkowy (rozmiar pliku, złożoność, ostrzeżenia eslint) ulega regresji na CZYSTYM końcu
gałęzi wydania — tj. regresję spowodowała KOMBINACJA scaleń, a żaden pojedynczy PR nie odtwarza jej
na własnej gałęzi — za poprawkę odpowiada **release captain, jednorazowo, na gałęzi
wydania**: preferuj wydzielenie/refaktoryzację; ponownie ustaw wartość bazową tylko wraz z udokumentowanym
uzasadnieniem. Nigdy nie przenoś dryfu kombinacji na PR kontrybutora i nigdy
nie ustawiaj ponownie wartości bazowej dla każdego PR (ukrywa to rzeczywiste regresje). Najpierw rozstrzygnij przyczynę: odtwórz
błąd na czystym końcu gałęzi w roboczym worktree kontrolnym, zanim uznasz, że spowodował go Twój PR.

## Utrwalanie obniżeń limitów zapadkowych — kierunek w dół (#8584)

Mechanizm zapadkowy jest automatyczny tylko w połowie — i to w niewłaściwej połowie. **Podniesienie** limitu to
ręczna edycja JSON, która zajmuje dziesięć sekund i jest najszybszym sposobem na odblokowanie PR z błędem.
**Obniżenie** limitu wymaga uruchomienia `--update` i zatwierdzenia wyniku przez kogoś — a do czasu
wdrożenia zadania `bank-ratchet-shrinks` żaden workflow tego nie wykonywał. Zmierzony skutek
(2026-07-25): 18 zamrożonych plików miało już nie więcej niż limit 800 wierszy dla nowych plików, przy czym najgorszy
przypadek wynosił 132× (`src/shared/validation/schemas.ts`, 19 wierszy z limitem 2 523); pułap
złożoności wzrósł z `1794 → 2169` w około 37 notatkach o ponownym ustawieniu wartości bazowej, przy dokładnie jednym
obniżeniu (−1); a zapis „zaostrz przez `--update` w następnym cyklu” pojawił się 31 razy i został
zrealizowany raz. Limit, który pozostaje po usunięciu kodu będącego jego przyczyną, po cichu zamienia każdy ukończony
podział kodu w przyzwolenie na jego rozrost dla kolejnej osoby edytującej dany plik.

`nightly-release-green.yml` → zadanie **`bank-ratchet-shrinks`** zamyka tę pętlę:

|              |                                                                                                                       |
| ------------ | --------------------------------------------------------------------------------------------------------------------- |
| Uruchamianie | `schedule` (3× dziennie) + `workflow_dispatch` — celowo **bez** `push`                                                |
| Pomiar       | najwyższa gałąź `release/vX.Y.Z`, z taką samą metodą rozstrzygania i ochroną przed wstrzyknięciem jak `release-green` |
| Zapis        | `check:file-size --update` i `check:complexity-ratchets --update` (oba z założenia mogą wyłącznie obniżać wartości)   |
| Weryfikacja  | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                              |
| Dostarczanie | jeden zawsze aktualny PR kierowany do gałęzi wydania — aktualizowany wymuszeniem, bez tworzenia spamu                 |

Utrwalanie odbywa się partiami, a nie przy każdym pushu, ponieważ nie ma wymagań dotyczących opóźnienia (obniżenie
utrwalone w ciągu 8 godzin jest wystarczające), natomiast uruchamianie po każdym scaleniu wielokrotnie przebudowywałoby gałąź PR
podczas serii scaleń i za każdym razem ponosiłoby koszt pełnego przebiegu ESLint. Wykrywanie nadal odbywa się
przy pushu (`release-green`); partiami wykonywane jest wyłącznie utrwalanie.

### Weryfikator bezpieczeństwa

Zadanie zapisuje zmiany w wartościach bazowych bez nadzoru, dlatego `verify-ratchet-bank.mjs` zapewnia
bezpieczeństwo tego procesu. Porównuje drzewo po wykonaniu `--update` z `HEAD` i **przerywa zadanie
przed utworzeniem jakiegokolwiek commita** — bez otwierania PR — chyba że każda zmiana jest jednym z poniższych przypadków:

- wartość liczbowa `frozen` / `testFrozen` została **obniżona** lub **usunięta**
- `complexity-baseline.json` → `count` została **obniżona**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` została **obniżona**

Wszystko inne powoduje błąd: podniesienie liczby, dodanie wpisu, zmiana `cap`/`testCap` lub
usunięcie/przepisanie notatki `_rebaseline_*` (notatki te stanowią ślad audytowy wyjaśniający, dlaczego każdy
pułap istnieje, i są przechowywane w tym samym obiekcie `frozen` co wpisy plików).
Bot, który mógłby podnieść limit, byłby zdecydowanie gorszy niż obecny stan. Zabezpieczenie przed regresją:
`tests/unit/verify-ratchet-bank.test.ts`.

Zadanie nigdy nie wykonuje pushu do `release/*` — PR scala człowiek, więc błędny pomiar
nie może zostać wdrożony bez przeglądu.

## Zasady listy dozwolonych elementów

Każda bramka, która nie może zakończyć się niepowodzeniem z powodu wcześniej istniejących naruszeń, korzysta z zamrożonej listy dozwolonych elementów
(np. `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). Obowiązuje następująca zasada:

**Napraw główną przyczynę; używaj listy dozwolonych elementów tylko wtedy, gdy naruszenie istniało wcześniej i
nie można go naprawić w tym samym PR.**

Podczas dodawania wpisu do listy dozwolonych elementów:

1. Dołącz komentarz z uzasadnieniem.
2. Podaj odwołanie do zgłoszenia śledzącego (np. `// #3498 — Funkcja z fazy 2, jeszcze niezaimplementowana`).
3. Usuń wpis w tym samym PR, który naprawia naruszenie — nieaktualny wpis, który nie
   wycisza już aktywnego naruszenia, sam jest defektem (mechanizm wykrywania nieaktualnych reguł 6A.3
   spowoduje niepowodzenie bramki z powodu osieroconego wpisu na liście dozwolonych elementów, gdy zostanie zaimplementowany).

**Nie** dodawaj wpisów do listy dozwolonych elementów po to, aby testy przechodziły szybciej. Zielona bramka przy rosnącej
liście dozwolonych elementów daje fałszywe poczucie jakości.

### Gdy bramka nie przechodzi dla Twojego PR

1. **Uważnie przeczytaj dane wyjściowe bramki** — wskazują one dokładnie, który plik lub symbol naruszył
   regułę.
2. **Napraw naruszenie** — większość bramek to deterministyczne kontrole systemu plików, które przechodzą, gdy tylko
   kod jest poprawny.
3. **Jeśli naruszenie istniało wcześniej** (tj. nie zostało wprowadzone przez Ciebie, ale bramka zaczęła je teraz
   obejmować): dodaj wpis do listy dozwolonych elementów wraz z komentarzem uzasadniającym i odwołaniem do zgłoszenia śledzącego.
4. **Jeśli bramka działa jako mechanizm zapadkowy** (pokrycie, ostrzeżenia ESLint, duplikacja, złożoność):
   Twoja zmiana pogorszyła wskaźnik. Napraw problem będący jego przyczyną albo (w rzadkich przypadkach) uruchom
   `npm run quality:ratchet -- --update`, jeśli zmiana jest celowa, a pogorszenie
   wskaźnika jest akceptowalne — wyjaśnij jednak przyczynę w opisie PR.
5. **Bramki doradcze** (`continue-on-error: true`) mają charakter informacyjny — nie blokują
   scalania, ale pojawiają się w podsumowaniu CI. Mimo to je napraw.

---

## Dodawanie nowej bramki

1. Utwórz `scripts/check/check-<name>.mjs` (lub `.ts`). Bramki zasad zwracają kod wyjścia 0/1.
   Bramki typu zapadkowego zapisują wskaźnik w `quality-metrics.json` za pośrednictwem `collect-metrics.mjs`.
2. Dodaj `"check:<name>": "node scripts/check/check-<name>.mjs"` do `package.json`.
3. Podłącz ją w `.github/workflows/ci.yml` w odpowiednim zadaniu
   (zasady → `lint` lub `docs-sync-strict`; zapadka → `quality-gate`).
4. Jeśli korzysta z listy dozwolonych elementów, zastosuj `reportStaleEntries()` z
   `scripts/check/lib/allowlist.mjs`, aby nieaktualne wpisy były wykrywane automatycznie.
5. Napisz test w `tests/unit/build/` obejmujący logikę wykrywania bramki.
6. Zaktualizuj ten dokument (dodaj wiersz do tabeli odpowiedniego zadania).

---

## Narzędzia dla agentów: LSP w pętli (opcjonalne)

Poza bramkami CI OmniRoute udostępnia **opcjonalny** szkielet `agent-lsp`
(plik `.mcp.json` na poziomie projektu, faza 7, zadanie 15). Utwórz `.mcp.json`,
aby udostępnić agentom programistycznym serwer języka TypeScript, dzięki czemu będą rozwiązywać symbole /
diagnostykę **przed** napisaniem kodu — jest to działające według zasady „najpierw kompilacja, potem deklaracja” uzupełnienie
`typecheck:core`, które eliminuje błędy „wymyślonych symboli” u źródła. Celowo
nie jest ładowany automatycznie (to Ty wybierasz i weryfikujesz most MCP↔LSP); nieprawidłowy wpis jedynie rejestruje
błąd połączenia i nigdy nie zakłóca sesji.

---

## Rejestr racjonalizacji (przegląd ROI — Etap 9, Fala 3)

Ten wykaz uzgodniono z `ci.yml` w dniu 2026-06-17 (w poprzedniej wersji pominięto
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence`). Przegląd ROI uzgodnionego zestawu
wskazał następujących kandydatów do racjonalizacji. **Scalenia są mechanicznymi zmianami
CI; przełączenia/usunięcia są decyzjami dotyczącymi zasad, zastrzeżonymi dla operatora.** Żadna
z poniższych zmian nie została jeszcze zastosowana.

**Pominięte również powyżej** (doradcze, słaby sygnał): zadanie `docs-lint`
(markdownlint + Vale, całe zadanie z `continue-on-error`) oraz samodzielne przepływy pracy skanerów
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. Wartość `semgrepFindings: 0` znajduje się w
`quality-baseline.json`, ale nie jest powiązana z blokującym mechanizmem zapadkowym w `ci.yml` — ta metryka
jest obecnie osierocona.

### Scalanie / deduplikacja (mechaniczne, niższe ryzyko)

Każdego kandydata zweryfikowano względem bieżącego stanu bramek w dniu 2026-06-17 (ufaj, ale sprawdzaj);
okazało się, że kilka „oczywistych” scaleń ukrywa dług i **nie** nadaje się do bezpośredniego zastosowania.

- **`check:docs-sync` uruchamia się dwukrotnie** — samodzielnie w zadaniu `lint` oraz ponownie wewnątrz `check:docs-all` (`docs-sync-strict`) i haka husky pre-commit. ✅ **GOTOWE** — usunięto samodzielne wywołanie w `lint`.
- **Skanowanie CVE** — ❌ **NIE jest to proste scalenie.** `audit:deps` kończy się twardym błędem przy każdej luce CVE o wysokiej/krytycznej wadze; `check:vuln-ratchet` (osv) kończy się błędem tylko w przypadku _regresji_ względem poziomu bazowego (obecnie 1 MODERATE). Odmienna semantyka — usunięcie `audit:deps` oznaczałoby utratę bezwzględnej bramki dla luk o wysokiej/krytycznej wadze. Zachować oba.
- **Wykrywanie cykli** — ❌ **NIE jest to proste scalenie.** `check:circular-deps` (dpdm) zgłasza **91 cykli** (dlatego ma charakter doradczy); nie można nadać mu statusu blokującego bez ich uprzedniego rozwiązania, a jego zakres jest szerszy niż w przypadku zielonego, starannie dobranego `check:cycles`. Zachować `check:cycles` jako blokujące; rozwiązanie 91 cykli dpdm stanowi osobną pozycję rejestru.
- **Złożoność** — ✅ **GOTOWE** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): jedno przejście ESLint, zliczanie według ruleId, dzięki czemu bazowe wartości złożoności cyklomatycznej+max-lines oraz złożoności poznawczej pozostają niezależne; poszczególne `check:complexity` / `check:cognitive-complexity` pozostają dostępne do lokalnego użycia z `--update`.
- **Ochrona `/api` przed halucynacjami** — ✅ **GOTOWE** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): jedna inwentaryzacja FS katalogu `src/app/api`, openapi-routes + docs-symbols nadal raportują niezależnie; poszczególne polecenia pozostają dostępne do lokalnych uruchomień.
- **`check:node-runtime` uruchamia się w 11 zadaniach** — ⚠️ **niski ROI.** Każde działa na osobnym runnerze, a kontrola trwa <1s; łączna oszczędność wyniosłaby ~10s kosztem utraty niedrogiej ochrony dla każdego zadania. Nie warto powodować zamieszania.
- **`typecheck:noimplicit:core` w lintowaniu CI** — ✅ **usunięto z zadania lint** (miało charakter doradczy z `continue-on-error`); blokujący zakres kontroli typów zapewniają `typecheck:core` + `check:type-coverage`. Zachowano skrypt lokalny.

### Przełączenie / decyzja (zasady operatora)

- `check:openapi-security-tiers` (doradcze) — ❌ **NIE można go bezpośrednio przełączyć.** Kończy się kodem 0, ale ostrzega, że kilka tras `traffic-inspector` w ramach `LOCAL_ONLY_API_PREFIXES` nie ma adnotacji `x-loopback-only: true`. Wymuszenie tej kontroli wymaga najpierw dodania tych adnotacji do `openapi.yaml`.
- `typecheck:noimplicit:core` (doradcze) — w dużej mierze zastąpione przez blokujący mechanizm zapadkowy `check:type-coverage`. Przełączyć na mechanizm zapadkowy albo usunąć redundantne drugie przejście `tsc`.
- `test:vitest:ui` (obecnie **blokujące**) — wcześniej istniejące błędy są jawnie wykluczone w `vitest.config.ts` za pomocą komentarzy śledzących `// #8618`; nowe błędy powodują niepowodzenie zadania.
- `check:secrets` (gitleaks, blokujący mechanizm zapadkowy zamrożony na poziomie 3 udokumentowanych wyników fałszywie dodatnich) — dodać te 3 przypadki do listy dozwolonych, aby osiągnąć 0, albo obniżyć status do doradczego. Pokrywa się z natywnym skanowaniem sekretów GitHub + `check:public-creds`.
- `check:pr-evidence` (blokujące, przeszukuje tekst opisu PR) — wysokie ryzyko wyników fałszywie dodatnich; usunięcie osłabi egzekwowanie Twardej Reguły nr 18, więc jest to rzeczywista decyzja dotycząca zasad.
- `semgrep` (samodzielne, doradcze) — pokrywa się z CodeQL w zakresie kategorii OWASP; powiązać jego poziom bazowy z mechanizmem zapadkowym albo usunąć.

---

## Powiązana dokumentacja

- Łańcuch dostaw (pochodzenie, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — bramka zgodności zestawów kluczy

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, zadanie `i18n-ui-coverage`).
Porównuje zestaw kluczy-liści każdego pliku `src/i18n/messages/<locale>.json` z `en.json` i zgłasza
błąd w przypadku każdego brakującego lub nadmiarowego liścia, niezależnie od tego, kiedy klucz został dodany. Symbole zastępcze
`__MISSING__:` są uznawane za obecne (ich zawartość podlega bramce współczynnika). Jest to bezwzględne uzupełnienie
dwóch bramek opartych na różnicach/procentach: `check-ui-keys-coverage` wymusza próg 80% dla każdego
locale (43 brakujące klucze spośród ~13 000 nadal dają wynik 99,7%), a `check-new-key-coverage` ocenia
wyłącznie klucze dodane przez PR do `en.json`. Partia tłumaczeń locale jest generowana na podstawie wersji `en.json` z dnia,
w którym utworzono jej gałąź, a tłumaczenie trwa przez kolejne dni, podczas gdy gałąź bazowa nadal otrzymuje nowe klucze; PR z partią sam
nie dodaje żadnego klucza, więc obie pokrewne bramki milczały, gdy partia 1 (#13044) została scalona z brakującymi 43 kluczami w dziewięciu
locale, a partia 2 (#13660) z brakującymi 10 kluczami w ośmiu (2026-09-15). Aby naprawić błąd, użyj
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers`; liść oznaczony jako `extra`
oznacza, że został usunięty ze źródła — usuń go z locale. `--warn` raportuje problem bez zgłaszania błędu.
`--catalog=cli` uruchamia to samo porównanie dla `bin/cli/locales` (`npm run i18n:check-keys:cli`);
oba kroki znajdują się w zadaniu `i18n-ui-coverage`.

#### `check-new-key-coverage` — bramka i18n dla nowych kluczy

Bramka pokrewna do `check-ui-value-drift`. Tamta wykrywa angielską wartość, która została **przepisana**,
podczas gdy jej tłumaczenia pozostały niezmienione; ta wykrywa angielski klucz, który został **dodany**,
ale nie trafił do niektórych locale.

`check-ui-keys-coverage` nie jest w stanie wykryć tej klasy problemów: wymusza procentowy próg dla każdego locale, a
jedenaście brakujących kluczy spośród ~13 000 pozostawia pokrycie na poziomie 99,9%. Wartość procentowa dla języka nie może
wyrazić stanu „ta funkcja została wydana bez tłumaczenia” — cała funkcja może trafić do nowego locale bez żadnego
tekstu i w ogóle nie zmienić tej wartości.

Incydent, który ta bramka utrwala: faza 3 Orchestration Canvas przetłumaczyła jedenaście swoich kluczy na
42 istniejące wówczas locale. Kilka godzin później partia języków UE (#13044) zwiększyła ich liczbę w repozytorium
do 51, a dziewięć nowych locale (`el`, `et`, `ga`, `hr`, `lt`, `lv`, `mt`, `sl`, `sr`) nigdy
ich nie otrzymało. `deepMergeFallback` zastępuje brakujący klucz wersją angielską, więc trybem awarii był
nieprzetłumaczony, a nie pusty interfejs użytkownika — rzeczywisty problem, który z założenia pozostawał niewidoczny.

Podobnie jak pokrewna bramka jest ona **świadoma różnic**: porównuje angielską wersję z bazy scalenia z drzewem
roboczym, dzięki czemu istniejące wcześniej braki pozostają zamrożone, a włączenie bramki nie wymagało migracji. Wyjście awaryjne:
`__MISSING__:<english>` pozwala odroczyć tłumaczenie, zachowując poprawne działanie w czasie wykonywania. `vi` nie zezwala
na symbole zastępcze (`tests/unit/i18n-vi-completeness.test.ts`) i wymaga rzeczywistego tłumaczenia.

#### `check-vitest-exclusions` — bramka odłożonych testów

Plik znajdujący się na liście `exclude` w `vitest.config.ts` jest testem, który nie jest uruchamiany, choć osobie
przeglądającej drzewo może wydawać się elementem pokrycia. Za komentarzem
`// #8618 — pre-existing failure; remove this exclusion when fixed` zgromadziły się sześćdziesiąt dwa pliki. Zgłoszenie #8618 zamknięto
2026-08-11, podczas gdy śledzona przez nie lista rozrosła się z 45 do 62 wpisów, a każdy nowy wpis dziedziczył komentarz
wskazujący na zamknięte zgłoszenie. Gdy lista została wreszcie sprawdzona plik po pliku (#13204), **51 z 62
testów przechodziło dla bieżącego drzewa bez żadnych zmian w kodzie źródłowym**.

Bramka wymaga, aby każde wykluczenie wskazujące na rzeczywisty plik (a) podawało numer zgłoszenia śledzącego oraz
(b) znajdowało się w `config/quality/vitest-exclusions.json` wraz ze zmierzonym statusem, dzięki czemu dodanie wykluczenia stanowi
możliwą do przejrzenia różnicę w dedykowanym pliku, zamiast być kolejnym wierszem w tablicy zawierającej 60 wpisów. Celowo
nie uruchamia ponownie wykluczonych testów — trwałoby to około 10 minut i powinno należeć do zadania okresowego; rejestr
przechowuje informację o dacie ostatniego pomiaru każdego z nich.
