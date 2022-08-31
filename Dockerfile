# FROM scottyhardy/docker-wine:latest
FROM stefanscherer/node-windows
COPY . .
RUN npm install 
CMD npm start 
