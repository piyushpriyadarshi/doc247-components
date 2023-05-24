# FROM node:18.4.0-alpine AS build-env
# COPY . /app
# WORKDIR /app
# ENV NODE_ENV=production
# RUN npm ci --omit=dev
# RUN npm run build
# RUN rm -rf .next/cache/
# RUN npm prune --production

# FROM gcr.io/distroless/nodejs18-debian11
# COPY --from=build-env /app/node_modules /app/node_modules
# COPY --from=build-env /app/.next /app/.next
# WORKDIR /app
# CMD ["node_modules/.bin/next", "start"]


FROM node:18.4.0-alpine AS build
WORKDIR /usr/src

# Only build dependencies in the first step. This is very good for caching in Docker, as this layer will only
# be re-built whenever the dependency-list changes.
COPY package*.json ./
RUN npm ci

# Copy the actual source code and build it
COPY . .
ENV NODE_ENV=production
RUN npm run build
RUN rm -rf .next/cache/

# Sadly, we need to include node_modules/ beacuse the server side needs it, but at least we can prune it to
# get rid of development dependencies.
RUN npm prune --production
RUN wget https://gobinaries.com/tj/node-prune --output-document - | /bin/sh && node-prune

# Start from scratch and include only relevant files
FROM node:18.4.0-alpine AS distribution
WORKDIR /opt/my-app
ENV NODE_ENV=production
COPY --from=build /usr/src/node_modules node_modules
COPY --from=build /usr/src/.next .next

# Expose port and run application
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]