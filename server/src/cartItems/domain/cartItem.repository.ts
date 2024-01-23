import { doQuery } from 'src/database/mariadb';

import logger from 'src/config/logger';

import { type ResultSetHeader, type RowDataPacket } from 'mysql2';

import Book from 'src/books/domain/book';

import CartItem from './cartItem';

const childLogger = logger.child({
  label: 'cartItem.repository.ts',
});

export const save = async ({
  userId,
  bookId,
  count,
}: {
  userId: number;
  bookId: number;
  count: number;
}): Promise<boolean> => {
  try {
    await doQuery((connection) =>
      connection.execute(
        `INSERT
         INTO cartItems (user_id, book_id, count)
       VALUES (?, ?, ?)`,
        [userId, bookId, count],
      ),
    );
    return true;
  } catch (error: any) {
    if (/Duplicate entry/.test(error.message)) {
      childLogger.error(error.message);
      return false;
    }
    throw error;
  }
};

export const findCartItemWithBook = async (userId: number): Promise<CartItem[]> => {
  const [rows] = await doQuery((connection) =>
    connection.execute<RowDataPacket[]>(
      `SELECT ci.id, ci.book_id, b.title, b.summary, b.price, ci.count
         FROM cartItems ci
         LEFT JOIN books b
           ON b.id = ci.book_id
        WHERE ci.user_id = ?`,
      [userId],
    ),
  );

  return (rows ?? []).map(
    (row) =>
      new CartItem({
        id: row.id,
        bookId: row.book_id,
        count: row.count,
        books: new Book({
          title: row.title,
          summary: row.summary,
          price: row.price,
        }),
      }),
  );
};

export const deleteById = async (id: number): Promise<boolean> => {
  const [{ affectedRows }] = await doQuery((connection) =>
    connection.execute<ResultSetHeader>(
      `DELETE
       FROM cartItems
      WHERE id = ?`,
      [id],
    ),
  );

  if (affectedRows === 0) {
    childLogger.error(affectedRows);
    return false;
  }

  return affectedRows === 1;
};
