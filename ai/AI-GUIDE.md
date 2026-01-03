# 🤖 Guia Completo para IA - EasyDrive

> Este documento contém TODAS as informações necessárias para uma IA construir features do EasyDrive

---

## 📚 ÍNDICE RÁPIDO

1. [Projeto Overview](#projeto-overview)
2. [Arquitetura](#arquitetura)
3. [Convenções](#convenções)
4. [Como Criar Feature](#como-criar-feature)
5. [Templates de Código](#templates)
6. [Checklists](#checklists)

---

## 🎯 PROJETO OVERVIEW

**Resumo**: EasyDrive conecta alunos de direção com instrutores. Frontend e Backend no mesmo projeto Next.js.

**Stack**:

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS v4
- React Query
- Prisma ORM
- PostgreSQL

**Funcionalidades Principais**:

1. Buscar instrutores (filtros por cidade, tipo veículo)
2. Agendar aulas
3. Avaliar instrutores
4. Gerenciar perfis (aluno/instrutor)

---

## 🏗️ ARQUITETURA

### Estrutura de Pastas

```
easy-drive/
├── app/                                    # Next.js Router
│   ├── (marketing)/                       # Landing page, etc
│   │   └── page.tsx
│   ├── (auth)/                            # Login, registro
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── (app)/                             # App autenticada
│   │   ├── dashboard/page.tsx
│   │   ├── instructors/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   └── lessons/
│   │       ├── page.tsx
│   │       └── [id]/page.tsx
│   └── api/                               # Backend API
│       ├── auth/
│       │   └── [...nextauth]/route.ts
│       ├── instructors/
│       │   ├── route.ts
│       │   └── [id]/route.ts
│       └── lessons/
│           ├── route.ts
│           └── [id]/route.ts
│
├── features/                              # Features autocontidas
│   ├── instructors/
│   │   ├── components/
│   │   │   ├── client/                   # Client Components ('use client')
│   │   │   ├── server/                   # Server Components
│   │   │   └── shared/                   # Sem interatividade
│   │   ├── queries/
│   │   │   ├── queries.ts                # React Query queries
│   │   │   └── mutations.ts              # React Query mutations
│   │   ├── hooks/                        # Hooks gerais (não RQ)
│   │   ├── forms/                        # Forms com RHF
│   │   ├── api/
│   │   │   └── instructor.api.ts         # Funções de API
│   │   ├── dtos/
│   │   │   └── instructor.dto.ts         # DTOs
│   │   ├── types/
│   │   │   └── instructor.types.ts
│   │   ├── validations/
│   │   │   └── instructor.schema.ts      # Zod schemas
│   │   ├── services/
│   │   │   └── instructor.service.ts     # Lógica de negócio
│   │   ├── constants/
│   │   │   └── instructor.constants.ts
│   │   └── index.ts                      # Barrel export
│   │
│   ├── lessons/                          # Mesma estrutura
│   ├── auth/                             # Mesma estrutura
│   └── reviews/                          # Mesma estrutura
│
├── components/
│   ├── retroui/                          # Design System (30+ components)
│   │   ├── Button.tsx                    # PascalCase!
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   └── shared/
│       ├── LoadingSpinner.tsx
│       └── ErrorBoundary.tsx
│
├── shared/                               # Código compartilhado
│   ├── api/
│   │   ├── client.ts                    # HTTP client (axios)
│   │   ├── interceptors.ts
│   │   └── endpoints.ts
│   ├── dtos/
│   │   ├── base.dto.ts
│   │   └── paginated.dto.ts
│   ├── errors/
│   │   ├── api-error.ts
│   │   └── error-handler.ts
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   ├── rate-limit.middleware.ts
│   │   └── with-auth.ts
│   ├── validations/
│   │   └── common.schema.ts            # Schemas reutilizáveis
│   ├── utils/
│   │   ├── cn.ts
│   │   ├── date.ts
│   │   └── format.ts
│   └── types/
│       ├── api.types.ts
│       └── common.types.ts
│
├── lib/                                  # Configs de bibliotecas
│   ├── auth/
│   │   └── config.ts
│   ├── db/
│   │   ├── client.ts
│   │   └── schema.prisma
│   └── react-query/
│       └── config.ts
│
└── config/
    ├── site.ts
    └── env.ts
```

---

## 📝 CONVENÇÕES

### Nomenclatura de Arquivos

| Tipo               | Padrão            | Exemplo                        |
| ------------------ | ----------------- | ------------------------------ |
| Página             | `page.tsx`        | `app/instructors/page.tsx`     |
| Layout             | `layout.tsx`      | `app/(app)/layout.tsx`         |
| API Route          | `route.ts`        | `app/api/instructors/route.ts` |
| Componente RetroUI | `PascalCase.tsx`  | `Button.tsx`                   |
| Componente Feature | `PascalCase.tsx`  | `InstructorCard.tsx`           |
| Hook RQ Query      | `use*Query.ts`    | `useInstructorsQuery`          |
| Hook RQ Mutation   | `use*Mutation.ts` | `useCreateInstructorMutation`  |
| Hook Geral         | `use-*.ts`        | `use-instructor-filters.ts`    |
| Service            | `*.service.ts`    | `instructor.service.ts`        |
| Type               | `*.types.ts`      | `instructor.types.ts`          |
| Schema             | `*.schema.ts`     | `instructor.schema.ts`         |
| DTO                | `*.dto.ts`        | `instructor.dto.ts`            |
| API                | `*.api.ts`        | `instructor.api.ts`            |

### Imports

```typescript
// 1. Libs externas
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

// 2. Shared
import { cn } from "@shared/utils/cn";
import { httpClient } from "@shared/api/client";

// 3. Features (outras)
import { useAuth } from "@/features/auth";

// 4. Feature atual
import { InstructorCard } from "./components/client/InstructorCard";
import type { Instructor } from "./types/instructor.types";

// 5. Styles (se houver)
import "./styles.css";
```

### Path Aliases (tsconfig.json)

```json
{
  "paths": {
    "@/*": ["./*"],
    "@features/*": ["./features/*"],
    "@instructors/*": ["./features/instructors/*"],
    "@lessons/*": ["./features/lessons/*"],
    "@shared/*": ["./shared/*"],
    "@lib/*": ["./lib/*"],
    "@components/*": ["./components/*"]
  }
}
```

---

## 🎯 COMO CRIAR NOVA FEATURE

### Passo 1: Criar Estrutura

```bash
features/sua-feature/
├── components/
│   ├── client/
│   ├── server/
│   └── shared/
├── queries/
│   ├── queries.ts
│   └── mutations.ts
├── hooks/
├── forms/
├── api/
│   └── sua-feature.api.ts
├── dtos/
│   └── sua-feature.dto.ts
├── types/
│   └── sua-feature.types.ts
├── validations/
│   └── sua-feature.schema.ts
├── services/
│   └── sua-feature.service.ts
├── constants/
│   └── sua-feature.constants.ts
└── index.ts  # Barrel export
```

### Passo 2: Criar Types

```typescript
// features/sua-feature/types/sua-feature.types.ts

export type SuaEntity = {
  id: string;
  name: string;
  // ... outros campos
  createdAt: Date;
  updatedAt: Date;
};

export type CreateSuaEntityInput = Omit<
  SuaEntity,
  "id" | "createdAt" | "updatedAt"
>;

export type UpdateSuaEntityInput = Partial<CreateSuaEntityInput>;
```

### Passo 3: Criar Validation Schema

```typescript
// features/sua-feature/validations/sua-feature.schema.ts

import { z } from "zod";
import { commonSchemas } from "@shared/validations/common.schema";

export const suaEntitySchema = z.object({
  name: z.string().min(3).max(100),
  email: commonSchemas.email,
  // ... outros campos
});

export type SuaEntitySchema = z.infer<typeof suaEntitySchema>;
```

### Passo 4: Criar DTO

```typescript
// features/sua-feature/dtos/sua-feature.dto.ts

import { BaseDTO } from "@shared/dtos/base.dto";

// Entity do banco - NUNCA expor
type SuaEntityEntity = {
  id: string;
  name: string;
  email: string;
  passwordHash: string; // SENSÍVEL
  // ...
};

// DTO público
export class SuaEntityPublicDTO extends BaseDTO {
  name: string;
  email?: string; // Só se for público

  static fromEntity(entity: SuaEntityEntity): SuaEntityPublicDTO {
    return new SuaEntityPublicDTO({
      id: entity.id,
      name: entity.name,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      // SEM passwordHash!
    });
  }

  static fromEntities(entities: SuaEntityEntity[]): SuaEntityPublicDTO[] {
    return entities.map(this.fromEntity);
  }
}
```

### Passo 5: Criar Service

```typescript
// features/sua-feature/services/sua-feature.service.ts

import { db } from "@/lib/db/client";
import type {
  SuaEntity,
  CreateSuaEntityInput,
} from "../types/sua-feature.types";

export const suaFeatureService = {
  async findAll(): Promise<SuaEntity[]> {
    return db.suaEntity.findMany();
  },

  async findById(id: string): Promise<SuaEntity | null> {
    return db.suaEntity.findUnique({ where: { id } });
  },

  async create(data: CreateSuaEntityInput): Promise<SuaEntity> {
    return db.suaEntity.create({ data });
  },

  async update(id: string, data: UpdateSuaEntityInput): Promise<SuaEntity> {
    return db.suaEntity.update({ where: { id }, data });
  },

  async delete(id: string): Promise<void> {
    await db.suaEntity.delete({ where: { id } });
  },
};
```

### Passo 6: Criar API Route

```typescript
// app/api/sua-feature/route.ts

import { NextRequest, NextResponse } from "next/server";
import { suaFeatureService } from "@/features/sua-feature/services/sua-feature.service";
import { SuaEntityPublicDTO } from "@/features/sua-feature/dtos/sua-feature.dto";
import { suaEntitySchema } from "@/features/sua-feature/validations/sua-feature.schema";
import { handleApiError } from "@shared/errors/error-handler";
import { withAuth, authMiddleware } from "@shared/middleware/with-auth";

// GET - Listar todos
export async function GET(request: NextRequest) {
  try {
    const entities = await suaFeatureService.findAll();
    const dtos = SuaEntityPublicDTO.fromEntities(entities);

    return NextResponse.json(dtos);
  } catch (error) {
    return handleApiError(error);
  }
}

// POST - Criar novo (protegido)
export const POST = withAuth(authMiddleware)(async (request) => {
  try {
    const body = await request.json();
    const validatedData = suaEntitySchema.parse(body);

    const entity = await suaFeatureService.create(validatedData);
    const dto = SuaEntityPublicDTO.fromEntity(entity);

    return NextResponse.json(dto, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
});
```

### Passo 7: Criar API Client

```typescript
// features/sua-feature/api/sua-feature.api.ts

import { httpClient } from "@shared/api/client";
import type {
  SuaEntity,
  CreateSuaEntityInput,
} from "../types/sua-feature.types";

export const suaFeatureApi = {
  getAll: () => httpClient.get<SuaEntity[]>("/api/sua-feature"),

  getById: (id: string) => httpClient.get<SuaEntity>(`/api/sua-feature/${id}`),

  create: (data: CreateSuaEntityInput) =>
    httpClient.post<SuaEntity>("/api/sua-feature", data),

  update: (id: string, data: Partial<CreateSuaEntityInput>) =>
    httpClient.put<SuaEntity>(`/api/sua-feature/${id}`, data),

  delete: (id: string) => httpClient.delete(`/api/sua-feature/${id}`),
};
```

### Passo 8: Criar React Query Hooks

```typescript
// features/sua-feature/queries/queries.ts

import { useQuery } from "@tanstack/react-query";
import { suaFeatureApi } from "../api/sua-feature.api";

export function useSuaFeatureQuery() {
  return useQuery({
    queryKey: ["sua-feature"],
    queryFn: suaFeatureApi.getAll,
    staleTime: 5 * 60 * 1000,
  });
}

export function useSuaEntityQuery(id: string) {
  return useQuery({
    queryKey: ["sua-feature", id],
    queryFn: () => suaFeatureApi.getById(id),
    enabled: !!id,
  });
}
```

```typescript
// features/sua-feature/queries/mutations.ts

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { suaFeatureApi } from "../api/sua-feature.api";

export function useCreateSuaEntityMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: suaFeatureApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sua-feature"] });
    },
  });
}

export function useUpdateSuaEntityMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      suaFeatureApi.update(id, data),

    // Optimistic update
    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries({ queryKey: ["sua-feature", id] });

      const previous = queryClient.getQueryData(["sua-feature", id]);

      queryClient.setQueryData(["sua-feature", id], (old: any) => ({
        ...old,
        ...data,
      }));

      return { previous };
    },

    onError: (_, variables, context) => {
      if (context?.previous) {
        queryClient.setQueryData(
          ["sua-feature", variables.id],
          context.previous
        );
      }
    },

    onSettled: (_, __, variables) => {
      queryClient.invalidateQueries({ queryKey: ["sua-feature"] });
      queryClient.invalidateQueries({
        queryKey: ["sua-feature", variables.id],
      });
    },
  });
}
```

### Passo 9: Criar Componentes

```typescript
// features/sua-feature/components/client/SuaFeatureCard.tsx
"use client";

import { Card } from "@components/retroui/Card";
import { Button } from "@components/retroui/Button";
import type { SuaEntity } from "@/features/sua-feature/types/sua-feature.types";

type Props = {
  entity: SuaEntity;
  onSelect?: (id: string) => void;
};

export function SuaFeatureCard({ entity, onSelect }: Props) {
  return (
    <Card>
      <Card.Header>
        <Card.Title>{entity.name}</Card.Title>
      </Card.Header>
      <Card.Content>{/* conteúdo */}</Card.Content>
      {onSelect && (
        <Card.Footer>
          <Button onClick={() => onSelect(entity.id)}>Ver Detalhes</Button>
        </Card.Footer>
      )}
    </Card>
  );
}
```

```typescript
// features/sua-feature/components/server/SuaFeatureListServer.tsx

import { suaFeatureService } from "@/features/sua-feature/services/sua-feature.service";
import { SuaFeatureCard } from "../client/SuaFeatureCard";

export async function SuaFeatureListServer() {
  // Busca dados no servidor
  const entities = await suaFeatureService.findAll();

  return (
    <div className="grid gap-4">
      {entities.map((entity) => (
        <SuaFeatureCard key={entity.id} entity={entity} />
      ))}
    </div>
  );
}
```

### Passo 10: Criar Barrel Export

```typescript
// features/sua-feature/index.ts

// Components
export { SuaFeatureCard } from "./components/client/SuaFeatureCard";
export { SuaFeatureListServer } from "./components/server/SuaFeatureListServer";

// Queries
export { useSuaFeatureQuery, useSuaEntityQuery } from "./queries/queries";

// Mutations
export {
  useCreateSuaEntityMutation,
  useUpdateSuaEntityMutation,
} from "./queries/mutations";

// Types
export type {
  SuaEntity,
  CreateSuaEntityInput,
} from "./types/sua-feature.types";

// Constants
export { SUA_FEATURE_CONSTANTS } from "./constants/sua-feature.constants";
```

### Passo 11: Criar Página

```typescript
// app/(app)/sua-feature/page.tsx

import { Suspense } from "react";
import { SuaFeatureListServer } from "@/features/sua-feature";
import { LoadingSpinner } from "@components/shared/LoadingSpinner";

export default function SuaFeaturePage() {
  return (
    <div className="container mx-auto py-8">
      <h1>Sua Feature</h1>

      <Suspense fallback={<LoadingSpinner />}>
        <SuaFeatureListServer />
      </Suspense>
    </div>
  );
}
```

---

## ✅ CHECKLISTS

### Checklist: Nova Feature

- [ ] Criar estrutura de pastas
- [ ] Criar types
- [ ] Criar validation schema
- [ ] Criar DTOs (Public/Private)
- [ ] Criar service com CRUD básico
- [ ] Criar API routes
- [ ] Adicionar auth middleware nas rotas protegidas
- [ ] Criar API client
- [ ] Criar React Query hooks (queries e mutations)
- [ ] Criar componentes (Server e Client)
- [ ] Criar barrel export
- [ ] Criar páginas
- [ ] Testar fluxo completo

### Checklist: API Route Segura

- [ ] Validar input com Zod
- [ ] Usar DTOs (não expor entities)
- [ ] Aplicar auth middleware
- [ ] Verificar role/ownership
- [ ] Rate limiting (se aplicável)
- [ ] Error handling com handleApiError
- [ ] Retornar status codes apropriados
- [ ] Usar transactions se necessário

### Checklist: Componente

- [ ] Decidir: Server ou Client?
- [ ] Adicionar 'use client' se Cliente
- [ ] Usar tipos TypeScript
- [ ] Imports organizados
- [ ] Props interface clara
- [ ] Componentes RetroUI quando possível
- [ ] Acessibilidade (aria-labels)
- [ ] Responsivo

---

## ⚠️ REGRAS CRÍTICAS

### NUNCA FAÇA:

❌ Expor entities do banco diretamente nas APIs
❌ Deixar rotas sensíveis sem autenticação
❌ Aceitar input sem validação Zod
❌ Usar `any` no TypeScript
❌ Fazer múltiplas operações no banco sem transaction
❌ Expor dados sensíveis (senha, CPF completo, tokens)
❌ Ignorar erros silenciosamente

### SEMPRE FAÇA:

✅ Usar DTOs nas APIs
✅ Validar TODA entrada com Zod
✅ Autenticar rotas protegidas
✅ Usar transactions para operações complexas
✅ Type safety end-to-end
✅ Optimistic updates onde adequado
✅ Error handling apropriado
✅ Separar Server e Client components

---

## 🚀 PROMPT MODELO PARA IA

```
Estou trabalhando no projeto EasyDrive. Já li a documentação em ai/AI-GUIDE.md.

Preciso criar [DESCREVA O QUE QUER].

Por favor:
1. Use a estrutura de features descrita no guia
2. Siga todas as convenções de nomenclatura
3. Use os templates fornecidos
4. Implemente validação com Zod
5. Use DTOs (não exponha entities)
6. Adicione autenticação quando apropriado
7. Separe Server e Client components
8. Gere código TypeScript completo e funcional

Estrutura esperada:
- Types
- Validation Schema
- DTO
- Service
- API Route
- API Client
- React Query Hooks
- Componentes
- Página

Gere o código completo para isso.
```

---

## 📞 ARQUIVOS DE REFERÊNCIA

Para mais detalhes, consulte:

- [`plans/arquitetura-final.md`](../plans/arquitetura-final.md) - Arquitetura completa
- [`plans/implementacoes-praticas.md`](../plans/implementacoes-praticas.md) - Exemplos detalhados
- [`plans/avaliacao-especializada.md`](../plans/avaliacao-especializada.md) - Best practices

---

**Este guia é a fonte única de verdade para construir features no EasyDrive.**

**Última atualização**: 2026-01-03
