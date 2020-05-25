FROM node:12-alpine

COPY '/packages/client' './packages/client'
COPY '/packages/eslint-config' './packages/eslint-config'

COPY ["package.json", "lerna.json", "yarn.lock", "./"] 

WORKDIR '/packages/client'

RUN yarn install && yarn build

RUN yarn global add serve

ENTRYPOINT [ "serve", "-l", "3000", "-s", "build" ]
