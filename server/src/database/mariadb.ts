import { createPool, Connection } from 'mysql2/promise';

export const connectionPromise = createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'BookStore',
  port: 3307,
  dateStrings: true,
  waitForConnections: true,
  connectionLimit: 10,
});

export const doQuery = async <R>(
  doWork: (connection: Connection) => Promise<R>,
): Promise<R> => {
  const connection = await connectionPromise;
  return doWork(connection);
};
