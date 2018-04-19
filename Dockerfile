FROM node:8
RUN mkdir /sample
WORKDIR /sample
COPY ./app.js /sample/app.js
COPY ./config.js /sample/config.js
XPOSE 3000
#RUN node hello.js
