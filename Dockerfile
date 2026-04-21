
FROM node:18


WORKDIR /app


COPY package*.json ./


RUN npm ci


COPY . .


RUN npx playwright install --with-deps


CMD ["npx", "playwright", "test", "--reporter=line"]
