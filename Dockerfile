FROM node:slim

WORKDIR /usr/local/next-site

COPY package.json package-lock.json ./
COPY next.config.mjs jsconfig.json ./
COPY public/ public/
COPY src/ src/

RUN npm i \
  && npm run build \
  && addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOST=0.0.0.0

CMD ["npx", "next", "start", "-p", "3000", "-H", "0.0.0.0"]