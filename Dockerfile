FROM node:latest

WORKDIR /app
COPY . /app 
RUN cd src && ls -a && npm install
EXPOSE 3333

CMD ["npm", "run", "dev"]