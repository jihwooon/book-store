import { createConnection, Connection } from 'mysql2/promise';

const connectionPromise = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'BookStore',
  port: 3307,
  dateStrings: true,
});

const doQuery = async <R>(
  doWork: (connection: Connection) => Promise<R>,
): Promise<R> => {
  const connection = await connectionPromise;
  return doWork(connection);
};

export default doQuery;
