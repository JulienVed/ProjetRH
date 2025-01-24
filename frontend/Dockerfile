# Use a specific Node.js version
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Clean the npm cache and install dependencies
RUN npm cache clean --force && npm install --timeout=600000 --registry=https://registry.npmjs.org/

# Copy the rest of the application code into the container
COPY . .

# Build the application for production
RUN npm run build

# Set the default command to run the application
CMD ["npm", "start"]