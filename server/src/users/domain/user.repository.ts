import { type ResultSetHeader, type RowDataPacket } from 'mysql2';
import logger from 'src/config/logger';

import { doQuery } from 'src/database/mariadb';

import User from './user';

const childLogger = logger.child({
  label: 'user.repository.ts',
});

export const save = async ({
  email,
  password,
  name,
  salt,
}: {
  email: string;
  password: string;
  name: string;
  salt: string;
}): Promise<boolean> => {
  try {
    await doQuery((connection) =>
      connection.execute(
        `INSERT
         INTO users (email, password, name, salt)
       VALUES (?, ?, ?, ?)`,
        [email, password, name, salt],
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

export const findByEmail = async (email: string): Promise<User> => {
  const [rows] = await doQuery((connection) =>
    connection.execute<RowDataPacket[]>(
      `SELECT id, email,password,salt
       FROM users WHERE email = ?`,
      [email],
    ),
  );

  const [row] = rows ?? [];
  if (!row) {
    childLogger.error(row);
    return row;
  }

  return new User({
    id: row.id,
    email: row.email,
    password: row.password,
    salt: row.salt,
  });
};

export const updateUserByPasswordAndSalt = async (email: string, password: string, salt: string): Promise<boolean> => {
  const [{ affectedRows }] = await doQuery((connection) =>
    connection.execute<ResultSetHeader>(
      `UPDATE users
        SET password = ?, salt = ?
      WHERE email = ?`,
      [password, salt, email],
    ),
  );

  if (affectedRows === 0) {
    childLogger.error('Fail update');
    return false;
  }

  return affectedRows === 1;
};
