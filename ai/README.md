# 📚 Documentação EasyDrive - Guia Completo para IAs

## 🚀 Para IAs - Começe Aqui!

### Leitura Essencial (Ordem Recomendada)

1. **[Visão Geral do Projeto](project/00-project-overview.md)** - Entenda o contexto e objetivos do EasyDrive
2. **[Arquitetura](general-rules/architecture.md)** - Estrutura do código e padrões de organização
3. **[Supabase Database Workflow](libs/supabase-declarative-database-schema.md)** - Workflow OBRIGATÓRIO para database

---

## 📋 Estrutura da Documentação

A documentação está organizada em **3 categorias principais**:

### 📋 [Regras Gerais](general-rules/) - Padrões de Desenvolvimento

Regras e convenções que devem ser seguidas em todo o projeto:

- **[Arquitetura](general-rules/architecture.md)** - Estrutura de pastas, feature-based architecture, organização de código
- **[DTO](general-rules/dto.md)** - Data Transfer Objects (regra NÃO-NEGOCIÁVEL)
- **[Validação](general-rules/validation.md)** - Zod schemas e Type Safety (TypeScript Strict Mode)
- **[Segurança](general-rules/security.md)** - Proteção de dados sensíveis, mascaramento, RLS
- **[Styling](general-rules/styling.md)** - RetroUI Design System e Tailwind CSS v4
- **[Frontend](general-rules/front-end.md)** - Padrões de desenvolvimento frontend
- **[Fullstack](general-rules/fullstack.md)** - Padrões fullstack e boas práticas
- **[TypeScript](general-rules/typescript-code-quality.md)** - Qualidade de código TypeScript
- **[Modern Web Dev](general-rules/modern-web-development.md)** - Práticas modernas de desenvolvimento
- **[Chrome Extensions](general-rules/chrome-extension-best-practices.md)** - Best practices para extensões

### 📚 [Bibliotecas e Tecnologias](libs/) - Referências Técnicas

Documentação das principais tecnologias usadas no projeto:

#### Supabase

- **[Workflow Declarativo](libs/supabase-declarative-database-schema.md)** ⭐ **OBRIGATÓRIO** - Workflow para schema
- **[Create Migration](libs/supabase-create-migration.md)** - Como criar e gerenciar migrations
- **[Postgres Guidelines](libs/supabase-postgres.md)** - Diretrizes PostgreSQL
- **[CLI Reference](libs/supabase-cli.md)** - Referência completa do CLI
- **[Auth Documentation](libs/supabase-auth-doc.md)** - Autenticação com Supabase
- **[Supabase Full Docs](libs/supabase-doc.md)** - Documentação completa

#### Next.js

- **[Next.js Reference](libs/nextjs.md)** - Documentação completa do Next.js 14+ App Router

#### UI/Design

- **[RetroUI](libs/retro-ui.md)** - Design System RetroUI

### 🎯 [Documentação do Projeto](project/) - Contexto Específico

Documentação específica do projeto EasyDrive:

- **[Visão Geral](project/00-project-overview.md)** - O que é, objetivos, personas, tech stack, roadmap

---

## 💡 Quick Start

### Para criar uma Feature Completa

```bash
# 1. Leia a documentação essencial
- project/00-project-overview.md
- general-rules/architecture.md
- general-rules/dto.md
- general-rules/validation.md

# 2. Se precisar de database, leia OBRIGATORIAMENTE
- libs/supabase-declarative-database-schema.md
- libs/supabase-create-migration.md

# 3. Siga o workflow
```

#### Checklist de Implementação

- ✅ Criar estrutura em `features/[feature-name]/`
- ✅ Definir types em `types/`
- ✅ Criar DTOs em `dtos/`
- ✅ Criar schemas Zod em `validations/`
- ✅ Implementar service em `services/`
- ✅ Criar API routes
- ✅ Criar componentes
- ✅ Criar página

### Para modificar Database

```bash
# 1. OBRIGATÓRIO: Leia o workflow declarativo
libs/supabase-declarative-database-schema.md

# 2. Edite arquivos .sql em supabase/schemas/
vim supabase/schemas/tables/users.sql

# 3. Pare o Supabase local
supabase stop

# 4. Gere a migration
supabase db diff -f create_users_table

# 5. Aplique as mudanças
supabase db reset
```

#### Workflow Database Resumido

1. **SEMPRE** edite `supabase/schemas/*.sql`
2. **NUNCA** edite `supabase/migrations/` diretamente
3. **SEMPRE** use `supabase db diff` para gerar migrations
4. **SEMPRE** use `supabase db reset` para aplicar

---

## 📖 Prompt Modelo para IA

Use este template ao interagir com IAs:

```
Li a documentação do EasyDrive em ai/:

CONTEXTO:
- ai/project/00-project-overview.md - Visão geral do projeto
- ai/general-rules/architecture.md - Estrutura e organização
- ai/general-rules/dto.md - Data Transfer Objects
- ai/general-rules/validation.md - Validação com Zod
- ai/general-rules/security.md - Proteção de dados
- ai/libs/supabase-declarative-database-schema.md - Workflow de database

TAREFA: Preciso criar [FEATURE/TABLE/API].

Para FEATURE:
- Seguir general-rules/architecture.md (estrutura de pastas)
- Usar DTOs conforme general-rules/dto.md
- Validar com Zod conforme general-rules/validation.md
- Aplicar segurança conforme general-rules/security.md
- Usar RetroUI conforme general-rules/styling.md

Para DATABASE:
- **OBRIGATÓRIO** seguir libs/supabase-declarative-database-schema.md
- Criar/editar arquivo .sql em supabase/schemas/
- Definir RLS policies
- Gerar migration: supabase db diff -f nome_da_migration
- Aplicar: supabase db reset
```

---

## 🔗 Referência Rápida

### Arquivos Principais

| Arquivo                                                                                 | Descrição                | Quando Usar                    |
| --------------------------------------------------------------------------------------- | ------------------------ | ------------------------------ |
| [00-project-overview.md](project/00-project-overview.md)                                | Visão geral do EasyDrive | Início de qualquer tarefa      |
| [architecture.md](general-rules/architecture.md)                                        | Estrutura do projeto     | Criando features/componentes   |
| [supabase-declarative-database-schema.md](libs/supabase-declarative-database-schema.md) | Workflow de database     | **QUALQUER** mudança no DB     |
| [dto.md](general-rules/dto.md)                                                          | Data Transfer Objects    | Expondo dados via API          |
| [validation.md](general-rules/validation.md)                                            | Schemas Zod              | Validando inputs               |
| [security.md](general-rules/security.md)                                                | Proteção de dados        | Antes de expor dados sensíveis |
| [styling.md](general-rules/styling.md)                                                  | RetroUI e Tailwind       | Criando UI/componentes         |

### Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Linguagem**: TypeScript (Strict Mode)
- **Database**: Supabase (PostgreSQL)
- **UI**: RetroUI Design System + Tailwind CSS v4
- **Validação**: Zod
- **Data Fetching**: React Query

### Path Aliases

```typescript
"@/*"           → "./"
"@features/*"   → "./features/*"
"@components/*" → "./components/*"
"@lib/*"        → "./lib/*"
```

---

## 🔥 Workflow Completo: Feature + Database

### 1. Planejamento

```bash
# Leia PRIMEIRO:
1. project/00-project-overview.md  # Entender o projeto
2. general-rules/architecture.md    # Estrutura de código
3. libs/supabase-declarative-database-schema.md  # Se precisar DB
```

### 2. Database (se necessário)

```bash
# a) Criar/editar schema declarativo
vim supabase/schemas/tables/[tabela].sql

# Exemplo: supabase/schemas/tables/lessons.sql
# CREATE TABLE lessons (
#   id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
#   instructor_id uuid REFERENCES instructors(id),
#   student_id uuid REFERENCES users(id),
#   ...
# );
# ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;

# b) Parar Supabase
supabase stop

# c) Gerar migration
supabase db diff -f create_lessons_table

# d) Aplicar mudanças
supabase db reset
```

### 3. Feature (aplicação)

```bash
# Estrutura:
features/[nome]/
├── components/
│   ├── client/     # 'use client' components
│   ├── server/     # Server components (padrão)
│   └── shared/     # Compartilhados
├── types/          # TypeScript types
├── dtos/           # Data Transfer Objects
├── validations/    # Zod schemas
├── services/       # Lógica de negócio
├── queries/        # React Query (queries.ts, mutations.ts)
├── api/            # API routes específicas
└── index.ts        # Barrel export
```

#### Ordem de Implementação

1. **Types** - Defina interfaces TypeScript
2. **DTOs** - Crie DTOs Public/Private
3. **Validations** - Schemas Zod
4. **Services** - Lógica de negócio + Supabase queries
5. **API Routes** - Endpoints HTTP
6. **Components** - UI (client/server)
7. **Pages** - Páginas em `app/`
8. **Barrel Export** - Export público em `index.ts`

### 4. Validação

- ✅ DTOs não expõem dados sensíveis?
- ✅ Todos os inputs validados com Zod?
- ✅ RLS habilitado nas tabelas?
- ✅ TypeScript strict mode sem `any`?
- ✅ Componentes RetroUI usados?

---

## 🚨 Regras Críticas (NÃO-NEGOCIÁVEIS)

### Database

- ✅ **SEMPRE** use o workflow declarativo ([`libs/supabase-declarative-database-schema.md`](libs/supabase-declarative-database-schema.md))
- ✅ **NUNCA** edite `supabase/migrations/` diretamente
- ✅ **SEMPRE** edite `supabase/schemas/` e gere diff
- ✅ **SEMPRE** rode `supabase stop` antes de `db diff`
- ✅ **SEMPRE** teste com `supabase db reset`

### Segurança

- ✅ **SEMPRE** use DTOs ([`general-rules/dto.md`](general-rules/dto.md))
- ✅ **NUNCA** exponha: senhas, tokens, API keys
- ✅ **SEMPRE** mascare: CPF, telefone (quando apropriado)
- ✅ **SEMPRE** habilite RLS nas tabelas
- ✅ **SEMPRE** verifique permissões antes de ações

### Validação

- ✅ **SEMPRE** valide com Zod ([`general-rules/validation.md`](general-rules/validation.md))
- ✅ **NUNCA** use `any` em TypeScript
- ✅ **SEMPRE** use `unknown` para dados externos
- ✅ **SEMPRE** use `safeParse()` para validação
- ✅ **SEMPRE** trate erros de validação

### Código

- ✅ **SEMPRE** siga a estrutura de features ([`general-rules/architecture.md`](general-rules/architecture.md))
- ✅ **SEMPRE** use componentes RetroUI ([`general-rules/styling.md`](general-rules/styling.md))
- ✅ **SEMPRE** use TypeScript Strict Mode
- ✅ **SEMPRE** crie barrel exports em `index.ts`

---

## 📚 Índice Completo de Arquivos

### 📋 Regras Gerais ([general-rules/](general-rules/))

| Arquivo                                                                                | Tópico      | Descrição                                          |
| -------------------------------------------------------------------------------------- | ----------- | -------------------------------------------------- |
| [architecture.md](general-rules/architecture.md)                                       | Arquitetura | Estrutura de pastas, feature-based, barrel exports |
| [dto.md](general-rules/dto.md)                                                         | DTOs        | Public/Private DTOs, segurança de dados            |
| [validation.md](general-rules/validation.md)                                           | Validação   | Zod schemas, type safety, safeParse                |
| [security.md](general-rules/security.md)                                               | Segurança   | Dados sensíveis, mascaramento, RLS, autenticação   |
| [styling.md](general-rules/styling.md)                                                 | Estilo      | RetroUI components, Tailwind CSS v4                |
| [front-end.md](general-rules/front-end.md)                                             | Frontend    | Padrões React, hooks, performance                  |
| [fullstack.md](general-rules/fullstack.md)                                             | Fullstack   | Integração frontend/backend                        |
| [typescript-code-quality.md](general-rules/typescript-code-quality.md)                 | TypeScript  | Strict mode, tipos, boas práticas                  |
| [modern-web-development.md](general-rules/modern-web-development.md)                   | Moderno     | Práticas modernas de desenvolvimento web           |
| [chrome-extension-best-practices.md](general-rules/chrome-extension-best-practices.md) | Extensions  | Best practices para extensões Chrome               |

### 📚 Bibliotecas e Tecnologias ([libs/](libs/))

#### Supabase

| Arquivo                                                                                 | Descrição                | Quando Usar                                 |
| --------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------- |
| [supabase-declarative-database-schema.md](libs/supabase-declarative-database-schema.md) | **Workflow Declarativo** | **OBRIGATÓRIO** para qualquer mudança no DB |
| [supabase-create-migration.md](libs/supabase-create-migration.md)                       | Migrations               | Criar e gerenciar migrations                |
| [supabase-postgres.md](libs/supabase-postgres.md)                                       | PostgreSQL               | Guidelines e boas práticas Postgres         |
| [supabase-cli.md](libs/supabase-cli.md)                                                 | CLI                      | Referência completa dos comandos CLI        |
| [supabase-auth-doc.md](libs/supabase-auth-doc.md)                                       | Autenticação             | Implementar auth com Supabase               |
| [supabase-doc.md](libs/supabase-doc.md)                                                 | Documentação             | Docs completa do Supabase                   |

#### Next.js

| Arquivo                     | Descrição                                    |
| --------------------------- | -------------------------------------------- |
| [nextjs.md](libs/nextjs.md) | Documentação completa Next.js 14+ App Router |

#### UI/Design

| Arquivo                         | Descrição                                     |
| ------------------------------- | --------------------------------------------- |
| [retro-ui.md](libs/retro-ui.md) | RetroUI Design System - componentes e padrões |

### 🎯 Projeto ([project/](project/))

| Arquivo                                                  | Descrição                                                                         |
| -------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [00-project-overview.md](project/00-project-overview.md) | Visão geral completa do EasyDrive: objetivos, personas, features, modelo de dados |

---

## 🎯 Guias Rápidos por Tarefa

### Criar uma Nova Feature

**Leitura obrigatória:**

1. [`general-rules/architecture.md`](general-rules/architecture.md) - Estrutura de features
2. [`general-rules/dto.md`](general-rules/dto.md) - DTOs obrigatórios
3. [`general-rules/validation.md`](general-rules/validation.md) - Validação Zod

**Passos:**

```typescript
// 1. Criar types
features / [nome] / types / [nome].types.ts;

// 2. Criar DTOs
features / [nome] / dtos / [nome].dto.ts;

// 3. Criar schemas Zod
features / [nome] / validations / [nome].schema.ts;

// 4. Criar service
features / [nome] / services / [nome].service.ts;

// 5. Criar componentes
features /
  [nome] /
  components /
  client /
  features /
  [nome] /
  components /
  server /
  // 6. Barrel export
  features /
  [nome] /
  index.ts;
```

### Modificar Database Schema

**Leitura OBRIGATÓRIA:**

1. [`libs/supabase-declarative-database-schema.md`](libs/supabase-declarative-database-schema.md) ⭐
2. [`libs/supabase-create-migration.md`](libs/supabase-create-migration.md)

**Workflow:**

```bash
# 1. Editar schema declarativo
vim supabase/schemas/tables/[tabela].sql

# 2. Parar Supabase
supabase stop

# 3. Gerar migration
supabase db diff -f nome_descritivo

# 4. Aplicar e testar
supabase db reset

# 5. Verificar migration gerada
cat supabase/migrations/[timestamp]_nome_descritivo.sql
```

### Implementar Autenticação

**Leitura obrigatória:**

1. [`libs/supabase-auth-doc.md`](libs/supabase-auth-doc.md) - Auth com Supabase
2. [`general-rules/security.md`](general-rules/security.md) - Segurança

### Criar Componentes UI

**Leitura obrigatória:**

1. [`general-rules/styling.md`](general-rules/styling.md) - RetroUI Design System
2. [`libs/retro-ui.md`](libs/retro-ui.md) - Catálogo de componentes

**Componentes disponíveis:**

```typescript
import { Button, Card, Input, Label } from "@/components/retroui";
```

### Validar Dados de Entrada

**Leitura obrigatória:**

1. [`general-rules/validation.md`](general-rules/validation.md) - Schemas Zod

**Exemplo:**

```typescript
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const result = schema.safeParse(data);
if (!result.success) {
  // Tratar erro
}
```

---

## 🛠️ Comandos Essenciais

### Supabase Local Development

```bash
# Iniciar serviços
supabase start

# Ver status
supabase status

# Parar serviços
supabase stop

# Reset database (aplica todas migrations)
supabase db reset

# Gerar migration
supabase db diff -f nome_migration

# Aplicar migration específica
supabase migration up

# Gerar tipos TypeScript
supabase gen types typescript --local > types/database.types.ts
```

### Next.js Development

```bash
# Dev server
pnpm dev

# Build
pnpm build

# Production
pnpm start

# Lint
pnpm lint
```

---

## 🚨 Avisos Importantes

### Para IAs Implementando

1. **SEMPRE leia a documentação relevante antes de implementar**
2. **NUNCA** assuma estruturas ou padrões - consulte os docs
3. **SEMPRE** use DTOs - nunca exponha entities diretamente
4. **SEMPRE** valide inputs com Zod
5. **SEMPRE** use o workflow declarativo para database
6. **SEMPRE** siga a estrutura de features definida
7. **SEMPRE** use componentes RetroUI existentes
8. **SEMPRE** habilite RLS nas tabelas
9. **NUNCA** use `any` em TypeScript
10. **NUNCA** exponha dados sensíveis (senhas, tokens, CPF completo)

### Dados Sensíveis - Lista de Proibições

**NUNCA exponha em APIs públicas ou DTOs:**

- ❌ Senhas ou hashes de senha
- ❌ Tokens de acesso/refresh
- ❌ API keys ou secret keys
- ❌ CPF completo (sem mascaramento)
- ❌ Dados de cartão de crédito
- ❌ Chaves privadas de criptografia

**Consulte:** [`general-rules/security.md`](general-rules/security.md) para detalhes completos.

---

## 📖 Exemplos Práticos

### Exemplo 1: Criar Feature "Reviews"

```bash
# 1. Ler documentação
cat ai/general-rules/architecture.md
cat ai/general-rules/dto.md

# 2. Se precisar de tabela, criar schema
vim supabase/schemas/tables/reviews.sql

# 3. Gerar migration
supabase stop && supabase db diff -f create_reviews_table

# 4. Criar feature
mkdir -p features/reviews/{types,dtos,validations,services,components,queries}

# 5. Implementar conforme architecture.md
```

### Exemplo 2: Adicionar Campo em Tabela Existente

```bash
# 1. Editar schema declarativo (NUNCA migrations/)
vim supabase/schemas/tables/users.sql
# Adicionar: rating decimal

# 2. Gerar diff
supabase stop
supabase db diff -f add_rating_to_users

# 3. Aplicar
supabase db reset

# 4. Atualizar types TypeScript
supabase gen types typescript --local > types/database.types.ts

# 5. Atualizar DTOs se necessário
vim features/users/dtos/user.dto.ts
```

---

## 🔍 Troubleshooting

### "Migration não está sendo aplicada"

```bash
# 1. Verificar migrations aplicadas
supabase migration list --local

# 2. Resetar database
supabase db reset

# 3. Se persistir, verificar syntax SQL
cat supabase/migrations/[arquivo].sql
```

### "Erro ao gerar diff"

```bash
# 1. Certificar-se que Supabase está parado
supabase stop

# 2. Verificar syntax do schema
cat supabase/schemas/[arquivo].sql

# 3. Tentar novamente
supabase db diff -f nome_migration
```

### "Dados sensíveis expostos"

1. Revisar [`general-rules/dto.md`](general-rules/dto.md)
2. Revisar [`general-rules/security.md`](general-rules/security.md)
3. Criar/atualizar DTOs removendo campos sensíveis
4. Implementar mascaramento quando necessário

---

## 🎓 Recursos Adicionais

### Documentação Externa

- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Zod Docs](https://zod.dev)
- [React Query Docs](https://tanstack.com/query/latest)

### Componentes do Projeto

- RetroUI Components: [`../../components/retroui/`](../../components/retroui/)
- Supabase Components: [`../../components/supabase/`](../../components/supabase/)

---

## 📅 Manutenção deste Documento

**Última atualização**: 2026-01-03

Este README.md é a **fonte única da verdade** para navegação da documentação. Mantenha-o atualizado quando adicionar novos documentos.

### Como Adicionar Nova Documentação

1. Adicione o arquivo em [`general-rules/`](general-rules/), [`libs/`](libs/), ou [`project/`](project/)
2. Update este README.md na seção correspondente
3. Adicione links relevantes nas referências cruzadas
4. Atualize a data de última modificação

---

## 🔗 Links Úteis

- **Documentação Raiz**: [`README.md`](../README.md) (root do projeto)
- **Configuração Kilocode**: [`../.kilocode/rules/index.md`](../.kilocode/rules/index.md)
- **Componentes RetroUI**: [`../components/retroui/`](../components/retroui/)
- **Features**: [`../features/`](../features/)
- **Supabase Schemas**: [`../supabase/schemas/`](../supabase/schemas/)
- **Supabase Migrations**: [`../supabase/migrations/`](../supabase/migrations/)

---

**💡 Dica:** Use Ctrl+F para buscar rapidamente o tópico que precisa neste índice!
