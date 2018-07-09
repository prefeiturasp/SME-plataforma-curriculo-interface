FROM node:9.11.2

RUN mkdir -p /app 
WORKDIR /app

COPY package.json package.json
COPY npm-shrinkwrap.json npm-shrinkwrap.json

RUN npm install
RUN npm install -g serve

COPY . ./

CMD if [ ${APP_ENV} = production ]; \
	then \
	npm run build --production && \
	serve -s build; \
	else \
	npm run start; \
	fi

EXPOSE 5000