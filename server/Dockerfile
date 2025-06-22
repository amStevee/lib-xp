FROM node:20-alpine


# Install necessary dependencies including OpenSSL, libc6-compat, and bash
RUN apk add --no-cache \
  openssl \
  libc6-compat \
  bash python3 \
  make \
  g++

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

# Install dependencies and rebuild native modules
RUN pnpm install

RUN pnpm rebuild bcrypt

COPY prisma/schema.prisma ./prisma/
RUN npx prisma generate


COPY . .
RUN pnpm build


EXPOSE 3010
CMD ["pnpm", "start:docker"]