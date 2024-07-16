# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Install a lightweight web server
RUN npm install -g serve

# Stage 2: Serve the application with a lightweight server
FROM node:18-alpine

# Copy the build output from the previous stage
COPY --from=build /app/build /app/build

# Install 'serve' globally
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3001

# Serve the application
CMD ["serve", "-s", "/app/build", "-l", "3002"]
