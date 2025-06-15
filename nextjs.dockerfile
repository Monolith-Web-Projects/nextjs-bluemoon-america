# Stage 1 (Builder)
FROM node:24-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2 (Runner)
FROM node:24-alpine AS runner

ENV NODE_ENV=production
WORKDIR /app

# Optional: Install tools in the production container
RUN apk add --no-cache nano tree zip unzip bash

# Copy runtime files only
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Optional: Drop privileges (recommended for security)
# RUN addgroup -S app && adduser -S app -G app
# USER app

EXPOSE 3000
CMD ["npm", "start"]