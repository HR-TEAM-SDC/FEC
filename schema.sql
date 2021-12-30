DROP DATABASE IF EXISTS atelier;

CREATE DATABASE atelier;

USE atelier;

CREATE TABLE outfits (
  id int NOT NULL AUTO_INCREMENT,
  productid int NOT NULL,
  PRIMARY KEY (id)
);