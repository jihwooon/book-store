import { type RowDataPacket } from 'mysql2';

import logger from 'src/config/logger';

import { doQuery } from 'src/database/mariadb';

import Book from './book';

const childLogger = logger.child({
  label: 'books.repository.ts',
});

export const findAll = async (limit: number, currentPage: number): Promise<{
  books: Book[],
  totalCount: number
}> => {
  const [rows] = await doQuery((connection) => connection.execute<RowDataPacket[]>(
    `SELECT id, title, form, isbn, summary, detail, author, pages, contents, price, pub_date,
            (SELECT count(*) FROM likes WHERE books.id = liked_book_id) as likes
       FROM books
      LIMIT ?
     OFFSET ?`,
    [limit, currentPage],
  ));

  const books = (rows ?? []).map((row) => new Book({
    id: row.id,
    title: row.title,
    form: row.form,
    isbn: row.isbn,
    summary: row.summary,
    detail: row.detail,
    author: row.author,
    pages: row.pages,
    contents: row.contents,
    price: row.price,
    likes: row.likes,
    pubDate: row.pub_date,
  }));

  return {
    books,
    totalCount: rows.length,
  };
};

export const findWithCategory = async (bookId: number, userId: number): Promise<Book> => {
  const [rows] = await doQuery((connection) => connection.execute<RowDataPacket[]>(
    `SELECT b.id, b.title, b.category_id, b.form, b.isbn, b.summary, b.detail, b.author, b.pages, b.contents, b.price, b.pub_date,
            (SELECT count(*) FROM likes WHERE b.id = liked_book_id) as likes,
            (SELECT EXISTS(SELECT * FROM likes WHERE user_id = ? AND liked_book_id)) as liked
       FROM books b
       LEFT JOIN category c
         ON b.category_id = c.id
      WHERE b.id = ?`,
    [userId, bookId],
  ));

  const [row] = rows ?? [];
  if (!row) {
    childLogger.error(row);
    return row;
  }

  return new Book({
    id: row.id,
    title: row.title,
    form: row.form,
    isbn: row.isbn,
    categoryId: row.category_id,
    summary: row.summary,
    detail: row.detail,
    author: row.author,
    pages: row.pages,
    contents: row.contents,
    price: row.price,
    likes: row.likes,
    pubDate: row.pub_date,
  });
};

export const findByCategory = async (
  categoryId: number,
  limit: number,
  currentPage: number,
): Promise<{ books: Book[], totalCount: number }> => {
  const [rows] = await doQuery((connection) => connection.execute<RowDataPacket[]>(
    `SELECT id, title, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date
       FROM books
      WHERE category_id=?
      LIMIT ?
     OFFSET ?`,
    [categoryId, limit, currentPage],
  ));

  const books = (rows ?? []).map((row) => new Book({
    id: row.id,
    title: row.title,
    imgId: row.img_id,
    categoryId: row.category_id,
    form: row.form,
    isbn: row.isbn,
    summary: row.summary,
    detail: row.detail,
    author: row.author,
    pages: row.pages,
    contents: row.contents,
    price: row.price,
    likes: row.likes,
    pubDate: row.pub_date,
  }));

  return {
    books,
    totalCount: books.length,
  };
};

export const findByCategoryAndNewRelease = async (
  categoryId: number,
  limit: number,
  currentPage: number,
): Promise<{ books: Book[], totalCount: number }> => {
  const [rows] = await doQuery((connection) => connection.execute<RowDataPacket[]>(
    `SELECT id, title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date
       FROM books
      WHERE category_id=?
        AND pub_date
    BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH)
        AND NOW()
      LIMIT ?
     OFFSET ?`
    , [categoryId, limit, currentPage],
  ));

  const books = (rows ?? []).map((row) => new Book({
    id: row.id,
    title: row.title,
    imgId: row.img_id,
    categoryId: row.category_id,
    form: row.form,
    isbn: row.isbn,
    summary: row.summary,
    detail: row.detail,
    author: row.author,
    pages: row.pages,
    contents: row.contents,
    price: row.price,
    likes: row.likes,
    pubDate: row.pub_date,
  }));

  return {
    books,
    totalCount: rows.length,
  };
};

export const findByNewRelease = async (
  limit: number,
  currentPage: number,
): Promise<{ books: Book[], totalCount: number }> => {
  const [rows] = await doQuery((connection) => connection.execute<RowDataPacket[]>(
    `SELECT id, title, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date
       FROM books
      WHERE pub_date
    BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH)
        AND NOW()
      LIMIT ?
     OFFSET ?`,
    [limit, currentPage],
  ));

  const books = (rows ?? []).map((row) => new Book({
    id: row.id,
    title: row.title,
    form: row.form,
    isbn: row.isbn,
    summary: row.summary,
    detail: row.detail,
    author: row.author,
    pages: row.pages,
    contents: row.contents,
    price: row.price,
    likes: row.likes,
    pubDate: row.pub_date,
  }));

  return {
    books,
    totalCount: rows.length,
  };
};
