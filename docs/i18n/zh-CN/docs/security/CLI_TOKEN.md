# CLI Machine-ID Token (中文 (简体))

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## 概述

OmniRoute CLI 命令通过本地管理 API 进行身份验证，使用通过
`HMAC-SHA256(machine-id, salt)` 生成的令牌，并经由 `x-omniroute-cli-token`
请求头发送。

这样，CLI 子命令（`omniroute status`、`omniroute providers` 等）
便可调用管理端点，而无需用户每次调用时都提供 JWT 或密码。

## 工作原理

1. `getMachineTokenSync()` 通过 `node-machine-id` 读取硬件机器 ID
   （失败时回退为空字符串，从而禁用 CLI 身份验证）。
2. 它计算 `HMAC-SHA256(machine_id, salt)`，并返回完整的 64 字符
   十六进制摘要——一个与该机器绑定的确定性、不可逆令牌。
3. 仅当解析后的目标是显式环回 URL（`localhost`、`127.0.0.0/8` 或
   环回 IPv6）时，CLI 才会以 `x-omniroute-cli-token` 发送该令牌。
   携带该令牌的请求使用 `redirect: error`，因此本地重定向无法将其转发到其他来源。
   远程上下文改用限定作用域的访问令牌。如果无法完成派生，CLI 会省略该请求头，
   并由 `omniroute doctor` 报告失败，而不会将空令牌视为有效令牌。
4. 服务器（`src/server/authz/policies/management.ts`）使用相同的盐重新计算
   预期令牌，并通过 `timingSafeEqual` 进行比较，以防止基于计时的提取攻击。

## 安全属性

| 属性                       | 详细信息                                                                                                                                |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **仅限环回**               | 仅当服务器可信的对端本地性标记（根据真实 TCP 对端地址派生）表明其为环回地址时才接受。绝不信任由客户端控制的 `Host` 请求头来判断本地性。 |
| **常量时间比较**           | `crypto.timingSafeEqual` 可防止计时攻击。                                                                                               |
| **不可逆**                 | 无法通过 HMAC 输出还原机器 ID。                                                                                                         |
| **无法绕过 `always` 保护** | 在检查 CLI 令牌之前会先计算 `isAlwaysProtectedPath()`。`/api/shutdown` 和 `/api/settings/database` 始终需要 JWT。                       |
| **不可导出**               | 令牌绝不会写入磁盘或记录到日志中。                                                                                                      |

## 盐轮换

设置 `OMNIROUTE_CLI_SALT` 可在不更改代码的情况下轮换派生令牌。
轮换后，此机器上的所有 CLI 进程都会自动使用新令牌。
当进程列表泄漏可能暴露了之前的派生值时，此功能很有用。

```bash
# 持久轮换（添加到 shell 配置文件）
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# 验证新令牌已投入使用
omniroute status
```

默认盐：`omniroute-cli-auth-v1`

## 旧格式（SHA-256，32 字符）——仍被接受

在采用上述 HMAC 格式之前，CLI 在
`bin/cli/utils/cliToken.mjs`（`src/lib/machineToken.ts` 中的 `getLegacyCliTokenSync`）
内通过 `SHA-256(machineId + salt).hex[0..32]`（一个 32 字符前缀）派生令牌。

为保持向后兼容，服务器接受**两种**格式：验证器构建
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]`，并使用
`timingSafeEqual` 将传入的请求头与每个令牌进行比较
（`src/server/authz/policies/management.ts` 和 `src/lib/middleware/cliTokenAuth.ts`）。
因此，如果令牌与 64 字符的 HMAC 摘要或 32 字符的旧版 SHA-256 前缀中的**任意一个**
匹配，则该令牌有效。

**选择退出：**将 `OMNIROUTE_DISABLE_CLI_TOKEN=true` 设置到环境变量或 `.env` 中，
即可完全禁用 CLI 令牌机制；之后所有访问都需要显式 API 密钥。对于多用户主机，
建议这样做，因为 `machine-id` 是按设备而非按用户生成的，同一主机上的其他用户
可能计算出相同的令牌。

## 文件

| 文件                                      | 用途                              |
| ----------------------------------------- | --------------------------------- |
| `src/lib/machineToken.ts`                 | 令牌派生（`getMachineTokenSync`） |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER` 常量           |
| `src/server/authz/policies/management.ts` | 服务器端验证                      |
| `src/server/authz/routeGuard.ts`          | 环回主机检查（`isLoopbackHost`）  |

## 另请参阅

- `docs/security/ROUTE_GUARD_TIERS.md` — 路由保护层级
- `docs/architecture/AUTHZ_GUIDE.md` — 完整的授权流程
