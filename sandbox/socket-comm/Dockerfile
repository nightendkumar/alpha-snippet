FROM node:12.16.2

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# If you are building your code for production
RUN npm run build

EXPOSE 8081
CMD [ "node", "dist/" ]