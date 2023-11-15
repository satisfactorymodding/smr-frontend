# SMR Frontend

## Overview

Hello there! In order to simplify the process of contributing, we've put this document together.
This repo serves as the build point for the [ficsit.app](https://ficsit.app) application.
To extend or enhance the main site, you'll need to fork and open a PR targeting the `staging` branch.

## Requirements

At the highest level you must at least have:

* [Bun](https://bun.sh/)
* terminal (Bash is suggested but not required.)

### bun installation

This project uses `bun`. To install `bun` run:

```sh
curl -fsSL https://bun.sh/install | bash
```

## Local Setup

### Package Installation

Every time you pull changes or switch branches, make sure you have the correct packages installed for that commit.
Run this command from a terminal window opened inside the **repository's root directory**:

```sh
$ bun i
...
> husky install

husky - Git hooks installed
```

### Decide Which Environment You Want To Run

This project has three main environments:

* `production`
  * Deployed on the ficsit.app site, you probably want to use this if you're running or previewing the main branch
* `staging`
  * Deployed on the ficsit.dev site, features get merged in here first before being sent to main.
* `development`
  * Used if you'd like to run the [backend](https://github.com/satisfactorymodding/smr-api) yourself (which most likely you don't)

If you do not specify which environment you want to use when running `bun` comands, `development` will be used by default.

### Loading Environment Variables

This project uses dotenv-flow to simplify the process of handling environment variables.
It will handle the loading of the contents of the `.env.something` files for you when running `bun` commands,
provided that you prefix the command with a specifier for which environment to use.

If you don't wish to run the backend (which most likely you don't),
you can point your local frontend to the staging or production APIs using environment variables:
(note this example env var syntax only works in bash)

```shell
NODE_ENV=staging YOUR_COMMAND_HERE
```

or

```shell
NODE_ENV=production YOUR_COMMAND_HERE
```

You can make your own `.env.something.local` files if you need to point to a different API
or have a different local configuration.

#### Troubleshooting

If for some reason dotenv-flow isn't working for you,
you can use the following bash script to load the environment variables.
Replace `staging` with the suffix of the env file you wish to use.

```sh
export NODE_ENV=staging; set -o allexport; source .env.staging; set +o allexport
```

After running this command, all commands you run in that bash session will have those environment variables loaded.

### Downloading Translations

This project uses Tolgee to manage translations.
The project will fail to build if you don't download the translation data files.

Download the latest strings via the `translations` script.

For example:

```shell
NODE_ENV=staging bun run translations
```

If it errors, try following the troubleshooting steps above to load environment variables manually.

### Starting the Local Server

After you've installed everything, start the project via the `dev` script.
It executes several smaller scripts for you:

* Development Server with hot reload (dev:serve)
* Svelte Checker with hot reload (check:dev)
* GraphQL Code Generator with hot reload (graphql-codegen:watch)
* ESLint with hot reload (lint:dev)

Run the dev script via `bun dev`.
For example:

```shell
NODE_ENV=staging bun dev
```

The expected output is:

```text
...
  VITE v4.4.9  ready in 747 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

Head to [localhost:3000](http://localhost:3000) to see it running.

If you see any GraphQL messages about network errors,
you probably need to change what environment variables you're using.

### Signing In

Getting signed in on your locally hosted copy requires copying a login token from the live `https://ficsit.dev` site.
It's not possible to use the Sign In button on your locally hosted copy
because the authentication service will reject the request
since it's coming from `localhost:3000` and not the live site.
Trying to use the button will direct you to the `https://ficsit.dev` site with an error message encoded in the URL.

In order to sign in:

1. Have a local copy of the frontend running already (ex. via `NODE_ENV=staging bun dev`)
2. Sign in as normal on `https://ficsit.dev`
3. Access your brower's stored cookie data
    * Chrome: dev tools -> Application -> Cookies
    * Firefox: dev tools -> Storage -> Cookies
4. Copy value of the `token` cookie. If it doesn't exist, make sure you're actually signed in.
5. Go back to your locally hosted copy (ex. `https://localhost:3000`)
6. Return to the browser's stored cookie data
7. If the `token` cookie exists, replace its value with the value you copied.
   If the cookie doesn't exist yet, create a new cookie, rename it to `token`, and set its value to the value you copied.
8. Force refresh the page, after which you should be logged in after it loads (might take a second or two)

To sign out, either use the Logout option on the site, or delete the cookie.

## Committing Changes

Our repo is designed to help you throughout your contribution to maintain our code and commits in a way that allows for automatic deployment. To that end we have a few steps that occur for each change you submit.

### On Your Local

When your changes are ready to be committed, we do a few things for you:

  1. we run `bun run lint` to validate your syntax
  1. we run `bun run check` to validate all of your svelte
  1. we validate your commit adheres to our `commitlint` conventions

#### What You Need To Do

Committing will be blocked if your changes does not pass the linters mentioned above.
Running `bun format` will attempt to auto-fix most style issues.

Note that Git may switch around file line endings on you, causing the linters to fail on files you never edited.
Running `bun format` will fix this.

### In The Remote

When you've opened up your Pull Request we do a few more things:

  1. we build via `bun run graphql-codegen:prod && bun run build`
  1. we lint the code again (you can sneak stuff in, husky is imperfect in enforcement!)
  1. if that all passes we deploy to our GitHub page!

## Wrap Up

If you follow these conventions, it will be much quicker for all parties involved to incorporate your changes!
