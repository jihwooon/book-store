import { RowDataPacket } from 'mysql2';

import { doQuery } from '../../database/mariadb';
import logger from '../../config/logger';

const childLogger = logger.child({
  label: 'user.repository.ts',
});

export const save = async (
  email: string,
  password: string,
  name: string,
): Promise<boolean> => {
  try {
    await doQuery((connection) => connection.execute(
      'INSERT INTO users (email, password, name) VALUES (?, ?, ?)',
      [email, password, name],
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

export const findByEmail = async (
  email: string,
): Promise<{
  email: string,
  password: string,
}> => {
  const [rows] = await doQuery((connection) => connection.execute<RowDataPacket[]>(
    'SELECT * FROM users WHERE email = ?',
    [email],
  ));

  const [row] = rows ?? [];
  if (!row) {
    childLogger.error(row);
    return undefined;
  }

  return {
    email: row.email,
    password: row.password,
  };
};
