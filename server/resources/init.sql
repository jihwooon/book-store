-- set Foreign key = 0
set FOREIGN_KEY_CHECKS = 0;

-- truncate tables
TRUNCATE BookStore.books;
TRUNCATE BookStore.category;

-- insert Data
INSERT INTO BookStore.category (name) VALUES ('소설');
INSERT INTO BookStore.category (name) VALUES ('컴퓨터/IT');
INSERT INTO BookStore.category (name) VALUES ('자기계발');
INSERT INTO BookStore.category (name) VALUES ('기술/공학');
INSERT INTO BookStore.category (name) VALUES ('시/에세이');
INSERT INTO BookStore.category (name) VALUES ('인문');
INSERT INTO BookStore.category (name) VALUES ('가정/육아');
INSERT INTO BookStore.category (name) VALUES ('요리');
INSERT INTO BookStore.category (name) VALUES ('건강');
INSERT INTO BookStore.category (name) VALUES ('취미/실용/스포츠');
INSERT INTO BookStore.category (name) VALUES ('정치/사회');
INSERT INTO BookStore.category (name) VALUES ('역사 문화');

INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("어린왕자들", 7, 1, "종이책", 0, "어리다....", "많이 어리다...", "김어림", 100, "목차", 20000, 3 , "2019-01-01");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("신델렐라", 2, 2, "종이책", 1, "유리구두...", "투명한 유리구두", "걍구두", 100, "목차", 20000, 10, "2019-01-01");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("백설공주들", 10, 3, "종이책", 2, "사과...", "많이 어리다...", "김어림", 100, "목차", 20000, 15, "2019-01-01");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("흥부와 놀부", 20, 4, "종이책", 3, "제비...", "많이 어리다...", "김어림", 100, "목차", 20000, 20, "2019-01-01");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("콩쥐 팥쥐", 4, 1, "ebook", 4, "콩팥..", "콩심은데 콩나고..", "김콩팥", 100, "목차입니다.", 20000, 5, "2023-12-07");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("용궁에 간 토끼", 5, 1, "종이책", 5, "깡충..", "용왕님 하이..", "김거북", 100, "목차입니다.", 20000, 5, "2023-10-01");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("해님달님", 15, 2, "ebook", 6, "동앗줄..", "황금 동앗줄..!", "김해님", 100, "목차입니다.", 20000, 5, "2023-07-16");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("장화홍련전", 80, 1, "ebook", 7, "기억이 안나요..", "장화와 홍련이?..", "김장화", 100, "목차입니다.", 20000, 5, "2023-03-01");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("견우와 직녀", 8, 2, "ebook", 8, "오작교!!", "칠월 칠석!!", "김다리", 100, "목차입니다.", 20000, 5, "2023-02-01");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("효녀 심청", 12, 1, "종이책", 9, "심청아..", "공양미 삼백석..", "김심청", 100, "목차입니다.", 20000, 5, "2023-01-15");
INSERT INTO BookStore.books (title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date)
VALUES ("혹부리 영감", 22, 2, "ebook", 10, "노래 주머니..", "혹 두개 되버림..", "김영감", 100, "목차입니다.", 20000, 5, "2023-06-05");

-- set Foreign key = 1
set FOREIGN_KEY_CHECKS = 1;
