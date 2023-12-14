FROM node:20.10.0 as builder

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/

COPY --from=builder /app/dist/sep6 /usr/share/nginx/html

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]
