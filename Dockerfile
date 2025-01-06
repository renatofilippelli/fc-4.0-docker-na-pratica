FROM node:23-slim

RUN apt update && \
    apt install -y curl && \
    npm install -g ts-node typescript

COPY start.sh /
RUN chmod +x /start.sh

USER node

WORKDIR /home/node/app

#COPY package.json ./
#RUN npm install

EXPOSE 3000

# CMD ["sh", "-c", "npm install && tail -f /dev/null"]

CMD ["/start.sh"]
