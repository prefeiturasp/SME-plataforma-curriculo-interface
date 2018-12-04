FROM node:9.11.2

RUN mkdir -p /app 
WORKDIR /app

ARG APP_ENV
ARG API_URL

COPY package.json package.json
COPY npm-shrinkwrap.json npm-shrinkwrap.json

RUN npm install
RUN npm install -g serve

COPY . ./

RUN echo "export const API_URL3333 = '${API_URL}'" > src/constants.js

CMD if [ ${APP_ENV} = production ]; \
	then \
	npm install && \
	npm run build --production && \
	serve -s build; \
	else \
	npm install && \
	npm run start; \
	fi

EXPOSE 5000