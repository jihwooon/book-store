TRUNCATE BookStore.users;

-- user data
INSERT INTO BookStore.users (email, name, password, salt)
VALUES ('abc@gmail.com', 'Cristin', 'cQ3''ex8=Ay?,Nnh9', '$2a$04$2Vtbz7zQhMsPzikLNQso2.G1mExwLzoqnh41w6K5.');

INSERT INTO BookStore.users (email, name, password, salt)
VALUES ('abcd@gmail.com', 'Jonie', 'mZ9\1''rx', '$2a$04$OwFqvS1OKxgFZuf01.Qz0.JNzMGzOtuXvaOL5E7jeUyl3gt5NFVZK');

-- books data
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("어린왕자들", 7, 1, "종이책", 0, "어리다....", "많이 어리다...", "김어림", 100, "목차", 20000, 3 , "2019-01-01");

INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("신델렐라", 2, 2, "종이책", 1, "유리구두...", "투명한 유리구두", "걍구두", 100, "목차", 20000, 10, "2019-01-01");

INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("백설공주들", 10, 3, "종이책", 2, "사과...", "많이 어리다...", "김어림", 100, "목차", 20000, 15, "2019-01-01");

INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("흥부와 놀부", 20, 4, "종이책", 3, "제비...", "많이 어리다...", "김어림", 100, "목차", 20000, 20, "2019-01-01");

-- category data
INSERT INTO BookStore.category (name) VALUES ('소설');

INSERT INTO BookStore.category (name) VALUES ('컴퓨터 공학');

INSERT INTO BookStore.category (name) VALUES ('자기계발');

INSERT INTO BookStore.category (name) VALUES ('공상 과학');

-- -- table users
-- DROP DATABASE IF EXISTS BookStore;
-- CREATE DATABASE IF NOT EXISTS BookStore;

-- DROP TABLE IF EXISTS BookStore.users;
-- DROP TABLE IF EXISTS BookStore.books;
-- DROP TABLE IF EXISTS BookStore.category;

-- CREATE TABLE IF NOT EXISTS BookStore.users (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `email` varchar(100) NOT NULL,
--   `name` varchar(45) NOT NULL,
--   `password` varchar(45) NOT NULL,
--   `salt` varchar(100) DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `email_UNIQUE` (`email`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- -- table books
-- CREATE TABLE IF NOT EXISTS BookStore.books (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `title` varchar(45) NOT NULL,
--   `img_id` int(11) NOT NULL,
--   `category_id` int(11) NOT NULL,
--   `form` varchar(45) NOT NULL,
--   `isbn` varchar(45) NOT NULL,
--   `summary` varchar(500) DEFAULT NULL,
--   `detail` longtext DEFAULT NULL,
--   `author` varchar(45) NOT NULL,
--   `pages` int(11) NOT NULL,
--   `contents` longtext DEFAULT NULL,
--   `price` int(11) NOT NULL,
--   `likes` int(11) NOT NULL,
--   `pub_date` date DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `isbn_UNIQUE` (`isbn`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- CREATE TABLE IF NOT EXISTS BookStore.category (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `name` varchar(100) NOT NULL,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ALTER TABLE BookStore.books
-- ADD CONSTRAINT fk_books_category
-- FOREIGN KEY (category_id)
-- REFERENCES BookStore.category(id);

-- truncate tables

-- TRUNCATE BookStore.books;
-- TRUNCATE BookStore.category;
