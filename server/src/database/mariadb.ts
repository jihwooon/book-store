import { createPool, type Connection } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const connectionPromise = createPool({
  host: 'localhost',
  user: process.env.MARIADB_ROOT_USER,
  password: process.env.MARIADB_ROOT_PASSWORD,
  database: process.env.MARIADB_DATABASE,
  port: Number(process.env.MARIADB_PORT),
  dateStrings: true,
  waitForConnections: true,
  connectionLimit: 10,
});

export const doQuery = async <R>(doWork: (connection: Connection) => Promise<R>): Promise<R> => {
  const connection = await connectionPromise.getConnection();
  return doWork(connection);
};
