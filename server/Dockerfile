FROM node:20-alpine

# Install necessary dependencies including OpenSSL, libc6-compat, and bash
RUN apk add --no-cache \
  openssl \
  libc6-compat \
  bash

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY prisma/schema.prisma ./prisma/
RUN npx prisma generate


COPY . .
RUN pnpm build


EXPOSE 3010
CMD ["pnpm", "start:docker"]