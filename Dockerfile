# Use lightweight base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy app source
COPY . .

# Expose port
EXPOSE 3000

# Run app
CMD ["node", "app.js"]
