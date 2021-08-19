#!/bin/bash

set -m

node /app/build/node/index.js &

nginx

fg %1
