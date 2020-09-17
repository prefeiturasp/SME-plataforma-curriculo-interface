FROM node:9.11.2 as build

RUN mkdir -p /app 
WORKDIR /app


COPY package.json package.json
COPY npm-shrinkwrap.json npm-shrinkwrap.json

RUN npm install

COPY . ./

RUN npm install && \
    npm run build --production

FROM nginx:alpine
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh
COPY --from=build /app/build /usr/share/nginx/html
COPY ./conf/default.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["/app/entrypoint.sh"]
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
