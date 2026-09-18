# Resilience Guide (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/RESILIENCE_GUIDE.md) · 🇪🇹 [am](../../../am/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/RESILIENCE_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇷 [el](../../../el/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/RESILIENCE_GUIDE.md) · 🇪🇪 [et](../../../et/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/RESILIENCE_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇪 [ga](../../../ga/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ha](../../../ha/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/architecture/RESILIENCE_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/RESILIENCE_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/RESILIENCE_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/RESILIENCE_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇭 [km](../../../km/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/architecture/RESILIENCE_GUIDE.md) · 🇲🇲 [my](../../../my/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇵 [ne](../../../ne/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [or](../../../or/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/RESILIENCE_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/RESILIENCE_GUIDE.md) · 🇱🇰 [si](../../../si/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/architecture/RESILIENCE_GUIDE.md) · 🇷🇸 [sr](../../../sr/docs/architecture/RESILIENCE_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/RESILIENCE_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/RESILIENCE_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/RESILIENCE_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/RESILIENCE_GUIDE.md) · 🇺🇿 [uz](../../../uz/docs/architecture/RESILIENCE_GUIDE.md) · 🇳🇬 [yo](../../../yo/docs/architecture/RESILIENCE_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/RESILIENCE_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/RESILIENCE_GUIDE.md)

---

OmniRoute có ba cơ chế phục hồi riêng biệt nhưng có liên quan với nhau. Mỗi cơ chế có phạm vi và mục đích khác nhau. Hãy phân biệt rõ chúng khi gỡ lỗi hành vi định tuyến.

![Mô hình phục hồi 3 lớp](../diagrams/exported/resilience-3layers.svg)

> Nguồn: [diagrams/resilience-3layers.mmd](../diagrams/resilience-3layers.mmd)

## 1. Bộ ngắt mạch nhà cung cấp

**Phạm vi:** toàn bộ nhà cung cấp (ví dụ: `glm`, `openai`, `anthropic`).

**Mục đích:** ngừng gửi lưu lượng đến một nhà cung cấp liên tục gặp lỗi ở cấp dịch vụ/thượng nguồn.

**Triển khai:**

- Lớp cốt lõi: `src/shared/utils/circuitBreaker.ts`
- Kết nối: `src/sse/handlers/chatHelpers.ts`, `src/sse/handlers/chat.ts`
- API trạng thái: `GET /api/monitoring/health`
- API đặt lại: `POST /api/resilience/reset`
- Trình bao bọc: `open-sse/services/accountFallback.ts`
- Bảng DB: `domain_circuit_breakers`

**Trạng thái:**

- `CLOSED` — cho phép lưu lượng bình thường
- `DEGRADED` — vẫn cho phép lưu lượng, nhưng các lỗi gia tăng từ nhà cung cấp đang được theo dõi
- `OPEN` — nhà cung cấp tạm thời bị chặn; định tuyến tổ hợp sẽ bỏ qua nhà cung cấp đó
- `HALF_OPEN` — thời gian chờ đặt lại đã hết; cho phép yêu cầu thăm dò

**Giá trị mặc định có thể cấu hình (`open-sse/config/constants.ts`, được hiển thị trong Bảng điều khiển → Cài đặt → Khả năng phục hồi):**

| Loại    | Chuyển sang suy giảm tại | Mở mạch tại | Thời gian chờ đặt lại |
| ------- | ------------------------ | ----------- | --------------------- |
| OAuth   | 5 lần lỗi                | 8 lần lỗi   | 60s                   |
| API-key | 7 lần lỗi                | 12 lần lỗi  | 30s                   |
| Cục bộ  | được suy ra              | 2 lần lỗi   | 15s                   |

`degradationThreshold` kiểm soát thời điểm nhà cung cấp chuyển sang `DEGRADED`; `failureThreshold` kiểm soát thời điểm mạch mở và nhà cung cấp bị bỏ qua. Các hồ sơ nhà cung cấp cục bộ hiện chưa được hiển thị trên trang cài đặt Khả năng phục hồi.

**Mã kích hoạt:** chỉ các trạng thái cấp nhà cung cấp `[408, 500, 502, 503, 504]`. KHÔNG kích hoạt đối với lỗi cấp tài khoản (phần lớn lỗi 401/403/429 — các lỗi này thuộc cơ chế tạm ngưng hoặc khóa).

**Phục hồi lười:** khi trạng thái `OPEN` hết hạn, `getStatus()`, `canExecute()`, `getRetryAfterMs()` sẽ làm mới trạng thái thành `HALF_OPEN`. Không cần bộ hẹn giờ chạy nền.

---

### Cơ chế tạm ngưng nhà cung cấp toàn cục tùy chọn (cổng theo cửa sổ)

Một lớp thứ tư, **tùy chọn** (`PROVIDER_COOLDOWN_ENABLED`, mặc định **tắt**), duy trì
bộ nhớ xuyên suốt các yêu cầu về những nhà cung cấp đang gặp lỗi trong
`open-sse/services/providerCooldownTracker.ts`; cơ chế phân giải mục tiêu tổ hợp sẽ tham chiếu bộ nhớ này
để các yêu cầu tổ hợp liên tiếp không tiếp tục duyệt lại một nhà cung cấp vừa
gặp lỗi. Các mục cấp nhà cung cấp tuân theo cổng cửa sổ `PROVIDER_PROFILES`:

| Hồ sơ    | kích hoạt sau (`providerFailureThreshold`) | trong vòng (`providerFailureWindowMs`) | tạm ngưng trong (`providerCooldownMs`) |
| -------- | -----------------------------------------: | -------------------------------------: | -------------------------------------: |
| OAuth    |                                       `10` |                                `15min` |                                 `5min` |
| Khóa API |                                       `15` |                                `30min` |                                `10min` |

Khi chưa đạt ngưỡng, nhà cung cấp **không** được xem là đang tạm ngưng; một lần thành công sẽ xóa
cửa sổ. Thay vào đó, các mục cấp kết nối (`provider:connectionId`) tiếp tục sử dụng
cơ chế lùi theo cấp số nhân `minRetryCooldownMs → maxRetryCooldownMs`. Các giá trị ghi đè:
`OMNIROUTE_PROVIDER_BREAKER_{OAUTH,API_KEY}_{FAILURE_THRESHOLD,FAILURE_WINDOW_MS,COOLDOWN_MS}`.
Cơ chế bảo vệ chống hồi quy: `tests/unit/provider-cooldown-window-gate.test.ts`.

## 2. Thời gian chờ kết nối

**Phạm vi:** một kết nối/tài khoản/khóa riêng lẻ của nhà cung cấp.

**Mục đích:** bỏ qua một khóa gặp lỗi trong khi các kết nối khác của cùng nhà cung cấp vẫn tiếp tục phục vụ.

**Triển khai:**

- Đánh dấu không khả dụng: `src/sse/services/auth.ts::markAccountUnavailable()`
- Lựa chọn: `getProviderCredentials*` trong cùng tệp
- Tính thời gian chờ: `open-sse/services/accountFallback.ts::checkFallbackError()`
- Cài đặt: `src/lib/resilience/settings.ts`

**Các trường cho mỗi kết nối:**

- `rateLimitedUntil` — dấu thời gian cho đến khi thời gian chờ kết thúc
- `testStatus: "unavailable"`
- `lastError`, `lastErrorType`, `errorCode`
- `backoffLevel` — bộ đếm thời gian chờ tăng dần theo cấp số nhân

**Thời gian chờ mặc định:**

- Cơ sở OAuth: 5 giây
- Cơ sở khóa API: 3 giây
- Khóa API gặp lỗi 429: ưu tiên `Retry-After`/các header đặt lại/văn bản đặt lại có thể phân tích được từ thượng nguồn
- Lùi theo cấp số nhân: `baseCooldownMs * 2 ** failureIndex`

**Cơ chế chống hiệu ứng đám đông:** ngăn các lỗi đồng thời kéo dài thời gian chờ quá mức hoặc tăng `backoffLevel` hai lần.

**Trạng thái kết thúc (KHÔNG phải thời gian chờ):**

- `banned` — được đặt khi phát hiện từ khóa cấm/tài khoản bị cấm (xem [BAN_DETECTION](../security/BAN_DETECTION.md))
- `expired` (chuyển sang trạng thái kết thúc sau số lần thử lại có giới hạn — `EXPIRED_RETRY_MAX = 3` với thời gian chờ tăng theo cấp số nhân — để các lỗi OAuth tạm thời có thể tự phục hồi trước khi tài khoản bị vô hiệu hóa vĩnh viễn)
- `credits_exhausted`

Các trạng thái này được duy trì cho đến khi thông tin xác thực thay đổi hoặc người vận hành đặt lại chúng. Không ghi đè trạng thái kết thúc bằng trạng thái thời gian chờ tạm thời.

**Khôi phục trì hoãn:** khi `rateLimitedUntil` đã qua, kết nối sẽ lại đủ điều kiện. Sau khi sử dụng thành công, `clearAccountError()` sẽ xóa tất cả các trường lỗi.

### Liên kết phiên (#7274)

**Phạm vi:** một phiên máy khách (header `X-Session-Id` / `x-codex-session-id` / `x-omniroute-session`) được ghim vào một kết nối, cho **bất kỳ** nhà cung cấp nào.

**Mục đích:** giữ một tác nhân nhiều lượt (Claude Code, aider, các tác nhân tùy chỉnh) trên cùng một tài khoản qua nhiều yêu cầu, giúp giảm mất ngữ cảnh giữa các tài khoản và các lỗi 429 do khởi động nguội lặp lại trên những nhà cung cấp có trạng thái phiên theo từng tài khoản.

**Triển khai:**

- Xác định TTL: `src/sse/services/sessionAffinityPin.ts::resolveSessionAffinityTtlMs()`
- Lựa chọn/tạo ghim: `src/sse/services/sessionAffinityPin.ts::selectSessionAffinityConnection()`
- Trích xuất header (chung, cho mọi nhà cung cấp): `src/sse/services/auth.ts::extractSessionAffinityKey()`
- Bảng ghim được lưu trữ bền vững: `sessionAccountAffinity` (`src/lib/db/sessionAccountAffinity.ts`)
- Cài đặt: `sessionAffinityTtlMs` (TTL toàn cục tính bằng mili giây, `0` để vô hiệu hóa) — `src/lib/db/settings.ts`. Được đổi tên từ `codexSessionAffinityTtlMs` chỉ dành cho Codex thông qua migration `124_generic_session_affinity_ttl.sql`, migration này chuyển mọi TTL Codex đã cấu hình trước đó thành giá trị mặc định mới.

Trước #7274, `resolveSessionAffinityTtlMs()` lập tức trả về `0` cho mọi nhà cung cấp ngoại trừ `codex`, vì vậy cài đặt TTL (và các header phiên) không có hiệu lực ở bất kỳ nơi nào khác, mặc dù cơ chế ghim và việc trích xuất header vốn đã không phụ thuộc vào nhà cung cấp. Bản sửa lỗi đã loại bỏ nhánh trả về sớm đó; TTL giờ được áp dụng đồng nhất cho mọi nhà cung cấp sau khi được đặt toàn cục thành giá trị lớn hơn `0`.

Ba header liên kết phiên không bao giờ được chuyển tiếp lên thượng nguồn — các bộ thực thi tự xây dựng header thượng nguồn từ đầu thay vì chuyển tiếp header của máy khách, vì vậy chúng chỉ đóng vai trò là ID tương quan nội bộ.

### Lease kết nối phiên được quản lý độc quyền

**Phạm vi:** một máy khách/phiên HTTP được quản lý đang hoạt động sở hữu một kết nối OmniRoute đủ điều kiện.

**Mục đích:** cung cấp quyền sở hữu kết nối độc quyền, bền vững cho các máy khách cần một rào chắn định tuyến nghiêm ngặt xuyên suốt nhiều yêu cầu. Cơ chế này khác với liên kết phiên, vốn là một ưu tiên mềm về tính liên tục: một lease độc quyền lưu giữ trạng thái vòng đời trong SQLite, thực thi tính duy nhất toàn cục của chủ sở hữu đang hoạt động và kết nối đang hoạt động, đồng thời từ chối một thế hệ đã lỗi thời trước khi chuyển yêu cầu đến nhà cung cấp.

Tính năng này được bật theo lựa chọn cho từng khóa API. Một khóa được quản lý phải có phạm vi `lease:exclusive` và danh sách `allowedConnections` rõ ràng, không rỗng. Bất kỳ máy khách HTTP nào cũng có thể sử dụng endpoint vòng đời; không yêu cầu tên máy khách, user-agent, nhà cung cấp, phương thức OAuth hoặc mô hình. Lease sở hữu một kết nối chứ không phải một mô hình, vì vậy việc thay đổi mô hình vẫn giữ nguyên liên kết miễn là kết nối tiếp tục đủ điều kiện theo cách thông thường. Các quy tắc thông thường về mô hình, hạn ngạch, tình trạng, thời gian chờ và danh sách cho phép vẫn có hiệu lực chi phối và có thể chuyển cùng một thế hệ sang một kết nối đủ điều kiện khác đang rảnh.

Vòng đời sử dụng `POST /api/v1/session-leases` với các hành động JSON `acquire`, `renew` và `release`. Các yêu cầu suy luận được quản lý cung cấp giá trị `X-OmniRoute-Lease-Owner` không rõ nghĩa và `X-OmniRoute-Lease-Generation` chính xác. Giá trị chủ sở hữu sử dụng tiền tố `vlo_`, theo sau là 43 ký tự base64url; chỉ hàm băm SHA-256 của giá trị này được lưu trữ. Mỗi rào chắn điều phối cuối cùng cũng liên kết ID khóa API đã xác thực và ID kết nối đang hoạt động. Các header điều khiển lease bị loại bỏ khỏi nhật ký, các bản chụp yêu cầu được lưu giữ và header của bộ thực thi thượng nguồn.

Nếu định tuyến thông thường có các ứng viên được quản lý đủ điều kiện nhưng mọi ứng viên đang rảnh đều bị một lease ngoại lai đang hoạt động chiếm giữ, OmniRoute trả về HTTP `429`, mã không khả dụng do thiếu dung lượng lease, trạng thái đang chờ dung lượng và `Retry-After` có giới hạn được suy ra từ thời điểm hết hạn liên quan sớm nhất. Trường hợp thông thường không có kết nối đủ điều kiện không phải là tranh chấp lease và vẫn giữ nguyên ngữ nghĩa lỗi định tuyến hiện có.

Các cơ chế liên quan vẫn tách biệt:

- Mức chiếm dụng phiên OAuth là cơ chế phân phối mềm cục bộ theo tiến trình dành cho các tài khoản OAuth.
- Semaphore tài khoản cấp quyền thực hiện yêu cầu đồng thời và kết thúc khi một yêu cầu hoàn tất.
- Lease kết nối phiên được quản lý độc quyền là quyền sở hữu vòng đời bền vững với một rào chắn thế hệ.

---

## 3. Khóa mô hình

**Phạm vi:** bộ ba nhà cung cấp + kết nối + mô hình.

**Mục đích:** tránh vô hiệu hóa toàn bộ kết nối khi chỉ có một mô hình không khả dụng hoặc bị giới hạn hạn ngạch.

**Ví dụ:**

- Các nhà cung cấp áp dụng hạn ngạch theo mô hình trả về 429
- Các nhà cung cấp cục bộ trả về 404 khi thiếu một mô hình
- Lỗi quyền đối với chế độ/mô hình dành riêng cho nhà cung cấp (ví dụ: các chế độ Grok)

**Triển khai:** `open-sse/services/accountFallback.ts` — `lockModel()`, `clearModelLock()`, `getAllModelLockouts()`.

### Bảng điều khiển thời gian chờ mô hình (v3.8.0)

UI: Cài đặt → Thời gian chờ mô hình (`src/app/(dashboard)/dashboard/settings/components/ModelCooldownsCard.tsx`)

Liệt kê các khóa đang hoạt động với: nhà cung cấp, kết nối, mô hình, lý do, expiresAt. Người vận hành có thể bật lại mô hình theo cách thủ công từ thẻ này.

**REST API:**

- `GET /api/resilience/model-cooldowns` — liệt kê các khóa đang hoạt động
- `DELETE /api/resilience/model-cooldowns` — bật lại theo cách thủ công. Nội dung: `{provider, connection, model}`. Xác thực: quản trị.

### UI cài đặt khóa + phục hồi bằng cơ chế suy giảm khi thành công (v3.8.23)

Tính năng khóa mô hình đã chuyển từ hành vi mã hóa cứng luôn bật sang một tính năng hoàn toàn có thể cấu hình,
yêu cầu chủ động bật, có thẻ cài đặt riêng và cơ chế phục hồi tự khắc phục.

**Thẻ cài đặt:** Cài đặt → Khóa mô hình
(`src/app/(dashboard)/dashboard/settings/components/ModelLockoutCard.tsx`).
Thẻ này **khác biệt** với `ModelCooldownsCard` chỉ đọc ở trên (chỉ
_liệt kê_ các khóa đang hoạt động) — thẻ mới _cấu hình các tham số_. Các giá trị mặc định
nằm trong `DEFAULT_MODEL_LOCKOUT_SETTINGS`
(`src/lib/resilience/modelLockoutSettings.ts`):

| Cài đặt                 | Mặc định                         | Ý nghĩa                                                                             |
| ----------------------- | -------------------------------- | ----------------------------------------------------------------------------------- |
| `enabled`               | `false`                          | Công tắc chính — khóa mô hình **mặc định bị tắt**.                                  |
| `errorCodes`            | `[403, 404, 429, 502, 503, 504]` | Các trạng thái phía thượng nguồn được tính là lỗi trong phạm vi mô hình.            |
| `baseCooldownMs`        | `120_000` (120 giây)             | Thời lượng khóa ban đầu cho lần lỗi đầu tiên.                                       |
| `maxCooldownMs`         | `1_800_000` (30 phút)            | Giới hạn tối đa cho thời gian chờ đã tăng dần.                                      |
| `maxBackoffSteps`       | `10`                             | Số bước tăng thời gian chờ theo cấp số nhân tối đa.                                 |
| `useExponentialBackoff` | `true`                           | Xác định liệu các lỗi lặp lại có làm tăng thời gian chờ theo cấp số nhân hay không. |

Các cài đặt được lưu trữ thông qua kho cài đặt thông thường và được xác thực bằng
lược đồ cài đặt khả năng phục hồi; thẻ này giới hạn `baseCooldownMs`/`maxCooldownMs`
(với `maxCooldownMs ≥ baseCooldownMs`) và `maxBackoffSteps`.

**Phục hồi bằng cơ chế suy giảm khi thành công:** quá trình phục hồi **không** chỉ đơn thuần dựa vào việc bộ hẹn giờ hết hạn. Một phản hồi
thành công sẽ giảm dần số lần lỗi của mô hình, nhờ đó một mô hình đã phục hồi
giữa khoảng thời gian chờ sẽ ngừng tăng mức phạt (và được xóa khóa) trước khi bộ hẹn giờ kết thúc. Khi một
đích kết hợp thành công, `open-sse/services/combo.ts` gọi `decayModelFailureCount()`
(`open-sse/services/accountFallback.ts`), hàm này **giảm một nửa** giá trị
`failureCount` được lưu trữ (`Math.floor(failureCount / 2)`); khi giá trị đạt `0`, mục khóa
sẽ bị xóa hoàn toàn. Hàm tương ứng `recordModelLockoutFailure()`
tăng số lần lỗi (và tăng thời gian chờ) đối với các lỗi xảy ra trong
khoảng thời gian tăng mức phạt. Cơ chế suy giảm khi thành công này được bổ sung bên cạnh việc bộ hẹn giờ hết hạn thông thường —
cả hai cách đều có thể bật lại một mô hình.

**Trạng thái:** các khóa được lưu **trong bộ nhớ** (các `Map` theo từng tiến trình chứa
`ModelLockoutEntry`, được định danh bằng `provider:connectionId:model`), không được lưu bền vững vào
DB — chúng sẽ bị mất khi khởi động lại. _Các cài đặt_ được lưu bền vững; _trạng thái_ khóa
đang hoạt động chỉ là tạm thời.

---

## 4. Kiểm soát đồng thời cho Quota-Share (v3.8.36)

Các tài khoản đăng ký (GLM, MiniMax, v.v.) thường chỉ chấp nhận khoảng 1–3 yêu cầu đồng thời; việc vượt quá giới hạn này sẽ kích hoạt lỗi 429 và thời gian chờ. Vấn đề này đặc biệt nghiêm trọng với các tổ hợp **quota-share** (`qtSd/…`), trong đó nhiều khóa API dùng chung một tài khoản upstream. Ba lớp bảo vệ giúp ngăn một tài khoản dùng chung bị quá tải.

### Giới hạn đồng thời theo kết nối (`max_concurrent`)

Mỗi kết nối nhà cung cấp có thể khai báo một giới hạn `max_concurrent`
(`provider_connections.max_concurrent`, được thiết lập trong hộp thoại kết nối / API / DB).
Để trống nếu không muốn giới hạn. Đây là tham số duy nhất điều khiển lớp tuần tự hóa bên dưới — hãy đặt nó bằng mức đồng thời thực tế của tài khoản (ví dụ: GLM khoảng 1, MiniMax khoảng 2).

### Tuần tự hóa yêu cầu quota-share

Khi một lượt điều phối quota-share nhắm đến kết nối có khai báo `max_concurrent`
dương, các yêu cầu đồng thời gửi tới **tài khoản** đó được tuần tự hóa thông qua một semaphore theo từng kết nối (khóa `qsconn:<connectionId>`): các yêu cầu vượt mức sẽ **chờ trong hàng đợi** thay vì làm quá tải tài khoản. Cơ chế này là **fail-open** — nếu hàng đợi bão hòa hoặc hết thời gian chờ, yêu cầu vẫn tiếp tục mà không cần slot thay vì từ chối một yêu cầu có thể điều phối. Bật/tắt tại **Settings → Resilience → Quota-share per-connection
concurrency** (`resilienceSettings.quotaShareConcurrencyLimit.enabled`, mặc định
bật). Nếu không có giới hạn `max_concurrent`, hành vi không thay đổi.

> Cổng định tuyến quota-share (`selectQuotaShareTarget`, DRR + P2C) bản thân nó
> cũng là fail-open và chỉ _giảm mức ưu tiên_ của một kết nối đã đạt giới hạn — với
> một nhóm chỉ có một kết nối, nó không thể áp dụng giới hạn cứng, vì vậy semaphore này mới là cơ chế thực sự
> kiểm soát luồng yêu cầu quá mức.

### Thử lại theo thời gian chờ của tổ hợp

Đối với mọi chiến lược tổ hợp (khi được bật), một yêu cầu có khả năng dẫn đến lỗi 429
do thời gian chờ tạm thời NGẮN sẽ chờ cho đến khi khoảng thời gian đó kết thúc rồi được điều phối lại thay vì
trả về lỗi 429 — cơ chế này xử lý các cửa sổ TPM/RPM kiểu Gemini (retry-after khoảng 60 giây)
trên các tổ hợp nhiều mô hình, ví dụ: cả hai đích của một tổ hợp 2 mô hình đều chạm giới hạn tốc độ
theo mô hình. Được giới hạn bởi `comboCooldownWait` (`enabled`, `maxWaitMs`, `maxAttempts`,
`budgetMs`) trong **Settings → Resilience**. Cơ chế này không bao giờ chờ đối với `quota_exhausted`
(bị khóa đến nửa đêm) hoặc các nguyên nhân xác thực/không tìm thấy.

---

## 5. Kiểm soát tiếp nhận hàng đợi yêu cầu (v3.8.49 · issue #6593)

**Phạm vi**: hàng đợi giới hạn tốc độ cục bộ theo từng nhà cung cấp+kết nối (`open-sse/services/rateLimitManager.ts`,
được hỗ trợ bởi Bottleneck), nằm thấp hơn một lớp so với ba cơ chế nêu trên.

**`maxWaitMs` là tên được lưu trữ kế thừa dành cho thời hạn thực thi.**
`resilienceSettings.requestQueue.maxWaitMs` được truyền vào Bottleneck dưới dạng
`expiration` của tác vụ, với bộ đếm thời gian chỉ bắt đầu sau khi điều phối. Do đó, nó giới hạn
thời gian thực thi do bộ giới hạn quản lý, không phải thời gian nằm trong hàng đợi cục bộ. Việc hết hạn được
biểu thị dưới dạng `code: "RATE_LIMIT_EXECUTION_TIMEOUT"` cục bộ đáng tin cậy (HTTP 504);
tên mã hết thời gian chờ hàng đợi trước đây chỉ được chấp nhận để duy trì khả năng tương thích ngược
nội bộ đáng tin cậy. Giá trị mặc định là 15000ms; ghi đè thông qua
`RATE_LIMIT_MAX_WAIT_MS` (biến môi trường) hoặc bảng điều khiển (**Settings → Resilience**,
giới hạn trên của UI là 1–30000ms). Thời gian lưu lại trong hàng đợi không có thời hạn; hãy dùng
`maxQueueDepth` bên dưới để giới hạn số bên gọi đang xếp hàng.

**`maxQueueDepth` — giới hạn tiếp nhận tùy chọn (mới).** `resilienceSettings.requestQueue.maxQueueDepth`
giới hạn số lượng yêu cầu có thể nằm trong hàng đợi (chưa được điều phối) cho một
nhà cung cấp+kết nối tại cùng một thời điểm. Khi hàng đợi đã chứa `maxQueueDepth`
yêu cầu, một yêu cầu mới sẽ bị từ chối nhanh với lỗi có định kiểu
`code: "RATE_LIMIT_QUEUE_FULL"` **trước khi** nó đến được `limiter.schedule()`
— vì vậy việc từ chối có chi phí thấp và diễn ra trước mọi công việc
nén prompt / dịch thuật downstream dành cho yêu cầu đó. Giá trị mặc định `0` =
tắt, duy trì hành vi hàng đợi không giới hạn hiện có; phạm vi giới hạn là 0–100000.
Ghi đè thông qua `RATE_LIMIT_MAX_QUEUE_DEPTH` (biến môi trường) hoặc
`resilienceSettings.requestQueue.maxQueueDepth` (bản vá bảng điều khiển/API).

Bản thân phép kiểm tra tiếp nhận là một hàm thuần túy
(`open-sse/services/rateLimitManager/admission.ts::checkQueueAdmission`), vì vậy
có thể kiểm thử đơn vị mà không cần bộ giới hạn Bottleneck thực.

> RFC khởi tạo #6593 cũng đề xuất một cờ `bypassCompressionOnRateLimit`.
> Pipeline `open-sse/services/compression/` của repo này thực hiện
> nén prompt/ngữ cảnh trên yêu cầu LLM gửi đi (`chatCore.ts`,
> quanh khối `resolveCompressionSettings`/`selectCompressionStrategy`),
> chứ không phải nén phản hồi HTTP trên các nội dung phản hồi 429 được tổng hợp — không có
> đường dẫn mã tương ứng cho một cờ bỏ qua theo nghĩa đen. Bước nén prompt đó
> hiện cũng chạy _trước_ `withRateLimit()` trong pipeline yêu cầu, vì vậy
> việc sắp xếp lại để bỏ qua bước này khi hàng đợi đầy là một thay đổi riêng biệt, lớn hơn
> phạm vi của issue này; thay đổi đó đã chủ ý **không** được triển khai
> tại đây và được để lại cho công việc tiếp theo nếu lợi ích tiết kiệm CPU xứng đáng với
> rủi ro từ việc sắp xếp lại.

---

## 6. Bộ giám sát thông lượng luồng chậm (#9709)

Cơ chế bảo vệ tùy chọn `resilienceSettings.streamRecovery.throughputWatchdog` phát hiện
một nguồn thượng nguồn vẫn đang gửi các đoạn dữ liệu nhưng tạo ra đầu ra của trợ lý thấp hơn
tốc độ đầu ra hữu ích đã cấu hình. Cơ chế này được tách biệt có chủ đích với thời gian chờ khi không hoạt động:
các heartbeat và siêu dữ liệu không đặt lại bộ hẹn giờ nào và không được tính là tiến trình. Cơ chế này cũng
khác với thời hạn cứng của lần thử (#9153), vốn vẫn là một giới hạn an toàn tuyệt đối
bất kể chất lượng đầu ra.

Bộ giám sát yêu cầu một giai đoạn khởi động, sau đó là một cửa sổ trượt hoàn chỉnh trước khi
có thể hủy. Nó đếm các delta văn bản từ những sự kiện đầu ra của Chat Completions và Responses API
(một đại diện bảo thủ dựa trên số byte UTF-8), bỏ qua các sự kiện chỉ chứa mức sử dụng và sự kiện rỗng, đồng thời
tạm ngừng đánh giá khi các sự kiện gọi công cụ hoặc suy luận đang được xử lý. Cơ chế này bị vô hiệu hóa
theo mặc định và có thể được bật bằng `STREAM_THROUGHPUT_WATCHDOG_ENABLED=true`; cửa sổ,
thời gian khởi động, tốc độ tối thiểu và lượng đầu ra tối thiểu có thể đo lường được giới hạn bởi
lớp chuẩn hóa cài đặt khả năng phục hồi thông thường.

Khi được bật, thao tác hủy của bộ giám sát chỉ được áp dụng cho lần thử thượng nguồn đang hoạt động. Trước khi
có bất kỳ byte nào hiển thị với máy khách, đường dẫn phục hồi sớm hiện có trên cùng tài khoản có thể mở lại
lần thử. Sau khi commit, luồng không bao giờ được phát lại một cách mù quáng; chỉ hợp đồng
tiếp tục giữa luồng an toàn hiện có mới có thể ghép nối một hậu tố. Quá trình hoàn tất vẫn
chỉ diễn ra một lần, vì vậy việc hạch toán mức sử dụng và giải phóng semaphore không bị lặp lại.

---

## 7. Tái xác lập trạng thái thượng nguồn (lỗi hạn ngạch bị báo sai)

**Phạm vi:** một cổng thượng nguồn báo cáo tình trạng tạm thời cạn hạn ngạch bằng mã trạng thái HTTP không chính xác.

**Mục đích:** sửa trạng thái gây hiểu nhầm TRƯỚC KHI phân loại, để các thành phần tiêu thụ hạ nguồn (công cụ dự phòng, quá trình tổng hợp combo, phản hồi gửi tới máy khách) nhận biết đúng bản chất có thể thử lại của lỗi.

Một số cổng báo hiệu tình trạng TẠM THỜI cạn hạn ngạch bằng một trạng thái HTTP
không thể thử lại. `agentrouter.org` trả về `403` (đôi khi là `400`) cùng phần nội dung
tiếng Trung (`用户额度不足` / `额度不足`) thay vì mã tiêu chuẩn `429`. Các máy khách như Claude
Code coi `403` là lỗi vĩnh viễn và hủy phiên; nếu không được sửa,
công cụ dự phòng sẽ phân loại lỗi này là `AUTH_ERROR` thay vì một sự kiện
hạn ngạch.

**Cách triển khai:**

- Registry + bộ so khớp: `open-sse/config/upstreamStatusRestatement.ts` — một
  danh sách quy tắc cho từng nhà cung cấp (`{id, fromStatuses, toStatus, textMarkers,
excludeMarkers, defaultRetryAfterMs}`), được so khớp qua `applyStatusRestatement()`.
- Vị trí gọi: khối `providerFailure:` trong `open-sse/handlers/chatCore.ts`
  (khoảng dòng 3654), ngay sau khi `parseUpstreamError()` phân tích một phản hồi
  thượng nguồn có trạng thái HTTP lỗi (`!providerResponse.ok`) và trước khi bất kỳ
  quá trình phân loại nào chạy, để mọi thành phần tiêu thụ hạ nguồn đều nhận được
  trạng thái đã sửa. Các lỗi được nhúng bên trong luồng SSE `200` đi theo một
  đường dẫn phân tích luồng riêng ở giai đoạn sau và **hiện không** được hook này xử lý — đây là một
  hạn chế đã biết, nhưng chưa cần thiết đối với trạng thái sai của agentrouter (vốn
  xuất hiện dưới dạng trạng thái HTTP lỗi).
- Điều kiện đủ để thử lại: `429` nằm trong `RETRY_AFTER_ELIGIBLE_STATUSES`
  (`open-sse/services/combo/unavailableRetryGate.ts`), vì vậy một lỗi đã được tái xác lập
  sẽ mang theo một khoảng thời gian thử lại thực tế thay vì xuất hiện dưới dạng `403` không còn khả năng xử lý.
- Giá trị tổng hợp `60s` của `defaultRetryAfterMs` (`upstreamStatusRestatement.ts`)
  chỉ là thông tin mà phản hồi đã tái xác lập cho **máy khách** biết; bản thân nó không phải
  khoảng thời gian tạm ngưng/khóa nội bộ của kết nối — khoảng thời gian đó được điều chỉnh
  riêng bởi bất kỳ cơ chế nào thực sự xử lý lỗi đã tái xác lập
  (cơ chế tạm ngưng kết nối với thời gian chờ tăng dần, §2, giá trị cơ sở `3s` đối với các
  nhà cung cấp dùng API key; hoặc cơ chế khóa mô hình, §3, đối với các nhà cung cấp hạn ngạch
  theo từng mô hình như agentrouter). Bộ định tuyến có thể đủ điều kiện thử lại nội bộ sớm hơn
  khoảng thời gian 60s mà nó thông báo cho máy khách — đây là khoảng đệm có chủ đích,
  không phải lỗi.

Các lỗi vĩnh viễn (`无权访问模型` của agentrouter — không có quyền truy cập mô hình này)
KHÔNG BAO GIỜ được tái xác lập: `excludeMarkers` phủ quyết quy tắc ngay cả khi `textMarkers` khớp,
vì vậy lỗi giữ nguyên trạng thái ban đầu và không có thành phần nào thử lại lỗi đó vô thời hạn. Quy tắc
phân loại nhà cung cấp tương ứng
(`agentrouter-model-access-denied` trong `open-sse/config/providerErrorRules.ts`:
`reason: "auth_error"`, `scope: "model"`, thời gian tạm ngưng cơ sở được khai báo là `6h`) được
`checkFallbackError` (`open-sse/services/accountFallback.ts`) tham chiếu
_trước_ nhánh trả về sớm `FORBIDDEN` chung cho danh mục apikey, với điều kiện
`honorsRuleLockScope(provider)` (#10334 — hiện chỉ dành riêng cho agentrouter thông qua
danh sách cho phép `HONORS_RULE_LOCK_SCOPE_PROVIDERS` trong
`providerErrorRules.ts`). Thời gian tạm ngưng 6h được khai báo của quy tắc được truyền qua dưới dạng
`fallbackResult.baseCooldownMs`, nhưng vẫn đi vào đường dẫn
khóa hạn ngạch theo từng mô hình có sẵn (`lockModelIfPerModelQuota()` /
`recordModelLockoutFailure()`, không thay đổi bởi #10334 ngoại trừ nguồn
thời gian tạm ngưng): giá trị này bị giới hạn xuống `mlSettings.maxCooldownMs` của đơn vị vận hành
(mặc định `1_800_000ms` / 30min), giống như mọi trường hợp khóa mô hình khác, và
_lý do khóa được lưu trữ_ vẫn là giá trị mã hóa cứng có sẵn `"forbidden"`,
không phải `"auth_error"` của quy tắc — chỉ thời lượng tạm ngưng được tuân thủ
xuyên suốt toàn bộ quy trình, không phải chuỗi lý do. Bản thân kết nối vẫn hoạt động;
các mô hình cùng cấp trên cùng kết nối không bị ảnh hưởng.

Các lỗi hạn ngạch được diễn đạt lại (`额度不足`) khớp với một quy tắc nhà cung cấp trong môi trường production
(`agentrouter-user-quota-exhausted`: `reason: "quota_exhausted"`, `scope:
"connection"`, không khai báo thời gian chờ riêng — mặc định backoff có điều chỉnh của lớp lưu trữ
được áp dụng). Kể từ #10334, `scope` trên
`ProviderErrorRuleMatch` ĐƯỢC sử dụng xuyên suốt toàn bộ luồng, nhưng **chỉ** đối với các nhà cung cấp trong
danh sách cho phép `HONORS_RULE_LOCK_SCOPE_PROVIDERS` (`providerErrorRules.ts` —
hiện tại chỉ có `"agentrouter"`, được kiểm soát qua `honorsRuleLockScope()`). Đối với mọi
nhà cung cấp khác, `scope` vẫn chỉ mang tính thông tin, hoàn toàn giống như trước #10334.
`checkFallbackError` hiển thị scope của quy tắc khớp dưới dạng
`fallbackResult.ruleScope`; `isAgentrouterConnectionQuotaScope()`
(`src/sse/services/auth.ts`) là guard dùng chung để xác nhận rằng một
`ruleScope` thực sự an toàn khi được coi là tín hiệu tự phục hồi trên toàn kết nối
(scope `"connection"`, reason `quota_exhausted`, không bao giờ là `permanent`,
không bao giờ là `creditsExhausted` — một biện pháp phòng vệ trước khả năng một quy tắc trong tương lai ghép scope
`"connection"` với trạng thái tài khoản vĩnh viễn). Hai bên sử dụng gọi hàm này:

- **Lưu trữ** (`markAccountUnavailable()`, `src/sse/services/auth.ts`):
  thay vì rơi vào nhánh khóa **theo từng model** của nhà cung cấp passthrough
  (agentrouter có `passthroughModels: true` → `hasPerModelQuota()`
  trả về `true`), nó áp dụng **thời gian chờ tạm thời cho kết nối** —
  `testStatus: "unavailable"` + `rateLimitedUntil`, không bao giờ là trạng thái kết thúc
  (`credits_exhausted`/`banned`/`expired`) — để kết nối tự phục hồi
  khi thời gian chờ kết thúc thay vì yêu cầu đặt lại thông tin xác thực theo cách thủ công.
  Bỏ qua đối với các kết nối có `disableCooling: true` (#2997): lựa chọn không tham gia này
  thay vào đó sẽ rơi xuống cơ chế khóa theo từng model (một sự đánh đổi đã được ghi lại —
  xem chú thích mã phía trên nhánh này).
- **Định tuyến combo trong cùng yêu cầu** (`applyComboTargetExhaustion()`,
  `open-sse/services/combo/targetExhaustion.ts`): cùng guard đó đánh dấu
  kết nối trong tập `exhaustedConnections` trong bộ nhớ, với khóa
  `${provider}:${connectionId}`. Cơ chế này chỉ bỏ qua một target CÙNG-YÊU-CẦU còn lại
  nếu _chính target đó đã chứa chính xác `connectionId` ấy_ trên đối tượng target của nó
  (`getExhaustedTargetSkipReason()`,
  `open-sse/services/combo/comboPredicates.ts`, `if (provider &&
connectionId)` trước khi tra cứu `exhaustedConnections`) — một combo
  danh sách model thuần túy, trong đó các target ngang hàng không có `connectionId` được ghim
  riêng và một connection chỉ được phân giải theo từng lần dispatch từ header
  `X-OmniRoute-Selected-Connection-Id` của response, sẽ không bao giờ khớp với khóa đó. Đối với
  trường hợp phổ biến này, biện pháp bảo vệ thực sự chống việc một lượt còn lại tái sử dụng tài khoản
  vừa cạn hạn ngạch KHÔNG phải là Set này — mà là lớp lưu trữ ở trên
  (`rateLimitedUntil` của kết nối giờ đã nằm trong tương lai) kết hợp với
  việc chính guard này ngăn thêm nhà cung cấp vào `transientRateLimitedProviders` đối với
  lỗi đó (xem "Thiết kế hai giai đoạn" và chú thích mã trên nhánh
  `isAgentrouterConnectionQuotaScope` trong `targetExhaustion.ts`): khi
  Set đó không được đánh dấu, cơ chế buộc cho phép `allowRateLimitedConnection` của `combo.ts`
  (`open-sse/services/combo.ts:1005-1013`, `:2734-2738`) KHÔNG được kích hoạt cho
  các lượt còn lại của nhà cung cấp, vì vậy bộ lọc `rateLimitedUntil` khi chọn thông tin xác thực
  (`src/sse/services/auth.ts:1238`) được tuân thủ như bình thường và một
  lượt còn lại sẽ chọn một kết nối agentrouter khác vẫn đủ điều kiện,
  hoặc thất bại vì không có thông tin xác thực khả dụng — nó không cưỡng ép quay lại
  kết nối mà nhánh này vừa đưa vào thời gian chờ.

### Thiết kế hai giai đoạn: diễn đạt lại trạng thái, sau đó phân loại

Cơ chế diễn đạt lại trạng thái (`upstreamStatusRestatement.ts`) và các quy tắc phân loại
nhà cung cấp (`open-sse/config/providerErrorRules.ts`,
`providerRuleRegistry`) là các registry riêng biệt, cả hai đều dùng id nhà cung cấp
và marker văn bản làm khóa, nhưng chúng chạy ở những vị trí khác nhau và phục vụ các
mục đích khác nhau: cơ chế diễn đạt lại ghi lại trạng thái HTTP từ sớm trong `chatCore.ts`;
các quy tắc phân loại chọn `reason` dự phòng và `scope` khóa
(`model` / `provider` / `connection`) bên trong `checkFallbackError()`
(`open-sse/services/accountFallback.ts`).

Các quy tắc phân loại chỉ nhìn thấy toàn bộ **văn bản** lỗi (cần thiết để khớp các
marker trong body như `额度不足`) đối với các nhà cung cấp có trong danh sách cho phép
`FULL_TEXT_RULE_PROVIDERS` tại `providerErrorRules.ts` — hiện tại chỉ có
`"agentrouter"`. Đối với mọi nhà cung cấp **trong catalog tích hợp sẵn** khác,
`checkFallbackError` chỉ truyền lỗi có cấu trúc (`{code, type}`) cho
`getProviderErrorRuleMatch`; thông tin này đủ cho các quy tắc dựa trên
header/trạng thái/code nhưng không thể nhìn thấy marker văn bản trong body.
Helper `resolveRuleMatchBody()` thực hiện việc lựa chọn này: toàn bộ văn bản lỗi
đối với các nhà cung cấp trong danh sách cho phép, còn với các nhà cung cấp khác là lỗi có cấu trúc. Việc thêm một
nhà cung cấp **tích hợp sẵn** vào `FULL_TEXT_RULE_PROVIDERS` là lựa chọn tham gia rõ ràng
theo từng nhà cung cấp — cơ chế này tồn tại để đường dẫn mặc định của mọi nhà cung cấp không có trong
danh sách được giữ nguyên từng byte.

`scope` của một quy tắc (`model` / `provider` / `connection`) là một lựa chọn tham gia
riêng biệt với `FULL_TEXT_RULE_PROVIDERS`: `checkFallbackError` chỉ hiển thị nó dưới dạng
`fallbackResult.ruleScope`, và các bên sử dụng ở hạ nguồn chỉ xử lý nó như
một thứ khác ngoài nhãn thông tin đối với các nhà cung cấp trong danh sách cho phép
`HONORS_RULE_LOCK_SCOPE_PROVIDERS` ở cùng tệp (`được kiểm soát qua
honorsRuleLockScope()` — hiện tại chỉ có `"agentrouter"`). Xem phần "Các lỗi hạn ngạch
được diễn đạt lại" ở trên để biết một kết quả khớp `scope: "connection"` thực sự làm gì khi
một nhà cung cấp nằm trong danh sách cho phép đó.

**#11104 — các quy tắc do operator khai báo bỏ qua cả hai danh sách cho phép.** Một operator có thể
khai báo quy tắc riêng cho từng provider tại thời điểm chạy thông qua `settings.providerErrorRules`
(`open-sse/config/providerErrorRules.ts::setOperatorProviderErrorRules`)
mà không cần chỉnh sửa tệp này. Việc đặt một quy tắc của operator sau
`FULL_TEXT_RULE_PROVIDERS`/`HONORS_RULE_LOCK_SCOPE_PROVIDERS` — các danh sách cho phép
được dùng để bảo vệ hành vi **mặc định** của các quy tắc catalog tích hợp sẵn — sẽ
khiến cơ chế cài đặt không có tác dụng đối với mọi provider ngoại trừ những provider đã
được liệt kê ở đó, vì việc khai báo quy tắc vốn đã là hành động chủ động bật
một cách rõ ràng của operator. `resolveRuleMatchBody()` và `honorsRuleLockScope()` đều kiểm tra
`hasOperatorRuleForProvider()` trước: một provider có quy tắc của operator sẽ nhận được
văn bản lỗi thô và `scope` đã khai báo của nó được tôn trọng, bất kể
provider đó có xuất hiện trong một trong hai danh sách cho phép hay không.

**Khoảng trống đã biết — `providerRuleRegistry` không bao giờ được tham chiếu đối với HTTP 400.**
Nhánh `BAD_REQUEST` của `checkFallbackError` phân loại trạng thái 400 hoàn toàn
thông qua các mảng mẫu riêng của nó (`MODEL_ACCESS_DENIED_PATTERNS`,
`CONTEXT_OVERFLOW_PATTERNS`, v.v. trong `accountFallback.ts`) và trả về trước khi
đi đến nhánh `configuredRule`/`getProviderErrorRuleMatch` ở phía trên.
Một quy tắc catalog tích hợp sẵn (hoặc một quy tắc của operator) với `status: 400` là
hợp lệ về mặt cú pháp nhưng sẽ không bao giờ được kích hoạt. Hiện tại không có quy tắc nào nhắm đến 400,
nên không có gì trong môi trường production bị ảnh hưởng — nhưng một quy tắc 400 trong tương lai cần
sửa nhánh này trước, đây là một thay đổi lớn hơn so với việc thêm một quy tắc (nó
phân loại lại 400 cho mọi provider đang dựa vào hành vi của mảng mẫu)
và nằm ngoài phạm vi của việc bổ sung quy tắc cho một provider duy nhất.

### Thêm một gateway báo sai hạn ngạch mới

1. Đăng ký một mảng quy tắc trong `statusRestatementRegistry`
   (`open-sse/config/upstreamStatusRestatement.ts`). Giữ `textMarkers`
   dành riêng cho provider; tuyệt đối không tái sử dụng các cụm từ tiếng Anh chung chung có thể xung đột với
   `CREDITS_EXHAUSTED_SIGNALS` (`open-sse/services/accountFallback.ts`).
2. Có thể tùy chọn đăng ký các quy tắc phân loại trong
   `open-sse/config/providerErrorRules.ts` (`providerRuleRegistry`) để chọn
   phạm vi khóa phù hợp (`connection` cho hạn ngạch toàn tài khoản, `model` cho
   các lỗi theo từng model). Bước này chỉ có hiệu lực trong môi trường production đối với
   các provider có quy tắc cần toàn bộ văn bản lỗi (các marker trong body): hãy thêm
   id của provider vào `FULL_TEXT_RULE_PROVIDERS` trong cùng tệp — nếu không,
   `checkFallbackError` sẽ chỉ chuyển lỗi có cấu trúc
   `{code, type}` cho quy tắc và một quy tắc dựa trên văn bản body sẽ không bao giờ khớp với lưu lượng thực tế.
   Các quy tắc chỉ khớp dựa trên `status`/`headers` (như của Opencode hoặc
   Minimax) không cần chủ động bật tùy chọn này. Riêng biệt, nếu quy tắc khai báo
   `scope: "connection"` và mục đích là một thời gian tạm ngưng thực sự áp dụng trên toàn connection
   cộng với việc bỏ qua tổ hợp trong cùng request (không chỉ là một nhãn mang tính thông tin), hãy thêm
   id của provider vào `HONORS_RULE_LOCK_SCOPE_PROVIDERS` trong cùng tệp — đây
   là thành phần kiểm soát việc sử dụng theo kiểu `isAgentrouterConnectionQuotaScope()` trong
   `markAccountUnavailable()` (`src/sse/services/auth.ts`) và
   `applyComboTargetExhaustion()`
   (`open-sse/services/combo/targetExhaustion.ts`); nếu không có nó, `scope`
   vẫn được truyền qua `fallbackResult.ruleScope` nhưng không có gì xử lý giá trị đó.
3. Thêm các unit test mô phỏng `tests/unit/upstream-status-restatement.test.ts`
   và `tests/unit/agentrouter-error-rules.test.ts` (bao gồm các guard
   not-permanent / not-creditsExhausted và — nếu provider cần
   danh sách cho phép — một test xác nhận `resolveRuleMatchBody()` chỉ trả về
   toàn bộ văn bản cho provider đó).

Không cần thay đổi `chatCore.ts`, `classifyError` hoặc combo.

#### Khóa được phân nhóm theo egress (#10880)

Các provider trong `EGRESS_BUCKETED_LOCK_PROVIDERS` (họ opencode) được xem
là upstream được phân nhóm theo IP (gói miễn phí của opencode được phân nhóm theo IP, không phải
theo tài khoản — xem #9611): trạng thái 429 được phân loại là `quota_exhausted`
**hoặc** `rate_limit_exceeded` sẽ tạm ngưng mọi connection thuộc họ trong danh sách cho phép
có IP egress được biết gần nhất trùng với IP của connection gặp lỗi, trước khi quá trình
luân chuyển có thể thử các connection đó
— tránh N-1 lệnh gọi upstream chắc chắn thất bại (cùng dạng với #10460/#10525).
`rate_limit_exceeded` được đưa vào một cách có chủ đích: trên đường dẫn `markAccountUnavailable`,
các quy tắc dành riêng cho opencode không bao giờ khớp (không có headers/body nào được chuyển cho
`checkFallbackError`, opencode không nằm trong `FULL_TEXT_RULE_PROVIDERS`), vì vậy một lỗi 429
có body chứa văn bản về hạn ngạch thuê bao ("monthly usage limit
reached") được phân loại là `quota_exhausted` bởi cơ chế fallback dựa trên văn bản hạn ngạch
(`buildSubscriptionQuotaFallback`, `accountFallback.ts`; thời gian tạm ngưng 1h) trước khi
quy tắc `status_429` được xử lý — trong khi một lỗi 429 không có văn bản hạn ngạch (giới hạn
tốc độ đơn thuần) được quy tắc `status_429` phân loại là `rate_limit_exceeded`
và vẫn tạm ngưng cả họ IP. Đối với một provider trong danh sách cho phép, giới hạn tốc độ
được phân nhóm theo IP là cùng một tín hiệu với hạn ngạch đã cạn. Các giới hạn thực tế:

- **Nỗ lực tối đa**: khóa phân giải `egress_ip` được biết gần nhất của kết nối
  từ `proxy_logs` (cửa sổ 24h, đồng bộ, không có bộ nhớ đệm). Khi bộ nhớ đệm
  nguội (IP đầu ra chưa từng được thăm dò) hoặc không có hàng nào → kết nối gặp
  lỗi vẫn được nhánh này đưa vào thời gian chờ (được ghi nhận như hiện tại),
  chỉ là không có kết nối cùng nhóm nào bị khóa.
- **Không bao giờ là trạng thái kết thúc**: thời gian chờ là một cửa sổ hạn ngạch
  được gia hạn (`testStatus: "unavailable"`); trạng thái vĩnh viễn không bao giờ
  được suy ra từ tín hiệu cấp IP. Các kết nối `disableCooling` hoàn toàn bỏ qua
  nhánh này.
- **Mức độ chi tiết của khóa thay đổi đối với họ nằm trong danh sách cho phép**:
  đây là thay đổi về phạm vi, không chỉ là tối ưu hóa cho các kết nối cùng nhóm.
  opencode là một nhà cung cấp `passthroughModels`, vì vậy trước nhánh này, lỗi
  429 tạo ra khóa theo từng MODEL; giờ đây nó tạo thời gian chờ cho kết nối —
  kể cả khi nhà vận hành chỉ chạy một kết nối duy nhất, hoàn toàn không có kết
  nối cùng nhóm nào. Đây là mức độ chi tiết mà bảng quy tắc opencode đã xác định
  là đúng (`scope: "connection"`, `providerErrorRules.ts`), nhưng cho đến nay
  chưa bao giờ được tuân thủ vì opencode không nằm trong
  `HONORS_RULE_LOCK_SCOPE_PROVIDERS`. Nhánh này tự ghi thời gian chờ +
  `backoffLevel` của kết nối gặp lỗi, mô phỏng nhánh agentrouter có phạm vi theo
  kết nối, rồi trả về — khối theo từng mô hình và đường dẫn chung bên dưới sẽ
  không bao giờ được thực thi.
- **Bao gồm combo**: giống như nhánh agentrouter, phạm vi này chủ ý bỏ qua việc
  hạ cấp `persistUnavailableState`/`isCombo` mà trình gọi combo áp dụng cho lỗi 429. Khóa theo từng mô hình không phải là một dạng yếu hơn của phạm vi này,
  mà là sai đơn vị: nó không cho biết gì về IP đã cạn hạn ngạch, vì vậy quá
  trình luân chuyển combo sẽ tiếp tục tiêu tốn một lệnh gọi chắc chắn thất bại
  cho mỗi kết nối cùng nhóm.
- **An toàn cho kết nối cùng nhóm**: một kết nối cùng nhóm đã ở trạng thái kết
  thúc (banned/credits_exhausted) hoặc đã có thời gian chờ dài hơn sẽ không bao
  giờ bị ghi đè.
- **Danh sách cho phép độc quyền**: việc mở rộng
  `EGRESS_BUCKETED_LOCK_PROVIDERS` là một quyết định rõ ràng của chủ sở hữu;
  không có cơ chế nối dây chung (mẫu #10334/#10419). Truy vấn kết nối cùng nhóm
  liên kết chính danh sách cho phép đó thay vì lặp lại dưới dạng một literal
  SQL, nên việc mở rộng danh sách vẫn chỉ là thay đổi một dòng.
- **Luân chuyển IP đầu ra theo cả hai hướng**: cửa sổ tra cứu (24h) rộng hơn
  nhiều so với TTL của bộ nhớ đệm IP đầu ra (5 phút), vì vậy "IP được biết gần
  nhất" là dữ liệu lịch sử, không phải trạng thái hiện tại. Nếu proxy của một
  kết nối đã luân chuyển trong cửa sổ này, khóa có thể **bỏ sót** một IP thực sự
  được dùng chung (IP được ghi nhận là IP mới, chưa cạn hạn ngạch) — và ngược
  lại, nó có thể **đưa một kết nối cùng nhóm đã chuyển khỏi IP cạn hạn ngạch vào
  thời gian chờ**. Trường hợp thứ hai khiến kết nối cùng nhóm đó mất một cửa sổ
  thời gian chờ; cả hai đều được chấp nhận như các giới hạn nỗ lực tối đa của
  cơ chế tra cứu dựa trên lịch sử.
- **Chi phí**: hai lượt quét có giới hạn trên `proxy_logs` (được lọc theo cửa
  sổ qua `idx_pl_timestamp`), chỉ diễn ra với tần suất lỗi 429. Không có chỉ mục
  mới (migration 134 YAGNI). Đã đo trên bản sao cơ sở dữ liệu lưu lượng thực có
  kích thước vừa phải; một phiên bản có thông lượng cao sẽ giữ số lượng hàng
  lớn hơn tương ứng trong cùng cửa sổ.

---

## Các tính năng tăng cường khả năng phục hồi khác

- **19 chiến lược định tuyến** (ưu tiên, có trọng số, luân phiên, chuyển tiếp ngữ cảnh, lấp đầy trước, p2c, ngẫu nhiên, ít được sử dụng nhất, tối ưu hóa chi phí, nhận biết thời điểm đặt lại, cửa sổ đặt lại, dung lượng dự phòng, ngẫu nhiên nghiêm ngặt, tự động, lkgp, tối ưu hóa ngữ cảnh, tối ưu hóa bộ nhớ đệm, hợp nhất, chuỗi xử lý) — xem [AUTO-COMBO.md](../routing/AUTO-COMBO.md).
- **Định tuyến nhận biết thời điểm đặt lại** (v3.8.0) — ưu tiên các kết nối theo thời điểm đặt lại hạn ngạch.
- **Hạ cấp chế độ nền** — Responses API `background: true` được hạ cấp sang chế độ đồng bộ kèm cảnh báo.
- **Phát hiện động giới hạn công cụ** — tạm lùi các nhà cung cấp khi đạt giới hạn số lượng công cụ.
- **Phương án dự phòng khẩn cấp** — được kiểm soát bởi `OMNIROUTE_EMERGENCY_FALLBACK`; người vận hành có thể ghi đè từ trang Cờ tính năng mà không cần khởi động lại.

---

## Gỡ lỗi

- Tất cả khóa của một nhà cung cấp đều bị bỏ qua → kiểm tra cả trạng thái bộ ngắt mạch VÀ `rateLimitedUntil`/`testStatus` của từng kết nối.
- Nhà cung cấp bị loại vĩnh viễn sau cửa sổ đặt lại → mã đang đọc trực tiếp `state` thay vì `getStatus()`/`canExecute()`.
- Một khóa gặp lỗi, các khóa khác vẫn hoạt động → ưu tiên thời gian chờ của kết nối thay vì bộ ngắt mạch.
- Chỉ một mô hình gặp lỗi → ưu tiên khóa mô hình thay vì thời gian chờ của kết nối.
- Trạng thái lẽ ra phải tự phục hồi nhưng không phục hồi → kiểm tra dấu thời gian trong tương lai + đường dẫn đọc có làm mới trạng thái đã hết hạn hay không. Các trạng thái vĩnh viễn yêu cầu thay đổi thủ công.

---

## Dấu vân tay TLS & Chế độ ẩn mình

Cơ chế ẩn mình dành riêng cho từng nhà cung cấp (JA3/JA4, CCH, làm rối) được ghi lại riêng — xem `docs/security/STEALTH_GUIDE.md` (git; không được biên dịch vào `/docs`).

---

## Kiểm thử khả năng phục hồi (Giai đoạn 8 · Khối C)

Ngoài các kiểm thử đơn vị dành cho logic phục hồi, ba kiểm thử còn kiểm tra môi trường chạy trong
điều kiện chịu tải/sự cố thực tế (tất cả đều là kiểm thử tích hợp/hằng đêm — không kiểm thử nào chặn PR):

| Kiểm thử         | Nội dung                                                                                                                                                                                          | Cách chạy                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| Hỗn loạn         | Nút thượng nguồn giả lập đưa vào độ trễ/thao tác đặt lại/thời gian chờ/503 thực tế; xác thực rằng bộ ngắt mạch mở/phục hồi và `checkFallbackError` phân loại 503 là lỗi dự phòng có thể phục hồi. | `RUN_CHAOS_INT=1 npm run test:chaos`      |
| Tăng trưởng heap | ~500 luồng cho mỗi `createSSEStream` dưới `--expose-gc`; thất bại nếu heap tăng vượt quá mức trần (cơ chế bảo vệ OOM #3069).                                                                      | `npm run test:heap`                       |
| Kiểm thử ngâm k6 | Tải duy trì liên tục đối với `/api/monitoring/health`; các ngưỡng p95/lỗi.                                                                                                                        | `k6 run tests/load/k6-soak.js` (hằng đêm) |

Được điều phối bởi `.github/workflows/nightly-resilience.yml` (cron + dispatch). Trong
`test:integration` mặc định, các kiểm thử hỗn loạn và heap sẽ tự bỏ qua (nếu không có `RUN_CHAOS_INT`/`--expose-gc`).

---

## Xem thêm

- [Hướng dẫn kiến trúc](./ARCHITECTURE.md) — Kiến trúc hệ thống và cơ chế nội bộ
- [Hướng dẫn người dùng](../guides/USER_GUIDE.md) — Nhà cung cấp, combo, tích hợp CLI
- [Công cụ Auto-Combo](../routing/AUTO-COMBO.md) — Chấm điểm theo 16 yếu tố, gói chế độ
