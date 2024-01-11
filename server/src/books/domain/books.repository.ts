import { RowDataPacket } from 'mysql2';

import logger from 'src/config/logger';

import { doQuery } from 'src/database/mariadb';

import Book from './book';

const childLogger = logger.child({
  label: 'books.repository.ts',
});

export const findAll = async (): Promise<Book[]> => {
  const [rows] = await doQuery((connection) => connection.execute<RowDataPacket[]>(
    'SELECT id, title, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date FROM books',
  ));

  return (rows ?? []).map((row) => new Book({
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
};

export const findWithCategory = async (id: number): Promise<Book> => {
  const [rows] = await doQuery((connection) => connection.execute<RowDataPacket[]>(
    'SELECT * FROM books b LEFT JOIN category c ON b.category_id = c.id WHERE b.id = ?',
    [id],
  ));

  const [row] = rows ?? [];
  if (!row) {
    childLogger.error(row);
    return undefined;
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

export const findByCategory = async (categoryId: number): Promise<Book> => {
  const [rows] = await doQuery((connection) => connection.execute<RowDataPacket[]>('SELECT id, title, img_id, category_id, form, isbn, summary, detail, author, pages, contents, price, likes, pub_date FROM books WHERE category_id=?', [categoryId]));

  const [row] = rows ?? [];
  if (!row) {
    childLogger.error(row);
    return undefined;
  }

  return new Book({
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
  });
};

export const findByCategoryAndNewRelease = async (
  categoryId: number,
): Promise<Book[]> => {
  const [rows] = await doQuery((connection) => connection.execute<RowDataPacket[]>(
    'SELECT * FROM books WHERE category_id=? AND pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()'
    , [categoryId],
  ));

  return (rows ?? []).map((row) => new Book({
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
};

export const findByNewRelease = async (): Promise<Book[]> => {
  const [rows] = await doQuery((connection) => connection.execute<RowDataPacket[]>(
    'SELECT * FROM books WHERE pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()',
  ));

  return (rows ?? []).map((row) => new Book({
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
};
