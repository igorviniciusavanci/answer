FROM node:12.16.3
COPY ./api/package.json /api/
WORKDIR /api
RUN yarn install

COPY ./api /api/
