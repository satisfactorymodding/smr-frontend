#!/usr/bin/env bash

export NODE_ENV=$1

set -o allexport; source .env.$NODE_ENV; set +o allexport
