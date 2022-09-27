FROM node:16.16.0

COPY package.json /usr/src/app/package.json
COPY yarn.lock /usr/src/app/yarn.lock

WORKDIR /usr/src/app

RUN apt update && apt-get install -y libudev-dev && apt-get install libusb-1.0-0
RUN yarn --no-progress --non-interactive --frozen-lockfile

COPY . .

RUN yarn build

#CMD [ "npx", "next", "start"]
