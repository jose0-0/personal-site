# Use the official Nginx image from the Docker Hub
FROM nginx:latest

# Copy your custom Nginx configuration file into the container
COPY nginx.conf /etc/nginx/nginx.conf

# Install Certbot and the Certbot Nginx plugin
RUN apt-get update && \
    apt-get install -y certbot python3-certbot-nginx && \
    rm -rf /var/lib/apt/lists/*

# Expose port 80 and 443
EXPOSE 80
EXPOSE 443

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]