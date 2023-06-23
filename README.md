# SMR Frontend

## Development

See [Contributing](CONTRIBUTING.md) for more information.

### Setup

This project uses [pnpm](https://pnpm.js.org/):

```shell
pnpm install
```

After switching branches you should regenerate the graphql files as the schema may have changed:

```shell
pnpm graphql-codegen
```

### Running

The `dev` script executes several processes:

* Development Server
* Svelte Checker
* GraphQL Code Generator
* ESLint

```shell
pnpm dev
```

If you don't wish to run the backend (which most likely you don't),
you can point your local frontend to the staging or production API's using environment variables:

```shell
NODE_ENV=staging pnpm dev
NODE_ENV=production pnpm dev
```

Note that this may cause the GraphQL code generator to point to the wrong schema,
in which case you can specify the schema path in a similar manner,
meaning you should run the following command instead:

```shell
SCHEMA_PATH=https://api.ficsit.dev/v2/query NODE_ENV=staging pnpm dev
```

If you're using Bash, you can run the dev script:

```shell
bash dev.sh
```

This script handles loading all environment variables from `.env.development` for you.
It can be easily modified it to load from a different environment file if needed.
