-- table users
CREATE DATABASE IF NOT EXISTS BookStore;

CREATE TABLE IF NOT EXISTS BookStore.users (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `salt` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- table books
CREATE TABLE IF NOT EXISTS BookStore.books (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `form` varchar(45) NOT NULL,
  `isbn` varchar(45) NOT NULL,
  `summary` varchar(500) DEFAULT NULL,
  `detail` longtext DEFAULT NULL,
  `author` varchar(45) NOT NULL,
  `pages` int(11) NOT NULL,
  `contents` longtext DEFAULT NULL,
  `price` int(11) NOT NULL,
  `pub_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `isbn_UNIQUE` (`isbn`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- truncate tables
TRUNCATE BookStore.users;
TRUNCATE BookStore.books;

-- user data
INSERT INTO BookStore.users (email, name, password, salt)
VALUES ('abc@gmail.com', 'Cristin', 'cQ3''ex8=Ay?,Nnh9', '$2a$04$2Vtbz7zQhMsPzikLNQso2.G1mExwLzoqnh41w6K5.');

INSERT INTO BookStore.users (email, name, password, salt)
VALUES ('abcd@gmail.com', 'Jonie', 'mZ9\1''rx', '$2a$04$OwFqvS1OKxgFZuf01.Qz0.JNzMGzOtuXvaOL5E7jeUyl3gt5NFVZK');

-- books data
INSERT INTO BookStore.books (title, form, isbn, summary, detail, author, pages, contents, price, pub_date)
VALUES ("어린왕자들", "종이책", 0, "어리다....", "많이 어리다...", "김어림", 100, "목차", 20000, "2019-01-01");

INSERT INTO BookStore.books (title, form, isbn, summary, detail, author, pages, contents, price, pub_date)
VALUES ("신델렐라", "종이책", 1, "유리구두...", "투명한 유리구두", "걍구두", 100, "목차", 20000, "2019-01-01");

INSERT INTO BookStore.books (title, form, isbn, summary, detail, author, pages, contents, price, pub_date)
VALUES ("백설공주들", "종이책", 2, "사과...", "많이 어리다...", "김어림", 100, "목차", 20000, "2019-01-01");

INSERT INTO BookStore.books (title, form, isbn, summary, detail, author, pages, contents, price, pub_date)
VALUES ("흥부와 놀부", "종이책", 3, "제비...", "많이 어리다...", "김어림", 100, "목차", 20000, "2019-01-01");
