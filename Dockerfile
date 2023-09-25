FROM node:18.17.0
WORKDIR /app
COPY . /app
USER root
RUN npm install -g npm@10.1.0
RUN echo "console.log('A pitonisa mentalizou um número.')" > pitonisMsg.js

CMD node pitonisMsg.js