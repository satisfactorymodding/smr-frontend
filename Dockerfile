FROM node:16-alpine as build

ARG CODEGEN=graphql-codegen:prod
ARG BUILD=build

RUN npm i -g pnpm

WORKDIR /app

COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml

RUN pnpm install

COPY . .

RUN pnpm run prepare && pnpm run $CODEGEN && pnpm run $BUILD


FROM ghcr.io/vilsol/yeet:v0.5.2 as yeet

FROM node:16-alpine

COPY --from=yeet /yeet /yeet

RUN npm i -g pnpm

RUN apk add --no-cache bash

WORKDIR /app

COPY --from=build /app/build /app/build
COPY --from=build /app/package.json /app/package.json
COPY pnpm-lock.yaml pnpm-lock.yaml

RUN pnpm install -P

COPY docker/entrypoint.sh /entrypoint.sh

EXPOSE 80

ENTRYPOINT ["bash", "/entrypoint.sh"]
