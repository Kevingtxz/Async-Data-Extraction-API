FROM node:lts-alpine

WORKDIR . .

COPY package*.json ./

RUN npm install

ENV USER_GET_ALL_AND_UPDATE_KEY=GetAllUserAndUpdateJob
ENV USER_API=https://fakestoreapi.com/users
ENV USER_ATTEMPTS=3
ENV USER_HOURS_TO_REPEAT=12
ENV PRODUCT_GET_ALL_AND_UPDATE_KEY=GetAllProductAndUpdateJob
ENV PRODUCT_API=https://fakestoreapi.com/products
ENV PRODUCT_ATTEMPTS=3
ENV PRODUCT_HOURS_TO_REPEAT=12

COPY . . 