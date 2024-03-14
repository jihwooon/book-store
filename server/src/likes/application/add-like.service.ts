import { validateToken } from 'src/users/jwt/jwt.provider';

import HttpException from 'src/utils/httpException';

import { StatusCodes } from 'http-status-codes';

import { save } from '../domain/likes.repository';

export const addLike = async (accessToken: any, likedBookId: number): Promise<boolean> => {
  const { userId } = validateToken(accessToken);

  const savedLike = await save({ userId, likedBookId });
  if (!savedLike) {
    throw new HttpException('좋아요 추가에 실패했습니다.', StatusCodes.BAD_REQUEST);
  }

  return savedLike;
};
