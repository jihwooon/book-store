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
