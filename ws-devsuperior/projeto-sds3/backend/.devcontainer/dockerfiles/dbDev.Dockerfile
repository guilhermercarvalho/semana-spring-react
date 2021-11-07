FROM postgres:14-alpine3.14

COPY database/db.dev.sql /docker-entrypoint-initdb.d/
