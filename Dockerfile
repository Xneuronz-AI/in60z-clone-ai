# Stage 1: Build the application
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Create the small, final production image
FROM node:18-alpine AS runner
WORKDIR /app

# Copy only the necessary production dependencies
COPY package.json package-lock.json ./
RUN npm install --omit=dev

# Copy the built application from the builder stage
COPY --from=builder /app/dist ./dist

# Expose the port and define the command to start the server
EXPOSE 8080
CMD [ "npx", "serve", "-s", "dist", "-l", "tcp://0.0.0.0:8080" ]