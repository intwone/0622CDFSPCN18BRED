CREATE DATABASE fake_api;

USE fake_api;

CREATE TABLE users (
    id INT(10) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    password VARCHAR(150) NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);