FROM postgres:alpine
ENV POSTGRES_DB mydb
ENV POSTGRES_USER dotcards
ENV POSTGRES_PASSWORD dotcardsonfire
COPY init.sql /docker-entrypoint-initdb.d/