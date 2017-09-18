FROM node:8-alpine

COPY . /cottoncandy
WORKDIR /cottoncandy

RUN rm -Rf node_modules

RUN yarn install

VOLUME /cottoncandy/src

EXPOSE 9009

CMD yarn storybook
