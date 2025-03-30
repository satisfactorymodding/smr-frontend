# SMR Frontend

## Overview

Hello there! In order to simplify the process of contributing, we've put this document together.
This repo serves as the build point for the [ficsit.app](https://ficsit.app) application.
To extend or enhance the main site, you'll need to fork and open a PR targeting the `staging` branch.

## Requirements

### Note: Dev Container

This project uses [Bun](https://bun.sh/) which is not fully featured yet for Windows.
If you're developing from windows, we suggest you use the devcontainer included with the project instead.
Generic directions for setup can be found
[here](https://github.com/satisfactorymodding/Documentation/blob/master/README.md#devcontainer).

You should [operate the devcontainer out of an isolated Docker volume](https://code.visualstudio.com/docs/devcontainers/containers#_quick-start-open-a-git-repository-or-github-pr-in-an-isolated-container-volume)
to avoid the _significant_ slowdowns caused by working on the host file system.
You may need to [install additional software](https://code.visualstudio.com/remote/advancedcontainers/sharing-git-credentials)
to share your git credentials with the container.
Alternatively, try using GitHub Codespaces.

If you normally [gpg sign your commits](https://code.visualstudio.com/remote/advancedcontainers/sharing-git-credentials#_sharing-gpg-keys)
and the container is giving you trouble,
consider turning off signing inside the container by running
`git config --global commit.gpgsign false`
inside the container.

### Dependencies

At the highest level you must at least have:

* [Bun](https://bun.sh/)
* Bash terminal (others may fail to run some scripts)

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

If you do not specify which environment you want to use when running `bun` comands,
`development` will be used by default.
The process for specifying an environment is covered in the next section.

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

### Localization

If you'd like to help translate and localize SMM to different languages, join our [discord server](https://discord.ficsit.app/).

ficsit.app handles localization through the Tolgee Svelte integration.
This allows for [in-context translation](https://tolgee.io/js-sdk/) - simply alt-click on a translatable element to open the Tolgee interface.
If an element can't be alt-clicked it either doesn't support in-context translation or isn't translatable yet.
You can also edit translations from the [project's webpage](https://translate.ficsit.app/projects/2).

In order to edit translations in-context, you will need to provide a tolgee API key with edit permissions.
To do this:

1. Join the Discord and get added to the smr-frontend Tolgee project
2. Create a copy of the env file you wish to use (such as `.env.staging`) and name it `.env.personal` (so it is gitignored and does not upset dev:serve)
3. Visit [the project's integration page](https://translate.ficsit.app/projects/2/integrate) to generate an API key (the "weapon" you select does not matter)
4. Replace the `PUBLIC_TOLGEE_API_KEY` in your new env file with the API key you generated
5. Use your new env name when running commands.
   For example, run `fenv personal` to switch to it.

Using the in-context translation Screenshot feature also requires installing the _Tolgee Tools_ browser extension.

To define new translation keys yourself, contact us on the Discord about getting Edit Keys scope access to the project.

See these documentation pages about how to use Tolgee in code:

* [Using `$t()` and the `T` component](https://tolgee.io/js-sdk/integrations/svelte/translating)
* [Full spec for `$t()`](https://tolgee.io/js-sdk/api/core_package/tolgee#t)
* [ICU Message Format](https://tolgee.io/platform/translation_process/icu_message_format)

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
