# ini dapet dari dockerhub
FROM node:20-slim

ARG SCRIPT
ENV CALL=$SCRIPT

ENV DEBIAN_FRONTEND=noninteractive
ENV PLAYWRIGHT_CHROMIUM_NO_SANDBOX=1

# Dependencies untuk Chromium/Playwright
RUN apt-get update && apt-get install -y \
    wget \
    curl \
    unzip \
    bash \
    gnupg \
    ca-certificates \
    fonts-liberation \
    libasound2 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libc6 \
    libcairo2 \
    libcups2 \
    libdbus-1-3 \
    libexpat1 \
    libfontconfig1 \
    libgcc1 \
    libgconf-2-4 \
    libgdk-pixbuf2.0-0 \
    libglib2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libstdc++6 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrandr2 \
    libxrender1 \
    libxss1 \
    libxtst6 \
    xdg-utils \
    && rm -rf /var/lib/apt/lists/*


WORKDIR /app

COPY package*.json ./
RUN npm install

RUN npx playwright install --with-deps chromium

COPY . .

RUN mkdir -p /app/allure-results /app/src/data && chmod 777 /app/allure-results /app/src/data

CMD bash -c "npx playwright test --reporter=line,allure-playwright; exit 0"

