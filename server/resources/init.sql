use BookStore;

-- set Foreign key = 0
set FOREIGN_KEY_CHECKS = 0;

-- truncate tables
TRUNCATE BookStore.books;
TRUNCATE BookStore.category;
TRUNCATE BookStore.likes;
TRUNCATE BookStore.users;
TRUNCATE BookStore.cartItems;
TRUNCATE BookStore.delivery;
TRUNCATE BookStore.orders;
TRUNCATE BookStore.orderedBook;

-- insert Data
INSERT INTO BookStore.category (name) VALUES ('소설');
INSERT INTO BookStore.category (name) VALUES ('컴퓨터/IT');
INSERT INTO BookStore.category (name) VALUES ('자기계발');
INSERT INTO BookStore.category (name) VALUES ('기술/공학');

INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("어린왕자들", 7, 1, "종이책", 0, "어리다....", "많이 어리다...", "김어림", 100, "목차", 20000, 0 , "2024-01-01");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("신델렐라", 2, 2, "종이책", 1, "유리구두...", "투명한 유리구두", "걍구두", 100, "목차", 20000, 0, "2024-01-01");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("백설공주들", 10, 3, "종이책", 2, "사과...", "많이 어리다...", "김어림", 100, "목차", 20000, 0, "2024-01-01");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("흥부와 놀부", 20, 4, "종이책", 3, "제비...", "많이 어리다...", "김어림", 100, "목차", 20000, 0, "2024-01-01");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("콩쥐 팥쥐", 4, 1, "ebook", 4, "콩팥..", "콩심은데 콩나고..", "김콩팥", 100, "목차입니다.", 20000, 0, "2024-01-07");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("용궁에 간 토끼", 5, 1, "종이책", 5, "깡충..", "용왕님 하이..", "김거북", 100, "목차입니다.", 20000, 0, "2024-01-01");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("해님달님", 15, 2, "ebook", 6, "동앗줄..", "황금 동앗줄..!", "김해님", 100, "목차입니다.", 20000, 0, "2024-01-16");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("장화홍련전", 80, 1, "ebook", 7, "기억이 안나요..", "장화와 홍련이?..", "김장화", 100, "목차입니다.", 20000, 0, "2024-01-01");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("견우와 직녀", 8, 2, "ebook", 8, "오작교!!", "칠월 칠석!!", "김다리", 100, "목차입니다.", 20000, 0, "2024-01-01");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("효녀 심청", 12, 1, "종이책", 9, "심청아..", "공양미 삼백석..", "김심청", 100, "목차입니다.", 20000, 0, "2024-01-12");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("혹부리 영감", 22, 2, "ebook", 10, "노래 주머니..", "혹 두개 되버림..", "김영감", 100, "목차입니다.", 20000, 0, "2024-01-05");

INSERT INTO BookStore.users (email, name, password, salt) VALUES ('abc@gmail.com', '홍길동', 'DXG6vjL/j7wfMA==', 'y9gFwrBaPpH7FQ==');
INSERT INTO BookStore.users (email, name, password, salt) VALUES ('abcd@gmail.com', '이홍철', '7Gzc43UTFzogzA==', 'I+0dnN1aFMFdDA==');

INSERT INTO BookStore.likes (user_id, liked_book_id) VALUES (1, 1);
INSERT INTO BookStore.likes (user_id, liked_book_id) VALUES (2, 2);
INSERT INTO BookStore.likes (user_id, liked_book_id) VALUES (1, 3);

INSERT INTO cartItems (user_id, book_id, count) VALUES (1,1,1);
INSERT INTO cartItems (user_id, book_id, count) VALUES (2,4,10);
INSERT INTO cartItems (user_id, book_id, count) VALUES (2,3,2);
INSERT INTO cartItems (user_id, book_id, count) VALUES (1,2,3);
INSERT INTO cartItems (user_id, book_id, count) VALUES (1,1,2);
INSERT INTO cartItems (user_id, book_id, count) VALUES (1,1,10);

-- Delivery
INSERT INTO delivery VALUES (1, '강원도 춘천시 동내면 대룡산길 227-314 24408 한국', '홍길동' , '010-1234-5667');
INSERT INTO delivery VALUES (2, '경상북도 경주시 감포읍 회곡길 10-8 38123 한국', '안녕길' , '010-2345-5667');
INSERT INTO delivery VALUES (3, '경기도 고양시 덕양구 통일로754번길 12(관산동) 10285 한국', '윤봉길' , '010-3333-5667');

-- Order
INSERT INTO orders (book_title, total_quantity, total_price, user_id, delivery_id, created_at) VALUES ("어린왕자", 3, 6000, 1, 1, '2019-11-11');
INSERT INTO orders (book_title, total_quantity, total_price, user_id, delivery_id, created_at) VALUES ("어린왕자", 3, 6000, 1, 1, '2019-11-11');

-- orderBook
INSERT INTO orderedBook (order_id, book_id, quantity ) VALUES (1, 2, 3);
INSERT INTO orderedBook (order_id, book_id, quantity ) VALUES (2, 1, 3);
INSERT INTO orderedBook (order_id, book_id, quantity ) VALUES (3, 2, 10);

-- set Foreign key = 1
set FOREIGN_KEY_CHECKS = 1;
