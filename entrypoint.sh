#!/bin/sh
# Scrip utilizado para subistituir strings no staticfiles no deploy de nginx frontend
# sed -i "s/texto-antigo/novo-testo/g" nomedoarquivo.txt 
# 

set -xe
  : "${SERVER_NAME?Precisa de uma variavel de ambiente SERVER_NAME}"

set -xe
  : "${API_URL?Precisa de uma variavel de ambiente API_URL}"

sed -i "s,SERVER_NAME,$SERVER_NAME,g" /etc/nginx/conf.d/default.conf
sed -i "s,API_URL,$API_URL,g" /usr/share/nginx/html/static/js/main*.js
exec "$@"
