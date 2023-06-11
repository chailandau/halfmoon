FROM node:14

WORKDIR /app

RUN apt-get update && \
    apt-get install -y python3

COPY package.json yarn.lock ./

COPY next.config.js ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

CMD ["yarn", "start"]
