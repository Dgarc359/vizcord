## build runner
FROM node:lts-alpine as build-runner

# Set temp directory
WORKDIR /tmp/app

# Move .env
COPY .env .

# Move package.json
COPY package.json .

# Install dependencies
RUN npm install

# Move source files
COPY src ./src
COPY tsconfig.json   .

# Build project
RUN npm run build

## production runner
FROM node:lts-alpine as prod-runner

# Set work directory
WORKDIR /app

# Copy package.json from build-runner
COPY --from=build-runner /tmp/app/package.json /app/package.json

# Install dependencies
RUN npm install --only=production

# Move build files
COPY --from=build-runner /tmp/app/build /app/build

# Move env file
COPY --from=build-runner /tmp/app/.env /app/.env

CMD ls

# Start bot
CMD node build/index.js