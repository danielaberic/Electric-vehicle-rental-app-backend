FROM node:16-slim

WORKDIR /

COPY . .
RUN npm install
ENV NODE_ENV production

EXPOSE 5391

CMD [ "npm", "run", "start" ]
