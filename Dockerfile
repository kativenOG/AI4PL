# FROM scottyhardy/docker-wine:latest
FROM node:18-bullseye
COPY . .
# RUN apt-get update \
#   && apt-get install -y --no-install-recommends apt-transport-https
# RUN dpkg --add-architecture i386 \
#   && wget -nc https://dl.winehq.org/wine-builds/winehq.key \
#   && apt-key add winehq.key \
#   && echo "deb https://download.opensuse.org/repositories/Emulators:/Wine:/Debian/Debian_10 ./" >> /etc/apt/sources.list
# RUN apt-get update \
#   && apt-get install -y winehq-stable
# Wine stuff 
RUN dpkg --add-architecture i386 && apt-get update && wget -qO- https://dl.winehq.org/wine-builds/winehq.key | apt-key add -
RUN apt-get -y --no-install-recommends install software-properties-common &&  apt-add-repository "deb https://dl.winehq.org/wine-builds/debian/ $(lsb_release -cs) main"
RUN apt update && apt install --install-recommends winehq-stable
RUN wine --version
# Install modules and start the server 

RUN npm install 
CMD npm start 
