#!/usr/bin/env bash

# Add as a safe git directory
git config --global --add safe.directory "/workspaces/smr_frontend"

# Install watchman
sudo apt-get update && sudo apt-get install -y watchman

# Install packages
bun install
