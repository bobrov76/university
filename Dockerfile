FROM node:12.18-alpine
WORKDIR /var/www/html
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
# EXPOSE 9008
CMD ["npm", "start"]