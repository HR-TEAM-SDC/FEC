DROP DATABASE IF EXISTS atelier;

CREATE DATABASE atelier;

USE atelier;

CREATE TABLE outfits (
  id int NOT NULL AUTO_INCREMENT,
  productid int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE questions (
  id int NOT NULL AUTO_INCREMENT,
  username VARCHAR(60),
  email VARCHAR(60),
  messages VARCHAR(1000),
  productId int NOT NULL,
  PRIMARY KEY (id)
);