FROM oven/bun:1.3.1 AS build

ARG NODE_ENV_ARG=production

RUN apt update && apt install -y curl unzip git bash

SHELL ["/bin/bash", "-c"]

WORKDIR /app

COPY package.json package.json
COPY bun.lockb bun.lockb

RUN bun install --ignore-scripts

COPY . .

RUN NODE_ENV=$NODE_ENV_ARG set -o allexport; set -ex; source .env.$NODE_ENV_ARG; set +o allexport && bun run prepare && bun run graphql-codegen && bun run translations && bun run build:$NODE_ENV_ARG


FROM ghcr.io/vilsol/yeet:v0.6.4 AS yeet

FROM oven/bun:1.3.1 AS final

COPY --from=yeet /yeet /yeet

RUN apt update && apt install -y bash

WORKDIR /app

COPY package.json bun.lockb /app/
RUN bun install --no-save

COPY docker/entrypoint.sh /entrypoint.sh
ENV HOST_HEADER=host
EXPOSE 80

COPY --from=build /app/build /app/build

ENTRYPOINT ["bash", "/entrypoint.sh"]
