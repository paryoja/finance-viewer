FROM node:17.7.1-bullseye-slim

RUN npm install -g serve

WORKDIR /app

COPY ./public ./public
COPY ./src ./src
COPY package.json .
COPY tsconfig.json .
COPY tslint.json .

# RUN npm install

