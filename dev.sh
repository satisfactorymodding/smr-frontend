#!/bin/bash

# Local development script to

export NODE_ENV=development
set -o allexport
source .env.development
set +o allexport
pnpm dev
