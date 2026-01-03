### Installation and Setup

Source: https://supabase.com/docs/reference/csharp/select

Install the Supabase C# package from NuGet and initialize a new client with your project credentials and configuration options.

```APIDOC
## Installation and Client Initialization

### Description
Install the Supabase C# package and initialize a client instance for interacting with your Supabase project.

### Installation via NuGet
```

dotnet add package supabase

````

### Initialization

#### Method
Client Constructor

#### Parameters
- **url** (string) - Required - Your Supabase project URL from the admin panel
- **key** (string) - Required - Your Supabase project public API key
- **options** (SupabaseOptions) - Optional - Configuration options for the client

#### Request Example
```csharp
var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");

var options = new Supabase.SupabaseOptions
{
    AutoConnectRealtime = true
};

var supabase = new Supabase.Client(url, key, options);
await supabase.InitializeAsync();
````

### Notes

- Models must derive from `BaseModel` to interact with the API
- Use `Table`, `PrimaryKey`, and `Column` attributes to specify custom names for classes and properties

````

--------------------------------

### Installation and Setup

Source: https://supabase.com/docs/reference/csharp/gte

Install the Supabase C# package from NuGet and initialize a new client with your project URL and public key from the admin panel.

```APIDOC
## Installation

### Method
NuGet Package Installation

### Installation Command
````

dotnet add package supabase

````

## Client Initialization

### Description
Initialize a new Supabase client with your project credentials and options.

### Method
Client Constructor

### Parameters
- **url** (string) - Required - Your Supabase project URL from the admin panel
- **key** (string) - Required - Your Supabase public key from the admin panel
- **options** (SupabaseOptions) - Optional - Configuration options for the client

### Request Example
```csharp
var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");

var options = new Supabase.SupabaseOptions
{
    AutoConnectRealtime = true
};

var supabase = new Supabase.Client(url, key, options);
await supabase.InitializeAsync();
````

### Notes

- Supabase is heavily dependent on Models deriving from `BaseModel`
- Use `Table`, `PrimaryKey`, and `Column` attributes to map C# properties to database columns
- All models must be specified to interact with the API

````

--------------------------------

### Install Postgres Client and Setup Tmux on Ubuntu VM

Source: https://supabase.com/docs/guides/resources/migrating-to-supabase/postgres

This script prepares an Ubuntu VM for database migration by installing necessary Postgres client tools, `tmux` for session persistence, and other utilities like `htop`, `iotop`, and `moreutils`. It configures the Postgres APT repository and then starts or attaches to a `tmux` session.

```bash
# Install Postgres client and tools
sudo apt update
sudo apt install software-properties-common
sudo sh -c 'echo "deb http://apt.Postgres.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.Postgres.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt update
sudo apt install Postgres-client-17 tmux htop iotop moreutils

# Start or attach to tmux session
tmux a -t migration || tmux new -s migration
````

---

### Bootstrap Hono app with Supabase CLI

Source: https://supabase.com/docs/guides/getting-started/quickstarts/hono

Uses the Supabase CLI to bootstrap a Hono example application from the Supabase Samples. This command initializes a new Hono project with pre-configured Supabase integration.

```bash
npx supabase@latest bootstrap hono
```

---

### Installation & Setup

Source: https://supabase.com/docs/reference/python/delete

Install the supabase-py package via PyPI and initialize a Supabase client instance. This is the first step required to use the Supabase Python library.

```APIDOC
## Installation & Client Initialization

### Description
Install supabase-py and create a Supabase client instance to interact with your Supabase project.

### Installation

#### Method
PyPI Package Manager

#### Command
```

pip install supabase

````

#### Requirements
- Python > 3.8

### create_client()

#### Description
Initialize a new Supabase client using the `create_client()` method. The Supabase client serves as the main entrypoint to all Supabase functionality.

#### Parameters
- **supabase_url** (string) - Required - The unique Supabase URL from your project dashboard
- **supabase_key** (string) - Required - The unique Supabase Key from your project dashboard
- **options** (ClientOptions) - Optional - Configuration options to customize Auth behaviors

#### Request Example
```python
import os
from supabase import create_client, Client

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)
````

#### Response

- **Client** (Client object) - Initialized Supabase client instance ready for use

````

--------------------------------

### Installation and Setup

Source: https://supabase.com/docs/reference/csharp/storage-from-remove

Install the Supabase C# package from NuGet and initialize a client with your project credentials. The library requires models to derive from BaseModel to interact with the API.

```APIDOC
## Installation and Client Initialization

### Installation
Install the Supabase package from NuGet:
```bash
dotnet add package supabase
````

### Initialization

Initialize a new Supabase client with your project URL and public key:

```csharp
var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");

var options = new Supabase.SupabaseOptions
{
    AutoConnectRealtime = true
};

var supabase = new Supabase.Client(url, key, options);
await supabase.InitializeAsync();
```

### Model Definition

Define models inheriting from BaseModel and use attributes to map to database structure:

```csharp
[Table("cities")]
class City : BaseModel
{
    [PrimaryKey("id")]
    public int Id { get; set; }

    [Column("name")]
    public string Name { get; set; }

    [Column("country_id")]
    public int CountryId { get; set; }
}
```

### Attributes

- **Table** - Specifies the database table name
- **PrimaryKey** - Marks the primary key column
- **Column** - Maps property to database column name

````

--------------------------------

### Installation and Setup

Source: https://supabase.com/docs/reference/csharp/textsearch

Install the Supabase C# package from NuGet and initialize a new client with your project URL and API key. Configuration through SupabaseOptions allows customization of client behavior.

```APIDOC
## Installation and Client Initialization

### Description
Install the Supabase NuGet package and initialize a client instance with your project credentials and options.

### Installation
Install from NuGet package manager:
````

dotnet add package supabase

````

### Client Initialization
Initialize the Supabase client with project URL, API key, and optional configuration:

### Parameters
- **url** (string) - Required - Your Supabase project URL from the admin panel
- **key** (string) - Required - Your Supabase public API key from the admin panel
- **options** (SupabaseOptions) - Optional - Client configuration options

### Request Example
```csharp
var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");

var options = new Supabase.SupabaseOptions
{
    AutoConnectRealtime = true
};

var supabase = new Supabase.Client(url, key, options);
await supabase.InitializeAsync();
````

### SupabaseOptions

- **AutoConnectRealtime** (bool) - Optional - Automatically establish real-time connection on initialization

````

--------------------------------

### Installation and Setup

Source: https://supabase.com/docs/reference/csharp/supabase-community/supabase-community/supabase-community/supabase-community/supabase-community/supabase-csharp

Install the Supabase C# package from NuGet and initialize a new client with your project URL and public key. The client provides access to database operations, real-time features, and Edge Functions.

```APIDOC
## Installation and Client Initialization

### Description
Install Supabase C# package and initialize a client instance with authentication credentials.

### Installation
Install from NuGet package manager:
````

dotnet add package supabase

````

### Initialization
Create a new Supabase client instance with your project URL and API key:

```csharp
var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");

var options = new Supabase.SupabaseOptions
{
    AutoConnectRealtime = true
};

var supabase = new Supabase.Client(url, key, options);
await supabase.InitializeAsync();
````

### Requirements

- Project URL from Supabase admin panel
- Public API key from Supabase admin panel
- Models must derive from `BaseModel`
- Use `Table`, `PrimaryKey`, and `Column` attributes for mapping

### Notes

- The C# client is community-maintained, not an official Supabase library
- Set `AutoConnectRealtime` to `true` to enable real-time database subscriptions

````

--------------------------------

### Installation and Setup

Source: https://supabase.com/docs/reference/csharp/supabase-community/supabase-community/supabase-community/supabase-community/supabase-csharp

Install the Supabase C# package from NuGet and initialize a new Supabase client with your project URL and public key. The client supports dependency injection and requires models to derive from BaseModel.

```APIDOC
## Installation

### Package Installation via NuGet

````

dotnet add package supabase

````

## Client Initialization

### Description
Initialize a Supabase client with your project credentials and optional configuration settings.

### Method
Constructor + Async Initialization

### Parameters
- **url** (string) - Required - Your Supabase project URL from the admin panel
- **key** (string) - Required - Your Supabase public key from the admin panel
- **options** (SupabaseOptions) - Optional - Configuration options for the client

### Configuration Options
- **AutoConnectRealtime** (boolean) - Optional - Enable automatic real-time connection (default: false)

### Request Example
```csharp
var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");

var options = new Supabase.SupabaseOptions
{
    AutoConnectRealtime = true
};

var supabase = new Supabase.Client(url, key, options);
await supabase.InitializeAsync();
````

### Response

Successfully initialized Supabase client ready for database operations.

````

--------------------------------

### Start Local Supabase Services and Serve Edge Function

Source: https://supabase.com/docs/guides/functions/quickstart

These commands start all local Supabase services, including a database and storage, and then serve a specific Edge Function (`hello-world`) for local testing. It enables hot reloading for immediate feedback during development. Ensure Docker is running for `supabase start`.

```bash
supabase start  # Start all Supabase services
supabase functions serve hello-world
````

---

### Client Setup: Install Supabase Client

Source: https://supabase.com/docs/reference/csharp/auth-signout

Instructions on how to install the Supabase C# client library into your .NET project via NuGet package manager.

```APIDOC
## Client Setup: Install Supabase Client

### Description
This section describes how to install the Supabase C# client library into your .NET project using NuGet. This is a prerequisite for using any of the Supabase client functionalities.

### Installation Method
NuGet Package Manager

### Command
```

dotnet add package supabase

```

```

---

### Installation and Setup

Source: https://supabase.com/docs/reference/csharp/storage-getbucket

Install the Supabase C# package from NuGet and initialize a new client with your project URL and public API key. The client requires models derived from BaseModel to interact with the API.

```APIDOC
## SETUP Installation and Initialization

### Description
Install and initialize the Supabase C# client library for database and API interactions.

### Installation
Install from NuGet package manager:
```

dotnet add package supabase

````

### Initialization
```csharp
var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");

var options = new Supabase.SupabaseOptions
{
    AutoConnectRealtime = true
};

var supabase = new Supabase.Client(url, key, options);
await supabase.InitializeAsync();
````

### Configuration

- **url** (string) - Required - Your Supabase project URL from admin panel
- **key** (string) - Required - Your Supabase public API key from admin panel
- **AutoConnectRealtime** (bool) - Optional - Enable automatic real-time connection

### Requirements

- Models must derive from `BaseModel`
- Use `Table`, `PrimaryKey`, and `Column` attributes to map C# properties to database schema

````

--------------------------------

### Install and Start Roboflow Inference Server

Source: https://supabase.com/docs/guides/ai/integrations/roboflow

This command installs the necessary Roboflow Inference packages and starts a local inference server. Docker must be installed and running on your machine for the server to operate correctly.

```bash
pip install inference inference-cli inference-sdk && inference server start
````

---

### Install and Initialize Supabase Docker Project

Source: https://supabase.com/docs/guides/self-hosting/docker

This set of bash commands guides you through cloning the Supabase Docker repository, creating a new project directory, copying necessary Docker Compose files and example environment variables, and pulling the latest Docker images to prepare for Supabase deployment.

```bash
# Get the code
git clone --depth 1 https://github.com/supabase/supabase

# Make your new supabase project directory
mkdir supabase-project

# Tree should look like this
# .
# ├── supabase
# └── supabase-project

# Copy the compose files over to your project
cp -rf supabase/docker/* supabase-project

# Copy the fake env vars
cp supabase/docker/.env.example supabase-project/.env

# Switch to your project directory
cd supabase-project

# Pull the latest images
docker compose pull
```

---

### Start RedwoodJS Development Server

Source: https://supabase.com/docs/guides/getting-started/quickstarts/redwoodjs

Launch the RedwoodJS development server which starts both the frontend React application and backend GraphQL API. The app will be accessible at http://localhost:8910 with the Splash page displayed.

```bash
yarn rw dev
```

---

### Installation and Setup

Source: https://supabase.com/docs/reference/python/auth-resetpasswordforemail

Install the supabase-py library via pip and initialize a Supabase client with your project credentials. The client serves as the entry point for all Supabase functionality.

````APIDOC
## Installation & Client Initialization

### Description
Install supabase-py via PyPI and create a Supabase client instance to interact with your Postgres database and Supabase services.

### Installation
```bash
pip install supabase
````

Requires Python > 3.8

### Method

Python Module Import

### Function

`create_client(supabase_url, supabase_key, options=None)`

### Parameters

#### Required Parameters

- **supabase_url** (string) - Required - The unique Supabase URL supplied when creating a new project in the project dashboard
- **supabase_key** (string) - Required - The unique Supabase Key supplied when creating a new project in the project dashboard

#### Optional Parameters

- **options** (ClientOptions) - Optional - Options object to customize Auth behaviors

### Request Example

```python
import os
from supabase import create_client, Client

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)
```

### Response

- **supabase** (Client) - Initialized Supabase client instance for making API calls and database queries

````

--------------------------------

### Minimal usage example of index_advisor with table creation in PostgreSQL

Source: https://supabase.com/docs/guides/database/extensions/index_advisor

This comprehensive example illustrates the full workflow for using `index_advisor` minimally. It includes enabling the extension, creating a simple `book` table, and then querying `index_advisor` to get an index recommendation for a basic `SELECT` statement.

```sql
create extension if not exists index_advisor cascade;

create table book(
  id int primary key,
  title text not null
);

select
  *
from
  index_advisor('select book.id from book where title = $1');
````

---

### supabase start

Source: https://supabase.com/docs/reference/cli/supabase-bootstrap

Starts the Supabase local development stack. Requires `supabase/config.toml` to be created in your current working directory by running `supabase init`.

````APIDOC
## CLI COMMAND supabase start

### Description
Starts the Supabase local development stack. Requires `supabase/config.toml` to be created in your current working directory by running `supabase init`.

### Method
CLI COMMAND

### Endpoint
supabase start [flags]

### Parameters
#### Flags
- **-x, --exclude** (strings) - Optional - Names of containers to not start. [gotrue,realtime,storage-api,imgproxy,kong,mailpit,postgrest,postgres-meta,studio,edge-runtime,logflare,vector,supavisor]
- **--ignore-health-check** (boolean) - Optional - Ignore unhealthy services and exit 0.

### Request Example
```bash
supabase start
````

### Response

#### Success Response (CLI Success)

- **message** (string) - Status messages indicating the progress and completion of the startup process.

#### Response Example

```
Creating custom roles supabase/roles.sql...
Applying migration 20220810154536_employee.sql...
Seeding data supabase/seed.sql...
Started supabase local development setup.
```

````

--------------------------------

### Complete Example: Create Foreign Table and Query Customers

Source: https://supabase.com/docs/guides/database/extensions/wrappers/paddle

Full workflow example creating a Paddle customers foreign table and executing a basic select query to retrieve all customer data. Demonstrates the complete setup including table creation and data retrieval pattern.

```SQL
create foreign table paddle.customers (
  id text,
  name text,
  email text,
  status text,
  custom_data jsonb,
  created_at timestamp,
  updated_at timestamp,
  attrs jsonb
)
  server paddle_server
  options (
    object 'customers',
    rowid_column 'id'
  );

select * from paddle.customers;
````

---

### Install Supabase dependencies with npm

Source: https://supabase.com/docs/guides/getting-started/quickstarts/hono

Installs all project dependencies including @supabase/supabase-js and @supabase/ssr for server-side authentication support in the Hono application.

```bash
npm install
```

---

### Initialize New Supabase Project with CLI

Source: https://supabase.com/docs/guides/functions/quickstart

This command initializes a new Supabase project in the current directory, creating the necessary `supabase` folder structure with `config.toml` and an empty `functions` directory. It should be run in a new directory to set up the project.

```bash
supabase init my-edge-functions-project
cd my-edge-functions-project
```

---

### Installing supabase-swift

Source: https://supabase.com/docs/reference/swift/select

Guide on how to install the Supabase Swift client library using Swift Package Manager, covering both the full Supabase package and individual modules like Auth, Realtime, Postgrest, Functions, and Storage.

````APIDOC
## Installation of `supabase-swift`

### Description
This section details how to install the `supabase-swift` client library into your Swift project using Swift Package Manager. It covers adding the main `Supabase` package or selecting individual modules like `Auth`, `Realtime`, `Postgrest`, `Functions`, or `Storage`.

### Method
(Not applicable for SDK installation)

### Endpoint
(Not applicable for SDK installation)

### Parameters
(Not applicable for SDK installation)

### Request Body
(Not applicable for SDK installation)

### Request Example
```swift
let package = Package(
    ...
    dependencies: [
        ...
        .package(
            url: "https://github.com/supabase/supabase-swift.git",
            from: "2.0.0"
        ),
    ],
    targets: [
        .target(
            name: "YourTargetName",
            dependencies: [
                .product(
                    name: "Supabase", // Auth, Realtime, Postgrest, Functions, or Storage
                    package: "supabase-swift"
                ),
            ]
        )
    ]
)
````

### Response

#### Success Response (SDK Installed)

The Supabase Swift library and selected modules are successfully added to your project's dependencies, allowing you to import and use them in your Swift code.

#### Response Example

(Not applicable, as this is a build-time dependency setup)

````

--------------------------------

### Link Supabase Project and List Functions with CLI

Source: https://supabase.com/docs/guides/functions/quickstart-dashboard

Command-line interface commands to link a local environment to a Supabase project and retrieve a list of all deployed Edge Functions. Requires Supabase CLI installation.

```bash
# Link your project to your local environment
supabase link --project-ref [project-ref]

# List all functions in the linked project
supabase functions list
````

---

### Setup PostgreSQL Test Extensions and Dependencies

Source: https://supabase.com/docs/guides/local-development/testing/pgtap-extended

Install pgTAP testing extension, HTTP client, pg_tle, and dbdev package manager. This setup file creates the foundational test environment by installing required extensions and bootstrapping the Supabase test helpers library. Requires network access to database.dev API.

```sql
-- install tests utilities
-- install pgtap extension for testing
create extension if not exists pgtap with schema extensions;
/*
---------------------
---- install dbdev ----
----------------------
Requires:
  - pg_tle: https://github.com/aws/pg_tle
  - pgsql-http: https://github.com/pramsey/pgsql-http
*/
create extension if not exists http with schema extensions;
create extension if not exists pg_tle;
drop extension if exists "supabase-dbdev";
select pgtle.uninstall_extension_if_exists('supabase-dbdev');
select
    pgtle.install_extension(
        'supabase-dbdev',
        resp.contents ->> 'version',
        'PostgreSQL package manager',
        resp.contents ->> 'sql'
    )
from extensions.http(
    (
        'GET',
        'https://api.database.dev/rest/v1/'
        || 'package_versions?select=sql,version'
        || '&package_name=eq.supabase-dbdev'
        || '&order=version.desc'
        || '&limit=1',
        array[
            ('apiKey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtdXB0cHBsZnZpaWZyYndtbXR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAxMDczNzIsImV4cCI6MTk5NTY4MzM3Mn0.z2CN0mvO2No8wSi46Gw59DFGCTJrzM0AQKsu_5k134s')::extensions.http_header
        ],
        null,
        null
    )
) x,
lateral (
    select
        ((row_to_json(x) -> 'content') #>> '{}')::json -> 0
) resp(contents);
create extension "supabase-dbdev";
select dbdev.install('supabase-dbdev');
drop extension if exists "supabase-dbdev";
create extension "supabase-dbdev";
-- Install test helpers
select dbdev.install('basejump-supabase_test_helpers');
create extension if not exists "basejump-supabase_test_helpers" version '0.0.6';

-- Verify setup with a no-op test
begin;
select plan(1);
select ok(true, 'Pre-test hook completed successfully');
select * from finish();
rollback;
```

---

### Supabase CLI: Start Local Database

Source: https://supabase.com/docs/reference/cli/supabase-branches-create

The `supabase db start` command initiates the local database stack. It can optionally restore the database from a specified logical backup file using the `--from-backup` flag.

```bash
supabase db start [flags]
```

---

### Run Development Server

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-refine

Start the Refine development server after app initialization. The app will be accessible at http://localhost:5173 with a Welcome page displayed.

```bash
cd app-name
npm run dev
```

---

### Installation - Flutter Package Setup

Source: https://supabase.com/docs/reference/dart/auth-getuser

Install the supabase_flutter package from pub.dev for Flutter projects. This is the first step to integrate Supabase into your Flutter application.

```APIDOC
## Installation - Flutter Package

### Description
Install the Supabase Flutter package from pub.dev to enable Supabase functionality in your Flutter project.

### Package Name
supabase_flutter

### Installation Command
```

flutter pub add supabase_flutter

````

### Version Requirement
- **Version**: ^2.0.0 or higher
- **Required**: Yes

### Supported Platforms
- Flutter applications
- Non-Flutter Dart projects (use supabase package)

### Installation via pubspec.yaml
```yaml
dependencies:
  supabase_flutter: ^2.0.0
````

### Notes

- For non-Flutter Dart projects, use the `supabase` package instead
- Ensure your Flutter environment is properly configured before installation

````

--------------------------------

### Setup Supabase Authentication in RedwoodJS

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-redwoodjs

Install and configure Supabase authentication in the RedwoodJS application using the setup auth command. This automatically generates the auth library, configures the Supabase client, and installs required dependencies.

```bash
yarn redwood setup auth supabase
````

---

### Auth Admin - Server-Side Setup

Source: https://supabase.com/docs/reference/kotlin/auth-exchangecodeforsession

Configuration guide for setting up server-side authentication client with admin access. Requires service_role key for admin operations. Should never expose service_role key in browser environments.

````APIDOC
## Auth Admin - Server-Side Configuration

### Description
Any method under the `supabase.auth.admin` namespace requires a `service_role` key. These methods are considered admin methods and should only be called on a trusted server. Never expose your `service_role` key in the browser.

### Setup Example
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://id.supabase.co",
    supabaseKey = "supabaseKey"
) {
    install(Auth) {
        minimalConfig() // disables session saving and auto-refreshing
    }
    // install other plugins (these will use the service role key)
}
supabase.auth.importAuthToken("service_role")

// Access auth admin api
val adminAuthClient = supabase.auth.admin
````

### Security Notes

- Always use service_role key on trusted servers only
- Never expose service_role key in client-side code or browser
- Use minimalConfig() to disable automatic session management in server context
- Implement proper access control and authentication checks before calling admin methods

````

--------------------------------

### Auth Admin Client Setup

Source: https://supabase.com/docs/reference/swift/auth-exchangecodeforsession

Instructions for setting up a server-side Supabase client with the `service_role` key to access administrative authentication functions.

```APIDOC
## Setup Admin Auth Client

### Description
To interact with the `supabase.auth.admin` namespace, a `service_role` key is required. This key grants elevated privileges and must only be used in a trusted server environment to prevent exposure.

### Method
_N/A (Setup Guide)_

### Endpoint
_N/A (Setup Guide)_

### Parameters
#### Path Parameters
_None_

#### Query Parameters
_None_

#### Request Body
_None_

### Request Example
_No direct API request for client setup_

### Response
#### Success Response (200)
_N/A (Setup Guide)_

#### Response Example
_N/A (Setup Guide)_

````

---

### Initialize Ionic Vue Project and Install Dependencies

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-vue

Setup commands to create a new Ionic Vue application named 'supabase-ionic-vue' and install the required Supabase JavaScript client library. These commands establish the project structure and add necessary dependencies for Supabase integration.

```bash
npm install -g @ionic/cli
ionic start supabase-ionic-vue blank --type vue
cd supabase-ionic-vue
```

```bash
npm install @supabase/supabase-js
```

---

### Run Keycloak Locally with Docker

Source: https://supabase.com/docs/guides/auth/social-login/auth-keycloak

This command starts a Keycloak instance in a Docker container, making it accessible on port 8080. It sets up an initial administrator user with username 'admin' and password 'admin' for development purposes.

```docker
docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:latest start-dev
```

---

### Enable Enhanced Logging for Supabase Realtime Client (JavaScript)

Source: https://supabase.com/docs/guides/getting-started/ai-prompts/use-realtime

This JavaScript example demonstrates how to enable enhanced logging for the Supabase Realtime client. By setting `log_level: 'info'` within the `realtime.params` configuration, developers can get detailed console output for debugging purposes.

```javascript
const supabase = createClient(url, key, {
  realtime: {
    params: { log_level: "info" },
  },
});
```

---

### Initialize Nuxt Application

Source: https://supabase.com/docs/guides/getting-started/quickstarts/nuxtjs

Initializes a new Nuxt 3 project with the latest version using the nuxi CLI. This command creates the project directory structure with all necessary configuration files and dependencies.

```bash
npx nuxi@latest init my-app
```

---

### Initialize Existing Project for Supabase CLI

Source: https://supabase.com/docs/guides/functions/quickstart

This command initializes Supabase configuration within an existing project directory. It's used when you have an existing local project that hasn't been configured for Supabase yet, setting up the `supabase` folder.

```bash
cd your-existing-project
supabase init # Initialize Supabase, if you haven't already
```

---

### Supabase DB Start Command - Database Initialization

Source: https://supabase.com/docs/reference/cli/supabase-storage-ls

Starts the local Supabase database with optional backup restoration capability.

```bash
supabase db start [flags]
```

```bash
--from-backup <string>     # Path to logical backup file
```

---

### Initialize Supabase Client with Project URL and Key

Source: https://supabase.com/docs/guides/realtime/getting_started

Create a Supabase client instance by providing your project URL and API key (either legacy anon key or new publishable key). This client is required for all Realtime operations.

```typescript
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://<project>.supabase.co",
  "<anon_key or sb_publishable_key>"
);
```

---

### Copy environment configuration file

Source: https://supabase.com/docs/guides/getting-started/quickstarts/hono

Copies the .env.example template file to .env to set up environment variables for the Hono application. Update the copied file with your Supabase project URL and API keys.

```bash
cp .env.example .env
```

---

### Create sample instruments table with data

Source: https://supabase.com/docs/guides/api/rest/debugging-performance

SQL script to create a test instruments table with id and name columns, then insert sample data (violin, viola, cello). Used for demonstrating explain() functionality and expected execution plan output.

```sql
create table instruments (
  id int8 primary key,
  name text
);

insert into books
  (id, name)
values
  (1, 'violin'),
  (2, 'viola'),
  (3, 'cello');
```

---

### Create a new Laravel project with Composer

Source: https://supabase.com/docs/guides/getting-started/quickstarts/laravel

Scaffold a fresh Laravel project named 'example-app' using Composer. This is the initial step for any new Laravel application setup. Ensure your PHP and Composer installations are up to date.

```terminal
composer create-project laravel/laravel example-app
```

---

### Auth Admin Setup

Source: https://supabase.com/docs/reference/kotlin/auth-signup

Configuration guide for setting up the Supabase Auth admin client with service role credentials. This enables access to admin-level authentication operations that require elevated privileges.

````APIDOC
## Auth Admin Client Setup

### Description
Configures the Supabase client to use admin authentication with service role credentials for elevated operations.

### Prerequisites
- Any method under `supabase.auth.admin` namespace requires a `service_role` key
- These methods are considered admin methods and should be called on a trusted server
- Never expose your `service_role` key in the browser

### Setup Example
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://id.supabase.co",
    supabaseKey = "supabaseKey"
) {
    install(Auth) {
        minimalConfig() // disables session saving and auto-refreshing
    }
    // install other plugins (these will use the service role key)
}
supabase.auth.importAuthToken("service_role")

// Access auth admin api
val adminAuthClient = supabase.auth.admin
````

### Configuration Options

- **minimalConfig()** - Disables session saving and auto-refreshing
- **importAuthToken(token)** - Imports the service role token for admin access

### Available Admin Methods

- `retrieveUserById(uid)` - Fetch user by ID
- `retrieveUsers(page, perPage)` - List all users with pagination
- `createUser(email, phone, password, autoConfirm)` - Create new user

### Security Best Practices

- Always use service role key only on trusted servers
- Never commit service role key to version control
- Never expose service role key in client-side code
- Use minimal configuration to reduce security surface

````

--------------------------------

### GET net.http_get

Source: https://supabase.com/docs/guides/database/extensions/pgnet

Creates an HTTP GET request, returning the request's ID. HTTP requests are not started until the transaction is committed.

```APIDOC
## GET /net.http_get

### Description
Creates an HTTP GET request returning the request's ID. HTTP requests are not started until the transaction is committed.

### Method
GET (via SQL function call)

### Endpoint
net.http_get(
    url text,
    params jsonb default '{}'::jsonb,
    headers jsonb default '{}'::jsonb,
    timeout_milliseconds int default 2000
)

### Parameters
#### Path Parameters
_None_

#### Query Parameters
_None_

#### Request Body
- **url** (text) - Required - URL for the request
- **params** (jsonb) - Optional - Key/value pairs to be URL encoded and appended to the `url`. Defaults to `{}`.
- **headers** (jsonb) - Optional - Key/values to be included in request headers. Defaults to `{}`.
- **timeout_milliseconds** (int) - Optional - The maximum number of milliseconds the request may take before being canceled. Defaults to 2000.

### Request Example
```sql
SELECT net.http_get('https://news.ycombinator.com') AS request_id;
````

### Response

#### Success Response (Returns request_id)

- **request_id** (bigint) - A reference ID for the created HTTP request.

#### Response Example

```
request_id
----------
         1
(1 row)
```

````

--------------------------------

### Begin ETL Pipeline Example with PyIceberg

Source: https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg

This code initiates an ETL pipeline example using PyIceberg, PyArrow, and Pandas. It sets up the necessary imports for catalog interaction and data manipulation, serving as the starting point for a more extensive data processing workflow.

```python
from pyiceberg.catalog import load_catalog
import pyarrow as pa
import pandas as pd
````

---

### explain() Method

Source: https://supabase.com/docs/reference/dart/auth-reauthentication

Generates the PostgreSQL query execution plan for debugging and performance analysis.

````APIDOC
## explain() Method

### Description
Generates the PostgreSQL query execution plan for debugging and performance analysis.

### Method
explain()

### Endpoint
/table_name.explain (Conceptual)

### Parameters
#### Request Body
- **analyze** (boolean) - Optional - If `true`, the query will be executed and the actual run time will be returned.
- **verbose** (boolean) - Optional - If `true`, the query identifier will be returned and `data` will include the output columns of the query.
- **settings** (boolean) - Optional - If `true`, include information on configuration parameters that affect query planning.
- **buffers** (boolean) - Optional - If `true`, include information on buffer usage.
- **wal** (boolean) - Optional - If `true`, include information on WAL record generation.

### Code Example
```dart
final data = await supabase
  .from('instruments')
  .select()
  .explain();
````

### Request Example

{}

### Response

#### Success Response (200)

- **data** (string) - A string or object containing the PostgreSQL execution plan.

#### Response Example

{}

````

--------------------------------

### Invoke Supabase Edge Function with JavaScript Client

Source: https://supabase.com/docs/guides/functions/quickstart-dashboard

This example demonstrates how to programmatically call a deployed Supabase Edge Function from a client application using the Supabase JavaScript client library. It initializes the client with the project URL and an anonymous key, then uses the `supabase.functions.invoke` method to send a JSON payload and handle the response.

```javascript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://[YOUR_PROJECT_ID].supabase.co', 'YOUR_ANON_KEY')

const { data, error } = await supabase.functions.invoke('hello-world', {
  body: { name: 'JavaScript' },
})

console.log(data) // { message: "Hello JavaScript!" }
````

---

### Generate PostgreSQL EXPLAIN Plan with Supabase-JS Client

Source: https://supabase.com/docs/guides/troubleshooting/understanding-postgresql-explain-output-Un9dqX

Illustrates how to programmatically generate a PostgreSQL `EXPLAIN` plan using the `supabase-js` client library. This method allows specifying options like `analyze: true` and `verbose: true` for detailed execution metrics and plan information directly within your application code. Requires prior enabling of debugging functionality in your Supabase project.

```javascript
const { data, error } = await supabase
  .from("countries")
  .select()
  .explain({ analyze: true, verbose: true });
```

---

### POST /client/initialize

Source: https://supabase.com/docs/reference/kotlin/installing

Initialize the Supabase client with required configuration parameters and install necessary modules for authentication, database, storage, and real-time capabilities.

````APIDOC
## POST /client/initialize

### Description
Initialize the Supabase Kotlin client with project credentials and install required modules.

### Method
POST

### Endpoint
Client initialization (local)

### Parameters
- **supabaseUrl** (String) - Required - The unique Supabase URL from your project dashboard
- **supabaseKey** (String) - Required - The unique Supabase Key (publishable or anon key) from your project dashboard
- **builder** (SupabaseClientBuilder.() -> Unit) - Optional - Additional configuration and plugin installation

### Request Body

```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://xyzcompany.supabase.co",
    supabaseKey = "publishable-or-anon-key"
) {
    install(Auth)
    install(Postgrest)
    install(Storage)
    install(Realtime)
    install(Functions)
    install(GraphQL)
}
````

### Installable Modules

- **Auth** - Authentication and authorization
- **Postgrest** - PostgreSQL REST API
- **Storage** - File storage operations
- **Realtime** - Real-time database subscriptions
- **Functions** - Serverless functions
- **GraphQL** - GraphQL API

### Response

- **supabase** (SupabaseClient) - Initialized client instance ready for operations

````

--------------------------------

### Supabase DB Start - Database Initialization

Source: https://supabase.com/docs/reference/cli/supabase-branches-get

Starts the Supabase database service. Optionally restores from a logical backup file using the --from-backup flag.

```bash
supabase db start [flags]
supabase db start --from-backup <string>
````

---

### POST /auth/signup

Source: https://supabase.com/docs/reference/csharp/getchannels

Creates a new user account with email and password authentication. User email verification may be required depending on project settings.

````APIDOC
## POST /auth/signup

### Description
Creates a new user account. Email verification may be required based on project configuration.

### Method
POST

### Endpoint
/auth/v1/signup

### Request Body
- **email** (string) - Required - User email address
- **password** (string) - Required - User password

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
````

### Response

#### Success Response (200)

- **user** (object) - User object (may be null if email confirmation required)
  - **id** (string) - User ID
  - **email** (string) - User email
- **session** (object) - Session object (null if email confirmation enabled)
  - **access_token** (string) - JWT access token
  - **refresh_token** (string) - Refresh token

### Notes

- If **Confirm email** is enabled: user returned but session is null
- If **Confirm email** is disabled: both user and session are returned
- User is redirected to SITE_URL after email confirmation

````

--------------------------------

### Start Supabase self-hosting stack with Docker Compose

Source: https://supabase.com/docs/reference/self-hosting-analytics/create-endpoint

This shell command navigates to the `docker` directory within the Supabase repository and starts the self-hosting stack using `docker compose`. It assumes the `docker-compose.yml` file has been previously configured for the BigQuery backend as per the setup instructions. This command initiates all services defined in the `docker-compose.yml` file.

```shell
# assuming you clone the supabase/supabase repo.
cd docker
docker compose -f docker-compose.yml
````

---

### WebSocket Connection Setup with websocat

Source: https://supabase.com/docs/guides/realtime/protocol

Demonstrates how to establish a WebSocket connection to Supabase Realtime using the websocat command-line tool. Supports both Supabase-hosted and self-hosted projects with optional URL parameters for protocol versioning and logging.

```bash
# With Supabase
websocat "wss://<PROJECT_REF>.supabase.co/realtime/v1/websocket?apikey=<API_KEY>"

# With self-hosted
websocat "wss://<HOST>:<PORT>/socket/websocket?apikey=<API_KEY>"
```

---

### Start Local Database with Supabase CLI

Source: https://supabase.com/docs/reference/cli/supabase-branches-list

Start the local Supabase database instance. Optionally restore from a logical backup file using the --from-backup flag to initialize database state.

```bash
supabase db start [flags]
```

```bash
supabase db start --from-backup /path/to/backup.sql
```

---

### Navigate to Project and Open in VS Code

Source: https://supabase.com/docs/guides/getting-started/quickstarts/redwoodjs

Change into the newly created RedwoodJS project directory and open it in Visual Studio Code for development. This prepares the development environment for database configuration and application development.

```bash
cd my-app
code .
```

---

### GET /v1/projects/{ref}/pgsodium

Source: https://supabase.com/docs/reference/api/introduction

[Beta] Gets project's pgsodium configuration. This endpoint retrieves the encryption root key for the project's pgsodium encryption setup.

````APIDOC
## GET /v1/projects/{ref}/pgsodium

### Description
[Beta] Gets project's pgsodium configuration.

### Method
GET

### Endpoint
`/v1/projects/{ref}/pgsodium`

### OAuth Scopes
- secrets:read

### Parameters
#### Path Parameters
- **ref** (string) - Required - Project ref

### Response
#### Success Response (200)
- **root_key** (string) - The pgsodium root key

#### Response Example
```json
{
  "root_key": "lorem"
}
````

### Response Codes

- 200 - OK
- 401 - Unauthorized
- 403 - Forbidden
- 429 - Too Many Requests
- 500 - Internal Server Error

````

--------------------------------

### Initialize a New SvelteKit Project

Source: https://supabase.com/docs/guides/getting-started/quickstarts/sveltekit

This command uses `npx` to scaffold a new SvelteKit application named `my-app`. It sets up the basic project structure and dependencies required for a SvelteKit development environment, prompting for configuration options.

```bash
npx sv create my-app
````

---

### Create Refine App with Supabase Preset using npm

Source: https://supabase.com/docs/guides/getting-started/quickstarts/refine

Initializes a new Refine application with the `refine-supabase` preset, which automatically includes the `@refinedev/supabase` package and `supabase-js` dependency. This command scaffolds a complete Refine project configured for Supabase integration.

```bash
npm create refine-app@latest -- --preset refine-supabase my-app
```

---

### Install Nuxt Supabase Module

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-nuxt-3

This command installs the `@nuxtjs/supabase` package as a development dependency for your Nuxt 3 project. This module facilitates easy integration with Supabase services, handling much of the setup automatically.

```shell
npm install @nuxtjs/supabase --save-dev
```

---

### GET /rest/v1/{table_name} (Limit by Range)

Source: https://supabase.com/docs/reference/python/auth-exchangecodeforsession

Limit the query result by a starting and ending offset. The `start` and `end` values are 0-based and inclusive. This translates to 'offset' and 'limit' query parameters.

````APIDOC
## GET /rest/v1/{table_name} (Limit by Range)

### Description
Limit the query result by a starting and ending offset. The `start` and `end` values are 0-based and inclusive. This translates to 'offset' and 'limit' query parameters.

### Method
GET

### Endpoint
/rest/v1/{table_name}

### Parameters
#### Path Parameters
- **table_name** (string) - Required - The name of the table to query.

#### Query Parameters
- **offset** (number) - Required - The starting index from which to limit the result (0-based).
- **limit** (number) - Required - The number of records to return, calculated as `end - start + 1`.
- **foreignTable.offset** (number) - Optional - Set this to limit rows of foreign tables instead of the parent table.
- **foreignTable.limit** (number) - Optional - Set this to limit rows of foreign tables instead of the parent table.

### Request Example
```python
response = (
    supabase.table("planets")
    .select("name")
    .range(0, 1)
    .execute()
)
````

### Response

#### Success Response (200)

Data limited to the specified range of rows.

#### Response Example

```json
[
  {
    "name": "Earth"
  },
  {
    "name": "Venus"
  }
]
```

````

--------------------------------

### Initialize a SvelteKit Project (CLI)

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit

These commands initialize a new SvelteKit project named 'supabase-sveltekit' using the SvelteKit minimal skeleton, navigate into the new project directory, and install its initial dependencies. This sets up the basic structure for your SvelteKit application.

```shell
npx sv create supabase-sveltekit
cd supabase-sveltekit
npm install
````

---

### Select and Update Queries (Postgres SQL)

Source: https://supabase.com/docs/guides/getting-started/ai-prompts/code-format-sql

Illustrates examples of smaller, concise `SELECT` and `UPDATE` statements that are kept on a few lines for readability, demonstrating basic data retrieval and modification operations.

```sql
select *
from employees
where end_date is null;

update employees
set end_date = '2023-12-31'
where employee_id = 1001;
```

---

### Setup PostgreSQL table with JSONB column for GraphQL custom scalar example

Source: https://supabase.com/docs/guides/graphql/api

This SQL setup creates a `User` table with a `config` column of type `jsonb` and inserts a sample record. This table demonstrates how PostgreSQL JSON types are used before being exposed through GraphQL.

```sql
create table "User"(
    id bigserial primary key,
    config jsonb
);

insert into "User"(config)
values (jsonb_build_object('palette', 'dark-mode'));
```

---

### Setup PostgreSQL table with BigSerial ID for GraphQL custom scalar example

Source: https://supabase.com/docs/guides/graphql/api

This SQL setup creates a `Person` table with an `id` column of type `bigserial` and inserts a sample record. This demonstrates how PostgreSQL `bigserial` types are used before being exposed through GraphQL.

```sql
create table "Person"(
    id bigserial primary key,
    name text
);

insert into "Person"(name)
values ('J. Bazworth');
```

---

### supabase start

Source: https://supabase.com/docs/reference/cli/supabase-sso-update

Starts the Supabase local development stack with all service containers. This command initializes your local development environment including databases, authentication services, and the Supabase Studio interface. Requires supabase/config.toml to exist in the current directory.

```APIDOC
## supabase start

### Description
Starts the Supabase local development stack. Requires `supabase/config.toml` to be created in your current working directory by running `supabase init`. All service containers are started by default.

### Usage
```

supabase start [flags]

```

### Flags
- **-x, --exclude** (strings) - Optional - Names of containers to not start. Available options: gotrue, realtime, storage-api, imgproxy, kong, mailpit, postgrest, postgres-meta, studio, edge-runtime, logflare, vector, supavisor.
- **--ignore-health-check** (boolean) - Optional - Ignore unhealthy services and exit 0.

### Requirements
- Minimum 7GB of RAM recommended to start all services.

### Command Examples
```

supabase start

```

### Response Example
```

Creating custom roles supabase/roles.sql...
Applying migration 20220810154536_employee.sql...
Seeding data supabase/seed.sql...
Started supabase local development setup.

```

```

---

### POST /auth/v1/signup (Client: SignUp)

Source: https://supabase.com/docs/reference/csharp/ilike

Creates a new user with an email and password. Email confirmation and session creation depend on project settings. Provides details on behavior with and without email confirmation.

````APIDOC
## POST /auth/v1/signup (Client: SignUp)

### Description
Creates a new user.
*   By default, the user needs to verify their email address before logging in. To turn this off, disable **Confirm email** in your project.
*   **Confirm email** determines if users need to confirm their email address after signing up.
    *   If **Confirm email** is enabled, a `user` is returned but `session` is null.
    *   If **Confirm email** is disabled, both a `user` and a `session` are returned.
*   When the user confirms their email address, they are redirected to the `SITE_URL` by default. You can modify your `SITE_URL` or add additional redirect URLs in your project.
*   If SignUp() is called for an existing confirmed user:
    *   When both **Confirm email** and **Confirm phone** (even when phone provider is disabled) are enabled in your project, an obfuscated/fake user object is returned.
    *   When either **Confirm email** or **Confirm phone** (even when phone provider is disabled) is disabled, the error message, `User already registered` is returned.

### Client Method Signature
`supabase.Auth.SignUp(email, password)`

### Method
POST

### Endpoint
`/auth/v1/signup`

### Parameters
#### Method Parameters
- **email** (string) - Required - The user's email address.
- **password** (string) - Required - The user's chosen password.

### Request Example
```csharp
var session = await supabase.Auth.SignUp("user@example.com", "password123");
````

### Response

#### Success Response (200)

- **session** (Session) - The user's session object, or `null` if email confirmation is required.
- **user** (User) - The newly created user object.

#### Error Response

- **400 Bad Request** - If `User already registered` for an existing user when email/phone confirmation is disabled.

````

--------------------------------

### Install Supabase C# Client Library

Source: https://supabase.com/docs/reference/csharp/storage-createbucket

Instructions on how to install the Supabase C# client library using the NuGet package manager.

```APIDOC
## INSTALL PACKAGE supabase

### Description
This section outlines the process for integrating the Supabase C# client library into your project via NuGet.

### Method
PACKAGE_INSTALL

### Endpoint
N/A

### Parameters
N/A

### Request Body
N/A

### Request Example
```bash
dotnet add package supabase
````

### Response

#### Success Response (200)

- **status** (string) - Indicates successful package installation.

#### Response Example

```text
Package 'supabase' successfully installed.
```

````

--------------------------------

### POST /buckets - Create a bucket

Source: https://supabase.com/docs/reference/csharp/initializing

Creates a new Storage bucket. Requires `buckets` insert permissions.

```APIDOC
## POST /buckets

### Description
Creates a new Storage bucket.

### Method
POST

### Endpoint
/buckets

### Request Body
- **name** (string) - Required - Name of the bucket to create
- **public** (boolean) - Optional - Whether the bucket should be public

### Policy Permissions Required
- **buckets** - insert
- **objects** - none

### Response
#### Success Response (201)
- **id** (string) - Bucket identifier
- **name** (string) - Bucket name
- **owner** (string) - Bucket owner
- **public** (boolean) - Whether bucket is public
- **created_at** (string) - Creation timestamp
- **updated_at** (string) - Last update timestamp

### Code Example
```csharp
var bucket = await supabase.Storage.CreateBucket("avatars");
````

````

--------------------------------

### POST /auth/signup

Source: https://supabase.com/docs/reference/swift/auth-verifyotp

Create a new user account with email and password. Email verification may be required depending on project settings. Returns user object and session upon successful signup, with session availability depending on email confirmation settings.

```APIDOC
## POST /auth/signup

### Description
Create a new user account with email and password credentials. Email confirmation requirements and response behavior depend on project authentication settings.

### Method
POST

### Endpoint
`/auth/v1/signup`

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. One of email or phone required.
- **phone** (string) - Optional - User phone number. One of email or phone required.
- **password** (string) - Required - User password for account.
- **data** (JSONObject) - Optional - Custom metadata object to store additional user information.
- **redirectTo** (URL) - Optional - Redirect URL for email signup link. Must be a configured redirect URL.
- **captchaToken** (string) - Optional - CAPTCHA token for verification.

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
````

### Response

#### Success Response (200)

- **user** (object) - User object containing user details
- **session** (object | null) - Session object if Confirm email is disabled, otherwise null

### Response Example

```json
{
  "user": {
    "id": "user-id",
    "email": "example@email.com",
    "user_metadata": {}
  },
  "session": {
    "access_token": "token",
    "token_type": "bearer"
  }
}
```

### Notes

- If Confirm email is enabled: user returned but session is null
- If Confirm email is disabled: both user and session returned
- Users redirected to SITE_URL after email confirmation
- For existing confirmed users: obfuscated user object returned if both Confirm email and Confirm phone enabled, otherwise User already registered error
- Use getUser() to fetch currently logged-in user

````

--------------------------------

### Sign Up New User with Email and Password (Swift)

Source: https://supabase.com/docs/reference/swift/auth-getclaims

Illustrates how to register a new user in Supabase using email and password via the `signUp()` method. The method returns a user object and potentially a session, depending on whether email confirmation is enabled for the project.

```Swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
````

---

### Generate Refine Resource with Inferencer using npm

Source: https://supabase.com/docs/guides/getting-started/quickstarts/refine

Generates a new resource named `instruments` with automatically created pages for list, create, show, and edit actions using Refine Inferencer. The command creates page files in `src/pages/instruments/` directory with `<HeadlessInferencer />` components. Requires `@refinedev/react-table` and `@refinedev/react-hook-form` dependencies.

```bash
npm run refine create-resource instruments
```

---

### Set Up Ubuntu VM for Postgres Migration

Source: https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres

Bash commands to prepare an Ubuntu virtual machine for Postgres database migration by installing Postgres client tools, tmux for session management, and monitoring utilities. This setup enables optimal performance when running migration tasks from a cloud VM.

```Bash
# Install Postgres client and tools
sudo apt update
sudo apt install software-properties-common
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt update
sudo apt install postgresql-client-17 tmux htop iotop moreutils

# Start or attach to tmux session
tmux a -t migration || tmux new -s migration
```

---

### Initialize new Poetry project

Source: https://supabase.com/docs/guides/ai/examples/mixpeek-video-search

Create a new Poetry project directory with the standard project structure. This sets up the foundation for managing Python dependencies and packaging.

```bash
poetry new video-search
```

---

### GET /callback

Source: https://supabase.com/docs/reference/self-hosting-auth/get-a-user

Receives the redirect from an external provider during the OAuth authentication process. Starts the process of creating an access and refresh token.

```APIDOC
## GET /callback

### Description
Receives the redirect from an external provider during the OAuth authentication process and initiates the creation of access and refresh tokens.

### Method
GET

### Endpoint
/callback

### Response
#### Redirect Response (302)
- Redirects to the application with authentication tokens

### Response Codes
- **302** - Redirect to application with tokens
```

---

### Client Setup: Initialize Supabase Client

Source: https://supabase.com/docs/reference/csharp/auth-signout

Explains how to initialize a new Supabase client instance in your C# application. This involves providing your project's URL and public API key for authentication and connection.

```APIDOC
## Client Setup: Initialize Supabase Client

### Description
Initializes a new Supabase client instance, establishing the connection between your C# application and your Supabase project. You will need your project URL and public API key, typically sourced from environment variables.

### Client Method
`new Supabase.Client(url, key, options)` then `await supabase.InitializeAsync()`

### Parameters
#### Constructor
```

---

### Create a Private Realtime Channel

Source: https://supabase.com/docs/guides/realtime/getting_started

Create a Realtime channel with a descriptive topic name and configure it as private for production environments. Channels serve as rooms where clients can communicate and receive broadcasts.

```typescript
// Create a channel with a descriptive topic name
const channel = supabase.channel("room:lobby:messages", {
  config: { private: true }, // Recommended for production
});
```

---

### Example Supabase RLS Policy Output Format

Source: https://supabase.com/docs/guides/getting-started/ai-prompts/database-rls-policies

Illustrates the expected SQL output format for a Supabase Row-Level Security (RLS) policy, including the `CREATE POLICY` statement with `TO` and `USING`/`WITH CHECK` clauses, as guided by the AI prompt instructions.

```sql
CREATE POLICY "My descriptive policy." ON books FOR INSERT to authenticated USING ( (select auth.uid()) = author_id ) WITH ( true );
```

---

### Start the Laravel development server

Source: https://supabase.com/docs/guides/getting-started/quickstarts/laravel

Launch the local development server for your Laravel application. This command makes your application accessible via a web browser at `http://127.0.0.1:8000`, allowing you to test the setup and authentication routes.

```terminal
php artisan serve
```

---

### SAML 2.0 Attribute Statement XML Example

Source: https://supabase.com/docs/guides/auth/enterprise-sso/auth-sso-saml

Example SAML assertion AttributeStatement containing mail and givenName attributes. Demonstrates the XML structure that gets exchanged during SAML 2.0 authentication, where attributes are defined with Name, NameFormat, and AttributeValue elements that will be mapped to user profile fields.

```xml
<saml:AttributeStatement>
  <!-- will be mapped to the email key -->
  <saml:Attribute
    Name="mail"
    NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic"
    >
    <saml:AttributeValue xsi:type="xs:string">
      valid.email@supabase.io
    </saml:AttributeValue>
  </saml:Attribute>

  <!-- will be mapped to the first_name key -->
  <saml:Attribute
    Name="givenName"
    NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic"
    >
    <saml:AttributeValue xsi:type="xs:string">
      Jane Doe
    </saml:AttributeValue>
  </saml:Attribute>
</saml:AttributeStatement>
```

---

### Create Table and Insert Sample Data - PostgreSQL

Source: https://supabase.com/docs/guides/database/extensions/hypopg

Creates an account table with id and address columns, then populates it with 10,000 sample records using generate_series. This demonstrates the setup for testing query performance optimization with HypoPG.

```sql
create table account (
  id int,
  address text
);

insert into account(id, address)
select
  id,
  id || ' main street'
from
  generate_series(1, 10000) id;
```

---

### supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-inspect-db-index-stats

Starts the local Supabase database. Initializes the local development stack for database operations.

```APIDOC
## supabase db start

### Description
Starts the local Supabase database. Initializes the local development stack for database operations.

### Command
```

supabase db start [flags]

```

### Flags
- **--from-backup** (string) - Optional - Path to a logical backup file to restore from
```

---

### Start Supabase Local Development Stack

Source: https://supabase.com/docs/reference/cli/start

Initiates the Supabase local development stack, which requires a `supabase/config.toml` file. All service containers are started by default, but you can exclude specific services using flags. It is recommended to have at least 7GB of RAM.

```bash
supabase start [flags]
```

```bash
supabase start
```

---

### Supabase CLI: Repair Migration History Example Workflow

Source: https://supabase.com/docs/reference/cli/supabase-domains-get

This comprehensive example demonstrates a full workflow for repairing a desynchronized migration history. It starts by showing a discrepancy, then involves deleting a local migration file, reverting a remote migration, and finally pulling the remote schema to re-establish a synchronized state.

```bash
$ supabase migration list
        LOCAL      │     REMOTE     │     TIME (UTC)
  ─────────────────┼────────────────┼──────────────────────
                   │ 20230103054303 │ 2023-01-03 05:43:03
   20230103054315  │                │ 2023-01-03 05:43:15
```

```bash
$ rm supabase/migrations/20230103054315_remote_commit.sql
```

```bash
$ supabase migration list
        LOCAL      │     REMOTE     │     TIME (UTC)
  ─────────────────┼────────────────┼──────────────────────
                   │ 20230103054303 │ 2023-01-03 05:43:03
```

```bash
$ supabase migration repair 20230103054303 --status reverted
Connecting to remote database...
Repaired migration history: [20220810154537] => reverted
Finished supabase migration repair.
```

```bash
$ supabase migration list
        LOCAL      │     REMOTE     │     TIME (UTC)
  ─────────────────┼────────────────┼──────────────────────

```

```bash
$ supabase db pull
Connecting to remote database...
Schema written to supabase/migrations/20240414044403_remote_schema.sql
Update remote migration history table? [Y/n]
Repaired migration history: [20240414044403] => applied
Finished supabase db pull.
```

```bash
$ supabase migration list
        LOCAL      │     REMOTE     │     TIME (UTC)
  ─────────────────┼────────────────┼──────────────────────
    20240414044403 │ 20240414044403 │ 2024-04-14 04:44:03
```

---

### POST /auth/v1/signup - Create New User

Source: https://supabase.com/docs/reference/csharp/auth-signup

Registers a new user with an email and password. Email verification behavior is configurable in project settings.

````APIDOC
## POST /auth/v1/signup

### Description
Creates a new user account with the provided email and password. The requirement for email verification depends on the project's 'Confirm email' setting.

### Method
POST

### Endpoint
`/auth/v1/signup`

### Parameters
#### Request Body
- **email** (string) - Required - The user's email address.
- **password** (string) - Required - The user's chosen password.

### Request Example
```csharp
var session = await supabase.Auth.SignUp("user@example.com", "strong-password");
````

### Response

#### Success Response (200)

- **user** (object) - Details of the newly created user.
- **session** (object | null) - The user's session object, or null if email confirmation is enabled.

#### Response Example

```json
{
  "user": {
    "id": "uuid-string",
    "email": "user@example.com",
    "created_at": "2023-01-01T00:00:00Z"
  },
  "session": {
    "access_token": "jwt-token",
    "refresh_token": "refresh-token",
    "expires_in": 3600
  }
}
```

(Session will be null if email confirmation is required)

#### Error Response (400)

```json
{
  "error": "User already registered",
  "error_code": "422"
}
```

````

--------------------------------

### Setup PostgreSQL table with Numeric column for GraphQL custom scalar example

Source: https://supabase.com/docs/guides/graphql/api

This SQL setup creates a `GeneralLedger` table with an `amount` column of type `numeric(10,2)` and inserts a sample record. This demonstrates how PostgreSQL `numeric` types are used before being exposed through GraphQL.

```sql
create table "GeneralLedger"(
    id serial primary key,
    amount numeric(10,2)
);

insert into "GeneralLedger"(amount)
values (22.15);
````

---

### Configure Deeplink Callbacks for Authentication

Source: https://supabase.com/docs/reference/kotlin/auth-exchangecodeforsession

Step-by-step configuration guide for setting up deeplinks on Android, iOS, and macOS to handle OAuth and OTP authentication callbacks with Auth plugin setup and platform-specific function calls.

````APIDOC
## Configure Deeplink Callbacks for Authentication

### Description
Configures deeplink callbacks for OAuth and OTP authentication on Android, iOS, and macOS platforms.

### Supported Platforms
- Android
- iOS
- MacOS

### Configuration Steps

#### Step 1: Set Up a Deeplink
- **Android**: Set up a deeplink in Android manifest
- **iOS and MacOS**: Set up a URL scheme

#### Step 2: Add Deeplink to Redirect URLs
- **Pattern**: `scheme://host`
- Register this pattern in Supabase dashboard redirect URLs

#### Step 3: Configure the Auth Plugin
```kotlin
install(Auth) {
    host = "deeplink host"  // Can be package name or app/company URL (not Supabase URL)
    scheme = "deeplink scheme"

    // Android only: Set OAuth and SSO logins to open in custom tab
    defaultExternalAuthAction = ExternalAuthAction.CustomTabs()  // Defaults to ExternalAuthAction.ExternalBrowser
}
````

#### Step 4: Call Platform Specific Function on Startup

- **Android**: `supabase.handleDeeplinks(intent)` - Call at top of `onCreate()` in MainActivity
- **iOS/MacOS**: `supabase.handleDeeplinks(url)`

### Sign In Example

```kotlin
supabase.auth.signInWith(Google)
```

### OTP Links

Open OTP links directly in your app after deeplink configuration is complete.

````

--------------------------------

### supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-branches-create

Starts the local Supabase database. Supports optional restoration from a logical backup file.

```APIDOC
## CLI Command: supabase db start

### Description
Starts the local Supabase database. Optionally restores from a logical backup file.

### Command
````

supabase db start [flags]

```

### Flags
- **--from-backup** (string) - Optional - Path to a logical backup file for database restoration
```

---

### POST /bucket/

Source: https://supabase.com/docs/reference/self-hosting-storage/search-for-objects-under-a-prefix

Create a new storage bucket.

````APIDOC
## POST /bucket/

### Description
Create a new storage bucket.

### Method
POST

### Endpoint
/bucket/

### Parameters
#### Request Body
- **name** (string) - Required - The name of the bucket.
- **id** (string) - Optional - A unique identifier for the bucket.
- **public** (boolean) - Optional - Indicates if the bucket is publicly accessible.
- **type** (enum) - Optional - The type of the bucket. Accepted values are not explicitly listed in the documentation.
- **file_size_limit** (any) - Optional - The maximum file size allowed in the bucket. Options are not explicitly listed in the documentation.
- **allowed_mime_types** (Array<string>) - Optional - A list of allowed MIME types for files uploaded to the bucket.

### Request Example
```json
{
  "name": "my-new-bucket",
  "public": true,
  "file_size_limit": 5242880
}
````

### Response

#### Success Response (200)

- **name** (string) - The name of the created bucket.

#### Response Example

```json
{
  "name": "avatars"
}
```

````

--------------------------------

### POST /auth/admin - Setup

Source: https://supabase.com/docs/reference/kotlin/auth-getuseridentities

Initializes the Supabase auth admin client with service_role key. This setup is required before accessing any admin authentication methods. Must be configured on a trusted server only.

```APIDOC
## POST /auth/admin - Setup

### Description
Configures the Supabase client with service_role key to enable admin authentication methods. This setup must be performed on a trusted server.

### Method
POST

### Endpoint
/auth/admin (via client configuration)

### Parameters
#### Configuration
- **supabaseUrl** (String) - Required - Your Supabase project URL (format: https://id.supabase.co).
- **supabaseKey** (String) - Required - Your service_role key (NOT the public anon key).
- **authToken** (String) - Required - Import the service_role as auth token.

### Request Example
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://id.supabase.co",
    supabaseKey = "supabaseKey"
) {
    install(Auth) {
        minimalConfig() //disables session saving and auto-refreshing
    }
}
supabase.auth.importAuthToken("service_role")

// Access auth admin api
val adminAuthClient = supabase.auth.admin
````

### Configuration Options

- **minimalConfig()** - Disables automatic session saving and token refreshing
- **importAuthToken()** - Sets the service role for admin operations

### Security Critical Notes

- **CRITICAL**: Only use service_role key on trusted servers
- **CRITICAL**: Never expose service_role key in browser/client code
- **CRITICAL**: Never commit service_role key to version control
- Admin methods bypass Row-Level Security (RLS) policies
- Use only for server-side administrative operations
- Use public/anon key for client-side authentication

````

--------------------------------

### Basic `supabase migration new` Command Syntax

Source: https://supabase.com/docs/reference/cli/supabase-bootstrap

Shows the general syntax for the `supabase migration new` command, which is used to create a new, empty migration file. A `<migration name>` must be provided, which will be incorporated into the filename alongside a timestamp.

```bash
supabase migration new <migration name>
````

---

### GET /data - Range Rows

Source: https://supabase.com/docs/reference/csharp/auth-signup

Limits the result to rows within the specified inclusive range (start and end indices).

````APIDOC
## GET /data/{table_name}

### Description
Limits the result to rows within the specified range, inclusive.

### Method
GET

### Endpoint
`/data/{table_name}`

### Parameters
#### Query Parameters
- **range** (string) - Required - A string representing the inclusive range, e.g., `0-9`.

### Request Example
```csharp
var result = await supabase.From<City>()
  .Select("name, country_id")
  .Range(0, 3)
  .Get();
````

### Response

#### Success Response (200)

- **data** (array) - An array of objects representing the rows within the specified range.

#### Response Example

```json
[
  {
    "name": "City 0",
    "country_id": 10
  },
  {
    "name": "City 1",
    "country_id": 11
  }
]
```

````

--------------------------------

### GET /buckets - List all buckets

Source: https://supabase.com/docs/reference/csharp/initializing

Retrieves the details of all Storage buckets within an existing product. Requires `buckets` select permissions.

```APIDOC
## GET /buckets

### Description
Retrieves the details of all Storage buckets within an existing product.

### Method
GET

### Endpoint
/buckets

### Policy Permissions Required
- **buckets** - select
- **objects** - none

### Response
#### Success Response (200)
- **buckets** (array) - Array of bucket objects containing bucket details

### Code Example
```csharp
var buckets = await supabase.Storage.ListBuckets();
````

````

--------------------------------

### Make an Authenticated GET Request with cURL

Source: https://supabase.com/docs/reference/api/introduction

This example demonstrates how to make an authenticated GET request to the Supabase Management API using cURL. It illustrates the required 'Authorization' header with a Bearer token (Personal Access Token) to list projects. This is a fundamental pattern for interacting with the API.

```bash
curl https://api.supabase.com/v1/projects \\n  -H \"Authorization: Bearer sbp_bdd0••••••••••••••••••••••••••••••••4f23\"
````

---

### Start SolidJS Development Server

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-solidjs

This command initiates the development server for a SolidJS application, allowing you to view and interact with the app in a web browser, typically at `localhost:3000`. It compiles and serves the application, often with hot-reloading capabilities for development.

```bash
npm start

```

---

### Run and Redeploy Edge Functions Locally

Source: https://supabase.com/docs/guides/functions/quickstart-dashboard

CLI commands to execute an Edge Function locally for testing and to redeploy modified functions back to the Supabase project after making changes.

```bash
# Run a function locally
supabase functions serve hello-world

# Redeploy when you're ready with your changes
supabase functions deploy hello-world
```

---

### Get Query Execution Plan with Explain (Kotlin/Supabase)

Source: https://supabase.com/docs/reference/kotlin/auth-api

This example illustrates how to use the `explain()` method on a Supabase `select` query to obtain the PostgreSQL execution plan. This is a valuable tool for debugging and optimizing slow queries, though it should be used cautiously in production environments due to potential sensitive information exposure. Various parameters like `analyze`, `verbose`, and `format` can configure the output.

```kotlin
val result = supabase.from("characters").select {
    explain()
}
```

---

### Multi-Platform Application RLS Policies

Source: https://supabase.com/docs/guides/auth/oauth-server/token-security

Provides a comprehensive real-world example of RLS policies for a multi-platform application with web app, mobile app, and third-party integrations. Each client type receives tailored access permissions: web and direct sessions get full access, mobile gets read-only, and integrations get limited public data access.

```sql
-- Web app: Full access
CREATE POLICY "Web app full access"
ON profiles FOR ALL
USING (
  auth.uid() = user_id AND
  (
    (auth.jwt() ->> 'client_id') = 'web-app-client-id'
    OR (auth.jwt() ->> 'client_id') IS NULL  -- Direct user sessions
  )
);

-- Mobile app: Read-only access to profiles
CREATE POLICY "Mobile app reads profiles"
ON profiles FOR SELECT
USING (
  auth.uid() = user_id AND
  (auth.jwt() ->> 'client_id') = 'mobile-app-client-id'
);

-- Third-party integration: Limited data access
CREATE POLICY "Integration reads public data"
ON profiles FOR SELECT
USING (
  auth.uid() = user_id AND
  (auth.jwt() ->> 'client_id') = 'integration-client-id' AND
  is_public = true
);
```

---

### Auth Admin Client Setup

Source: https://supabase.com/docs/reference/kotlin/auth-getuser

Instructions for setting up the server-side authentication client using a `service_role` key. Admin methods should only be used in a trusted server environment and never expose the `service_role` key in the browser.

````APIDOC
## Auth Admin Client Setup

### Description
Any method under the `supabase.auth.admin` namespace requires a `service_role` key. These methods are considered admin methods and should be called on a trusted server. Never expose your `service_role` key in the browser.

### Method
Client Setup

### Endpoint
N/A

### Parameters
N/A

### Request Example
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://id.supabase.co",
    supabaseKey = "supabaseKey"
) {
    install(Auth) {
        minimalConfig() //disables session saving and auto-refreshing
    }
    // install other plugins (these will use the service role key)
}
supabase.auth.importAuthToken("service_role")

// Access auth admin api
val adminAuthClient = supabase.auth.admin
````

### Response

N/A

#### Response Example

```json
{}
```

````

--------------------------------

### Simple GET Request with http Extension in PostgreSQL

Source: https://supabase.com/docs/guides/database/extensions/http

Executes a GET request to a RESTful endpoint using the http_get() function. Returns the HTTP status code and response content cast to jsonb format. This example retrieves a todo item from JSONPlaceholder API.

```sql
select
  "status", "content"::jsonb
from
  extensions.http_get('https://jsonplaceholder.typicode.com/todos/1');
````

---

### Auth Admin Client Setup

Source: https://supabase.com/docs/reference/swift/match

This section describes how to initialize an admin authentication client using a `service_role` key. Admin methods should only be called from a trusted server environment for security reasons.

````APIDOC
## Supabase Auth Admin Client Initialization

### Description
This section describes how to initialize an admin authentication client using a `service_role` key. Admin methods should only be called from a trusted server environment for security reasons. Never expose your `service_role` key in the browser.

### Method
N/A (Client Setup)

### Endpoint
N/A

### Parameters
No parameters for this setup guide.

### Request Example
```swift
import Supabase

let supabase = SupabaseClient(
  supabaseURL: supabaseURL,
  supabaseKey: serviceRoleKey
)

let adminAuthClient = supabase.auth.admin
````

### Response

N/A

````

--------------------------------

### Configure Supabase Environment Variables

Source: https://supabase.com/docs/guides/getting-started/quickstarts/nuxtjs

Sets up environment variables in .env.local file for Supabase connection. Requires SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY values from your Supabase project dashboard to establish client-side connectivity.

```env
SUPABASE_URL=<SUBSTITUTE_SUPABASE_URL>
SUPABASE_PUBLISHABLE_KEY=<SUBSTITUTE_SUPABASE_PUBLISHABLE_KEY>
````

---

### Start Local Supabase Development Stack

Source: https://supabase.com/docs/guides/ai/examples/image-search-openai-clip

This command starts the local Supabase services, including the database, authentication, and storage, making them accessible for development. It will print connection details like the DB URL.

```bash
supabase start
```

---

### Run Supabase Functions Locally

Source: https://supabase.com/docs/guides/functions/examples/elevenlabs-generate-speech-stream

Commands to start the local Supabase stack and run the Edge Function in development mode. The supabase start command initializes the local development environment, and supabase functions serve starts the function server with log output.

```bash
supabase start
```

```bash
supabase functions serve
```

---

### Create a bucket

Source: https://supabase.com/docs/reference/csharp/getchannels

Creates a new Storage bucket.

````APIDOC
## POST /storage/v1/bucket

### Description
Creates a new Storage bucket.

### Method
POST

### Endpoint
/storage/v1/bucket

### Parameters
#### Path Parameters
(None)

#### Query Parameters
(None)

#### Request Body
- **name** (string) - Required - The name of the new bucket.
- **public** (boolean) - Optional - Whether the bucket should be publicly accessible. Defaults to false.

### Request Example
```json
{
  "name": "new-bucket",
  "public": false
}
````

### Response

#### Success Response (201)

- **id** (string) - The unique identifier of the created bucket.
- **name** (string) - The name of the created bucket.

#### Response Example

```json
{
  "id": "new-bucket",
  "name": "new-bucket"
}
```

````

--------------------------------

### Example Response for Get Project Function Combined Statistics API (JSON)

Source: https://supabase.com/docs/reference/api

This JSON object illustrates an example response from the API endpoint for retrieving a project's function combined statistics. It includes a `result` array which can contain null values, and an `error` field for indicating issues. This endpoint requires 'interval' and 'function_id' query parameters.

```json
{
  "result": [
    null
  ],
  "error": "lorem"
}
````

---

### supabase db start

Source: https://supabase.com/docs/reference/cli/supabase-completion-fish

This command is used to start the local database, potentially from a backup file. Further details on its exact functionality beyond starting are not provided.

````APIDOC
## CLI Command: supabase db start

### Description
Starts the local development database.

### Method
CLI Command

### Endpoint
supabase db start [flags]

### Parameters
#### Flags
- **--from-backup** (string) - Optional - Path to a logical backup file.

### Request Example
```bash
supabase db start
````

### Response

(No explicit response example provided in the source text.)

````

--------------------------------

### POST /auth/signup - Create a New User

Source: https://supabase.com/docs/reference/csharp/auth-signinwithotp

Creates a new user account with email and password. By default, users must verify their email address before logging in unless email confirmation is disabled in project settings.

```APIDOC
## POST /auth/signup

### Description
Creates a new user account. Email confirmation behavior depends on project settings.

### Method
POST

### Endpoint
/auth/signup

### Parameters

#### Request Body
- **email** (string) - Required - User's email address
- **password** (string) - Required - User's password

### Configuration Notes
- If **Confirm email** is enabled: `user` is returned but `session` is null
- If **Confirm email** is disabled: Both `user` and `session` are returned
- Users are redirected to `SITE_URL` upon email confirmation
- For existing confirmed users: returns obfuscated user object or "User already registered" error

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
````

### Response

- **user** (object) - User object (may be obfuscated pending email confirmation)
- **session** (object) - Session object (null if email confirmation is required)

````

--------------------------------

### Google OAuth Prerequisites and Setup

Source: https://supabase.com/docs/guides/auth/social-login/auth-google

Initial setup requirements for implementing Sign in with Google including Google Cloud project creation, OAuth client registration, and required scope configuration.

```APIDOC
## Sign in with Google - Prerequisites

### Required Setup Steps

#### 1. Google Cloud Project
- Create a new project in Google Cloud Platform
- Access the Google Auth Platform console

#### 2. Application Configuration
Register and set up your application's:

**Audience**
- Configure which Google users are allowed to sign in to your application

**Data Access (Scopes)**
- Define what your application can do with user's Google data
- Access profile information and other APIs

**Branding and Verification**
- Display custom logo and name instead of Supabase project ID on consent screen
- Improves user retention and trust
- Verification may take several business days

### Required Scopes
Configure the following scopes in the Data Access (Scopes) screen:

- `openid` - Add manually
- `.../auth/userinfo.email` - Added by default
- `...auth/userinfo.profile` - Added by default

### Important Notes
- Adding additional scopes, especially sensitive or restricted ones, may require verification
- Verification process can take a considerable amount of time
- Avoid adding unnecessary scopes to expedite the verification process

### Consent Screen Branding Recommendations

**Brand Verification**
- Verify application brand (logo and name) in Google Auth Platform console
- Not automatic - may take several business days
- Improves user trust and reduces phishing vulnerability

**Custom Domain Setup**
- Use format like `auth.example.com` or `api.example.com` for domain `example.com`
- Recommended approach: `auth.example.com` or `api.example.com`
- Without custom domain, users see `<project-id>.supabase.co`
- Increases susceptibility to phishing attempts

### Platform-Specific Setup

**Android**
- Create OAuth client ID for Android
- Provide SHA-1 certificate fingerprint for signing
- Maintain separate fingerprints for testing and production
- Add all Client IDs to Google Cloud Console and Supabase dashboard

**iOS (with Kotlin Multiplatform)**
- Create OAuth client ID for iOS
- Provide app Bundle ID
- Provide App Store ID and Team ID if published on Apple App Store
````

---

### GET /select - Range Results

Source: https://supabase.com/docs/reference/kotlin/auth-signup

Limit query results to a specific range by index. Returns rows from the start position to end position inclusively.

````APIDOC
## Range Results

### Description
Limit the query result by from and to indices inclusively.

### Parameters
#### Required Parameters
- **from** (Long) - Required - The start of the range.
- **to** (Long) - Required - The end of the range.

#### Optional Parameters
- **referencedTable** (String) - Optional - The foreign table to limit by.

### Request Example
```kotlin
supabase.from("characters").select {
    range(1L..5L)
}
````

### Response

Returns rows within the specified range (from index to index, inclusive).

````

--------------------------------

### Initialize SupabaseClient

Source: https://supabase.com/docs/reference/swift/auth-getclaims

Create a SupabaseClient instance by providing your Project URL and Project Key from your Supabase project settings. The client serves as the main entry point for all Supabase functionality.

```APIDOC
## Initialize SupabaseClient

### Description
Initialize the Supabase client with your project credentials to enable all Supabase services.

### Method
Initializer

### Parameters
- **supabaseURL** (URL) - Required - Your Supabase project URL (e.g., https://xyzcompany.supabase.co)
- **supabaseKey** (String) - Required - Your publishable or anon key from Project Settings → API Settings

### Initialization Example

```swift
import Supabase

let client = SupabaseClient(
    supabaseURL: URL(string: "https://xyzcompany.supabase.co")!,
    supabaseKey: "publishable-or-anon-key"
)
````

### Usage

The initialized client provides access to all Supabase services and is the entry point for database queries, authentication, real-time subscriptions, and file storage operations.

````

--------------------------------

### Initialize Supabase-kt Client with Auth and PostgREST

Source: https://supabase.com/docs/reference/kotlin/auth-api

This code snippet demonstrates how to initialize the Supabase client in Kotlin, providing the Supabase URL and API key. It also shows how to install core modules like `Auth` and `Postgrest`, which are necessary for authentication and database interactions respectively. Additional modules can be installed as needed within the builder block.

```Kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://xyzcompany.supabase.co",
    supabaseKey = "publishable-or-anon-key"
) {
    install(Auth)
    install(Postgrest)
    //install other modules
}
````

---

### Create RedwoodJS App with TypeScript

Source: https://supabase.com/docs/guides/getting-started/quickstarts/redwoodjs

Initialize a new RedwoodJS project with TypeScript support using the yarn package manager. This creates the foundational project structure for a full-stack RedwoodJS application.

```bash
yarn create redwood-app my-app --ts
```

---

### GET - Range Query

Source: https://supabase.com/docs/reference/csharp/or

Limits the result to rows within a specified range, inclusive on both ends. Useful for pagination by specifying start and end indices.

````APIDOC
## GET - Range Query

### Description
Returns rows within the specified index range (inclusive).

### Method
GET

### Endpoint
/from/{table}

### Parameters
#### Query Parameters
- **from** (integer) - Required - Start index (inclusive)
- **to** (integer) - Required - End index (inclusive)

### Request Example
```csharp
var result = await supabase.From<City>()
  .Select("name, country_id")
  .Range(0, 3)
  .Get();
````

### Response

#### Success Response (200)

- **rows** (array) - Array of city objects within the specified range

#### Response Example

```json
[
  {
    "name": "City 1",
    "country_id": 1
  },
  {
    "name": "City 2",
    "country_id": 2
  },
  {
    "name": "City 3",
    "country_id": 3
  },
  {
    "name": "City 4",
    "country_id": 4
  }
]
```

````

--------------------------------

### Deploy Supabase Edge Function(s) to Production

Source: https://supabase.com/docs/guides/functions/quickstart

This command deploys a specified Edge Function (`hello-world`) or all local Edge Functions to Supabase's global edge network. It pushes your local code changes to the live environment, making the functions accessible globally.

```bash
supabase functions deploy hello-world
# If you want to deploy all functions, run the `deploy` command without specifying a function name:
supabase functions deploy
````

---

### supabase start

Source: https://supabase.com/docs/reference/cli/supabase-branches-delete

Starts the Supabase local development stack. This command requires a `supabase/config.toml` file and launches all necessary services by default. Services can be selectively excluded using flags.

```APIDOC
## supabase start

### Description
Starts the Supabase local development stack. Requires `supabase/config.toml` to be created in your current working directory by running `supabase init`. All service containers are started by default. You can exclude those not needed by passing in `-x` flag.

### Command
supabase start [flags]

### Flags
- **-x, --exclude** (strings) - Optional - Names of containers to not start. [gotrue,realtime,storage-api,imgproxy,kong,mailpit,postgrest,postgres-meta,studio,edge-runtime,logflare,vector,supavisor]
- **--ignore-health-check** (boolean) - Optional - Ignore unhealthy services and exit 0.

### Usage Example
```

supabase start

```

### Response
#### Success Response
Indicates the creation of custom roles, application of migrations, seeding data, and successful startup of the local development setup.

#### Response Example
```

Creating custom roles supabase/roles.sql...
Applying migration 20220810154536_employee.sql...
Seeding data supabase/seed.sql...
Started supabase local development setup.

```

```

---

### Initialize React Application with Vite

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-react

These commands create a new React project using Vite and navigate into the newly created directory. Vite is used for fast development server and build tooling. This is the first step in setting up the client-side application.

```bash
npm create vite@latest supabase-react -- --template react
cd supabase-react
```

---

### Limit query to a range (GET /instruments)

Source: https://supabase.com/docs/reference/swift/rpc

This operation limits the query results to a specific range of rows, inclusive of both the starting and ending indices. Ideal for pagination.

````APIDOC
## GET /instruments

### Description
Limits the query result to an inclusive range of rows, specified by `from` and `to` indices.

### Method
GET

### Endpoint
`/instruments`

### Parameters
#### Query Parameters
- **from** (integer) - Required - The starting index of the range (inclusive).
- **to** (integer) - Required - The ending index of the range (inclusive).

### Request Example
```swift
try await supabase
  .from("instruments")
  .select("name")
  .range(from: 0, to: 1)
  .execute()
````

### Response

#### Success Response (200)

- **name** (string) - The name of the instrument.

#### Response Example

```json
[
  {
    "name": "piano"
  },
  {
    "name": "viola"
  }
]
```

````

--------------------------------

### GET - Query range of rows

Source: https://supabase.com/docs/reference/csharp/rpc

Limits the query results to rows within a specified range (inclusive). Used for pagination by specifying start and end indices.

```APIDOC
## GET /Select with Range

### Description
Limits the result to rows within the specified range, inclusive.

### Method
GET

### Endpoint
From<T>().Select().Range().Get()

### Parameters
#### Query Modifiers
- **Range** (int from, int to) - Required - Start and end indices (inclusive)
- **Select** (string) - Optional - Comma-separated column names to return

### Request Example
```csharp
var result = await supabase.From<City>()
  .Select("name, country_id")
  .Range(0, 3)
  .Get();
````

### Response

#### Success Response (200)

- **result** (List<City>) - Array of City objects from index 0 to 3 (4 rows)

````

--------------------------------

### Select Query with Alias (Postgres SQL)

Source: https://supabase.com/docs/guides/getting-started/ai-prompts/code-format-sql

Shows an example of using aliases in a `SELECT` query with the `AS` keyword. This improves the clarity and readability of the output column names, especially for aggregated or derived values.

```sql
select count(*) as total_employees
from employees
where end_date is null;
````

---

### GET /callback

Source: https://supabase.com/docs/reference/auth

Receives the redirect from an external provider during the OAuth authentication process. This endpoint starts the process of creating an access and refresh token for the authenticated user.

```APIDOC
## GET /callback

### Description
Receives the redirect from an external provider during the OAuth authentication process. Starts the process of creating an access and refresh token.

### Method
GET

### Endpoint
`/callback`

### Response
#### Redirect Response (302)
- Redirects to the application with authentication tokens

### Response Codes
- **302** - Redirect to authenticated session
```

---

### GET /query - EXPLAIN Execution Plan

Source: https://supabase.com/docs/reference/swift/or

Retrieve the Postgres EXPLAIN execution plan for debugging slow queries. This method works on any query including rpc() calls and write operations. EXPLAIN must be enabled on your project first through the Performance Debugging Guide.

````APIDOC
## GET /query - EXPLAIN

### Description
Get the Postgres EXPLAIN execution plan of a query for performance debugging. Can be applied to any query type including RPC calls and write operations.

### Method
GET

### Endpoint
/query (via `.explain()` method on any query)

### Parameters
#### Query Parameters
- **analyze** (boolean) - Optional - Include ANALYZE to execute the query and show actual timing
- **verbose** (boolean) - Optional - Include additional output details

### Request Example
```swift
try await supabase
  .from("instruments")
  .select()
  .explain()
  .execute()
  .value
````

### Response

#### Success Response (200)

- **plan** (array) - Execution plan details showing query optimization strategy
- **timing** (object) - Timing information when analyze option is used

### Notes

- EXPLAIN is not enabled by default to prevent exposing sensitive database information
- Only enable for testing environments or use pre-request functions for production protection
- Follow the Performance Debugging Guide to enable on your project

````

--------------------------------

### Example Response for Get Project Performance Advisors API (JSON)

Source: https://supabase.com/docs/reference/api

This JSON object represents an example response from the experimental API endpoint for retrieving project performance advisors. It shows a list of linting issues, including details like name, title, level, category, description, and metadata specific to foreign key issues. This endpoint requires the 'database:read' OAuth scope.

```json
{
  "lints": [
    {
      "name": "unindexed_foreign_keys",
      "title": "lorem",
      "level": "ERROR",
      "facing": "EXTERNAL",
      "categories": [
        "PERFORMANCE"
      ],
      "description": "lorem",
      "detail": "lorem",
      "remediation": "lorem",
      "metadata": {
        "schema": "lorem",
        "name": "lorem",
        "entity": "lorem",
        "type": "table",
        "fkey_name": "lorem",
        "fkey_columns": [
          42
        ]
      },
      "cache_key": "lorem"
    }
  ]
}
````

---

### Retrieve User IP Address from Supabase Edge Logs (SQL)

Source: https://supabase.com/docs/guides/platform/logs

This SQL query demonstrates how to extract a user's IP address ("x_real_ip") from Supabase "edge_logs". It utilizes "CROSS JOIN UNNEST" to navigate through the nested "metadata", "request", and "headers" objects. The query filters results for non-null IP addresses and HTTP GET methods, providing a practical example for identifying client IP information from log data.

```sql
select datetime(timestamp), h.x_real_ip
from
  edge_logs
  cross join unnest(metadata) as m
  cross join unnest(m.request) as r
  cross join unnest(r.headers) as h
where h.x_real_ip is not null and r.method = "GET";
```

---

### Initialize Snaplet Seed Project

Source: https://supabase.com/docs/guides/local-development/seeding-your-database

Run this command to set up Snaplet for the first time in your project. It analyzes your database schema and generates `seed.config.ts` and `seed.ts` files, which are essential for defining your seed data. Node.js and npm are required.

```shell
npx @snaplet/seed init
```

---

### Configure Supabase Environment Variables - Environment

Source: https://supabase.com/docs/guides/getting-started/quickstarts/reactjs

Sets up the `.env.local` file with Supabase connection credentials. These variables are used by Vite to configure the Supabase client. Requires substituting actual values from your Supabase project dashboard.

```plaintext
VITE_SUPABASE_URL=<SUBSTITUTE_SUPABASE_URL>
VITE_SUPABASE_PUBLISHABLE_KEY=<SUBSTITUTE_SUPABASE_PUBLISHABLE_KEY>
```

---

### Run Prisma Database Seed Command

Source: https://supabase.com/docs/guides/getting-started/quickstarts/redwoodjs

Execute the seed script to populate the Instrument table with sample data. This command loads the seed data defined in scripts/seed.ts into the PostgreSQL database via Prisma.

```bash
yarn rw prisma db seed
```

---

### RANGE - Get Row Range

Source: https://supabase.com/docs/reference/csharp/neq

Limits the query results to rows within a specified range (inclusive). This modifier allows pagination by specifying start and end row indices.

````APIDOC
## RANGE - Paginate Results

### Description
Limits the result to rows within the specified range, inclusive on both ends.

### Method
GET (Query Operation)

### Parameters
#### Query Modifiers
- **start** (integer) - Required - Starting row index (inclusive)
- **end** (integer) - Required - Ending row index (inclusive)

### Request Example
```csharp
var result = await supabase.From<City>()
  .Select("name, country_id")
  .Range(0, 3)
  .Get();
````

### Response

#### Success Response

- **rows** (array) - Array of City objects from index 0 to 3 (4 rows total)

````

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/swift/installing

Create a new user account with email or phone authentication. Returns user object and optionally session based on email/phone confirmation settings.

```APIDOC
## POST /auth/signup - Create New User

### Description
Creates a new user account with email or phone-based authentication. Email verification may be required based on project settings. Returns user object and session information.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (String) - Optional - User email address. Either email or phone must be provided.
- **phone** (String) - Optional - User phone number. Either email or phone must be provided.
- **password** (String) - Required - User password for account.
- **data** (JSONObject) - Optional - Custom metadata object to store additional user information.
- **redirectTo** (URL) - Optional - Email signup only. Redirect URL embedded in confirmation email. Must be configured in Supabase project.
- **captchaToken** (String) - Optional - CAPTCHA token for bot prevention.

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
````

### Response

#### Success Response (200)

- **user** (User) - Created user object with id and metadata
- **session** (Session|null) - User session if email confirmation disabled, null if confirmation required

### Configuration Notes

- **Confirm email** setting determines if email verification is required
  - When enabled: user returned but session is null
  - When disabled: both user and session returned
- Users are redirected to SITE_URL by default upon email confirmation
- For existing confirmed users: returns obfuscated user object or "User already registered" error depending on confirmation settings
- To retrieve currently logged-in user, use getUser() method

````

--------------------------------

### Initialize Supabase Client with URL and API Key

Source: https://supabase.com/docs/reference/swift/match

Create a SupabaseClient instance by providing your project URL and API key from Project Settings. This client serves as the entry point for all Supabase functionality including database, authentication, and storage operations.

```swift
import Supabase

let client = SupabaseClient(supabaseURL: URL(string: "https://xyzcompany.supabase.co")!, supabaseKey: "publishable-or-anon-key")

````

---

### Installation

Source: https://supabase.com/docs/reference/csharp/containedby

Install the Supabase C# package from NuGet. This is the first step to integrate Supabase into your C# project.

```APIDOC
## Installation

### Description
Install the Supabase C# client library from NuGet package manager.

### Package
supabase

### Installation Command
```

dotnet add package supabase

```

### Requirements
- .NET project with NuGet package manager
- Internet connection to access nuget.org

### Notes
- The C# client library is maintained by the Supabase community
- Official maintainer: Joseph Schultz
```

---

### Create New Supabase Edge Function

Source: https://supabase.com/docs/guides/functions/quickstart

This command generates a new Edge Function with a basic TypeScript template at `supabase/functions/hello-world/index.ts`. It's a quick way to scaffold a new function for development.

```bash
supabase functions new hello-world
```

---

### Implement PostgreSQL Hash Partitioning for Product Data

Source: https://supabase.com/docs/guides/database/partitions

This example demonstrates how to set up hash partitioning in PostgreSQL for a `products` table. Data is distributed evenly across partitions based on a hash of the `id` column. The parent table is defined with `PARTITION BY HASH`, and individual partitions like `products_one` are created using `FOR VALUES WITH (MODULUS ..., REMAINDER ...)` clauses for hash distribution.

```sql
create table products (
    id bigint generated by default as identity,
    name text,
    category text,
    price bigint
)
partition by hash (id);

create table products_one
	partition of products
  for values with (modulus 2, remainder 1);

create table products_two
	partition of products
  for values with (modulus 2, remainder 0);
```

---

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/csharp/neq

Creates a new user account with email and password credentials. Email verification may be required depending on project settings. Returns user object and session (if email confirmation is disabled).

````APIDOC
## POST /auth/signup - Register New User

### Description
Creates a new user account. Email verification behavior depends on project configuration.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Required - User email address
- **password** (string) - Required - User password

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
````

### Response

#### Success Response (200)

- **user** (object) - User object with user details
- **session** (object) - Session object (null if email confirmation enabled)

### Important Notes

- By default, users must verify email before logging in
- If Confirm email is disabled, both user and session are returned
- If Confirm email is enabled, session is null and user must confirm
- If SignUp is called for existing confirmed user with Confirm email/phone enabled, returns obfuscated user
- If SignUp is called for existing confirmed user with either setting disabled, returns "User already registered" error

````

--------------------------------

### GET /range - Limit Query to Range

Source: https://supabase.com/docs/reference/dart/storage-emptybucket

Limit query results to rows within a specified range by index. Both the starting and ending indices are inclusive, allowing precise control over result pagination.

```APIDOC
## GET /range

### Description
Limit the result to rows within the specified range, inclusive on both ends.

### Parameters
#### Query Parameters
- **from** (int) - Required - The starting index from which to limit the result
- **to** (int) - Required - The last index to which to limit the result (inclusive)
- **referencedTable** (String) - Optional - Set this to limit rows of referenced tables instead of the parent table

### Request Example
```dart
final data = await supabase
  .from('instruments')
  .select('name')
  .range(0, 1);
````

### Response

#### Success Response (200)

- **data** (Array) - Array of row objects within the specified range

### Notes

- Range is inclusive on both ends
- Useful for pagination
- Can target referenced tables

````

--------------------------------

### Use Dedicated Topics in Supabase Realtime JavaScript

Source: https://supabase.com/docs/guides/getting-started/ai-prompts/use-realtime

Best practice examples for using granular, dedicated topics in Supabase Realtime. Demonstrates topic patterns for rooms, users, organizations, and features to ensure messages only reach relevant listeners, improving performance and security.

```javascript
// This only broadcasts to users in a specific room
const channel = supabase.channel(`room:${roomId}:messages`)

// This only broadcasts to a specific user
const channel = supabase.channel(`user:${userId}:notifications`)

// This only broadcasts to users with specific permissions
const channel = supabase.channel(`admin:${orgId}:alerts`)
````

---

### Auth Admin: Client Setup (Service Role)

Source: https://supabase.com/docs/reference/kotlin/start

Demonstrates how to initialize a Supabase client for administrative tasks, requiring a `service_role` key. Admin methods should only be called from a trusted server environment for security.

````APIDOC
## Auth Admin Client Setup

### Description
This section describes how to configure the Supabase client to use the `service_role` key, enabling access to administrative API methods. The `service_role` key must never be exposed in client-side applications.

### Method
_Not an API endpoint; client setup instruction._

### Endpoint
_Not an API endpoint; client setup instruction._

### Parameters
#### Request Body
_Not applicable._

### Request Example
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://id.supabase.co",
    supabaseKey = "YOUR_SERVICE_ROLE_KEY"
) {
    install(Auth) {
        minimalConfig() //disables session saving and auto-refreshing
    }
    // install other plugins (these will use the service role key)
}
supabase.auth.importAuthToken("YOUR_SERVICE_ROLE_KEY")

// Access auth admin api
val adminAuthClient = supabase.auth.admin
````

### Response

_Not applicable; this is a client setup._

````

--------------------------------

### Prepare Sample Data in Redis CLI for FDW Examples

Source: https://supabase.com/docs/guides/database/extensions/wrappers/redis

This set of Redis CLI commands populates a Redis instance with various data types including List, Set, Hash, Sorted Set, and Stream, as well as multiple instances of these types using key patterns. This data is used as source for the subsequent PostgreSQL foreign table examples.

```redis-cli
127.0.0.1:6379> RPUSH list foo bar 42
127.0.0.1:6379> SADD set foo bar 42
127.0.0.1:6379> HSET hash foo bar baz qux
127.0.0.1:6379> ZADD zset 30 foo 20 bar 10 baz
127.0.0.1:6379> XADD stream * foo bar
127.0.0.1:6379> XADD stream * aa 42 bb 43

127.0.0.1:6379> RPUSH list:100 foo bar
127.0.0.1:6379> RPUSH list:200 baz

127.0.0.1:6379> SADD set:100 foo
127.0.0.1:6379> SADD set:200 bar

127.0.0.1:6379> HSET hash:100 foo bar
127.0.0.1:6379> HSET hash:200 baz qux

127.0.0.1:6379> ZADD zset:100 10 foo 20 bar
127.0.0.1:6379> ZADD zset:200 40 baz 30 qux
````

---

### Initialize Supabase Client in Swift

Source: https://supabase.com/docs/guides/getting-started/quickstarts/ios-swiftui

Creates a Supabase client instance for iOS by providing the project URL and publishable API key. This client is used to authenticate and establish a connection to your Supabase project. Store this in a file named `Supabase.swift` and use it throughout your app.

```swift
import Supabase

let supabase = SupabaseClient(
  supabaseURL: URL(string: "YOUR_SUPABASE_URL")!,
  supabaseKey: "YOUR_SUPABASE_PUBLISHABLE_KEY"
)
```

---

### Start Supabase Docker Compose Stack with BigQuery Analytics

Source: https://supabase.com/docs/reference/self-hosting-analytics/create-source

This command sequence navigates into the 'docker' directory of the Supabase repository and then initiates the self-hosting stack using `docker compose`. It assumes that the `docker-compose.yml` file has been configured to enable the BigQuery backend for analytics, following the setup instructions provided earlier in the document.

```bash
cd docker
docker compose -f docker-compose.yml
```

---

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/csharp/using-modifiers

Creates a new user account with email and password. Email verification may be required based on project settings. Returns user and session information, with session being null if email confirmation is enabled.

````APIDOC
## POST /auth/signup

### Description
Creates a new user account with email and password authentication.

### Method
POST

### Endpoint
/auth/signup

### Request Body
- **email** (string) - Required - User's email address
- **password** (string) - Required - User's password

### Code Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
````

### Response (200 OK)

- **user** (object) - User object with authentication details
- **session** (object) - Session object (null if email confirmation is enabled)

### Important Notes

- If Confirm email is enabled: user is returned but session is null
- If Confirm email is disabled: both user and session are returned
- User is redirected to SITE_URL upon email confirmation
- Additional redirect URLs can be configured in project settings
- If SignUp is called for existing confirmed user with both confirmations enabled: obfuscated user object is returned
- If either confirmation is disabled: "User already registered" error is returned

````

--------------------------------

### Client Installation

Source: https://supabase.com/docs/reference/csharp/auth-signup

Install the Supabase C# client library from NuGet package manager. This is the first step to integrate Supabase into your C# project.

```APIDOC
## Install Supabase C# Client

### Description
Install the Supabase NuGet package to add the C# client library to your project.

### Package Manager
NuGet

### Installation Command
````

dotnet add package supabase

```

### Notes
- The C# client library is community-maintained by Joseph Schultz and contributors
- Requires .NET compatible environment
- Not an official Supabase library but actively maintained
```

---

### Configure Refine with Supabase and React Router

Source: https://supabase.com/docs/guides/getting-started/quickstarts/refine

Sets up the main App component with Refine framework, integrating Supabase data provider, authentication, React Router for navigation, and keyboard command palette. Configures resource-based routing for instruments with CRUD operations and unsaved changes warnings.

```typescript
import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { dataProvider, liveProvider } from "@refinedev/supabase";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import authProvider from "./authProvider";
import { supabaseClient } from "./utility";
import {
  InstrumentsCreate,
  InstrumentsEdit,
  InstrumentsList,
  InstrumentsShow,
} from "./pages/instruments";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <Refine
          dataProvider={dataProvider(supabaseClient)}
          liveProvider={liveProvider(supabaseClient)}
          authProvider={authProvider}
          routerProvider={routerProvider}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
          resources={[
            {
              name: "instruments",
              list: "/instruments",
              create: "/instruments/create",
              edit: "/instruments/edit/:id",
              show: "/instruments/show/:id",
            },
          ]}
        >
          <Routes>
            <Route
              index
              element={<NavigateToResource resource="instruments" />}
            />
            <Route path="/instruments">
              <Route index element={<InstrumentsList />} />
              <Route path="create" element={<InstrumentsCreate />} />
              <Route path="edit/:id" element={<InstrumentsEdit />} />
              <Route path="show/:id" element={<InstrumentsShow />} />
            </Route>
          </Routes>
          <RefineKbar />
          <UnsavedChangesNotifier />
          <DocumentTitleHandler />
        </Refine>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
```

---

### WebSocket Connection Setup

Source: https://supabase.com/docs/guides/realtime/protocol

Describes how to establish a WebSocket connection to the Supabase Realtime server, including URL formats and optional query parameters.

```APIDOC
## WebSocket Connection Setup

### Description
Setup a WebSocket connection to the Supabase Realtime server.

### Method
N/A (WebSocket protocol)

### Endpoint
wss://<PROJECT_REF>.supabase.co/realtime/v1/websocket
wss://<HOST>:<PORT>/socket/websocket

### Parameters
#### Query Parameters
- **apikey** (string) - Required - Your project's API key.
- **vsn** (string) - Optional - Protocol version. Possible values: `1.0.0`, `2.0.0`. Defaults to `1.0.0`.
- **log_level** (string) - Optional - Server-side log level for debugging.

### Request Example
```

# With Supabase

websocat "wss://<PROJECT_REF>.supabase.co/realtime/v1/websocket?apikey=<API_KEY>"

# With self-hosted

websocat "wss://<HOST>:<PORT>/socket/websocket?apikey=<API_KEY>"

```

### Response
#### Success Response
Connection established, ready to send `phx_join` event.
```

---

### POST /auth/sign_up

Source: https://supabase.com/docs/reference/python/delete

Create a new user account with email and password credentials. By default, users must verify their email address before logging in unless email confirmation is disabled in project settings.

```APIDOC
## POST /auth/sign_up

### Description
Creates a new user account with email and password. The response depends on the 'Confirm email' setting in your project.

### Method
POST

### Endpoint
/auth/sign_up

### Parameters
#### Request Body
- **email** (string) - Required - User's email address
- **password** (string) - Required - User's password
- **metadata** (object) - Optional - Additional user metadata

### Request Example
```

{
"email": "email@example.com",
"password": "password"
}

```

### Response
#### Success Response (200)
- **user** (object) - User object (null if email confirmation is enabled)
- **session** (object) - Session object (null if email confirmation is enabled)

### Notes
- If 'Confirm email' is enabled, user is returned but session is null
- If 'Confirm email' is disabled, both user and session are returned
- For existing confirmed users with both confirmations enabled, an obfuscated user object is returned
- For existing confirmed users with either confirmation disabled, 'User already registered' error is returned
```

---

### Setup Supabase Database Tests with GitHub Actions

Source: https://supabase.com/docs/guides/local-development/testing/overview

This GitHub Actions workflow defines a CI pipeline to automate database testing for a Supabase project. It checks out the repository, sets up the Supabase CLI, starts a local Supabase instance, and then runs database tests on push or pull request events to the `main` branch.

```yaml
name: Database Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Supabase CLI
        uses: supabase/setup-cli@v1

      - name: Start Supabase
        run: supabase start

      - name: Run Tests
        run: supabase test db
```

---

### Initialize Supabase Client and Auth Module (Swift)

Source: https://supabase.com/docs/reference/swift/auth-getclaims

Shows how to initialize a `SupabaseClient` instance with a URL and API key, and then access its authentication module. This setup is a prerequisite for performing any authentication operations.

```Swift
let supabase = SupabaseClient(supabaseURL: URL(string: "https://xyzcompany.supabase.co")!, supabaseKey: "publishable-or-anon-key")
let auth = supabase.auth
```

---

### Initialize Supabase Client

Source: https://supabase.com/docs/reference/kotlin/auth-api

Create and configure a Supabase client instance with your project credentials. Install required modules such as Auth, Postgrest, Storage, Realtime, Functions, and GraphQL plugins through the builder DSL.

````APIDOC
## POST /client/initialize

### Description
Initialize a new Supabase client with required credentials and plugins.

### Method
POST (Initialization)

### Endpoint
local (in-process initialization)

### Parameters
- **supabaseUrl** (String) - Required - The unique Supabase URL from your project dashboard
- **supabaseKey** (String) - Required - The unique Supabase Key (publishable or anon key) from your project dashboard
- **builder** (SupabaseClientBuilder.() -> Unit) - Optional - Lambda to configure plugins and additional settings

### Request Example
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://xyzcompany.supabase.co",
    supabaseKey = "publishable-or-anon-key"
) {
    install(Auth)
    install(Postgrest)
}
````

### Response

Returns initialized SupabaseClient instance ready for authentication and database operations.

### Installable Modules

- **Auth**: User authentication and session management
- **Postgrest**: Database operations and queries
- **Storage**: File storage operations
- **Realtime**: Real-time database subscriptions
- **Functions**: Serverless function execution
- **GraphQL**: GraphQL API access

````

--------------------------------

### Configure Supabase Client and Realtime Channel (JavaScript)

Source: https://supabase.com/docs/guides/getting-started/ai-prompts/use-realtime

This snippet demonstrates the basic initialization of the Supabase client and the configuration of a real-time channel. It shows how to enable broadcast messages (with self-receipt and acknowledgments), configure presence tracking with a custom key, and secure the channel using the `private: true` option for RLS authorization.

```javascript
// Basic setup
const supabase = createClient('URL', 'ANON_KEY')

// Channel configuration
const channel = supabase.channel('room:123:messages', {
  config: {
    broadcast: { self: true, ack: true },
    presence: { key: 'user-session-id', enabled: true },
    private: true  // Required for RLS authorization
  }
})
````

---

### View Local Supabase Service Credentials and URLs

Source: https://supabase.com/docs/guides/cli/getting-started

Example output showing local development credentials after starting Supabase services. Includes API URL, database URL, Studio URL, Mailpit URL, and authentication keys for client and service role access.

```text
Started supabase local development setup.

         API URL: http://localhost:54321
          DB URL: postgresql://postgres:postgres@localhost:54322/postgres
      Studio URL: http://localhost:54323
     Mailpit URL: http://localhost:54324
        anon key: eyJh......
service_role key: eyJh......
```

---

### Listen and Send Messages via Supabase Client Library

Source: https://supabase.com/docs/guides/realtime/getting_started

Subscribe to broadcast events on a channel to listen for incoming messages and send messages to other connected clients. The client library handles WebSocket connections automatically.

```typescript
// Listen for messages
channel
  .on("broadcast", { event: "message_sent" }, (payload: { payload: any }) => {
    console.log("New message:", payload.payload);
  })
  .subscribe();

// Send a message
channel.send({
  type: "broadcast",
  event: "message_sent",
  payload: {
    text: "Hello, world!",
    user: "john_doe",
    timestamp: new Date().toISOString(),
  },
});
```

---

### Initialize New Vue Project (npm)

Source: https://supabase.com/docs/guides/getting-started/quickstarts/vue

Shows how to create a new Vue.js application using `npm init vue@latest`. This command sets up a basic Vue project structure, prompting for project name and initial configuration.

```shell
npm init vue@latest my-app
```

---

### Create sample instruments table in Postgres

Source: https://supabase.com/docs/guides/database/debugging-performance

SQL commands to create a sample 'instruments' table with id and name columns, then insert three sample records (violin, viola, cello). This setup is used to demonstrate explain() query execution plan output.

```sql
create table instruments (
  id int8 primary key,
  name text
);

insert into instruments
  (id, name)
values
  (1, 'violin'),
  (2, 'viola'),
  (3, 'cello');
```

---

### Installation via Swift Package Manager

Source: https://supabase.com/docs/reference/swift/auth-getclaims

Install Supabase Swift package using Swift Package Manager. The package supports modular installation allowing you to add specific libraries like Auth, Realtime, Postgrest, Functions, and Storage independently or use the complete Supabase package.

````APIDOC
## Installation

### Description
Add the Supabase Swift package to your project dependencies using Swift Package Manager.

### Package Manager Configuration

```swift
let package = Package(
    ...
    dependencies: [
        ...
        .package(
            url: "https://github.com/supabase/supabase-swift.git",
            from: "2.0.0"
        ),
    ],
    targets: [
        .target(
            name: "YourTargetName",
            dependencies: [
                .product(
                    name: "Supabase",
                    package: "supabase-swift"
                ),
            ]
        )
    ]
)
````

### Available Libraries

- `Supabase` - Complete package with all libraries
- `Auth` - Authentication and user management
- `Realtime` - Real-time database subscriptions
- `Postgrest` - PostgreSQL REST API client
- `Functions` - Invoke Deno Edge Functions
- `Storage` - File storage management

````

--------------------------------

### PostgreSQL Logging Level Examples and Output

Source: https://supabase.com/docs/guides/troubleshooting/understanding-postgresql-logging-levels-and-how-they-impact-your-project-KXiJRm

Examples of log messages at different PostgreSQL severity levels, demonstrating what output appears for each log level from DEBUG to PANIC. These examples show real-world log entries that would appear in your database logs when different severity levels are active.

```text
DEBUG:  server process (PID 12345) exited with exit code 0
INFO:  vacuuming "example_schema.public.example_table"
NOTICE:  identifier "very_very_very_long_table_name_exceeding_63_characters" will be truncated to "very_very_very_long_table_name_exceedin"
WARNING:  SET LOCAL can only be used in transaction blocks
LOG:  statement: UPDATE example_table SET column_name = 'Example Value' WHERE id = 10;
ERROR:  relation "exam" does not exist at character 7
FATAL:  role "admin" does not exist
PANIC: database system shutdown requested
````

---

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/swift/auth-getclaims

Create a new user account with email or phone authentication. Email confirmation may be required depending on project settings. Returns user object and session token if email confirmation is disabled, or user object only if confirmation is required.

````APIDOC
## POST /auth/signup

### Description
Create a new user account with email or phone-based authentication. Handles email verification, phone verification, and optional metadata storage.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. One of email or phone must be provided.
- **phone** (string) - Optional - User phone number. One of email or phone must be provided.
- **password** (string) - Required - User password.
- **data** (object) - Optional - Custom metadata object to store additional user information.
- **redirectTo** (string) - Optional - Redirect URL for email signup links. Must be a configured redirect URL.
- **captchaToken** (string) - Optional - CAPTCHA token for verification.

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
````

### Response

#### Success Response (200)

- **user** (object) - User object with id, email, phone, and metadata
- **session** (object) - Session object with access_token and refresh_token (null if email confirmation required)

#### Response Fields

- **user.id** (string) - Unique user identifier
- **user.email** (string) - User email address
- **user.phone** (string) - User phone number
- **user.user_metadata** (object) - Custom metadata provided during signup
- **session.access_token** (string) - JWT access token
- **session.refresh_token** (string) - Token for refreshing access

### Important Notes

- If **Confirm email** is enabled: user returned but session is null
- If **Confirm email** is disabled: both user and session are returned
- For existing confirmed users: returns obfuscated user or 'User already registered' error depending on confirmation settings
- Users redirected to SITE_URL upon email confirmation (customizable)
- Email or phone must be provided, but not both required

````

--------------------------------

### Define Instrument Model in Prisma Schema

Source: https://supabase.com/docs/guides/getting-started/quickstarts/redwoodjs

Create the Instrument data model with an auto-incrementing integer ID and a unique string name field. This model will be used to store musical instrument data in the PostgreSQL database.

```prisma
model Instrument {
  id   Int    @id @default(autoincrement())
  name String @unique
}
````

---

### supabase start

Source: https://supabase.com/docs/reference/cli/global-flags

Starts the Supabase local development stack with all service containers. Requires supabase/config.toml to be created by running supabase init. Health checks are automatically performed to verify container status.

```APIDOC
## supabase start

### Description
Starts the Supabase local development stack. All service containers are started by default. Requires at least 7GB of RAM to start all services.

### Command
```

supabase start [flags]

````

### Flags
- **-x, --exclude** (strings) - Optional - Names of containers to not start. Options: gotrue, realtime, storage-api, imgproxy, kong, mailpit, postgrest, postgres-meta, studio, edge-runtime, logflare, vector, supavisor
- **--ignore-health-check** (boolean) - Optional - Ignore unhealthy services and exit 0

### Usage Example
```bash
supabase start
````

### Response Example

```
Creating custom roles supabase/roles.sql...
Applying migration 20220810154536_employee.sql...
Seeding data supabase/seed.sql...
Started supabase local development setup.
```

### Requirements

- `supabase/config.toml` must exist in current working directory
- Minimum 7GB RAM recommended for all services

````

--------------------------------

### Guide: Applying Filters

Source: https://supabase.com/docs/reference/python/filter

General guide on how to apply filters to `select()`, `update()`, `upsert()`, `delete()` queries, and table-returning Postgres functions. Filters must be applied before `select()` for correct behavior.

```APIDOC
## General: Applying Filters

### Description
General guide on how to apply filters to `select()`, `update()`, `upsert()`, `delete()` queries, and table-returning Postgres functions. Filters must be applied before `select()` for correct behavior.

### Method
N/A

### Endpoint
N/A (Client-side method)

### Parameters
N/A

### Request Example
```python
# Correct
response = (
    supabase.table("instruments")
    .select("name, section_id")
    .eq("name", "flute")
    .execute()
)

# Incorrect
response = (
    supabase.table("instruments")
    .eq("name", "flute")
    .select("name, section_id")
    .execute()
)
````

### Response

N/A

````

--------------------------------

### Authentication: Sign In User with Email/Password (Supabase .NET)

Source: https://supabase.com/docs/reference/csharp/auth-signinwithotp

This C# example demonstrates how to sign in an existing user using their email and password with Supabase Authentication. A successful sign-in returns a user session, enabling further authenticated operations.

```csharp
var session = await supabase.Auth.SignIn(email, password);
````

---

### Start Next.js development server

Source: https://supabase.com/docs/guides/auth/quickstarts/nextjs

Execute the `npm run dev` command to start the Next.js development server. This command compiles and serves your application locally, making it accessible at `http://localhost:3000` in your browser for testing and further development.

```terminal
npm run dev
```

---

### Docker Compose Setup for Postgres Backend Analytics

Source: https://supabase.com/docs/reference/self-hosting-analytics/create-source

Bash commands to clone the Supabase repository and start the Analytics server with Postgres backend using Docker Compose. This sets up both Logflare (HTTP Analytics server) and Vector (logging pipeline) services required for analytics in self-hosted Supabase.

```bash
# clone the supabase/supabase repo, and run the following
cd docker
docker compose -f docker-compose.yml up
```

---

### CLI supabase db start

Source: https://supabase.com/docs/reference/cli/global-flags

Starts the local Supabase development stack, optionally restoring from a backup file. This command initializes or restarts the necessary database services.

```APIDOC
## CLI supabase db start

### Description
Starts the local Supabase development stack, optionally restoring from a backup file. This command initializes or restarts the necessary database services.

### Method
CLI

### Endpoint
supabase db start [flags]

### Parameters
#### Query Parameters
- **--from-backup <string>** (string) - Optional - Path to a logical backup file.

### Request Example
```

supabase db start

```

### Response
#### Success Response (200)
- **message** (string) - Confirmation that the database stack has started.

#### Response Example
```

Starting Supabase database services...
Database started successfully.

```

```

---

### Generate Bash Shell Completion - Supabase CLI

Source: https://supabase.com/docs/reference/cli/supabase-migration-fetch

Generates autocompletion script for bash shell. Requires bash-completion package. Includes setup instructions for loading completions in current session or system-wide installation on Linux and macOS.

```bash
source <(supabase completion bash)
supabase completion bash > /etc/bash_completion.d/supabase
```

---

### Start React Native Development Server

Source: https://supabase.com/docs/guides/auth/quickstarts/react-native

Command-line instruction to start the React Native development server. Launches the Metro bundler which compiles the application and enables hot-reloading during development.

```bash
npm start
```

---

### Generate CRUD Scaffold for Instrument Model

Source: https://supabase.com/docs/guides/getting-started/quickstarts/redwoodjs

Use RedwoodJS code generators to automatically create a complete CRUD user interface for the Instrument model. This generates pages, components, and API services for managing instrument data.

```bash
yarn rw g scaffold instrument
```

---

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/swift/not

Create a new user account with email or phone authentication. Returns user object and optional session depending on email/phone confirmation settings in project configuration.

````APIDOC
## POST /auth/signup

### Description
Creates a new user account with email or phone-based authentication. The response includes a user object and conditionally includes a session based on confirmation email settings.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Optional - Email address. One of email or phone must be provided.
- **phone** (string) - Optional - Phone number. One of email or phone must be provided.
- **password** (string) - Required - User password.
- **data** (object) - Optional - Custom JSON object for storing additional user metadata.
- **redirectTo** (string) - Optional - Email signup only. Redirect URL embedded in email link. Must be a configured redirect URL for the Supabase instance.
- **captchaToken** (string) - Optional - CAPTCHA token for verification.

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
````

### Response

#### Success Response (200)

- **user** (object) - User object with id, email, phone, user_metadata, and other user details
  - **id** (string) - User UUID
  - **email** (string) - User email address
  - **phone** (string) - User phone number
  - **user_metadata** (object) - Custom metadata provided during signup
- **session** (object) - Session object (null if email confirmation is enabled)
  - **access_token** (string) - JWT access token
  - **refresh_token** (string) - JWT refresh token
  - **expires_in** (number) - Token expiration time in seconds

### Important Notes

- If **Confirm email** is enabled: user returned but session is null
- If **Confirm email** is disabled: both user and session are returned
- User must verify email before login if confirmation is enabled
- Redirect URL must be configured in project settings
- For existing confirmed users: returns obfuscated user object or "User already registered" error
- After email verification, users are redirected to SITE_URL by default

````

--------------------------------

### Installation

Source: https://supabase.com/docs/reference/python/auth-exchangecodeforsession

Install the Supabase Python client library via PyPI. Supports Python versions greater than 3.8.

```APIDOC
## Installation

### Description
Install the Supabase Python client library (supabase-py) via PyPI package manager.

### Installation Command
```bash
pip install supabase
````

### Requirements

- Python > 3.8

### Supported Installation Methods

- PyPI (pip)
- Conda

````

--------------------------------

### Update Prisma Schema to Use PostgreSQL with Supabase

Source: https://supabase.com/docs/guides/getting-started/quickstarts/redwoodjs

Configure the Prisma datasource in api/db/schema.prisma to use PostgreSQL provider with Supabase connection environment variables. The directUrl setting enables Prisma to use the session pooler for migrations.

```prisma
datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
````

---

### Auth Admin Client Setup

Source: https://supabase.com/docs/reference/swift/auth-getclaims

Provides guidance on setting up a server-side Supabase authentication client using a `service_role` key, which is required for admin-level operations.

````APIDOC
## Auth Admin Client Setup

### Description
This section describes how to instantiate a Supabase client for admin operations. Admin methods require a `service_role` key and should only be used on a trusted server environment to avoid exposing sensitive keys.

### Method
N/A (SDK Client Setup)

### Endpoint
N/A

### Parameters
No API parameters. This describes SDK client instantiation.

### Request Example
```swift
import Supabase

let supabase = SupabaseClient(
  supabaseURL: supabaseURL,
  supabaseKey: serviceRoleKey
)

// Access auth admin api
let adminAuthClient = supabase.auth.admin
````

### Response

N/A

````

--------------------------------

### Avoid Broad Topics in Supabase Realtime JavaScript

Source: https://supabase.com/docs/guides/getting-started/ai-prompts/use-realtime

Example of poor topic design that broadcasts to all users regardless of relevance. This anti-pattern should be avoided as it wastes bandwidth and reduces scalability by sending messages to uninterested listeners.

```javascript
// This broadcasts to ALL users, even those not interested
const channel = supabase.channel('global:notifications')
````

---

### Install Prisma Client and Generate Models

Source: https://supabase.com/docs/guides/database/prisma

Installs the Prisma Client package and generates type-safe database client based on the current schema. Required before using Prisma in application code.

```bash
npm install @prisma/client
npx prisma generate
```

---

### Implement Basic Routing in Deno with Hono

Source: https://supabase.com/docs/guides/functions/routing

This example demonstrates how to set up basic GET and POST routes within a Deno Edge Function using the Hono web framework. It defines '/hello-world' endpoints to handle JSON requests and simple text responses, showing how to consolidate multiple actions into a single function.

```typescript
import { Hono } from "jsr:@hono/hono";

const app = new Hono();

app.post("/hello-world", async (c) => {
  const { name } = await c.req.json();
  return new Response(`Hello ${name}!`);
});

app.get("/hello-world", (c) => {
  return new Response("Hello World!");
});

Deno.serve(app.fetch);
```

---

### Multi-line Select Query (Postgres SQL)

Source: https://supabase.com/docs/guides/getting-started/ai-prompts/code-format-sql

Provides an example of a larger `SELECT` query formatted across multiple lines with clear indentation and line breaks for improved readability, especially when dealing with several columns and conditions.

```sql
select
  first_name,
  last_name
from
  employees
where
  start_date between '2021-01-01' and '2021-12-31'
and
  status = 'employed';
```

---

### GET /explain - Get Query Execution Plan

Source: https://supabase.com/docs/reference/dart/storage-emptybucket

Debug slow queries by retrieving the Postgres EXPLAIN execution plan. This method provides detailed information about how the database will execute your query, including optional analysis of actual runtime and resource usage.

````APIDOC
## GET /explain

### Description
Get the Postgres EXPLAIN execution plan for a query for performance debugging.

### Parameters
#### Query Parameters
- **analyze** (bool) - Optional - If `true`, execute the query and return actual run time
- **verbose** (bool) - Optional - If `true`, return query identifier and output columns
- **settings** (bool) - Optional - If `true`, include configuration parameters affecting query planning
- **buffers** (bool) - Optional - If `true`, include buffer usage information
- **wal** (bool) - Optional - If `true`, include WAL record generation information

### Request Example
```dart
final data = await supabase
  .from('instruments')
  .select()
  .explain();
````

### Response

#### Success Response (200)

- **data** (Object) - Execution plan details with EXPLAIN output

### Security Notes

- Not enabled by default (can reveal sensitive database information)
- Recommended only for testing environments
- Use pre-request functions for additional protection in production
- Requires manual enablement on the project

### Notes

- Works with any query type (select, rpc, writes)
- Enable via Performance Debugging Guide
- Use analyze option to get actual execution metrics

````

--------------------------------

### POST Sign Up User

Source: https://supabase.com/docs/reference/swift/auth-signinwithpassword

Create a new user account with email and password credentials. Supports optional metadata, custom redirect URLs, and phone-based sign-up. Email verification may be required depending on project settings.

```APIDOC
## POST Sign Up User

### Description
Create a new user account with email or phone and password. Optionally include user metadata and redirect URLs. Email or phone confirmation may be required based on project settings.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. Either email or phone is required.
- **phone** (string) - Optional - User phone number. Either email or phone is required.
- **password** (string) - Required - User password
- **data** (JSONObject) - Optional - Custom metadata object for storing additional user information
- **redirectTo** (URL) - Optional - Email sign-up only. Redirect URL embedded in confirmation email. Must be a configured redirect URL.
- **captchaToken** (string) - Optional - CAPTCHA token for bot protection

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
````

### Response

#### Success Response (200)

- **user** (object) - User object with id, email/phone, and metadata. Null if email confirmation is required.
- **session** (object) - Session object with access token and refresh token. Null if confirmation required.

#### Success Response (202) - Confirmation Required

- **user** (object) - Obfuscated user object when both confirm email and phone are enabled
- **session** (null) - Session is null until email/phone is confirmed

### Error Handling

#### 400 Bad Request

- User already registered (when confirm email/phone disabled)
- Missing required fields
- Invalid email/phone format

### Notes

- If Confirm email is enabled, user must verify email before first login
- If Confirm email is disabled, user receives session immediately
- User is redirected to SITE_URL after email confirmation by default
- Custom redirect URLs can be configured in project settings
- For existing confirmed users with confirm email/phone enabled, obfuscated user object is returned

````

--------------------------------

### GET /range - Limit Query to Range

Source: https://supabase.com/docs/reference/dart/auth-getsession

Limit the result set to rows within a specified range using starting and ending indices (inclusive). Useful for pagination and retrieving specific subsets of data.

```APIDOC
## range()

### Description
Limits the result to rows within the specified range, inclusive. Commonly used for pagination.

### Method
GET (when used with select())

### Parameters
- **from** (int) - Required - The starting index from which to limit the result.
- **to** (int) - Required - The last index to which to limit the result.
- **referencedTable** (String) - Optional - Set this to limit rows of referenced tables instead of the parent table.

### Usage Example
```dart
final data = await supabase
  .from('instruments')
  .select('name')
  .range(0, 1)
````

### Compatible With

- select()
- Pagination scenarios

````

--------------------------------

### Illustrate Recommended Supabase Edge Functions Project Structure

Source: https://supabase.com/docs/guides/functions/development-environment

This directory tree outlines the recommended organizational structure for Supabase Edge Functions, promoting best practices such as centralizing functions, shared utilities in an `_shared` directory, and separate testing folders. Adhering to this structure helps minimize cold starts, improves maintainability, and ensures a clean, scalable functions codebase.

```plaintext
└── supabase
    ├── functions
    │   ├── import_map.json     # Top-level import map
    │   ├── _shared             # Shared code (underscore prefix)
    │   │   ├── supabaseAdmin.ts # Supabase client with SERVICE_ROLE key
    │   │   ├── supabaseClient.ts # Supabase client with ANON key
    │   │   └── cors.ts         # Reusable CORS headers
    │   ├── function-one        # Use hyphens for function names
    │   │   └── index.ts
    │   └── function-two
    │       └── index.ts
    ├── tests
    │   ├── function-one-test.ts
    │   └── function-two-test.ts
    ├── migrations
    └── config.toml
````

---

### Create Instruments Table and Insert Sample Data with SQL

Source: https://supabase.com/docs/guides/getting-started/quickstarts/ios-swiftui

SQL script that creates an `instruments` table with auto-incrementing ID and name fields, inserts three sample musical instrument records, and enables row-level security. This should be executed in the Supabase SQL Editor to set up the database structure and initial data.

```sql
-- Create the table
create table instruments (
  id bigint primary key generated always as identity,
  name text not null
);
-- Insert some sample data into the table
insert into instruments (name)
values
  ('violin'),
  ('viola'),
  ('cello');

alter table instruments enable row level security;
```

---

### POST /auth/v1/signup

Source: https://supabase.com/docs/reference/csharp/eq

Creates a new user account with the provided email and password. Email verification might be required based on project settings.

````APIDOC
## POST /auth/v1/signup

### Description
Creates a new user in the system. By default, email verification is required unless disabled in project settings.

- If `Confirm email` is enabled, a `user` object is returned, but `session` is null.
- If `Confirm email` is disabled, both a `user` and a `session` are returned.

### Method
POST

### Endpoint
/auth/v1/signup (handled by `supabase.Auth.SignUp` client method)

### Parameters
#### Request Body
- **email** (string) - Required - The user's email address.
- **password** (string) - Required - The user's chosen password.

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
````

### Response

#### Success Response (200)

- **session** (object) - The authentication session object.
  - **user** (object) - The newly created user object.
  - **session** (object | null) - The session details, null if email confirmation is enabled.

#### Response Example (Confirm email disabled)

```json
{
  "access_token": "eyJ...",
  "token_type": "bearer",
  "expires_in": 3600,
  "refresh_token": "xyz...",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "aud": "authenticated",
    "role": "authenticated"
  }
}
```

#### Response Example (Confirm email enabled)

```json
{
  "access_token": null,
  "token_type": null,
  "expires_in": null,
  "refresh_token": null,
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "aud": "authenticated",
    "role": "authenticated"
  }
}
```

#### Error Response (400)

- If `SignUp()` is called for an existing confirmed user and confirmation settings allow, an obfuscated/fake user object is returned.
- If `SignUp()` is called for an existing confirmed user and confirmation settings require, an error message, `User already registered` is returned.

```json
{
  "error": "User already registered"
}
```

````

--------------------------------

### Fetch and Display Data from Supabase - React JSX

Source: https://supabase.com/docs/guides/getting-started/quickstarts/reactjs

React component that initializes a Supabase client, fetches instruments from the database on component mount, and renders them as a list. Uses hooks (useState, useEffect) for state management and lifecycle handling.

```javascript
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

function App() {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    getInstruments();
  }, []);

  async function getInstruments() {
    const { data } = await supabase.from("instruments").select();
    setInstruments(data);
  }

  return (
    <ul>
      {instruments.map((instrument) => (
        <li key={instrument.name}>{instrument.name}</li>
      ))}
    </ul>
  );
}

export default App;
````

---

### Comprehensive Basic Example: Create Foreign Table and Query Notion Pages in PostgreSQL

Source: https://supabase.com/docs/guides/database/extensions/wrappers/notion

A full, runnable example demonstrating the creation of a `notion.pages` foreign table and subsequent SQL queries. It shows how to retrieve all pages and how to filter for a specific page by its `id`, illustrating fundamental interaction with Notion page data.

```sql
create foreign table notion.pages (
  id text,
  url text,
  created_time timestamp,
  last_edited_time timestamp,
  archived boolean,
  attrs jsonb
)
  server notion_server
  options (
    object 'page'
  );

-- query all pages
select * from notion.pages;

-- query one page
select * from notion.pages
where id = '5a67c86f-d0da-4d0a-9dd7-f4cf164e6247';
```

---

### POST /auth/signup - Create a New User

Source: https://supabase.com/docs/reference/swift/auth-exchangecodeforsession

Register a new user with email or phone number and password. Supports optional user metadata and custom redirect URLs. Email confirmation requirement is configurable in project settings.

````APIDOC
## POST /auth/signup

### Description
Create a new user account with email or phone authentication. Returns user object and optional session based on email/phone confirmation settings.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (String) - Optional - User email address. One of email or phone required.
- **phone** (String) - Optional - User phone number. One of email or phone required.
- **password** (String) - Required - User password
- **data** (JSONObject) - Optional - Custom metadata object for additional user information
- **redirectTo** (URL) - Optional - Redirect URL for email confirmation link (email signups only). Must be configured in project settings.
- **captchaToken** (String) - Optional - CAPTCHA token for bot protection

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
````

### Response

#### Success Response (200)

- **user** (User) - New user object with id, email/phone, and metadata
- **session** (Session) - Optional authentication session (null if email confirmation required)

### Important Notes

- **Confirm Email** setting determines if verification is required
  - If enabled: user returned, session is null
  - If disabled: both user and session returned
- Users redirected to SITE_URL after email confirmation (configurable)
- For existing confirmed users: returns obfuscated user if confirmation enabled, or "User already registered" error if disabled
- Use getUser() to fetch currently logged-in user

### Variations

- Sign up with email and password
- Sign up with phone number and password (SMS)
- Sign up with phone number and password (WhatsApp)
- Sign up with additional user metadata
- Sign up with custom redirect URL

````

--------------------------------

### Expected JSON Response from Edge Function

Source: https://supabase.com/docs/guides/functions/quickstart

This JSON object represents the typical successful response from the `hello-world` Edge Function after receiving a valid name in its payload. It confirms the function processed the input and returned the expected greeting message.

```json
{ "message": "Hello Functions!" }
````

---

### Create Prisma Database Seed Script for Instruments

Source: https://supabase.com/docs/guides/getting-started/quickstarts/redwoodjs

Develop a TypeScript seed script in scripts/seed.ts that populates the Instrument table with sample data including dulcimer, harp, and guitar. The script uses Prisma Client to create multiple instrument records and includes error handling.

```typescript
import type { Prisma } from "@prisma/client";
import { db } from "api/src/lib/db";

export default async () => {
  try {
    const data: Prisma.InstrumentCreateArgs["data"][] = [
      { name: "dulcimer" },
      { name: "harp" },
      { name: "guitar" },
    ];

    console.log("Seeding instruments ...");

    const instruments = await db.instrument.createMany({ data });

    console.log("Done.", instruments);
  } catch (error) {
    console.error(error);
  }
};
```

---

### GET /from() - Query Explain Plan

Source: https://supabase.com/docs/reference/kotlin/auth-linkidentity

Retrieves the Postgres EXPLAIN execution plan for debugging slow queries. This endpoint helps identify performance bottlenecks by showing how the database executes your query.

````APIDOC
## GET /from() - Query Explain Plan

### Description
Get the Postgres `EXPLAIN` execution plan of a query for performance debugging. Works on any query including `rpc()` and write operations.

### Method
GET

### Endpoint
from("table_name").select()

### Parameters
#### Query Parameters
- **analyze** (Boolean) - Optional - If `true`, execute the query and return actual run time
- **verbose** (Boolean) - Optional - If `true`, return query identifier and output columns
- **settings** (Boolean) - Optional - If `true`, include configuration parameters affecting query planning
- **buffers** (Boolean) - Optional - If `true`, include buffer usage information
- **wal** (Boolean) - Optional - If `true`, include WAL record generation information
- **format** (String) - Optional - Output format: `"text"` (default) or `"json"`

### Request Example
```kotlin
val result = supabase.from("characters").select {
    explain()
}
````

### Response

#### Success Response (200)

- **result** (Object) - Execution plan details in specified format

### Notes

- Explain is not enabled by default as it may reveal sensitive database information
- Best used in testing environments only
- For production use, enable via Performance Debugging Guide with appropriate protection
- Requires pre-request function configuration for production environments

````

--------------------------------

### Start Local Supabase Stack

Source: https://supabase.com/docs/guides/cli

Start the Supabase development stack on your local machine. This command launches all necessary services including Postgres database, Auth, Storage, and other Supabase features.

```bash
npx supabase start
````

---

### Example: Enable Aggregate for BlogPost Table

Source: https://supabase.com/docs/guides/graphql/configuration

This example shows the creation of a `BlogPost` table followed by a comment directive to enable the `aggregate` field for its GraphQL Connection type, allowing clients to perform aggregate queries.

```SQL
create table "BlogPost"(
    id serial primary key,
    title varchar(255) not null,
    rating int not null
);
comment on table "BlogPost" is e'@graphql({"aggregate": {"enabled": true}})';
```

---

### Authentication: Create a New User (Supabase .NET)

Source: https://supabase.com/docs/reference/csharp/auth-signinwithotp

This C# example demonstrates how to create a new user in Supabase Authentication using an email and password. The outcome regarding session and email verification depends on project settings, specifically the 'Confirm email' option.

```csharp
var session = await supabase.Auth.SignUp(email, password);
```

---

### Download Edge Function Source Code with Supabase CLI

Source: https://supabase.com/docs/guides/functions/quickstart-dashboard

Downloads a specific Edge Function's source code from a deployed Supabase project to the local development environment. Allows developers to modify and redeploy functions.

```bash
# Download a function
supabase functions download hello-world
```

---

### Start Supabase Local Development Stack

Source: https://supabase.com/docs/reference/cli/global-flags

Initiates the Supabase local development environment, including all services. This command requires a `supabase/config.toml` file to be present and can be customized with flags to exclude specific services or ignore health checks.

```bash
supabase start [flags]
```

---

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/swift/rpc

Register a new user with email or phone number and password. Supports additional metadata and redirect URLs. Email confirmation behavior depends on project settings.

````APIDOC
## POST /auth/signup - Create New User

### Description
Sign up a new user with email or phone authentication. Returns user object and session based on confirmation settings.

### Method
POST

### Endpoint
`/auth/v1/signup`

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. One of email or phone required.
- **phone** (string) - Optional - User phone number. One of email or phone required.
- **password** (string) - Required - User password
- **data** (JSONObject) - Optional - Custom metadata object for storing additional user information
- **redirectTo** (URL) - Optional - Redirect URL for email signup links. Must be configured in Supabase instance.
- **captchaToken** (string) - Optional - CAPTCHA token for verification

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
````

### Response

#### Success Response (200)

- **user** (object) - User object with id, email, and metadata
- **session** (object) - Session object (null if email confirmation enabled)

#### Response Example

```json
{
  "user": {
    "id": "user-uuid",
    "email": "example@email.com",
    "user_metadata": {}
  },
  "session": {
    "access_token": "token",
    "refresh_token": "token",
    "expires_in": 3600
  }
}
```

### Notes

- If Confirm email is enabled: user returned but session is null
- If Confirm email is disabled: both user and session returned
- Users are redirected to SITE_URL after email confirmation
- For existing confirmed users with confirmation enabled: fake user object returned
- For existing confirmed users with confirmation disabled: 'User already registered' error
- Use getUser() to fetch currently logged-in user

````

--------------------------------

### GET /customer/v1/privileged/metrics - Supabase Metrics API

Source: https://supabase.com/docs/guides/telemetry/metrics/vendor-agnostic

The Supabase Metrics API endpoint provides Prometheus-format metrics for your project. This endpoint requires HTTP Basic Auth with a service role key or JWT token and should be scraped once per minute by your collector.

```APIDOC
## GET /customer/v1/privileged/metrics

### Description
Retrieve Prometheus-format metrics for your Supabase project. This vendor-agnostic endpoint can be scraped by any Prometheus-compatible collector including Grafana Agent, AWS Managed Prometheus, VictoriaMetrics, Mimir, Thanos, and others.

### Method
GET

### Endpoint
https://<project-ref>.supabase.co:443/customer/v1/privileged/metrics

### Parameters
#### Path Parameters
- **project-ref** (string) - Required - Your Supabase project reference identifier

#### Authentication
- **Basic Auth** - Required
  - username: `service_role`
  - password: Service role key or JWT token

### Request Example
```yaml
job_name: supabase
scrape_interval: 60s
metrics_path: /customer/v1/privileged/metrics
scheme: https
basic_auth:
  username: service_role
  password: '<service-role key or JWT>'
static_configs:
  - targets:
      - '<project-ref>.supabase.co:443'
    labels:
      project: '<project-ref>'
````

### Response

#### Success Response (200 - text/plain)

Prometheus-format metrics output containing:

- CPU metrics
- I/O metrics
- WAL metrics
- Replication metrics
- Connection metrics
- Custom application metrics

#### Response Example

```
# HELP supabase_cpu_usage CPU usage percentage
# TYPE supabase_cpu_usage gauge
supabase_cpu_usage{project="abc123"} 45.2

# HELP supabase_connections Active database connections
# TYPE supabase_connections gauge
supabase_connections{project="abc123"} 128

# HELP supabase_io_operations I/O operations per second
# TYPE supabase_io_operations gauge
supabase_io_operations{project="abc123"} 1024
```

### Scrape Configuration Requirements

- **Frequency:** Once per minute (60s interval)
- **Protocol:** HTTPS only
- **Authentication:** HTTP Basic Auth with service_role credentials
- **Supported Collectors:**
  - Prometheus
  - Grafana Agent / Alloy (use `prometheus.scrape` component)
  - AWS Managed Prometheus (ADOT)
  - VictoriaMetrics Agent
  - Grafana Mimir
  - Thanos

### Security Best Practices

- Store service role key in a secrets manager (AWS Secrets Manager, GCP Secret Manager, Vault)
- Rotate credentials periodically via Project Settings → API keys
- For vendor access, create a dedicated service key for metrics-only automation
- Use label relabeling to organize metrics by `project`, `env`, or `team`

````

--------------------------------

### Configure Ktor client engine for Kotlin Multiplatform

Source: https://supabase.com/docs/reference/kotlin/auth-api

This example shows how to configure different Ktor client engines for specific Kotlin Multiplatform targets (JVM, Android, JS, iOS) within a `build.gradle.kts` file. This setup ensures that the appropriate engine is used based on the target platform's capabilities and requirements.

```kotlin
commonMain {
    dependencies {
        //Supabase modules
    }
}
jvmMain {
    dependencies {
        implementation("io.ktor:ktor-client-cio:KTOR_VERSION")
    }
}
androidMain {
    dependsOn(jvmMain.get())
}
jsMain {
    dependencies {
        implementation("io.ktor:ktor-client-js:KTOR_VERSION")
    }
}
iosMain {
    dependencies {
        implementation("io.ktor:ktor-client-darwin:KTOR_VERSION")
    }
}
````

---

### EXPLAIN - Get Query Execution Plan

Source: https://supabase.com/docs/reference/python/ilike

Get the Postgres EXPLAIN execution plan for debugging slow queries. Provides insights into query performance with optional analysis and detailed output formatting.

````APIDOC
## EXPLAIN - Get Query Execution Plan

### Description
For debugging slow queries, get the Postgres EXPLAIN execution plan of a query. Works on any query including rpc() and write operations. Must be enabled on project for security reasons.

### Method
Modifier for any query type

### Parameters
- **wal** (boolean) - Optional - If true, include information on WAL record generation
- **verbose** (boolean) - Optional - If true, include query identifier and output columns
- **settings** (boolean) - Optional - If true, include configuration parameters affecting query planning
- **format** ("text" | "json") - Optional - The format of the output (default: "text")
- **buffers** (boolean) - Optional - If true, include information on buffer usage
- **analyze** (boolean) - Optional - If true, execute the query and return actual run time

### Request Example
```python
response = (
    supabase.table("planets")
    .select("*")
    .explain()
    .execute()
)
````

### Response

Returns Postgres EXPLAIN output in specified format (text or JSON) with query execution plan details.

````

--------------------------------

### Schedule cron job to call stored procedure - SQL

Source: https://supabase.com/docs/guides/cron/quickstart

Executes a PostgreSQL stored procedure on a schedule using the CALL statement. This example runs every 5 minutes and demonstrates how to invoke procedures instead of functions with cron jobs.

```sql
select cron.schedule('call-db-procedure', '*/5 * * * *', 'CALL my_procedure()');
````

---

### Supabase Start Command Response

Source: https://supabase.com/docs/reference/cli/global-flags

Output indicating the successful startup of the Supabase local development environment. It shows steps like creating roles, applying migrations, and seeding data, confirming the services are active.

```text
Creating custom roles supabase/roles.sql...
Applying migration 20220810154536_employee.sql...
Seeding data supabase/seed.sql...
Started supabase local development setup.
```

---

### Example response for `supabase db reset` command

Source: https://supabase.com/docs/reference/cli/supabase-branches-delete

An example of the output received when the `supabase db reset` command successfully completes. It shows the sequence of operations including schema initialization, migration application, and seed data loading.

```text
Resetting database...
Initializing schema...
Applying migration 20220810154537_create_employees_table.sql...
Seeding data supabase/seed.sql...
Finished supabase db reset on branch main.
```

---

### GET /realtime/v1/changes (Subscription)

Source: https://supabase.com/docs/reference/kotlin/start

Provides real-time data from a database table as a Flow, emitting initial data and subsequent changes. This method requires both the `Realtime` and `Postgrest` plugins to be installed and Realtime enabled for the table. It takes a filter and a primary key for caching and filtering.

```APIDOC
## GET /realtime/v1/changes (Subscription)

### Description
Provides real-time data from a database table as a Flow, emitting initial data and subsequent changes. This method requires both the `Realtime` and `Postgrest` plugins to be installed and Realtime enabled for the table. It takes a filter and a primary key for caching and filtering.

### Method
GET (Conceptual for WebSocket subscription)

### Endpoint
/realtime/v1/changes

### Parameters
#### Query Parameters
- **schema** (String) - Required - The database schema to listen to (e.g., 'public').
- **table** (String) - Required - The name of the table to listen for changes.
- **filter** (String) - Optional - A PostgREST filter expression to narrow down the streamed data (e.g., `id=eq.1`).
- **primaryKey** (String) - Optional - The primary key column name used for caching and identifying records.
- **event** (String) - Optional - Filter for specific event types (e.g., 'INSERT', 'UPDATE', 'DELETE', '*'). Defaults to '*'.

#### Request Example
```

// Example using Supabase Kotlin SDK, assuming 'selectAsFlow' is available.
// This is a conceptual representation as 'selectAsFlow' abstracts the Realtime subscription.

data class MyTableItem(val id: Int, val name: String)

supabase.from("my_table")
.select()
.filter { eq("status", "active") }
.order("id")
.decodeList<MyTableItem>()
.collectAsFlow() // This is the conceptual 'flow'
.collect { items ->
println("Realtime update: $items")
}

````

### Response
#### Success Response (Stream of Events)
- **type** (String) - The type of Realtime event (e.g., 'INSERT', 'UPDATE', 'DELETE').
- **table** (String) - The name of the table affected.
- **schema** (String) - The schema of the table.
- **record** (Object) - The new state of the row (for INSERT/UPDATE).
- **old_record** (Object) - The previous state of the row (for UPDATE/DELETE).
- **columns** (array<object>) - Metadata about affected columns.

#### Response Example
```json
{
  "type": "UPDATE",
  "table": "my_table",
  "schema": "public",
  "record": {
    "id": 1,
    "name": "Updated Item"
  },
  "old_record": {
    "id": 1,
    "name": "Original Item"
  },
  "columns": [
    {
      "name": "id",
      "type": "int4"
    },
    {
      "name": "name",
      "type": "text"
    }
  ]
}
````

````

--------------------------------

### POST /auth/v1/signup

Source: https://supabase.com/docs/reference/csharp/using-filters

Creates a new user account with email and password. Email verification may be required depending on project settings. Returns user and session information based on confirmation settings.

```APIDOC
## POST /auth/v1/signup

### Description
Creates a new user account. Email verification can be configured in project settings.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Request Body
- **email** (string) - Required - User's email address
- **password** (string) - Required - User's password

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
````

### Response

#### Success Response (200)

- **user** (object) - User object with ID and email
- **session** (object|null) - Session object if confirmation disabled, null if confirmation required
  - **access_token** (string) - JWT access token
  - **refresh_token** (string) - Refresh token
  - **expires_in** (integer) - Token expiration in seconds

#### Response Example

```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "created_at": "2024-01-01T00:00:00Z"
  },
  "session": {
    "access_token": "eyJ...",
    "refresh_token": "token...",
    "expires_in": 3600
  }
}
```

### Notes

- If **Confirm email** is enabled: user is returned but session is null
- If **Confirm email** is disabled: both user and session are returned
- Redirect URL defaults to SITE_URL on email confirmation
- If user already exists and confirmation enabled: obfuscated user object returned

````

--------------------------------

### v2.0 Migration Guide

Source: https://supabase.com/docs/reference/dart/auth-mfa-api

Guide for upgrading from supabase_flutter v1 to v2. Covers breaking changes including configuration reorganization, Auth provider renaming, and session handling updates.

```APIDOC
## Supabase Flutter v1 to v2 Upgrade Guide

### Overview
supabase_flutter v2 introduces breaking changes but maintains similar public API. Key updates include configuration reorganization, Auth improvements, and faster initialization.

### Update pubspec.yaml
Ensure your pubspec.yaml specifies v2.0.0 or later:
```yaml
supabase_flutter: ^2.0.0
````

### Configuration Changes

Custom configuration is now organized into separate options objects instead of flat parameters.

#### Before (v1)

```dart
await Supabase.initialize(
  url: supabaseUrl,
  anonKey: supabaseKey,
  authFlowType: AuthFlowType.pkce,
  storageRetryAttempts: 10,
  realtimeClientOptions: const RealtimeClientOptions(
    logLevel: RealtimeLogLevel.info,
  ),
);
```

#### After (v2)

```dart
await Supabase.initialize(
  url: supabaseUrl,
  anonKey: supabaseKey,
  authOptions: FlutterAuthClientOptions(authFlowType: AuthFlowType.pkce),
  storageOptions: StorageClientOptions(retryAttempts: 10),
  realtimeClientOptions: const RealtimeClientOptions(
    logLevel: RealtimeLogLevel.info,
  ),
);
```

### Auth Breaking Changes

#### 1. Provider renamed to OAuthProvider

**Before (v1)**

```dart
await supabase.auth.signInWithOAuth(
  Provider.google,
);
```

**After (v2)**

```dart
await supabase.auth.signInWithOAuth(
  OAuthProvider.google,
);
```

#### 2. Sign in with Apple deprecated

- Removed sign_in_with_apple dependency
- Install separately if needed: `flutter pub add sign_in_with_apple`
- Use new `auth.generateRawNonce()` method for Apple sign-in nonces

#### 3. Faster initialization, deferred session refresh

**Before (v1)**

```dart
// Session was guaranteed to be refreshed
final session = supabase.auth.currentSession;
```

**After (v2)**

```dart
// Session from local storage only - may be expired
final session = supabase.auth.currentSession;

// Check if session is expired
if (session?.isExpired ?? false) {
  // Listen for token refresh
  supabase.auth.onAuthStateChange.listen((data) {
    if (data.event == AuthChangeEvent.tokenRefreshed) {
      // Session is now valid
    }
  });
}
```

### Benefits of v2

- Faster app launch times
- Reduced dependency conflicts with provider package
- More intuitive Flutter and Dart developer experience
- Better control over initialization and session management

````

--------------------------------

### Check and Install Extensions in Supabase

Source: https://supabase.com/docs/guides/platform/migrating-to-supabase/postgres

SQL queries to verify available extensions in Supabase, compare with source database extensions, and install required extensions. Use these commands to ensure all necessary Postgres extensions are available and installed in your target Supabase database.

```SQL
-- Connect to your Supabase database and check available extensions
SELECT name, comment FROM pg_available_extensions ORDER BY name;

-- Compare with source database extensions
SELECT extname FROM pg_extension ORDER BY extname;

-- Install needed extensions
CREATE EXTENSION IF NOT EXISTS extension_name;
````

---

### Configure Private Channel in Supabase Client

Source: https://supabase.com/docs/guides/realtime/getting_started

Initializes a Supabase Realtime channel with private channel configuration enabled. Private channels ensure proper security and authorization in production applications by restricting access based on user permissions and RLS policies.

```typescript
const channel = supabase.channel("room:123:messages", {
  config: { private: true },
});
```

---

### POST /auth - Initialize Auth Client

Source: https://supabase.com/docs/reference/swift/installing

Create and initialize a Supabase authentication client with project credentials. Provides access to all authentication methods through the supabase.auth namespace.

````APIDOC
## POST /auth - Create Auth Client

### Description
Initializes a Supabase authentication client with your project URL and API key. All auth methods are accessible via the returned supabase.auth namespace.

### Method
POST

### Endpoint
/auth

### Parameters
#### Request Body
- **supabaseURL** (URL) - Required - Your Supabase project URL (format: https://[project-id].supabase.co)
- **supabaseKey** (String) - Required - Your Supabase publishable or anonymous API key
- **storage** (custom) - Optional - Custom storage implementation for session management

### Request Example
```swift
let supabase = SupabaseClient(
  supabaseURL: URL(string: "https://xyzcompany.supabase.co")!,
  supabaseKey: "publishable-or-anon-key"
)
let auth = supabase.auth
````

### Response

#### Success Response (200)

- **auth** (AuthClient) - Initialized authentication client instance
- **namespace** (supabase.auth) - Access point for all auth methods

### Notes

- supabaseURL and supabaseKey are required for client initialization
- Custom storage can be provided for session persistence
- All subsequent auth operations use this initialized client

````

--------------------------------

### Send Messages via HTTP/REST API

Source: https://supabase.com/docs/guides/realtime/getting_started

Send broadcast messages to Realtime channels using HTTP POST requests with the service role key. This approach is ideal for server-side applications that need to send messages without maintaining WebSocket connections.

```typescript
// Send message via REST API
const response = await fetch(`https://<project>.supabase.co/rest/v1/rpc/broadcast`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer <your-service-role-key>`,
    apikey: '<your-service-role-key>',
  },
  body: JSON.stringify({
    topic: 'room:lobby:messages',
    event: 'message_sent',
    payload: {
      text: 'Hello from server!',
      user: 'system',
      timestamp: new Date().toISOString(),
    },
    private: true,
  }),
})
````

---

### Create Row Level Security Policies for Authenticated Users

Source: https://supabase.com/docs/guides/realtime/getting_started

Create SQL RLS policies on the realtime.messages table to authorize authenticated users to send and receive broadcast messages. These policies control access to Realtime channels based on user authentication.

```sql
-- Allow authenticated users to receive broadcasts
CREATE POLICY "authenticated_users_can_receive" ON realtime.messages
  FOR SELECT TO authenticated USING (true);

-- Allow authenticated users to send broadcasts
CREATE POLICY "authenticated_users_can_send" ON realtime.messages
  FOR INSERT TO authenticated WITH CHECK (true);
```

---

### POST /auth/signup

Source: https://supabase.com/docs/reference/csharp/storage-getbucket

Creates a new user account with email and password. User may need to verify their email address before logging in, depending on project configuration.

````APIDOC
## POST /auth/signup

### Description
Creates a new user account. By default, the user needs to verify their email address before logging in. If email confirmation is disabled, both user and session are returned immediately.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Required - User's email address
- **password** (string) - Required - User's password

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
````

### Response

#### Success Response (200)

- **user** (object) - User object with ID and email
- **session** (object or null) - Session object if email confirmation disabled, null if enabled

#### Response Example

```json
{
  "user": {
    "id": "user-uuid",
    "email": "user@example.com"
  },
  "session": null
}
```

#### Error Response (400)

- **error** (string) - Error message (e.g., "User already registered")

````

--------------------------------

### Initialize Supabase Client in Refine TypeScript

Source: https://supabase.com/docs/guides/getting-started/quickstarts/refine

Initializes a Supabase client instance using `@refinedev/supabase` package with project URL and API key. Configures schema, authentication persistence, and session management. This client is used by auth and data providers to connect the Refine app to the Supabase backend.

```typescript
import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = YOUR_SUPABASE_URL;
const SUPABASE_KEY = YOUR_SUPABASE_KEY

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
````

---

### GitLab CI Pipeline for Edge Function Deployment

Source: https://supabase.com/docs/guides/functions/deploy

Configure a GitLab CI pipeline to automate Edge Function deployment. The pipeline includes a setup stage that installs dependencies and a deploy stage that executes the deployment command with Docker support.

```yaml
image: node:20

# List of stages for jobs, and their order of execution
stages:
  - setup
  - deploy

# This job runs in the setup stage, which runs first.
setup-npm:
  stage: setup
  script:
    - npm i supabase
  cache:
    paths:
      - node_modules/
  artifacts:
    paths:
      - node_modules/

# This job runs in the deploy stage, which only starts when the job in the build stage completes successfully.
deploy-function:
  stage: deploy
  script:
    - npx supabase init
    - npx supabase functions deploy --debug
  services:
    - docker:dind
  variables:
    DOCKER_HOST: tcp://docker:2375
```

---

### Clean Up Subscriptions in React Component

Source: https://supabase.com/docs/guides/realtime/getting_started

Demonstrates proper resource cleanup for Supabase Realtime subscriptions using React's useEffect hook. The cleanup function removes the channel subscription when the component unmounts, preventing memory leaks and freeing up server resources.

```typescript
// React example
import { useEffect } from "react";

useEffect(() => {
  const channel = supabase.channel("room:123:messages");

  return () => {
    supabase.removeChannel(channel);
  };
}, []);
```

---

### Initialize New Flutter Project

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-flutter

This command creates a new Flutter application named 'supabase_quickstart'. It's the first step to set up your Flutter development environment for the user management app.

```shell
flutter create supabase_quickstart
```

---

### Test deployed Supabase Edge Function with cURL

Source: https://supabase.com/docs/guides/functions/quickstart

Test a live Supabase Edge Function using cURL with Authorization header and JSON payload. Includes the publishable anon key for authentication and sends a POST request to the globally distributed function endpoint.

```bash
curl --request POST 'https://[YOUR_PROJECT_ID].supabase.co/functions/v1/hello-world' \
  --header 'Authorization: Bearer SUPABASE_PUBLISHABLE_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"name":"Production"}'
```

---

### GET /explain - Query Execution Plan

Source: https://supabase.com/docs/reference/swift/auth-getclaims

Get the Postgres EXPLAIN execution plan of a query for performance debugging. Works on any query including rpc() and write operations. The explain() method reveals database structure information, so it should only be enabled in testing environments unless additional protection via pre-request functions is provided.

````APIDOC
## GET Query EXPLAIN

### Description
Retrieve the Postgres EXPLAIN execution plan for a database query to debug slow queries and analyze performance.

### Method
GET

### Endpoint
/query/explain

### Parameters
#### Query Parameters
- **table** (string) - Required - The table name to query
- **select** (string) - Optional - Column selection specification
- **analyze** (boolean) - Optional - Include actual execution statistics
- **verbose** (boolean) - Optional - Include additional detail in output

### Request Example
```swift
try await supabase
  .from("instruments")
  .select()
  .explain()
  .execute()
  .value
````

### Response

#### Success Response (200)

- **plan** (array) - Array of execution plan steps
- **planning_time** (number) - Time spent in planning in milliseconds
- **execution_time** (number) - Time spent executing in milliseconds

### Notes

- Explain is not enabled by default as it can reveal sensitive database information
- Best practice: only enable for testing environments
- For production use, provide additional protection via pre-request functions
- Enable functionality by following the Performance Debugging Guide

````

--------------------------------

### Hash Join Performance Analysis in EXPLAIN ANALYZE

Source: https://supabase.com/docs/guides/troubleshooting/understanding-postgresql-explain-output-Un9dqX

Demonstrates a Hash Join operation with actual execution time metrics. This example shows how to identify join operations that consume significant execution time (approximately 100 milliseconds). The actual time field indicates the time range from start to completion, helping identify potential performance bottlenecks in query execution.

```sql
Hash Join  (cost=100.00..200.00 rows=1000 width=50) (actual time=50.012..150.023 rows=1000 loops=1)
````

---

### Initialize Supabase Project

Source: https://supabase.com/docs/guides/ai/examples/openai

Initializes a new Supabase project in the current directory using the Supabase CLI. This command sets up the necessary project structure and configuration files.

```bash
supabase init
```

---

### Supabase Edge Function Starter Code (TypeScript)

Source: https://supabase.com/docs/guides/functions/quickstart

This TypeScript code defines a Deno-based Supabase Edge Function that accepts a JSON payload with a `name` field. It returns a JSON response with a greeting message, demonstrating basic request handling and response formatting.

```typescript
Deno.serve(async (req) => {
  const { name } = await req.json();
  const data = {
    message: `Hello ${name}!`,
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
});
```

---

### Start Supabase Local Development Stack

Source: https://supabase.com/docs/reference/cli/supabase-branches-list

Initializes and starts the local Supabase development stack, requiring `supabase/config.toml`. It starts all service containers by default and performs health checks. Users can exclude specific services (e.g., `gotrue`, `imgproxy`) or ignore health check errors.

```cli
supabase start [flags]
```

```cli
supabase start
```

```text
Creating custom roles supabase/roles.sql...
Applying migration 20220810154536_employee.sql...
Seeding data supabase/seed.sql...
Started supabase local development setup.
```

---

### List Supabase Storage Vector Indexes (JavaScript)

Source: https://supabase.com/docs/reference/javascript/auth-exchangecodeforsession

This example demonstrates how to retrieve a list of all vector indexes within a specified bucket in Supabase Storage. It uses the `supabase.storage.vectors.from()` method to target a bucket and then calls `listIndexes()` to get the available indexes.

```javascript
const bucket = supabase.storage.vectors.from("embeddings-prod");
const { data } = await bucket.listIndexes({ prefix: "documents-" });
```

---

### Initialize Prisma Project with Node.js

Source: https://supabase.com/docs/guides/database/prisma

Sets up a new Prisma project directory with required dependencies including TypeScript, ts-node, and the Prisma CLI. Generates initial TypeScript configuration and Prisma schema files.

```bash
mkdir hello-prisma
cd hello-prisma
```

```bash
npm init -y
npm install prisma typescript ts-node @types/node --save-dev

npx tsc --init

npx prisma init
```

---

### GET /explain - Query Execution Plan

Source: https://supabase.com/docs/reference/swift/rpc

Get the Postgres EXPLAIN execution plan of a query for debugging slow queries. This method works on any query including rpc() and write operations. Requires explicit enablement in project settings for security reasons.

````APIDOC
## GET Query Execution Plan

### Description
Retrieve the Postgres EXPLAIN execution plan for debugging slow queries. Can be used on any query type including RPC calls and write operations.

### Method
GET

### Endpoint
`/from/{table}/select().explain()`

### Parameters
#### Path Parameters
- **table** (string) - Required - The table name to query

#### Query Parameters
- None

#### Request Body
- None

### Request Example
```swift
try await supabase
  .from("instruments")
  .select()
  .explain()
  .execute()
  .value
````

### Response

#### Success Response (200)

- **execution_plan** (object) - The Postgres EXPLAIN plan output

#### Response Example

```json
{
  "execution_plan": {
    "Plan": {},
    "Planning Time": "0.000ms",
    "Execution Time": "0.000ms"
  }
}
```

### Notes

- Explain is not enabled by default as it can reveal sensitive database information
- Best practice: Only enable for testing environments
- For production use, enable with additional protection using pre-request functions
- Refer to Performance Debugging Guide for enablement instructions

````

--------------------------------

### Configure Supabase Database Connection Environment Variables

Source: https://supabase.com/docs/guides/getting-started/quickstarts/redwoodjs

Set up DATABASE_URL and DIRECT_URL environment variables in the .env file for connecting to Supabase PostgreSQL database with transaction and session pooling modes. Transaction mode is used for migrations while session mode is used by Prisma Client.

```env
# Transaction mode connection string used for migrations
DATABASE_URL="postgres://postgres.[project-ref]:[db-password]@xxx.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1"

# Session mode connection string — used by Prisma Client
DIRECT_URL="postgres://postgres.[project-ref]:[db-password]@xxx.pooler.supabase.com:5432/postgres"
````

---

### Query Supabase Data in Nuxt Component

Source: https://supabase.com/docs/guides/getting-started/quickstarts/nuxtjs

Implements a Nuxt 3 component that initializes a Supabase client using runtime config, fetches instruments data on component mount, and displays the list using v-for. The script uses composition API with ref and onMounted lifecycle hook for reactive data binding.

```vue
<script setup>
import { createClient } from "@supabase/supabase-js";
const config = useRuntimeConfig();
const supabase = createClient(
  config.public.supabaseUrl,
  config.public.supabasePublishableKey
);
const instruments = ref([]);

async function getInstruments() {
  const { data } = await supabase.from("instruments").select();
  instruments.value = data;
}

onMounted(() => {
  getInstruments();
});
</script>

<template>
  <ul>
    <li v-for="instrument in instruments" :key="instrument.id">
      {{ instrument.name }}
    </li>
  </ul>
</template>
```

---

### Define Instrument Data Model in Swift

Source: https://supabase.com/docs/guides/getting-started/quickstarts/ios-swiftui

Creates a decodable Swift struct named `Instrument` that maps database records to Swift objects. Conforms to `Decodable` for JSON deserialization and `Identifiable` for use in SwiftUI collections. Add this code to a file named `Instrument.swift`.

```swift
struct Instrument: Decodable, Identifiable {
  let id: Int
  let name: String
}
```

---

### Bootstrap Supabase with template

Source: https://supabase.com/docs/reference/cli/introduction

Sets up a Supabase project with an optional template and database password. Useful for initializing projects with predefined configurations.

```bash
supabase bootstrap [template] [flags]
supabase bootstrap [template] -p <password>
```

---

### Installation

Source: https://supabase.com/docs/reference/csharp/neq

Install the Supabase C# package from NuGet package manager. The library is community-maintained and provides full access to Supabase backend services.

````APIDOC
## Installation

### Description
Install Supabase C# client library from NuGet package repository.

### Package Manager
NuGet

### Installation Command
```bash
dotnet add package supabase
````

### Requirements

- .NET framework compatible environment
- Internet connection for NuGet package download

### Notes

- Package is community-maintained by Joseph Schultz (official maintainer)
- Contributors: Will Iverson, Ben Randall, Rhuan Barros
- Please report issues and contribute improvements on GitHub

````

--------------------------------

### Initialize New Python Project with Poetry

Source: https://supabase.com/docs/guides/ai/examples/image-search-openai-clip

This command initializes a new Python project named 'image-search' using Poetry, setting up the basic project structure.

```bash
poetry new image-search
````

---

### Query Explain Plan

Source: https://supabase.com/docs/reference/swift/upsert

Get the Postgres `EXPLAIN` execution plan for any Supabase query to assist in debugging slow queries and understanding query performance.

````APIDOC
## Client Method: explain()

### Description
Get the Postgres `EXPLAIN` execution plan for a query to debug performance. It can be used on any query, including `rpc()` and writes.

### Method
Client-side method chaining

### Usage
Chain `.explain()` before `.execute()` on any Supabase query builder.

### Parameters
None explicitly required for the `.explain()` method itself; it operates on the preceding query builder state.

### Request Example
```swift
try await supabase
  .from("instruments")
  .select()
  .explain()
  .execute()
  .value
````

### Response

#### Success Response

Returns the execution plan of the query, typically a detailed analysis of how Postgres intends to run the query.

#### Response Example

(Output is specific to the database and query, typically a text-based plan)

```
[
  {
    "Plan": {
      "Node Type": "Seq Scan",
      "Relation Name": "instruments",
      "Alias": "instruments",
      "Startup Cost": 0.00,
      "Total Cost": 10.00,
      "Plan Rows": 100,
      "Plan Width": 50
    }
  }
]
```

````

--------------------------------

### Local Development Environment Setup

Source: https://supabase.com/docs/guides/auth/social-login/auth-google_platform=android

Configure environment variables and authentication settings for local development with Google OAuth provider in Supabase.

```APIDOC
## Local Development Configuration

### Description
Set up Google OAuth provider for local development with environment variables and configuration file settings.

### Environment Variable
````

SUPABASE_AUTH_EXTERNAL_GOOGLE_CLIENT_SECRET="<client-secret>"

````

### Configuration Setup
```ini
[auth.external.google]
enabled = true
client_id = "<client-id>"
secret = "env(SUPABASE_AUTH_EXTERNAL_GOOGLE_CLIENT_SECRET)"
skip_nonce_check = false
````

### Notes

- If using multiple client IDs (Web, iOS, Android), concatenate them with commas
- Ensure the web client ID is listed first
- Different SHA-1 certificate fingerprints required for local testing vs production
- Add all Client IDs to Supabase dashboard

````

--------------------------------

### SQL for User Profile Management with Security Definer Trigger

Source: https://supabase.com/docs/guides/troubleshooting/dashboard-errors-when-managing-users-N1ls4A

This comprehensive SQL example demonstrates a common Supabase pattern for user profile management. It defines a `profiles` table, a `handle_new_user` function with `SECURITY DEFINER` (to allow the function to operate with the privileges of its creator, typically `postgres`, enabling interaction with tables outside the `auth` schema), and an `on_auth_user_created` trigger on `auth.users`. This setup ensures that a profile record is automatically created in `public.profiles` whenever a new user registers.

```SQL
create table profiles (\n  id uuid references auth.users on delete cascade not null primary key,\n  updated_at timestamp with time zone,\n  username text unique,\n  full_name text,\n  avatar_url text,\n  website text,\n\n  constraint username_length check (char_length(username) >= 3)\n);\n\ncreate function public.handle_new_user()\nreturns trigger\nset search_path = ''\nas $$\nbegin\n  insert into public.profiles (id, full_name, avatar_url)\n  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');\n  return new;\nend;\n$$ language plpgsql security definer;\n\ncreate trigger on_auth_user_created\n  after insert on auth.users\n  for each row execute procedure public.handle_new_user();
````

---

### Initialize Supabase CLI Project

Source: https://supabase.com/docs/reference/cli/supabase-network-restrictions

Creates a supabase/config.toml file in the current working directory to initialize local Supabase development configuration. This command sets up the project structure for local development, optionally configuring storage engines and IDE settings. The working directory can be overridden using the SUPABASE_WORKDIR environment variable or --workdir flag.

```bash
supabase init
```

```bash
supabase init [flags]
```

---

### Query first page using GraphQL keyset pagination

Source: https://supabase.com/docs/guides/graphql/api

This GraphQL query retrieves the first two records from `blogCollection` using keyset pagination. It utilizes the `first` argument to limit results and `after: null` to indicate the start of the collection. The `pageInfo` and `edges` fields are selected to get cursors and node IDs for subsequent pagination.

```GraphQL
{
  blogCollection(
    first: 2,
    after: null
  ) {
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    edges {
      cursor
      node {
        id
      }
    }
  }
}
```

---

### Start Ollama Server Locally

Source: https://supabase.com/docs/guides/functions/ai-models

Command to start the local Ollama server, making it available for inference requests from Supabase Edge Functions.

```bash
ollama serve
```

---

### Query and Display Instruments Data in SwiftUI

Source: https://supabase.com/docs/guides/getting-started/quickstarts/ios-swiftui

SwiftUI view that fetches instruments from Supabase using an async task and displays them in a list. Shows a loading indicator while data is being fetched and handles errors gracefully. Replace the default `ContentView` with this implementation to display the queried data.

```swift
struct ContentView: View {

  @State var instruments: [Instrument] = []

  var body: some View {
    List(instruments) { instrument in
      Text(instrument.name)
    }
    .overlay {
      if instruments.isEmpty {
        ProgressView()
      }
    }
    .task {
      do {
        instruments = try await supabase.from("instruments").select().execute().value
      } catch {
        dump(error)
      }
    }
  }
}
```

---

### Create a bucket

Source: https://supabase.com/docs/reference/csharp/storage-createbucket

Creates a new Storage bucket. Requires 'insert' permission on buckets. The bucket name must be unique within the product.

````APIDOC
## POST /storage/buckets

### Description
Creates a new Storage bucket.

### Method
POST

### Endpoint
/storage/buckets

### Request Body
- **name** (string) - Required - Name of the bucket to create

### Policy Permissions Required
- **buckets** - `insert`
- **objects** - none

### Response
#### Success Response (201)
- **bucket** (object) - Created bucket object with bucket details

### Code Example
```csharp
var bucket = await supabase.Storage.CreateBucket("avatars");
````

````

--------------------------------

### Deploy Supabase Edge Function with API flag

Source: https://supabase.com/docs/guides/functions/quickstart

Deploy an Edge Function using the API-based deployment method instead of Docker. This command explicitly uses the --use-api flag to bypass Docker requirements and deploy the hello-world function to Supabase edge locations worldwide.

```bash
supabase functions deploy hello-world --use-api
````

---

### Install Supabase C# Package from NuGet

Source: https://supabase.com/docs/reference/csharp/auth-signinwithotp

Install the Supabase C# client library from NuGet package repository using the dotnet CLI. This is the first step to integrate Supabase functionality into your C# project.

```bash
dotnet add package supabase
```

---

### User-Agent Header Metadata Examples

Source: https://supabase.com/docs/guides/telemetry/logs

Examples of User-Agent header formats for attaching device and version identification metadata to requests. Shows both simple and complex User-Agent string patterns. Note: Do not include PII to comply with data protection privacy laws.

```text
node MyApp/1.2.3 (device-id:abc123)
```

```text
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0 MyApp/1.2.3 (Foo v1.3.2; Bar v2.2.2)
```

---

### POST /v1/projects/{ref}/read-replicas/setup

Source: https://supabase.com/docs/reference/api

Sets up a read replica for a Supabase project.

````APIDOC
## POST /v1/projects/{ref}/read-replicas/setup

### Description
Sets up a read replica for a Supabase project.

### Method
POST

### Endpoint
/v1/projects/{ref}/read-replicas/setup

### Parameters
#### Path Parameters
- **ref** (string) - Required - Project ref

### Body
- **read_replica_region** (enum) - Required - Accepted values

### Response
#### Success Response (201)

#### Response Example
```json
{}
````

````

--------------------------------

### Retrieve Supabase Edge Function Deployment URL

Source: https://supabase.com/docs/guides/functions/quickstart-dashboard

This snippet provides the full URL for a newly deployed Supabase Edge Function, which is essential for external invocation. The URL includes the project ID and function name, allowing applications to make requests to the edge function.

```url
https://YOUR_PROJECT_ID.supabase.co/functions/v1/hello-world
````

---

### Install Poetry for Python Package Management

Source: https://supabase.com/docs/guides/ai/examples/image-search-openai-clip

This command installs Poetry, a dependency management and packaging tool for Python, using pip.

```bash
pip install poetry
```

---

### Initialize Deno Server and Serve OG Image Handler

Source: https://supabase.com/docs/guides/functions/examples/og-image

Sets up the Deno server to listen for incoming HTTP requests and route them to the OG image handler. Imports the handler function and uses Deno.serve() to start the server. Logs a confirmation message on startup.

```typescript
import handler from "./handler.tsx";

console.log("Hello from og-image Function!");

Deno.serve(handler);
```

---

### Auth: Create a New User (SignUp)

Source: https://supabase.com/docs/reference/csharp/gt

Creates a new user with the provided email and password. Email verification behavior depends on project settings.

````APIDOC
## POST /auth/v1/signup

### Description
Creates a new user. The user may need to verify their email depending on the project's 'Confirm email' setting. If 'Confirm email' is enabled, the session will be null upon immediate sign up.

### Method
POST

### Endpoint
supabase.Auth.SignUp(email, password)

### Parameters
#### Path Parameters
- No path parameters.

#### Query Parameters
- No direct query parameters for this method.

#### Request Body
- **email** (string) - Required - The email address for the new user.
- **password** (string) - Required - The password for the new user.

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
````

### Response

#### Success Response (200)

- **user** (User) - The newly created user object.
- **session** (Session) - The user's session, if email confirmation is disabled. Otherwise, null.

#### Response Example

```json
{
  "user": {
    "id": "some-uuid",
    "email": "user@example.com",
    "created_at": "2023-01-01T12:00:00Z"
  },
  "session": {
    "access_token": "jwt-token",
    "refresh_token": "refresh-token",
    "expires_in": 3600
  }
}
```

(Session might be null if email confirmation is enabled)

#### Error Response (400)

- If `SignUp()` is called for an existing confirmed user: 'User already registered' error is returned if email/phone confirmation is disabled. An obfuscated user object is returned if both are enabled.

````

--------------------------------

### Install Supabase Python Client via pip

Source: https://supabase.com/docs/reference/python/auth-exchangecodeforsession

This snippet demonstrates how to install the `supabase-py` library using pip, the Python package installer. Ensure you have Python 3.8 or newer installed for compatibility with the library.

```Python
pip install supabase
````

---

### Example: Enable totalCount for BlogPost Table

Source: https://supabase.com/docs/guides/graphql/configuration

This example shows the creation of a `BlogPost` table followed by a comment directive to enable the `totalCount` field for its GraphQL Connection type, allowing clients to query the total number of blog posts.

```SQL
create table "BlogPost"(
    id serial primary key,
    email varchar(255) not null
);
comment on table "BlogPost" is e'@graphql({"totalCount": {"enabled": true}})';
```

---

### Supabase Migration List Command Example Output

Source: https://supabase.com/docs/reference/cli/introduction

Illustrates the typical output format of the `supabase migration list` command, showing how local and remote migration timestamps are displayed and compared. This helps users interpret the command's results and identify discrepancies.

```text
LOCAL      │     REMOTE     │     TIME (UTC)
─────────────────┼────────────────┼──────────────────────
                 │ 20230103054303 │ 2023-01-03 05:43:03
                 │ 20230103093141 │ 2023-01-03 09:31:41
  20230222032233 │                │ 2023-02-22 03:22:33
```

---

### Initialize Svelte App with Vite and Install Dependencies

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-svelte

Creates a new Svelte project using Vite with TypeScript template and installs the Supabase JavaScript client library. This sets up the foundation for a Svelte-based application with type safety.

```bash
npm create vite@latest supabase-svelte -- --template svelte-ts
cd supabase-svelte
npm install
```

```bash
npm install @supabase/supabase-js
```

---

### Define PostgreSQL Schema for Realtime Authorization Examples

Source: https://supabase.com/docs/guides/realtime/authorization

This SQL snippet provides the DDL to create example tables (`public.rooms`, `public.profiles`, `public.rooms_users`) used throughout the Realtime Authorization documentation. It includes primary keys, foreign key constraints, and enables Row Level Security (RLS) on each table, which is crucial for subsequent authorization examples.

```sql
create table public.rooms (
    id bigint generated by default as identity primary key,
    topic text not null unique
);

alter table public.rooms enable row level security;

create table public.profiles (
  id uuid not null references auth.users on delete cascade,
  email text NOT NULL,

  primary key (id)
);

alter table public.profiles enable row level security;

create table public.rooms_users (
  user_id uuid references auth.users (id),
  room_topic text references public.rooms (topic),
  created_at timestamptz default current_timestamp
);

alter table public.rooms_users enable row level security;
```

---

### POST /auth/signup

Source: https://supabase.com/docs/reference/swift/auth-getuser

Create a new user account with email or phone and password. Handles email verification requirements, custom metadata, and optional redirect URLs for email confirmations.

````APIDOC
## POST /auth/signup

### Description
Create a new user account with email or phone authentication. Supports custom metadata and configurable email verification.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. One of email or phone required.
- **phone** (string) - Optional - User phone number. One of email or phone required.
- **password** (string) - Required - User password
- **data** (JSONObject) - Optional - Custom metadata object for storing additional user information
- **redirectTo** (URL) - Optional - Redirect URL for email confirmation link (email signups only). Must be a configured redirect URL.
- **captchaToken** (string) - Optional - CAPTCHA token for verification

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
````

### Response

#### Success Response (200)

When **Confirm email** is enabled:

- **user** (object) - User object with profile information
- **session** (null) - Session is null until email confirmation

When **Confirm email** is disabled:

- **user** (object) - User object with profile information
- **session** (object) - Active session object with access token

#### Error Response (400/422)

- **User already registered** - When signUp() called for existing confirmed user (if confirmation disabled)
- **Obfuscated user object** - When both Confirm email and Confirm phone are enabled for existing users

### Configuration Notes

- **Confirm email** setting determines if users must verify email before login
- Default redirect on email confirmation is SITE_URL (customizable)
- For existing confirmed users, behavior depends on confirmation settings
- Use getUser() to fetch currently logged-in user

### Example Variants

- Sign up with email and password
- Sign up with phone number and password (SMS)
- Sign up with phone number and password (WhatsApp)
- Sign up with additional user metadata
- Sign up with custom redirect URL

````

--------------------------------

### Display Project SSO Configuration Information

Source: https://supabase.com/docs/reference/cli/supabase-branches-create

Returns all essential SSO configuration information needed to register the project with a SAML 2.0 compatible identity provider. Outputs project-specific SAML settings and metadata.

```bash
supabase sso info --project-ref abcdefghijklmnopqrst
````

---

### Initialize Ionic React Project with Supabase

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react

Set up a new Ionic React application and install the Supabase JavaScript client library. Uses the Ionic CLI to scaffold a blank React project and npm to install the supabase-js dependency for backend integration.

```bash
npm install -g @ionic/cli
ionic start supabase-ionic-react blank --type react
cd supabase-ionic-react
```

---

### Create RLS Policy for Public Read Access with SQL

Source: https://supabase.com/docs/guides/getting-started/quickstarts/ios-swiftui

Defines a row-level security policy that allows anonymous users to read all records from the instruments table. This policy must be created after enabling RLS on the table to make the data publicly accessible for querying from the iOS app.

```sql
create policy "public can read instruments"
on public.instruments
for select to anon
using (true);
```

---

### Installing Supabase SSR Package (npm)

Source: https://supabase.com/docs/guides/auth/server-side/migrating-to-ssr-from-auth-helpers

This command installs the `@supabase/ssr` package, the recommended replacement for the older Auth Helpers. This package provides core authentication functionalities for server-side rendered applications across various frameworks.

```bash
npm install @supabase/ssr
```

---

### Install Postgres.js dependency (Node.js)

Source: https://supabase.com/docs/guides/database/postgres-js

This command installs the Postgres.js client library via npm, which is essential for interacting with a PostgreSQL database from Node.js or Deno environments.

```shell
npm i postgres
```

---

### Test Supabase Edge Function with cURL

Source: https://supabase.com/docs/guides/functions/quickstart

This `curl` command sends a POST request to a locally running Supabase Edge Function, including an `Authorization` header and a JSON payload. It's used to test the function's behavior and verify its output, expecting a JSON response with a greeting.

```bash
curl -i --location --request POST 'http://localhost:54321/functions/v1/hello-world' \
  --header 'Authorization: Bearer SUPABASE_PUBLISHABLE_KEY' \
  --header 'Content-Type': 'application/json' \
  --data '{"name":"Functions"}'
```

---

### Initialize Supabase Auth Client

Source: https://supabase.com/docs/reference/swift/contains

Guide on setting up the Supabase authentication client, specifying the necessary Supabase project URL and API key to enable secure interactions with the authentication service.

````APIDOC
## Initialize Supabase Auth Client

### Description
Initializes the Supabase authentication client instance using your project's URL and an API key. This object (`supabase.auth`) is then used for all authentication-related operations.

### Method
SDK Method

### Endpoint
N/A (Client-side SDK initialization)

### Parameters
- **supabaseURL** (URL) - Required - The base URL of your Supabase project.
- **supabaseKey** (String) - Required - Your publishable or anonymous API key for the Supabase project.

### Request Body
N/A

### Request Example
```swift
let supabase = SupabaseClient(supabaseURL: URL(string: "https://xyzcompany.supabase.co")!, supabaseKey: "publishable-or-anon-key")
let auth = supabase.auth
````

### Response

N/A (Returns an initialized `auth` client object for further use.)

````

--------------------------------

### Link and Initialize Supabase Project Locally (Shell)

Source: https://supabase.com/docs/guides/functions/examples/push-notifications

These shell commands facilitate the initial setup and local management of a Supabase project. They link your local development environment to a remote Supabase project, start the necessary local services, and push your database schema. This sequence is crucial for local development and ensuring your schema is up-to-date.

```bash
supabase link --project-ref your-supabase-project-ref
supabase start
supabase db push
````

---

### Retrieve Supabase Data as CSV (Dart)

Source: https://supabase.com/docs/reference/dart/auth-getsession

This example demonstrates how to fetch data from a Supabase table in CSV format. It selects all columns from the 'instruments' table and applies the `csv()` modifier to get the response as a CSV string. Requires the Supabase client library and Dart.

```Dart
final data = await supabase
  .from('instruments')
  .select()
  .csv();
```

---

### GET /api/v1/explain

Source: https://supabase.com/docs/reference/swift/auth-getsession

Retrieves the execution plan for a given database query using PostgreSQL's EXPLAIN command. This helps in debugging slow queries and optimizing performance.

````APIDOC
## GET /api/v1/explain

### Description
Retrieves the execution plan for a given database query. This method is primarily used for performance debugging and understanding query execution.

### Method
GET

### Endpoint
`/api/v1/explain` (Conceptual endpoint representing the underlying EXPLAIN functionality)

### Parameters
#### Query Parameters
- **query** (string) - Required - The SQL query to be explained. (Implicitly passed by the SDK's `select().explain()` method).
- **options** (object) - Optional - Additional EXPLAIN options like `analyze`, `verbose`, `costs`, `buffers`, `wal`, `timing`, `summary`, `format`. (e.g., `{"analyze": true, "verbose": true}`)

#### Request Body
Not applicable

### Request Example
```json
{
  "example": "The SDK call translates to a request for the explain plan of a SELECT query."
}
````

### Response

#### Success Response (200)

- **plan** (array) - An array of objects representing the query execution plan.

#### Response Example

```json
[
  {
    "Plan": {
      "Node Type": "Seq Scan",
      "Relation Name": "instruments",
      "Alias": "instruments",
      "Startup Cost": 0.0,
      "Total Cost": 1.05,
      "Plan Rows": 5,
      "Plan Width": 84
    }
  }
]
```

````

--------------------------------

### Example Response for Multiple Presigned URLs Generation

Source: https://supabase.com/docs/reference/self-hosting-storage/delete-a-bucket

This JSON array provides an example response for an API call that generates multiple presigned URLs. Each entry includes the path, the generated signed URL, and potentially an error message if generation failed for a specific path.

```json
[
  {
    "error": "Either the object does not exist or you do not have access to it",
    "path": "folder/cat.png",
    "signedURL": "/object/sign/avatars/folder/cat.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2ZvbGRlci9jYXQucG5nIiwiaWF0IjoxNjE3NzI2MjczLCJleHAiOjE2MTc3MjcyNzN9.s7Gt8ME80iREVxPhH01ZNv8oUn4XtaWsmiQ5csiUHn4"
  }
]
````

---

### Example response for `supabase db dump` command

Source: https://supabase.com/docs/reference/cli/supabase-branches-delete

An example of the output received when the `supabase db dump` command successfully saves the database schema to a file. It confirms the dumping process and the target file location.

```text
Dumping schemas from remote database...
Dumped schema to supabase/schema.sql.
```

---

### Limit Data: Retrieve Rows within a Range (Supabase .NET)

Source: https://supabase.com/docs/reference/csharp/auth-signinwithotp

This C# example shows how to retrieve a specific range of rows from a Supabase table. The `Range` method is used to fetch rows from an inclusive start index to an exclusive end index, providing a paginated result.

```csharp
var result = await supabase.From<City>()
  .Select("name, country_id")
  .Range(0, 3)
  .Get();
```

---

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/swift/auth-getuseridentities

Create a new user account with email or phone number and password. Supports custom user metadata and email redirect configuration. Email confirmation may be required based on project settings.

````APIDOC
## POST /auth/signup

### Description
Create a new user account with email or phone-based authentication and optional metadata.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User email address (one of email or phone required)
- **phone** (string) - Optional - User phone number (one of email or phone required)
- **password** (string) - Required - User password
- **data** (object) - Optional - Custom data object for storing additional user metadata
- **redirectTo** (string) - Optional - Email redirect URL (email signups only). Must be a configured redirect URL for your Supabase instance
- **captchaToken** (string) - Optional - CAPTCHA token for verification

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
````

### Response

#### Success Response (200)

- **user** (object) - User object containing uid, email, phone, user_metadata
- **session** (object) - User session (null if email confirmation is enabled and user hasn't confirmed)

#### Response Notes

- If **Confirm email** is enabled: user is returned but session is null
- If **Confirm email** is disabled: both user and session are returned
- User is redirected to SITE_URL upon email confirmation
- For existing confirmed users: obfuscated user object or "User already registered" error is returned

### Important Notes

- By default, users must verify their email before logging in (disable in project settings)
- **Confirm email** setting determines if session is returned immediately
- Phone signup requires SMS provider configuration
- WhatsApp signup available as alternative phone method
- Use getUser() method to fetch currently logged-in user
- Additional redirect URLs can be configured in project settings

````

--------------------------------

### POST /auth/v1/signup - Create a new user

Source: https://supabase.com/docs/reference/python/auth-getuser

Allows creation of a new user account with email and password. By default, email verification is required unless disabled in project settings. Handles existing user scenarios gracefully.

```APIDOC
## POST /auth/v1/signup

### Description
Creates a new user account. Email verification can be configured. If email confirmation is enabled, a user object is returned but the session is null until confirmed. If disabled, both user and session are returned. Handles existing users by returning an obfuscated user or an error.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Request Body
- **credentials** (SignUpWithPasswordCredentials) - Required - User credentials for signup.
  - **email** (string) - Required - The user's email address.
  - **password** (string) - Required - The user's password.

### Request Example
```json
{
  "email": "email@example.com",
  "password": "password"
}
````

### Response

#### Success Response (200/201)

- **user** (object) - The newly created user object.
- **session** (object | null) - The user's session object, or null if email confirmation is required.

#### Response Example

```json
{
  "user": {
    "id": "uuid",
    "email": "email@example.com",
    "created_at": "timestamp",
    "confirmed_at": "timestamp | null",
    "email_confirmed_at": "timestamp | null",
    "last_sign_in_at": "timestamp | null",
    "aud": "authenticated",
    "role": "authenticated",
    "app_metadata": {},
    "user_metadata": {}
  },
  "session": {
    "access_token": "jwt_token",
    "expires_in": 3600,
    "expires_at": 1678886400,
    "refresh_token": "refresh_token",
    "token_type": "Bearer",
    "user": {...}
  }
}
```

````

--------------------------------

### Subscribe to All Schema Changes with Supabase Realtime (JavaScript)

Source: https://supabase.com/docs/guides/realtime/postgres-changes_language=js&queryGroups=language

This JavaScript snippet demonstrates subscribing to all `postgres_changes` events (INSERT, UPDATE, DELETE) across all tables within the `public` schema. It uses the Supabase Realtime client to log the payload of any detected change, serving as a quick start example.

```javascript
const channelA = supabase
  .channel('schema-db-changes')
  .on(
    'postgres_changes',
    {
      event: '*',
      schema: 'public',
    },
    (payload) => console.log(payload)
  )
  .subscribe()
````

---

### Monitor Active pg_cron Job Queries - PostgreSQL

Source: https://supabase.com/docs/guides/troubleshooting/pgcron-debugging-guide-n1KTaz

Identifies currently executing pg_cron jobs by querying pg_stat_activity. Displays process details including PID, user, backend start time, and active query. Helps detect concurrent job execution and potential connection overload situations.

```sql
SELECT
  pid as process_id,
  usename as database_user,
  application_name,
  backend_start as when_process_began,
  wait_event_type,
  state,
  query,
  backend_type
FROM pg_stat_activity where application_name ilike 'pg_cron';
```

---

### Initialize SolidJS Application with Degit

Source: https://supabase.com/docs/guides/getting-started/quickstarts/solidjs

This terminal command uses `npx degit` to scaffold a new SolidJS application named 'my-app' from a predefined template. It serves as the initial step for setting up the SolidJS frontend project. Ensure `npx` is available in your environment.

```bash
npx degit solidjs/templates/js my-app
```

---

### Incorrect Supabase RLS Policy: Misplaced TO Clause

Source: https://supabase.com/docs/guides/getting-started/ai-prompts/database-rls-policies

An example of an incorrectly structured Supabase Row-Level Security policy where the `TO` clause is placed before the `FOR` clause. This demonstrates a common syntax error, as the `FOR` clause (specifying the operation) must precede the `TO` clause (specifying the roles).

```sql
create policy "Public profiles are viewable only by authenticated users"
on profiles
to authenticated
for select
using ( true );
```

---

### Commit changes and start local Supabase services

Source: https://supabase.com/docs/guides/cli/managing-environments

Adds all local changes to Git, commits them with a message, and then starts the local Supabase development services. This prepares your environment for local schema development.

```shell
git add .
git commit -m "init supabase"
supabase start
```

---

### Enroll a TOTP or Phone Factor (Supabase MFA)

Source: https://supabase.com/docs/reference/dart/auth-getsession

Enrolls a Multi-Factor Authentication (MFA) factor for a user, such as a Time-Based One-Time Password (TOTP) or a phone factor. This example demonstrates enrolling a TOTP factor, which returns a QR code URL for user setup.

```Dart
final res = await supabase.auth.mfa.enroll(factorType: FactorType.totp);

final qrCodeUrl = res.totp.qrCode;
```

---

### Supabase Init Command Usage

Source: https://supabase.com/docs/reference/cli/start

Shows the general usage syntax for the `supabase init` command, which initializes configurations for Supabase local development. It creates a `supabase/config.toml` file in the current working directory, essential for local project settings.

```bash
supabase init [flags]
```

---

### Install Ionic CLI and Initialize Angular Project

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-angular

Install the Ionic CLI globally and create a new Ionic Angular application with a blank template. This sets up the project structure and dependencies required for Ionic development.

```bash
npm install -g @ionic/cli
ionic start supabase-ionic-angular blank --type angular
cd supabase-ionic-angular
```

---

### GET /storage/v1/bucket

Source: https://supabase.com/docs/reference/csharp/order

Retrieves the details of all Storage buckets within an existing product.

````APIDOC
## GET /storage/v1/bucket

### Description
Retrieves the details of all Storage buckets within an existing product.

### Method
GET

### Endpoint
/storage/v1/bucket

### Policy Permissions Required
- **buckets** (permissions) - `select`
- **objects** (permissions) - `none`

### Parameters
#### Path Parameters
*(None)*

#### Query Parameters
*(None)*

#### Request Body
*(None)*

### Request Example
```json
{}
````

### Response

#### Success Response (200)

- **id** (string) - The unique identifier of the bucket.
- **name** (string) - The name of the bucket.
- **public** (boolean) - Whether the bucket is public or private.
- **created_at** (string) - Timestamp when the bucket was created.
- **updated_at** (string) - Timestamp when the bucket was last updated.

#### Response Example

```json
[
  {
    "id": "avatars",
    "name": "avatars",
    "public": false,
    "created_at": "2023-01-01T00:00:00Z",
    "updated_at": "2023-01-01T00:00:00Z"
  }
]
```

````

--------------------------------

### Basic Supabase DB Pull Command Example

Source: https://supabase.com/docs/reference/cli/supabase-inspect-db-index-stats

This example demonstrates the simplest form of the `supabase db pull` command, used to fetch schema changes from a linked remote database. It will create a new migration file in the `supabase/migrations` directory.

```shell

supabase db pull

````

---

### Define and Populate Database Tables for Examples

Source: https://supabase.com/docs/guides/database/functions_example-view=sql&language=sql&queryGroups=language&queryGroups=example-view

This SQL snippet sets up two tables, `planets` and `people`, complete with primary keys, foreign key relationships, and sample data. These tables serve as the foundation for subsequent function examples demonstrating data retrieval and manipulation.

```sql
create table planets (
  id serial primary key,
  name text
);

insert into planets
  (id, name)
values
  (1, 'Tattoine'),
  (2, 'Alderaan'),
  (3, 'Kashyyyk');

create table people (
  id serial primary key,
  name text,
  planet_id bigint references planets
);

insert into people
  (id, name, planet_id)
values
  (1, 'Anakin Skywalker', 1),
  (2, 'Luke Skywalker', 1),
  (3, 'Princess Leia', 2),
  (4, 'Chewbacca', 3);
```

---

### POST /auth/signup

Source: https://supabase.com/docs/reference/swift/introduction

Creates a new user account with email or phone authentication. Returns user object and session based on email confirmation settings. Supports additional user metadata and custom redirect URLs.

````APIDOC
## POST /auth/signup

### Description
Creates a new user account with email or phone-based authentication. By default, users must verify their email address before logging in.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. One of email or phone must be provided.
- **phone** (string) - Optional - User phone number. One of email or phone must be provided.
- **password** (string) - Required - User password
- **data** (JSONObject) - Optional - Custom data object to store additional user metadata
- **redirectTo** (URL) - Optional - Redirect URL for email signups. Must be a configured redirect URL for your Supabase instance.
- **captchaToken** (string) - Optional - CAPTCHA token for verification

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
````

### Response

#### Success Response (200)

- **user** (object) - User object with id, email/phone, created_at timestamp
- **session** (object) - Session object (null if Confirm email is enabled and user hasn't verified)

### Important Notes

- **Confirm email enabled**: Returns user object, session is null until email verification
- **Confirm email disabled**: Returns both user and session objects
- Email verification redirects to SITE_URL by default (customizable)
- If signUp() called for existing confirmed user with both Confirm email and Confirm phone enabled: returns obfuscated user object
- If signUp() called for existing confirmed user with either setting disabled: returns 'User already registered' error
- Use getUser() to fetch currently logged-in user

````

--------------------------------

### List Teams API Response JSON

Source: https://supabase.com/docs/reference/self-hosting-analytics/create-endpoint

Example response schema for the GET /api/teams endpoint returning an array of team objects. Each team includes name, team_users array with email and name, token, and a nested user object containing API credentials and BigQuery configuration details.

```json
[
  {
    "name": "lorem",
    "team_users": [
      {
        "email": "lorem",
        "name": "lorem"
      }
    ],
    "token": "lorem",
    "user": {
      "api_key": "lorem",
      "api_quota": 42,
      "bigquery_dataset_id": "lorem",
      "bigquery_dataset_location": "lorem",
      "bigquery_project_id": "lorem",
      "company": "lorem",
      "email": "lorem",
      "email_me_product": true,
      "email_preferred": "lorem",
      "image": "lorem",
      "name": "lorem",
      "phone": "lorem",
      "provider": "lorem",
      "token": "lorem"
    }
  }
]
````

---

### Run Supabase Locally

Source: https://supabase.com/docs/reference/cli/supabase-inspect-db-bloat

Starts a local Supabase instance for development. These commands work together to set up and launch the complete Supabase stack on your local machine for testing and development purposes.

```bash
supabase init && supabase start
```

---

### Create a PostgreSQL Table for Indexing Examples

Source: https://supabase.com/docs/guides/database/postgres/indexes

This SQL statement creates a `persons` table with various columns to serve as an example for demonstrating PostgreSQL indexing concepts. It includes an `id` as a primary key, `age`, `height`, `weight` as integers, `name` as text, and `deceased` as a boolean. This table will be used in subsequent indexing examples.

```sql
create table persons (
  id bigint generated by default as identity primary key,
  age int,
  height int,
  weight int,
  name text,
  deceased boolean
);
```

---

### Auth: Sign Up

Source: https://supabase.com/docs/reference/csharp/file-buckets

Creates a new user with the provided email and password. Email confirmation behavior depends on project settings.

````APIDOC
## Auth: Sign Up

### Description
Creates a new user.
*   By default, the user needs to verify their email address before logging in. To turn this off, disable **Confirm email** in your project.
*   **Confirm email** determines if users need to confirm their email address after signing up.
    *   If **Confirm email** is enabled, a `user` is returned but `session` is null.
    *   If **Confirm email** is disabled, both a `user` and a `session` are returned.
*   When the user confirms their email address, they are redirected to the `SITE_URL` by default. You can modify your `SITE_URL` or add additional redirect URLs in your project.
*   If `SignUp()` is called for an existing confirmed user:
    *   When both **Confirm email** and **Confirm phone** (even when phone provider is disabled) are enabled in your project, an obfuscated/fake user object is returned.
    *   When either **Confirm email** or **Confirm phone** (even when phone provider is disabled) is disabled, the error message, `User already registered` is returned.

### SDK Method
`supabase.Auth.SignUp()`

### SDK Call
```csharp
var session = await supabase.Auth.SignUp(email, password);
````

### Parameters

#### Method Parameters

- **email** (string) - Required - The email address for the new user.
- **password** (string) - Required - The password for the new user.

### Request Example (C#)

```csharp
var email = "newuser@example.com";
var password = "SecurePassword123";
var session = await supabase.Auth.SignUp(email, password);
```

### Response

#### Success Response (Session)

- **session** (Session?) - The session object if email confirmation is disabled, otherwise null.

#### Response Example (C#)

```csharp
// If email confirmation is disabled:
// var session = {
//   "access_token": "...",
//   "refresh_token": "...",
//   "user": { "id": "...", "email": "newuser@example.com", ... }
// }

// If email confirmation is enabled:
// var session = null; // User must confirm email before session is active
```

````

--------------------------------

### Bitbucket Pipeline to Deploy Supabase Functions (YAML)

Source: https://supabase.com/docs/guides/functions/deploy

This Bitbucket Pipelines configuration defines a workflow to deploy Supabase Edge Functions. It includes a setup step to install the `supabase` CLI and a parallel step for deploying functions, utilizing a Node.js 20 image and Docker services for execution.

```yaml
image: node:20

pipelines:
  default:
    - step:
        name: Setup
        caches:
          - node
        script:
          - npm i supabase
    - parallel:
        - step:
            name: Functions Deploy
            script:
              - npx supabase init
              - npx supabase functions deploy --debug
            services:
              - docker
````

---

### Schedule cron job to delete old data - SQL

Source: https://supabase.com/docs/guides/cron/quickstart

Uses cron.schedule to delete events older than 1 week every Saturday at 3:30AM GMT. The job name is case-sensitive and cannot be edited after creation. This example demonstrates scheduled data cleanup using PostgreSQL's pg_cron extension.

```sql
select cron.schedule (
  'saturday-cleanup', -- name of the cron job
  '30 3 * * 6', -- Saturday at 3:30AM (GMT)
  $$ delete from events where event_time < now() - interval '1 week' $$
);
```

---

### POST /storage/buckets - Create a bucket

Source: https://supabase.com/docs/reference/csharp/storage-from-update

Creates a new Storage bucket. Requires `insert` permissions on the `buckets` resource.

````APIDOC
## POST /storage/buckets

### Description
Creates a new Storage bucket.

### Method
POST

### Endpoint
`/storage/buckets`

### Request Body
- **name** (string) - Required - The name of the bucket to create

### Policy Permissions Required
- `buckets` permissions: `insert`
- `objects` permissions: none

### Response
#### Success Response (201)
- **bucket** (object) - The newly created bucket object

#### Response Example
```csharp
var bucket = await supabase.Storage.CreateBucket("avatars");
````

````

--------------------------------

### Configure LLM Integration for Snaplet Seed

Source: https://supabase.com/docs/guides/local-development/seeding-your-database

To enable Large Language Model (LLM) capabilities for generating more realistic seed data, set your API keys for OpenAI or Groq as environment variables in your `.env` file. Replace `<your_openai_api_key>` or `<your_groq_api_key>` with your actual credentials.

```bash
OPENAI_API_KEY=<your_openai_api_key>
GROQ_API_KEY=<your_groq_api_key>
````

---

### Full Example: Create Table, Enable RLS, and Public SELECT Policy (PostgreSQL)

Source: https://supabase.com/docs/guides/database/postgres/row-level-security

This comprehensive example demonstrates the full workflow for setting up a `profiles` table, enabling Row Level Security on it, and then creating a `SELECT` policy that allows all users (including anonymous) to view public profiles.

```sql
create table profiles (
  id uuid primary key,
  user_id uuid references auth.users,
  avatar_url text
);
alter table profiles enable row level security;
create policy "Public profiles are visible to everyone."
on profiles for select
to anon         -- the Postgres Role (recommended)
using ( true ); -- the actual Policy
```

---

### Query Unnested Arrays in Edge Logs with BigQuery SQL

Source: https://supabase.com/docs/guides/platform/logs

Use cross join unnest() operations to query nested metadata objects in edge logs. This example demonstrates how to access deeply nested fields like request method and country IP information by joining each array level sequentially.

```sql
select timestamp, request.method, header.cf_ipcountry
from
  edge_logs as t
  cross join unnest(t.metadata) as metadata
  cross join unnest(metadata.request) as request
  cross join unnest(request.headers) as header;
```

---

### Test Supabase Iceberg Catalog Connection with cURL

Source: https://supabase.com/docs/guides/storage/analytics/connecting-to-analytics-bucket

This cURL command verifies the successful setup of your Supabase Iceberg REST Catalog by sending a GET request to its configuration endpoint. Successful execution requires replacing placeholders with your project reference, bucket name, and a valid Supabase Service Key for authentication.

```shell
curl \
  --request GET -sL \
  --url 'https://<your-project-ref>.supabase.co/storage/v1/iceberg/v1/config?warehouse=<bucket-name>' \
  --header 'Authorization: Bearer <your-service-key>'
```

---

### Initialize Angular Project with CLI

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-angular

Create a new Angular application using the Angular CLI with specific configuration options including standalone false, zoneless true, and routing disabled. Installs the Supabase JavaScript client library as the primary dependency.

```bash
npx ng new supabase-angular --routing false --style css --standalone false --zoneless true --ssr false
cd supabase-angular
npm install @supabase/supabase-js
```

---

### Create Database Trigger for Supabase Realtime Broadcast (SQL)

Source: https://supabase.com/docs/guides/getting-started/ai-prompts/use-realtime

This SQL snippet provides the necessary database trigger setup for broadcasting table changes. It creates an `AFTER INSERT OR UPDATE OR DELETE` trigger on the `messages` table, executing a function to notify clients of changes, which is essential when migrating to broadcast events.

```sql
CREATE TRIGGER messages_broadcast_trigger
  AFTER INSERT OR UPDATE OR DELETE ON messages
  FOR EACH ROW EXECUTE FUNCTION notify_table_changes();
```

---

### Installation

Source: https://supabase.com/docs/reference/python/auth-signinwithotp

Install the Supabase Python client library via PyPI package manager. Requires Python version 3.8 or higher.

````APIDOC
## Installation

### Description
Install the Supabase Python client library to interact with Supabase services.

### Method
Package Installation

### Installation Command
```bash
pip install supabase
````

### Requirements

- Python > 3.8

### Supported Package Managers

- PyPI (recommended)
- Conda

````

--------------------------------

### Auth Admin Setup - Server-Side Client Configuration

Source: https://supabase.com/docs/reference/swift/initializing

Configure and initialize the Auth Admin client for server-side operations. Requires service_role key and should only be used in trusted server environments.

```APIDOC
## Auth Admin Client Setup

### Description
Create and configure a server-side Supabase client with admin authentication capabilities.

### Prerequisites
- Service role key (never expose in browser)
- Trusted server environment

### Configuration Example
```swift
import Supabase

let supabase = SupabaseClient(
  supabaseURL: supabaseURL,
  supabaseKey: serviceRoleKey
)

// Access auth admin api
let adminAuthClient = supabase.auth.admin
````

### Important Security Notes

- **Never expose service_role key in the browser**
- **Only use on trusted servers**
- Service role key has full administrative access
- Always keep credentials secure and use environment variables

### Usage

Once configured, access admin methods via:

```swift
supabase.auth.admin.getUserById(id)
supabase.auth.admin.listUsers()
supabase.auth.admin.createUser(attributes:)
supabase.auth.admin.updateUserById(id:attributes:)
supabase.auth.admin.deleteUser(id:)
supabase.auth.admin.inviteUserByEmail(email:data:redirectTo:)
```

### Notes

- Admin methods require service_role authentication
- All admin operations are audit logged
- Use separate service role key from anon key

````

--------------------------------

### Setup Server-Side Auth Admin Client

Source: https://supabase.com/docs/reference/kotlin/broadcastmessage

Configures a server-side Supabase authentication client with service_role credentials for accessing admin authentication methods. This setup is required for all admin operations.

```APIDOC
## Server-Side Auth Admin Client Setup

### Description
Creates a server-side Supabase auth client with service_role key for accessing admin authentication methods. Admin methods should only be called from trusted servers.

### Configuration Example
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://id.supabase.co",
    supabaseKey = "supabaseKey"
) {
    install(Auth) {
        minimalConfig() //disables session saving and auto-refreshing
    }
    // install other plugins (these will use the service role key)
}
supabase.auth.importAuthToken("service_role")

// Access auth admin api
val adminAuthClient = supabase.auth.admin
````

### Security Requirements

- **service_role** key must be kept confidential.
- Never expose `service_role` key in browser or client-side code.
- Only call admin methods from trusted server environments.
- Use `minimalConfig()` to disable automatic session handling if needed.

### Key Concepts

- Any method under `supabase.auth.admin` requires a `service_role` key.
- `service_role` key has elevated privileges for user management.
- All admin operations must be server-side only.

### Available Admin Methods

- `retrieveUserById(uid)` - Fetch specific user by ID.
- `retrieveUsers(page, perPage)` - List all users with pagination.
- And other administrative authentication operations.

````

--------------------------------

### GET /query - Explain Query Execution Plan

Source: https://supabase.com/docs/reference/swift/auth-resend

Get the Postgres EXPLAIN execution plan of a query for debugging slow queries. This method works on any query including rpc() and write operations. The explain() functionality must be enabled in your project settings for security reasons.

```APIDOC
## GET Query with Explain

### Description
Retrieve the Postgres EXPLAIN execution plan for a query to aid in performance debugging.

### Method
GET

### Endpoint
/query/explain

### Parameters
#### Query Parameters
- **table** (string) - Required - The table name to query
- **select** (string) - Optional - Columns to select

### Request Example
```swift
try await supabase
  .from("instruments")
  .select()
  .explain()
  .execute()
  .value
````

### Response

#### Success Response (200)

- **executionPlan** (object) - Postgres EXPLAIN execution plan details
- **planning** (object) - Query planning information

#### Response Example

```json
{
  "executionPlan": {
    "plan": "Seq Scan on instruments",
    "rows": 100,
    "width": 32
  }
}
```

### Notes

- Explain is not enabled by default as it can reveal sensitive database information
- Only enable for testing environments or use pre-request functions for production protection
- Must enable functionality in project settings before use

````

--------------------------------

### Create Trigger Function for Custom Notifications

Source: https://supabase.com/docs/guides/realtime/getting_started

Creates a PostgreSQL trigger function that sends custom notification payloads using realtime.send when new messages are inserted. This approach allows fine-grained control over what data is broadcast, supports private channels, and uses JSONB to structure custom notification objects with message metadata.

```sql
-- Create a trigger function for custom notifications
CREATE OR REPLACE FUNCTION notify_message_activity()
RETURNS TRIGGER AS $$
BEGIN
  -- Send custom notification when new message is created
  IF TG_OP = 'INSERT' THEN
    PERFORM realtime.send(
      'room:' || NEW.room_id::text || ':notifications',
      'message_created',
      jsonb_build_object(
        'message_id', NEW.id,
        'user_id', NEW.user_id,
        'room_id', NEW.room_id,
        'created_at', NEW.created_at
      ),
      true  -- private channel
    );
  END IF;

  RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Apply trigger to your messages table
CREATE TRIGGER messages_notification_trigger
  AFTER INSERT ON messages
  FOR EACH ROW EXECUTE FUNCTION notify_message_activity();
````

---

### Creating a New Migration with `supabase migration new`

Source: https://supabase.com/docs/reference/cli/supabase-bootstrap

Demonstrates how to use the `supabase migration new` command to create a new migration file, naming it `schema_test`. This action generates a timestamp-prefixed SQL file within the `supabase/migrations` directory, ready for schema changes.

```bash
supabase migration new schema_test
```

---

### Google OAuth Prerequisites and Setup

Source: https://supabase.com/docs/guides/auth/social-login/auth-google_platform=android

Required configuration steps in Google Cloud Platform including audience setup, scope configuration, and consent screen branding for Supabase Google authentication.

```APIDOC
## Google OAuth Prerequisites

### Description
Prerequisite steps and configurations required to enable Google Sign In with Supabase.

### Required Setup Steps

1. **Google Cloud Project Setup**
   - Create new project in Google Cloud Platform
   - Navigate to Google Auth Platform console

2. **Application Configuration**
   - Configure **Audience**: Define which Google users can sign in
   - Configure **Data Access (Scopes)**: Define permissions for user data access
   - Configure **Branding and Verification**: Add logo and name for consent screen

### Required Scopes
Configure these scopes in Google Auth Platform Data Access (Scopes) screen:
- `openid` (add manually)
- `.../auth/userinfo.email` (added by default)
- `...auth/userinfo.profile` (added by default)

### Consent Screen Branding
Strongly recommended configuration options:

1. **Brand Verification**
   - Verify application branding (logo and name)
   - Improves user trust and reduces phishing risk
   - May take several business days for approval

2. **Custom Domain Setup**
   - Set up custom domain (e.g., `auth.example.com` or `api.example.com`)
   - Recommended approach for production applications
   - Avoids displaying `<project-id>.supabase.co` in consent screen
   - Significantly improves user trust and security perception

### Important Notes
- Adding sensitive or restricted scopes may require application verification
- Verification process can take a long time
- Custom domain improves phishing attempt detection
- Multiple Client IDs supported for Web, iOS, and Android platforms
```

---

### Create Supabase Project using Management API with cURL

Source: https://supabase.com/docs/guides/getting-started/quickstarts/ios-swiftui

Demonstrates how to programmatically create a new Supabase project using the Management API. Requires an access token from the Supabase dashboard and an organization ID. The script retrieves your organizations, then creates a new project with specified name, region, and database password.

```bash
# First, get your access token from https://supabase.com/dashboard/account/tokens
export SUPABASE_ACCESS_TOKEN="your-access-token"

# List your organizations to get the organization ID
curl -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \
  https://api.supabase.com/v1/organizations

# Create a new project (replace <org-id> with your organization ID)
curl -X POST https://api.supabase.com/v1/projects \
  -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "organization_id": "<org-id>",
    "name": "My Project",
    "region": "us-east-1",
    "db_pass": "<your-secure-password>"
  }'
```

---

### Create Multiple PostgreSQL Databases

Source: https://supabase.com/docs/guides/troubleshooting/supavisor-faq-YyP5tI

Demonstrates how to create new databases within a PostgreSQL instance using SQL `CREATE DATABASE` statements. This is essential for managing distinct data environments and understanding the 'database' component in connection pooling.

```sql
CREATE DATABASE postgres;
CREATE DATABASE another_database;
```

---

### Get User Claims from Verified JWT (Python)

Source: https://supabase.com/docs/reference/python/auth-exchangecodeforsession

This example retrieves user claims directly from a verified access token (JWT). It verifies the JWT against the server's JWKS endpoint, offering faster responses than `get_user`. This method is preferred for obtaining claims without making an additional request to the Auth server.

```python
response = supabase.auth.get_claims()
```

---

### POST /auth/sign_up - Create a new user

Source: https://supabase.com/docs/reference/python/eq

Create a new user account with email and password credentials. By default, users must verify their email address before logging in. The response includes a user object and optionally a session, depending on email confirmation settings.

````APIDOC
## POST /auth/sign_up

### Description
Create a new user account with email and password. User email verification can be toggled via project settings.

### Method
POST

### Endpoint
/auth/sign_up

### Parameters
#### Request Body
- **email** (string) - Required - User email address
- **password** (string) - Required - User password
- **metadata** (object) - Optional - Additional user metadata

### Request Example
```python
response = supabase.auth.sign_up(
    {
        "email": "email@example.com",
        "password": "password"
    }
)
````

### Response

#### Success Response (200)

- **user** (object) - User object with id, email, and metadata
- **session** (object|null) - Session object if email confirmation is disabled, null if enabled

### Notes

- If **Confirm email** is enabled: user returned but session is null
- If **Confirm email** is disabled: both user and session are returned
- Email links and OTPs expire after 24 hours
- For existing confirmed users: returns obfuscated user object or 'User already registered' error depending on settings

````

--------------------------------

### GET /auth - Initialize Auth Client

Source: https://supabase.com/docs/reference/swift/auth-getuseridentities

Create and initialize the Supabase authentication client with custom configuration including Supabase URL and API key.

```APIDOC
## GET /auth

### Description
Initialize the Supabase authentication client with project-specific credentials and configuration.

### Method
GET

### Endpoint
supabase.auth

### Parameters
#### Client Configuration
- **supabaseURL** (URL) - Required - Your Supabase project URL (e.g., https://xyzcompany.supabase.co)
- **supabaseKey** (string) - Required - Your publishable or anonymous key

### Request Example
```swift
let supabase = SupabaseClient(
  supabaseURL: URL(string: "https://xyzcompany.supabase.co")!,
  supabaseKey: "publishable-or-anon-key"
)
let auth = supabase.auth
````

### Response

#### Success Response (200)

- **auth** (object) - Initialized authentication client instance
- **session** (object) - Current user session (if authenticated)
- **user** (object) - Current user object (if authenticated)

````

--------------------------------

### Perform Client-side Keycloak Login with Supabase JavaScript

Source: https://supabase.com/docs/guides/auth/social-login/auth-keycloak

This JavaScript function initiates the OAuth sign-in process with Keycloak using the Supabase client. It specifies 'keycloak' as the provider and includes the 'openid' scope, which is required for Keycloak versions 22 and above. It returns data and error objects indicating the outcome of the authentication attempt.

```javascript
async function signInWithKeycloak() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'keycloak',
    options: {
      scopes: 'openid',
    },
  })
}
````

---

### POST /auth/v1/signup

Source: https://supabase.com/docs/reference/csharp/gte

Creates a new user account. By default, users must verify their email address before logging in. The response includes a user object and conditionally includes a session based on email confirmation settings.

````APIDOC
## POST /auth/v1/signup

### Description
Creates a new user account. Email confirmation behavior depends on project settings. When Confirm email is enabled, only a user object is returned. When disabled, both user and session are returned.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Request Body
- **email** (string) - Required - User's email address
- **password** (string) - Required - User's password

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
````

### Response

#### Success Response (200)

- **user** (object) - User object with authentication details
- **user.id** (string) - User unique identifier
- **user.email** (string) - User email address
- **session** (object) - Session object (null if Confirm email is enabled)
- **session.access_token** (string) - JWT access token
- **session.refresh_token** (string) - Refresh token for session renewal

#### Response Example (Confirm email enabled)

```json
{
  "user": { "id": "user123", "email": "user@example.com" },
  "session": null
}
```

#### Response Example (Confirm email disabled)

```json
{
  "user": { "id": "user123", "email": "user@example.com" },
  "session": { "access_token": "token123", "refresh_token": "refresh123" }
}
```

### Notes

- Users are redirected to SITE_URL after email confirmation
- If SignUp is called for an existing confirmed user, error handling depends on project settings
- Obfuscated user object returned if both Confirm email and Confirm phone are enabled

````

--------------------------------

### Implement PostgreSQL List Partitioning for Customer Data

Source: https://supabase.com/docs/guides/database/partitions

This example illustrates how to set up list partitioning in PostgreSQL for a `customers` table. Data is partitioned based on the `country` column, grouping customers from specific regions. The parent table is defined with `PARTITION BY LIST`, and individual partitions like `customers_americas` are created using `FOR VALUES IN (...)` clauses for specified country codes.

```sql
-- Create the partitioned table
create table customers (
    id bigint generated by default as identity,
    name text,
    country text,

    -- We need to include all the
    -- partitioning columns in constraints:
    primary key (country, id)
)
partition by list(country);

create table customers_americas
	partition of customers
	for values in ('US', 'CANADA');

create table customers_asia
	partition of customers
  for values in ('INDIA', 'CHINA', 'JAPAN');
````

---

### Create Custom Logs in PostgreSQL pg_cron Functions (PL/pgSQL)

Source: https://supabase.com/docs/guides/troubleshooting/pgcron-debugging-guide-n1KTaz

This PL/pgSQL function demonstrates how to embed custom logging within a PostgreSQL function intended for use with pg_cron. It records the start and end times of the function's execution and includes exception handling to catch and log errors, providing more granular insight into cron job operations.

```sql
create or replace function log_example()
returns void
language plpgsql
as $$
begin

     -- Logging start of function
     raise log 'logging start of cron function call: (%)', (select now());

    -- INSERT LOGIC HERE

     -- Logging end of function
     raise log 'logging end of cron function call: (%)', (select now());

    exception
     -- Handle exceptions here if needed
     when others then
         raise exception 'An error occurred in cron function <insert name here>. ERROR MESSAGE: %', sqlerrm;

end;
$$;
```

---

### Sign up user with email and password in JavaScript

Source: https://supabase.com/docs/guides/auth/passwords

Creates a new user account with email and password using the signUp() method. Optionally specifies an email redirect URL for post-confirmation navigation. This example uses the implicit flow for client-only applications.

```javascript
async function signUpNewUser() {
  const { data, error } = await supabase.auth.signUp({
    email: "valid.email@supabase.io",
    password: "example-password",
    options: {
      emailRedirectTo: "https://example.com/welcome",
    },
  });
}
```

---

### GET /select - Using Explain for Query Debugging

Source: https://supabase.com/docs/reference/kotlin/auth-mfa-challengeandverify

Retrieves the Postgres EXPLAIN execution plan for debugging and analyzing slow queries. This endpoint helps identify performance bottlenecks by showing how the database executes a query, with optional parameters for detailed analysis including execution time and buffer usage.

````APIDOC
## GET /select - Using Explain for Query Debugging

### Description
Returns the Postgres EXPLAIN execution plan for a query to help debug and optimize slow queries. Provides detailed information about query planning and execution strategies.

### Method
GET

### Endpoint
/tables/{table}/select

### Parameters
#### Path Parameters
- **table** (string) - Required - The name of the table to analyze

#### Query Parameters
- **analyze** (boolean) - Optional - If true, executes the query and returns actual run time (default: false)
- **verbose** (boolean) - Optional - If true, returns query identifier and output columns (default: false)
- **settings** (boolean) - Optional - If true, includes configuration parameters affecting query planning (default: false)
- **buffers** (boolean) - Optional - If true, includes buffer usage information (default: false)
- **wal** (boolean) - Optional - If true, includes WAL record generation information (default: false)
- **format** (string) - Optional - Output format: "text" (default) or "json"

#### Request Body
No request body required

### Request Example
```kotlin
val result = supabase.from("characters").select {
    explain()
}
````

### Response

#### Success Response (200)

- **data** (object/string) - The EXPLAIN execution plan in specified format
- **status** (number) - HTTP status code

#### Response Example

```json
{
  "plan": "Seq Scan on characters",
  "planning_time": 0.123,
  "execution_time": 0.456
}
```

### Notes

- Explain is disabled by default to prevent exposing sensitive database information
- Enable only in testing environments or with additional security protections
- Requires enabling via Performance Debugging Guide
- Works with any query type including rpc() and write operations

````

--------------------------------

### Create New User with Supabase signUp()

Source: https://supabase.com/docs/reference/javascript/auth-exchangecodeforsession

The `signUp()` method is used to create a new user account with Supabase Authentication, typically using an email and password. Depending on project settings like 'Confirm email', the user might need to verify their email before a session is established. This method handles user registration and can support PKCE for email signups.

```javascript
const { data, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
})
````

---

### Complete Example: Query JSON Attributes with Multiple Tables

Source: https://supabase.com/docs/guides/database/extensions/wrappers/paddle

Advanced example showing how to work with multiple Paddle foreign tables (products and subscriptions) and extract nested JSON attributes using different operators. Demonstrates both simple and complex JSON path extraction patterns.

```SQL
create foreign table paddle.products (
  id text,
  name text,
  tax_category text,
  status text,
  description text,
  created_at timestamp,
  updated_at timestamp,
  attrs jsonb
)
  server paddle_server
  options (
    object 'products',
    rowid_column 'id'
  );

-- extract product type for a product
select id, attrs->>'type' as type
from paddle.products where id = 'pro_01hymwj50rfavry9kqsf2vk6sy';

create foreign table paddle.subscriptions (
  id text,
  status text,
  created_at timestamp,
  updated_at timestamp,
  attrs jsonb
)
  server paddle_server
  options (
    object 'subscriptions',
    rowid_column 'id'
  );

-- extract subscription items for a subscription
select id, attrs#>'{items,status}' as item_status
from paddle.subscriptions where id = 'sub_01hv959anj4zrw503h2acawb3p';
```

---

### Install PyIceberg and PyArrow

Source: https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg

This command installs the necessary Python libraries, `pyiceberg` for Apache Iceberg client functionality and `pyarrow` for Arrow-based data manipulation, required to interact with Iceberg tables.

```shell
pip install pyiceberg pyarrow
```

---

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/kotlin/start

Creates a new user account with email or phone authentication. The response depends on email confirmation settings - returns user object if confirmation is enabled, or logs in user automatically if disabled.

````APIDOC
## POST /auth/signup

### Description
Creates a new user account using either email or phone as the authentication provider. User verification requirements depend on project configuration.

### Method
POST

### Endpoint
`supabase.auth.signUpWith(provider)`

### Parameters
#### Request Body
- **provider** (Email | Phone) - Required - Authentication provider type
- **email** (string) - Required (Email provider) - User email address
- **password** (string) - Required (Email provider) - User password
- **phone** (string) - Required (Phone provider) - User phone number
- **redirectUrl** (string) - Optional - URL to redirect after email confirmation
- **config** (Email.Config or Phone.Config) - Optional - Provider-specific configuration

### Request Example
```kotlin
val user = supabase.auth.signUpWith(Email) {
    email = "example@email.com"
    password = "example-password"
}
````

### Response

#### Success Response (200) - Confirm Email Enabled

- **user** (object) - New user object with authentication details
- **status** (integer) - HTTP status code

#### Success Response (200) - Confirm Email Disabled

- **user** (null) - User is automatically logged in
- **session** (object) - Active session object

#### Response Example

```json
{
  "user": {
    "id": "user-uuid",
    "email": "example@email.com",
    "email_confirmed_at": null,
    "created_at": "2024-01-01T00:00:00Z"
  }
}
```

### Notes

- Email confirmation required by default; can be disabled in project settings
- Redirect URL defaults to SITE_URL if not specified
- For existing confirmed users: obfuscated user returned if confirmations enabled, "User already registered" error if disabled

````

--------------------------------

### supabase status

Source: https://supabase.com/docs/reference/cli/supabase-bootstrap

Shows status of the Supabase local development stack. Requires the local development stack to be started by running `supabase start` or `supabase db start`.

```APIDOC
## CLI COMMAND supabase status

### Description
Shows status of the Supabase local development stack. Requires the local development stack to be started by running `supabase start` or `supabase db start`.

### Method
CLI COMMAND

### Endpoint
supabase status [flags]

### Parameters
#### Flags
- **--override-name** (strings) - Optional - Override specific variable names.

### Request Example
```bash
supabase status
````

### Response

#### Success Response (CLI Success)

- **message** (string) - Status of the local development setup and connection parameters.
- **API URL** (string) - The URL for the local API.
- **GraphQL URL** (string) - The URL for the local GraphQL endpoint.
- **DB URL** (string) - The connection string for the local database.
- **Studio URL** (string) - The URL for the local Supabase Studio.
- **Inbucket URL** (string) - The URL for the local Inbucket email client.
- **JWT secret** (string) - The JWT secret for local development.
- **anon key** (string) - The anonymous key for local development.
- **service_role key** (string) - The service role key for local development.

#### Response Example

```
supabase local development setup is running.

         API URL: http://127.0.0.1:54321
     GraphQL URL: http://127.0.0.1:54321/graphql/v1
          DB URL: postgresql://postgres:postgres@127.0.0.1:54322/postgres
      Studio URL: http://127.0.0.1:54323
    Inbucket URL: http://127.0.0.1:54324
      JWT secret: super-secret-jwt-token-with-at-least-32-characters-long
        anon key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0
service_role key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU
```

````

--------------------------------

### POST /auth/signup

Source: https://supabase.com/docs/reference/swift/insert

Create a new user account with email or phone number. Email verification may be required depending on project settings. Returns user object and session if email confirmation is disabled.

```APIDOC
## POST /auth/signup

### Description
Sign up a new user with email and password or phone and password.

### Method
POST

### Endpoint
`/auth/v1/signup`

### Parameters
#### Request Body
- **email** (string) - Optional - User email address. Either email or phone must be provided.
- **phone** (string) - Optional - User phone number. Either email or phone must be provided.
- **password** (string) - Required - User password for authentication.
- **data** (JSONObject) - Optional - Custom metadata object for storing additional user information.
- **redirectTo** (URL) - Optional - Redirect URL for email signup links. Must be a configured redirect URL.
- **captchaToken** (string) - Optional - CAPTCHA token for verification.

### Request Example
```swift
try await supabase.auth.signUp(
  email: "example@email.com",
  password: "example-password"
)
````

### Response

#### Success Response (200)

- **user** (object) - The created user object
- **session** (object) - The user session (null if email confirmation is enabled)

### Notes

- If Confirm email is enabled, user object is returned but session is null
- If Confirm email is disabled, both user and session are returned
- For existing confirmed users, response depends on project confirmation settings
- User is redirected to SITE_URL by default after email confirmation

````

--------------------------------

### POST /auth/v1/signup

Source: https://supabase.com/docs/reference/python/rangelte

Create a new user with an email and password or phone number. Configuration for email verification determines if a session is returned immediately or after confirmation. Redirects to `SITE_URL` upon email confirmation.

```APIDOC
## POST /auth/v1/signup

### Description
Creates a new user account. By default, email verification is required. If 'Confirm email' is enabled, a user object is returned but the session is null until verification. If disabled, both user and session are returned. This endpoint also handles scenarios for existing users and redirects.

### Method
POST

### Endpoint
`/auth/v1/signup`

### Parameters
#### Request Body
- **email** (string) - Required - The user's email address.
- **password** (string) - Required - The user's chosen password.
- **phone** (string) - Optional - The user's phone number (if signing up with phone).
- **data** (object) - Optional - Additional user metadata.
- **email_redirect_to** (string) - Optional - A URL to redirect the user to after email confirmation.

### Request Example
```json
{
  "email": "email@example.com",
  "password": "password"
}
````

### Response

#### Success Response (200)

- **user** (object) - The newly created user object.
- **session** (object) - The session object (present if 'Confirm email' is disabled).

#### Response Example

```json
{
  "user": {
    "id": "uuid",
    "email": "email@example.com",
    "phone": null,
    "created_at": "2023-01-01T00:00:00Z",
    "updated_at": "2023-01-01T00:00:00Z",
    "email_confirmed_at": null,
    "phone_confirmed_at": null,
    "user_metadata": {}
  },
  "session": null
}
```

````

--------------------------------

### GET /rest/v1/{table_name} (Get Query Execution Plan)

Source: https://supabase.com/docs/reference/python/auth-exchangecodeforsession

Retrieve the Postgres `EXPLAIN` execution plan for a query. This is useful for debugging slow queries and translates to an 'explain' query parameter.

```APIDOC
## GET /rest/v1/{table_name} (Get Query Execution Plan)

### Description
Retrieve the Postgres `EXPLAIN` execution plan for a query. This is useful for debugging slow queries. Note that explain is not enabled by default for security reasons.

### Method
GET

### Endpoint
/rest/v1/{table_name}

### Parameters
#### Path Parameters
- **table_name** (string) - Required - The name of the table to query.

#### Query Parameters
- **explain** (boolean) - Required - Set to `true` to request the query execution plan.
- **wal** (boolean) - Optional - If `true`, include information on WAL record generation.
- **verbose** (boolean) - Optional - If `true`, the query identifier will be returned and `data` will include the output columns of the query.
- **settings** (boolean) - Optional - If `true`, include information on configuration parameters that affect query planning.
- **format** (string) - Optional - The format of the output, can be `"text"` (default) or `"json"`.
- **buffers** (boolean) - Optional - If `true`, include information on buffer usage.
- **analyze** (boolean) - Optional - If `true`, the query will be executed and the actual run time will be returned.

### Request Example
```python
response = (
    supabase.table("planets")
    .select("*")
    .explain()
    .execute()
)
````

### Response

#### Success Response (200)

The Postgres `EXPLAIN` output for the query.

#### Response Example

```text
Aggregate  (cost=10.00..10.01 rows=1 width=8)
  ->  Seq Scan on planets  (cost=0.00..10.00 rows=1 width=8)
```

````

--------------------------------

### Implement Conditional Broadcasting in PostgreSQL Trigger (SQL)

Source: https://supabase.com/docs/guides/getting-started/ai-prompts/use-realtime

This SQL example demonstrates how to add conditional logic within a PostgreSQL trigger to broadcast only significant changes. Specifically, it uses an `IF` statement to check if an `UPDATE` operation has altered the `status` column (using `IS DISTINCT FROM`) before calling `realtime.broadcast_changes`, thus optimizing real-time updates by preventing broadcasts for irrelevant modifications.

```sql
-- Only broadcast significant changes
IF TG_OP = 'UPDATE' AND OLD.status IS DISTINCT FROM NEW.status THEN
  PERFORM realtime.broadcast_changes(
    'room:' || NEW.room_id::text,
    TG_OP,
    TG_OP,
    TG_TABLE_NAME,
    TG_TABLE_SCHEMA,
    NEW,
    OLD
  );
END IF;
````

---

### Install Supabase client library in React project using npm

Source: https://supabase.com/docs/guides/auth/quickstarts/react

After creating the React application, navigate into its directory and use npm to install the official Supabase client library. This package provides the necessary methods to interact with Supabase services, including authentication, database, and storage.

```shell
cd my-app && npm install @supabase/supabase-js
```

---

### Installation - Add Supabase Package

Source: https://supabase.com/docs/reference/dart/auth-mfa-getauthenticatorassurancelevel

Install the supabase_flutter package from pub.dev for Flutter projects. This provides access to all Supabase functionality including database, auth, real-time, and storage services.

```APIDOC
## Installation

### Description
Install the Supabase Flutter package from pub.dev to enable Supabase integration in your Flutter application.

### Method
Package Installation

### Package
supabase_flutter

### Installation Command
```

flutter pub add supabase_flutter

```

### Supported Versions
- **supabase_flutter** - ^2.0.0 (recommended)

### Requirements
- Flutter SDK installed
- Dart SDK compatible with Flutter version
- pub.dev access

### Notes
- For non-Flutter Dart projects, use the `supabase` package instead
- Ensure pubspec.yaml is updated with the latest version
```

---

### Get Supabase Query Execution Plan (Swift)

Source: https://supabase.com/docs/reference/swift/auth-getclaims

Demonstrates how to use the `explain()` method on a Supabase query to retrieve its PostgreSQL execution plan for performance debugging. It shows fetching all records from the 'instruments' table and then applying `explain()` and `execute()`.

```Swift
try await supabase
  .from("instruments")
  .select()
  .explain()
  .execute()
  .value
```

---

### Create PostgreSQL Trigger to Broadcast Specific Table Changes (SQL)

Source: https://supabase.com/docs/guides/getting-started/ai-prompts/use-realtime

This example provides a more specialized PostgreSQL trigger function, `room_messages_broadcast_trigger`, tailored for specific tables. It demonstrates how to customize the broadcast topic (e.g., 'room:' followed by `room_id`) when using `realtime.broadcast_changes` to send real-time updates for `INSERT`, `UPDATE`, or `DELETE` operations, allowing for more granular control over change notifications.

```sql
CREATE OR REPLACE FUNCTION room_messages_broadcast_trigger()
RETURNS TRIGGER AS $$
SECURITY DEFINER
LANGUAGE plpgsql
AS $$
BEGIN
  PERFORM realtime.broadcast_changes(
    'room:' || COALESCE(NEW.room_id, OLD.room_id)::text,
    TG_OP,
    TG_OP,
    TG_TABLE_NAME,
    TG_TABLE_SCHEMA,
    NEW,
    OLD
  );
  RETURN COALESCE(NEW, OLD);
END;
$$;
```

---

### Install Supabase SSR packages with npm

Source: https://supabase.com/docs/guides/auth/server-side/creating-a-client

Install the required Supabase packages for SSR support. The @supabase/supabase-js package provides core Supabase functionality, while @supabase/ssr provides SSR-specific utilities for cookie-based authentication.

```bash
npm install @supabase/supabase-js @supabase/ssr
```

---

### POST Initialize Supabase Client

Source: https://supabase.com/docs/reference/kotlin/auth-getsession

Initialize the Supabase client with required credentials and optional configuration. Supports installing multiple plugins including Auth, Postgrest, Storage, Realtime, Functions, and GraphQL.

```APIDOC
## POST Initialize Supabase Client

### Description
Create and configure a Supabase client instance with authentication and other modules.

### Endpoint
creatSupabaseClient()

### Parameters
- **supabaseUrl** (String) - Required - The unique Supabase URL from your project dashboard
- **supabaseKey** (String) - Required - The unique Supabase Key (publishable or anon key) from your project dashboard
- **builder** (SupabaseClientBuilder.() -> Unit) - Optional - Apply additional configuration and install plugins

### Request Example
```

val supabase = createSupabaseClient(
supabaseUrl = "https://xyzcompany.supabase.co",
supabaseKey = "publishable-or-anon-key"
) {
install(Auth)
install(Postgrest)
}

```

### Response
- **supabase** (SupabaseClient) - Configured client instance ready for use

### Plugins Available
- Auth - Authentication module
- Postgrest - PostgreSQL REST API
- Storage - File storage
- Realtime - Real-time database subscriptions
- Functions - Edge functions
- GraphQL - GraphQL API
```

---

### POST /auth/signup

Source: https://supabase.com/docs/reference/csharp/storage-updatebucket

Creates a new user account. Email verification may be required depending on project settings. Returns user object and session (if email confirmation is disabled).

````APIDOC
## POST /auth/signup

### Description
Creates a new user account in Supabase Auth.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Required - User's email address
- **password** (string) - Required - User's password

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
````

### Response

#### Success Response (200)

- **user** (User) - User object (always returned)
- **session** (Session) - Session object (null if email confirmation enabled, populated if disabled)

### Notes

- By default, user must verify email before logging in
- If **Confirm email** is enabled: user returned, session is null
- If **Confirm email** is disabled: both user and session returned
- User redirected to SITE_URL upon email confirmation
- For existing confirmed users: obfuscated user object or 'User already registered' error

````

--------------------------------

### Auth Client Initialization

Source: https://supabase.com/docs/reference/swift/auth-linkidentity

Demonstrates how to initialize the Supabase authentication client with a URL and API key, optionally with custom storage.

```APIDOC
## Auth Client Initialization

### Description
Initialize the Supabase authentication client (`supabase.auth`) using your project's URL and anonymized key. This setup is crucial for performing any authentication-related operations. Custom storage can also be configured.

### Client-side Method
`SupabaseClient(supabaseURL: URL, supabaseKey: String)`

### Endpoint
N/A (Client-side initialization)

### Parameters
#### Constructor Parameters
- **supabaseURL** (URL) - Required - The base URL for your Supabase project (e.g., `https://xyzcompany.supabase.co`).
- **supabaseKey** (String) - Required - Your project's publishable or anonymous API key.

### Request Example
```swift
let supabase = SupabaseClient(
  supabaseURL: URL(string: "https://xyzcompany.supabase.co")!,
  supabaseKey: "publishable-or-anon-key"
)
let auth = supabase.auth
````

### Notes

This is a client-side SDK initialization process and does not involve direct calls to a REST API endpoint.

````

--------------------------------

### GET /storage

Source: https://supabase.com/docs/reference/python/filter

No description

--------------------------------

### Client Initialization

Source: https://supabase.com/docs/reference/csharp/upsert

Initialize a new Supabase client with project credentials and options. The client requires your project URL and public API key from the Supabase admin panel.

```APIDOC
## Initialize Client

### Description
Initialize a new Supabase client instance with project credentials and configuration options.

### Method
Constructor / Initialization

### Class
Supabase.Client

### Parameters
- **url** (string) - Required - Your Supabase project URL from admin panel
- **key** (string) - Required - Your Supabase public API key from admin panel
- **options** (SupabaseOptions) - Optional - Configuration options for client behavior

### Options
- **AutoConnectRealtime** (bool) - Optional - Enable automatic real-time connection. Default: false

### Request Example
```csharp
var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");

var options = new Supabase.SupabaseOptions
{
    AutoConnectRealtime = true
};

var supabase = new Supabase.Client(url, key, options);
await supabase.InitializeAsync();
````

### Requirements

- Models must derive from BaseModel
- Use Table, PrimaryKey, and Column attributes to map C# properties to database columns
- Call InitializeAsync() after client creation

````

--------------------------------

### supabase test db

Source: https://supabase.com/docs/reference/cli/supabase-bootstrap

Executes pgTAP tests against the local database. Requires the local development stack to be started by running `supabase start`.

```APIDOC
## CLI COMMAND supabase test db

### Description
Executes pgTAP tests against the local database. Requires the local development stack to be started by running `supabase start`.

### Method
CLI COMMAND

### Endpoint
supabase test db [path] ... [flags]

### Parameters
#### Path Parameters
- **path** (string) - Optional - Path to test files. Test files can be suffixed by either `.sql` or `.pg` extension.

#### Flags
- **--db-url** (string) - Optional - Tests the database specified by the connection string (must be percent-encoded).
- **--linked** (boolean) - Optional - Runs pgTAP tests on the linked project.
- **--local** (boolean) - Optional - Runs pgTAP tests on the local database.

### Request Example
```bash
supabase test db
````

### Response

#### Success Response (CLI Success)

- **message** (string) - Output of the pgTAP test execution.

#### Response Example

```
# No explicit response example provided in the source text, but typically shows test results.
```

````

--------------------------------

### POST /auth/signup

Source: https://supabase.com/docs/reference/csharp/delete

Creates a new user account. By default, users must verify their email address before logging in unless email confirmation is disabled. Returns a user object and session based on email confirmation settings.

```APIDOC
## POST /auth/signup

### Description
Creates a new user account with email and password.

### Method
POST

### Endpoint
/auth/signup

### Request Body
- **email** (string) - Required - User email address
- **password** (string) - Required - User password

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
````

### Response

#### Success Response (200/201)

- **user** (object) - User object with authentication details
- **session** (object) - Session object (null if email confirmation is enabled)

### Notes

- If **Confirm email** is enabled: user is returned but session is null
- If **Confirm email** is disabled: both user and session are returned
- Users are redirected to SITE_URL after confirming email
- If SignUp is called for existing confirmed user: returns obfuscated user object or "User already registered" error

````

--------------------------------

### Supabase Auth Admin Client Setup

Source: https://supabase.com/docs/reference/javascript/auth-getsession

This section outlines how to initialize the Supabase client specifically for admin authentication operations. It is crucial to use a 'service_role' key and ensure this setup is performed on a trusted server, never exposing the key in a browser environment.

```APIDOC
## Supabase Auth Admin Client Setup

### Description
Initializes the Supabase client with a `service_role` key to enable administrative authentication operations. This client should only be used in a secure server-side environment.

### Method
N/A (Client Setup)

### Endpoint
N/A (Client Setup)

### Request Example
N/A

### Response
N/A

```javascript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(supabase_url, service_role_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Access auth admin api
const adminAuthClient = supabase.auth.admin
````

````

--------------------------------

### Basic `supabase db lint` Command Syntax

Source: https://supabase.com/docs/reference/cli/supabase-bootstrap

Shows the general syntax for the `supabase db lint` command, including an optional `flags` placeholder. These flags can be used to control the linting level, specify target schemas, or define conditions for exiting with a non-zero status.

```bash
supabase db lint [flags]
````

---

### Supabase Realtime phx_reply Protocol v2.0.0 Example

Source: https://supabase.com/docs/guides/realtime/protocol

This example demonstrates a complete `phx_reply` message using protocol version `2.0.0`, specifically in response to a `phx_join` request. It includes the `status` as "ok" and a `response` containing details of a `postgres_changes` subscription.

```json
[
  "1",
  "1",
  "realtime:chat-room",
  "phx_reply",
  {
    "status": "ok",
    "response": {
      "postgres_changes": [
        {
          "id": 106243155,
          "event": "*",
          "schema": "public",
          "table": "test"
        }
      ]
    }
  }
]
```

---

### Set up database.dev (dbdev) extensions in PostgreSQL

Source: https://supabase.com/docs/guides/local-development/testing/pgtap-extended

Installs prerequisite extensions (http and pg_tle) and sets up the supabase-dbdev package manager by fetching and installing the latest version from the database.dev API. This enables installation of community-maintained testing utilities and packages for Postgres development.

```sql
create extension if not exists http with schema extensions;
create extension if not exists pg_tle;
drop extension if exists "supabase-dbdev";
select pgtle.uninstall_extension_if_exists('supabase-dbdev');
select
    pgtle.install_extension(
        'supabase-dbdev',
        resp.contents ->> 'version',
        'PostgreSQL package manager',
        resp.contents ->> 'sql'
    )
from extensions.http(
    (
        'GET',
        'https://api.database.dev/rest/v1/'
        || 'package_versions?select=sql,version'
        || '&package_name=eq.supabase-dbdev'
        || '&order=version.desc'
        || '&limit=1',
        array[
            ('apiKey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtdXB0cHBsZnZpaWZyYndtbXR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAxMDczNzIsImV4cCI6MTk5NTY4MzM3Mn0.z2CN0mvO2No8wSi46Gw59DFGCTJrzM0AQKsu_5k134s')::extensions.http_header
        ],
        null,
        null
    )
) x,
lateral (
    select
        ((row_to_json(x) -> 'content') #>> '{}')::json -> 0
) resp(contents);
create extension "supabase-dbdev";
select dbdev.install('supabase-dbdev');
drop extension if exists "supabase-dbdev";
create extension "supabase-dbdev";
```

---

### Auth Admin Client Setup

Source: https://supabase.com/docs/reference/kotlin/auth-getsession

Demonstrates how to set up the `supabase.auth.admin` client for server-side operations. Admin methods require a `service_role` key and should only be invoked from a trusted server environment.

````APIDOC
## Auth Admin Client Setup

### Description
Demonstrates how to set up the `supabase.auth.admin` client for server-side operations. Admin methods require a `service_role` key and should only be invoked from a trusted server environment. Never expose your `service_role` key in client-side code.

### SDK Setup
`supabase.auth.admin`

### Parameters
#### Setup Parameters
- **supabaseUrl** (String) - Required - Your Supabase project URL.
- **supabaseKey** (String) - Required - Your Supabase `service_role` key.

### Request Example (Kotlin)
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://id.supabase.co",
    supabaseKey = "supabaseKey"
) {
    install(Auth) {
        minimalConfig() //disables session saving and auto-refreshing
    }
    // install other plugins (these will use the service role key)
}
supabase.auth.importAuthToken("service_role")

// Access auth admin api
val adminAuthClient = supabase.auth.admin
````

### Response

#### Success Response

- **adminAuthClient** (AdminAuth) - An initialized client instance for accessing admin authentication methods.

````

--------------------------------

### Minimize Joins in Supabase RLS Policies for Performance

Source: https://supabase.com/docs/guides/getting-started/ai-prompts/database-rls-policies

This example shows how to refactor an RLS policy to avoid costly direct joins between the source and target table, significantly improving performance. Instead of joining directly, the optimized policy fetches relevant filtering criteria into a set using a subquery and then uses the `IN` operator. The first policy demonstrates a slow join, while the second illustrates the optimized approach.

```sql
create policy "Users can access records belonging to their teams" on test_table
to authenticated
using (
  (select auth.uid()) in (
    select user_id
    from team_user
    where team_user.team_id = team_id
  )
);
````

```sql
create policy "Users can access records belonging to their teams" on test_table
to authenticated
using (
  team_id in (
    select team_id
    from team_user
    where user_id = (select auth.uid())
  )
);
```

---

### Initialize Supabase client with session in SvelteKit layout

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-sveltekit

Sets up the Supabase client and retrieves the user session in the SvelteKit layout server load function. Uses safe session retrieval on the server side and initializes the auth client with fetch and cookie handlers. Returns supabase instance and session data for use throughout the application.

```typescript
export const load: LayoutServerLoad = async ({
  locals: { supabase, safeGetSession },
}) => {
  const { data, error } = await supabase.auth.refreshSession();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return { supabase, session };
};
```

---

### Migration list workflow example - Supabase CLI

Source: https://supabase.com/docs/reference/cli/supabase-migration-new

Example workflow showing how to check migration status, delete local migration files, repair remote history, and re-sync migrations using supabase db pull command. Demonstrates complete migration repair process from detection to resolution.

```bash
supabase migration list
rm supabase/migrations/20230103054315_remote_commit.sql
supabase migration repair 20230103054303 --status reverted
supabase db pull
```

---

### POST /auth/v1/signup

Source: https://supabase.com/docs/reference/swift/auth-getsession

Creates a new user account. Users can sign up with either an email address or a phone number, along with a password. Email verification can be enabled or disabled.

````APIDOC
## POST /auth/v1/signup

### Description
Registers a new user account in the system. Depending on project settings, users may need to verify their email address before being able to log in.

### Method
POST

### Endpoint
`/auth/v1/signup`

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **email** (string) - Optional - The user's email address. One of `email` or `phone` must be provided.
- **phone** (string) - Optional - The user's phone number. One of `email` or `phone` must be provided.
- **password** (string) - Required - The user's password.
- **data** (object) - Optional - A custom JSON object to store additional user metadata.
- **redirectTo** (string) - Optional - Only for email signups. A URL where the user will be redirected after clicking the email confirmation link. Must be a configured redirect URL in your Supabase project.
- **captchaToken** (string) - Optional - A CAPTCHA token for bot protection.

### Request Example
```json
{
  "email": "example@email.com",
  "password": "example-password"
}
````

### Response

#### Success Response (200)

If 'Confirm email' is enabled:

- **user** (object) - The newly created user object.
- **session** (null) - Session is null, as verification is pending.

If 'Confirm email' is disabled:

- **user** (object) - The newly created user object.
- **session** (object) - The active session for the newly created user.

#### Response Example (Email confirmation enabled)

```json
{
  "user": {
    "id": "uuid-example-123",
    "email": "example@email.com",
    "phone": null,
    "created_at": "2023-01-01T12:00:00Z",
    "email_confirmed_at": null,
    "last_sign_in_at": null,
    "app_metadata": {},
    "user_metadata": {}
  },
  "session": null
}
```

#### Response Example (Email confirmation disabled)

```json
{
  "user": {
    "id": "uuid-example-123",
    "email": "example@email.com",
    "phone": null,
    "created_at": "2023-01-01T12:00:00Z",
    "email_confirmed_at": "2023-01-01T12:00:05Z",
    "last_sign_in_at": "2023-01-01T12:00:05Z",
    "app_metadata": {},
    "user_metadata": {}
  },
  "session": {
    "access_token": "jwt-token-example",
    "expires_in": 3600,
    "expires_at": 1672588800,
    "refresh_token": "refresh-token-example",
    "token_type": "bearer",
    "user": {
      "id": "uuid-example-123",
      "email": "example@email.com",
      "phone": null
    }
  }
}
```

#### Error Response (400)

- **message** (string) - Description of the error.

#### Error Response Example (User already registered)

```json
{
  "code": 400,
  "msg": "User already registered"
}
```

````

--------------------------------

### GET /explain - Get Query Execution Plan

Source: https://supabase.com/docs/reference/dart/auth-getsession

Retrieves the Postgres EXPLAIN execution plan for debugging slow queries. Provides insights into query optimization and performance. Must be enabled in project settings for security reasons.

```APIDOC
## explain()

### Description
Retrieves the Postgres EXPLAIN execution plan for a query to help debug slow queries and optimize performance. Works on any query including select(), rpc(), and write operations.

### Method
GET (when used with select())

### Parameters
- **analyze** (bool) - Optional - If `true`, the query will be executed and the actual run time will be returned.
- **verbose** (bool) - Optional - If `true`, the query identifier will be returned and `data` will include the output columns of the query.
- **settings** (bool) - Optional - If `true`, include information on configuration parameters that affect query planning.
- **buffers** (bool) - Optional - If `true`, include information on buffer usage.
- **wal** (bool) - Optional - If `true`, include information on WAL record generation.

### Usage Examples

#### Get Execution Plan
```dart
final data = await supabase
  .from('instruments')
  .select()
  .explain()
````

#### Get Execution Plan with Analysis

```dart
final data = await supabase
  .from('instruments')
  .select()
  .explain(analyze: true, verbose: true)
```

### Security Considerations

- NOT enabled by default as it can reveal sensitive database information
- Best practice: Only enable in testing environments
- For production use: Add protection via `pre-request` function
- Follow Performance Debugging Guide to enable functionality

### Compatible With

- select()
- rpc()
- Write operations (insert, update, delete, upsert)

````

--------------------------------

### Get Query Execution Plan

Source: https://supabase.com/docs/reference/python/containedby

Get the Postgres EXPLAIN execution plan of a query for debugging slow queries. Includes options for WAL info, verbose output, settings, buffers, and analyze mode.

```APIDOC
## explain(wal, verbose, settings, format, buffers, analyze)

### Description
Get the Postgres EXPLAIN execution plan of a query for performance debugging. Works on any query including rpc() and writes. Must be enabled via Performance Debugging Guide for security.

### Method
GET/POST (applied to any query)

### Parameters
#### Query Parameters
- **wal** (boolean) - Optional - If true, include information on WAL record generation
- **verbose** (boolean) - Optional - If true, return query identifier and include output columns
- **settings** (boolean) - Optional - If true, include information on configuration parameters affecting query planning
- **format** (string) - Optional - Output format: "text" (default) or "json"
- **buffers** (boolean) - Optional - If true, include information on buffer usage
- **analyze** (boolean) - Optional - If true, execute the query and return actual run time

### Request Example
```python
response = (
    supabase.table("planets")
    .select("*")
    .explain()
    .execute()
)
````

### Response

#### Success Response (200)

- **data** (string) - Postgres EXPLAIN execution plan output

#### Response Example

```
Seq Scan on planets (cost=0.00..35.50 rows=1000 width=32)
Filter: (active = true)
Planning Time: 0.156 ms
Execution Time: 2.345 ms
```

````

--------------------------------

### supabase completion bash

Source: https://supabase.com/docs/reference/cli/supabase-inspect-db-bloat

Generate and install autocompletion script for the bash shell. Requires the bash-completion package to be installed on your system.

```APIDOC
## supabase completion bash

### Description
Generate the autocompletion script for the bash shell. This script depends on the 'bash-completion' package.

### Command
````

supabase completion bash

```

### Setup Instructions

#### Load completions in current session:
```

source <(supabase completion bash)

```

#### Load completions for every new session:

**Linux:**
```

supabase completion bash > /etc/bash_completion.d/supabase

```

**macOS:**
```

supabase completion bash > $(brew --prefix)/etc/bash_completion.d/supabase

```

Note: Start a new shell session for changes to take effect.
```

---

### Initialize Supabase Project Locally (CLI)

Source: https://supabase.com/docs/guides/ai/quickstarts/generate-text-embeddings

Initializes a new or existing Supabase project locally and starts the associated services, preparing the development environment for Edge Functions.

```bash
supabase init
supabase start
```

---

### explain() - Get Query Execution Plan

Source: https://supabase.com/docs/reference/dart/storage-from-getpublicurl

Returns the PostgreSQL EXPLAIN execution plan for debugging slow queries. Includes options for analyzing query performance, verbosity, and resource usage details.

````APIDOC
## explain()

### Description
Returns the PostgreSQL EXPLAIN execution plan of a query for performance debugging and analysis.

### Method
GET (applied to any query including select, rpc, and writes)

### Parameters
- **analyze** (bool) - Optional - If `true`, the query will be executed and actual run time will be returned
- **verbose** (bool) - Optional - If `true`, the query identifier will be returned and `data` will include output columns
- **settings** (bool) - Optional - If `true`, include information on configuration parameters affecting query planning
- **buffers** (bool) - Optional - If `true`, include information on buffer usage
- **wal** (bool) - Optional - If `true`, include information on WAL record generation

### Request Example
```dart
final data = await supabase
  .from('instruments')
  .select()
  .explain()
````

### Request Example with Options

```dart
final data = await supabase
  .from('instruments')
  .select()
  .explain(analyze: true, verbose: true)
```

### Notes

- Not enabled by default as it can reveal sensitive database information
- Best used only in testing environments
- Can be enabled for production with additional protection using pre-request functions
- See Performance Debugging Guide for setup instructions
- Works on any query type including rpc() and write operations

````

--------------------------------

### Install Python Dependencies for ChatGPT Retrieval Plugin

Source: https://supabase.com/docs/guides/ai/examples/building-chatgpt-plugins

Installs the necessary Python packages for the ChatGPT Retrieval Plugin using Poetry. This step ensures all required libraries are available for the project, removing unused dependencies based on the chosen datastore provider.

```bash
poetry install
````

---

### POST /auth/signup

Source: https://supabase.com/docs/reference/csharp/introduction

Creates a new user account with email and password. Email verification may be required depending on project settings. Returns user and session objects upon successful signup.

````APIDOC
## POST /auth/signup

### Description
Creates a new user account and optionally establishes an authenticated session.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Required - User's email address
- **password** (string) - Required - User's password

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
````

### Response

#### Success Response (200/201)

- **user** (object) - User object with authentication details
- **session** (object) - Session object (null if email confirmation required)

### Behavior Notes

- If **Confirm email** is enabled: user is returned, session is null, verification email sent
- If **Confirm email** is disabled: both user and session are returned
- Redirect to SITE_URL upon email confirmation
- If called for existing confirmed user: returns error "User already registered" or obfuscated user object depending on settings

### Error Handling

- **User already registered** - User with this email already exists
- **Invalid email** - Email format is invalid
- **Password too weak** - Password does not meet security requirements

````

--------------------------------

### GET /{bucket}?location - Get Bucket Location

Source: https://supabase.com/docs/guides/storage/s3/compatibility

Retrieves the location/region of a bucket. This endpoint is fully implemented and returns the geographical region where the bucket is stored.

```APIDOC
## GET /{bucket}?location

### Description
Retrieves the location (region) of a bucket in Supabase Storage using the S3 protocol.

### Method
GET

### Endpoint
/{bucket}?location

### Parameters
#### Path Parameters
- **bucket** (string) - Required - The name of the bucket

### Response
#### Success Response (200)
- **LocationConstraint** (string) - The region where the bucket is located

#### Response Example
```xml
<?xml version="1.0" encoding="UTF-8"?>
<LocationConstraint xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
  us-east-1
</LocationConstraint>
````

### Limitations

- ❌ Not implemented: Bucket Owner validation (x-amz-expected-bucket-owner)

### Notes

- Requires S3 protocol to be enabled in Supabase Storage Settings
- Uses AWS Signature Version 4 for authentication

````

--------------------------------

### Initialize Supabase Client

Source: https://supabase.com/docs/reference/kotlin/auth-mfa-challengeandverify

This section describes how to initialize the Supabase client using `createSupabaseClient`, providing necessary credentials and installing various modules like Auth, Postgrest, etc.

```APIDOC
## Initialize Supabase Client

### Description
This section describes how to initialize the Supabase client using `createSupabaseClient`, providing necessary credentials and installing various modules like Auth, Postgrest, etc.

### Method
Not applicable (Client-side function call)

### Endpoint
Not applicable

### Parameters
- **supabaseUrl** (String) - Required - The unique Supabase URL for your project.
- **supabaseKey** (String) - Required - The unique publishable/anon Supabase Key for your project.
- **builder** (SupabaseClientBuilder.() -> Unit) - Optional - A lambda to apply additional configuration and install plugins (e.g., `Auth`, `Postgrest`).

### Request Example
#### Initialize Client with Auth and Postgrest
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://xyzcompany.supabase.co",
    supabaseKey = "publishable-or-anon-key"
) {
    install(Auth)
    install(Postgrest)
    //install other modules
}
````

### Response

#### Success Response

- Returns an initialized `SupabaseClient` instance.

#### Response Example

```kotlin
// A configured SupabaseClient instance
```

````

--------------------------------

### GET /buckets/{bucket_id}/files

Source: https://supabase.com/docs/reference/csharp/supabase-community/supabase-community/supabase-community/supabase-community/supabase-community/supabase-csharp

Lists all files within a bucket.  This endpoint is used to get a directory listing.

```APIDOC
## GET /buckets/{bucket_id}/files

### Description
Lists all the files within a bucket.

### Method
GET

### Endpoint
/buckets/{bucket_id}/files

### Parameters
#### Path Parameters
- **bucket_id** (string) - Required - The ID of the bucket.

#### Query Parameters
- **prefix** (string) - Optional -  Filters the results to only include files that begin with the given prefix.
- **limit** (integer) - Optional - Limits the number of items returned.
- **offset** (integer) - Optional - The offset to use for pagination.

#### Request Body
None

### Request Example
None

### Response
#### Success Response (200)
- **files** (array) - An array of file objects, each containing file details.

#### Response Example
{
  "files": [
    {
      "name": "fancy-avatar.png",
      "bucket_id": "bucket-id",
      "created_at": "2024-01-01T00:00:00.000000+00:00",
      "updated_at": "2024-01-01T00:00:00.000000+00:00",
      "metadata": {
        "contentType": "image/png",
        "size": 12345
      }
    }
  ]
}
````

---

### Initialize Supabase Client - JavaScript

Source: https://supabase.com/docs/guides/queues/quickstart

Creates a Supabase client instance using the project URL and API key. This client is required for all subsequent queue operations and RPC calls to the pgmq_public schema.

```javascript
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "supabaseURL";
const supabaseKey = "supabaseKey";

const supabase = createClient(supabaseUrl, supabaseKey);
```

---

### Swift Package Manager Installation

Source: https://supabase.com/docs/reference/swift/auth-updateuser

Install the Supabase Swift package using Swift Package Manager. You can add the complete Supabase package or individual libraries (Auth, Realtime, Postgrest, Functions, Storage) based on your requirements.

````APIDOC
## Swift Package Manager Installation

### Description
Install Supabase Swift client library and its modular components using Swift Package Manager.

### Installation Method
Swift Package Manager

### Package URL
https://github.com/supabase-community/supabase-swift.git

### Available Libraries
- **Supabase** - Complete Supabase environment
- **Auth** - Authentication and user management
- **Realtime** - Real-time database subscriptions
- **Postgrest** - PostgreSQL REST API client
- **Functions** - Deno Edge Functions invocation
- **Storage** - Large file management

### Package Configuration Example
```swift
let package = Package(
    dependencies: [
        .package(
            url: "https://github.com/supabase/supabase-swift.git",
            from: "2.0.0"
        )
    ],
    targets: [
        .target(
            name: "YourTargetName",
            dependencies: [
                .product(
                    name: "Supabase",
                    package: "supabase-swift"
                )
            ]
        )
    ]
)
````

### Xcode Integration

Use Apple's dependencies guide to add supabase-swift to your Xcode project.

````

--------------------------------

### GET /auth/identities - Get User Identities

Source: https://supabase.com/docs/reference/python/auth-getuser

Retrieves all identities linked to the authenticated user. The user must be signed in to call this method.

```APIDOC
## GET /auth/identities

### Description
Gets all the identities linked to the authenticated user. User must be signed in to retrieve identities.

### Method
GET

### Endpoint
/auth/identities

### Parameters
None

### Request Example
```python
response = supabase.auth.get_user_identities()
````

### Response

#### Success Response (200)

- **identities** (array) - List of identities linked to user
  - **provider** (string) - OAuth provider name (e.g., "github", "google")
  - **id** (string) - Identity ID
  - **user_id** (string) - Associated user ID

### Notes

- User must be authenticated to access this endpoint

````

--------------------------------

### Setup Admin Auth Client (Service Role Key)

Source: https://supabase.com/docs/reference/kotlin/auth-mfa-challenge

This section describes how to initialize a server-side authentication client using a `service_role` key. This client provides access to privileged administrative authentication methods and should never be exposed in client-side code.

```APIDOC
## Admin Client Setup

### Description
This section describes how to initialize a server-side authentication client using a `service_role` key. This client provides access to privileged administrative authentication methods and should never be exposed in client-side code.

### Method
N/A (Client-side setup)

### Endpoint
N/A

### Parameters
(No API parameters for client setup)

### Request Example
(No API request body for client setup)

### Response
(No API response for client setup)

````

---

### Create Stripe Setup Attempts Foreign Table (SQL)

Source: https://supabase.com/docs/guides/database/extensions/wrappers/stripe

This SQL statement defines a foreign table `stripe.setup_attempts` for read-only access to Stripe Setup Attempt records. It includes columns for customer, payment method, setup intent, status, usage, and creation timestamp. The `attrs` column stores additional JSONB data. It connects to `stripe_server` and is most efficiently filtered by `id` or `setup_intent`.

```sql
create foreign table stripe.setup_attempts (
  id text,
  application text,
  customer text,
  on_behalf_of text,
  payment_method text,
  setup_intent text,
  status text,
  usage text,
  created timestamp,
  attrs jsonb
)
  server stripe_server
  options (
    object 'setup_attempts'
  );
```

---

### Full Supabase.js Example for Soft Deletes Workflow

Source: https://supabase.com/docs/guides/troubleshooting/soft-deletes-with-supabase-js

This comprehensive JavaScript example demonstrates the full workflow for managing soft deletes using `supabase-js`. It includes operations for soft deleting an item by setting its `deleted_at` timestamp, querying only active records through a PostgreSQL view, and restoring a previously soft-deleted item by setting `deleted_at` back to `null`.

```javascript
// 1. Soft delete an item
await supabase
  .from("items")
  .update({ deleted_at: new Date().toISOString() })
  .eq("id", 123);

// 2. Query active (non-deleted) items
const { data, error } = await supabase
  .from("active_items") // Query the view, not the table
  .select("*");

if (error) console.error("Error fetching active items:", error);
else console.log("Active items:", data);

// 3. Restore a soft-deleted item
await supabase.from("items").update({ deleted_at: null }).eq("id", 123);
```

---

### POST /auth/v1/signup

Source: https://supabase.com/docs/reference/kotlin/auth-onauthstatechange

Registers a new user with an email and password or phone number. The system's email/phone confirmation settings determine the immediate login behavior.

````APIDOC
## POST /auth/v1/signup

### Description
Registers a new user with an email and password or phone number. The system's email/phone confirmation settings determine the immediate login behavior and the response structure.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Request Body
- **provider** (string) - Required - The authentication provider to use, e.g., `"email"` or `"phone"`.
- **email** (string) - Required (if provider is "email") - The user's email address.
- **password** (string) - Required - The user's chosen password.
- **phone** (string) - Required (if provider is "phone") - The user's phone number.
- **redirect_to** (string) - Optional - A URL to redirect the user to after a successful signup flow (e.g., email confirmation).
- **data** (object) - Optional - An object containing additional user metadata.

### Request Example
```json
{
  "provider": "email",
  "email": "example@email.com",
  "password": "example-password",
  "redirect_to": "https://yourdomain.com/welcome"
}
````

### Response

#### Success Response (200 or 201)

- **user** (object | null) - The created user object if `Confirm email` is enabled. If `Confirm email` is disabled, this will be `null` as the user is logged in automatically.
- **session** (object | null) - The active session object if `Confirm email` is disabled and the user is logged in automatically.

#### Response Example

```json
{
  "user": {
    "id": "uuid",
    "aud": "authenticated",
    "role": "authenticated",
    "email": "example@email.com",
    "email_confirmed_at": null,
    "phone": null,
    "phone_confirmed_at": null,
    "created_at": "2023-01-01T12:00:00Z",
    "updated_at": "2023-01-01T12:00:00Z"
  },
  "session": null
}
```

````

--------------------------------

### GET /auth/identities - Retrieve linked identities

Source: https://supabase.com/docs/reference/dart/auth-getuser

Gets all the identities linked to the currently authenticated user. This method requires the user to be signed in.

```APIDOC
## GET /auth/identities

### Description
Gets all the identities linked to a user.

### Method
GET

### Endpoint
/auth/identities

### Request Example
```dart
final identities = await supabase.auth.getUserIdentities();
````

### Response

#### Success Response (200)

- **identities** (Array) - List of identity objects linked to the user
- **id** (String) - The identity provider ID
- **user_id** (String) - The user ID
- **identity_data** (Object) - Identity provider data
- **provider** (String) - The identity provider name
- **created_at** (String) - Timestamp when identity was linked

### Notes

- The user needs to be signed in to call this method

````

--------------------------------

### Auth Admin Client Setup

Source: https://supabase.com/docs/reference/dart/auth-updateuser

An introductory section explaining that methods under `supabase.auth.admin` require a `service_role` key and should only be used in trusted server environments.

```APIDOC
## Auth Admin Overview

### Description
Any method under the `supabase.auth.admin` namespace requires a `service_role` key. These methods are considered admin methods and should be called on a trusted server. Never expose your `service_role` key in the client-side app.

### Method
N/A (Client Setup)

### Endpoint
N/A

### Parameters
(None)

### Request Example
```dart
final supabase = SupabaseClient(supabaseUrl, serviceRoleKey);
````

### Response

(N/A)

````

--------------------------------

### Install Laravel Breeze for authentication scaffolding

Source: https://supabase.com/docs/guides/getting-started/quickstarts/laravel

Integrate Laravel Breeze into your project, first by installing it as a development dependency via Composer, then by running the Artisan command to scaffold authentication views and routes. This provides a simple, built-in authentication system.

```terminal
composer require laravel/breeze --dev
php artisan breeze:install
````

---

### Client Initialization

Source: https://supabase.com/docs/reference/csharp/auth-signup

Initialize a Supabase client instance with your project URL and public API key. Configuration supports options like real-time auto-connection and requires models to derive from BaseModel.

````APIDOC
## Initialize Supabase Client

### Description
Set up a new Supabase client instance with your project credentials and configuration options.

### Configuration Options
- **url** (string) - Required - Your Supabase project URL from the admin panel
- **key** (string) - Required - Your Supabase public API key from the admin panel
- **options** (SupabaseOptions) - Optional - Configuration settings for client behavior

### SupabaseOptions Properties
- **AutoConnectRealtime** (bool) - Optional - Enable automatic real-time connection (default: false)

### Request Example
```csharp
var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");

var options = new Supabase.SupabaseOptions
{
    AutoConnectRealtime = true
};

var supabase = new Supabase.Client(url, key, options);
await supabase.InitializeAsync();
````

### Model Requirements

- All models must derive from `BaseModel`
- Use `[Table("table_name")]` attribute to map class to database table
- Use `[PrimaryKey("column_name")]` attribute on primary key properties
- Use `[Column("column_name")]` attribute for properties with different database names

````

--------------------------------

### GET /auth/mfa/aal

Source: https://supabase.com/docs/reference/python/auth-signinanonymously

Gets the Authenticator Assurance Level (AAL) details of a session. AAL indicates the strength of the authentication mechanism.

```APIDOC
## GET /auth/mfa/aal

### Description
Get the AAL details of a session.

### Method
GET

### Endpoint
/auth/mfa/aal

### Parameters


### Request Example
```json
{}
````

### Response

#### Success Response (200)

- **current_level** (string) - The current AAL. Will be "aal1" or "aal2".
- **next_level** (string) - The next AAL, if the user has a verified factor.

#### Response Example

```json
{
  "current_level": "aal1",
  "next_level": "aal2"
}
```

````

--------------------------------

### POST /auth/v1/signup - Create a new user

Source: https://supabase.com/docs/reference/python/auth-api

Registers a new user with an email and password. Behavior regarding email confirmation and session return varies based on project settings. If 'Confirm email' is enabled, a user is returned but the session is null. If disabled, both user and session are returned.

```APIDOC
## POST /auth/v1/signup

### Description
Registers a new user with an email and password. By default, the user needs to verify their email address before logging in. If "Confirm email" is enabled, a user is returned but the session is null. If disabled, both a user and a session are returned.

### Method
POST (Inferred)

### Endpoint
/auth/v1/signup (Inferred)

### Parameters
#### Request Body
- **email** (string) - Required - The user's email address.
- **password** (string) - Required - The user's password.
- **options** (object) - Optional - Additional options like user metadata or redirect URLs.

### Request Example
```json
{
  "email": "email@example.com",
  "password": "password"
}
````

### Response

#### Success Response (200/201)

- **user** (object) - The newly created user object.
- **session** (object | null) - The user's session object, or null if email confirmation is required.

#### Response Example

```json
{
  "user": {
    "id": "uuid",
    "email": "email@example.com",
    "confirmed_at": null,
    "email_confirmed_at": null,
    "role": "authenticated",
    "aud": "authenticated",
    "created_at": "2023-01-01T00:00:00Z",
    "updated_at": "2023-01-01T00:00:00Z"
  },
  "session": null
}
```

````

--------------------------------

### Start Supabase Analytics Server with Docker Compose (Postgres Backend)

Source: https://supabase.com/docs/reference/self-hosting-analytics/create-endpoint

This snippet provides the shell commands to initiate the Supabase Analytics server using Docker Compose, which defaults to a Postgres backend. It assumes the user has navigated to the `docker` directory within the cloned `supabase/supabase` repository to start the necessary Logflare and Vector services.

```shell
cd docker
docker compose -f docker-compose.yml up
````

---

### GET Get file metadata

Source: https://supabase.com/docs/reference/javascript/auth-getclaims

Retrieves the metadata and details of an existing file including size, creation date, and other file information.

````APIDOC
## GET Get file metadata

### Description
Retrieves the details and metadata of an existing file.

### Method
GET

### Function Signature
`info(path)`

### Parameters
#### Function Arguments
- **path** (string) - Required - The file path, including the file name. For example `folder/image.png`

### Return Type
- **Promise<object>** - Returns file metadata including size, creation date, and other details

### Request Example
```javascript
const { data, error } = await supabase
  .storage
  .from('avatars')
  .info('folder/avatar1.png')
````

### Response Example

```javascript
{
  "data": {
    "name": "avatar1.png",
    "id": "12345",
    "updated_at": "2024-01-01T00:00:00Z",
    "created_at": "2024-01-01T00:00:00Z",
    "last_accessed_at": "2024-01-01T00:00:00Z",
    "metadata": {
      "size": 1024,
      "mimetype": "image/png"
    }
  },
  "error": null
}
```

````

--------------------------------

### Set up GraphiQL IDE for Supabase GraphQL

Source: https://supabase.com/docs/guides/graphql

HTML file that sets up GraphiQL as an external IDE to query Supabase GraphQL API. Requires substituting PROJECT_REF and API_KEY placeholders. Uses React and GraphiQL libraries loaded from CDN to create an interactive GraphQL query interface.

```html
<html>
  <head>
    <title>GraphiQL</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/graphiql/2.4.7/graphiql.css" rel="stylesheet" />
  </head>
  <body style="margin: 0;">
    <div id="graphiql" style="height: 100vh;"></div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script
      crossorigin
      src="https://cdnjs.cloudflare.com/ajax/libs/graphiql/2.4.7/graphiql.js"
    ></script>
    <script>
      const fetcher = GraphiQL.createFetcher({
        url: 'https://<PROJECT_REF>.supabase.co/graphql/v1',
        headers: {
          "apiKey": "<API_KEY>",
        }
      });
      ReactDOM.render(
        React.createElement(GraphiQL, { fetcher: fetcher }),
        document.getElementById('graphiql'),
      );
    </script>
  </body>
</html>
````

---

### Auth Client Initialization

Source: https://supabase.com/docs/reference/kotlin/start

Initialize the Supabase Auth client to access authentication methods. This setup is required before using any auth operations.

````APIDOC
## Auth Client Setup

### Description
Initializes the Supabase Auth client which provides access to all authentication methods and operations.

### Method
Initialization

### Endpoint
`createSupabaseClient().auth`

### Parameters
#### Configuration Parameters
- **supabaseUrl** (string) - Required - Your Supabase project URL (format: https://[project-id].supabase.co)
- **supabaseKey** (string) - Required - Publishable or anonymous API key
- **config** (block) - Optional - Additional client configuration

### Request Example
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://xyzcompany.supabase.co",
    supabaseKey = "publishable-or-anon-key"
) { }
val auth = supabase.auth
````

### Response

#### Success Response

- **auth** (AuthClient) - Initialized auth client instance ready for use

### Available Methods

- `signUpWith(provider)` - Create new user accounts
- `signInWith(provider)` - Authenticate existing users
- `signOut()` - Log out current user
- `getUser()` - Retrieve current authenticated user

````

--------------------------------

### Initialize Supabase Client

Source: https://supabase.com/docs/reference/swift/lte

This section demonstrates how to initialize the Supabase client using your project URL and API key. This client instance serves as the entry point for all Supabase functionalities within your Swift application.

```APIDOC
## Initializing Supabase Client

### Description
Initializes the Supabase client with your project's URL and API key. This client instance serves as the entry point for all Supabase functionalities.

### Method
N/A (Client-side Initialization)

### Endpoint
N/A

### Parameters
#### Path Parameters
N/A

#### Query Parameters
N/A

#### Request Body
- **supabaseURL** (URL) - Required - The URL of your Supabase project (e.g., `https://xyzcompany.supabase.co`).
- **supabaseKey** (String) - Required - Your Supabase project's publishable (anon) API key.

### Request Example
N/A

### Response
#### Success Response (Client Object)
- **client** (SupabaseClient) - An initialized `SupabaseClient` instance ready for use.

#### Response Example
N/A

```swift
import Supabase

let client = SupabaseClient(supabaseURL: URL(string: "https://xyzcompany.supabase.co")!, supabaseKey: "publishable-or-anon-key")
````

````

--------------------------------

### Install Ollama and Pull Mistral Model

Source: https://supabase.com/docs/guides/functions/ai-models

Instructions to install Ollama and download the Mistral model, which is a prerequisite for running Large Language Models locally with Supabase Edge Functions.

```bash
ollama pull mistral
````

---

### Initiate PKCE OAuth Flow with redirectTo Option (JavaScript)

Source: https://supabase.com/docs/guides/auth/social-login/auth-bitbucket

This JavaScript code shows how to trigger an OAuth sign-in with a `redirectTo` URL, essential for PKCE flows often used in server-side rendering or environments requiring a callback. The `redirectTo` URL must be added to your redirect allow list in Supabase. This call redirects the user to the OAuth provider and then back to the specified URL.

```javascript
await supabase.auth.signInWithOAuth({
  provider,
  options: {
    redirectTo: `http://example.com/auth/callback`,
  },
});
```

---

### Get Supabase Query Execution Plan (Dart)

Source: https://supabase.com/docs/reference/dart/auth-getsession

This code shows how to use the `explain()` method to get the PostgreSQL execution plan for a Supabase query. It selects all from 'instruments' and applies `explain()` for performance debugging. Enabling explain might reveal sensitive information. Requires the Supabase client library and Dart.

```Dart
final data = await supabase
  .from('instruments')
  .select()
  .explain();
```

---

### Sign In with Google OAuth using Supabase-kt

Source: https://supabase.com/docs/reference/kotlin/auth-api

This example shows how to initiate an OAuth sign-in flow using Google with the Supabase-kt library. This typically follows the configuration of deeplinks to handle the callback from the OAuth provider, enabling users to authenticate through external services.

```Kotlin
supabase.auth.signInWith(Google)
```

---

### POST /auth/v1/signup

Source: https://supabase.com/docs/reference/kotlin/auth-getuser

Creates a new user account with the provided email and password. Depending on the project's 'Confirm email' setting, the user may need to verify their email address before logging in.

````APIDOC
## POST /auth/v1/signup

### Description
Creates a new user account with the provided email and password. Depending on the project's 'Confirm email' setting, the user may need to verify their email address before logging in.

### Method
POST

### Endpoint
`/auth/v1/signup`

### Parameters
#### Query Parameters
- **redirect_to** (string) - Optional - The URL to redirect the user to after email confirmation. If not provided, the default `SITE_URL` is used.

#### Request Body
- **email** (string) - Required - The user's email address for registration.
- **password** (string) - Required - The user's password for the new account.
- **provider** (string) - Required - The authentication provider, typically `"email"` or `"phone"`.
- **data** (object) - Optional - Additional user metadata to store. E.g., `{"full_name": "John Doe"}`.

### Request Example
```json
{
  "email": "example@email.com",
  "password": "supersecretpassword",
  "provider": "email"
}
````

### Response

#### Success Response (200/201)

- **user** (object|null) - The created user object if email confirmation is disabled, otherwise `null`.
- **session** (object|null) - The user's session object if email confirmation is disabled, otherwise `null`.
- **email_otp_sent** (boolean) - `true` if an email confirmation link/OTP was sent, otherwise `false`.

#### Response Example (Email confirmation enabled)

```json
{
  "user": null,
  "session": null,
  "email_otp_sent": true
}
```

#### Response Example (Email confirmation disabled)

```json
{
  "user": {
    "id": "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    "email": "example@email.com",
    "phone": "",
    "confirmed_at": "2023-01-01T12:00:00Z",
    "last_sign_in_at": "2023-01-01T12:00:00Z",
    "created_at": "2023-01-01T12:00:00Z",
    "updated_at": "2023-01-01T12:00:00Z",

```

---

### GET /storage/v1/vectors/buckets/{bucket_name}/indexes/{index_name}/vectors

Source: https://supabase.com/docs/reference/python/delete

No description

---

### Push Configuration to Supabase Project

Source: https://supabase.com/docs/reference/cli/supabase-functions-list

Synchronizes local supabase/config.toml file settings to a remote Supabase project, enabling configuration-as-code practices. Requires optional project reference flag to target specific projects.

```bash
supabase config push
supabase config push --project-ref <string>
```

---

### Get Object - GET /object/{bucketName}/{wildcard}

Source: https://supabase.com/docs/reference/self-hosting-storage/delete-an-object

Retrieves and serves an object from storage. Requires bucketName and wildcard (file path) as path parameters. Returns the object content directly or an error response.

```plaintext
GET /object/{bucketName}/{wildcard}
```

---

### Start Auto-Refresh Session

Source: https://supabase.com/docs/reference/swift/auth-api

Starts the automatic session refresh process for non-browser environments. This ensures that the user's session remains valid by automatically refreshing the access token before expiration.

````APIDOC
## POST /auth/start-auto-refresh

### Description
Start the automatic session refresh process for non-browser applications.

### Method
POST

### Endpoint
/auth/start-auto-refresh

### Request Example
```swift
supabase.auth.startAutoRefresh()
````

### Response

#### Success Response (200)

- **status** (string) - Confirmation that auto-refresh has been started

### Notes

- For non-browser environments only
- Automatically refreshes session before access token expires

````

--------------------------------

### Create Supabase Project via CLI

Source: https://supabase.com/docs/reference/cli/supabase-db-reset

Create a new Supabase project with optional database password, organization ID, region, and instance size specifications. Requires project name as parameter and supports optional configuration flags for deployment preferences.

```bash
supabase projects create [project name] [flags]
supabase projects create my-project --org-id org123 --region us-east-1 --size small --db-password secretpass123
````

---

### Execute PostgreSQL EXPLAIN Command in Supabase SQL Editor

Source: https://supabase.com/docs/guides/troubleshooting/understanding-postgresql-explain-output-Un9dqX

Demonstrates how to run the `EXPLAIN` command directly within the Supabase SQL Editor. This is a fundamental step to view the execution plan of a SQL query and understand how PostgreSQL intends to process it, without actually executing the query.

```sql
EXPLAIN SELECT * FROM users WHERE user_id = 1;
```

---

### GET /auth/identities - Retrieve identities linked to a user

Source: https://supabase.com/docs/reference/dart/auth-mfa-api

Gets all the identities linked to an authenticated user. This includes OAuth providers and other linked authentication methods.

```APIDOC
## GET /auth/identities

### Description
Retrieve all identities linked to the authenticated user.

### Method
GET

### Endpoint
/auth/identities

### Parameters
None

### Request Example
```

final identities = await supabase.auth.getUserIdentities();

```

### Response
#### Success Response (200)
- **identities** (List<Identity>) - A list of identities linked to the user

### Notes
- The user needs to be signed in to call this method
- Returns OAuth identity providers and other linked authentication methods
```

---

### GET /v1/projects/{ref}/health

Source: https://supabase.com/docs/reference/api/v1-get-project-pgbouncer-config

Gets the project's service health status. This endpoint monitors the health of various services running on your project.

````APIDOC
## GET /v1/projects/{ref}/health

### Description
Gets the project's service health status.

### Method
GET

### Endpoint
`/v1/projects/{ref}/health`

### Authentication
- OAuth scope: `projects:read`

### Parameters
#### Path Parameters
- **ref** (string) - Required - Project ref

#### Query Parameters
- **services** (Array<enum>) - Required - Services to check
- **timeout_ms** (integer) - Optional - Timeout in milliseconds

### Response
#### Success Response (200)
- **name** (string) - Service name
- **healthy** (boolean) - Health status
- **status** (string) - Service status
- **info** (object) - Service information
  - **name** (string) - Service name
  - **version** (string) - Service version
  - **description** (string) - Service description
- **error** (string) - Error message if unhealthy

#### Response Example
```json
[
  {
    "name": "auth",
    "healthy": true,
    "status": "COMING_UP",
    "info": {
      "name": "GoTrue",
      "version": "lorem",
      "description": "lorem"
    },
    "error": "lorem"
  }
]
````

### Response Codes

- **200** - Success
- **401** - Unauthorized
- **403** - Forbidden
- **429** - Too many requests
- **500** - Internal server error

````

--------------------------------

### Example Response for Single Presigned URL Generation

Source: https://supabase.com/docs/reference/self-hosting-storage/delete-a-bucket

This JSON object provides an example response structure for an API call that successfully generates a single presigned URL for an object, including the signed URL with its embedded JWT token.

```json
{
  "signedURL": "/object/sign/avatars/folder/cat.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2ZvbGRlci9jYXQucG5nIiwiaWF0IjoxNjE3NzI2MjczLCJleHAiOjE2MTc3MjcyNzN9.s7Gt8ME80iREVxPhH01ZNv8oUn4XtaWsmiQ5csiUHn4"
}
````

---

### Create Custom Hostname for Supabase Project

Source: https://supabase.com/docs/reference/cli/supabase-branches-create

Set up a custom hostname for a Supabase project. Requires a CNAME record pointing the custom hostname to the project's Supabase subdomain.

```bash
supabase domains create [flags]
```

---

### Optimize Supabase Log Queries by Avoiding Large Nested Objects (SQL)

Source: https://supabase.com/docs/guides/platform/logs

This SQL snippet illustrates how to prevent performance issues when querying Supabase logs by avoiding the selection of entire large nested objects. The first example demonstrates an inefficient query selecting a full metadata object, while the second shows an optimized approach that selectively retrieves only the required values from nested structures. This optimization helps mitigate timeouts and memory errors, particularly with extensive log datasets.

```sql
select
  datetime(timestamp),
  m as metadata -- <- metadata contains many nested keys
from
  edge_logs as t
  cross join unnest(t.metadata) as m;
```

```sql
select
  datetime(timestamp),
  r.method -- <- select only the required values
from
  edge_logs as t
  cross join unnest(t.metadata) as m
  cross join unnest(m.request) as r;
```

---

### Install DuckDB and Iceberg Extension

Source: https://supabase.com/docs/guides/storage/analytics/examples/duckdb

Install required packages to enable DuckDB with Iceberg table support. This is the first step before connecting to Supabase analytics buckets.

```bash
pip install duckdb duckdb-iceberg
```

---

### POST /auth/sign_up

Source: https://supabase.com/docs/reference/python/auth-getclaims

Create a new user account with email and password. By default, users must verify their email address before logging in unless email confirmation is disabled in project settings.

```APIDOC
## POST /auth/sign_up

### Description
Create a new user account. Returns a user object and optionally a session depending on email confirmation settings.

### Method
POST

### Endpoint
/auth/sign_up

### Parameters
#### Request Body
- **email** (string) - Required - User email address
- **password** (string) - Required - User password
- **phone** (string) - Optional - User phone number
- **user_metadata** (object) - Optional - Additional user metadata
- **redirect_to** (string) - Optional - Redirect URL after email confirmation

### Request Example
{
  "email": "email@example.com",
  "password": "password"
}

### Response
#### Success Response (200)
- **user** (object) - User object with id, email, phone, and metadata
- **session** (object|null) - Session object if email confirmation is disabled, otherwise null

### Behavior
- If **Confirm email** is enabled: returns user object with null session
- If **Confirm email** is disabled: returns both user and session objects
- For existing confirmed users: returns obfuscated user or "User already registered" error depending on settings
```

---

### Install Google OAuth Library for React

Source: https://supabase.com/docs/guides/auth/quickstarts/with-expo-react-native-social-auth

Installs the @react-oauth/google package required for web-based Google OAuth authentication in the Expo project.

```bash
npx expo install @react-oauth/google
```

---

### POST /auth/v1/signup

Source: https://supabase.com/docs/reference/csharp/storage-from-getpublicurl

Creates a new user account. Behavior regarding email verification and session creation depends on project settings.

````APIDOC
## POST /auth/v1/signup

### Description
Creates a new user.
By default, the user needs to verify their email address before logging in. To turn this off, disable **Confirm email** in your project.

### Method
POST

### Endpoint
`/auth/v1/signup`

### Parameters
#### Request Body
- **email** (string) - Required - The user's email address.
- **password** (string) - Required - The user's password.

### Request Example
```json
{
  "email": "user@example.com",
  "password": "strong-password"
}
````

### Response

#### Success Response (200)

- **session** (object | null) - The user's session object if email confirmation is disabled, otherwise `null`.
- **user** (object) - The newly created user object.

#### Response Example (Email confirmation disabled)

```json
{
  "session": {
    "access_token": "eyJ...
    "expires_in": 3600,
    "refresh_token": "xyz...",
    "user": {
      "id": "uuid",
      "email": "user@example.com"
    }
  },
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "confirmed_at": "2023-01-01T12:00:00Z"
  }
}
```

#### Response Example (Email confirmation enabled)

```json
{
  "session": null,
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "confirmed_at": null
  }
}
```

#### Error Response (400)

- **message** (string) - Error message, e.g., `User already registered`.

#### Error Example

```json
{
  "message": "User already registered"
}
```

````

--------------------------------

### Create Table for PGAudit Log Example

Source: https://supabase.com/docs/guides/database/extensions/pgaudit

This SQL DDL statement creates a sample `account` table with `id`, `name`, and `description` columns. This table serves as an example to demonstrate how PGAudit records DDL events in its audit logs.

```sql
create table account (
  id int primary key,
  name text,
  description text
);
````

---

### Sign up new user with email and password - Supabase Auth

Source: https://supabase.com/docs/reference/python/auth-exchangecodeforsession

Creates a new user account using email and password credentials. By default, email confirmation is required before login. Returns a user object and session (or null session if email confirmation is enabled). Respects the Confirm email setting in project configuration.

```python
response = supabase.auth.sign_up(
    {
        "email": "email@example.com",
        "password": "password",
    }
)
```

---

### GET /api/sources

Source: https://supabase.com/docs/reference/self-hosting-analytics/delete-team

Retrieves a list of all configured Logflare sources.

````APIDOC
## GET /api/sources

### Description
Retrieves a list of all configured Logflare sources.

### Method
GET

### Endpoint
/api/sources

### Parameters
#### Path Parameters

#### Query Parameters

#### Request Body

### Request Example
{}

### Response
#### Success Response (200)

#### Response Example
```json
[]
````

````

--------------------------------

### Prisma connection string query parameters example

Source: https://supabase.com/docs/guides/database/prisma/prisma-troubleshooting

This example illustrates how Prisma uses query parameters appended to the PostgreSQL connection string to configure settings or address specific issues. Each parameter is a key-value pair, separated by an ampersand.

```plaintext
connection_string.../postgres?KEY1=VALUE&KEY2=VALUE&KEY3=VALUE
````

---

### Initialize Supabase Async Client (Python)

Source: https://supabase.com/docs/reference/python/auth-exchangecodeforsession

Demonstrates how to asynchronously create a Supabase client in Python. It uses environment variables for credentials and imports `asyncio` to manage asynchronous operations, which is crucial for Realtime interactions.

```python
import os
import asyncio
from supabase import acreate_client, AsyncClient

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")

async def create_supabase():
  supabase: AsyncClient = await acreate_client(url, key)
  return supabase
```

---

### GET /auth/mfa/authenticator-assurance-level - Get AAL

Source: https://supabase.com/docs/reference/python/auth-exchangecodeforsession

Retrieves the Authenticator Assurance Level (AAL) of the current session. Returns AAL1 for single-factor authentication and AAL2 for multi-factor authentication.

````APIDOC
## GET /auth/mfa/authenticator-assurance-level

### Description
Retrieves the Authenticator Assurance Level (AAL) details of the current session. AAL1 indicates first-factor authentication (email/password or OAuth), while AAL2 indicates second-factor authentication (TOTP).

### Method
GET

### Endpoint
/auth/mfa/authenticator-assurance-level

### Parameters
None

### Request Example
```python
response = supabase.auth.mfa.get_authenticator_assurance_level()
````

### Response

#### Success Response (200)

- **current_level** (string) - Current AAL level: 'aal1' or 'aal2'
- **next_level** (string) - Next available AAL level
- **verified_factors** (array) - List of verified authentication factors

````

--------------------------------

### GET /v1/projects/{ref}/postgrest

Source: https://supabase.com/docs/reference/api/v1-deactivate-vanity-subdomain-config

Fetches the current PostgREST configuration settings for a given project.

```APIDOC
## GET /v1/projects/{ref}/postgrest

### Description
Gets project's postgrest config.

### Method
GET

### Endpoint
/v1/projects/{ref}/postgrest

### Parameters
#### Path Parameters
- **ref** (string) - Required - Project ref

### Request Example
(No request body for GET)

### Response
#### Success Response (200)
- **db_schema** (string) - The database schema exposed by PostgREST.
- **max_rows** (integer) - Maximum number of rows returned by PostgREST.
- **db_extra_search_path** (string) - Extra schema search path for PostgREST.
- **db_pool** (integer) - Database connection pool size for PostgREST.
- **jwt_secret** (string) - The JWT secret used by PostgREST.

#### Response Example
{
  "db_schema": "lorem",
  "max_rows": 42,
  "db_extra_search_path": "lorem",
  "db_pool": 42,
  "jwt_secret": "lorem"
}
````

---

### GET /supabase branches get

Source: https://supabase.com/docs/reference/cli/global-flags

Retrieves details of a specific preview branch by its name or ID. This command provides information about the branch's current state and configuration.

```APIDOC
## GET /supabase branches get

### Description
Retrieve details of the specified preview branch.

### Method
GET

### Endpoint
/supabase branches get [name]

### Parameters
#### Path Parameters
- **name** (string) - Required - The name of the branch.
#### Flags
- **--project-ref** (string) - Optional - Project ref of the Supabase project.

### Request Example
{
  "name": "your-branch-name",
  "project-ref": "your-project-ref"
}

### Response
#### Success Response (200)
- **branch** (object) - The branch object.

#### Response Example
{
  "branch": {
    "name": "your-branch-name",
    "id": "branch-id",
    "status": "active"
  }
}

```

---

### Database Query Explanation

Source: https://supabase.com/docs/reference/swift/auth-linkidentity

Obtains the PostgreSQL `EXPLAIN` execution plan for a database query to diagnose performance issues. This is a client-side method.

````APIDOC
## Database Query Explanation

### Description
Retrieves the PostgreSQL `EXPLAIN` execution plan for a given database query. This feature is crucial for identifying performance bottlenecks and optimizing slow queries. It can be applied to any query, including `rpc()` calls or write operations.

### Client-side Method
`.explain(options?: object)` on a query builder

### Endpoint
N/A (Client-side method)

### Parameters
#### Method Parameters
- **options** (Object) - Optional - Configuration options for the EXPLAIN plan, such as `analyze` or `verbose`.

### Request Example
```swift
try await supabase
  .from("instruments")
  .select()
  .explain()
  .execute()
  .value
````

### Response

#### Success Response (200)

- **plan** (Array of String) - An array of strings, each representing a line of the PostgreSQL EXPLAIN plan output.

#### Response Example

```json
[
  "Seq Scan on instruments  (cost=0.00..18.50 rows=850 width=128)",
  "  Output: id, created_at, name"
]
```

### Notes

Explain is not enabled by default. Refer to the Performance Debugging Guide for setup.

````

--------------------------------

### Vue Component Script Setup with Supabase Context

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-vue

Demonstrates the setup of a Vue component script that provides authentication-related data through Supabase context. Exposes user profile, authentication state, and methods for updating profile and signing out.

```Vue
user,
profile,
updateProfile,
signOut,
````

---

### Generic 200 Response Example (Supabase API)

Source: https://supabase.com/docs/reference/api/v1-create-legacy-signing-key

This is a generic example of a successful (200 OK) API response, typically representing a list of resources. It demonstrates a JSON array containing objects with 'name', 'value', and 'updated_at' fields.

```json
[
  {
    "name": "lorem",
    "value": "lorem",
    "updated_at": "lorem"
  }
]
```

---

### Installation - Add Supabase Flutter Package

Source: https://supabase.com/docs/reference/dart/auth-signinwithsso

Install the Supabase Flutter package from pub.dev to add Supabase functionality to your Flutter or Dart project.

```APIDOC
## Installation

### Install from pub.dev

Add the supabase_flutter package to your project dependencies.

### Method
Package installation via pub.dev

### Installation Command
```

flutter pub add supabase_flutter

````

### pubspec.yaml Configuration
```yaml
dependencies:
  supabase_flutter: ^2.0.0
````

### Description

Installs the Supabase Flutter client library which provides access to Postgres database operations, real-time listeners, authentication, Edge Functions, and file storage management within your Flutter application.

````

--------------------------------

### Create New Flutter Application

Source: https://supabase.com/docs/guides/getting-started/quickstarts/flutter

This command-line snippet initializes a new Flutter project named `my_app`. It sets up the basic directory structure and necessary files for a Flutter application. This is a standard first step when starting new Flutter development.

```shell
flutter create my_app
````

---

### Install PySpark for Apache Spark integration

Source: https://supabase.com/docs/guides/storage/analytics/examples/apache-spark

This snippet demonstrates how to install PySpark, the Python API for Apache Spark, using pip. PySpark is essential for developing Spark applications in Python.

```bash
pip install pyspark
```

---

### Query All PGMQ Queue Metrics (SQL)

Source: https://supabase.com/docs/guides/queues/pgmq

This SQL example demonstrates how to query the `pgmq.metrics_all()` function to retrieve real-time operational metrics for all queues. The output shows a tabular representation of various queue statistics, including message counts and timestamps, for different queues.

```sql
select * from pgmq.metrics_all();
      queue_name      | queue_length | newest_msg_age_sec | oldest_msg_age_sec | total_messages |          scrape_time
----------------------+--------------+--------------------+--------------------+----------------+-------------------------------
 my_queue             |           16 |               2563 |               2565 |             35 | 2023-10-28 20:25:07.016413-05
 my_partitioned_queue |            1 |                 11 |                 11 |              1 | 2023-10-28 20:25:07.016413-05
 my_unlogged          |            1 |                  3 |                  3 |              1 | 2023-10-28 20:25:07.016413-05
```

---

### GET /auth/user - Get current user

Source: https://supabase.com/docs/reference/python/functions-invoke

Fetch the currently authenticated user object from active session. Returns null if no valid session exists.

```APIDOC
## GET /auth/user

### Description
Retrieve the currently authenticated user from the active session.

### Method
GET

### Endpoint
/auth/user

### Parameters
#### Headers
- **Authorization** (string) - Required - Bearer token from session

### Response
#### Success Response (200)
- **id** (string) - User ID
- **email** (string) - User email
- **phone** (string) - User phone number
- **user_metadata** (object) - Custom user metadata
- **created_at** (string) - Account creation timestamp

### Notes
- Requires valid session/authorization token
- Returns null if session is invalid or expired
- Alternative: Use supabase.auth.get_user() in client libraries
```

---

### explain() - Get Query Execution Plan

Source: https://supabase.com/docs/reference/dart/auth-getuser

Returns the Postgres EXPLAIN execution plan for a query to help debug slow queries. Provides insight into query optimization and performance. Must be enabled on the project for security reasons.

````APIDOC
## explain()

### Description
Returns the Postgres EXPLAIN execution plan of a query for performance debugging.

### Parameters
- **analyze** (bool) - Optional - If `true`, the query will be executed and actual run time will be returned
- **verbose** (bool) - Optional - If `true`, the query identifier will be returned and `data` will include output columns
- **settings** (bool) - Optional - If `true`, include information on configuration parameters that affect query planning
- **buffers** (bool) - Optional - If `true`, include information on buffer usage
- **wal** (bool) - Optional - If `true`, include information on WAL record generation

### Usage
Works on any query, including `select()`, `rpc()`, and write operations.

### Request Example
```dart
final data = await supabase
  .from('instruments')
  .select()
  .explain()
````

### Notes

- Not enabled by default for security reasons
- Best practice: only enable in testing environments
- Requires enabling in project configuration
- Can reveal sensitive database information
- Use pre-request functions for additional protection in production

````

--------------------------------

### Sync and Generate Seed Data with LLM Support

Source: https://supabase.com/docs/guides/local-development/seeding-your-database

After configuring LLM API keys, run these commands. First, synchronize Snaplet with your database schema, then execute your `seed.ts` script. This process will leverage the LLM to generate more realistic and diverse data if your seed script is configured to use it.

```shell
npx @snaplet/seed sync
npx tsx seed.ts > supabase/seed.sql
````

---

### GET /v1/projects/{ref}/health

Source: https://supabase.com/docs/reference/api/introduction

Gets the service health status for a specific project. Returns health information for all requested services including their status, version, and any error details.

````APIDOC
## GET /v1/projects/{ref}/health

### Description
Gets project's service health status.

### Method
GET

### Endpoint
`/v1/projects/{ref}/health`

### OAuth Scopes
- `projects:read`

### Path Parameters
- **ref** (string) - Required - Project reference code

### Query Parameters
- **services** (Array<enum>) - Required - Services to check health status for
- **timeout_ms** (integer) - Optional - Request timeout in milliseconds

### Response Codes
- **200** - Success
- **401** - Unauthorized
- **403** - Forbidden
- **429** - Too Many Requests
- **500** - Internal Server Error

### Response (200)

#### Success Response Fields
- **name** (string) - Service name
- **healthy** (boolean) - Health status
- **status** (string) - Service status (e.g., COMING_UP, RUNNING)
- **info** (object) - Service information
  - **name** (string) - Service name
  - **version** (string) - Service version
  - **description** (string) - Service description
- **error** (string) - Error message if unhealthy

### Response Example
```json
[
  {
    "name": "auth",
    "healthy": true,
    "status": "COMING_UP",
    "info": {
      "name": "GoTrue",
      "version": "lorem",
      "description": "lorem"
    },
    "error": "lorem"
  }
]
````

````

--------------------------------

### Build and Run Expo Project for Testing

Source: https://supabase.com/docs/guides/auth/quickstarts/with-expo-react-native-social-auth

These shell commands are used to prepare and run an Expo project. `npx expo prebuild` generates native project files, and `npx expo start --clear` launches the development server, clearing any cached data for a fresh start.

```bash
npx expo prebuild
npx expo start --clear
````

---

### Display Supabase CLI Help Information

Source: https://supabase.com/docs/guides/cli/getting-started

Run the Supabase CLI help command to display available options and information. This command works via npx or bunx without requiring a full installation.

```bash
npx supabase --help
```

---

### Install hCaptcha React Component Package

Source: https://supabase.com/docs/guides/auth/auth-captcha

Install the hCaptcha React library as a project dependency. This package provides the HCaptcha component needed for frontend CAPTCHA verification.

```bash
npm install @hcaptcha/react-hcaptcha
```

---

### Query Explain Method

Source: https://supabase.com/docs/reference/swift/introduction

Get the Postgres EXPLAIN execution plan of a query for debugging slow queries. This method works on any query including rpc() and write operations. Explain is not enabled by default for security reasons.

````APIDOC
## Query Explain Method

### Description
Retrieves the Postgres EXPLAIN execution plan of a query to help debug slow queries. Works on any query type including rpc() and write operations.

### Method
GET / Query Execution

### Endpoint
.from("table_name").select().explain()

### Parameters
#### Query Parameters
- **analyze** (boolean) - Optional - Include analyze and verbose information in the execution plan

### Usage Notes
- Explain is not enabled by default as it can reveal sensitive database information
- Best practice: only enable for testing environments
- For production use: provide additional protection via pre-request function
- Requires Performance Debugging Guide setup to enable functionality

### Request Example
```swift
try await supabase
  .from("instruments")
  .select()
  .explain()
  .execute()
  .value
````

### Response

#### Success Response

- **executionPlan** (object) - The Postgres EXPLAIN execution plan details

````

--------------------------------

### Supabase `filter()` Method PostgREST Syntax Examples

Source: https://supabase.com/docs/reference/javascript/auth-getclaims

These examples showcase the raw PostgREST syntax required for the `filter()` method's values. They illustrate how to format values for `in` clauses using parentheses and for array containment (`cs`) using curly braces. This method offers fine-grained control over query conditions.

```javascript
.filter('id', 'in', '(5,6,7)')  // Use `()` for `in` filter
.filter('arraycol', 'cs', '{"a","b"}')  // Use `cs` for `contains()`, `{}` for array values
````

---

### SupabaseClient Initialization

Source: https://supabase.com/docs/reference/swift/initializing

Initialize the SupabaseClient with your Project URL and Project Key to establish connection to your Supabase instance. The client serves as the main entrypoint for all Supabase functionality.

````APIDOC
## POST SupabaseClient Initialization

### Description
Initialize the Supabase client connection with project credentials. Find Project URL and Project Key in Project Settings → API Settings.

### Method
Initializer

### Parameters
#### Required Parameters
- **supabaseURL** (URL) - Your Supabase project URL
- **supabaseKey** (String) - Your publishable or anonymous API key

### Initialization Example
```swift
import Supabase

let client = SupabaseClient(
    supabaseURL: URL(string: "https://xyzcompany.supabase.co")!,
    supabaseKey: "publishable-or-anon-key"
)
````

### Client Usage

Once initialized, use the client instance to access:

- Database operations via `.from()`
- Authentication via `.auth`
- Real-time subscriptions via `.realtime`
- Edge Functions via `.functions`
- File storage via `.storage`

````

--------------------------------

### GET /auth/jwt - Get User Claims from JWT

Source: https://supabase.com/docs/reference/swift/subscribe

Verifies a JWT token and extracts its claims. Supports both symmetric (HS256) and asymmetric (RS256) JWTs with automatic key rotation and caching.

```APIDOC
## GET /auth/jwt

### Description
Verify a JWT and extract its claims. Verification is performed server-side for symmetric JWTs (HS256) and client-side for asymmetric JWTs (RS256) using Apple Security framework.

### Method
GET

### Endpoint
/auth/jwt

### Parameters
#### Query Parameters
- **jwt** (String) - Optional - The JWT to verify. If not provided, uses the access token from current session.
- **allowExpired** (Bool) - Optional - Skip expiration check if true.
- **jwks** (JWKS) - Optional - Custom JSON Web Key Set for verification.

### Request Example
```swift
let response = try await supabase.auth.getClaims()
print("User ID: \(response.claims.sub ?? \"N/A\")")
print("Email: \(response.claims.email ?? \"N/A\")")
print("Role: \(response.claims.role ?? \"N/A\")")
````

### Response

#### Success Response (200)

- **claims** (JWTClaims) - Decoded JWT claims object containing sub, email, role, and other claim data.

### Notes

- Symmetric JWTs (HS256) verified server-side via getUser() API
- Asymmetric JWTs (RS256) verified client-side using Apple Security framework
- Global JWKS cache with 10-minute TTL
- Automatic key rotation with server-side fallback
- Optimal performance across multiple clients with shared storage key

````

--------------------------------

### GET /storage/public-url - Retrieve Public URL

Source: https://supabase.com/docs/reference/kotlin/auth-getsession

Get the public URL for a file in a public bucket. The bucket must be set to public via updateBucket() or the dashboard.

```APIDOC
## GET /storage/public-url

### Description
Retrieve the public URL for a file in a public bucket. The bucket must be configured as public. No signed token is required to access the returned URL.

### Method
GET

### Endpoint
/storage/buckets/{bucket}/public-url

### Parameters
#### Path Parameters
- **bucket** (string) - Required - The name of the public bucket

#### Query Parameters
- **path** (string) - Required - The path of the file to get the public URL for

### Request Example
```kotlin
val url = supabase.storage.from("public-bucket").publicUrl("folder/avatar1.png")
````

### Response

#### Success Response (200)

- **url** (string) - The public URL for the file

### Requirements

- Bucket must be set to public

### Permissions Required

- buckets table: none
- objects table: none

````

--------------------------------

### Create Browser Client for Client Components

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs

Initializes a Supabase client for browser-based Client Components using environment credentials. Returns a configured client instance for frontend Supabase access. Requires NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY environment variables.

```typescript
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  // Create a supabase client on the browser with project's credentials
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );
}
````

---

### Example: Enable Inflection for Public Schema

Source: https://supabase.com/docs/guides/graphql/configuration

This example shows enabling inflection for the 'public' schema. When a table like `blog_post` (snake_case) is created within this schema, its GraphQL type names will be automatically inflected to `BlogPost` (PascalCase).

```SQL
comment on schema public is e'@graphql({"inflect_names": true})';

create table blog_post(
    id int primary key,
    ...
);
```

---

### Example JSON Payloads for Function Shutdown Events

Source: https://supabase.com/docs/guides/troubleshooting/edge-function-shutdown-reasons-explained

These JSON examples illustrate the structure of `ShutdownEvent` payloads for different termination reasons. They include details like the specific reason (`EventLoopCompleted`, `WallClockTime`), CPU time used, memory snapshot, and an `execution_id` for diagnostic purposes.

```json
{
  "event": {
    "Shutdown": {
      "reason": "EventLoopCompleted",
      "cpu_time_used": 12,
      "memory_used": {
        "total": 1048576,
        "heap": 512000,
        "external": 1000
      }
    }
  },
  "metadata": {
    "execution_id": "4b6a4e2e-7c4d-4f8b-9e1a-2d3c4e5f6a7b"
  }
}
```

```json
{
  "event": {
    "Shutdown": {
      "reason": "WallClockTime",
      "cpu_time_used": 50,
      "memory_used": {
        "total": 2097152,
        "heap": 1024000,
        "external": 5000
      }
    }
  },
  "metadata": {
    "execution_id": "5c7b5f3f-8d5e-5g9c-0f2b-3e4d5f6g7h8i"
  }
}
```

---

### GET /auth/admin/users

Source: https://supabase.com/docs/reference/dart/auth-signinwithsso

Get a paginated list of all users. Defaults to returning 50 users per page. This is an admin method requiring a service_role key.

````APIDOC
## GET /auth/admin/users

### Description
Get a list of users. Returns a paginated list with defaults to 50 users per page. This method requires a `service_role` key and should be called on a trusted server only.

### Method
GET

### Endpoint
/auth/admin/users

### Parameters
#### Query Parameters
- **page** (Integer) - Optional - What page of users to return (0-indexed)
- **perPage** (Integer) - Optional - How many users to be returned per page. Defaults to 50

### Request Example
```dart
final supabase = SupabaseClient(supabaseUrl, serviceRoleKey);
// Returns the first 50 users
final List<User> users = await supabase.auth.admin.listUsers();
````

### Response

#### Success Response (200)

- **users** (Array) - Paginated list of user objects
- **user** (Object) - Individual user object containing id, email, and other user details

````

--------------------------------

### Initialize Supabase Client and Query Table with JavaScript

Source: https://supabase.com/docs/guides/api/creating-routes

Creates a Supabase client instance using the project URL and publishable API key, then queries the 'todos' table to retrieve all records. This example demonstrates basic authentication and data fetching using the JavaScript client library. Requires valid SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY environment variables.

```javascript
// Initialize the JS client
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)

// Make a request
const { data: todos, error } = await supabase.from('todos').select('*')
````

---

### GET /v1/projects/{ref}/health

Source: https://supabase.com/docs/reference/api/v1-deactivate-vanity-subdomain-config

Gets the project's service health status. Returns health information for all services associated with the project including auth, database, and other services.

````APIDOC
## GET /v1/projects/{ref}/health

### Description
Gets project's service health status.

### Method
GET

### Endpoint
/v1/projects/{ref}/health

### Authentication
- **OAuth Scopes**: projects:read

### Parameters
#### Path Parameters
- **ref** (string) - Required - Project ref

#### Query Parameters
- **services** (Array<enum>) - Required - Services to check
- **timeout_ms** (integer) - Optional - Timeout in milliseconds

### Response
#### Success Response (200)
- **name** (string) - Service name
- **healthy** (boolean) - Service health status
- **status** (string) - Service status
- **info** (object) - Service information
  - **name** (string) - Service name
  - **version** (string) - Service version
  - **description** (string) - Service description
- **error** (string) - Error message if applicable

#### Response Example
```json
[
  {
    "name": "auth",
    "healthy": true,
    "status": "COMING_UP",
    "info": {
      "name": "GoTrue",
      "version": "lorem",
      "description": "lorem"
    },
    "error": "lorem"
  }
]
````

### Response Codes

- **200** - Success
- **401** - Unauthorized
- **403** - Forbidden
- **429** - Too Many Requests
- **500** - Internal Server Error

````

--------------------------------

### Uninstall Auth Helpers and Install SSR Package

Source: https://supabase.com/docs/guides/troubleshooting/how-to-migrate-from-supabase-auth-helpers-to-ssr-package-5NRunM

Remove the deprecated @supabase/auth-helpers-nextjs package and install the @supabase/ssr package along with @supabase/supabase-js. Ensure both auth-helpers and SSR packages are not used simultaneously to avoid authentication conflicts.

```bash
npm uninstall @supabase/auth-helpers-nextjs @supabase/supabase-js
npm install @supabase/ssr @supabase/supabase-js
````

---

### Supabase CLI: Repair Migration History Walkthrough

Source: https://supabase.com/docs/reference/cli/supabase-inspect-db

This step-by-step example demonstrates how to resolve discrepancies between local and remote migration histories using `supabase migration repair`. It covers identifying out-of-sync states, removing problematic local migration files, marking remote migrations as reverted, and re-synchronizing with `supabase db pull` to achieve a clean, synchronized state.

```bash
$ supabase migration list
```

```text
        LOCAL      │     REMOTE     │     TIME (UTC)
  ─────────────────┼────────────────┼──────────────────────
                   │ 20230103054303 │ 2023-01-03 05:43:03
   20230103054315  │                │ 2023-01-03 05:43:15
```

```bash
$ rm supabase/migrations/20230103054315_remote_commit.sql
```

```bash
$ supabase migration list
```

```text
        LOCAL      │     REMOTE     │     TIME (UTC)
  ─────────────────┼────────────────┼──────────────────────
                   │ 20230103054303 │ 2023-01-03 05:43:03
```

```bash
$ supabase migration repair 20230103054303 --status reverted
```

```text
Connecting to remote database...
Repaired migration history: [20220810154537] => reverted
Finished supabase migration repair.
```

```bash
$ supabase migration list
```

```text
        LOCAL      │     REMOTE     │     TIME (UTC)
  ─────────────────┼────────────────┼──────────────────────
```

```bash
$ supabase db pull
```

```text
Connecting to remote database...
Schema written to supabase/migrations/20240414044403_remote_schema.sql
Update remote migration history table? [Y/n]
Repaired migration history: [20240414044403] => applied
Finished supabase db pull.
```

```bash
$ supabase migration list
```

```text
        LOCAL      │     REMOTE     │     TIME (UTC)
  ─────────────────┼────────────────┼──────────────────────
    20240414044403 │ 20240414044403 │ 2024-04-14 04:44:03
```

---

### GET /v1/projects/{ref}/config/realtime

Source: https://supabase.com/docs/reference/api

Gets realtime configuration for the project. This endpoint retrieves all realtime service settings including connection limits, event throttling, and payload restrictions.

````APIDOC
## GET /v1/projects/{ref}/config/realtime

### Description
Retrieves the current realtime configuration settings for the project.

### Method
GET

### Endpoint
/v1/projects/{ref}/config/realtime

### Path Parameters
- **ref** (string) - Required - Project reference identifier

### Response Codes
- 200 - Success
- 401 - Unauthorized
- 403 - Forbidden
- 429 - Too Many Requests

### Response
#### Success Response (200)
- **private_only** (boolean) - Whether realtime is private only
- **connection_pool** (integer) - Connection pool size
- **max_concurrent_users** (integer) - Maximum concurrent users
- **max_events_per_second** (integer) - Maximum events per second
- **max_bytes_per_second** (integer) - Maximum bytes per second
- **max_channels_per_client** (integer) - Maximum channels per client
- **max_joins_per_second** (integer) - Maximum joins per second
- **max_presence_events_per_second** (integer) - Maximum presence events per second
- **max_payload_size_in_kb** (integer) - Maximum payload size in kilobytes
- **suspend** (boolean) - Whether realtime is suspended

#### Response Example
```json
{
  "private_only": true,
  "connection_pool": 1,
  "max_concurrent_users": 1,
  "max_events_per_second": 1,
  "max_bytes_per_second": 1,
  "max_channels_per_client": 1,
  "max_joins_per_second": 1,
  "max_presence_events_per_second": 1,
  "max_payload_size_in_kb": 1,
  "suspend": true
}
````

````

--------------------------------

### POST /v1/projects/{ref}/custom-hostname/initialize

Source: https://supabase.com/docs/reference/api/v1-deactivate-vanity-subdomain-config

Initializes a project's custom hostname configuration. This sets up the custom hostname and begins the verification process. Requires domains:write OAuth scope.

```APIDOC
## POST /v1/projects/{ref}/custom-hostname/initialize

### Description
Initializes a custom hostname configuration for a project. This endpoint sets up the hostname and begins the DNS verification and SSL certificate provisioning process.

### Method
POST

### Endpoint
`/v1/projects/{ref}/custom-hostname/initialize`

### OAuth Scopes
- domains:write

### Parameters
#### Path Parameters
- **ref** (string) - Required - Project ref

#### Request Body
- **custom_hostname** (string) - Required - The custom hostname to configure (e.g., example.com)

### Request Example
```json
{
  "custom_hostname": "example.com"
}
````

### Response

#### Success Response (201)

- **status** (string) - Initial status of the configuration
- **custom_hostname** (string) - The configured custom hostname
- **data** (object) - Configuration data with verification details

#### Response Example

```json
{
  "status": "1_not_started",
  "custom_hostname": "example.com",
  "data": {
    "success": true,
    "errors": [],
    "messages": [],
    "result": {
      "id": "config-123",
      "hostname": "example.com",
      "ssl": {
        "status": "pending",
        "validation_records": [
          {
            "txt_name": "_acme-challenge.example.com",
            "txt_value": "validation-token"
          }
        ],
        "validation_errors": []
      },
      "ownership_verification": {
        "type": "CNAME",
        "name": "example.com",
        "value": "verification-value"
      },
      "custom_origin_server": "origin.example.com",
      "verification_errors": [],
      "status": "pending"
    }
  }
}
```

### Response Codes

- 201 - Created
- 401 - Unauthorized
- 403 - Forbidden
- 429 - Too Many Requests
- 500 - Internal Server Error

````

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/kotlin/auth-exchangecodeforsession

Creates a new user account with email or phone authentication. Behavior varies based on email/phone confirmation settings. Users may need to verify their email before logging in unless confirmation is disabled.

```APIDOC
## POST /auth/signup

### Description
Creates a new user account with email or phone provider. User verification requirements depend on project confirmation settings.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **provider** (string) - Required - Authentication provider: "Email" or "Phone"
- **email** (string) - Required if provider is Email - User's email address
- **password** (string) - Required if provider is Email - User's password
- **phone** (string) - Required if provider is Phone - User's phone number
- **redirectUrl** (string) - Optional - Redirect URL after confirmation (uses platform default if not specified)
- **metadata** (object) - Optional - Additional user metadata to store with the account

### Request Example
```kotlin
val user = supabase.auth.signUpWith(Email) {
    email = "example@email.com"
    password = "example-password"
}
````

### Response

#### Success Response (200)

#### If Confirm Email is Enabled:

- **user** (object) - New user object; user is NOT automatically logged in
- **user.id** (string) - Unique user identifier
- **user.email** (string) - User's email address

#### If Confirm Email is Disabled:

- **session** (object) - Active session object
- **session.access_token** (string) - JWT access token
- User is automatically logged in

#### Response Example

```json
{
  "user": {
    "id": "user-uuid-123",
    "email": "example@email.com",
    "email_confirmed_at": null
  },
  "session": null
}
```

### Notes

- Email confirmation can be toggled in project settings
- When user confirms email, they are redirected to SITE_URL
- Additional redirect URLs can be configured in project settings
- For existing confirmed users: returns obfuscated user object if both confirmations enabled, otherwise returns "User already registered" error
- Supports Email and Phone (SMS/WhatsApp) providers
- OTP links and OAuth require additional initialization

````

--------------------------------

### Install Supabase Flutter Package

Source: https://supabase.com/docs/reference/dart/auth-mfa-verify

Install the supabase_flutter package from pub.dev using the Flutter CLI. This makes the Supabase SDK available in your Flutter or Dart project.

```APIDOC
## INSTALL

### Description
Install the Supabase Flutter package from pub.dev repository.

### Installation Command
````

flutter pub add supabase_flutter

```

### For pubspec.yaml
```

dependencies:
supabase_flutter: ^2.0.0

```

### Description
Adds the supabase_flutter package as a dependency to your Flutter project, enabling access to Supabase functionality including database operations, authentication, real-time subscriptions, and file storage.
```

---

### Supabase `or()` Filter PostgREST Syntax Examples

Source: https://supabase.com/docs/reference/javascript/auth-getclaims

These examples illustrate the specific PostgREST syntax required for filters within the `or()` method. They show how to combine multiple conditions using commas, and how to format values for `in` clauses and array operators like `cs` (contains) and `cd` (contained by). Proper sanitization is important for these filters.

```javascript
.or('id.in.(5,6,7), arraycol.cs.{"a","b"}')  // Use `()` for `in` filter, `{}` for array values and `cs` for `contains()`.
.or('id.in.(5,6,7), arraycol.cd.{"a","b"}')  // Use `cd` for `containedBy()`
```

---

### Install Supabase Flutter Package

Source: https://supabase.com/docs/reference/dart/auth-getsession

Install the supabase_flutter package from pub.dev for Flutter projects. This command adds the Supabase dependency to your project's pubspec.yaml file.

```Dart
flutter pub add supabase_flutter
```

---

### List Iceberg Tables and Namespaces with PyIceberg

Source: https://supabase.com/docs/guides/storage/analytics/examples/pyiceberg

This example demonstrates how to use PyIceberg to list available namespaces and tables within a specific namespace. It also shows how to load table metadata to inspect its schema and partitioning strategy, providing insights into the data structure.

```python
# List all namespaces
namespaces = catalog.list_namespaces()
print("Namespaces:", namespaces)

# List tables in a namespace
tables = catalog.list_tables("analytics")
print("Tables in analytics:", tables)

# Get table metadata
table_metadata = catalog.load_table(("analytics", "events"))
print("Schema:", table_metadata.schema())
print("Partitions:", table_metadata.partitions())
```

---

### Install React Hook Form Packages

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-refine

Install additional packages required for form handling within Refine apps. The @refinedev/react-hook-form and react-hook-form packages enable React Hook Form integration for form management and validation.

```bash
npm install @refinedev/react-hook-form react-hook-form
```

---

### Install pgloader on Linux

Source: https://supabase.com/docs/guides/database/import-data

This command demonstrates how to install the `pgloader` tool on a Debian/Ubuntu-based Linux system using the `apt-get` package manager. `pgloader` is a powerful tool for bulk importing data into PostgreSQL databases like Supabase, supporting various source database engines.

```bash
apt-get install pgloader
```

---

### Supabase migration new - Response Output

Source: https://supabase.com/docs/reference/cli/introduction

Example output showing successful creation of a new migration file with auto-generated timestamp prefix.

```text
Created new migration at supabase/migrations/20230306095710_schema_test.sql.
```

---

### POST /auth/v1/signup

Source: https://supabase.com/docs/reference/swift/auth-setsession

Register a new user in the system. Depending on project settings ('Confirm email' and 'Confirm phone'), the user may need to verify their email address or phone number before a session is returned. Handles both email and phone number sign-ups.

````APIDOC
## POST /auth/v1/signup

### Description
Register a new user in the system. Depending on project settings ('Confirm email' and 'Confirm phone'), the user may need to verify their email address or phone number before a session is returned. Handles both email and phone number sign-ups.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Request Body
- **email** (string) - Optional - One of `email` or `phone` must be provided.
- **phone** (string) - Optional - One of `email` or `phone` must be provided.
- **password** (string) - Required - The user's password.
- **data** (object) - Optional - A custom data object to store additional user metadata.
- **redirectTo** (string) - Optional - Only for email signups. The redirect URL embedded in the email link. Must be a configured redirect URL for your Supabase instance.
- **captchaToken** (string) - Optional - A CAPTCHA token for bot protection.

### Request Example
```json
{
  "email": "example@email.com",
  "password": "example-password"
}
````

### Response

#### Success Response (200)

- **user** (object) - The newly created user object.
- **session** (object | null) - The user's session object, or `null` if email/phone confirmation is required.

#### Response Example (Email confirmation required):

```json
{
  "user": {
    "id": "uuid-string",
    "aud": "authenticated",
    "role": "authenticated",
    "email": "example@email.com",
    "email_confirmed_at": null,
    "phone": null,
    "phone_confirmed_at": null,
    "confirmed_at": "2023-10-26T10:00:00Z",
    "last_sign_in_at": null,
    "app_metadata": {
      "provider": "email"
    },
    "user_metadata": {},
    "created_at": "2023-10-26T10:00:00Z",
    "updated_at": "2023-10-26T10:00:00Z"
  },
  "session": null
}
```

#### Response Example (Email confirmation not required):

```json
{
  "user": {
    "id": "uuid-string",
    "aud": "authenticated",
    "role": "authenticated",
    "email": "example@email.com",
    "email_confirmed_at": "2023-10-26T10:05:00Z",
    "phone": null,
    "phone_confirmed_at": null,
    "confirmed_at": "2023-10-26T10:00:00Z",
    "last_sign_in_at": "2023-10-26T10:05:00Z",
    "app_metadata": {
      "provider": "email"
    },
    "user_metadata": {},
    "created_at": "2023-10-26T10:00:00Z",
    "updated_at": "2023-10-26T10:05:00Z"
  },
  "session": {
    "access_token": "jwt-token",
    "token_type": "bearer",
    "expires_in": 3600,
    "expires_at": 1678886400,
    "refresh_token": "refresh-token",
    "user": {
      "id": "uuid-string",
      "aud": "authenticated",
      "role": "authenticated",
      "email": "example@email.com",
      "email_confirmed_at": "2023-10-26T10:05:00Z",
      "phone": null,
      "phone_confirmed_at": null,
      "confirmed_at": "2023-10-26T10:00:00Z",
      "last_sign_in_at": "2023-10-26T10:05:00Z",
      "app_metadata": {
        "provider": "email"
      },
      "user_metadata": {},
      "created_at": "2023-10-26T10:00:00Z",
      "updated_at": "2023-10-26T10:05:00Z"
    }
  }
}
```

#### Error Response (400)

- **message** (string) - Description of the error (e.g., "User already registered" when confirmation is disabled).

#### Error Response (422)

- **message** (string) - Description of validation error (e.g., "Invalid email format", "Password too short").

#### Error Response (429)

- **message** (string) - Rate limit exceeded.

````

--------------------------------

### Define Supabase cities table in SQL migration (example)

Source: https://supabase.com/docs/guides/deployment/database-migrations

This code block shows an example SQL `CREATE TABLE` statement for a `cities` table, as might be generated by `supabase db diff`. It defines columns for `id`, `name`, and `population` for the new table.

```sql
create table "public"."cities" (
  "id" bigint primary key generated always as identity,
  "name" text,
  "population" bigint
);
````

---

### Client Method: Query Explanation

Source: https://supabase.com/docs/reference/swift/getchannels

This client-side method allows you to retrieve the Postgres `EXPLAIN` execution plan for any Supabase query, aiding in performance debugging. It can be applied to `from()`, `rpc()`, and write operations. It's recommended for testing environments due to potential sensitive data exposure.

````APIDOC
## Client Method: Query Explanation

### Description
This client-side method allows you to retrieve the Postgres `EXPLAIN` execution plan for any Supabase query, aiding in performance debugging. It can be applied to `from()`, `rpc()`, and write operations. It's recommended for testing environments due to potential sensitive data exposure.

### Method
`explain()` (Client Method)

### Endpoint
N/A

### Parameters
#### Path Parameters
- None

#### Query Parameters
- None

#### Request Body
- None

### Request Example
```swift
try await supabase
  .from("instruments")
  .select()
  .explain()
  .execute()
  .value
````

### Response

#### Success Response (200)

A JSON object representing the Postgres `EXPLAIN` plan.

#### Response Example

```json
[
  {
    "Plan": {
      "Node Type": "Seq Scan",
      "Relation Name": "instruments",
      "Alias": "instruments",
      "Startup Cost": 0.0,
      "Total Cost": 14.5,
      "Plan Rows": 450,
      "Plan Width": 36,
      "Actual Total Time": 0.25,
      "Actual Rows": 450,
      "Workers Planned": 0,
      "Workers Launched": 0
    }
  }
]
```

````

--------------------------------

### POST /v1/projects/{ref}/read-replicas/setup

Source: https://supabase.com/docs/reference/api/v1-create-legacy-signing-key

Sets up a new read replica for a Supabase project in the specified region.

```APIDOC
## POST /v1/projects/{ref}/read-replicas/setup

### Description
Set up a new read replica in the specified region.

### Method
POST

### Endpoint
`/v1/projects/{ref}/read-replicas/setup`

### Parameters
#### Path Parameters
- **ref** (string) - Required - Project ref

#### Request Body
- **read_replica_region** (enum) - Required - Region for the read replica

### Response Codes
- 201 - Created
- 401 - Unauthorized
- 403 - Forbidden
- 429 - Too Many Requests
- 500 - Internal Server Error

### Response
#### Success Response (201)
Empty object on successful setup

#### Response Example
```json
{}
````

````

--------------------------------

### POST /auth - Initialize Auth Client

Source: https://supabase.com/docs/reference/swift/rpc

Create and initialize a Supabase auth client with your project credentials. This sets up the authentication namespace for handling user authentication operations including sign up, sign in, and session management.

```APIDOC
## POST /auth - Create Auth Client

### Description
Initialize the Supabase authentication client with project URL and credentials. Required before using any auth methods.

### Method
POST

### Endpoint
`/auth/initialize`

### Parameters
#### Request Body
- **supabaseURL** (URL) - Required - Your Supabase project URL
- **supabaseKey** (string) - Required - Your Supabase publishable or anon key

### Request Example
```swift
let supabase = SupabaseClient(
  supabaseURL: URL(string: "https://xyzcompany.supabase.co")!,
  supabaseKey: "publishable-or-anon-key"
)
let auth = supabase.auth
````

### Response

#### Success Response (200)

- **auth** (object) - Auth client instance ready for use

### Notes

- Store credentials securely
- Use publishable key for client-side operations
- Auth methods are accessed via `supabase.auth` namespace

````

--------------------------------

### GET Get OAuth client

Source: https://supabase.com/docs/reference/python/auth-api

Retrieves the detailed information for a specific OAuth client by its ID. This operation requires a `service_role` key and an enabled OAuth 2.1 server.

```APIDOC
## GET /auth/v1/admin/oauth/clients/{client_id}

### Description
Retrieves details of an OAuth client by ID. Requires `service_role` key and an enabled OAuth 2.1 server.

### Method
GET

### Endpoint
`/auth/v1/admin/oauth/clients/{client_id}`

### Parameters
#### Path Parameters
- **client_id** (string) - Required - The ID of the OAuth client to retrieve.

### Request Example
(No request body for GET)

### Response
#### Success Response (200)
- **id** (string) - The ID of the OAuth client.
- **name** (string) - The name of the OAuth client.
- **redirect_uris** (array of string) - A list of allowed redirect URIs for the client.

#### Response Example
```json
{
  "id": "client-id",
  "name": "My OAuth Client",
  "redirect_uris": ["https://example.com/callback"]
}
````

````

--------------------------------

### Database Query Explain Plan

Source: https://supabase.com/docs/reference/swift/auth-setsession

Retrieve the PostgreSQL `EXPLAIN` execution plan for any query, including `rpc()` calls and write operations, to debug slow queries. This feature is typically enabled for testing environments due to sensitive information disclosure.

```APIDOC
## Database Query Explain Plan

### Description
Retrieve the PostgreSQL `EXPLAIN` execution plan for any query, including `rpc()` calls and write operations, to debug slow queries. This feature is typically enabled for testing environments due to sensitive information disclosure.

### Method
N/A (Client-side method triggering server-side action)

### Endpoint
N/A (Client-side method chaining)

### Parameters
#### Query Parameters
- **analyze** (boolean) - Optional - If true, the query is actually executed, and actual run times and row counts are included in the display.
- **verbose** (boolean) - Optional - If true, display additional information regarding the query plan, such as the output column list for each node.

### Request Example
```swift
try await supabase
  .from("instruments")
  .select()
  .explain()
  .execute()
  .value
````

### Response

#### Success Response (200)

- **plan** (object) - The PostgreSQL EXPLAIN execution plan.

#### Response Example

```json
{
  "plan": [
    {
      "Node Type": "Seq Scan",
      "Relation Name": "instruments",
      "Alias": "instruments",
      "Startup Cost": 0.0,
      "Total Cost": 14.5,
      "Plan Rows": 450,
      "Plan Width": 150
    }
  ]
}
```

````

--------------------------------

### Install Capacitor and Ionic PWA Elements packages

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-ionic-react

Install required npm packages for camera access and PWA UI polyfills. Capacitor provides cross-platform native runtime access to device APIs, while Ionic PWA Elements supplies custom UI components for browser APIs without native interfaces.

```bash
npm install @ionic/pwa-elements @capacitor/camera
````

---

### Initialize Supabase Local Development Configuration

Source: https://supabase.com/docs/reference/cli/supabase-branches-delete

Sets up the local development environment for a Supabase project, creating a `supabase/config.toml` file. It supports features like overwriting existing configurations, using OrioleDB for Postgres, and generating IDE-specific settings for Deno (IntelliJ IDEA, VS Code). The working directory can be specified via an environment variable or flag.

```bash
supabase init [flags]
```

```bash
supabase init
```

---

### Sign In with OAuth (Supabase, Swift)

Source: https://supabase.com/docs/reference/swift/auth-getclaims

This example shows how to authenticate users through a third-party OAuth provider, such as GitHub. It allows customization of the authentication session, including specifying the provider and handling the web authentication flow.

```swift
let session = try await supabase.auth.signInWithOAuth(
  provider: .github
) { (session: ASWebAuthenticationSession) in
  // customize session
}
```

---

### GET /auth/mfa/authenticatorAssuranceLevel - Get AAL

Source: https://supabase.com/docs/reference/kotlin/broadcastmessage

Retrieves the Authenticator Assurance Level (AAL) details for the current authenticated session. AAL measures the strength of the authentication mechanism used.

````APIDOC
## GET /auth/mfa/authenticatorAssuranceLevel

### Description
Retrieves the Authenticator Assurance Level (AAL) for the current session. AAL1 represents first-factor authentication (email/password or OAuth), while AAL2 represents second-factor authentication (TOTP).

### Method
GET

### Endpoint
/auth/mfa/authenticatorAssuranceLevel

### Response
#### Success Response (200)
- **current** (AuthenticatorAssuranceLevel) - The current AAL level (AAL1 or AAL2).
- **next** (AuthenticatorAssuranceLevel) - The next possible AAL level. Returns AAL2 if user has a verified factor, otherwise AAL1.

### Request Example
```kotlin
val (current, next) = supabase.auth.mfa.getAuthenticatorAssuranceLevel()
````

### Use Cases

- Check whether the user has at least one verified factor.
- Check whether the user is logged in using AAL2.
- Determine the user's current authentication strength.

### Notes

- AAL1 = 1st factor authentication (email/password, OAuth).
- AAL2 = 2nd factor authentication (TOTP, SMS).
- `next` field indicates what AAL level the user can achieve.

````

--------------------------------

### Example response for successful `supabase db push`

Source: https://supabase.com/docs/reference/cli/supabase-branches-delete

Illustrates the output from a successful `supabase db push` execution. This response indicates that all local migrations have been successfully applied and the database is up to date.

```text
Linked project is up to date.
````

---

### GET /v1/projects/{ref}/postgrest

Source: https://supabase.com/docs/reference/api

Gets project's PostgREST configuration. This endpoint retrieves all PostgREST service settings including database schema, connection pool, and JWT secret.

````APIDOC
## GET /v1/projects/{ref}/postgrest

### Description
Retrieves the current PostgREST configuration settings for the project.

### Method
GET

### Endpoint
/v1/projects/{ref}/postgrest

### Path Parameters
- **ref** (string) - Required - Project reference identifier

### OAuth Scopes
- rest:read

### Response Codes
- 200 - Success
- 401 - Unauthorized
- 403 - Forbidden
- 429 - Too Many Requests
- 500 - Internal Server Error

### Response
#### Success Response (200)
- **db_schema** (string) - Database schema exposed via PostgREST
- **max_rows** (integer) - Maximum rows returned per request
- **db_extra_search_path** (string) - Extra search path for database
- **db_pool** (integer) - Database connection pool size
- **jwt_secret** (string) - JWT secret for authentication

#### Response Example
```json
{
  "db_schema": "lorem",
  "max_rows": 42,
  "db_extra_search_path": "lorem",
  "db_pool": 42,
  "jwt_secret": "lorem"
}
````

````

--------------------------------

### POST /auth/v1/signup

Source: https://supabase.com/docs/reference/csharp/subscribe

Creates a new user account. Email verification behavior depends on project settings ('Confirm email'). If enabled, a user is returned but session is null until verified. If disabled, both user and session are returned.

```APIDOC
## POST /auth/v1/signup

### Description
Creates a new user account with the provided email and password. By default, users need to verify their email address. Behavior changes based on project settings for 'Confirm email'.

### Method
POST

### Endpoint
`/auth/v1/signup`

### Parameters
#### Path Parameters
- No path parameters.

#### Query Parameters
- No query parameters.

#### Request Body
- **email** (string) - Required - The user's email address.
- **password** (string) - Required - The user's chosen password.

### Request Example
```json
{
  "email": "newuser@example.com",
  "password": "MySuperSecurePassword123"
}
````

### Response

#### Success Response (200)

- **user** (object) - The newly created user object.
- **session** (object | null) - The session object if 'Confirm email' is disabled, otherwise `null` until verification.

#### Response Example (Confirm email disabled)

```json
{
  "user": {
    "id": "uuid-user-id",
    "email": "newuser@example.com",
    "confirmed_at": "2023-10-27T10:00:00Z",
    "last_sign_in_at": "2023-10-27T10:00:00Z",
    "aud": "authenticated",
    "role": "authenticated"
  },
  "session": {
    "access_token": "eyJ...",
    "token_type": "Bearer",
    "expires_in": 3600,
    "refresh_token": "ref_token_uuid",
    "user": {
      "id": "uuid-user-id",
      "email": "newuser@example.com"
    }
  }
}
```

#### Response Example (Confirm email enabled)

```json
{
  "user": {
    "id": "uuid-user-id",
    "email": "newuser@example.com",
    "confirmed_at": null,
    "last_sign_in_at": null,
    "aud": "authenticated",
    "role": "authenticated"
  },
  "session": null
}
```

#### Error Response (400)

- **error** (string) - A description of the error.
- **message** (string) - Detailed error message, e.g., 'User already registered'.

#### Error Example

```json
{
  "code": "422",
  "msg": "User already registered"
}
```

````

--------------------------------

### JWT Claims Reference - Authenticated User Token Example

Source: https://supabase.com/docs/guides/auth/jwt-fields

Example JWT payload for an authenticated user token showing all typical claims present for a standard authenticated user with email/password authentication.

```APIDOC
## JWT Example - Authenticated User Token

### Description
Example JWT payload for an authenticated user token with standard user access.

### Response Example
```json
{
  "aal": "aal1",
  "amr": [
    {
      "method": "password",
      "timestamp": 1640991600
    }
  ],
  "app_metadata": {
    "provider": "email",
    "providers": ["email"]
  },
  "aud": "authenticated",
  "email": "user@example.com",
  "exp": 1640995200,
  "iat": 1640991600,
  "iss": "https://abcdefghijklmnopqrst.supabase.co/auth/v1",
  "phone": "",
  "role": "authenticated",
  "session_id": "123e4567-e89b-12d3-a456-426614174000",
  "sub": "123e4567-e89b-12d3-a456-426614174000",
  "user_metadata": {
    "name": "John Doe"
  },
  "is_anonymous": false
}
````

````

--------------------------------

### Configure Environment Variables

Source: https://supabase.com/docs/guides/ai/hugging-face

Create a .env.local file to store sensitive credentials like the Hugging Face access token. This file is used during local development and should not be committed to version control.

```bash
HUGGING_FACE_ACCESS_TOKEN=<your-token-here>
````

---

### Setup MainActivity with Supabase Client and Compose Navigation

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-kotlin

Creates MainActivity with Hilt-injected SupabaseClient and Jetpack Compose UI structure. Implements a NavHost with multiple composable destinations including ProductListScreen, SignInScreen, SignUpScreen, AddProductScreen, and ProductDetailsScreen. Supports dynamic argument passing for product details route.

```Kotlin
@AndroidEntryPoint
class MainActivity : ComponentActivity() {
    @Inject
    lateinit var supabaseClient: SupabaseClient

    @OptIn(ExperimentalMaterial3Api::class)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            ManageProductsTheme {
                // A surface container using the 'background' color from the theme
                val navController = rememberNavController()
                val currentBackStack by navController.currentBackStackEntryAsState()
                val currentDestination = currentBackStack?.destination
                Scaffold { innerPadding ->
                    NavHost(
                        navController,
                        startDestination = ProductListDestination.route,
                        Modifier.padding(innerPadding)
                    ) {
                        composable(ProductListDestination.route) {
                            ProductListScreen(
                                navController = navController
                            )
                        }

                        composable(AuthenticationDestination.route) {
                            SignInScreen(
                                navController = navController
                            )
                        }

                        composable(SignUpDestination.route) {
                            SignUpScreen(
                                navController = navController
                            )
                        }

                        composable(AddProductDestination.route) {
                            AddProductScreen(
                                navController = navController
                            )
                        }

                        composable(
                            route = "${ProductDetailsDestination.route}/{${ProductDetailsDestination.productId}}",
                            arguments = ProductDetailsDestination.arguments
                        ) { navBackStackEntry ->
                            val productId =
                                navBackStackEntry.arguments?.getString(ProductDetailsDestination.productId)
                            ProductDetailsScreen(
                                productId = productId,
                                navController = navController
                            )
                        }
                    }
                }
            }
        }
    }
}
```

---

### POST - Sign Up User

Source: https://supabase.com/docs/reference/csharp/containedby

Creates a new user account with email and password. User email verification can be configured. Returns user object and session if email confirmation is disabled.

````APIDOC
## POST - Sign Up User

### Description
Creates a new user account. By default, the user needs to verify their email address before logging in.

### Method
POST

### Endpoint
/auth/v1/signup

### Parameters
#### Request Body
- **email** (string) - Required - User email address
- **password** (string) - Required - User password

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
````

### Response

#### Success Response (200)

- **user** (object) - User object with user details
- **session** (object) - Session object (null if email confirmation enabled)
- **access_token** (string) - JWT access token
- **user.email** (string) - User email address
- **user.id** (string) - User identifier

#### Notes

- If Confirm email is enabled: user is returned but session is null
- If Confirm email is disabled: both user and session are returned
- User is redirected to SITE_URL after email confirmation
- For existing confirmed users: fake user object or "User already registered" error returned

#### Response Example

```json
{
  "user": {
    "id": "user-uuid",
    "email": "user@example.com"
  },
  "session": null
}
```

````

--------------------------------

### GET /v1/projects

Source: https://supabase.com/docs/reference/api/v1-activate-custom-hostname

Returns a list of all projects you've previously created.

```APIDOC
## GET /v1/projects

### Description
List all projects

### Method
GET

### Endpoint
/v1/projects

### Parameters

### Request Example
{}

### Response
#### Success Response (200)
- (array of objects) - List of projects
    - **id** (string) - Unique identifier of the project
    - **ref** (string) - Reference identifier of the project
    - **organization_id** (string) - ID of the organization the project belongs to
    - **organization_slug** (string) - Slug of the organization the project belongs to
    - **name** (string) - Name of the project
    - **region** (string) - AWS region where the project is hosted
    - **created_at** (string) - Timestamp when the project was created
    - **status** (string) - Current status of the project
    - **database** (object) - Database details
        - **host** (string) - Database host address
        - **version** (string) - Database version
        - **postgres_engine** (string) - PostgreSQL engine version
        - **release_channel** (string) - Database release channel

#### Response Example
```json
[
  {
    "id": "lorem",
    "ref": "mmmmmmmmmmmmmmmmmmmm",
    "organization_id": "lorem",
    "organization_slug": "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
    "name": "lorem",
    "region": "us-east-1",
    "created_at": "2023-03-29T16:32:59Z",
    "status": "INACTIVE",
    "database": {
      "host": "lorem",
      "version": "lorem",
      "postgres_engine": "lorem",
      "release_channel": "lorem"
    }
  }
]
````

````

--------------------------------

### Install Supabase and dependencies for React Native

Source: https://supabase.com/docs/guides/auth/quickstarts/react-native

Install the Supabase JavaScript client library along with required peer dependencies for React Native, including AsyncStorage for session persistence, RNEUI components, and URL polyfill support. Run this command from the project root directory after project creation.

```bash
cd my-app && npx expo install @supabase/supabase-js @react-native-async-storage/async-storage @rneui/themed react-native-url-polyfill
````

---

### POST /buckets

Source: https://supabase.com/docs/reference/csharp/supabase-community/supabase-community/supabase-community/supabase-community/supabase-community/supabase-csharp

Creates a new storage bucket. This allows you to set up new storage locations for your files.

```APIDOC
## POST /buckets

### Description
Creates a new Storage bucket.

### Method
POST

### Endpoint
/buckets

### Parameters
#### Path Parameters
None

#### Query Parameters
None

#### Request Body
- **name** (string) - Required - The name of the bucket.
- **public** (boolean) - Optional - Whether the bucket should be public. Defaults to false.

### Request Example
{
  "name": "avatars",
  "public": false
}

### Response
#### Success Response (201)
- **bucket** (object) - An object containing the created bucket details.

#### Response Example
{
  "id": "bucket-id",
  "name": "avatars",
  "created_at": "2024-01-01T00:00:00.000000+00:00",
  "updated_at": "2024-01-01T00:00:00.000000+00:00",
  "public": false
}
```

---

### Supabase `not()` Filter PostgREST Syntax Examples

Source: https://supabase.com/docs/reference/javascript/auth-getclaims

These examples demonstrate the raw PostgREST syntax expected by the `not()` method for filter values. It shows how to use parentheses for `in` operators and curly braces with `cs` for array containment. Understanding this syntax is crucial for advanced filtering with `not()`.

```javascript
.not('id', 'in', '(5,6,7)')  // Use `()` for `in` filter
.not('arraycol', 'cs', '{"a","b"}')  // Use `cs` for `contains()`, `{}` for array values
```

---

### Query Builder: explain()

Source: https://supabase.com/docs/reference/swift/using-filters

Get the PostgreSQL `EXPLAIN` execution plan for debugging slow queries. This method works on any query, including `rpc()` or writes, and helps analyze query performance.

````APIDOC
## Query Builder: explain()

### Description
Get the PostgreSQL `EXPLAIN` execution plan for debugging slow queries using the `explain()` method on any query, including `rpc()` or writes. This feature should be used cautiously as it can reveal sensitive database information.

### Method
N/A (Query Builder Method)

### Endpoint
N/A

### Parameters
N/A

### Request Example
```swift
try await supabase
  .from("instruments")
  .select()
  .explain()
  .execute()
  .value
````

### Response

#### Success Response

Returns the PostgreSQL `EXPLAIN` execution plan, typically in JSON or text format, detailing how the database executes the query.

#### Response Example

```json
[
  {
    "Plan": {
      "Node Type": "Seq Scan",
      "Relation Name": "instruments",
      "Alias": "instruments",
      "Startup Cost": 0.0,
      "Total Cost": 10.0,
      "Rows": 100,
      "Width": 100
    }
  }
]
```

````

--------------------------------

### Initialize Supabase Client

Source: https://supabase.com/docs/reference/kotlin/auth-getuseridentities

Create and configure a Supabase client instance with authentication, database, storage, realtime, functions, and GraphQL modules.

```APIDOC
## Initialize Supabase Client

### Description
Create a Supabase client instance with your project credentials and install desired plugins and modules.

### Method
Function

### Function
createSupabaseClient()

### Parameters
- **supabaseUrl** (String) - Required - The unique Supabase URL from your project dashboard
- **supabaseKey** (String) - Required - The unique Supabase Key (publishable or anon key) from your project dashboard
- **builder** (SupabaseClientBuilder.() -> Unit) - Optional - Apply additional configuration and install plugins

### Request Example
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://xyzcompany.supabase.co",
    supabaseKey = "publishable-or-anon-key"
) {
    install(Auth)
    install(Postgrest)
    // install other modules
}
````

### Response

- **supabase** (SupabaseClient) - Configured Supabase client instance ready for use

### Installable Modules

- Auth - Authentication module
- Postgrest - Database module
- Storage - File storage module
- Realtime - Real-time subscriptions module
- Functions - Serverless functions plugin
- GraphQL - GraphQL plugin

````

--------------------------------

### Supabase Client Initialization

Source: https://supabase.com/docs/reference/kotlin/auth-setsession

Initializes the Supabase client with required credentials and allows installing various modules like Auth and Postgrest.

```APIDOC
## Initialize Supabase Client

### Description
Initializes the Supabase client with your project's URL and key. This function also allows for installing and configuring various Supabase modules and plugins.

### Method
POST (Conceptual - client instantiation)

### Endpoint
`createSupabaseClient()`

### Parameters
#### Function Parameters
- **supabaseUrl** (String) - Required - The unique Supabase URL from your project dashboard.
- **supabaseKey** (String) - Required - The unique Supabase Key (publishable or anon key) from your project dashboard.
- **builder** (SupabaseClientBuilder.() -> Unit) - Optional - A lambda to apply additional configuration and install plugins (e.g., Auth, Postgrest).

### Request Example
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://xyzcompany.supabase.co",
    supabaseKey = "publishable-or-anon-key"
) {
    install(Auth)
    install(Postgrest)
    //install other modules
}
````

### Response

#### Success Response (Client Instance)

- **supabase** (SupabaseClient) - An initialized Supabase client instance, configured with specified modules.

#### Response Example

```
// A SupabaseClient instance is returned for further operations.
```

````

--------------------------------

### Linting All Schemas with `supabase db lint`

Source: https://supabase.com/docs/reference/cli/supabase-bootstrap

Demonstrates the basic usage of the `supabase db lint` command without any additional flags. When executed this way, it performs a linting check across all default schemas in the local or linked database, reporting any warnings or errors.

```bash
supabase db lint
````

---

### Complex usage example of index_advisor with multiple tables and joins in PostgreSQL

Source: https://supabase.com/docs/guides/database/extensions/index_advisor

This advanced example demonstrates `index_advisor`'s capability to analyze more complex queries involving multiple tables, joins, and filters. It sets up several related tables (`author`, `publisher`, `book`, `review`) and then calls `index_advisor` with a multi-table `SELECT` query, showcasing its ability to recommend multiple indexes.

```sql
create extension if not exists index_advisor cascade;

create table author(
    id serial primary key,
    name text not null
);

create table publisher(
    id serial primary key,
    name text not null,
    corporate_address text
);

create table book(
    id serial primary key,
    author_id int not null references author(id),
    publisher_id int not null references publisher(id),
    title text
);

create table review(
    id serial primary key,
    book_id int references book(id),
    body text not null
);

select
    *
from
    index_advisor('
        select
            book.id,
            book.title,
            publisher.name as publisher_name,
            author.name as author_name,
            review.body review_body
        from
            book
            join publisher
                on book.publisher_id = publisher.id
            join author
                on book.author_id = author.id
            join review
                on book.id = review.book_id
        where
            author.id = $1
            and publisher.id = $2
    ');
```

---

### GET /auth/mfa/aal - Get Authenticator Assurance Level

Source: https://supabase.com/docs/reference/python/eq

Retrieves the Authenticator Assurance Level (AAL) details of the current session. AAL1 indicates first-factor authentication while AAL2 indicates verified second-factor authentication.

````APIDOC
## GET /auth/mfa/aal

### Description
Retrieves the Authenticator Assurance Level (AAL) of the current session. AAL measures the strength of the authentication mechanism, with AAL1 for first-factor and AAL2 for second-factor authentication.

### Method
GET

### Endpoint
/auth/mfa/aal

### Request Example
```python
response = supabase.auth.mfa.get_authenticator_assurance_level()
````

### Response

#### Success Response (200)

- **current_level** (string) - Current AAL of the session: `aal1` or `aal2`
- **next_level** (string) - Next achievable AAL level
- **verified_factors** (array) - List of verified MFA factors

### Notes

- **AAL1**: First-factor authentication such as email/password or OAuth sign-in
- **AAL2**: Second-factor authentication such as TOTP
- `next_level` returns `aal2` if user has a verified factor, otherwise `aal1`
- Used to determine if additional authentication is required

````

--------------------------------

### GET /auth/identities - Retrieve linked identities

Source: https://supabase.com/docs/reference/dart/auth-mfa-verify

Gets all OAuth identities linked to the currently authenticated user. Returns a list of identity objects associated with the user account.

```APIDOC
## GET /auth/identities

### Description
Gets all the identities linked to a user.

### Method
GET

### Endpoint
/auth/identities

### Request Example
```dart
final identities = await supabase.auth.getUserIdentities();
````

### Response

#### Success Response (200)

- **identities** (Array) - List of identity objects linked to the user
  - **provider** (String) - OAuth provider name
  - **user_id** (String) - Provider-specific user ID
  - **identity_data** (Object) - Provider-specific identity data

### Notes

- User must be signed in to call this method

````

--------------------------------

### GET /v1/projects/{ref}/network-restrictions

Source: https://supabase.com/docs/reference/api/v1-deactivate-vanity-subdomain-config

[Beta] Gets project's network restrictions including allowed CIDR blocks for database access. Returns both current configuration and previous configuration states.

```APIDOC
## GET /v1/projects/{ref}/network-restrictions

### Description
[Beta] Retrieves the project's network restrictions including allowed CIDR blocks for IPv4 and IPv6 database access.

### Method
GET

### Endpoint
/v1/projects/{ref}/network-restrictions

### OAuth Scopes
- **projects:read** - Required to read project information

### Path Parameters
- **ref** (string) - Required - Project ref identifier

### Response Codes
- **200** - Success
- **401** - Unauthorized
- **403** - Forbidden
- **429** - Too Many Requests
- **500** - Internal Server Error

### Response
#### Success Response (200)
- **entitlement** (string) - Entitlement status (e.g., disallowed)
- **config** (object) - Current network configuration
  - **dbAllowedCidrs** (array) - Allowed IPv4 CIDR blocks
  - **dbAllowedCidrsV6** (array) - Allowed IPv6 CIDR blocks
- **old_config** (object) - Previous network configuration
  - **dbAllowedCidrs** (array) - Previously allowed IPv4 CIDR blocks
  - **dbAllowedCidrsV6** (array) - Previously allowed IPv6 CIDR blocks
- **status** (string) - Configuration status (e.g., stored)
- **updated_at** (string) - Configuration update timestamp
- **applied_at** (string) - Configuration application timestamp

### Response Example
{
  "entitlement": "disallowed",
  "config": {
    "dbAllowedCidrs": [
      "lorem"
    ],
    "dbAllowedCidrsV6": [
      "lorem"
    ]
  },
  "old_config": {
    "dbAllowedCidrs": [
      "lorem"
    ],
    "dbAllowedCidrsV6": [
      "lorem"
    ]
  },
  "status": "stored",
  "updated_at": "2021-12-31T23:34:00Z",
  "applied_at": "2021-12-31T23:34:00Z"
}
````

---

### Run pgloader with a Configuration File

Source: https://supabase.com/docs/guides/database/import-data

This command executes `pgloader` using a specified configuration file, such as `config.load`. The configuration file contains all necessary details for connecting to the source and target databases, along with defined import parameters, automating the data loading process.

```bash
pgloader config.load
```

---

### JWT Claims Reference - Anonymous User Token Example

Source: https://supabase.com/docs/guides/auth/jwt-fields

Example JWT payload for an anonymous user token showing minimal claims required for public access with Row Level Security policies.

````APIDOC
## JWT Example - Anonymous User Token

### Description
Example JWT payload for an anonymous user token with public access and RLS policies.

### Response Example
```json
{
  "iss": "supabase",
  "ref": "abcdefghijklmnopqrst",
  "role": "anon",
  "iat": 1640991600,
  "exp": 1640995200
}
````

````

--------------------------------

### Install Supabase Swift Package via Swift Package Manager

Source: https://supabase.com/docs/reference/swift/auth-getsession

Configure Package.swift to add Supabase dependencies to your Swift project. Supports modular installation of individual libraries (Auth, Realtime, Postgrest, Functions, Storage) or the complete Supabase package. Requires specifying the GitHub repository URL and minimum version.

```swift
let package = Package(
    ...
    dependencies: [
        ...
        .package(
            url: "https://github.com/supabase/supabase-swift.git",
            from: "2.0.0"
        ),
    ],
    targets: [
        .target(
            name: "YourTargetName",
            dependencies: [
                .product(
                    name: "Supabase", // Auth, Realtime, Postgrest, Functions, or Storage
                    package: "supabase-swift"
                ),
            ]
        )
     n)
````

---

### Auth Client Initialization

Source: https://supabase.com/docs/reference/swift/subscribe

Initializes the Supabase authentication client with the necessary project URL and API key, providing access to all authentication-related methods.

````APIDOC
## Client Method: SupabaseClient(supabaseURL:supabaseKey:).auth

### Description
Initializes the Supabase client and specifically accesses its `auth` namespace, which provides all the authentication-related methods for your application. This setup is crucial for interacting with Supabase Auth.

### Method
Client Constructor/Property Access

### Endpoint
`SupabaseClient(supabaseURL: URL, supabaseKey: String).auth`

### Parameters
#### Path Parameters
- No path parameters.

#### Query Parameters
- No query parameters.

#### Request Body
- No request body.

### Request Example
```swift
let supabase = SupabaseClient(supabaseURL: URL(string: "https://xyzcompany.supabase.co")!, supabaseKey: "publishable-or-anon-key")
let auth = supabase.auth
````

### Response

#### Success Response (200)

- **auth** (object) - An instance of the Supabase Auth client, ready to be used for authentication operations like sign-up, sign-in, and session management.

#### Response Example

```json
// No direct JSON response, an 'auth' object instance is returned.
```

````

--------------------------------

### Implement SwiftUI App Entry Point with Supabase Authentication State

Source: https://supabase.com/docs/guides/getting-started/tutorials/with-swift

This SwiftUI `AppView` serves as the main entry point for the application, dynamically routing users based on their Supabase authentication status. It leverages `supabase.auth.authStateChanges` to asynchronously monitor session changes and updates the `isAuthenticated` state. Based on this state, it displays either the `ProfileView` for authenticated users or the `AuthView` for unauthenticated ones.

```swift
import SwiftUI

struct AppView: View {
  @State var isAuthenticated = false

  var body: some View {
    Group {
      if isAuthenticated {
        ProfileView()
      } else {
        AuthView()
      }
    }
    .task {
      for await state in supabase.auth.authStateChanges {
        if [.initialSession, .signedIn, .signedOut].contains(state.event) {
          isAuthenticated = state.session != nil
        }
      }
    }
  }
}
````

---

### Initialize Supabase Local Project - CLI

Source: https://supabase.com/docs/reference/cli/supabase-completion-zsh

Creates a supabase/config.toml file for local development configuration. Supports optional IDE settings generation for IntelliJ IDEA and VS Code with Deno support. The command can be overridden using SUPABASE_WORKDIR environment variable.

```bash
supabase init
```

```bash
supabase init --force
```

```bash
supabase init --with-vscode-settings
```

```bash
supabase init --with-intellij-settings
```

---

### Example PGMQ message_record Structure (SQL)

Source: https://supabase.com/docs/guides/queues/pgmq

This snippet provides an illustrative example of the `message_record` structure, which represents a complete message within a PGMQ queue. It highlights key attributes such as `msg_id`, `read_ct`, `enqueued_at`, `vt` (visibility timestamp), and the `message` payload in JSONB format.

```sql
msg_id | read_ct |          enqueued_at          |              vt               |      message
--------+---------+-------------------------------+-------------------------------+--------------------
      1 |       1 | 2023-10-28 19:06:19.941509-05 | 2023-10-28 19:06:27.419392-05 | {"hello": "world"}
```

---

### POST /storage/buckets

Source: https://supabase.com/docs/reference/kotlin/auth-signup

Create a new storage bucket with optional configuration settings. Requires insert permissions on the buckets table. Use the builder pattern to configure bucket properties like visibility and file size limits.

````APIDOC
## POST /storage/buckets

### Description
Create a new storage bucket with optional configuration such as public/private access, file size limits, and allowed MIME types.

### Method
POST

### Endpoint
/storage/buckets

### Parameters
#### Request Body
- **id** (String) - Required - The unique identifier for the bucket
- **public** (Boolean) - Optional - Whether the bucket is publicly accessible (default: false)
- **fileSizeLimit** (Long) - Optional - Maximum file size allowed in the bucket
- **allowedMimeTypes** (List<String>) - Optional - List of allowed MIME types

### Request Example
```kotlin
supabase.storage.createBucket(id = "icons") {
    public = true
    fileSizeLimit = 5.megabytes
}
````

### Response

#### Success Response (201)

- **id** (String) - The bucket identifier
- **name** (String) - The bucket name
- **public** (Boolean) - Public accessibility status

### RLS Policy Requirements

- **buckets** table: insert
- **objects** table: none

````

--------------------------------

### Create a new user

Source: https://supabase.com/docs/reference/csharp/auth-signout

Registers a new user with an email and password. Email confirmation behavior depends on project settings.

```APIDOC
## POST /auth/v1/signup

### Description
Registers a new user with the provided email and password. The system's behavior regarding email verification is configured in the project settings. If 'Confirm email' is enabled, the user must verify their email before logging in, and the session will be null upon sign-up. Otherwise, both user and session are returned immediately.

### Method
POST

### Endpoint
`/auth/v1/signup`

### Parameters
#### Path Parameters
(N/A)

#### Query Parameters
(N/A)

#### Request Body
- **email** (string) - Required - The email address of the new user.
- **password** (string) - Required - The password for the new user.

### Request Example
```csharp
var session = await supabase.Auth.SignUp(email, password);
````

### Response

#### Success Response (200)

- **object** (AuthResponse) - An object containing user details and a session. The session might be null if email confirmation is required.

#### Response Example

```json
{
  "user": {
    "id": "user-uuid",
    "email": "test@example.com",
    "confirmed_at": "2023-01-01T12:00:00Z"
  },
  "session": {
    "access_token": "jwt-token",
    "refresh_token": "refresh-token",
    "expires_in": 3600
  }
}
```

_(Session may be null if email confirmation is enabled)_

#### Error Response (400)

- **Error** - If the email is already registered or other validation issues occur.

````

--------------------------------

### GET /mfa/aal - Get Authenticator Assurance Level

Source: https://supabase.com/docs/reference/swift/installing

Retrieves the Authenticator Assurance Level (AAL) for the current session. AAL indicates the strength of authentication (aal1 for first factor, aal2 for second factor verification).

```APIDOC
## GET /mfa/aal

### Description
Retrieves the Authenticator Assurance Level (AAL) for the current session. AAL1 indicates first-factor authentication (email/password or OAuth), while AAL2 indicates second-factor authentication (TOTP or similar). The nextLevel field indicates the highest AAL the user can achieve.

### Method
GET

### Endpoint
/mfa/aal

### Response
#### Success Response (200)
- **currentLevel** (string) - The current AAL level (aal1 or aal2)
- **nextLevel** (string) - The next available AAL level
- **currentAuthenticationMethods** (array) - List of authentication methods used in the current session

### Request Example
```swift
let aal = try await supabase.auth.mfa.getAuthenticatorAssuranceLevel()
let currentLevel = aal.currentLevel
let nextLevel = aal.nextLevel
let currentAuthenticationMethods = aal.currentAuthenticationMethods
````

````

--------------------------------

### Client Initialization

Source: https://supabase.com/docs/reference/csharp/storage-from-createsignedurl

Initialize a new Supabase client with your project URL and public API key. Configure options like real-time auto-connect and use dependency injection for application integration.

```APIDOC
## Initialize Supabase Client

### Description
Set up a new Supabase client instance with project credentials and configuration options.

### Method
Constructor / Initialization

### Parameters
#### Required
- **url** (string) - Your Supabase project URL from the admin panel
- **key** (string) - Your Supabase public API key from the admin panel
- **options** (SupabaseOptions) - Optional - Configuration settings for the client

#### Configuration Options
- **AutoConnectRealtime** (boolean) - Optional - Enable automatic real-time connection (default: true)

### Request Example
```csharp
var url = Environment.GetEnvironmentVariable("SUPABASE_URL");
var key = Environment.GetEnvironmentVariable("SUPABASE_KEY");

var options = new Supabase.SupabaseOptions
{
    AutoConnectRealtime = true
};

var supabase = new Supabase.Client(url, key, options);
await supabase.InitializeAsync();
````

### Response

- Returns initialized Supabase client ready for API calls
- Client must be initialized with `InitializeAsync()` before use

### Important Notes

- Models must derive from `BaseModel` to interact with the API
- Use `Table`, `PrimaryKey`, and `Column` attributes to map C# classes to database tables
- Store credentials in environment variables for security

````

--------------------------------

### GET /mfa/aal - Get Authenticator Assurance Level

Source: https://supabase.com/docs/reference/swift/initializing

Retrieve the current Authenticator Assurance Level (AAL) for the authenticated session. Returns current authentication level and next achievable level.

```APIDOC
## GET /mfa/aal

### Description
Get the Authenticator Assurance Level (AAL) details for the current session. AAL measures the strength of the authentication mechanism.

### Method
GET

### Endpoint
/mfa/aal

### AAL Levels
- **aal1** - First factor of authentication (email/password or OAuth)
- **aal2** - Second factor of authentication (TOTP or similar)

### Request Example
```swift
let aal = try await supabase.auth.mfa.getAuthenticatorAssuranceLevel()
let currentLevel = aal.currentLevel
let nextLevel = aal.nextLevel
let currentAuthenticationMethods = aal.currentAuthenticationMethods
````

### Response

#### Success Response (200)

- **currentLevel** (string) - Current AAL level (aal1 or aal2)
- **nextLevel** (string) - Next achievable AAL level
- **currentAuthenticationMethods** (array) - List of current authentication methods

### Notes

- If user has verified factor, nextLevel returns aal2, otherwise aal1
- currentLevel reflects the user's current authentication strength

````

--------------------------------

### GET /mfa/authenticator_assurance_level - Get AAL Details

Source: https://supabase.com/docs/reference/swift/introduction

Retrieve the Authenticator Assurance Level (AAL) for the current session. AAL indicates the strength of authentication with aal1 for single-factor and aal2 for multi-factor authentication.

```APIDOC
## GET /mfa/authenticator_assurance_level

### Description
Get the Authenticator Assurance Level (AAL) details of the current session. AAL measures the strength of the authentication mechanism. aal1 indicates first-factor authentication (email/password or OAuth), while aal2 indicates second-factor authentication (TOTP).

### Method
GET

### Endpoint
/mfa/authenticator_assurance_level

### Request Example
```swift
let aal = try await supabase.auth.mfa.getAuthenticatorAssuranceLevel()
let currentLevel = aal.currentLevel
let nextLevel = aal.nextLevel
let currentAuthenticationMethods = aal.currentAuthenticationMethods
````

### Response

#### Success Response (200)

- **currentLevel** (string) - Current AAL level: "aal1" or "aal2"
- **nextLevel** (string) - Next possible AAL level ("aal2" if verified factor exists, else "aal1")
- **currentAuthenticationMethods** (array) - List of current authentication methods

### Notes

- AAL1: First factor authentication (email/password, OAuth)
- AAL2: Second factor authentication (TOTP, WebAuthn)
- nextLevel returns "aal2" if user has a verified factor, otherwise "aal1"

````

--------------------------------

### Auth: Sign Up

Source: https://supabase.com/docs/reference/csharp/storage-from-remove

This function creates a new user account. Email confirmation behavior (and thus session return) depends on project settings. If 'Confirm email' is enabled, the user needs to verify their email before a session is active.

```APIDOC
## SDK Method Call: Auth Sign Up

### Description
Creates a new user account. By default, the user needs to verify their email address before logging in. If "Confirm email" is enabled, a `user` is returned but `session` is null; if disabled, both `user` and `session` are returned. If an existing user signs up, specific error messages or obfuscated user objects are returned based on confirmation settings.

### Method
SDK Method Call

### Endpoint
`supabase.Auth.SignUp(email, password)`

### Parameters
#### Request Body
- **email** (string) - Required - The email address of the new user.
- **password** (string) - Required - The password for the new user.

### Request Example
```json
{
  "email": "user@example.com",
  "password": "strongpassword"
}
````

### Response

#### Success Response (200)

- **Session** (object) - An object containing user and session details if 'Confirm email' is disabled.
- **User** (object) - An object containing user details, with session potentially null, if 'Confirm email' is enabled.

#### Response Example (Confirm email disabled)

```json
{
  "user": {
    "id": "e4f5a6b7-c8d9-e0f1-2a3b-4c5d6e7f8a9b",
    "email": "user@example.com",
    "created_at": "2023-10-27T10:00:00Z"
  },
  "session": {
    "access_token": "eyJ...",
    "refresh_token": "xyz...",
    "user": { ... }
  }
}
```

#### Response Example (Confirm email enabled)

```json
{
  "user": {
    "id": "e4f5a6b7-c8d9-e0f1-2a3b-4c5d6e7f8a9b",
    "email": "user@example.com",
    "created_at": "2023-10-27T10:00:00Z"
  },
  "session": null
}
```

````

--------------------------------

### GET /auth/claims - Get JWT Claims

Source: https://supabase.com/docs/reference/swift/introduction

Verify a JWT token and extract its claims. Supports both symmetric (HS256) and asymmetric (RS256) JWT verification with automatic key rotation and caching.

```APIDOC
## GET /auth/claims

### Description
Verify a JWT token and extract its claims. Performs client-side verification for asymmetric JWTs (RS256) using Apple Security framework, and server-side verification for symmetric JWTs (HS256). Includes automatic JWKS caching with 10-minute TTL and fallback to server-side verification on key rotation.

### Method
GET

### Endpoint
/auth/claims

### Parameters
#### Query Parameters
- **jwt** (String) - Optional - The JWT to verify. If not provided, uses access token from current session.
- **allowExpired** (Bool) - Optional - Skip expiration check during verification.
- **jwks** (Object) - Optional - Custom JSON Web Key Set for verification.

### Request Example
````

let response = try await supabase.auth.getClaims()
print("User ID: \(response.claims.sub ?? \"N/A\")")
print("Email: \(response.claims.email ?? \"N/A\")")
print("Role: \(response.claims.role ?? \"N/A\")")

```

### Response
#### Success Response (200)
- **claims** (Object) - Verified JWT claims containing:
  - **sub** (String) - Subject (user ID)
  - **email** (String) - User email
  - **role** (String) - User role
  - **iat** (Number) - Issued at timestamp
  - **exp** (Number) - Expiration timestamp

#### Response Example
```

{
"claims": {
"sub": "user-id-123",
"email": "user@example.com",
"role": "authenticated",
"iat": 1234567890,
"exp": 1234571490
}
}

```

```

---

### Create a Bucket

Source: https://supabase.com/docs/reference/swift/auth-signinwithpassword

Creates a new storage bucket with specified options.

````APIDOC
## POST /storage/v1/bucket

### Description
This endpoint creates a new storage bucket. Requires `insert` permissions on the `buckets` table via RLS policies.

### Method
POST

### Endpoint
`supabase.storage.createBucket(bucketId, options)` (SDK call, maps to REST endpoint)

### Parameters
#### Path Parameters
- **bucketId** (string) - Required - The unique identifier for the new bucket.

#### Request Body (for `options`)
- **public** (boolean) - Optional - Whether the bucket should be publicly accessible. Defaults to `false`.
- **allowedMimeTypes** (array<string>) - Optional - A list of MIME types allowed for files uploaded to this bucket. If not provided, all MIME types are allowed.
- **fileSizeLimit** (integer) - Optional - The maximum size (in bytes) for files uploaded to this bucket. If not provided, a default limit may apply.

### Request Example
```json
{
  "bucketId": "avatars",
  "options": {
    "public": false,
    "allowedMimeTypes": [
      "image/png"
    ],
    "fileSizeLimit": 1024
  }
}
````

### Response

#### Success Response (200 or 201)

- **message** (string) - A confirmation message, typically "Created".

#### Response Example

```json
{
  "message": "Created"
}
```

````

--------------------------------

### GET /storage/buckets - List all buckets

Source: https://supabase.com/docs/reference/csharp/auth-signinwithoauth

Retrieves the details of all Storage buckets within an existing product. Requires `buckets` select permissions.

```APIDOC
## GET /storage/buckets

### Description
Retrieves the details of all Storage buckets within an existing product.

### Method
GET

### Endpoint
/storage/buckets

### Policy Permissions Required
- **buckets** - `select`
- **objects** - none

### Response
#### Success Response (200)
- **buckets** (array) - List of all storage buckets
  - **id** (string) - Bucket identifier
  - **name** (string) - Bucket name
  - **public** (boolean) - Whether bucket is public
  - **created_at** (string) - Creation timestamp
  - **updated_at** (string) - Last update timestamp

### Code Example
```csharp
var buckets = await supabase.Storage.ListBuckets();
````

````

--------------------------------

### GET /object/{bucketName}/{wildcard}

Source: https://supabase.com/docs/reference/self-hosting-storage/delete-multiple-objects

Serves an object from a specified bucket, identified by bucket name and object path.

```APIDOC
## GET /object/{bucketName}/{wildcard}
Serve objects

### Description
Serves an object from a specified bucket, identified by bucket name and object path.

### Method
GET

### Endpoint
/object/{bucketName}/{wildcard}

### Parameters
#### Path Parameters
- **bucketName** (string) - Required
- **\*** (string) - Required
````

---

### GET /auth/mfa/authenticator-assurance-level - Get AAL

Source: https://supabase.com/docs/reference/python/using-filters

Retrieves the Authenticator Assurance Level (AAL) of the current session. AAL1 indicates first-factor authentication, AAL2 indicates second-factor authentication. Returns next_level if a verified factor exists.

```APIDOC
## GET /auth/mfa/authenticator-assurance-level

### Description
Retrieves the Authenticator Assurance Level (AAL) details for the authenticated session. AAL measures authentication strength.

### Method
GET

### Endpoint
/auth/mfa/authenticator-assurance-level

### Response
#### Success Response (200)
- **current_level** (string) - Current AAL: 'aal1' or 'aal2'
- **next_level** (string) - Next possible AAL level
- **current_authentication_methods** (array) - List of current authentication methods
- **verified_factors** (array) - List of verified MFA factors

### Notes
- **aal1**: First-factor authentication (email/password or OAuth)
- **aal2**: Second-factor authentication (TOTP or other MFA)
- If user has a verified factor, next_level will be 'aal2', otherwise 'aal1'
```

---

### List All Preview Branches

Source: https://supabase.com/docs/reference/cli/supabase-inspect-db-cache-hit

Displays all preview branches available for the linked Supabase project. Helps track development and testing environments.

```bash
supabase branches list
supabase branches list --project-ref proj_abc123
```

---

### Example Error Message: Permission Denied on Table (SQLSTATE 42501)

Source: https://supabase.com/docs/guides/troubleshooting/dashboard-errors-when-managing-users-N1ls4A

An example of an error message indicating a permission denied issue, specifically when updating a user's `last_sign_in` field due to insufficient permissions on the `profiles` table. This typically points to an authentication role lacking necessary privileges.

```Text
"error":"error update user`s last_sign_in field: ERROR: permission denied for table profiles (SQLSTATE 42501)"
```

---

### GET /auth/mfa/authenticator_assurance_level - Get AAL

Source: https://supabase.com/docs/reference/python/auth-signinwithotp

Retrieves the Authenticator Assurance Level (AAL) of the current session. AAL1 indicates first-factor authentication (password/OAuth), while AAL2 indicates second-factor authentication (TOTP).

````APIDOC
## GET /auth/mfa/authenticator_assurance_level

### Description
Retrieves the Authenticator Assurance Level (AAL) details for the current session. AAL1 = first-factor auth (password/OAuth), AAL2 = second-factor auth (TOTP).

### Method
GET

### Endpoint
/auth/mfa/authenticator_assurance_level

### Parameters
No parameters required.

### Request Example
```python
response = supabase.auth.mfa.get_authenticator_assurance_level()
````

### Response

#### Success Response (200)

- **current_level** (string) - Current AAL: "aal1" or "aal2"
- **next_level** (string) - Achievable AAL level: "aal1" or "aal2"
- **factors** (array) - List of verified MFA factors

````

--------------------------------

### GET /v1/projects/{ref}/upgrade/status

Source: https://supabase.com/docs/reference/api/introduction

[Beta] Gets the latest status of the project's upgrade. Returns comprehensive upgrade status information including progress, target version, and any errors encountered during the upgrade process.

```APIDOC
## GET /v1/projects/{ref}/upgrade/status

### Description
[Beta] Gets the latest status of the project's upgrade.

### Method
GET

### Endpoint
`/v1/projects/{ref}/upgrade/status`

### OAuth Scopes
- `projects:read`

### Path Parameters
- **ref** (string) - Required - Project reference code

### Query Parameters
- **tracking_id** (string) - Optional - Upgrade tracking identifier

### Response Codes
- **200** - Success
- **401** - Unauthorized
- **403** - Forbidden
- **429** - Too Many Requests
- **500** - Internal Server Error

### Response (200)

#### Success Response Fields
- **databaseUpgradeStatus** (object) - Database upgrade status information
  - **initiated_at** (string) - Upgrade initiation timestamp
  - **latest_status_at** (string) - Latest status update timestamp
  - **target_version** (integer) - Target upgrade version
  - **error** (string) - Error code if upgrade failed (e.g., 1_upgraded_instance_launch_failed)
  - **progress** (string) - Current progress state (e.g., 0_requested)
  - **status** (integer) - Numeric status code

### Response Example
```json
{
  "databaseUpgradeStatus": {
    "initiated_at": "lorem",
    "latest_status_at": "lorem",
    "target_version": 42,
    "error": "1_upgraded_instance_launch_failed",
    "progress": "0_requested",
    "status": 42
  }
}
````

````

--------------------------------

### GET /object/{bucketName}/{wildcard}

Source: https://supabase.com/docs/reference/self-hosting-storage/search-for-objects-under-a-prefix

Serve or retrieve a single object from a specified bucket.

```APIDOC
## GET /object/{bucketName}/{wildcard}

### Description
Serve or retrieve a single object from a specified bucket.

### Method
GET

### Endpoint
/object/{bucketName}/{wildcard}

### Parameters
#### Path Parameters
- **bucketName** (string) - Required - The name of the bucket containing the object.
- **wildcard** (string) - Required - The full path to the object within the bucket (e.g., 'folder/image.png').

### Request Example
```json
{}
````

### Response

#### Success Response (200)

Returns the file content directly. No specific JSON response structure is provided.

#### Response Example

No specific JSON response example provided.

````

--------------------------------

### Create WebSocket Server with Deno in Edge Functions

Source: https://supabase.com/docs/guides/functions/websockets

This Deno example demonstrates how to set up a basic WebSocket server within an Edge Function. It handles the WebSocket upgrade request, logs connection events, echoes incoming messages, and sends the current date back to the client.

```typescript
Deno.serve((req) => {
  const upgrade = req.headers.get('upgrade') || ''

  if (upgrade.toLowerCase() != 'websocket') {
    return new Response("request isn't trying to upgrade to WebSocket.", { status: 400 })
  }

  const { socket, response } = Deno.upgradeWebSocket(req)

  socket.onopen = () => console.log('socket opened')
  socket.onmessage = (e) => {
    console.log('socket message:', e.data)
    socket.send(new Date().toString())
  }

  socket.onerror = (e) => console.log('socket errored:', e.message)
  socket.onclose = () => console.log('socket closed')

  return response
})
````

---

### GET /storage/v1/render/image/public - Get Public URL for Transformed Image

Source: https://supabase.com/docs/guides/storage/image-transformations

Retrieve a public URL for a transformed image from a public bucket. Supports width, height, quality, and format parameters for on-the-fly image optimization.

````APIDOC
## GET /storage/v1/render/image/public/{bucket}/{image_path}

### Description
Generates a public URL for an image with transformation options applied. The transformed image is served directly from the URL without additional API calls.

### Method
GET

### Endpoint
https://project_id.supabase.co/storage/v1/render/image/public/{bucket}/{image_path}

### Parameters
#### Path Parameters
- **bucket** (string) - Required - Name of the storage bucket
- **image_path** (string) - Required - Path to the image file within the bucket

#### Query Parameters
- **width** (integer) - Optional - Desired image width in pixels
- **height** (integer) - Optional - Desired image height in pixels
- **quality** (integer) - Optional - Image quality from 20-100 (default: 80)
- **format** (string) - Optional - Output format ('origin' to disable automatic optimization, otherwise auto-detects WebP support)

### Request Example
```javascript
supabase.storage.from('bucket').getPublicUrl('image.jpg', {
  transform: {
    width: 500,
    height: 600
  }
})
````

### Response

#### Success Response (200)

- **url** (string) - Public URL serving the transformed image

#### Response Example

https://project_id.supabase.co/storage/v1/render/image/public/bucket/image.jpg?width=500&height=600

### Notes

- Image Resizing requires Pro Plan or above
- Automatic WebP optimization is applied based on client browser support
- Original image format is preserved if format=origin is specified

````

--------------------------------

### Basic `supabase db diff` Command Syntax

Source: https://supabase.com/docs/reference/cli/supabase-bootstrap

Shows the general syntax for the `supabase db diff` command, including an optional `flags` placeholder for various command-line options that modify its behavior, such as targeting remote databases or saving output to a file.

```bash
supabase db diff [flags]
````

---

### Vector Record Example Instance

Source: https://supabase.com/docs/guides/ai/python/collections

Demonstrates a concrete example of a vector record with ID 'vec1', a 3-dimensional vector with values [0.1, 0.2, 0.3], and JSON metadata containing a year field set to 1990.

```text
("vec1", [0.1, 0.2, 0.3], {"year": 1990})
```

---

### GET /explain - Query Execution Plan

Source: https://supabase.com/docs/reference/kotlin/auth-signout

Retrieves the Postgres EXPLAIN execution plan for debugging slow queries. This endpoint helps identify performance bottlenecks and optimize query performance. Must be enabled in project settings for security reasons.

````APIDOC
## GET /explain

### Description
Get the Postgres EXPLAIN execution plan for a query to debug performance issues. Works on any query including rpc() and writes.

### Method
GET

### Endpoint
/characters

### Parameters
#### Query Parameters
- **analyze** (boolean) - Optional - If true, execute the query and return actual run time
- **verbose** (boolean) - Optional - If true, return query identifier and output columns
- **settings** (boolean) - Optional - If true, include configuration parameters affecting query planning
- **buffers** (boolean) - Optional - If true, include buffer usage information
- **wal** (boolean) - Optional - If true, include WAL record generation information
- **format** (string) - Optional - Output format: "text" (default) or "json"

### Request Example
```kotlin
val result = supabase.from("characters").select {
    explain()
}
````

### Response

#### Success Response (200)

- **plan** (string/object) - The EXPLAIN execution plan in specified format

### Notes

Explain is not enabled by default as it can reveal sensitive database information. Enable only in testing environments or protect production with pre-request functions. Refer to the Performance Debugging Guide for enabling.

````

--------------------------------

### Version 2.0 Migration Guide

Source: https://supabase.com/docs/reference/dart/select

Complete guide for upgrading from supabase_flutter v1 to v2. Covers package updates, configuration changes, authentication updates, and session management modifications.

```APIDOC
## Upgrade Guide: supabase_flutter v1 to v2

### Description
Comprehensive migration guide for upgrading to supabase_flutter v2. The public API remains mostly the same with minor exceptions and significant behind-the-scenes improvements for Flutter and Dart developers.

### Package Version Update
#### Update pubspec.yaml
```yaml
supabase_flutter: ^2.0.0
````

### Configuration Changes

#### Before (v1)

```dart
await Supabase.initialize(
  url: supabaseUrl,
  anonKey: supabaseKey,
  authFlowType: AuthFlowType.pkce,
  storageRetryAttempts: 10,
  realtimeClientOptions: const RealtimeClientOptions(
    logLevel: RealtimeLogLevel.info,
  ),
);
```

#### After (v2)

Custom configuration is now organized into separate option objects (authOptions, postgrestOptions, realtimeClientOptions, storageOptions).

### Key Breaking Changes

#### 1. Provider Renamed to OAuthProvider

- **Reason**: Eliminates naming conflicts with the provider package
- **Before**: `await supabase.auth.signInWithOAuth(Provider.google);`
- **After**: `await supabase.auth.signInWithOAuth(OAuthProvider.google);`
- **Benefit**: Use Supabase and Provider package simultaneously without import prefixes

#### 2. Sign In with Apple Removed

- **Change**: sign_in_with_apple dependency removed from core library
- **Migration**: Import sign_in_with_apple separately if needed
- **New Method**: Use `auth.generateRawNonce()` to create secure nonces for OAuth flows
- **Before**: `await supabase.auth.signInWithApple();`
- **After**: Implement using separate sign_in_with_apple package with `generateRawNonce()`

#### 3. Initialization Does Not Await Session Refresh

- **Change**: `Supabase.initialize()` returns immediately after obtaining session from local storage
- **Benefit**: Faster app launch time, especially in poor network conditions
- **Impact**: No guarantee that session is valid at app startup
- **Before**: `// Session is valid, no check required`
- **After**: Must explicitly check session validity

### Session Validation in v2

```dart
final session = supabase.auth.currentSession;

// Check if session is expired
if (session?.isExpired ?? true) {
  // Session is invalid, wait for refresh
}

// Listen for session refresh
supabase.auth.onAuthStateChange.listen((data) {
  if (data.event == AuthChangeEvent.tokenRefreshed) {
    // Session has been refreshed
  }
});
```

````

--------------------------------

### Start the Rails development server

Source: https://supabase.com/docs/guides/getting-started/quickstarts/ruby-on-rails

This command launches the Rails development server, making the application accessible via a web browser, typically at http://127.0.0.1:3000.

```shell
bin/rails server
````

---

### POST /storage/buckets - Create a bucket

Source: https://supabase.com/docs/reference/csharp/auth-signinwithotp

Creates a new Storage bucket with the specified name. Requires `buckets` insert permissions. Returns the newly created bucket object.

````APIDOC
## POST /storage/buckets

### Description
Creates a new Storage bucket.

### Method
POST

### Endpoint
`/storage/buckets`

### Request Body
- **name** (string) - Required - Name of the new bucket
- **public** (boolean) - Optional - Whether the bucket should be public

### Policy Permissions Required
- `buckets` permissions: `insert`
- `objects` permissions: none

### Response
#### Success Response (201)
- **id** (string) - Bucket identifier
- **name** (string) - Bucket name
- **owner** (string) - Owner of the bucket
- **public** (boolean) - Whether bucket is public
- **created_at** (string) - Creation timestamp
- **updated_at** (string) - Last update timestamp

### Code Example
```csharp
var bucket = await supabase.Storage.CreateBucket("avatars");
````

````

--------------------------------

### POST /auth/signup

Source: https://supabase.com/docs/reference/dart/delete

Creates a new user account with email or phone and password. By default, users must verify their email before logging in unless email confirmation is disabled. Returns user and session objects based on confirmation settings.

```APIDOC
## POST /auth/signup

### Description
Creates a new user account with email or phone authentication. Email verification may be required depending on project settings.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **email** (string) - Optional - User's email address for email authentication
- **phone** (string) - Optional - User's phone number for phone authentication
- **password** (string) - Required - Password for authentication
- **emailRedirectTo** (string) - Optional - URL to redirect user after email confirmation
- **data** (Map<String, dynamic>) - Optional - User metadata to store in user object
- **captchaToken** (string) - Optional - Captcha token for verification
- **channel** (OtpChannel) - Optional - Messaging channel (e.g., whatsapp or sms). Defaults to sms

### Request Example
````

final AuthResponse res = await supabase.auth.signUp(
email: 'example@email.com',
password: 'example-password',
);

```

### Response
#### Success Response (200)
- **session** (Session|null) - User session (null if email confirmation enabled)
- **user** (User) - Created user object

#### Response Example
```

final Session? session = res.session;
final User? user = res.user;

```

### Notes
- If Confirm email is enabled, user is returned but session is null
- If Confirm email is disabled, both user and session are returned
- For existing confirmed users with Confirm email/phone enabled, an obfuscated user object is returned
- For existing confirmed users with either setting disabled, 'User already registered' error is returned
```

---

### System Message Protocol 2.0.0 Example - Supabase Realtime

Source: https://supabase.com/docs/guides/realtime/protocol

Example of a system message in Supabase Realtime protocol version 2.0.0 format, showing PostgreSQL subscription confirmation. Demonstrates array-based message structure with reference ID, channel path, message type, and status payload.

```json
[
  "13",
  null,
  "realtime:chat-room",
  "system",
  {
    "message": "Subscribed to PostgreSQL",
    "status": "ok",
    "extension": "postgres_changes",
    "channel": "main"
  }
]
```

---

### POST /v1/projects/{project_ref}/read-replicas/setup

Source: https://supabase.com/docs/guides/platform/read-replicas

Create a new read-only database replica for a Supabase project in a specified region.

````APIDOC
## POST /v1/projects/{project_ref}/read-replicas/setup

### Description
This endpoint allows you to provision a new read-only database replica for your Supabase project. The replica will be deployed in the specified AWS region to improve latency and distribute database load.

### Method
POST

### Endpoint
/v1/projects/{project_ref}/read-replicas/setup

### Parameters
#### Path Parameters
- **project_ref** (string) - Required - The unique identifier of your Supabase project.

#### Query Parameters
None

#### Request Body
- **region** (string) - Required - The AWS region where the Read Replica should be deployed (e.g., "us-east-1").

### Request Example
```json
{
  "region": "us-east-1"
}
````

### Response

#### Success Response (200 OK)

A successful response indicates that the Read Replica setup process has begun. The response may include details about the newly initiated replica.

- **status** (string) - Indicates the status of the operation (e.g., "success", "pending").
- **replica_id** (string) - The identifier for the newly created read replica.

#### Response Example

```json
{
  "status": "success",
  "message": "Read Replica setup initiated successfully.",
  "replica_id": "rpl_abcdef123456"
}
```

````

--------------------------------

### supabase db reset

Source: https://supabase.com/docs/reference/cli/supabase-branches-create

Resets the local database to a clean state by recreating the Postgres container and reapplying all local migrations. Requires local development stack to be started with supabase start. Optionally seeds test data and can reset remote databases.

```APIDOC
## supabase db reset

### Description
Resets the local database to a clean state. Recreates local Postgres container and applies all migrations from `supabase/migrations`. Applies seed data from `supabase/seed.sql` if defined. Can also reset remote databases when used with --linked or --db-url flags.

### Command
````

supabase db reset [flags]

```

### Flags
- **--db-url** (string) - Optional - Resets database specified by connection string (must be percent-encoded)
- **--last** (uint) - Optional - Reset up to the last n migration versions
- **--linked** - Optional - Resets the linked project with local migrations
- **--local** - Optional - Resets the local database with local migrations
- **--no-seed** - Optional - Skip running the seed script after reset
- **--version** (string) - Optional - Reset up to the specified version

### Usage Example
```

supabase db reset

```

### Response Example
```

Resetting database...
Initializing schema...
Applying migration 20220810154537_create_employees_table.sql...
Seeding data supabase/seed.sql...
Finished supabase db reset on branch main.

```

```

---

### GET /api/sources

Source: https://supabase.com/docs/reference/self-hosting-analytics/introduction

Retrieves a list of all available logging sources. Returns source configurations and metadata.

````APIDOC
## GET /api/sources

### Description
Retrieve a list of all available logging sources and their configurations.

### Method
GET

### Endpoint
`/api/sources`

### Response
#### Success Response (200)
Returns an array of source objects with their configurations.

#### Response Example
```json
[]
````

````

--------------------------------

### POST /auth/signup - Create New User

Source: https://supabase.com/docs/reference/kotlin/auth-getsession

Creates a new user account with email or phone authentication. Handles user registration with optional email/phone verification and supports custom metadata. Email confirmation may be required based on project settings.

```APIDOC
## POST /auth/signup

### Description
Create a new user account with email or phone authentication.

### Method
POST

### Endpoint
/auth/signup

### Parameters
#### Request Body
- **provider** (string) - Required - Authentication provider: "Email" or "Phone"
- **email** (string) - Required (for Email provider) - User's email address
- **password** (string) - Required (for Email provider) - User's password
- **phone** (string) - Required (for Phone provider) - User's phone number
- **redirectUrl** (string) - Optional - URL to redirect after email confirmation
- **metadata** (object) - Optional - Additional user metadata

### Request Example
```kotlin
val user = supabase.auth.signUpWith(Email) {
    email = "example@email.com"
    password = "example-password"
}
````

### Response

#### Success Response (200)

- **user** (object) - Created user object
- **id** (string) - Unique user identifier
- **email** (string) - User email address
- **user_metadata** (object) - Custom user metadata
- **created_at** (string) - User creation timestamp

#### Response Example

```json
{
  "user": {
    "id": "user-uuid-123",
    "email": "example@email.com",
    "user_metadata": {},
    "created_at": "2024-01-01T12:00:00Z"
  }
}
```

### Notes

- If Confirm email is enabled, user must verify email before logging in
- If Confirm email is disabled, user is automatically logged in
- User receives confirmation email/SMS with redirect to SITE_URL by default
- For existing confirmed users: returns obfuscated user object or error depending on confirmation settings

````

--------------------------------

### GET /objects/{bucket}/{key}

Source: https://supabase.com/docs/guides/storage/s3/compatibility

Retrieves an object from a bucket. You must have read access to the object to retrieve it.

```APIDOC
## GET /objects/{bucket}/{key}

### Description
Retrieves an object from a bucket. You must have read access to the object to retrieve it.

### Method
GET

### Endpoint
/objects/{bucket}/{key}

### Parameters
#### Path Parameters
- **bucket** (string) - Required - The name of the bucket containing the object to retrieve.
- **key** (string) - Required - The key of the object to retrieve.

#### Request Headers
- **If-Match** (string) - Optional - Returns the object only if its entity tag (ETag) matches the specified tag.
- **If-Modified-Since** (string) - Optional - Returns the object only if it has been modified since the specified time.
- **If-None-Match** (string) - Optional - Returns the object only if its entity tag (ETag) does not match the specified tag.
- **If-Unmodified-Since** (string) - Optional - Returns the object only if it has not been modified since the specified time.
- **Range** (string) - Optional - Downloads the specified range of bytes of an object.
- **PartNumber** (integer) - Optional - Downloads a specific part of a multipart uploaded object.

### Request Example
(No request body for GET operation)

### Response
#### Success Response (200)
- **Object Content** (binary) - The content of the requested object.

#### Response Example
(The raw content of the object, e.g., an image, text file, etc.)
```text
This is the content of the object.
````

````

--------------------------------

### GET /mfa/authenticatorAssuranceLevel - Get Authenticator Assurance Level

Source: https://supabase.com/docs/reference/kotlin/getchannels

Retrieves the current and next Authenticator Assurance Level (AAL) for the authenticated user. AAL1 represents single-factor authentication while AAL2 represents multi-factor authentication.

```APIDOC
## GET /mfa/authenticatorAssuranceLevel

### Description
Gets the Authenticator Assurance Level (AAL) details of the current session. AAL is the measure of the strength of an authentication mechanism. AAL1 refers to the 1st factor of authentication (email/password or OAuth), while AAL2 refers to the 2nd factor of authentication (TOTP).

### Method
GET

### Endpoint
/mfa/authenticatorAssuranceLevel

### Request Example
```kotlin
val (current, next) = supabase.auth.mfa.getAuthenticatorAssuranceLevel()
````

### Response

#### Success Response (200)

- **current** (AuthenticatorAssuranceLevel) - The current AAL of the session
- **next** (AuthenticatorAssuranceLevel) - The next possible AAL if a verified factor exists, otherwise returns AAL1

````

--------------------------------

### POST /auth/initialize - Create Auth Client

Source: https://supabase.com/docs/reference/kotlin/auth-exchangecodeforsession

Initializes the Supabase Auth client with project credentials. This must be done before any authentication operations can be performed on the client.

```APIDOC
## POST /auth/initialize

### Description
Initializes the Supabase Auth client with your project URL and API key credentials for authentication operations.

### Method
POST

### Endpoint
/auth/initialize

### Parameters
#### Request Body
- **supabaseUrl** (string) - Required - Your Supabase project URL (e.g., "https://xyzcompany.supabase.co")
- **supabaseKey** (string) - Required - Your publishable or anonymous API key

### Request Example
```kotlin
val supabase = createSupabaseClient(
    supabaseUrl = "https://xyzcompany.supabase.co",
    supabaseKey = "publishable-or-anon-key"
) { }
val auth = supabase.auth
````

### Response

#### Success Response (200)

- **auth** (object) - Initialized auth client instance ready for authentication operations

### Notes

- Both supabaseUrl and supabaseKey are required
- supabaseKey should be your publishable or anonymous key
- Store credentials securely; do not hardcode in production

````

--------------------------------

### GET /auth/mfa/aal - Get Authenticator Assurance Level

Source: https://supabase.com/docs/reference/kotlin/auth-linkidentity

Retrieves the current and next Authenticator Assurance Level (AAL) for the user. AAL1 represents first-factor authentication while AAL2 represents second-factor authentication.

```APIDOC
## GET /auth/mfa/aal

### Description
Retrieves the Authenticator Assurance Level (AAL) for the current session. AAL is a measure of the strength of an authentication mechanism. AAL1 refers to first-factor authentication (email/password or OAuth), while AAL2 refers to second-factor authentication (TOTP). Returns both the current AAL and the next possible AAL level.

### Method
GET

### Endpoint
/auth/mfa/aal

### Parameters
None

### Request Example
```kotlin
val (current, next) = supabase.auth.mfa.getAuthenticatorAssuranceLevel()
````

### Response

#### Success Response (200)

- **current** (AuthenticatorAssuranceLevel) - The current AAL level (AAL1 or AAL2)
- **next** (AuthenticatorAssuranceLevel) - The next possible AAL level

#### Response Example

```json
{
  "current": "aal1",
  "next": "aal2"
}
```

````

--------------------------------

### Auth Admin Setup

Source: https://supabase.com/docs/reference/javascript/auth-exchangecodeforsession

Initialize the Supabase client with service_role key to access admin authentication methods. This should only be done on a trusted server environment.

```APIDOC
## Auth Admin Initialization

### Description
Create a server-side authentication client with admin privileges using the service_role key.

### Requirements
- Service role key (never expose in browser)
- Supabase URL
- Server-side environment only

### Setup Example
```javascript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(supabase_url, service_role_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Access auth admin api
const adminAuthClient = supabase.auth.admin
````

### Security Note

Any method under the `supabase.auth.admin` namespace requires a `service_role` key. These methods are considered admin methods and should only be called on a trusted server. Never expose your `service_role` key in the browser.

```

```
