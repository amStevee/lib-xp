FROM node:20-alpine

# Setup environment variables
ARG DATABASE_URL
ARG SESSION_SECRET
ARG GOOGLE_CLIENT_ID
ARG GOOGLE_CLIENT_SECRET

ENV DATABASE_URL=$DATABASE_URL
ENV SESSION_SECRET=$SESSION_SECRET
ENV GOOGLE_CLIENT_ID=$GOOGLE_CLIENT_ID
ENV GOOGLE_CLIENT_SECRET=$GOOGLE_CLIENT_SECRET


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