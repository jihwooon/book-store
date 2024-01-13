import { type ResultSetHeader } from 'mysql2';

import logger from 'src/config/logger';

import { doQuery } from 'src/database/mariadb';

import type Like from './like';

const childLogger = logger.child({
  label: 'like.repository.ts',
});

export const save = async (likes: Like): Promise<boolean> => {
  try {
    await doQuery((connection) => connection.execute(
      `INSERT
         INTO likes (user_id, liked_book_id)
       VALUES (?, ?)`,
      [likes.getUserId(), likes.getLikedBookId()],
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

export const deleteByUserIdAndLikedBookId = async (
  userId: number,
  likedBookId: number,
): Promise<boolean> => {
  const [{ affectedRows }] = await doQuery(
    (connection) => connection.execute<ResultSetHeader>(
      `DELETE
         FROM likes
        WHERE user_id = ?
          AND liked_book_id = ?`,
      [userId, likedBookId],
    ),
  );

  if (affectedRows === 0) {
    childLogger.error(affectedRows);
    return false;
  }
  return affectedRows === 1;
};
