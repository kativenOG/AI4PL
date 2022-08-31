# FROM scottyhardy/docker-wine:latest
FROM stefanscherer/node-windows:latest
COPY . .
RUN npm install 
CMD npm start 
