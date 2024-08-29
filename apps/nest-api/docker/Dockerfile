FROM node:20-alpine AS builder

ARG APP_NAME

RUN apk update
RUN apk add --no-cache libc6-compat
RUN npm i -g turbo@2.1.x

WORKDIR /app

COPY package*.json ./
COPY turbo.json ./

COPY apps/ ./apps
COPY libs/ ./libs
COPY packages/ ./packages

RUN turbo prune "@apps/$APP_NAME" --docker

FROM node:20-alpine AS installer

ARG APP_NAME

RUN apk update
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./package-lock.json
# COPY tsconfig.json ./

RUN npm ci --ignore-scripts

COPY --from=builder /app/out/full/ .

RUN npm run build --filter="@apps/$APP_NAME"...

FROM node:20-alpine AS runner

ARG APP_NAME
ENV DIR_NAME=$APP_NAME

RUN apk update && apk upgrade
WORKDIR /app

COPY package*.json ./

COPY --from=installer /app/apps/${DIR_NAME}/dist ./apps/${DIR_NAME}/dist
COPY --from=installer /app/apps/${DIR_NAME}/package.json ./apps/${DIR_NAME}/package.json

COPY --from=installer /app/packages/ ./packages/.temp
RUN for folder in /app/packages/.temp/*; do \
  package_name=$(basename $folder); \
  mkdir -p /app/packages/$package_name; \
  cp -r $folder/dist /app/packages/$package_name/dist; \
  cp $folder/package.json /app/packages/$package_name/package.json; \
  done
RUN rm -rf ./packages/.temp

COPY --from=installer /app/libs/ ./libs/.temp
RUN for folder in /app/libs/.temp/*; do \
  package_name=$(basename $folder); \
  mkdir -p /app/libs/$package_name; \
  cp -r $folder/dist /app/libs/$package_name/dist; \
  cp $folder/package.json /app/libs/$package_name/package.json; \
  done
RUN rm -rf ./libs/.temp

RUN NODE_ENV=production npm ci --ignore-scripts

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs
USER nestjs

ENTRYPOINT ["node", "apps/nest-api/dist/main.js"]
