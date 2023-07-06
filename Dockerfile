FROM node:18-alpine as build

ARG NODE_ENV_ARG=production

RUN npm i -g pnpm

WORKDIR /app

COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml

RUN pnpm install --ignore-scripts

COPY . .

RUN NODE_ENV=$NODE_ENV_ARG set -o allexport; set -ex; source .env.$NODE_ENV_ARG; set +o allexport && pnpm run prepare && pnpm run graphql-codegen && pnpm run translations && pnpm run build:$NODE_ENV_ARG


FROM ghcr.io/vilsol/yeet:v0.5.3 as yeet

FROM node:18-alpine

COPY --from=yeet /yeet /yeet

RUN npm i -g pnpm

RUN apk add --no-cache bash

WORKDIR /app

COPY --from=build /app/build /app/build
COPY --from=build /app/package.json /app/package.json
COPY pnpm-lock.yaml pnpm-lock.yaml

RUN pnpm install -P --ignore-scripts

COPY docker/entrypoint.sh /entrypoint.sh

EXPOSE 80

ENTRYPOINT ["bash", "/entrypoint.sh"]
