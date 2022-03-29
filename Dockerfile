# Build Layer
FROM node:14-slim as build

ENV TZ=Asia/Ho_Chi_Minh


WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

#==================================================
# Package install Layer
FROM node:14-slim as node_modules

ENV TZ=Asia/Ho_Chi_Minh


WORKDIR /app

COPY package*.json yarn.lock ./
COPY .env ./
RUN yarn install --non-interactive --frozen-lockfile --prod

#==================================================
# Run Layer
FROM node:14-slim
ENV TZ=Asia/Ho_Chi_Minh

RUN apt-get update \
    && apt-get upgrade -y build-essential \
                          tzdata \
                          pkg-config \
                          libgoogle-perftools-dev \
                          libpcap-dev libpq-dev libevent-dev \
                          supervisor

# Set timezone
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN dpkg-reconfigure -f noninteractive tzdata
WORKDIR /app

ENV NODE_ENV=development
COPY . .
COPY --from=build /app/dist /app/dist
COPY --from=node_modules /app/node_modules /app/node_modules
EXPOSE 5002
CMD ["node", "dist/main"]
