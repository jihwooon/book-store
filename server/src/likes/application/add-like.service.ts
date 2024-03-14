import { StatusCodes } from 'http-status-codes';
import HttpException from 'src/utils/httpException';

import { validateToken } from 'src/users/jwt/jwt.provider';

import Like from '../domain/like';
import { save } from '../domain/likes.repository';

export const addLike = async (accessToken: any, likedBookId: number): Promise<boolean> => {
  const { userId } = validateToken(accessToken);
  const like = new Like({ userId, likedBookId });
  const likeData = like.getDataOfLike();

  const savedLike = await save(likeData);
  if (!savedLike) {
    throw new HttpException('좋아요 추가에 실패했습니다.', StatusCodes.BAD_REQUEST);
  }

  return savedLike;
};
