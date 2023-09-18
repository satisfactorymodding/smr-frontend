#!/usr/bin/env bash

# Add as a safe git directory
git config --global --add safe.directory "/workspaces/smr_frontend"

# Install packages
bun install

# Source those environment variables for translation script
source .devcontainer/env.sh staging

# Download translations
bun run translations
