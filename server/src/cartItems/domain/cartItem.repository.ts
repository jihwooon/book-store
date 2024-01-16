import { doQuery } from 'src/database/mariadb';

import logger from 'src/config/logger';

const childLogger = logger.child({
  label: 'cartItem.repository.ts',
});

export const save = async (
  { userId, bookId, count }:{ userId: number, bookId: number, count: number },
): Promise<boolean> => {
  try {
    await doQuery((connection) => connection.execute(
      `INSERT
         INTO cartItems (user_id, book_id, count)
       VALUES (?, ?, ?)`,
      [userId, bookId, count],
    ));
    return true;
  } catch (error: any) {
    if (/Duplicate entry/.test(error.message)) {
      childLogger.error(error.message);
      return false;
    }
    throw error;
  }
};
