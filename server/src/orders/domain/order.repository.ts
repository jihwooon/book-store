import { type ResultSetHeader } from 'mysql2';
import logger from 'src/config/logger';
import { doQuery } from 'src/database/mariadb';

const childLogger = logger.child({
  label: 'order.repository.ys',
});

export const save = async (
  firstBookTitle: string,
  totalQuantity: number,
  totalPrice: number,
  userId: number,
  deliveryId: number,
): Promise<number> => {
  const [{ insertId }] = await doQuery((connection) =>
    connection.execute<ResultSetHeader>(
      `INSERT INTO orders (book_title, total_quantity, total_price, user_id, delivery_id, created_at) VALUES (?, ?, ?, ?, ?, ?)`,
      [firstBookTitle, totalQuantity, totalPrice, userId, deliveryId, new Date()],
    ),
  );

  if (insertId === 0) {
    childLogger.error('Fail Save Repository');
    throw new Error('저장에 실패하였습니다.');
  }

  return insertId;
};
