FROM nginx:latest

# Remove default NGINX content
RUN rm -rf /usr/share/nginx/html/*

# Copy your website files into the NGINX root directory
COPY ./website/ /usr/share/nginx/html

# Set ownership to NGINX user
RUN chown -R nginx:nginx /usr/share/nginx/html

# Ensure proper permissions for NGINX to serve files
RUN chmod -R 755 /usr/share/nginx/html

