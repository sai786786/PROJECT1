FROM node:8
RUN mkdir /sample
WORKDIR /sample
COPY ./hello.js /sample/hello.js
EXPOSE 3000
RUN node hello.js
