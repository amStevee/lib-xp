FROM node:20-alpine

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