# SMR Frontend

## Overview

Hello there! In order to simplify the process of contributing, we're putting this document together. This repo serves as the build point for the [ficsit.app](https://ficsit.app) application. To extend or enhance the main site, you'll need to fork and open a PR.

## Requirements

At the highest level you must at least have:

* [Bun](https://bun.sh/)
* terminal

### bun installation

This project uses `bun`. To install `bun` run:

```sh
curl -fsSL https://bun.sh/install | bash
```

After that run:

```sh
$ bun i
...
> husky install

husky - Git hooks installed
```

Now you're good to go!

## Local Development

After you've installed everything, start the project via:

```sh
$ bun run dev
...
  VITE v4.4.9  ready in 747 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

And head to [localhost:3000](http://localhost:3000) to see it running.

If you need to sign in, use the login button which will eventually redirect you to `ficsit.dev`. Then copy the `token` cookie over (like from Chrome dev tools -> Application -> Cookies) and insert it in your `localhost:3000` page (again using dev tools) and refresh.

## Committing Changes

Our repo is designed to help you throughout your contribution to maintain our code and commits in a way that allows for automatic deployment. To that end we have a few steps that occur for each change you submit.

### On Your Local

When your changes are ready to be committed, we do a few things:

  1. we run `bun run lint` to validate your syntax
  1. we run `bun run check` to validate all of your svelte
  1. we validate your commit adheres to our `commitlint` conventions

### In The Remote

When you've opened up your Pull Request we do a few more things:

  1. we build via `bun run graphql-codegen:prod && bun run build`
  1. we lint the code again (you can sneak stuff in, husky is imperfect in enforcement!)
  1. if that all passes we deploy to our GitHub page!

## Wrap Up

If you follow these conventions, it will be much quicker for all parties involved to incorporate your changes!
