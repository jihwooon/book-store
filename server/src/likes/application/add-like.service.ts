import { StatusCodes } from 'http-status-codes';
import HttpException from 'src/utils/httpException';

import Like from '../domain/like';
import { save } from '../domain/likes.repository';

export const addLike = async (userId: number, likedBookId: number): Promise<boolean> => {
  const like = new Like({
    userId,
    likedBookId,
  });
  const savedLike = await save(like);
  if (!savedLike) {
    throw new HttpException('좋아요 추가에 실패했습니다.', StatusCodes.BAD_REQUEST);
  }

  return savedLike;
};
