ARG ALPINE_VERSION=3.18
FROM node:21-alpine${ALPINE_VERSION} AS builder

RUN apk --update add fontconfig
RUN mkdir -p /usr/share/fonts/nanumfont
RUN wget http://cdn.naver.com/naver/NanumFont/fontfiles/NanumFont_TTF_ALL.zip
RUN unzip NanumFont_TTF_ALL.zip -d /usr/share/fonts/nanumfont
RUN fc-cache -f && rm -rf /var/cache/*

RUN apk add bash

ENV LANG=ko_KR.UTF-8 \
    LANGUAGE=ko_KR.UTF-8

RUN apk --no-cache add tzdata && \
    cp /usr/share/zoneinfo/Asia/Seoul /etc/localtime && \
    echo "Asia/Seoul" > /etc/timezone

WORKDIR /app

COPY package.json /app
COPY . /app

RUN npm ci
CMD ["node", "src/index.js"]
