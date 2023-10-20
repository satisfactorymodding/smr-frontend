# SMR Frontend

## Development

See [Contributing](CONTRIBUTING.md) for more information.

### Setup

This project uses [Bun](https://bun.sh/):

```shell
bun install
```

After switching branches you should regenerate the graphql files as the schema may have changed:

```shell
bun run graphql-codegen
```

### Running

The `dev` script executes several processes:

* Development Server
* GraphQL Generator
* Svelte Checker
* GraphQL Code Generator
* ESLint

```shell
bun run dev
```

If you don't wish to run the backend (which most likely you don't),
you can point your local frontend to the staging or production API's using environment variables:

```shell
NODE_ENV=staging bun run dev
NODE_ENV=production bun run dev
```
