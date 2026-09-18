# Subscription-first routing (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../routing/SUBSCRIPTION_LADDER.md) · 🇪🇹 [am](../../../am/docs/routing/SUBSCRIPTION_LADDER.md) · 🇸🇦 [ar](../../../ar/docs/routing/SUBSCRIPTION_LADDER.md) · 🇦🇿 [az](../../../az/docs/routing/SUBSCRIPTION_LADDER.md) · 🇧🇬 [bg](../../../bg/docs/routing/SUBSCRIPTION_LADDER.md) · 🇧🇩 [bn](../../../bn/docs/routing/SUBSCRIPTION_LADDER.md) · 🇨🇿 [cs](../../../cs/docs/routing/SUBSCRIPTION_LADDER.md) · 🇩🇰 [da](../../../da/docs/routing/SUBSCRIPTION_LADDER.md) · 🇩🇪 [de](../../../de/docs/routing/SUBSCRIPTION_LADDER.md) · 🇬🇷 [el](../../../el/docs/routing/SUBSCRIPTION_LADDER.md) · 🇪🇸 [es](../../../es/docs/routing/SUBSCRIPTION_LADDER.md) · 🇪🇪 [et](../../../et/docs/routing/SUBSCRIPTION_LADDER.md) · 🇮🇷 [fa](../../../fa/docs/routing/SUBSCRIPTION_LADDER.md) · 🇫🇮 [fi](../../../fi/docs/routing/SUBSCRIPTION_LADDER.md) · 🇫🇷 [fr](../../../fr/docs/routing/SUBSCRIPTION_LADDER.md) · 🇮🇪 [ga](../../../ga/docs/routing/SUBSCRIPTION_LADDER.md) · 🇮🇳 [gu](../../../gu/docs/routing/SUBSCRIPTION_LADDER.md) · 🇳🇬 [ha](../../../ha/docs/routing/SUBSCRIPTION_LADDER.md) · 🇮🇱 [he](../../../he/docs/routing/SUBSCRIPTION_LADDER.md) · 🇮🇳 [hi](../../../hi/docs/routing/SUBSCRIPTION_LADDER.md) · 🇭🇷 [hr](../../../hr/docs/routing/SUBSCRIPTION_LADDER.md) · 🇭🇺 [hu](../../../hu/docs/routing/SUBSCRIPTION_LADDER.md) · 🇦🇲 [hy](../../../hy/docs/routing/SUBSCRIPTION_LADDER.md) · 🇮🇩 [id](../../../id/docs/routing/SUBSCRIPTION_LADDER.md) · 🇳🇬 [ig](../../../ig/docs/routing/SUBSCRIPTION_LADDER.md) · 🇮🇹 [it](../../../it/docs/routing/SUBSCRIPTION_LADDER.md) · 🇯🇵 [ja](../../../ja/docs/routing/SUBSCRIPTION_LADDER.md) · 🇬🇪 [ka](../../../ka/docs/routing/SUBSCRIPTION_LADDER.md) · 🇰🇭 [km](../../../km/docs/routing/SUBSCRIPTION_LADDER.md) · 🇮🇳 [kn](../../../kn/docs/routing/SUBSCRIPTION_LADDER.md) · 🇰🇷 [ko](../../../ko/docs/routing/SUBSCRIPTION_LADDER.md) · 🇱🇹 [lt](../../../lt/docs/routing/SUBSCRIPTION_LADDER.md) · 🇱🇻 [lv](../../../lv/docs/routing/SUBSCRIPTION_LADDER.md) · 🇮🇳 [ml](../../../ml/docs/routing/SUBSCRIPTION_LADDER.md) · 🇮🇳 [mr](../../../mr/docs/routing/SUBSCRIPTION_LADDER.md) · 🇲🇾 [ms](../../../ms/docs/routing/SUBSCRIPTION_LADDER.md) · 🇲🇹 [mt](../../../mt/docs/routing/SUBSCRIPTION_LADDER.md) · 🇲🇲 [my](../../../my/docs/routing/SUBSCRIPTION_LADDER.md) · 🇳🇵 [ne](../../../ne/docs/routing/SUBSCRIPTION_LADDER.md) · 🇳🇱 [nl](../../../nl/docs/routing/SUBSCRIPTION_LADDER.md) · 🇳🇴 [no](../../../no/docs/routing/SUBSCRIPTION_LADDER.md) · 🇮🇳 [or](../../../or/docs/routing/SUBSCRIPTION_LADDER.md) · 🇮🇳 [pa](../../../pa/docs/routing/SUBSCRIPTION_LADDER.md) · 🇵🇭 [phi](../../../phi/docs/routing/SUBSCRIPTION_LADDER.md) · 🇵🇱 [pl](../../../pl/docs/routing/SUBSCRIPTION_LADDER.md) · 🇵🇹 [pt](../../../pt/docs/routing/SUBSCRIPTION_LADDER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/routing/SUBSCRIPTION_LADDER.md) · 🇷🇴 [ro](../../../ro/docs/routing/SUBSCRIPTION_LADDER.md) · 🇷🇺 [ru](../../../ru/docs/routing/SUBSCRIPTION_LADDER.md) · 🇱🇰 [si](../../../si/docs/routing/SUBSCRIPTION_LADDER.md) · 🇸🇰 [sk](../../../sk/docs/routing/SUBSCRIPTION_LADDER.md) · 🇸🇮 [sl](../../../sl/docs/routing/SUBSCRIPTION_LADDER.md) · 🇷🇸 [sr](../../../sr/docs/routing/SUBSCRIPTION_LADDER.md) · 🇸🇪 [sv](../../../sv/docs/routing/SUBSCRIPTION_LADDER.md) · 🇰🇪 [sw](../../../sw/docs/routing/SUBSCRIPTION_LADDER.md) · 🇮🇳 [ta](../../../ta/docs/routing/SUBSCRIPTION_LADDER.md) · 🇮🇳 [te](../../../te/docs/routing/SUBSCRIPTION_LADDER.md) · 🇹🇭 [th](../../../th/docs/routing/SUBSCRIPTION_LADDER.md) · 🇹🇷 [tr](../../../tr/docs/routing/SUBSCRIPTION_LADDER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/routing/SUBSCRIPTION_LADDER.md) · 🇵🇰 [ur](../../../ur/docs/routing/SUBSCRIPTION_LADDER.md) · 🇺🇿 [uz](../../../uz/docs/routing/SUBSCRIPTION_LADDER.md) · 🇳🇬 [yo](../../../yo/docs/routing/SUBSCRIPTION_LADDER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/routing/SUBSCRIPTION_LADDER.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/routing/SUBSCRIPTION_LADDER.md)

---

> Hai id `auto/*` mới — `auto/subscription` và `auto/thrifty`. Cả hai đều chỉ được bật khi
> được yêu cầu: không có gì được định tuyến qua chúng trừ khi bên gọi yêu cầu đích danh id đó, và
> không có pool, chiến lược hay giá trị mặc định hiện tại nào thay đổi.

## Lý do tính năng này tồn tại

OmniRoute đã trả lời hai câu hỏi về chi phí, nhưng cả hai đều không phải là câu hỏi mà phần lớn đơn vị vận hành đặt ra.

| Cơ chế hiện có                                           | Trả lời                                               |
| -------------------------------------------------------- | ----------------------------------------------------- |
| `hidePaidModels` (`autoCombo/paidModelFilter.ts`)        | "mô hình này có được lập danh mục là miễn phí không?" |
| `freeAccessPolicy: "strict"` (`strictZeroCostFilter.ts`) | "kết nối này có bao giờ tính phí tôi không?"          |
| `quotaPreflight` (`combo/quotaExhaustionCutoff.ts`)      | "kết nối này có gần chạm giới hạn không?"             |
| `budgetCap` / `budgetFallback` (`autoCombo/engine.ts`)   | "giới hạn chi tiêu, hạ xuống phương án rẻ nhất"       |

Mọi cơ chế chỉ dùng miễn phí đều **đóng khi thất bại** — một pool miễn phí đã cạn sẽ trở thành pool
trống, không bao giờ nâng lên một tùy chọn trả phí — và mọi cơ chế phía trả phí đều không phân biệt
bậc. Không cơ chế nào trả lời:

> "Hãy dùng hạn ngạch mà tôi đã trả tiền. Khi hạn ngạch đó cạn, hãy dừng lại hoặc nâng từng bậc
> qua các tùy chọn trả phí rẻ nhất — và quay lại ngay khi hạn ngạch được đặt lại."

## Việc tính phí là thuộc tính của kết nối, không phải của mô hình

`classifyTier()` (`open-sse/services/tierResolver.ts`) sử dụng khóa `(provider, model)` và trả về
`free | cheap | premium` dựa trên giá trong danh mục. Nhưng việc một yêu cầu có phát sinh chi phí
bổ sung hay không phụ thuộc vào **kết nối phục vụ yêu cầu đó**: cùng một mô hình được bao gồm trong
gói thông qua kết nối OAuth của Claude Code nhưng lại được tính phí theo token thông qua kết nối
bằng khóa API.

`provider_connections.auth_type` không phải là chỉ dấu an toàn theo bất kỳ chiều nào — vẫn tồn tại
các kết nối OAuth tính phí theo mức sử dụng và các kết nối bằng khóa API đã được bao gồm trong gói
(token theo suất Copilot không phải là khóa API tính phí theo mức sử dụng). Vì vậy, lớp tính phí
được lấy từ một **danh mục tuyển chọn**,
`open-sse/config/connectionBillingCatalog.ts`, được thiết lập thủ công dựa trên các điều khoản công
bố của từng nhà cung cấp — cùng một mẫu mà `FreeModelBudget.hardStopGuaranteed` đã thiết lập cho
các mô hình miễn phí.

```ts
type ConnectionBillingClass = "subscription" | "metered" | "keyless" | "unknown";
type ConnectionOverageBehavior = "hard-stop" | "meters-to-paid" | "unknown";
```

Thứ tự phân giải (`autoCombo/connectionBilling.ts`): giá trị sentinel không xác thực tổng hợp →
`keyless`; một mục danh mục khớp với cả nhà cung cấp **và** `authType`; một mục áp dụng trên toàn
nhà cung cấp; nếu không thì `unknown`. **Chưa được tuyển chọn không có nghĩa là miễn phí** —
`unknown` được xử lý như `metered` ở mọi nơi, vì vậy một nhà cung cấp được thêm vào ngày mai sẽ bắt
đầu bên ngoài bậc thuê bao và phải được chủ động đưa vào danh mục.

## Mô hình bậc

Có năm bậc theo thứ tự nâng cấp. Chúng khác nhau không chỉ về giá — mỗi bậc có **tín hiệu cạn kiệt
riêng**, đó là lý do đây không đơn thuần là một phép sắp xếp.

| #   | Bậc            | Thành viên                                                     | Được coi là cạn khi                       |
| --- | -------------- | -------------------------------------------------------------- | ----------------------------------------- |
| 0   | `subscription` | `billing: "subscription"` đã được tuyển chọn                   | cửa sổ hạn ngạch ở mức/ngang dưới ngưỡng  |
| 1   | `keyless`      | đường dẫn không xác thực tổng hợp                              | kết nối đang hồi phục / bộ ngắt kích hoạt |
| 2   | `free`         | kết nối tính phí theo mức dùng, `classifyTier() === "free"`    | khoản miễn phí đã cạn                     |
| 3   | `cheap`        | kết nối tính phí theo mức dùng, `classifyTier() === "cheap"`   | ngân sách theo bậc đã dùng hết            |
| 4   | `premium`      | kết nối tính phí theo mức dùng, `classifyTier() === "premium"` | ngân sách theo bậc đã dùng hết            |

Các bậc 0-2 cạn theo **hạn ngạch**, điều có thể quan sát được và đã được theo dõi. Các bậc 3-4 không
có hạn ngạch — một kết nối trả phí có thể phục vụ vô thời hạn — vì vậy tín hiệu cạn kiệt hợp lý duy
nhất của chúng là **ngân sách** theo từng bậc. Nếu không có ngân sách, việc "nâng cấp khi bậc rẻ đã
cạn" sẽ không có điều kiện kích hoạt.

## `auto/subscription` — đóng khi lỗi

Nhóm = chỉ bậc 0, giới hạn ở các kết nối có phần sử dụng vượt hạn mức được ghi nhận là `hard-stop`, và từng kết nối đều được xác minh trực tiếp là vẫn còn dư hạn ngạch. Mọi trường hợp không rõ ràng đều bị loại trừ: nhà cung cấp chưa được tuyển chọn, số liệu hạn ngạch không thể xác minh, số liệu đã cũ hoặc phần vượt hạn mức được tính phí.

Nhóm trống là câu trả lời **có chủ đích**, không phải lỗi — luồng xử lý nhóm trống hiện có của bên gọi sẽ chuyển trường hợp này thành một lỗi rõ ràng thay vì âm thầm chuyển sang phương án dự phòng có tính phí. Đó là toàn bộ cam kết của id này.

`keyless` cố ý **không** đủ điều kiện: nhóm này có nghĩa là "gói dịch vụ mà tôi trả phí", vì vậy backend không cần xác thực không thuộc về nhóm này. Hãy dùng `auto/thrifty` (hoặc `auto/best-free`) cho trường hợp đó.

### An toàn kết nối

Một ứng viên không phải lúc nào cũng gắn với một kết nối — ứng viên logic mang danh sách cho phép `allowedConnectionIds`, và tài khoản thực sự được sử dụng sẽ được chọn sau đó, tại thời điểm điều phối, bởi `open-sse/services/combo/autoStrategy.ts`. Do đó, cả hai nhóm đều xác minh **từng kết nối riêng lẻ** và thu gọn `allowedConnectionIds` xuống chính xác tập con còn đạt yêu cầu — không bao giờ giữ nguyên toàn bộ danh sách ban đầu, cũng không bao giờ chọn tùy ý một thành viên. Vì `autoStrategy.ts` đã thực thi mảng đó như một danh sách cho phép nghiêm ngặt, việc ghi lại nó tại đây khiến tập hợp "đã xác minh" và "thực sự được sử dụng" trở thành cùng một tập hợp ngay từ cấu trúc. Đây là cùng một bất biến và cùng một lập luận như [STRICT_ZERO_COST](./STRICT_ZERO_COST.md).

## `auto/thrifty` — leo thang từng bậc một

Nhóm = tất cả các bậc, được sắp xếp theo chỉ số bậc, trong đó các ứng viên đã cạn hạn ngạch bị chặn. Công cụ `auto` vẫn chấm điểm **trong** nhóm còn lại: thang bậc quyết định những bậc nào được xét, còn việc chấm điểm quyết định ứng viên nào chiến thắng trong các bậc đó. Thứ tự trong mỗi bậc là ổn định, vì vậy thứ hạng riêng của bộ chấm điểm không bao giờ bị lớp phủ này xáo trộn.

Đây là lớp phủ sắp xếp + kiểm soát, **không phải** một bộ điều phối mới: vòng lặp suy đoán của `combo.ts` đã duyệt các đích theo thứ tự và chuyển tiếp khi thất bại, vì vậy tình trạng cạn hạn ngạch trong thời gian chạy mà bước kiểm tra sơ bộ không phát hiện vẫn sẽ leo thang lên bậc tiếp theo trong cùng một yêu cầu.

Trong khi `auto/subscription` đóng khi lỗi, `auto/thrifty` lại **mở** khi lỗi: một kết nối nằm trong gói dịch vụ nhưng không có số liệu hạn ngạch khả dụng vẫn được thử trước. Việc thử kết nối này không tốn chi phí, và nếu kết nối thực sự đã cạn hạn ngạch thì cơ chế chuyển tiếp vẫn sẽ đi đến bậc tiếp theo — trong khi từ chối thử sẽ đưa yêu cầu đến một bậc trả phí chỉ vì thiếu dữ liệu đo từ xa, chính xác là kết quả mà nhóm này được tạo ra để tránh.

## Quay lại gói dịch vụ sau khi đặt lại

Ba yếu tố độc lập phải hết hiệu lực trước khi định tuyến quay lại bậc 0. Chỉ khắc phục một yếu tố sẽ khiến thang bậc mắc kẹt ở các bậc trả phí rất lâu sau khi gói dịch vụ đã được bổ sung lại.

1. **Bộ nhớ đệm trạng thái hạn ngạch** — `freeAccessQuota.ts` lưu vào bộ nhớ đệm theo từng `(provider, connection)` với TTL 180 giây. Một mục được lưu trong bộ nhớ đệm mà `resetAt` của chính nó đã trôi qua mô tả một cửa sổ không còn tồn tại, vì vậy giờ đây mục đó được coi là đã cũ **bất kể tuổi của mục** và buộc phải làm mới. Nếu không có cơ chế này, một gói dịch vụ được bổ sung lại vào nửa đêm vẫn bị đọc là đã cạn hạn ngạch cho đến khi TTL tình cờ hết hạn.
2. **Trạng thái riêng của thang bậc** — theo thiết kế, không có trạng thái nào như vậy. Điều kiện tham gia bậc được tính toán lại từ trạng thái hạn ngạch trực tiếp mỗi lần tạo nhóm; không tồn tại bản ghi "hiện đang ở bậc 3" được duy trì lâu dài có thể tồn tại qua một lần đặt lại và làm kẹt quá trình định tuyến.
3. **Thời gian chờ của kết nối** — lỗi 429 do cạn hạn ngạch đặt `rateLimitedUntil` dựa trên cơ chế lùi theo cấp số nhân, mà đối với kết nối thuộc gói dịch vụ có thể vượt quá thời điểm đặt lại thực tế. `clampCooldownToReset()` (`subscriptionLadder.ts`) rút ngắn thời gian chờ về thời điểm đặt lại của chính hệ thống thượng nguồn và không bao giờ có thể kéo dài thời gian chờ. **Cơ chế này đã được triển khai và kiểm thử nhưng chưa được kết nối**: bộ nhớ đệm hạn ngạch bị vô hiệu hóa trong `src/sse/services/auth.ts` _trước khi_ bất kỳ thời gian chờ nào được ghi, vì vậy `resetAt` phải được ghi nhận sớm hơn trong hàm đó — đây là thay đổi đối với luồng trọng yếu về khả năng phục hồi và nên nằm trong một PR riêng được rà soát. Cho đến lúc đó, việc quay lại phải chờ hết thời gian chờ của kết nối (vốn đã ưu tiên các gợi ý `Retry-After` từ hệ thống thượng nguồn khi nhà cung cấp gửi chúng).

### Chống dao động

Một bậc vừa được đặt lại chỉ được cho phép trở lại khi vượt trên `reentryMinRemainingPercent` (mặc định là 5), trong khi một kết nối đang được sử dụng chỉ cần duy trì trên `exitCutoffPercent` (mặc định là 2, khớp với `quotaPreflight.defaultThresholdPercent`). Khoảng cách này là dải trễ — nếu không có nó, một kết nối dao động quanh ngưỡng giới hạn sẽ liên tục chuyển qua lại giữa các bậc trong những yêu cầu liên tiếp.

## Cấu hình

Chỉ dùng để tinh chỉnh. Cố ý **không** có cờ `enabled`: một công tắc có thể tắt các tính năng này
sẽ khiến `auto/subscription` âm thầm phục vụ toàn bộ pool — bao gồm cả các model trả phí — dưới một
cái tên hứa hẹn điều ngược lại.

```jsonc
{
  "subscriptionLadder": {
    "exitCutoffPercent": 2,
    "reentryMinRemainingPercent": 5,
    "rungBudgetUsd": { "cheap": 5.0, "premium": 0 }, // 0 vô hiệu hóa hoàn toàn một bậc
  },
}
```

Việc giới hạn theo ngân sách không hoạt động cho đến khi một trình phân giải chi tiêu được kết nối: khi không có dữ liệu kế toán, một
bậc trả phí sẽ được sắp thứ tự nhưng không bao giờ bị giới hạn. Kể từ v3.8.51, thiết lập `rungBudgetUsd` được schema
chấp nhận nhưng CHƯA được thực thi — hãy xem đây là cấu hình dành riêng cho tương lai, không phải giới hạn chi tiêu đang hoạt động. Việc sắp thứ tự các bậc, xác định cạn kiệt dựa trên hạn ngạch và tái gia nhập sau khi đặt lại đều
hoạt động mà không cần thiết lập này.

## Kết hợp

`subscription` và `thrifty` là các giá trị `AutoTier`, vì vậy chúng có thể kết hợp với mọi danh mục:
`auto/coding:thrifty`, `auto/reasoning:subscription`, v.v. Hai id phẳng
(`auto/subscription`, `auto/thrifty`) được công bố trong `/v1/models` và bảng điều khiển.

Không id nào thuộc bậc trả phí, vì vậy `isPaidTierAutoId()` trả về `false` cho cả hai và
`auto/subscription` vẫn tồn tại khi áp dụng `hidePaidModels`.

## Vị trí mã nguồn

| Hạng mục                                      | Tệp                                                 |
| --------------------------------------------- | --------------------------------------------------- |
| Dữ liệu thanh toán được tuyển chọn            | `open-sse/config/connectionBillingCatalog.ts`       |
| Bộ phân loại                                  | `open-sse/services/autoCombo/connectionBilling.ts`  |
| Các bậc, cả hai cách nhóm, tái gia nhập       | `open-sse/services/autoCombo/subscriptionLadder.ts` |
| Kết nối vào pool ứng viên                     | `open-sse/services/autoCombo/virtualFactory.ts`     |
| Độ lỗi thời của cache có xét đến việc đặt lại | `open-sse/services/autoCombo/freeAccessQuota.ts`    |
| Bề mặt bậc                                    | `open-sse/services/autoCombo/suffixComposition.ts`  |
| Các id được công bố                           | `open-sse/services/autoCombo/builtinCatalog.ts`     |
| Kiểm thử                                      | `tests/unit/autoCombo/subscription-ladder.test.ts`  |
