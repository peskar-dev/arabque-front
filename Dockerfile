FROM node:20.3.0-alpine as build-stage
ARG VITE_API_URL
RUN npm install -g pnpm
WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm install
COPY . .
RUN VITE_API_URL=${VITE_API_URL} pnpm run build

# этап production (production-stage)
FROM steebchen/nginx-spa:stable as production-stage
COPY --from=build-stage /app/dist /app
EXPOSE 80
CMD ["nginx"]

