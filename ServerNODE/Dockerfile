# FROM node:13.12.0-alpine as builder
# WORKDIR /app
# COPY package.json /app/package.json
# RUN apk --no-cache add --virtual builds-deps build-base python
# RUN npm install
# COPY . /app
# RUN npm run build
# FROM node:13.12.0-alpine
# WORKDIR /app
# COPY --from=builder /app/dist /app
# COPY package.json /app/package.json
# RUN apk --no-cache add --virtual builds-deps build-base python
# RUN npm install --only=prod
# EXPOSE 5001 
# USER node
# CMD ["node", "app.js"]


FROM node:13.12.0-alpine
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . .
ENV PORT 5001
EXPOSE $PORT
CMD ["node", "app.js"]
