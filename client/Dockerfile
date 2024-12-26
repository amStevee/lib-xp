# Start from the official Node.js LTS image
FROM node:20-alpine

#Install pnpm
RUN npm install -g pnpm

# As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, this make sure to install it separately.
RUN pnpm add jest-environment-jsdom


# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of your app's source code
COPY . .

# Build the Next.js app
RUN pnpm run build

EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]