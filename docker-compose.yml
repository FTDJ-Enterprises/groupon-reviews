version: "3"

services:
  results: 
    image: jeehyae91/ghrsea05-groupon-reviews:latest
    depends_on:
      - "db"
    ports:
      - "3001:3001"
  db:
    image: jeehyae91/ghrsea05-groupon-review-db:latest
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: "password"
      MYSQL_DATABASE: "reviews"
    ports:
      # <Port exposed> : < MySQL Port running inside container>
      - "3306:3306"
    