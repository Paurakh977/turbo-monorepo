# Base image
FROM node:18-alpine AS base

# Install basic dependencies
RUN apk update && apk add --no-cache libc6-compat curl bash

# Set working directory
WORKDIR /app

# --------------------------
# Builder stage
# --------------------------
FROM base AS builder

# Install turbo globally
RUN corepack enable && corepack prepare turbo@latest --activate

WORKDIR /app

# Copy the whole repo
COPY . .

# Prune only the web app dependencies for Docker
RUN npx turbo prune web --docker

# --------------------------
# Installer stage
# --------------------------
FROM base AS installer

WORKDIR /app

# Copy the pruned package.json & lockfile
COPY --from=builder /app/out/json/ ./

# Install dependencies using pnpm
RUN corepack enable && pnpm install --frozen-lockfile

# Copy source code of the full workspace
COPY --from=builder /app/out/full/ ./

# Build using turbo
RUN npx turbo run build --filter=web...

# --------------------------
# Runner stage
# --------------------------
FROM base AS runner

WORKDIR /app

# Add non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

USER nextjs

# Copy standalone Next.js build
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public

# Start server
CMD ["node", "apps/web/server.js"]
