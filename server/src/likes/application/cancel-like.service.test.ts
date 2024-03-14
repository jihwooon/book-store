import HttpException from 'src/utils/httpException';

import { StatusCodes } from 'http-status-codes';

import { existingLike, nonExistingLike } from 'src/fixture/likes.fixture';

import { when } from 'jest-when';

import { ACCESS_TOKEN } from 'src/fixture/jwt.fixture';

import { validateToken } from 'src/users/jwt/jwt.provider';

import { deleteByUserIdAndLikedBookId } from '../domain/likes.repository';
import { cancelLike } from './cancel-like.service';

jest.mock('../domain/likes.repository.ts');
jest.mock('../../users/jwt/jwt.provider.ts');

describe('cancelLike Service', () => {
  beforeEach(() => {
    when(validateToken as jest.Mock).mockResolvedValue({ userId: existingLike.userId });
    when(deleteByUserIdAndLikedBookId as jest.Mock).mockResolvedValue(true);
  });
  context('사용자 id와 도서 정보 id가 좋아요 취소에 성공하면', () => {
    it('true를 반환한다.', async () => {
      const canceledLike = await cancelLike(ACCESS_TOKEN, existingLike.likedBookId);

      expect(canceledLike).toBe(true);
    });
  });

  context('사용자 id와 도서 정보 id가 좋아요 취소에 실패하면', () => {
    beforeEach(() => {
      when(deleteByUserIdAndLikedBookId as jest.Mock).mockResolvedValue(false);
    });
    it('error를 던져야 한다.', async () => {
      await expect(cancelLike(ACCESS_TOKEN, nonExistingLike.likedBookId)).rejects.toThrow(
        new HttpException('좋아요 취소에 실패했습니다.', StatusCodes.BAD_REQUEST),
      );
    });
  });
});
