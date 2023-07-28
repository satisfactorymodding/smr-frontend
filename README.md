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

Then fetch the translation data:

```shell
pnpm translations
```

### Running

The `dev` script executes several processes:

* Development Server
* Svelte Checker
* ESLint

```shell
export NODE_ENV=development
set -o allexport; source .env.$NODE_ENV; set +o allexport
pnpm dev
```

Executing this command in Bash will load all environment variables from the relevant .env file
and will start a development server on port 3000.

If you don't wish to run the backend locally (which most likely you don't),
you can point your local frontend to the staging or production APIs by specifying a different `NODE_ENV`,
such as `staging`.

### Login

Trying to log in on a locally hosted copy of the frontend will fail and redirect you to the live site
because of how the OAuth sign in process works.
To work around this, copy the `token` cookie produced by signing into the real site (`.ficsit.app`)
and add it to your cookies for `localhost`.
There is likely a cookie manager extension for your browser of choice that will make this easier.
