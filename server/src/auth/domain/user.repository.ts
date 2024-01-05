import { ResultSetHeader, RowDataPacket } from 'mysql2';

import logger from '../../config/logger';
import { doQuery } from '../../database/mariadb';

const childLogger = logger.child({
  label: 'user.repository.ts',
});

export const save = async (
  email: string,
  password: string,
  name: string,
  salt: string,
): Promise<boolean> => {
  try {
    await doQuery((connection) => connection.execute(
      'INSERT INTO users (email, password, name, salt) VALUES (?, ?, ?, ?)',
      [email, password, name, salt],
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
  salt: string,
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
    salt: row.salt,
  };
};

export const updateUserByPasswordAndSalt = async (
  email: string,
  password: string,
  salt: string,
): Promise<boolean> => {
  const [{ affectedRows }] = await doQuery((connection) => connection.execute<ResultSetHeader>(
    'UPDATE users SET password = ?, salt = ? WHERE email = ?',
    [password, salt, email],
  ));

  if (affectedRows === 0) {
    childLogger.error('Fail update');
    return false;
  }

  return affectedRows === 1;
};
