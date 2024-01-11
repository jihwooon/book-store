import { newReleaseExistingBook, notNewReleaseBook } from 'src/fixture/books.fixture';

import { StatusCodes } from 'http-status-codes';
import HttpException from 'src/utils/httpException';

import { findByCategoryAndNewRelease } from '../domain/books.repository';

import { getBooksByCategoryAndNewRelease } from './books-category-new-release.service';

jest.mock('../domain/books.repository.ts');

describe('BooksCategoryAndNewRelease Service', () => {
  const CATEGORY_ID = 1;

  describe('GetBooksByCategoryAndNewRelease', () => {
    beforeEach(() => {
      (findByCategoryAndNewRelease as jest.Mock).mockResolvedValue(newReleaseExistingBook);
    });
    context('카테고리 id와 신간이 존재하면', () => {
      it('최신 신간 목록 도서 정보를 반환한다.', async () => {
        const newReleaseBooks = await getBooksByCategoryAndNewRelease(
          CATEGORY_ID,
        );

        expect(newReleaseBooks).toEqual(newReleaseExistingBook);
      });
    });

    context('카테고리 id가 올바르게 주어지지 않으면', () => {
      it('HttpException을 던져야 한다.', async () => {
        await expect(getBooksByCategoryAndNewRelease(
          notNewReleaseBook.categoryId,
        )).rejects.toThrow(
          new HttpException(`${notNewReleaseBook.categoryId} 카테고리 정보를 찾을 수 없습니다.`, StatusCodes.NOT_FOUND),
        );
      });
    });
  });
});
