# Regras do Projeto EasyDrive

## 📚 Documentação Principal (Fonte Única da Verdade)

**SEMPRE consulte [`./ai/README.md`](./ai/README.md) como fonte centralizada de toda a documentação.**

Este arquivo é o **índice mestre** que contém:

- 📋 Estrutura completa da documentação
- 🎯 Guias rápidos por tarefa
- 🚨 Regras críticas não-negociáveis
- 🔗 Links para toda documentação detalhada
- 💡 Workflows e exemplos práticos

---

## 🚀 Quick Start

### Antes de Qualquer Tarefa

1. **Leia:** [`./ai/README.md`](./ai/README.md) para navegar pela documentação
2. **Consulte:** A documentação relevante antes de implementar
3. **Siga:** Os workflows e padrões estabelecidos

### Links Principais da Documentação

**Leitura Essencial (ordem recomendada):**

1. **[`./ai/README.md`](./ai/README.md)** ⭐ - ÍNDICE MESTRE (comece aqui)
2. **[`./ai/project/00-project-overview.md`](./ai/project/00-project-overview.md)** - Visão geral do EasyDrive
3. **[`./ai/general-rules/architecture.md`](./ai/general-rules/architecture.md)** - Estrutura e padrões
4. **[`./ai/libs/supabase-declarative-database-schema.md`](./ai/libs/supabase-declarative-database-schema.md)** - Workflow OBRIGATÓRIO para database

---

## 🚨 Regras Críticas NÃO-NEGOCIÁVEIS

### 1. Consulte Sempre a Documentação

**REGRA:** Antes de qualquer implementação, consulte [`./ai/README.md`](./ai/README.md) para encontrar a documentação relevante.

### 2. DTOs São OBRIGATÓRIOS

```typescript
// ❌ NUNCA exponha entidades do banco diretamente
export function getUser() {
  return supabase.from("users").select("*");
}

// ✅ SEMPRE use DTOs (Public/Private)
export function getUser(): UserPublicDTO {
  const user = await supabase.from("users").select("*");
  return toUserPublicDTO(user);
}
```

**Documentação:** [`./ai/general-rules/dto.md`](./ai/general-rules/dto.md)

### 3. Validação com Zod

```typescript
// ✅ SEMPRE valide TODA entrada com Zod
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const result = loginSchema.safeParse(data);
```

**Documentação:** [`./ai/general-rules/validation.md`](./ai/general-rules/validation.md)

### 4. Workflow Supabase (DECLARATIVO)

```
supabase/
├── schemas/          ← Arquivos SQL declarativos AQUI
│   ├── tables/
│   ├── functions/
│   └── policies/
└── migrations/       ← Gerado automaticamente via CLI
```

**Regras:**

- ❌ NUNCA crie migrations manualmente em `supabase/migrations/`
- ✅ SEMPRE crie schemas em `supabase/schemas/`
- ✅ SEMPRE use `supabase db diff` para gerar migrations
- ✅ CONSULTE [`./ai/libs/supabase-declarative-database-schema.md`](./ai/libs/supabase-declarative-database-schema.md) ANTES de qualquer alteração no DB

**Workflow resumido:**

```bash
# 1. Editar schema declarativo
vim supabase/schemas/tables/[tabela].sql

# 2. Parar Supabase
supabase stop

# 3. Gerar migration
supabase db diff -f nome_descritivo

# 4. Aplicar e testar
supabase db reset
```

### 5. Segurança

**NUNCA exponha:**

- Senhas ou hashes
- CPF completo (use mascaramento)
- Tokens de autenticação
- API keys ou secrets
- Dados financeiros sem criptografia

**Documentação:** [`./ai/general-rules/security.md`](./ai/general-rules/security.md)

### 6. Type Safety

```typescript
// ❌ NUNCA use any
function process(data: any) {}

// ✅ SEMPRE use tipos específicos
function process(data: User) {}
```

**Documentação:** [`./ai/general-rules/typescript-code-quality.md`](./ai/general-rules/typescript-code-quality.md)

---

## 🎯 Guia Rápido por Tarefa

### Criando uma Nova Feature

1. **Consulte:** [`./ai/README.md`](./ai/README.md) → "Criar Nova Feature"
2. **Leia:**
   - [`./ai/general-rules/architecture.md`](./ai/general-rules/architecture.md)
   - [`./ai/general-rules/dto.md`](./ai/general-rules/dto.md)
   - [`./ai/general-rules/validation.md`](./ai/general-rules/validation.md)
3. **Implemente** seguindo a estrutura de features

### Alterações no Banco de Dados

**WORKFLOW OBRIGATÓRIO:**

1. **Leia:** [`./ai/libs/supabase-declarative-database-schema.md`](./ai/libs/supabase-declarative-database-schema.md) ⭐
2. Edite/crie schema em `supabase/schemas/`
3. Execute `supabase stop`
4. Execute `supabase db diff -f [nome-descritivo]`
5. Execute `supabase db reset` para testar

### Criando Componentes

1. **Server Components:** `features/[feature]/components/server/`
2. **Client Components:** `features/[feature]/components/client/` (adicione `'use client'`)
3. **Shared:** `features/[feature]/components/shared/`
4. **Design System:** Use RetroUI de [`components/retroui/`](./components/retroui/)

**Documentação:** [`./ai/general-rules/styling.md`](./ai/general-rules/styling.md)

### Criando API Routes

1. Crie em `features/[feature]/api/[route]/route.ts`
2. Valide input com Zod
3. Use DTOs para output

```typescript
import { z } from "zod";
import { NextResponse } from "next/server";

const schema = z.object({
  name: z.string(),
});

export async function POST(request: Request) {
  const body = await request.json();
  const result = schema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  // Processar e retornar DTO
  return NextResponse.json({ data: userPublicDTO });
}
```

---

## 🏗️ Informações do Projeto

### Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Linguagem:** TypeScript (Strict Mode)
- **Database:** Supabase (PostgreSQL)
- **UI:** RetroUI Design System + Tailwind CSS v4
- **Validação:** Zod
- **Data Fetching:** React Query
- **Autenticação:** Supabase Auth

### Path Aliases

```typescript
"@/*"           → "./"
"@features/*"   → "./features/*"
"@components/*" → "./components/*"
"@lib/*"        → "./lib/*"
```

### Papéis de Usuário

- **Aluno:** Estudante de direção
- **Instrutor:** Instrutor certificado
- **Admin:** Administrador da plataforma

---

## 📁 Estrutura de Pastas

**Para detalhes completos, consulte:** [`./ai/general-rules/architecture.md`](./ai/general-rules/architecture.md)

```
easy-drive/
├── app/                    # Next.js App Router
│   ├── (marketing)/       # Rotas públicas
│   ├── auth/              # Autenticação
│   └── (app)/             # Rotas protegidas
├── features/              # Features modulares
│   └── [feature-name]/
│       ├── components/
│       │   ├── client/
│       │   ├── server/
│       │   └── shared/
│       ├── types/
│       ├── dtos/
│       ├── validations/
│       ├── services/
│       ├── queries/
│       └── api/
├── components/
│   ├── retroui/          # Design System
│   └── supabase/         # Componentes Supabase
├── lib/
│   ├── supabase/         # Clientes Supabase
│   └── utils.ts
├── supabase/
│   ├── schemas/          # ⚠️ SCHEMAS DECLARATIVOS AQUI
│   └── migrations/       # Gerado automaticamente
└── ai/                   # 📚 DOCUMENTAÇÃO PRINCIPAL
    └── README.md         # ⭐ ÍNDICE MESTRE
```

---

## 📖 Documentação Completa

**Acesse:** [`./ai/README.md`](./ai/README.md)

O README.md contém:

### 📋 Regras Gerais ([`ai/general-rules/`](./ai/general-rules/))

- Arquitetura, DTOs, Validação, Segurança, Styling
- Frontend, Fullstack, TypeScript, Modern Web Dev

### 📚 Bibliotecas e Tecnologias ([`ai/libs/`](./ai/libs/))

- Supabase (workflow, migrations, auth, CLI)
- Next.js (App Router, Server/Client Components)
- RetroUI Design System

### 🎯 Documentação do Projeto ([`ai/project/`](./ai/project/))

- Visão geral completa do EasyDrive

---

## ⚠️ Antes de Qualquer Alteração

### Checklist Obrigatório

- ✅ Consulte [`./ai/README.md`](./ai/README.md) para navegação
- ✅ Leia a documentação relevante para sua tarefa
- ✅ Verifique as regras não-negociáveis
- ✅ Use DTOs para expor dados
- ✅ Valide com Zod
- ✅ Para DB: use workflow declarativo
- ✅ Mantenha type safety (sem `any`)
- ✅ Separe Server/Client components
- ✅ Use componentes RetroUI

### Para Database

- ✅ **SEMPRE** leia [`./ai/libs/supabase-declarative-database-schema.md`](./ai/libs/supabase-declarative-database-schema.md) primeiro
- ✅ **NUNCA** edite `supabase/migrations/` diretamente
- ✅ **SEMPRE** edite `supabase/schemas/` e use `db diff`
- ✅ **SEMPRE** rode `supabase stop` antes de `db diff`
- ✅ **SEMPRE** teste com `supabase db reset`

### Para Features

- ✅ Siga a estrutura em [`./ai/general-rules/architecture.md`](./ai/general-rules/architecture.md)
- ✅ Use DTOs conforme [`./ai/general-rules/dto.md`](./ai/general-rules/dto.md)
- ✅ Valide conforme [`./ai/general-rules/validation.md`](./ai/general-rules/validation.md)
- ✅ Aplique segurança conforme [`./ai/general-rules/security.md`](./ai/general-rules/security.md)
- ✅ Use RetroUI conforme [`./ai/general-rules/styling.md`](./ai/general-rules/styling.md)

---

## 🔗 Links Importantes

- **📚 ÍNDICE MESTRE:** [`./ai/README.md`](./ai/README.md) ⭐ (COMECE AQUI)
- **Visão Geral:** [`./ai/project/00-project-overview.md`](./ai/project/00-project-overview.md)
- **Arquitetura:** [`./ai/general-rules/architecture.md`](./ai/general-rules/architecture.md)
- **Workflow Supabase:** [`./ai/libs/supabase-declarative-database-schema.md`](./ai/libs/supabase-declarative-database-schema.md)
- **DTOs:** [`./ai/general-rules/dto.md`](./ai/general-rules/dto.md)
- **Validação:** [`./ai/general-rules/validation.md`](./ai/general-rules/validation.md)
- **Segurança:** [`./ai/general-rules/security.md`](./ai/general-rules/security.md)
- **Styling:** [`./ai/general-rules/styling.md`](./ai/general-rules/styling.md)

---

## 💡 Prompt Modelo para Solicitações

Ao solicitar implementações, use este modelo:

```
Consultei ./ai/README.md e li a documentação relevante:

CONTEXTO:
- ai/project/00-project-overview.md - Visão geral
- ai/general-rules/architecture.md - Estrutura
- ai/general-rules/dto.md - DTOs
- ai/general-rules/validation.md - Validação
- ai/libs/supabase-declarative-database-schema.md - Database (se necessário)

TAREFA: [descreva a tarefa]

Para FEATURE:
- Seguir estrutura de features
- Usar DTOs obrigatórios
- Validar com Zod
- Aplicar segurança
- Usar componentes RetroUI

Para DATABASE:
- Criar/editar .sql em supabase/schemas/
- Definir RLS policies
- Gerar migration: supabase db diff -f nome_migration
- Aplicar: supabase db reset
```

---

**💡 Lembre-se:** [`./ai/README.md`](./ai/README.md) é a FONTE ÚNICA DA VERDADE. SEMPRE consulte primeiro!
