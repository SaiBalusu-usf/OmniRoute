# CLI Machine-ID Token (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## 개요

OmniRoute CLI 명령은 `x-omniroute-cli-token` 요청 헤더를 통해 전송되는
`HMAC-SHA256(machine-id, salt)` 토큰을 사용하여 로컬 관리 API에 인증합니다.

이를 통해 CLI 하위 명령(`omniroute status`, `omniroute providers` 등)은
사용자가 호출할 때마다 JWT 또는 비밀번호를 제공하지 않아도 관리 엔드포인트를
호출할 수 있습니다.

## 작동 방식

1. `getMachineTokenSync()`는 `node-machine-id`를 통해 하드웨어 머신 ID를 읽습니다
   (실패하면 빈 문자열로 대체하여 CLI 인증을 비활성화합니다).
2. `HMAC-SHA256(machine_id, salt)`를 계산하고 전체 64자 16진수
   다이제스트를 반환합니다. 이는 이 머신에 연결된 결정적이고 역산 불가능한 토큰입니다.
3. CLI는 확인된 대상이 명시적인 루프백 URL(`localhost`, `127.0.0.0/8` 또는
   루프백 IPv6)인 경우에만 토큰을 `x-omniroute-cli-token`으로 전송합니다.
   토큰이 포함된 요청은 `redirect: error`를 사용하므로 로컬 리디렉션을 통해 토큰이
   다른 오리진으로 전달될 수 없습니다. 원격 컨텍스트에서는 대신 범위가 지정된
   액세스 토큰을 사용합니다. 토큰을 생성할 수 없는 경우 CLI는 헤더를 생략하며,
   `omniroute doctor`는 빈 토큰을 유효한 것으로 처리하지 않고 실패를 보고합니다.
4. 서버(`src/server/authz/policies/management.ts`)는 동일한 salt를 사용하여
   예상 토큰을 다시 계산하고 `timingSafeEqual`로 비교하여 타이밍 기반 추출을
   방지합니다.

## 보안 속성

| 속성                        | 세부 정보                                                                                                                                                                                   |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **루프백 전용**             | 서버의 신뢰할 수 있는 피어 로컬리티 스탬프(실제 TCP 피어 주소에서 파생됨)가 루프백임을 나타내는 경우에만 허용됩니다. 클라이언트가 제어하는 `Host` 헤더는 로컬리티 판단에 사용되지 않습니다. |
| **상수 시간 비교**          | `crypto.timingSafeEqual`은 타이밍 공격을 방지합니다.                                                                                                                                        |
| **역산 불가능**             | HMAC 출력으로는 머신 ID를 복원할 수 없습니다.                                                                                                                                               |
| **`always` 보호 우회 불가** | `isAlwaysProtectedPath()`는 CLI 토큰 검사 전에 평가됩니다. `/api/shutdown`과 `/api/settings/database`에는 항상 JWT가 필요합니다.                                                            |
| **내보내기 불가**           | 토큰은 디스크에 기록되거나 로그에 남지 않습니다.                                                                                                                                            |

## Salt 교체

코드를 변경하지 않고 파생 토큰을 교체하려면 `OMNIROUTE_CLI_SALT`를 설정하십시오.
교체 후에는 이 머신의 모든 CLI 프로세스가 새 토큰을 자동으로 사용합니다.
이전 파생 값이 노출되었을 수 있는 프로세스 목록 유출 후에 유용합니다.

```bash
# 영구 교체(셸 프로필에 추가)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# 새 토큰이 사용되는지 확인
omniroute status
```

기본 salt: `omniroute-cli-auth-v1`

## 레거시 형식(SHA-256, 32자) — 계속 지원됨

위의 HMAC 형식 이전에는 CLI가
`bin/cli/utils/cliToken.mjs`의 `SHA-256(machineId + salt).hex[0..32]`
(32자 접두사)로 토큰을 파생했습니다
(`src/lib/machineToken.ts`의 `getLegacyCliTokenSync`).

이전 버전과의 호환성을 위해 서버는 **두** 형식을 모두 허용합니다. 검증기는
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]`를 구성하고
수신 헤더를 각각의 토큰과 `timingSafeEqual`로 비교합니다
(`src/server/authz/policies/management.ts` 및 `src/lib/middleware/cliTokenAuth.ts`).
따라서 토큰이 64자 HMAC 다이제스트 또는 32자 레거시 SHA-256 접두사 **중 하나**와
일치하면 유효합니다.

**사용 중지:** CLI 토큰 메커니즘을 완전히 비활성화하려면 환경 변수 또는 `.env`에서
`OMNIROUTE_DISABLE_CLI_TOKEN=true`를 설정하십시오. 이후 모든 액세스에는 명시적인
API 키가 필요합니다. 다중 사용자 호스트에서는 이 설정을 권장합니다. `machine-id`는
사용자별이 아니라 장치별이므로 동일한 호스트의 다른 사용자가 같은 토큰을 계산할 수
있기 때문입니다.

## 파일

| 파일                                      | 용도                                 |
| ----------------------------------------- | ------------------------------------ |
| `src/lib/machineToken.ts`                 | 토큰 파생(`getMachineTokenSync`)     |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER` 상수              |
| `src/server/authz/policies/management.ts` | 서버 측 검증                         |
| `src/server/authz/routeGuard.ts`          | 루프백 호스트 검사(`isLoopbackHost`) |

## 참고 항목

- `docs/security/ROUTE_GUARD_TIERS.md` — 라우트 보호 계층
- `docs/architecture/AUTHZ_GUIDE.md` — 전체 권한 부여 파이프라인
