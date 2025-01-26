FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install dependencies using npm ci for faster and more reliable builds
RUN npm install --timeout=600000 --registry=https://registry.npmjs.org/

# Copy the rest of the application code into the container
COPY . .

# Set the NODE_OPTIONS environment variable to use legacy OpenSSL providers
ENV NODE_OPTIONS=--openssl-legacy-provider

# Build the application for production
RUN npm run build

# Install serve to serve the build directory
RUN npm install -g serve

# Clean up unnecessary files to reduce image size
RUN npm prune --production && \
    npm cache clean --force && \
    rm -rf /tmp/* /var/tmp/* /usr/share/man /usr/share/doc /usr/share/doc-base

# Set the default command to serve the application
CMD ["serve", "-s", "build"]