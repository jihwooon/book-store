import { ResultSetHeader, RowDataPacket } from 'mysql2';
import logger from 'src/config/logger';

import { doQuery } from 'src/database/mariadb';

import User from './user';

const childLogger = logger.child({
  label: 'user.repository.ts',
});

export const save = async (
  user: User,
): Promise<boolean> => {
  try {
    await doQuery((connection) => connection.execute(
      'INSERT INTO users (email, password, name, salt) VALUES (?, ?, ?, ?)',
      [user.getEmail(), user.getPassword(), user.getName(), user.getSalt()],
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
): Promise<User> => {
  const [rows] = await doQuery((connection) => connection.execute<RowDataPacket[]>(
    'SELECT * FROM users WHERE email = ?',
    [email],
  ));

  const [row] = rows ?? [];
  if (!row) {
    childLogger.error(row);
    return undefined;
  }

  return new User({
    email: row.email,
    password: row.password,
    salt: row.salt,
  });
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
