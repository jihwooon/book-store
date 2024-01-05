import { ResultSetHeader, RowDataPacket } from 'mysql2';

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

export const updateUserByPassword = async (email: string, password: string): Promise<boolean> => {
  const [{ affectedRows }] = await doQuery((connection) => connection.execute<ResultSetHeader>(
    'UPDATE users SET password=? WHERE email = ?',
    [email, password],
  ));

  if (affectedRows === 0) {
    childLogger.error('Fail update');
    return false;
  }

  return affectedRows === 1;
};
