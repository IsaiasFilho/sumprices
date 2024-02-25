FROM node:18.19.1-slim

WORKDIR /app

COPY . .

RUN apt update
RUN apt install vim -y
RUN apt install procps -y
RUN apt install curl -y
RUN npm install
RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start:dev"]
