FROM node:latest

COPY . /home/league-manager-webapp/

WORKDIR /home/league-manager-webapp

CMD npm install && npm start