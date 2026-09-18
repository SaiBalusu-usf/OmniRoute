# CLI Machine-ID Token (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Visão geral

Os comandos da CLI do OmniRoute autenticam-se na API de gestão local utilizando um
token `HMAC-SHA256(machine-id, salt)` enviado através do cabeçalho de pedido
`x-omniroute-cli-token`.

Isto permite que os subcomandos da CLI (`omniroute status`, `omniroute providers`, etc.)
chamem endpoints de gestão sem exigir que o utilizador forneça um JWT ou uma
palavra-passe em cada invocação.

## Como funciona

1. `getMachineTokenSync()` lê o ID de máquina do hardware através de `node-machine-id`
   (em caso de falha, utiliza uma cadeia vazia, desativando a autenticação da CLI).
2. Calcula `HMAC-SHA256(machine_id, salt)` e devolve o resumo hexadecimal completo de
   64 caracteres — um token determinístico e não reversível associado a esta máquina.
3. A CLI envia o token como `x-omniroute-cli-token` apenas quando o destino resolvido
   é um URL explícito de loopback (`localhost`, `127.0.0.0/8` ou IPv6 de
   loopback). Os pedidos que transportam o token utilizam `redirect: error`, pelo que um
   redirecionamento local não pode encaminhá-lo para outra origem. Os contextos remotos
   utilizam, em alternativa, tokens de acesso com âmbito limitado. Se a derivação não
   estiver disponível, a CLI omite o cabeçalho e `omniroute doctor` comunica a falha,
   em vez de considerar válido um token vazio.
4. O servidor (`src/server/authz/policies/management.ts`) volta a calcular o
   token esperado com o mesmo salt e compara-o através de `timingSafeEqual` para
   impedir a extração baseada em tempos de execução.

## Propriedades de segurança

| Propriedade                           | Detalhe                                                                                                                                                                                                                                                |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Apenas loopback**                   | Aceite apenas quando a marca de localidade do par considerada fidedigna pelo servidor (derivada do endereço real do par TCP) indica loopback. O cabeçalho `Host`, controlado pelo cliente, nunca é considerado fidedigno para determinar a localidade. |
| **Comparação em tempo constante**     | `crypto.timingSafeEqual` impede ataques de temporização.                                                                                                                                                                                               |
| **Não reversível**                    | O resultado do HMAC não permite recuperar o ID da máquina.                                                                                                                                                                                             |
| **Sem contornar a proteção `always`** | `isAlwaysProtectedPath()` é avaliada antes da verificação do token da CLI. `/api/shutdown` e `/api/settings/database` exigem sempre um JWT.                                                                                                            |
| **Não exportável**                    | O token nunca é gravado no disco nem registado em logs.                                                                                                                                                                                                |

## Rotação do salt

Defina `OMNIROUTE_CLI_SALT` para rodar o token derivado sem alterações ao código.
Após a rotação, todos os processos da CLI nesta máquina utilizarão automaticamente
o novo token. É útil após uma fuga da lista de processos que possa ter exposto o
valor derivado anterior.

```bash
# Rotação persistente (adicionar ao perfil da shell)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Verificar se o novo token está a ser utilizado
omniroute status
```

Salt predefinido: `omniroute-cli-auth-v1`

## Formato legado (SHA-256, 32 caracteres) — ainda aceite

Antes do formato HMAC acima, a CLI derivava o respetivo token como
`SHA-256(machineId + salt).hex[0..32]` (um prefixo de 32 caracteres) em
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` em `src/lib/machineToken.ts`).

Para manter a retrocompatibilidade, o servidor aceita **ambos** os formatos: o verificador cria
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` e compara o
cabeçalho recebido com cada um através de `timingSafeEqual`
(`src/server/authz/policies/management.ts` e `src/lib/middleware/cliTokenAuth.ts`).
Assim, um token é válido se corresponder **ou** ao resumo HMAC de 64 caracteres ou ao
prefixo SHA-256 legado de 32 caracteres.

**Desativação:** defina `OMNIROUTE_DISABLE_CLI_TOKEN=true` (no ambiente ou em `.env`) para desativar
completamente o mecanismo de token da CLI; nesse caso, todo o acesso exige uma chave de API explícita.
Isto é recomendado em sistemas com vários utilizadores, uma vez que o `machine-id` se aplica ao
dispositivo (e não ao utilizador) e outro utilizador no mesmo sistema pode calcular o mesmo token.

## Ficheiros

| Ficheiro                                  | Finalidade                                              |
| ----------------------------------------- | ------------------------------------------------------- |
| `src/lib/machineToken.ts`                 | Derivação do token (`getMachineTokenSync`)              |
| `src/server/authz/headers.ts`             | Constante `CLI_TOKEN_HEADER`                            |
| `src/server/authz/policies/management.ts` | Verificação no servidor                                 |
| `src/server/authz/routeGuard.ts`          | Verificação do anfitrião de loopback (`isLoopbackHost`) |

## Ver também

- `docs/security/ROUTE_GUARD_TIERS.md` — níveis de proteção de rotas
- `docs/architecture/AUTHZ_GUIDE.md` — pipeline completo de autorização
