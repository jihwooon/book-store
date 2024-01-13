import HttpException from 'src/utils/httpException';

import { StatusCodes } from 'http-status-codes';

import { existingLike, nonExistingLike } from 'src/fixture/likes.fixture';

import { save } from '../domain/likes.repository';
import { addLike } from './add-like.service';

jest.mock('../domain/likes.repository.ts');

describe('addLike Service', () => {
  beforeEach(() => {
    (save as jest.Mock).mockResolvedValue(true);
  });
  context('사용자 id와 도서 정보 id가 좋아요 추가에 성공하면', () => {
    it('true를 반환한다.', async () => {
      const savedLike = await addLike(existingLike.userId, existingLike.likedBookId);

      expect(savedLike).toBe(true);
    });
  });

  context('사용자 id와 도서 정보 id가 좋아요 추가에 실패하면', () => {
    beforeEach(() => {
      (save as jest.Mock).mockResolvedValue(false);
    });
    it('error를 던져야 한다.', async () => {
      await expect(addLike(nonExistingLike.userId, nonExistingLike.likedBookId))
        .rejects.toThrow(new HttpException('좋아요 추가에 실패했습니다.', StatusCodes.BAD_REQUEST));
    });
  });
});
