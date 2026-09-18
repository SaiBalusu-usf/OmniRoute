# Quality Gates Reference (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

Tài liệu này là tài liệu tham chiếu có thẩm quyền cho tất cả các cổng chất lượng CI trong OmniRoute.
Tài liệu mô tả từng cổng, nội dung cổng xác thực, tác vụ CI nơi cổng chạy, liệu cổng có sử dụng
đường cơ sở ratchet hay chính sách đạt/không đạt, cũng như liệu cổng có chặn bản dựng hay chỉ mang tính tư vấn.

Để xem bản tóm tắt ngắn và chính sách danh sách cho phép, hãy xem phần "Cổng chất lượng & Ratchet"
trong `AGENTS.md`. Để xem đánh giá trọng yếu, phân loại mức độ trưởng thành và kế hoạch tái tạo
không phụ thuộc vào công cụ của cùng hệ thống, hãy xem
[Cẩm nang về cổng chất lượng](../ops/QUALITY_GATE_PLAYBOOK.md).

---

## Danh mục cổng (~90 tập lệnh)

Các tập lệnh nằm trong `scripts/check/` (cổng chính sách) và `scripts/quality/` (công cụ ratchet).
Nguồn sự thật của CI là `.github/workflows/ci.yml`.

### Luồng nhanh cho PR phát hành (`quality.yml`)

`.github/workflows/quality.yml` chạy trên các PR nhắm đến `release/**`. Luồng này giúp các nhánh
của người đóng góp tiếp tục vận hành bằng các cổng nhanh được lọc theo đường dẫn, cùng với một tín hiệu
bản dựng production mang tính tư vấn cho các thay đổi mã:

| Tác vụ                                           | Phạm vi                                                                                                                                                                                                                                                      | Chặn                                                                                        |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| `Build (advisory)`                               | Các PR mã không phải bản nháp và các nhánh hàng đợi Mergify; Node 24, `npm-ci-retry`, `check:node-runtime`, `npm run build` với `OMNIROUTE_USE_TURBOPACK=1`; không tải artifact lên vì không có tác vụ chất lượng hạ nguồn nào sử dụng nó                    | **Tư vấn** (`continue-on-error: true`; xóa sau một tuần chạy ổn định trên các PR phát hành) |
| `Docs Gates (fast-path)`                         | Các PR tài liệu/mã; tham chiếu tài liệu API và docs-all                                                                                                                                                                                                      | Có                                                                                          |
| `Fast Quality Gates`                             | Các PR mã; kiểm tra tĩnh, kiểm tra kiểu, kiểm tra kiểu dashboard, kiểm thử đơn vị bị ảnh hưởng                                                                                                                                                               | Có                                                                                          |
| `Forgotten sibling tests`                        | Các PR mã; truy vết các mô-đun đã thay đổi đến các thành phần sử dụng tĩnh và các kiểm thử anh em tiềm năng; đường dẫn barrel và dynamic-import được báo cáo dưới dạng chẩn đoán mang tính tư vấn, kèm các ngoại lệ trong danh sách cho phép được tham chiếu | **Tư vấn**                                                                                  |
| `Vitest (fast-path)`                             | Các PR mã; bộ kiểm thử vitest nhanh                                                                                                                                                                                                                          | Có                                                                                          |
| `Unit Tests fast-path`                           | Các PR mã; bộ kiểm thử đơn vị gồm 4 shard                                                                                                                                                                                                                    | Có                                                                                          |
| `No new ESLint warnings`                         | Các PR mã; cổng bảo vệ lint có nhận biết suppression                                                                                                                                                                                                         | Có đối với PR cùng nguồn, mang tính tư vấn đối với fork                                     |
| `Merge integrity (changelog + generated skills)` | Các PR không phải bản nháp; đồng bộ changelog và skill được tạo                                                                                                                                                                                              | Có đối với PR cùng nguồn, mang tính tư vấn đối với fork                                     |

#### Báo cáo kiểm thử anh em bị bỏ quên

`npm run check:forgotten-sibling-tests` tái sử dụng trình phân giải import đứng sau bản đồ tác động
kiểm thử. Với mỗi mô-đun production đã thay đổi, lệnh này báo cáo các chuỗi xác định
`mô-đun/ký hiệu đã thay đổi -> thành phần sử dụng tĩnh -> kiểm thử anh em tiềm năng` khi kiểm thử
tiềm năng không có trong phần diff của pull request. Bản tóm tắt Markdown và kết quả JSON được lưu giữ
dưới dạng artifact quy trình công việc `forgotten-sibling-tests` để hiệu chỉnh trước khi triển khai chế độ chặn.

Các thao tác tái xuất barrel và import động chỉ là chẩn đoán phân giải; chúng không bao giờ tạo ra
phát hiện có tính chặn. Các ngoại lệ đã được xem xét nằm trong
`config/quality/forgotten-sibling-allowlist.json`. Mỗi mục phải nêu rõ thành phần sử dụng và kiểm thử
tiềm năng, đưa ra lý do cụ thể và liên kết đến một issue hoặc pull request trên GitHub. Các mục
không đúng định dạng sẽ bị từ chối theo mặc định. Các ngoại lệ không thể bỏ qua một kiểm thử tiềm năng
đã bị xóa hoặc một phần diff thêm `.skip`/`.todo`; việc làm suy yếu assertion và các hình thức che giấu
khác vẫn thuộc trách nhiệm của cổng `check:test-masking` có tính chặn độc lập.

### Tác vụ: `lint`

Chạy trên mọi PR đến `main`. Chặn hợp nhất khi thất bại.

| Script (`npm run ...`)            | Kiểm tra                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Chặn                                   |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| `check:node-runtime`              | Phiên bản Node.js nằm trong phạm vi được hỗ trợ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Có                                     |
| `check:cycles`                    | Import vòng — tất cả mô-đun trong `src/` + `open-sse/`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Có                                     |
| `check:route-validation:t06`      | Có schema Zod trên tất cả các route (chính sách Bậc 6)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Có                                     |
| `check:any-budget:t11`            | Số lượng `@ts-expect-error // any` không vượt quá ngân sách (catraca Bậc 11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Có                                     |
| `check:provider-consistency`      | Mọi provider trong `providers.ts` đều có mục tương ứng trong `providerRegistry.ts` (và ngược lại, trong phạm vi allowlist)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Có                                     |
| `check:model-lifecycle`           | Ba bảng định tuyến được duy trì thủ công luôn nhất quán với snapshot vòng đời đã được đưa vào mã nguồn (#11503): `FITNESS_TABLE` (`taskFitness.ts`) không chấm điểm bất kỳ id đã ngừng hoạt động nào mà `REGISTRY` có thể định tuyến; mọi đích của `BUILT_IN_ALIASES` đều có trong `REGISTRY` và không có trong snapshot id đã ngừng hoạt động; mọi id đã ngừng hoạt động vẫn còn trong `REGISTRY` đều được chuyển tiếp hoặc được liệt kê trong `allowedRetiredInCatalog`; đồng thời không có nguồn hoặc đích nào của `DEFAULT_DEGRADATION_MAP` xuất hiện dưới dạng đã ngừng hoạt động trong snapshot đó. Điều này không chứng minh rằng một mô hình hiện đang được cung cấp bởi một upstream đang hoạt động. Ngoại tuyến — so sánh với `config/quality/model-lifecycle.json`, được làm mới thủ công bằng `npm run quality:refresh-model-lifecycle` (cần mạng; không được tích hợp vào CI). `allowedRetiredInCatalog` là một cơ chế ratchet giảm dần: chỉ thêm mục khi có issue theo dõi. | Có                                     |
| `check:fetch-targets`             | Mọi `fetch("/api/...")` trong `src/` phía client đều phân giải đến một `route.ts` thực sự tồn tại                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Có                                     |
| `check:deps`                      | Tất cả dependency có thể cài đặt bằng `npm install` trong mọi `package.json` của repo đều nằm trong `dependency-allowlist.json`; các package mới không được ghim phiên bản hoặc bị slopsquatting sẽ bị gắn cờ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Có                                     |
| `audit:deps`                      | `npm audit` (thư mục gốc + electron) — không có cảnh báo mức cao/nghiêm trọng (trùng lặp với osv `check:vuln-ratchet`; xem Rationalization Backlog)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Có                                     |
| `check:lockfile`                  | Tính toàn vẹn của `package-lock.json` — registry HTTPS, hàm băm toàn vẹn, không ghi đè host                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Có                                     |
| `check:licenses`                  | Danh sách cho phép giấy phép SPDX đối với các dependency production                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Có                                     |
| `check:tracked-artifacts`         | Không có artifact build / symlink `node_modules` đã commit (cũng chạy trong pre-commit của husky; pre-push được cố ý giữ nhẹ — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Có                                     |
| `check:vitest-exclusions`         | Mỗi mục loại trừ Vitest đều nêu một issue theo dõi và xuất hiện trong `config/quality/vitest-exclusions.json` (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Có                                     |
| `check:file-size`                 | Không có tệp nguồn nào vượt quá giới hạn theo phần mở rộng (ratchet: các tệp lớn bị đóng băng trong danh sách `frozen`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Có                                     |
| `check:error-helper`              | Các phản hồi lỗi trong executor/handler sử dụng `buildErrorBody()` / `sanitizeErrorMessage()` (Quy tắc Cứng #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Có                                     |
| `check:migration-numbering`       | Các tệp SQL migration được đánh số tuần tự, không có khoảng trống hoặc số trùng lặp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Có                                     |
| `check:public-creds`              | Không có OAuth `client_id`/`client_secret` dạng literal hoặc khóa Firebase Web bên ngoài `publicCreds.ts` (Quy tắc cứng #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Có                                     |
| `check:db-rules`                  | Không có SQL thô bên ngoài các mô-đun `src/lib/db/`; không có barrel import từ `localDb.ts` (Quy tắc cứng #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Có                                     |
| `check:known-symbols`             | Các trình thực thi nhà cung cấp, chiến lược định tuyến và trình chuyển đổi được đăng ký trong các bảng điều phối tương ứng phải khớp với các tệp trên ổ đĩa — không có ký hiệu mồ côi hoặc chưa được khai báo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Có                                     |
| `check:route-guard-membership`    | Mọi tuyến tạo tiến trình con đều được phân loại bởi `isLocalOnlyPath()` (Quy tắc cứng #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Có                                     |
| `check:test-discovery`            | Mọi tệp `*.test.ts` / `*.spec.ts` trong kho mã đều được ít nhất một trình chạy kiểm thử thu thập (cơ chế ratchet: danh sách tệp mồ côi trong `test-discovery-baseline.json` chỉ có thể thu hẹp)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Có                                     |
| `check:agent-skills-sync`         | Các artifact agent-skills được tạo ra khớp với danh mục nguồn của chúng (không có sai lệch)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `check:provider-asset-provenance` | Logo/tài nguyên của nhà cung cấp có mục ghi nhận nguồn gốc                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `lint:json`                       | Các tệp cấu hình JSON có thể được phân tích cú pháp và đáp ứng các quy tắc lint của repo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `typecheck:core`                  | Biên dịch TypeScript không có lỗi (chỉ có cảnh báo mang tính tư vấn)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Có                                     |
| `typecheck:noimplicit:core`       | `noImplicitAny` nghiêm ngặt — hướng đến tương lai; nhiều vị trí gọi có sẵn vẫn cần chú thích kiểu                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | **Tư vấn** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `tsc` được giới hạn trong `src/app/(dashboard)/**` (#7033) — danh sách cho phép gồm 27 tệp đã được tuyển chọn của `typecheck:core` không bao gồm bất kỳ tệp TSX nào của dashboard, và `next build` cũng không bao giờ kiểm tra kiểu cho chúng (`next.config.mjs` đặt `ignoreBuildErrors: true`), vì vậy các lỗi hồi quy về định danh mồ côi tại đó (#6625/#6909) không được CI phát hiện. So sánh với đường cơ sở cố định về số lượng theo từng tệp/từng mã TS (`config/quality/dashboard-typecheck-baseline.json`, cùng mẫu thực thi kiểm tra dữ liệu lỗi thời như `check:known-symbols`) — chỉ những lỗi MỚI vượt quá số lượng trong đường cơ sở mới khiến cổng kiểm tra thất bại; hạ dần ngưỡng bằng `--update` khi một lỗi có sẵn được sửa.                                                                                                                                                                                                                                           | Có                                     |

### Tác vụ: `quality-gate`

Chạy sau `test-coverage`. Chặn việc hợp nhất khi thất bại.

| Script                       | Nội dung xác thực                                                                                                                                                               | Chặn                    |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `quality:collect`            | Xuất `quality-metrics.json` (số lượng cảnh báo ESLint, độ bao phủ từ báo cáo phân đoạn đã hợp nhất)                                                                             | Có (trước bước ratchet) |
| `quality:ratchet`            | Mỗi chỉ số trong `quality-baseline.json` không bị suy giảm (cảnh báo ESLint ≤ đường cơ sở; độ bao phủ ≥ đường cơ sở)                                                            | Có                      |
| `check:duplication`          | Mức độ trùng lặp mã (jscpd@4) không vượt quá đường cơ sở trong `quality-baseline.json`                                                                                          | Có                      |
| `check:complexity`           | Độ phức tạp cyclomatic ở cấp tệp không vượt quá giới hạn (quy tắc `complexity` cốt lõi của ESLint + `max-lines-per-function`)                                                   | Có                      |
| `check:cognitive-complexity` | Ratchet độ phức tạp nhận thức (`eslint-plugin-sonarjs`) — một lượt chạy ESLint riêng biệt; CI chạy cả hai và hợp nhất thành một bước `check:complexity-ratchets` duy nhất       | Có                      |
| `check:dead-code`            | Ratchet cho các tệp / export không được sử dụng (knip) không suy giảm so với đường cơ sở                                                                                        | Có                      |
| `check:compression-budget`   | Ngân sách benchmark nén — mức sàn tiết kiệm token theo từng engine không được suy giảm                                                                                          | Có                      |
| `check:type-coverage`        | Ratchet tỷ lệ phần trăm mã có kiểu (`type-coverage`) không suy giảm; phần lớn bao hàm chức năng của `typecheck:noimplicit:core`                                                 | Có                      |
| `check:codeql-ratchet`       | Số lượng cảnh báo CodeQL đang mở không tăng (đọc qua `gh api`; bỏ qua an toàn khi không có token) — về chu kỳ làm mới và cách kích hoạt thủ công: xem "CodeQL ratchet" bên dưới | Có                      |

### Tác vụ: `quality-extended`

Toàn bộ job chỉ mang tính khuyến nghị (`continue-on-error: true`). Các ratchet dựa trên npm được chạy
thực sự; các trình quét bên ngoài được cài đặt qua `gh release download` và tự bỏ qua (thoát với mã 0)
khi tệp nhị phân vẫn chưa tồn tại.

| Script                   | Nội dung xác thực                                                                                                                                                                      | Chặn            |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `check:circular-deps`    | Không có dependency vòng (dpdm)                                                                                                                                                        | **Khuyến nghị** |
| `check:bundle-size`      | Kích thước bundle không vượt quá giới hạn                                                                                                                                              | **Khuyến nghị** |
| `check:secrets`          | Quét thông tin bí mật (gitleaks) — bỏ qua nếu không có tệp nhị phân                                                                                                                    | **Khuyến nghị** |
| `check:vuln-ratchet`     | Các lỗ hổng dependency (osv-scanner) không tăng thêm — bỏ qua nếu không có tệp nhị phân                                                                                                | **Khuyến nghị** |
| `check:workflows`        | Kiểm tra lỗi workflow (actionlint + zizmor) — bỏ qua nếu không có các tệp nhị phân                                                                                                     | **Khuyến nghị** |
| `check:openapi-breaking` | Các thay đổi phá vỡ hợp đồng API công khai (`openapi.yaml`) so với nhánh cơ sở (oasdiff) — xuất `openapiBreaking=N`; bỏ qua nếu không có oasdiff hoặc không thể phân giải đặc tả cơ sở | **Khuyến nghị** |

### Job: `docs-sync-strict`

Chạy trên mọi PR vào `main`. Chặn hợp nhất nếu thất bại.

| Script                         | Nội dung xác thực                                                                                                                                                            | Chặn                         |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `check:docs-all`               | Cổng tổng hợp chạy tuần tự 6 cổng con bên dưới                                                                                                                               | Có                           |
| ↳ `check:docs-sync`            | Tính nhất quán về phiên bản giữa CHANGELOG / OpenAPI / llm.txt                                                                                                               | Có                           |
| ↳ `check:docs-counts`          | Các số lượng trong văn bản (số lượng provider, số lượng migration, v.v.) nằm trong cửa sổ ratchet của số lượng thực tế                                                       | Có                           |
| ↳ `check:env-doc-sync`         | Mọi biến môi trường trong `.env.example` đều được ghi lại trong một bảng tài liệu và ngược lại                                                                               | Có                           |
| ↳ `check:deprecated-versions`  | Không có chuỗi phiên bản đã ngừng hỗ trợ trong tài liệu                                                                                                                      | Có                           |
| ↳ `check:doc-links`            | Các liên kết markdown nội bộ trong tài liệu phân giải tới các tệp thực (`[text]`/`(path)`)                                                                                   | Có                           |
| ↳ `check:fabricated-docs`      | Các route, biến môi trường, lệnh CLI, tên hook và đường dẫn tệp được trích dẫn trong tài liệu đều tồn tại trong codebase. Cổng cứng qua `--strict`; lỗi mềm khi không có cờ. | Có (qua `--strict` trong CI) |
| `check:cli-i18n`               | Các chuỗi lệnh CLI có mặt trong tất cả các tệp locale i18n                                                                                                                   | Có                           |
| `check:openapi-coverage`       | Đặc tả OpenAPI bao phủ ít nhất một ngưỡng sàn đã được ratchet của các route thực tế                                                                                          | Có                           |
| `check:openapi-security-tiers` | Các chú thích cấp độ bảo mật trong `openapi.yaml` nhất quán với các phân loại trong `routeGuard.ts`                                                                          | **Khuyến nghị**              |
| `check:openapi-routes`         | Mọi đường dẫn trong `openapi.yaml` đều phân giải tới một `route.ts` thực (chống bịa đặt)                                                                                     | Có                           |
| `check:docs-symbols`           | Mọi tham chiếu `/api/...` trong `docs/**/*.md` đều phân giải tới một `route.ts` thực (chống bịa đặt)                                                                         | Có                           |
| `i18n translation drift`       | Các khóa chưa được dịch trong những tệp locale i18n — chỉ cảnh báo                                                                                                           | **Khuyến nghị**              |

### Job: `i18n-ui-coverage`

| Tập lệnh                          | Xác thực                                                                                                                                                                                                    | Chặn            |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `check-ui-keys-coverage` (inline) | Độ bao phủ khóa i18n của UI đạt ≥ 65%                                                                                                                                                                       | Có              |
| `check-ui-value-drift` (inline)   | Một **giá trị** tiếng Anh được viết lại không để lại bản dịch lỗi thời nào                                                                                                                                  | Có              |
| `check-new-key-coverage` (inline) | Một khóa tiếng Anh **mới** có mặt trong mọi locale                                                                                                                                                          | Có              |
| `check-translation-ratio`         | Tỷ lệ bản dịch thực tế trên mỗi locale (các mục giống tiếng Anh / mục giữ chỗ / mục thiếu nằm ngoài danh sách cho phép) không được vượt quá `config/quality/i18n-translation-baseline.json` + biên dung sai | **Khuyến nghị** |

Yêu cầu `fetch-depth: 0` — cổng kiểm tra sai lệch giá trị so sánh diff của `en.json` với merge base.

#### `check-ui-value-drift` — cổng kiểm tra bản dịch lỗi thời

Phát hiện một loại hồi quy i18n mà các cổng kiểm tra khác về mặt cấu trúc không thể nhận ra: một giá trị tiếng Anh
được viết lại nhưng các bản dịch bắt nguồn từ tiếng Anh _trước đó_ vẫn còn nguyên, khiến
người dùng không dùng tiếng Anh tiếp tục đọc nội dung được diễn đạt đầy tự tin nhưng giờ đã sai.

Điều này đã thực sự được phát hành. `oauthModal.googleOAuthWarning` được viết lại khi trình hỗ trợ đăng nhập
Antigravity được bổ sung (#5203); **39 trong số 43 locale** vẫn giữ nội dung yêu cầu người vận hành "sao chép
toàn bộ URL và dán vào bên dưới" — một quy trình không thể hoàn tất đối với nhà cung cấp đó. Vấn đề này
không được phát hiện cho đến #8463 vì:

- `sync-ui-keys` chỉ điền bù các khóa **không tồn tại**, không bao giờ xử lý các khóa **lỗi thời**;
- `check-ui-keys-coverage` đếm _sự hiện diện_ của khóa, vì vậy một bản dịch lỗi thời vẫn được tính là đã bao phủ;
- `check-translation-drift` theo dõi các bản sao tài liệu `docs/i18n/<locale>/**.md` —
  công cụ này không bao giờ đọc `src/i18n/messages/*.json`. Chặn trong job `docs-sync-strict` kể từ lần
  đồng bộ lại 2026-09: chỉnh sửa tài liệu cốt lõi → `npm run i18n:run -- --files=<doc>` (theo từng phần, ít tốn kém).

**Nhận biết diff, không dựa trên baseline.** Công cụ so sánh `en.json` tại merge base với
working tree; đối với mọi khóa có giá trị tiếng Anh đã thay đổi, bất kỳ locale nào vẫn giữ một
bản dịch chưa được cập nhật đều bị coi là lỗi thời. Cách này có chủ đích **đóng băng phần nợ tồn đọng** — diff
không thể cho biết một bản dịch tồn tại lâu nay bắt nguồn từ phiên bản tiếng Anh cũ nào, vì vậy cổng kiểm tra
chỉ đánh giá những gì thay đổi hiện tại tác động đến. Giải pháp thay thế (baseline hash theo từng khóa) sẽ cần
một tệp được tạo có kích thước khoảng 600 KB, lớn gấp 3 lần baseline hiện có lớn nhất và thay đổi liên tục
trong mọi PR i18n.

Có hai cách để đáp ứng yêu cầu:

1. cập nhật các bản dịch bị ảnh hưởng, hoặc
2. đặt chúng thành `__MISSING__:<new english>` — khi đó runtime sẽ cung cấp nội dung tiếng Anh đã sửa
   (`src/i18n/request.ts::deepMergeFallback`, #7258) và khóa sẽ được đưa vào hàng đợi dịch.

Nếu **ý nghĩa** của chuỗi đã thay đổi, hãy ưu tiên **đổi tên khóa**: một khóa mới không thể kế thừa
bản dịch lỗi thời. Đó là mẫu mà #8463 đã sử dụng.

```bash
npm run i18n:check-value-drift          # nghiêm ngặt (CI chạy chế độ này)
npm run i18n:check-value-drift:warn     # chỉ báo cáo
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

Thoát với mã 0 cùng `SKIP reason=base-unresolved` khi không thể đọc catalog cơ sở (bản sao
shallow clone không có base ref), tương tự `check-openapi-breaking`.

### Job: `i18n`

Ma trận xác thực i18n đầy đủ (một job cho mỗi locale). Toàn bộ job mang tính khuyến nghị.

| Tập lệnh                        | Xác thực                                   | Chặn                                                         |
| ------------------------------- | ------------------------------------------ | ------------------------------------------------------------ |
| `validate_translation.py quick` | Mức độ hoàn chỉnh của bản dịch theo locale | **Khuyến nghị** (`continue-on-error: true` trên toàn bộ job) |

### Job: `pr-test-policy`

Chỉ chạy trên các pull request.

| Tập lệnh               | Xác thực                                                                                                                                  | Chặn |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| `check:pr-test-policy` | Các PR thay đổi mã production trong `src/`, `open-sse/`, `electron/` hoặc `bin/` phải bổ sung hoặc cập nhật kiểm thử (Quy tắc cứng #8)    | Có   |
| `check:test-masking`   | Các tệp kiểm thử đã thay đổi không làm giảm tổng số lượng assert ròng hoặc thêm các mệnh đề hiển nhiên `assert.ok(true)`                  | Có   |
| `check:pr-evidence`    | Nội dung PR viện dẫn bằng chứng kiểm thử/VPS cho thay đổi (cơ giới hóa Quy tắc cứng #18 bằng cách grep nội dung PR — dễ lỗi, xem Backlog) | Có   |

### Job: `test-vitest`

Chạy sau `build`. Chặn merge nếu thất bại.

| Bộ kiểm thử      | Xác thực                                                             | Tính chặn                                                                                                                    |
| ---------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | Máy chủ MCP (110 công cụ), autoCombo, bộ nhớ đệm — trình chạy vitest | Có                                                                                                                           |
| `test:vitest:ui` | Kiểm thử thành phần UI — trình chạy vitest                           | **Có tính chặn** — các lỗi tồn tại từ trước được loại trừ rõ ràng trong `vitest.config.ts`; lỗi mới sẽ khiến tác vụ thất bại |

### Quy trình làm việc hằng đêm (được lập lịch, mang tính khuyến nghị)

Các quy trình này chạy theo lịch cron (và `workflow_dispatch`), không bao giờ chạy trên PR. Tất cả đều mang tính khuyến nghị.

| Quy trình làm việc     | Xác thực                                                                                                                                                                     | Tính chặn       |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `nightly-property`     | Kiểm thử thuộc tính fast-check với seed ngẫu nhiên + số lượt chạy cao                                                                                                        | **Khuyến nghị** |
| `nightly-resilience`   | Ngưỡng tăng trưởng heap, chèn lỗi hỗn loạn, kiểm thử tải/độ bền bằng k6                                                                                                      | **Khuyến nghị** |
| `nightly-llm-security` | Biện pháp chống chèn promptfoo (chế độ chặn) + các phép dò garak (bỏ qua khi không có khóa bí mật của nhà cung cấp)                                                          | **Khuyến nghị** |
| `nightly-schemathesis` | Fuzzing hợp đồng OpenAPI (schemathesis) đối với một OmniRoute đang hoạt động bằng `docs/openapi.yaml` — phát hiện vi phạm đặc tả / lỗi 500 chưa được xử lý (Giai đoạn 8 B.4) | **Khuyến nghị** |
| `nightly-mutation`     | Điểm kiểm thử đột biến Stryker trên luồng kiểm thử đơn vị nhanh — các đột biến còn tồn tại cho thấy các phép xác nhận yếu                                                    | **Khuyến nghị** |
| `nightly-compat`       | Ma trận tương thích của Node engine trên các phạm vi `engines.node` được hỗ trợ                                                                                              | **Khuyến nghị** |

---

## Giai đoạn tăng tốc (2026-08-30 → v4.0 LTS): mọi đường cơ sở đều được nới lỏng 20%

Quyết định của chủ sở hữu (2026-08-30): cho đến khi hoàn tất mô-đun hóa ở v4.0, tốc độ phát hành quan trọng hơn
việc giữ nguyên giới hạn nợ kỹ thuật. Mọi đường cơ sở siết dần dạng **số** đã được nới lỏng 20% trong một
lần thực hiện có thể kiểm toán, và giai đoạn này được khai báo trong `config/quality/quality-baseline.json`:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| Nội dung thay đổi                                                                                                                                                                                                           | Vị trí                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — các số đếm mà thấp hơn là tốt hơn ×1.2, các tỷ lệ phần trăm mà cao hơn là tốt hơn ÷1.2 (giữ mức sàn độ bao phủ 60, `eslintErrors` vẫn là 0, `eslintWarnings` 0 → 20% số lượng vô hiệu hóa đã đóng băng) | `quality-baseline.json` (ghi chú `_relax_velocity_2026_08_30` liệt kê mọi giá trị trước → sau)         |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                                            | `complexity-baseline.json`, `duplication-baseline.json`                                                |
| `cap`, `testCap`, mọi giới hạn số dòng `frozen[*]` / `testFrozen[*]` ×1.2                                                                                                                                                   | `file-size-baseline.json`                                                                              |
| số lượng trên mỗi tệp / trên mỗi mã TS ×1.2                                                                                                                                                                                 | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json` |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                         | `scripts/check/check-openapi-coverage.mjs`                                                             |
| `--require-tighten` chuyển thành khuyến cáo khi `_policy.requireTighten === false`                                                                                                                                          | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| tác vụ `bank-ratchet-shrinks` hằng đêm tạm dừng (nó sẽ ghi nhận phần thu hẹp đo được và triệt tiêu dư địa)                                                                                                                  | `.github/workflows/nightly-release-green.yml`                                                          |

Các danh sách cho phép (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) **không** phải là ngân sách và không bị thay đổi. Các cổng chính sách đạt/không đạt (bí mật, quy tắc SQL,
hợp đồng tài liệu/biến môi trường, tính tương đồng i18n, kiểm thử đơn vị) không thay đổi — một kiểm thử đỏ vẫn là một kiểm thử đỏ.

**Công cụ**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — thao tác
  nới lỏng một lần (`scripts/quality/relax-baselines.mjs`); từ chối chạy hai lần với cùng một
  ghi chú.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  đo mọi cổng dạng số theo cùng cách CI thực hiện và in ra dư địa còn lại của từng cổng
  (`scripts/quality/baseline-headroom.mjs`). Tác vụ `baseline-headroom` hằng đêm đăng
  bảng lên issue đang hoạt động **📈 Dư địa đường cơ sở (giai đoạn tăng tốc)** và thêm nhãn
  `headroom-alert` khi bất kỳ cổng nào chỉ còn cách giới hạn tối đa không quá 10% hoặc đã vượt giới hạn. Issue đó
  là cảnh báo sớm: một ngân sách bị lấp đầy chỉ trong vài ngày nghĩa là phần nới lỏng đang bị tiêu thụ bởi
  một vài PR, chứ không phải toàn bộ nhóm — hãy xem các ghi chú `_rebaseline_*` của cổng vi phạm.

**Chế độ mã mới (Clean-as-You-Code) — kể từ 2026-08-30, chỉ dành cho đường xử lý nhanh của PR**

Trong các sự kiện `pull_request`, `quality.yml` truyền `--base-ref <PR base SHA>` tới `check:file-size`,
`check:complexity-ratchets` và `check:dead-code`. Trong chế độ đó, cổng so sánh HEAD với
merge-base **chỉ giới hạn ở các tệp mà PR đã thay đổi** (`scripts/check/newCodeMode.mjs`:
merge-base được hiện thực hóa trong một `git worktree` tạm thời, ESLint/knip chạy tại đó và trên HEAD, sau đó
các số lượng theo từng tệp được lấy chênh lệch):

- **chặn** — PR đã thêm các vi phạm độ phức tạp cyclomatic/cognitive hoặc các export không dùng trong những tệp mà nó thay đổi
  (`complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=` trong nhật ký);
- **khuyến cáo** — tổng toàn cục so với đường cơ sở đã đóng băng. Độ lệch kế thừa không bao giờ làm đỏ một
  PR không liên quan; độ lệch được đóng băng lại khi đối soát bản phát hành và được tác vụ dư địa theo dõi.

Các lần chạy `workflow_dispatch`, lượt quét release-green và tác vụ dư địa hằng đêm không có cơ sở PR
nên vẫn dùng phép so sánh tuyệt đối (toàn cục). Độ bao phủ, mức trùng lặp và độ bao phủ kiểu hiện vẫn mang tính toàn cục
(công cụ của chúng không tạo ra chênh lệch theo từng tệp với chi phí thấp) — đây là các ứng viên để áp dụng cách xử lý tương tự.

**Kết thúc giai đoạn tại v4.0 (LTS = chặt chẽ hơn trước, không phải "trở lại bình thường")**

1. Trên đầu nhánh `release/v4.0.0` thuần: chạy `npm run quality:headroom --json` để lưu lại, sau đó chạy
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update`, cùng với
   `--update` của từng cổng kiểm tra kiểu — mọi đường cơ sở đều giảm xuống giá trị đo được.
2. Xóa `_policy` khỏi `quality-baseline.json` (kích hoạt lại `--require-tighten` và việc
   tích lũy hằng đêm), khôi phục `THRESHOLD = 36` (hoặc cao hơn) trong `check-openapi-coverage.mjs`.
3. Siết chặt hơn mức đo được ở những nơi việc mô-đun hóa đã phát huy hiệu quả: đưa `cap` kích thước tệp về 1000
   (hoặc 800), tăng ngưỡng tối thiểu về độ bao phủ thêm 5, đặt số lượng export không dùng là 0 cho các package đã được mô-đun hóa.

## Đường cơ sở ratchet (`quality-baseline.json`)

Công cụ ratchet (`scripts/quality/check-quality-ratchet.mjs`) đọc `quality-baseline.json`
và so sánh tệp này với `quality-metrics.json` vừa được thu thập. Bất kỳ chỉ số nào suy giảm
vượt quá epsilon của nó đều khiến bản dựng thất bại.

Các chỉ số hiện được theo dõi:

| Chỉ số                | Hướng  | Ý nghĩa                             |
| --------------------- | ------ | ----------------------------------- |
| `eslintWarnings`      | `down` | Số cảnh báo ESLint không được tăng  |
| `coverage.statements` | `up`   | Độ bao phủ câu lệnh không được giảm |
| `coverage.lines`      | `up`   | Độ bao phủ dòng không được giảm     |
| `coverage.functions`  | `up`   | Độ bao phủ hàm không được giảm      |
| `coverage.branches`   | `up`   | Độ bao phủ nhánh không được giảm    |

Để cập nhật đường cơ sở sau một cải thiện thực sự:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

Cờ `--update` ghi các giá trị đo được hiện tại vào `quality-baseline.json`.
Hãy commit tệp này cùng với thay đổi đã cải thiện chỉ số. Một PR cải thiện một
chỉ số mà không cập nhật đường cơ sở sẽ bị `--require-tighten` phát hiện (Giai đoạn 6A.5,
đang chờ triển khai).

### Ratchet CodeQL: tần suất làm mới và kích hoạt thủ công

`check:codeql-ratchet` đọc **trạng thái repo, được làm mới theo lịch — không phải theo từng PR.**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` báo cáo
`state: configured`, `schedule: weekly`: đây là lượt quét theo thiết lập mặc định của GitHub, không phải
phân tích cho mỗi lần push. Hệ quả: sau khi một PR SỬA các cảnh báo được merge, ratchet vẫn tiếp tục đọc
số lượng cũ, cao hơn cho đến khi lượt quét theo lịch tiếp theo chạy — vì vậy, nó báo cáo sự suy giảm
trên mọi PR đang mở, bao gồm cả các PR tiếp nối của chính PR sửa lỗi đó, cho đến khi lượt quét cập nhật kịp.

**Làm mới thủ công**: `gh workflow run codeql.yml --ref release/vX.Y.Z` chạy lại
quá trình phân tích và phát hành lại các cảnh báo trong vòng vài phút. Hãy đọc `.github/workflows/codeql.yml`
trước — phần đầu tệp giải thích rằng nó chỉ dùng `workflow_dispatch` **vì nó xung đột với
"thiết lập mặc định" của GitHub** (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`). Việc khôi phục các trigger `push`/`pull_request`/
`schedule` trước tiên yêu cầu **chủ sở hữu thực hiện thao tác**: Settings → Code security →
CodeQL: Default → Advanced. Không thêm trigger `schedule:` khi chưa chuyển đổi thiết lập này — nó
sẽ chỉ tạo ra các lượt chạy thất bại.

**Siết chặt đường cơ sở sau khi số lượng giảm** — `node scripts/check/check-codeql-ratchet.mjs
--update` ghi số lượng mới đo được vào `quality-baseline.json` →
`metrics.codeqlAlerts.value`, để ratchet không âm thầm cho phép chỉ số suy giảm trở lại
ngưỡng cũ. Ví dụ thực tế (2026-09-02/03): PR #12502 đã sửa 7 cảnh báo thực
(13 → 6 cảnh báo mở được đo); PR #12530 đã siết chặt đường cơ sở cố định từ 11 → 6 cho khớp; sau đó,
6 cảnh báo còn lại được loại bỏ kèm lý do riêng cho từng cảnh báo, đưa số cảnh báo mở xuống 0.

**Việc loại bỏ cảnh báo do người vận hành quyết định (Quy tắc cứng #14)** — không bao giờ loại bỏ cảnh báo CodeQL
mà không ghi lại lý do kỹ thuật trong nhận xét loại bỏ: `won't fix` đối với
một yêu cầu của giao thức thượng nguồn, `used in tests` đối với một fixture kiểm thử, `false positive`
đối với một bộ khử độc mà CodeQL không thể nhận diện (tiền lệ: `docs/security/ERROR_SANITIZATION.md`).

---

## Chính sách thử lại kiểm thử (WS5.4, v3.8.49)

Việc thử lại được áp dụng theo từng runner, không bao giờ áp dụng đại trà trên toàn hệ thống — thử lại đại trà sẽ biến các lỗi hồi quy thực sự
thành những lỗi chập chờn không thể nhận thấy:

| Runner           | Chính sách                                                                                                                                                    | Lý do                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | `retries: 1` chỉ trong CI, với `trace: on-first-retry`                                                                                                        | Thời điểm của trình duyệt/mạng thực sự không xác định; một lần thử lại kèm trace biến lỗi chập chờn thành một artifact có thể chẩn đoán |
| Vitest           | KHÔNG thử lại toàn cục. Một kiểm thử đã được chứng minh là chập chờn sẽ được thử lại rõ ràng ở cấp từng kiểm thử (hiển thị trong diff, được xem xét trong PR) | Giữ danh sách cách ly trong repo, không bao giờ mập mờ                                                                                  |
| node:test (unit) | KHÔNG BAO GIỜ thử lại                                                                                                                                         | Một kiểm thử đơn vị chập chờn là lỗi trong chính kiểm thử đó — hãy sửa nó, đừng chạy lại để cầu may                                     |

SLO mục tiêu sau khi có dữ liệu đo từ xa về lỗi chập chờn (WS5.2/5.3): tỷ lệ lỗi chập chờn <1% trên mỗi kiểm thử
(ngưỡng "sửa ngay"), tỷ lệ thành công ≥95% trên mỗi pipeline. Các giá trị tham chiếu trong ngành —
hãy hiệu chỉnh lại dựa trên các phép đo của chính chúng ta.

## Độ trôi ratchet ở cấp bản phát hành (WS5.5, v3.8.49)

Khi một ratchet (kích thước tệp, độ phức tạp, cảnh báo eslint) hồi quy trên đầu mút bản phát hành THUẦN TÚY
— tức là SỰ KẾT HỢP của các lần merge gây ra hồi quy, và không PR riêng lẻ nào tự tái hiện được
hồi quy trên branch của nó — trách nhiệm sửa lỗi thuộc về **release captain, một lần, trên
release branch**: ưu tiên tách mã/tái cấu trúc; chỉ tái lập baseline khi có mục giải trình
được ghi lại. Không bao giờ đẩy độ trôi do kết hợp sang PR của người đóng góp, và không bao giờ
tái lập baseline theo từng PR (điều đó che giấu các hồi quy thực sự). Trước tiên hãy phân biệt nguyên nhân: tái hiện trạng thái
đỏ trên đầu mút thuần túy trong một probe worktree trước khi giả định rằng PR của bạn đã gây ra lỗi.

## Ghi nhận mức giảm ratchet — chiều đi xuống (#8584)

Ratchet chỉ tự động một nửa, và đó lại là nửa sai. **Nâng** một giới hạn là một thao tác
chỉnh sửa JSON thủ công chỉ mất mười giây và là cách nhanh nhất để gỡ chặn một PR đỏ.
**Hạ** một giới hạn yêu cầu ai đó chạy `--update` và commit kết quả — và trước khi
job `bank-ratchet-shrinks` được triển khai, không workflow nào thực hiện việc đó. Hệ quả đo được
(2026-07-25): 18 tệp bị đóng băng đã bằng hoặc thấp hơn giới hạn 800 dòng dành cho tệp mới, trường hợp tệ nhất
là 132× (`src/shared/validation/schemas.ts`, 19 dòng nhưng mang giới hạn 2,523); trần
độ phức tạp tăng từ `1794 → 2169` qua khoảng 37 ghi chú tái lập baseline với đúng một
lần giảm (−1); và câu "siết chặt bằng `--update` trong chu kỳ tiếp theo" được viết 31 lần nhưng chỉ được thực hiện
một lần. Một giới hạn tồn tại lâu hơn đoạn mã đã tạo ra nó sẽ âm thầm biến mọi lần
phân rã mã hoàn tất thành dư địa tăng trưởng cho bất kỳ ai chỉnh sửa tệp tiếp theo.

`nightly-release-green.yml` → job **`bank-ratchet-shrinks`** khép kín vòng lặp đó:

|           |                                                                                                           |
| --------- | --------------------------------------------------------------------------------------------------------- |
| Chạy khi  | `schedule` (3×/ngày) + `workflow_dispatch` — chủ ý **không** chạy khi `push`                              |
| Đo lường  | `release/vX.Y.Z` cao nhất, cùng cơ chế phân giải + bảo vệ khỏi injection như `release-green`              |
| Ghi       | `check:file-size --update` và `check:complexity-ratchets --update` (cả hai theo thiết kế chỉ có thể giảm) |
| Xác minh  | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                  |
| Phân phối | một PR luôn cập nhật nhắm vào release branch — được force-update, không bao giờ tạo spam                  |

Việc ghi nhận được xử lý theo lô thay vì theo từng lần push vì nó không có yêu cầu về độ trễ (mức giảm
được ghi nhận trong vòng 8 giờ là chấp nhận được), trong khi chạy theo từng lần merge sẽ liên tục dựng lại branch của PR
trong các chiến dịch merge và phải trả chi phí cho một lượt quét ESLint đầy đủ mỗi lần. Việc phát hiện vẫn diễn ra khi
push (`release-green`); chỉ việc ghi nhận mới được xử lý theo lô.

### Trình xác minh an toàn

Job ghi vào các baseline mà không có người giám sát, vì vậy `verify-ratchet-bank.mjs` là thành phần khiến
việc đó có thể chấp nhận được. Nó diff cây sau `--update` với `HEAD` và **hủy job
trước khi bất kỳ commit nào tồn tại** — không mở PR — trừ khi mọi thay đổi đều thuộc một trong các trường hợp sau:

- một mục số `frozen` / `testFrozen` được **hạ xuống** hoặc **xóa**
- `complexity-baseline.json` → `count` được **hạ xuống**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` được **hạ xuống**

Mọi thay đổi khác đều thất bại: nâng một số, thêm một mục, thay đổi `cap`/`testCap`, hoặc
xóa/viết lại một ghi chú `_rebaseline_*` (các ghi chú đó là dấu vết kiểm toán giải thích lý do tồn tại của từng
trần và được lưu bên trong cùng đối tượng `frozen` với các mục tệp).
Một bot có thể nâng giới hạn sẽ hoàn toàn tệ hơn hiện trạng. Cơ chế bảo vệ chống hồi quy:
`tests/unit/verify-ratchet-bank.test.ts`.

Job không bao giờ push lên `release/*` — một người sẽ merge PR, vì vậy phép đo sai
không thể được đưa vào mà chưa qua xem xét.

## Chính sách danh sách cho phép

Mọi cổng kiểm tra không thể thất bại do các vi phạm đã tồn tại từ trước đều sử dụng một danh sách cho phép cố định
(ví dụ: `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). Chính sách như sau:

**Khắc phục nguyên nhân gốc; chỉ sử dụng danh sách cho phép khi vi phạm đã tồn tại từ trước và
không thể được khắc phục trong cùng một PR.**

Khi thêm một mục vào danh sách cho phép:

1. Bao gồm một chú thích nêu rõ lý do.
2. Tham chiếu đến issue theo dõi (ví dụ: `// #3498 — Tính năng Giai đoạn 2, chưa được triển khai`).
3. Xóa mục đó trong cùng PR khắc phục vi phạm — một mục lỗi thời không còn
   bỏ qua một vi phạm đang hoạt động thì bản thân nó cũng là một lỗi (cơ chế thực thi đối với mục lỗi thời 6A.3 sẽ
   khiến cổng kiểm tra thất bại khi gặp một mục mồ côi trong danh sách cho phép sau khi được triển khai).

**Không** thêm các mục vào danh sách cho phép chỉ để các bài kiểm thử vượt qua nhanh hơn. Một cổng kiểm tra xanh với danh sách cho phép ngày càng dài
sẽ tạo ra cảm giác sai lệch về chất lượng.

### Khi một cổng kiểm tra thất bại trên PR của bạn

1. **Đọc kỹ đầu ra của cổng kiểm tra** — đầu ra cho bạn biết chính xác tệp hoặc ký hiệu nào đã vi phạm
   quy tắc.
2. **Khắc phục vi phạm** — hầu hết các cổng kiểm tra là các phép kiểm tra hệ thống tệp có tính tất định và sẽ vượt qua ngay khi
   mã nguồn chính xác.
3. **Nếu vi phạm đã tồn tại từ trước** (tức là bạn không tạo ra vi phạm đó nhưng cổng kiểm tra giờ đây
   đã bao quát nó): thêm một mục vào danh sách cho phép kèm chú thích nêu lý do và một issue theo dõi.
4. **Nếu cổng kiểm tra thuộc loại ratchet** (độ bao phủ, cảnh báo ESLint, trùng lặp, độ phức tạp):
   thay đổi của bạn đã làm chỉ số xấu đi. Hãy khắc phục vấn đề cơ bản hoặc (trong trường hợp hiếm gặp) chạy
   `npm run quality:ratchet -- --update` nếu thay đổi là có chủ đích và mức suy giảm của chỉ số
   có thể chấp nhận được — nhưng hãy ghi rõ lý do trong phần mô tả PR.
5. **Các cổng kiểm tra mang tính tư vấn** (`continue-on-error: true`) chỉ cung cấp thông tin — chúng không chặn
   việc hợp nhất nhưng sẽ xuất hiện trong phần tóm tắt CI. Dù vậy, vẫn nên khắc phục chúng.

---

## Thêm một cổng kiểm tra mới

1. Tạo `scripts/check/check-<name>.mjs` (hoặc `.ts`). Các cổng kiểm tra chính sách thoát với mã 0/1.
   Các cổng kiểm tra kiểu ratchet xuất một chỉ số vào `quality-metrics.json` thông qua `collect-metrics.mjs`.
2. Thêm `"check:<name>": "node scripts/check/check-<name>.mjs"` vào `package.json`.
3. Tích hợp cổng kiểm tra vào `.github/workflows/ci.yml` trong job phù hợp
   (chính sách → `lint` hoặc `docs-sync-strict`; ratchet → `quality-gate`).
4. Nếu cổng kiểm tra có danh sách cho phép, hãy áp dụng `reportStaleEntries()` từ
   `scripts/check/lib/allowlist.mjs` để các mục lỗi thời được tự động phát hiện.
5. Viết một bài kiểm thử trong `tests/unit/build/` để bao quát logic phát hiện của cổng kiểm tra.
6. Cập nhật tài liệu này (thêm một hàng vào bảng job liên quan).

---

## Công cụ dành cho tác nhân: LSP-in-the-loop (tùy chọn tham gia)

Ngoài các cổng kiểm tra CI, OmniRoute còn cung cấp một giàn khung `agent-lsp` **tùy chọn tham gia**
(một `.mcp.json` ở cấp dự án, Fase 7 Task 15). Tạo `.mcp.json`
để cung cấp máy chủ ngôn ngữ TypeScript cho các tác nhân lập trình, nhờ đó chúng phân giải ký hiệu /
chẩn đoán **trước khi** viết mã — một cơ chế đồng hành biên dịch-trước-khi-tuyên-bố dành cho
`typecheck:core`, giúp loại bỏ lỗi "ký hiệu bịa đặt" ngay từ nguồn. Cơ chế này được chủ ý
không tự động tải (bạn tự chọn và xác minh cầu nối MCP↔LSP); một mục bị hỏng chỉ ghi lại
lỗi kết nối và không bao giờ làm gián đoạn các phiên làm việc.

---

## Danh sách tồn đọng cần hợp lý hóa (đánh giá ROI — Giai đoạn 9 Đợt 3)

Danh mục này đã được đối soát với `ci.yml` vào ngày 2026-06-17 (phiên bản trước đã bỏ sót
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence`). Việc đánh giá ROI trên tập đã đối soát
đã xác định các ứng viên hợp lý hóa sau đây. **Các thao tác hợp nhất là những thay đổi CI
mang tính cơ học; việc chuyển đổi/loại bỏ là các quyết định chính sách dành cho người vận hành.** Chưa có
nội dung nào dưới đây được áp dụng.

**Ngoài ra, các mục chưa được ghi nhận ở trên** (mang tính khuyến nghị, tín hiệu thấp): tác vụ `docs-lint`
(markdownlint + Vale, toàn bộ tác vụ có `continue-on-error`) và các workflow quét độc lập
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. `semgrepFindings: 0` có trong
`quality-baseline.json` nhưng chưa được kết nối với một cơ chế ratchet chặn trong `ci.yml` — số liệu này
hiện đang bị tách rời.

### Hợp nhất / loại bỏ trùng lặp (mang tính cơ học, rủi ro thấp hơn)

Mỗi ứng viên đã được xác thực dựa trên trạng thái cổng kiểm soát thực tế vào ngày 2026-06-17 (tin tưởng nhưng vẫn xác minh);
một số thao tác hợp nhất tưởng như "hiển nhiên" hóa ra lại che giấu nợ kỹ thuật và **không** thể thay thế trực tiếp một cách an toàn.

- **`check:docs-sync` chạy hai lần** — chạy độc lập trong tác vụ `lint`, sau đó chạy lại bên trong `check:docs-all` (`docs-sync-strict`) và hook pre-commit của husky. ✅ **ĐÃ XONG** — đã loại bỏ lệnh gọi độc lập trong `lint`.
- **Quét CVE** — ❌ **KHÔNG thể hợp nhất trực tiếp một cách an toàn.** `audit:deps` buộc thất bại khi có bất kỳ CVE mức high/critical nào; `check:vuln-ratchet` (osv) chỉ thất bại khi có _hồi quy_ so với đường cơ sở (hiện có 1 MODERATE). Ngữ nghĩa khác nhau — việc loại bỏ `audit:deps` sẽ làm mất cổng kiểm soát tuyệt đối đối với mức high/critical. Giữ cả hai.
- **Phát hiện chu trình** — ❌ **KHÔNG thể hợp nhất trực tiếp một cách an toàn.** `check:circular-deps` (dpdm) báo cáo **91 chu trình** (đó là lý do tác vụ này chỉ mang tính khuyến nghị); không thể nâng thành tác vụ chặn nếu chưa xử lý chúng trước, và phạm vi của nó rộng hơn `check:cycles` vốn đã được tuyển chọn và đang đạt trạng thái xanh. Giữ `check:cycles` ở chế độ chặn; việc xử lý 91 chu trình dpdm là một hạng mục tồn đọng riêng.
- **Độ phức tạp** — ✅ **ĐÃ XONG** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): một lượt quét ESLint, đếm theo ruleId để các đường cơ sở cyclomatic+max-lines và cognitive vẫn độc lập; các tác vụ riêng lẻ `check:complexity` / `check:cognitive-complexity` vẫn được giữ lại để chạy `--update` cục bộ.
- **Chống ảo giác `/api`** — ✅ **ĐÃ XONG** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): một lần kiểm kê FS đối với `src/app/api`, openapi-routes + docs-symbols vẫn báo cáo độc lập; các tác vụ riêng lẻ vẫn được giữ lại để chạy cục bộ.
- **`check:node-runtime` chạy trong 11 tác vụ** — ⚠️ **ROI thấp.** Mỗi tác vụ dùng một runner riêng và bước kiểm tra này mất <1 giây; tổng thời gian tiết kiệm được khoảng 10 giây, nhưng đổi lại sẽ mất một lớp bảo vệ rẻ trên từng tác vụ. Không đáng để tạo ra biến động.
- **`typecheck:noimplicit:core` trong lint CI** — ✅ **đã loại bỏ khỏi tác vụ lint** (trước đây mang tính khuyến nghị với `continue-on-error`); bề mặt kiểu dữ liệu chặn là `typecheck:core` + `check:type-coverage`. Script cục bộ vẫn được giữ lại.

### Chuyển đổi / quyết định (chính sách của người vận hành)

- `check:openapi-security-tiers` (mang tính khuyến nghị) — ❌ **KHÔNG thể chuyển đổi trực tiếp một cách an toàn.** Tác vụ thoát với mã 0 nhưng cảnh báo rằng một số route `traffic-inspector` thuộc `LOCAL_ONLY_API_PREFIXES` thiếu chú thích `x-loopback-only: true`. Muốn thực thi bắt buộc thì trước tiên phải thêm các chú thích đó vào `openapi.yaml`.
- `typecheck:noimplicit:core` (mang tính khuyến nghị) — phần lớn đã được cơ chế ratchet chặn `check:type-coverage` bao phủ. Chuyển thành ratchet hoặc loại bỏ lượt chạy `tsc` thứ hai bị trùng lặp.
- `test:vitest:ui` (hiện **đang chặn**) — các lỗi tồn tại từ trước được loại trừ rõ ràng trong `vitest.config.ts` bằng các chú thích theo dõi `// #8618`; các lỗi mới sẽ làm tác vụ thất bại.
- `check:secrets` (gitleaks, ratchet chặn được cố định ở 3 trường hợp dương tính giả đã được ghi nhận) — đưa 3 trường hợp này vào danh sách cho phép để giảm xuống 0, hoặc hạ xuống chế độ khuyến nghị. Có sự chồng lấn với tính năng quét bí mật gốc của GitHub + `check:public-creds`.
- `check:pr-evidence` (đang chặn, grep phần văn xuôi trong nội dung PR) — rủi ro dương tính giả cao; nếu loại bỏ sẽ làm suy yếu việc thực thi Quy tắc Cứng #18, vì vậy đây thực sự là một quyết định chính sách.
- `semgrep` (tác vụ độc lập mang tính khuyến nghị) — chồng lấn với CodeQL đối với các nhóm OWASP; kết nối đường cơ sở của nó với một ratchet hoặc loại bỏ.

---

## Tài liệu liên quan

- Chuỗi cung ứng (nguồn gốc, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — cổng kiểm tra tính tương đương của tập khóa

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, job `i18n-ui-coverage`).
So sánh tập khóa lá của mọi tệp `src/i18n/messages/<locale>.json` với `en.json` và báo lỗi
khi có bất kỳ khóa lá nào bị thiếu hoặc dư, bất kể khóa đó được thêm vào khi nào. Các phần giữ chỗ
`__MISSING__:` được tính là hiện diện (nội dung của chúng thuộc phạm vi xử lý của cổng tỷ lệ). Đây là
phần bổ sung tuyệt đối cho hai cổng dựa trên diff/phần trăm: `check-ui-keys-coverage` áp dụng ngưỡng
tối thiểu 80 % cho mỗi locale (thiếu 43 khóa trong tổng số ~13.000 vẫn được tính là 99,7 %) và
`check-new-key-coverage` chỉ đánh giá các khóa mà một PR thêm vào `en.json`. Một lô locale được tạo
từ `en.json` tại ngày nhánh của nó được tách ra rồi được dịch trong nhiều ngày, trong khi nhánh cơ sở
tiếp tục bổ sung khóa; bản thân PR của lô không thêm khóa nào, vì vậy cả hai cổng liên quan đều im lặng
khi lô 1 (#13044) được hợp nhất trong tình trạng thiếu 43 khóa ở chín locale và lô 2 (#13660) thiếu
10 khóa ở tám locale (2026-09-15). Khắc phục trạng thái đỏ bằng
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers`; một khóa lá `extra`
có nghĩa là nguồn đã loại bỏ khóa đó — hãy xóa nó khỏi locale. `--warn` báo cáo mà không làm tác vụ
thất bại. `--catalog=cli` thực hiện cùng phép so sánh trên `bin/cli/locales`
(`npm run i18n:check-keys:cli`); cả hai bước đều nằm trong job `i18n-ui-coverage`.

#### `check-new-key-coverage` — cổng i18n cho khóa mới

Cổng song hành với `check-ui-value-drift`. Cổng kia phát hiện một giá trị tiếng Anh đã được
**viết lại** trong khi các bản dịch của nó không được cập nhật; cổng này phát hiện một khóa tiếng Anh
đã được **thêm vào** trong khi một số locale chưa bao giờ nhận được khóa đó.

`check-ui-keys-coverage` không thể phát hiện trường hợp này: nó áp dụng ngưỡng phần trăm tối thiểu cho
mỗi locale, và việc thiếu mười một khóa trong tổng số ~13.000 vẫn để độ bao phủ ở mức 99,9%. Một tỷ lệ
phần trăm cho mỗi ngôn ngữ không thể biểu đạt rằng "tính năng này được phát hành mà chưa được dịch" —
toàn bộ một tính năng có thể được đưa vào một locale mới mà không có văn bản nào nhưng con số vẫn
không thay đổi.

Sự cố mà cổng này mã hóa: Giai đoạn 3 của Orchestration Canvas đã dịch mười một khóa của nó trên
42 locale tồn tại vào thời điểm đó. Vài giờ sau, lô ngôn ngữ EU (#13044) nâng tổng số locale của
repo lên 51, và chín locale mới (`el`, `et`, `ga`, `hr`, `lt`, `lv`, `mt`, `sl`, `sr`) không bao giờ
nhận được các khóa này. `deepMergeFallback` thay thế một khóa bị thiếu bằng tiếng Anh, vì vậy dạng lỗi
là giao diện người dùng chưa được dịch chứ không phải giao diện trống — một lỗi có thật và hoàn toàn
im lặng theo thiết kế.

Giống như cổng song hành, cổng này **nhận biết diff**, so sánh tiếng Anh tại merge base với working
tree, vì vậy các khoảng trống tồn tại từ trước được giữ nguyên và không cần di chuyển dữ liệu để bật
cổng. Lối thoát: `__MISSING__:<english>` cho phép trì hoãn bản dịch trong khi vẫn bảo đảm runtime hoạt
động đúng. `vi` cấm các phần giữ chỗ (`tests/unit/i18n-vi-completeness.test.ts`) và yêu cầu bản dịch
thực sự.

#### `check-vitest-exclusions` — cổng kiểm tra các bài kiểm thử bị tạm gác

Một tệp trong danh sách `exclude` của `vitest.config.ts` là một bài kiểm thử không chạy, nhưng đối với
người đọc cây thư mục, nó trông như vẫn đóng góp vào độ bao phủ. Sáu mươi hai tệp đã tích tụ phía sau
chú thích `// #8618 — lỗi tồn tại từ trước; xóa mục loại trừ này khi đã khắc phục`. Issue #8618 đã được
đóng vào 2026-08-11 trong khi danh sách mà nó theo dõi tăng từ 45 lên 62 mục, mỗi mục mới đều kế thừa
một chú thích trỏ đến một issue đã đóng. Khi danh sách cuối cùng được đo lường theo từng tệp (#13204),
**51 trong số 62 tệp đã vượt qua trên cây hiện tại mà không cần thay đổi mã nguồn**.

Cổng yêu cầu mọi mục loại trừ phân giải thành một tệp thực phải (a) nêu tên một issue theo dõi và
(b) xuất hiện trong `config/quality/vitest-exclusions.json` cùng trạng thái đã đo lường của nó, để việc
thêm một mục trở thành một diff có thể được xem xét trong một tệp chuyên biệt thay vì chỉ là thêm một
dòng nữa vào mảng có 60 mục. Cổng chủ ý không chạy lại các bài kiểm thử bị loại trừ — việc đó tốn
~10 phút và thuộc về một job định kỳ; bản kiểm kê ghi lại thời điểm mỗi bài được đo lường gần nhất.
