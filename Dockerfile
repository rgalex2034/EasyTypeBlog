FROM node:latest
EXPOSE 80
COPY ./ /app
WORKDIR /app
RUN npm install
RUN npm i @types/node
RUN npm build
CMD ["npm", "start"]
