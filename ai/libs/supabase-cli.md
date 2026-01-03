# Supabase CLI

## Introduction

The Supabase CLI is a comprehensive command-line tool for managing Supabase projects, providing a complete development workflow from local database management to production deployment. Built with Go and utilizing the Cobra framework, the CLI enables developers to run Supabase locally, manage database migrations, create and deploy Edge Functions, generate TypeScript/Go types from database schemas, and interact with the Supabase Management API. It serves as the primary interface for developers working with Supabase's open-source Firebase alternative, offering full control over PostgreSQL databases, authentication, storage, and serverless functions.

The CLI architecture follows a modular design with separate packages for configuration management, database operations, function deployment, and API interactions. It supports both local development through Docker containers and remote project management through authenticated API calls. The tool integrates seamlessly with modern development workflows, providing commands for database diffing, migration squashing, type generation in multiple languages, and comprehensive database inspection capabilities. With support for preview branches, secrets management, and storage operations, the CLI provides a unified interface for the entire Supabase platform.

## Core Commands

### Initialize Local Project

Initialize a new Supabase project in the current directory with configuration files and folder structure.

```bash
# Initialize with default settings
supabase init

# Initialize with VS Code settings
supabase init --with-vscode-settings

# Initialize with IntelliJ settings
supabase init --with-intellij-settings

# Force initialization even if config exists
supabase init --force

# Creates:
# - supabase/config.toml
# - supabase/migrations/
# - supabase/functions/
# - supabase/seed.sql
```

### Start Local Development

Start all Supabase services locally using Docker containers including PostgreSQL, PostgREST, Auth, Storage, and Studio.

```bash
# Start all services
supabase start

# Start excluding specific services
supabase start --exclude storage,imgproxy

# Start without health checks
supabase start --ignore-health-check

# Output includes:
# - API URL: http://localhost:54321
# - DB URL: postgresql://postgres:postgres@localhost:54322/postgres
# - Studio URL: http://localhost:54323
# - anon key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
# - service_role key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Check Service Status

Display the status of all running local Supabase services with connection details and API keys.

```bash
# Pretty output (default)
supabase status

# Environment variable format
supabase status -o env
# Output:
# API_URL="http://localhost:54321"
# DB_URL="postgresql://postgres:postgres@localhost:54322/postgres"
# STUDIO_URL="http://localhost:54323"
# ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
# SERVICE_ROLE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

# JSON format
supabase status -o json | jq '.studio_url'
```

### Link to Remote Project

Link your local development environment to a remote Supabase project for pulling schemas and pushing migrations.

```bash
# Login first
supabase login

# Link to project (interactive)
supabase link --project-ref zeoxvqpvpyrxygmmatng

# Link with password
supabase link --project-ref zeoxvqpvpyrxygmmatng --password "your-db-password"

# Link without connection pooler
supabase link --project-ref zeoxvqpvpyrxygmmatng --skip-pooler

# Verifies connection and saves config to .git/config or supabase/.temp
```

## Database Migrations

### Create New Migration

Create a new empty migration file with a timestamp-based filename.

```bash
# Create migration
supabase migration new create_users_table

# Creates: supabase/migrations/20250124120000_create_users_table.sql

# Edit the file:
# CREATE TABLE users (
#   id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
#   email text UNIQUE NOT NULL,
#   created_at timestamptz DEFAULT now()
# );
#
# ALTER TABLE users ENABLE ROW LEVEL SECURITY;
```

### Apply Migrations Locally

Apply pending migrations to local database or revert to a specific version.

```bash
# Apply all pending migrations
supabase migration up

# Apply including seed data
supabase migration up --include-all

# Revert last migration
supabase migration down --last 1

# Revert last 3 migrations
supabase migration down --last 3

# Output shows applied migrations and any errors
```

### List Migrations

Display all local and remote migrations with their application status.

```bash
# List local migrations
supabase migration list --local

# List remote migrations
supabase migration list --linked

# Output format:
#   Local      Remote    Time (UTC)
#   20240101   20240101  2024-01-01 12:00:00
#   20240102   20240102  2024-01-02 15:30:00
#   20240103   Not found 2024-01-03 09:15:00
```

### Squash Migrations

Combine multiple migration files into a single file for cleaner history.

```bash
# Squash all migrations
supabase migration squash

# Squash up to specific version
supabase migration squash --version 20240115120000

# Creates a single migration file with all schema changes
# Original files are moved to supabase/.branches/_current_branch/
```

### Repair Migration History

Fix the migration history table when migrations are out of sync.

```bash
# Mark migrations as applied
supabase migration repair 20240101120000 20240102120000 --status applied

# Mark migrations as reverted
supabase migration repair 20240103120000 --status reverted

# Useful when migration history table doesn't match actual schema state
```

## Database Operations

### Generate Schema Diff

Compare local database state with migration files or remote database to generate new migrations.

```bash
# Diff local database against migrations
supabase db diff --local -f new_changes

# Creates: supabase/migrations/YYYYMMDDHHMMSS_new_changes.sql

# Diff against remote database
supabase db diff --linked -f sync_remote

# Diff specific schemas only
supabase db diff --local --schema public,auth -f schema_changes

# Use migra for diffing
supabase db diff --use-migra --local -f changes

# Use pgAdmin for diffing
supabase db diff --use-pgadmin --linked -f remote_diff
```

### Pull Remote Schema

Pull the current schema from remote database and create a migration file.

```bash
# Pull schema from linked project
supabase db pull

# Pull with custom migration name
supabase db pull baseline_schema

# Creates: supabase/migrations/YYYYMMDDHHMMSS_baseline_schema.sql
# Contains complete schema including tables, functions, policies

# Pull and review before committing
supabase db pull remote_snapshot
cat supabase/migrations/*_remote_snapshot.sql
```

### Push Migrations to Remote

Apply local migrations to the remote database.

```bash
# Dry run to preview changes
supabase db push --dry-run

# Push migrations
supabase db push

# Push including roles
supabase db push --include-roles

# Push including seed data
supabase db push --include-seed

# Output shows each migration being applied and any errors
```

### Reset Local Database

Reset local database to a clean state and reapply all migrations.

```bash
# Reset and apply all migrations
supabase db reset

# Reset to specific version
supabase db reset --version 20240115120000

# Reset without running seed.sql
supabase db reset --no-seed

# Useful for testing migrations from scratch
```

### Dump Database

Export database schema or data from remote database.

```bash
# Dump entire schema
supabase db dump --linked -f backup.sql

# Dump data only
supabase db dump --linked --data-only -f data.sql

# Dump roles only
supabase db dump --linked --role-only -f roles.sql

# Dump using COPY format (faster for large datasets)
supabase db dump --linked --data-only --use-copy -f data_copy.sql

# Dump excluding specific tables
supabase db dump --linked --exclude=auth.* -f schema_no_auth.sql
```

### Lint Database Schema

Check database schema for common issues and typing errors.

```bash
# Lint local database
supabase db lint --local

# Lint with specific error level
supabase db lint --local --level warning

# Fail on specific error levels
supabase db lint --local --fail-on error

# Output shows:
# - Missing indexes on foreign keys
# - Tables without primary keys
# - Security policies issues
# - Type inconsistencies
```

### Test Database

Run pgTAP tests against the database.

```bash
# Run all tests
supabase test db

# Run specific test files
supabase test db supabase/tests/users_test.sql

# Run tests against linked database
supabase test db --linked supabase/tests/*.sql

# Create new test file
supabase test new test_users --template pgtap

# Example test file content:
# BEGIN;
# SELECT plan(3);
#
# SELECT has_table('public', 'users');
# SELECT has_column('public', 'users', 'email');
# SELECT col_is_unique('public', 'users', 'email');
#
# SELECT * FROM finish();
# ROLLBACK;
```

## Database Inspection

### Query Performance Analysis

Analyze query performance and identify slow queries.

```bash
# Show slowest queries
supabase inspect db outliers --linked

# Output:
# | query                          | exec_time | calls | sync_io_time |
# |--------------------------------|-----------|-------|--------------|
# | SELECT * FROM large_table...   | 45.2s     | 1250  | 12.3s        |
# | UPDATE users SET...            | 23.1s     | 890   | 5.2s         |

# Show most frequently called queries
supabase inspect db calls --linked

# Show long-running queries
supabase inspect db long-running-queries --linked
```

### Lock Analysis

Identify blocking queries and lock waits.

```bash
# Show queries with exclusive locks
supabase inspect db locks --linked

# Show blocking queries
supabase inspect db blocking --linked

# Output:
# | blocked_pid | blocking_pid | blocked_query      | blocking_query     |
# |-------------|--------------|--------------------|--------------------|
# | 12345       | 12344        | UPDATE users...    | ALTER TABLE users..|
```

### Database Statistics

View database cache hit rates, sizes, and statistics.

```bash
# Show database statistics
supabase inspect db db-stats --linked

# Output:
# | name     | size    | cache_hit_rate | wal_size |
# |----------|---------|----------------|----------|
# | postgres | 1.2 GB  | 99.2%          | 245 MB   |

# Show table statistics
supabase inspect db table-stats --linked

# Show index statistics and usage
supabase inspect db index-stats --linked

# Show vacuum statistics
supabase inspect db vacuum-stats --linked
```

### Table Bloat Analysis

Identify bloated tables and indexes that need maintenance.

```bash
# Analyze table and index bloat
supabase inspect db bloat --linked

# Output:
# | object_name  | bloat_pct | bloat_size | real_size |
# |--------------|-----------|------------|-----------|
# | users        | 45%       | 230 MB     | 512 MB    |
# | idx_users_id | 32%       | 45 MB      | 140 MB    |

# Tables/indexes with >20% bloat should be VACUUMed or REINDEXed
```

### Replication Monitoring

Monitor replication slots and traffic patterns.

```bash
# Show replication slots
supabase inspect db replication-slots --linked

# Output:
# | slot_name        | plugin  | lag_bytes | active |
# |------------------|---------|-----------|--------|
# | realtime_slot    | wal2json| 0         | true   |

# Show traffic profile
supabase inspect db traffic-profile --linked
```

## Edge Functions

### Create New Function

Create a new Edge Function with boilerplate code.

```bash
# Create function
supabase functions new hello-world

# Creates: supabase/functions/hello-world/index.ts
# Content:
# import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
#
# serve(async (req) => {
#   const { name } = await req.json()
#   const data = {
#     message: `Hello ${name}!`,
#   }
#
#   return new Response(
#     JSON.stringify(data),
#     { headers: { "Content-Type": "application/json" } },
#   )
# })
```

### Serve Functions Locally

Run Edge Functions locally for development and testing.

```bash
# Serve all functions
supabase functions serve

# Serve with environment file
supabase functions serve --env-file .env.local

# Serve with custom import map
supabase functions serve --import-map=supabase/functions/import_map.json

# Serve with debugging
supabase functions serve --inspect --inspect-mode=brk

# Test function locally:
# curl -i --location --request POST 'http://localhost:54321/functions/v1/hello-world' \
#   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' \
#   --header 'Content-Type: application/json' \
#   --data '{"name":"Functions"}'
```

### Deploy Functions

Deploy Edge Functions to remote Supabase project.

```bash
# Deploy all functions
supabase functions deploy

# Deploy specific function
supabase functions deploy hello-world

# Deploy without JWT verification (testing only)
supabase functions deploy hello-world --no-verify-jwt

# Deploy with custom import map
supabase functions deploy hello-world --import-map=functions/import_map.json

# Deploy multiple functions in parallel
supabase functions deploy --jobs=4

# Deploy and remove unused functions
supabase functions deploy --prune

# Output:
# Deploying function hello-world...
# Function URL: https://project-ref.supabase.co/functions/v1/hello-world
```

### List Functions

Display all deployed functions for the project.

```bash
# List functions in linked project
supabase functions list --linked

# Output:
# | NAME         | STATUS | CREATED_AT              | UPDATED_AT              |
# |--------------|--------|-------------------------|-------------------------|
# | hello-world  | ACTIVE | 2024-01-15 10:30:00 UTC | 2024-01-20 14:45:00 UTC |
# | webhook      | ACTIVE | 2024-01-18 09:15:00 UTC | 2024-01-18 09:15:00 UTC |
```

### Download Function

Download function source code from remote project.

```bash
# Download specific function
supabase functions download hello-world

# Downloads to: supabase/functions/hello-world/
# Useful for syncing functions across environments
```

### Delete Function

Remove a function from remote project.

```bash
# Delete function
supabase functions delete hello-world

# Confirmation prompt appears before deletion
# Use --yes flag to skip confirmation
supabase functions delete hello-world --yes
```

## Type Generation

### Generate TypeScript Types

Generate TypeScript types from PostgreSQL schema for type-safe database queries.

```bash
# Generate from local database
supabase gen types --local > types/database.ts

# Generate from linked project
supabase gen types --linked > types/supabase.ts

# Generate specific schemas only
supabase gen types --local --schema=public,auth > types/database.ts

# Generated types example:
# export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]
#
# export interface Database {
#   public: {
#     Tables: {
#       users: {
#         Row: {
#           id: string
#           email: string
#           created_at: string
#         }
#         Insert: {
#           id?: string
#           email: string
#           created_at?: string
#         }
#         Update: {
#           id?: string
#           email?: string
#           created_at?: string
#         }
#       }
#     }
#   }
# }

# Usage in TypeScript:
# import { Database } from './types/database'
# type User = Database['public']['Tables']['users']['Row']
```

### Generate Go Types

Generate Go type definitions from PostgreSQL schema.

```bash
# Generate Go types from local database
supabase gen types --lang=go --local > types/database.go

# Generate from linked project
supabase gen types --lang=go --linked > types/supabase.go

# Generate specific schemas
supabase gen types --lang=go --local --schema=public > types/public.go

# Generated Go types example:
# package types
#
# import "time"
#
# type User struct {
#     ID        string    `json:"id"`
#     Email     string    `json:"email"`
#     CreatedAt time.Time `json:"created_at"`
# }
```

### Generate Swift Types

Generate Swift type definitions from PostgreSQL schema for iOS development.

```bash
# Generate Swift types with public access
supabase gen types --lang=swift --local --swift-access-control=public > Types.swift

# Generate with internal access (default)
supabase gen types --lang=swift --linked --swift-access-control=internal > Database.swift

# Generated Swift types example:
# import Foundation
#
# public struct User: Codable, Hashable, Sendable {
#     public let id: UUID
#     public let email: String
#     public let createdAt: Date
#
#     enum CodingKeys: String, CodingKey {
#         case id
#         case email
#         case createdAt = "created_at"
#     }
# }
```

### Generate JWT Signing Key

Generate JWT signing keys for authentication.

```bash
# Generate ECDSA key (recommended)
supabase gen signing-key --algorithm=ES256

# Output:
# Private key (add to .env):
# JWT_SECRET="-----BEGIN EC PRIVATE KEY-----\nMHcCAQEE..."
#
# Public key (add to JWT verification):
# "-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQY..."

# Generate RSA key
supabase gen signing-key --algorithm=RS256

# Append to existing keys
supabase gen signing-key --algorithm=ES256 --append
```

### Generate Bearer JWT

Generate JWT tokens for testing authenticated endpoints.

```bash
# Generate token with specific role
supabase gen bearer-jwt --role=authenticated --exp=3600

# Output: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Generate with custom claims
supabase gen bearer-jwt --role=service_role --payload='{"user_id":"123","admin":true}'

# Generate with specific expiration
supabase gen bearer-jwt --role=authenticated --valid-for=7200

# Test with curl:
# curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
#   http://localhost:54321/rest/v1/users
```

## Secrets Management

### List Secrets

Display all secrets configured for a project.

```bash
# List secrets
supabase secrets list --project-ref zeoxvqpvpyrxygmmatng

# Output:
# | NAME                | VALUE           |
# |---------------------|-----------------|
# | DATABASE_URL        | postgres://...  |
# | STRIPE_SECRET_KEY   | sk_test_...     |
# | SENDGRID_API_KEY    | SG.xxx...       |

# Secrets are available as environment variables in Edge Functions
```

### Set Secrets

Set one or more secrets for a project.

```bash
# Set single secret
supabase secrets set API_KEY=abc123 --project-ref zeoxvqpvpyrxygmmatng

# Set multiple secrets
supabase secrets set \
  DATABASE_URL=postgres://example.com/db \
  API_KEY=secret123 \
  --project-ref zeoxvqpvpyrxygmmatng

# Set from environment file
supabase secrets set --env-file .env.production --project-ref zeoxvqpvpyrxygmmatng

# .env.production content:
# STRIPE_SECRET_KEY=sk_live_xxx
# SENDGRID_API_KEY=SG.xxx
# OPENAI_API_KEY=sk-xxx

# Secrets are immediately available to functions after deployment
```

### Unset Secrets

Remove secrets from a project.

```bash
# Unset single secret
supabase secrets unset API_KEY --project-ref zeoxvqpvpyrxygmmatng

# Unset multiple secrets
supabase secrets unset DATABASE_URL API_KEY STRIPE_KEY --project-ref zeoxvqpvpyrxygmmatng

# Confirmation prompt appears before deletion
```

## Storage Operations

### List Storage Objects

List objects in storage buckets using the `ss:///` URI scheme.

```bash
# List buckets
supabase storage ls --linked

# Output:
# avatars/
# documents/
# public/

# List bucket contents
supabase storage ls ss:///avatars --linked

# List recursively
supabase storage ls ss:///documents --linked --recursive

# Output:
# 2024/
# 2024/01/
# 2024/01/report.pdf
# 2024/01/data.csv
# 2024/02/
# 2024/02/summary.xlsx
```

### Copy Storage Objects

Copy files to/from storage or between storage locations.

```bash
# Upload single file
supabase storage cp readme.md ss:///documents/readme.md --linked

# Upload directory recursively
supabase storage cp -r ./docs ss:///documents/ --linked

# Download single file
supabase storage cp ss:///documents/report.pdf ./local-report.pdf --linked

# Download directory
supabase storage cp -r ss:///avatars ./local-avatars --linked

# Copy with custom headers
supabase storage cp image.jpg ss:///public/image.jpg \
  --cache-control="max-age=3600" \
  --content-type="image/jpeg" \
  --linked

# Parallel uploads
supabase storage cp -r ./images ss:///photos --jobs=8 --linked
```

### Move Storage Objects

Move or rename objects in storage.

```bash
# Rename file
supabase storage mv ss:///documents/old.pdf ss:///documents/new.pdf --linked

# Move to different bucket
supabase storage mv ss:///temp/file.txt ss:///permanent/file.txt --linked

# Move directory
supabase storage mv -r ss:///temp/batch ss:///archive/batch --linked

# Files are moved atomically within the same bucket
```

### Delete Storage Objects

Remove objects from storage.

```bash
# Delete single file
supabase storage rm ss:///documents/old.pdf --linked

# Delete multiple files
supabase storage rm ss:///temp/file1.txt ss:///temp/file2.txt --linked

# Delete directory recursively
supabase storage rm -r ss:///temp/old-batch --linked

# Delete all files in bucket
supabase storage rm -r ss:///temp --linked
```

### Seed Storage Buckets

Create storage buckets defined in configuration.

```bash
# Configuration in config.toml:
# [storage.buckets.avatars]
# public = true
# file_size_limit = "5MiB"
# allowed_mime_types = ["image/png", "image/jpeg"]
#
# [storage.buckets.documents]
# public = false
# file_size_limit = "50MiB"

# Seed buckets locally
supabase seed buckets --local

# Seed buckets in linked project
supabase seed buckets --linked

# Output:
# Created bucket: avatars (public=true)
# Created bucket: documents (public=false)
```

## Preview Branches

### Create Preview Branch

Create a database preview branch for testing schema changes.

```bash
# Create branch from main
supabase branches create feature-auth

# Create with specific region
supabase branches create feature-auth --region us-east-1

# Create persistent branch
supabase branches create feature-auth --persistent

# Create with data copied from main
supabase branches create feature-auth --with-data

# Create with webhook notification
supabase branches create feature-auth \
  --notify-url=https://example.com/webhook

# Output:
# Branch created: feature-auth
# Connection string: postgresql://user:pass@db.project.supabase.co:5432/postgres?options=-c%20search_path%3D_supabase_branch_feature_auth
```

### List Preview Branches

Display all preview branches for the project.

```bash
# List branches
supabase branches list

# Output:
# | NAME         | STATUS | REGION    | CREATED_AT              | PERSISTENT |
# |--------------|--------|-----------|-------------------------|------------|
# | main         | ACTIVE | us-east-1 | 2024-01-01 12:00:00 UTC | true       |
# | feature-auth | ACTIVE | us-east-1 | 2024-01-15 10:30:00 UTC | false      |
# | staging      | PAUSED | us-west-2 | 2024-01-10 08:15:00 UTC | true       |
```

### Get Branch Details

Retrieve detailed information about a specific branch.

```bash
# Get branch details
supabase branches get feature-auth

# Output:
# Name: feature-auth
# Status: ACTIVE
# Region: us-east-1
# Created: 2024-01-15 10:30:00 UTC
# Persistent: false
# Connection: postgresql://...
# PostgREST URL: https://...
# API Keys: {...}
```

### Update Branch

Modify branch configuration or settings.

```bash
# Update branch
supabase branches update feature-auth

# Interactive prompts for changes:
# - Update region
# - Change size
# - Modify persistence
```

### Pause and Unpause Branches

Temporarily pause and resume preview branches to save resources.

```bash
# Pause branch
supabase branches pause feature-auth

# Output:
# Branch paused: feature-auth
# Resources deallocated, data preserved

# Unpause branch
supabase branches unpause feature-auth

# Output:
# Branch active: feature-auth
# Resources allocated, ready for connections
```

### Delete Preview Branch

Remove a preview branch permanently.

```bash
# Delete branch
supabase branches delete feature-auth

# Confirmation prompt appears
# Use --yes to skip confirmation
supabase branches delete feature-auth --yes

# Output:
# Branch deleted: feature-auth
# All data and configuration removed
```

### Disable Preview Branches

Disable preview branches feature for the project.

```bash
# Disable branches
supabase branches disable

# Confirmation prompt appears
# All existing branches will be deleted
# Main branch is not affected
```

## Project Management

### Create Project

Create a new Supabase project.

```bash
# Interactive project creation
supabase projects create my-app --interactive

# Create with specific parameters
supabase projects create my-app \
  --org-id cool-green-pqdr0qc \
  --db-password "SecurePass123!" \
  --region us-east-1 \
  --size tiny

# Available regions:
# - us-east-1, us-west-1, us-west-2
# - eu-west-1, eu-west-2, eu-central-1
# - ap-southeast-1, ap-northeast-1, ap-southeast-2

# Available sizes:
# - tiny (free tier)
# - small, medium, large, xlarge (paid tiers)

# Output:
# Project created: my-app
# Project ID: zeoxvqpvpyrxygmmatng
# Database URL: postgresql://...
# API URL: https://zeoxvqpvpyrxygmmatng.supabase.co
```

### List Projects

Display all accessible projects in your account.

```bash
# List all projects
supabase projects list

# Output:
# | NAME        | PROJECT_ID            | REGION    | CREATED_AT              |
# |-------------|-----------------------|-----------|-------------------------|
# | my-app      | zeoxvqpvpyrxygmmatng  | us-east-1 | 2024-01-15 10:30:00 UTC |
# | staging     | abcdefghijklmnopqrst  | eu-west-1 | 2024-01-10 08:15:00 UTC |
# | production  | uvwxyz1234567890abcd  | us-west-2 | 2024-01-01 12:00:00 UTC |
```

### Get API Keys

Retrieve API keys for a project.

```bash
# Get API keys
supabase projects api-keys --project-ref zeoxvqpvpyrxygmmatng

# Output:
# | NAME          | VALUE                                          |
# |---------------|------------------------------------------------|
# | anon          | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...        |
# | service_role  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...        |

# Use anon key for client-side requests
# Use service_role key for server-side requests (never expose in client)
```

### Delete Project

Permanently delete a project and all its data.

```bash
# Delete project
supabase projects delete zeoxvqpvpyrxygmmatng

# Confirmation prompt requires typing project name
# This action cannot be undone

# Output:
# Project deleted: zeoxvqpvpyrxygmmatng
# All data, databases, functions, and storage removed
```

## Authentication

### Login

Authenticate with Supabase using an access token.

```bash
# Login interactively
supabase login

# Opens browser for authentication
# Token is saved to ~/.supabase/access-token

# Login with token directly
echo "sbp_xxx..." | supabase login

# Verify authentication
supabase projects list
```

### Logout

Remove authentication credentials.

```bash
# Logout
supabase logout

# Removes ~/.supabase/access-token
# Must login again to access remote projects
```

## Programmatic Usage

### Deploy Functions via Go API

Use the Go client library to deploy functions programmatically.

```go
package main

import (
    "context"
    "os"
    "github.com/supabase/cli/pkg/api"
    "github.com/supabase/cli/pkg/config"
    "github.com/supabase/cli/pkg/function"
)

func main() {
    ctx := context.Background()

    // Initialize API client
    projectID := os.Getenv("SUPABASE_PROJECT_ID")
    accessToken := os.Getenv("SUPABASE_ACCESS_TOKEN")

    client, err := api.NewClient(accessToken)
    if err != nil {
        panic(err)
    }

    // Create function client
    functionClient := function.NewEdgeRuntimeAPI(projectID, client)

    // Define function configuration
    functionConfig := config.FunctionConfig{
        "hello-world": {
            Entrypoint: "supabase/functions/hello-world/index.ts",
            ImportMap:  "supabase/functions/import_map.json",
            VerifyJWT:  true,
        },
        "webhook": {
            Entrypoint: "supabase/functions/webhook/index.ts",
            VerifyJWT:  false,
        },
    }

    // Deploy functions
    fsys := os.DirFS(".")
    err = functionClient.Deploy(ctx, functionConfig, fsys)
    if err != nil {
        panic(err)
    }

    fmt.Println("Functions deployed successfully")
}
```

### Apply Migrations via Go API

Programmatically apply database migrations using the Go library.

```go
package main

import (
    "context"
    "os"
    "github.com/supabase/cli/pkg/migration"
    "github.com/supabase/cli/pkg/pgxv5"
)

func main() {
    ctx := context.Background()

    // Connect to database
    dbURL := os.Getenv("SUPABASE_DB_URL")
    conn, err := pgxv5.Connect(ctx, dbURL)
    if err != nil {
        panic(err)
    }
    defer conn.Close(ctx)

    // List local migrations
    fsys := os.DirFS(".")
    migrations, err := migration.ListLocalMigrations("supabase/migrations", fsys)
    if err != nil {
        panic(err)
    }

    fmt.Printf("Found %d migrations\n", len(migrations))

    // Get remote migration history
    remoteMigrations, err := migration.ListRemoteMigrations(ctx, conn)
    if err != nil {
        panic(err)
    }

    // Find pending migrations
    pending, err := migration.FindPendingMigrations(migrations, remoteMigrations)
    if err != nil {
        panic(err)
    }

    if len(pending) == 0 {
        fmt.Println("No pending migrations")
        return
    }

    // Apply pending migrations
    fmt.Printf("Applying %d pending migrations...\n", len(pending))
    err = migration.ApplyMigrations(ctx, pending, conn, fsys)
    if err != nil {
        panic(err)
    }

    fmt.Println("Migrations applied successfully")
}
```

### Seed Storage Buckets via Go API

Programmatically create and configure storage buckets.

```go
package main

import (
    "context"
    "os"
    "github.com/supabase/cli/pkg/api"
    "github.com/supabase/cli/pkg/config"
    "github.com/supabase/cli/pkg/storage"
)

func main() {
    ctx := context.Background()

    // Load configuration
    cfg, err := config.Load("")
    if err != nil {
        panic(err)
    }

    // Initialize API client
    projectID := os.Getenv("SUPABASE_PROJECT_ID")
    serviceRoleKey := os.Getenv("SUPABASE_SERVICE_ROLE_KEY")

    apiURL := fmt.Sprintf("https://%s.supabase.co", projectID)
    storageClient := storage.NewClient(apiURL, serviceRoleKey)

    // Create buckets from configuration
    for bucketName, bucketConfig := range cfg.Storage.Buckets {
        bucket := storage.BucketConfig{
            Name:            bucketName,
            Public:          bucketConfig.Public,
            FileSizeLimit:   bucketConfig.FileSizeLimit,
            AllowedMimeTypes: bucketConfig.AllowedMimeTypes,
        }

        err := storageClient.CreateBucket(ctx, bucket)
        if err != nil {
            fmt.Printf("Error creating bucket %s: %v\n", bucketName, err)
            continue
        }

        fmt.Printf("Created bucket: %s\n", bucketName)
    }

    fmt.Println("Storage buckets seeded successfully")
}
```

## Configuration File

### Complete config.toml Structure

The config.toml file defines all settings for local and remote Supabase projects.

```toml
# Project identifier
project_id = "my-project-123"

# API Configuration
[api]
enabled = true
port = 54321
# Public schemas exposed via PostgREST
schemas = ["public", "graphql_public"]
# Extra search path for API requests
extra_search_path = ["public", "extensions"]
# Maximum rows returned by API
max_rows = 1000

# Database Configuration
[db]
port = 54322
major_version = 17

# Connection pooler
[db.pooler]
enabled = false
# Modes: transaction, session, statement
pool_mode = "transaction"
default_pool_size = 20
max_client_conn = 100

# Migration settings
[db.migrations]
enabled = true
# Additional schema paths to include
schema_paths = []

# Seed data
[db.seed]
enabled = true
sql_paths = ["./seed.sql"]

# Realtime Configuration
[realtime]
enabled = true
ip_version = "IPv4"

# Studio Configuration
[studio]
enabled = true
port = 54323
api_url = "http://localhost"
openai_api_key = "env(OPENAI_API_KEY)"

# Storage Configuration
[storage]
enabled = true
file_size_limit = "50MiB"
image_transformation_enabled = true

# Storage buckets
[storage.buckets.avatars]
public = true
file_size_limit = "5MiB"
allowed_mime_types = ["image/png", "image/jpeg", "image/gif", "image/webp"]

[storage.buckets.documents]
public = false
file_size_limit = "100MiB"
allowed_mime_types = ["application/pdf", "text/plain", "application/msword"]

# Auth Configuration
[auth]
enabled = true
site_url = "http://localhost:3000"
additional_redirect_urls = ["https://localhost:3000"]
jwt_expiry = 3600
enable_refresh_token_rotation = true
refresh_token_reuse_interval = 10
enable_signup = true
enable_anonymous_sign_ins = false

# External OAuth providers
[auth.external.github]
enabled = true
client_id = "env(GITHUB_CLIENT_ID)"
secret = "env(GITHUB_SECRET)"
redirect_uri = "http://localhost:54321/auth/v1/callback"

[auth.external.google]
enabled = true
client_id = "env(GOOGLE_CLIENT_ID)"
secret = "env(GOOGLE_SECRET)"

# Email auth
[auth.email]
enable_signup = true
double_confirm_changes = true
enable_confirmations = false
secure_password_change = false

# SMS auth
[auth.sms]
enable_signup = true
enable_confirmations = false
template = "Your code is {{ .Code }}"
max_frequency = "5s"

[auth.sms.twilio]
enabled = false
account_sid = "env(TWILIO_ACCOUNT_SID)"
auth_token = "env(TWILIO_AUTH_TOKEN)"
message_service_sid = "env(TWILIO_MESSAGE_SERVICE_SID)"

# Edge Functions Configuration
[edge_runtime]
enabled = true
# Policies: per_worker, oneshot, remote
policy = "per_worker"
inspector_port = 8083

[functions.hello-world]
verify_jwt = true
import_map = "./supabase/functions/import_map.json"

[functions.webhook]
verify_jwt = false

# Analytics Configuration
[analytics]
enabled = false
backend = "postgres"

# Experimental Features
[experimental]
orioledb_version = ""
s3_host = "env(S3_HOST)"
s3_region = "env(S3_REGION)"
s3_access_key = "env(S3_ACCESS_KEY)"
s3_secret_key = "env(S3_SECRET_KEY)"
```

## Summary

The Supabase CLI provides a comprehensive toolkit for developing and managing Supabase projects from the command line. Its primary use cases include local development workflows where developers can spin up a complete Supabase stack using Docker, create and test database migrations iteratively, develop and debug Edge Functions locally, and generate type definitions that ensure type safety across the application stack. The CLI integrates seamlessly with version control systems by treating infrastructure as code, enabling teams to collaborate on database schema changes through migration files, function code, and configuration files all tracked in git. For production deployments, the CLI facilitates safe database migrations with dry-run capabilities, manages secrets securely without exposing them in code, deploys functions with parallel processing for speed, and provides comprehensive database inspection tools for performance monitoring and optimization.

The CLI's integration patterns support multiple workflows from individual developers to large teams. It works alongside client libraries like `supabase-js` for application code, integrates with CI/CD pipelines through its programmatic Go API, connects to local and remote databases interchangeably, and provides both imperative commands for manual operations and declarative configuration for reproducible environments. The tool's architecture emphasizes developer experience with fast feedback loops through local development, safety through dry-run modes and migration validation, observability through detailed database inspection commands, and flexibility through support for multiple programming languages (TypeScript, Go, Swift) and deployment strategies (Docker, direct, API-based). Whether bootstrapping a new project, maintaining existing production systems, or debugging performance issues, the Supabase CLI serves as the central hub for all Supabase development activities.
