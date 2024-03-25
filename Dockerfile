FROM node:21-alpine
LABEL org.opencontainers.image.source https://github.com/hermanvand/website-beingayogi

# DEV image
WORKDIR /app
COPY package*.json ./

ENV NODE_ENV=development
RUN npm install

COPY . ./

EXPOSE 3000
CMD npm run dev