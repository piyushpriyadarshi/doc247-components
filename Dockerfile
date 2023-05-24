FROM node:18.4.0-alpine AS build-env
COPY . /app
WORKDIR /app
ENV NODE_ENV=production
RUN npm ci --omit=dev
RUN npm run build
RUN rm -rf .next/cache/
RUN npm prune --production

FROM gcr.io/distroless/nodejs18-debian11
COPY --from=build-env /app/node_modules /app/node_modules
COPY --from=build-env /app/.next /app/.next
WORKDIR /app
CMD ["node_modules/.bin/next", "start"]