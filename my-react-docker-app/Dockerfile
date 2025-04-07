FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

CMD ["yarn", "preview", "--host"]
