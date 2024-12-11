FROM oven/bun:canary

WORKDIR /app

COPY package.json .
COPY bun.lockb .

RUN bun install 

COPY src src
COPY tsconfig.json .
COPY drizzle.config.ts .

# ENV NODE_ENV production
CMD ["bun", "dev"]

EXPOSE 3001
