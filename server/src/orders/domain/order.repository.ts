import { type ResultSetHeader, type RowDataPacket } from 'mysql2';
import logger from 'src/config/logger';
import { doQuery } from 'src/database/mariadb';

import Delivery from 'src/delivery/domain/delivery';

import Order from './order';

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

export const findAll = async (): Promise<Order[]> => {
  const [rows] = await doQuery((connection) =>
    connection.execute<RowDataPacket[]>(
      `SELECT o.id, o.book_title, o.total_price, o.total_quantity, d.address, d.receiver, d.contact
       FROM orders o
       LEFT JOIN delivery d
       ON o.delivery_id = d.id
    `,
    ),
  );

  const orders = (rows ?? []).map(
    (row) =>
      new Order({
        id: row.id,
        bookTitle: row.book_title,
        totalPrice: row.total_price,
        totalQuantity: row.total_quantity,
        delivery: new Delivery({
          address: row.address,
          receiver: row.receiver,
          contact: row.contact,
        }),
        createdAt: row.created_at,
      }),
  );

  return orders;
};
