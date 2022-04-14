FROM node:16


WORKDIR /usr/src/app

RUN npm install -g typescript

RUN npm install -g nodemon

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000


# Run node server
CMD npm run start
