FROM scottyhardy/docker-wine:latest
COPY . .
RUN npm install 
CMD npm start 
