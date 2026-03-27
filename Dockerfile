FROM node:lts-alpine AS build-deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM build-deps AS build
COPY . .
RUN npm run build

FROM nginx:alpine AS runtime
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
RUN sed -i 's/listen\s*80;/listen 8080;/g' /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"] 