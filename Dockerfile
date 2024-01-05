FROM node:18-alpine

WORKDIR /apps

COPY package.json /apps

RUN npm install

COPY . /apps

CMD node app

EXPOSE 80
