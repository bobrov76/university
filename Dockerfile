FROM node:latest
WORKDIR /var/www/html
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production && mv node_modules ../
COPY . .
# EXPOSE 9008
CMD ["npm", "start"]