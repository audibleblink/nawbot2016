FROM node:5.3.0-wheezy
MAINTAINER Alex Flores <me@alexflor.es>

ADD . /app
WORKDIR /app

RUN DEBIAN_FRONTEND=noninteractive \
  apt-get -q2 -y update && \
  apt-get -y upgrade

RUN npm install

# Ensure you have a `.env` in the app root with the
# necessary variables mentioned in the README
# RUN source .env

EXPOSE 5000
CMD ["npm", "start"]
