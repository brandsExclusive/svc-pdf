FROM node:8.10-alpine

WORKDIR /usr/src/app

COPY package.json ./

# Git required for npm / yarn
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

# Yarn
RUN apk add --no-cache --virtual .build-deps-yarn curl \
    && curl -fSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz" \
    && tar -xzf yarn-v$YARN_VERSION.tar.gz -C /opt/ \
    && ln -snf /opt/yarn-v$YARN_VERSION/bin/yarn /usr/local/bin/yarn \
    && ln -snf /opt/yarn-v$YARN_VERSION/bin/yarnpkg /usr/local/bin/yarnpkg \
    && rm yarn-v$YARN_VERSION.tar.gz \
    && apk del .build-deps-yarn

COPY .env.example .env
RUN yarn install

COPY . .

RUN yarn docker:build

EXPOSE 8080

USER node
CMD ["node", "dist/start.js"]
