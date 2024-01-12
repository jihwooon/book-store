import { recentBooks } from 'src/fixture/books.fixture';

import HttpException from 'src/utils/httpException';

import { StatusCodes } from 'http-status-codes';

import { findByNewRelease } from '../domain/books.repository';
import { getAllBooksByNewRelease } from './books-new-release.service';

jest.mock('../domain/books.repository.ts');

describe('BooksNewRelease service', () => {
  const LIMIT = 1;
  const OFFSET = 2;
  const LIMIT_OVER = 99999;
  const OFFSET_OVER = 99999;

  describe('getAllBooksByNewRelease', () => {
    beforeEach(() => {
      (findByNewRelease as jest.Mock).mockResolvedValue({
        books: recentBooks,
        totalCount: recentBooks.length,
      });
    });
    context('신간 조회 요청에 성공하면', () => {
      it('출간일 30일 이내 도서 목록을 반환한다.', async () => {
        const { books, totalCount } = await getAllBooksByNewRelease(LIMIT, OFFSET);

        expect(books).toEqual(recentBooks);
        expect(totalCount).toBe(1);
      });
    });

    context('출간일 30일 이내 도서 목록을 찾을 수 없는 경우', () => {
      beforeEach(() => {
        (findByNewRelease as jest.Mock).mockResolvedValue({
          books: [],
          totalCount: 0,
        });
      });
      it('HttpException을 던져야 한다.', async () => {
        await expect(getAllBooksByNewRelease(LIMIT_OVER, OFFSET_OVER))
          .rejects.toThrow(new HttpException('현재 신간 도서 목록이 없습니다.', StatusCodes.NOT_FOUND));
      });
    });
  });
});
