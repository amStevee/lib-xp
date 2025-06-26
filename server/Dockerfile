FROM node:20-alpine@sha256:1e5e6e2e1e2d3e7e6b7e8e9e0e1e2e3e4e5e6e7e8e9e0e1e2e3e4e5e6e7e8e9e0


# Install necessary dependencies including OpenSSL, libc6-compat, and bash
RUN apk add --no-cache \
  openssl \
  libc6-compat \
  bash

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY prisma/schema.prisma ./prisma/
RUN npx prisma generate


COPY . .
RUN pnpm build


EXPOSE 3010
CMD ["pnpm", "start:docker"]