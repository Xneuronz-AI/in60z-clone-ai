# 1. Use a more stable and full-featured Node.js image
FROM node:18

# 2. Set the working directory
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# 4. Copy the rest of the application code
COPY . .

# 5. Build the application
RUN npm run build

# 6. Expose the port Cloud Run will use
EXPOSE 8080

# 7. Define the command to start the server
CMD ["npm", "start"]