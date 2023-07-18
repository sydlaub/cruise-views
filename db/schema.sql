DROP DATABASE IF EXISTS cruise_db;

CREATE DATABASE cruise_db;

USE cruise_db;

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userName VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  passwordHash VARCHAR(50) NOT NULL

);

CREATE TABLE entry (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  postBody TEXT NOT NULL,
  category VARCHAR(50) NOT NULL,
  user_id INT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id)
);

-- need to fix user id on entry to be NOT NULL once users are setup