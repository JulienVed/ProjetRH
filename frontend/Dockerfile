
# Use a base Node.js image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install the Node.js dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the application for production
RUN npm run build

# Set the default command to run the application
CMD ["npm", "start"]
