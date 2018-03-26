FROM node:latest

# Install Nginx
RUN apt-get update \
  && apt-get install -y nginx

COPY . /home/league-manager-webapp/

# Add Nginx configuration
COPY gateway.Nginx /etc/nginx/sites-available/default

WORKDIR /home/league-manager-webapp

CMD npm install \
	&& npm run build \
	&& service nginx start \
	&& tail -f /dev/null

