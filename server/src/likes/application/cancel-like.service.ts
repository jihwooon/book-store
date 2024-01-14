import { StatusCodes } from 'http-status-codes';
import HttpException from 'src/utils/httpException';

import { deleteByUserIdAndLikedBookId } from '../domain/likes.repository';

export const cancelLike = async (
  userId: number,
  likedBookId: number,
): Promise<boolean> => {
  const canceledLike = await deleteByUserIdAndLikedBookId(userId, likedBookId);
  if (!canceledLike) {
    throw new HttpException('좋아요 취소에 실패했습니다.', StatusCodes.BAD_REQUEST);
  }

  return canceledLike;
};
