import { type ResultSetHeader } from 'mysql2';
import logger from 'src/config/logger';
import { doQuery } from 'src/database/mariadb';

const childLogger = logger.child({
  label: 'delivery.repository.ys',
});

export const save = async ({
  address,
  receiver,
  contact,
}: {
  address: string;
  receiver: string;
  contact: string;
}): Promise<number> => {
  const [{ insertId }] = await doQuery((connection) =>
    connection.execute<ResultSetHeader>(
      `INSERT
		   INTO delivery (address, receiver, contact)
		 VALUES (?, ?, ?)`,
      [address, receiver, contact],
    ),
  );

  if (insertId === 0) {
    childLogger.error('Fail Save Repository');
    throw new Error('저장에 실패하였습니다.');
  }

  return insertId;
};
