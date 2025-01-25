FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Clean the npm cache and install dependencies
RUN npm cache clean --force && npm install --timeout=600000 --registry=https://registry.npmjs.org/

# Install the latest versions of React, ReactDOM, and React Router DOM
RUN npm install react@latest react-dom@latest react-router-dom@latest

# Install type declarations for React, ReactDOM, and React Router DOM
RUN npm install --save-dev @types/react @types/react-dom @types/react-router-dom@^5.1.8

# Copy the rest of the application code into the container
COPY . .

# Set the NODE_OPTIONS environment variable to use legacy OpenSSL providers
ENV NODE_OPTIONS=--openssl-legacy-provider

# Build the application for production
RUN npm run build

# Install serve to serve the build directory
RUN npm install -g serve

# Set the default command to serve the application
CMD ["serve", "-s", "build"]