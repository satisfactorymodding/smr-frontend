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
