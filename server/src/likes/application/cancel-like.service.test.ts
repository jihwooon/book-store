import HttpException from 'src/utils/httpException';

import { StatusCodes } from 'http-status-codes';

import { existingLike, nonExistingLike } from 'src/fixture/likes.fixture';

import { when } from 'jest-when';

import { deleteByUserIdAndLikedBookId } from '../domain/likes.repository';
import { cancelLike } from './cancel-like.service';

jest.mock('../domain/likes.repository.ts');

describe('cancelLike Service', () => {
  beforeEach(() => {
    when(deleteByUserIdAndLikedBookId as jest.Mock)
      .calledWith(existingLike.userId, existingLike.likedBookId)
      .mockResolvedValue(true);
  });
  context('사용자 id와 도서 정보 id가 좋아요 취소에 성공하면', () => {
    it('true를 반환한다.', async () => {
      const canceledLike = await cancelLike(existingLike.userId, existingLike.likedBookId);

      expect(canceledLike).toBe(true);
    });
  });

  context('사용자 id와 도서 정보 id가 좋아요 취소에 실패하면', () => {
    it('error를 던져야 한다.', async () => {
      await expect(cancelLike(nonExistingLike.userId, nonExistingLike.likedBookId)).rejects.toThrow(
        new HttpException('좋아요 취소에 실패했습니다.', StatusCodes.BAD_REQUEST),
      );
    });
  });
});
