FROM node:23-slim

RUN apt update && \
    apt install -y curl && \
    npm install -g nodemon

USER node