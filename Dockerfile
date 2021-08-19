FROM node:16-alpine as build

ARG CODEGEN=graphql-codegen:prod
ARG BUILD=build

RUN npm i -g pnpm

WORKDIR /app

COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml

RUN pnpm install

COPY . .

RUN yarn run $CODEGEN && yarn run $BUILD


FROM node:16-alpine

RUN apk add --no-cache nginx bash

WORKDIR /app

COPY --from=build /app/build /app/build
COPY --from=build /app/package.json /app/package.json

COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/entrypoint.sh /entrypoint.sh

EXPOSE 80

ENTRYPOINT ["bash", "/entrypoint.sh"]
