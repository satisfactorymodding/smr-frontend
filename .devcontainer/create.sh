#!/usr/bin/env bash

# Install packages
bun install

# Source those environment variables for translation script
source .devcontainer/env.sh staging

# Download translations
bun run translations
