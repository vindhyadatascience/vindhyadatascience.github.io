## use node.js base image
# FROM node:latest
FROM node:20.8.1

## Move conect to app folder
WORKDIR /app
COPY package.json ./
#COPY package-lock.json ./

## Install node project
RUN npm install

## Add app
COPY . ./

## Run development container
# ENTRYPOINT [ "/bin/bash"]
ENTRYPOINT [ "npm", "run", "dev" ]