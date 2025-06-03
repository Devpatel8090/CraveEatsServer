FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . ./

FROM nginx
EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf