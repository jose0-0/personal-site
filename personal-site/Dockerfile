FROM node:20-alpine as stage1

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm ci

COPY --chown=node:node . .

RUN npm run build

# ------------------------------------------------------------

FROM node:20-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json ./

COPY prod.env ./.env

COPY --from=stage1 /home/node/app/.next /home/node/app/.next 

COPY --from=stage1 /home/node/app/dist /home/node/app/dist 

COPY --from=stage1 /home/node/app/node_modules /home/node/app/node_modules

COPY --from=stage1 /home/node/app/public /home/node/app/public

USER node

EXPOSE 3000

CMD [ "npm", "run", "start" ]