FROM node:8
RUN mkdir /sample
WORKDIR /sample
COPY ./app.js /sample/app.js
EXPOSE 3000
#RUN node hello.js
