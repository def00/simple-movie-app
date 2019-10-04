FROM node:current-alpine

WORKDIR /usr/app

COPY package.json .
COPY package-lock.json .

RUN npm ci
RUN npm install -g @babel/node @babel/core @babel/cli npx mocha --quiet
COPY . .
