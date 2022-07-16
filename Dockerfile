## build runner
FROM node:lts-alpine as build-runner

# Set temp directory
WORKDIR /tmp/app

# copy yarn workspace package json
COPY package.json .

COPY backend/package.json backend/

# Move frontend .env
COPY frontend/.env frontend/

# Move frontend package.json
COPY frontend/package.json frontend/

# Install dependencies
RUN yarn install

# Move source files
COPY frontend/src frontend/src
COPY backend/src backend/src

COPY frontend/tsconfig.json frontend/

# Build project
RUN yarn run build

## production runner
FROM node:lts-alpine as prod-runner

# Set work directory
WORKDIR /app

# Copy package.jsons from build-runner
COPY --from=build-runner /tmp/app/frontend/package.json /app/frontend/package.json
COPY --from=build-runner /tmp/app/backend/package.json /app/backend/package.json
COPY --from=build-runner /tmp/app/package.json /app/package.json

# Install dependencies
RUN yarn install --only=production

# Move build files
COPY --from=build-runner /tmp/app/frontend/build /app/frontend/build

# Move env file
COPY --from=build-runner /tmp/app/frontend/.env /app/frontend/.env

# Move backend files
COPY --from=build-runner /tmp/app/backend/src /app/backend/src

# Start bot
CMD node build/index.js