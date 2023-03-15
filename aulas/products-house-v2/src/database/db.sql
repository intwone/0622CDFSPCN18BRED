-- Active: 1671844565098@@localhost@3306@productshouse
DROP DATABASE IF EXISTS productshouse;

CREATE DATABASE productshouse;

USE productshouse;

CREATE TABLE categories(
    id INT(10) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    description TEXT
);

CREATE TABLE products (
	id VARCHAR(100) NOT NULL,
	name varchar(100) NOT NULL,
	description TEXT NOT NULL,
	price DOUBLE NOT NULL,
	image varchar(100) NOT NULL,
	active BOOL NOT NULL,
	stock BOOL NOT NULL,
    category_id int(10) NOT NULL,
	PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO categories(id, description)
VALUES(1, 'teste01'),(2, 'teste02');

INSERT INTO products (id, name, description, price, image, active, stock, category_id)
VALUES(
    '92a202f8-998f-4257-aacf-796019bf0166',
    'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    109.95,
    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', 1, 0, 1),
    ('15aef958-dbe2-4f05-9e1f-67ed2bb724f9',
    'Mens Casual Premium Slim Fit T-Shirts',
    'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    22.90,
    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    true,
    false,
    2
);