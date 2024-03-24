import { type ResultSetHeader } from 'mysql2';
import logger from 'src/config/logger';
import { doQuery } from 'src/database/mariadb';

const childLogger = logger.child({
  label: 'orderedBook.repository.ys',
});

export const save = async ({
  orderId,
  bookId,
  quantity,
}: {
  orderId: number;
  bookId: number;
  quantity: number;
}): Promise<void> => {
  await doQuery((connection) =>
    connection.execute<ResultSetHeader>(`INSERT INTO orderedBook (order_id, book_id, quantity) VALUES (?, ?, ?)`, [
      orderId,
      bookId,
      quantity,
    ]),
  );
};
