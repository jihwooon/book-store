import { RowDataPacket } from 'mysql2';
import { doQuery } from 'src/database/mariadb';

import Category from './category';

export const findAll = async (): Promise<Category[]> => {
  const [rows] = await doQuery((connection) => connection.execute<RowDataPacket[]>(
    'SELECT id, name FROM category',
  ));

  return (rows ?? []).map((row) => new Category({
    id: row.id,
    name: row.name,
  }));
};
