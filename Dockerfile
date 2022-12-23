FROM node:16.17.1

WORKDIR /2022-autumn-g.danilov

COPY package.json .
COPY package-lock.json .
RUN npm ci
# для сохранения зависимостей

COPY server.js .
COPY database/database.js .
COPY database/migrations .

COPY . .