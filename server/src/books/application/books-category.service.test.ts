import { booksCategory } from 'src/fixture/books.fixture';

import HttpException from 'src/utils/httpException';

import { StatusCodes } from 'http-status-codes';

import { when } from 'jest-when';

import { findByCategory } from '../domain/books.repository';
import getBooksByCategory from './books-category.service';

jest.mock('../domain/books.repository.ts');

describe('BooksCategory service', () => {
  const CATEGORY_ID = 1;
  const NON_CATEGORY_ID = 99999;
  const LIMIT = 1;
  const OFFSET = 2;
  const LIMIT_OVER = 99999;
  const OFFSET_OVER = 99999;

  describe('getDetailBook', () => {
    beforeEach(() => {
      when(findByCategory as jest.Mock)
        .calledWith(CATEGORY_ID, LIMIT, OFFSET)
        .mockResolvedValue({
          books: booksCategory,
          totalCount: booksCategory.length,
        });
    });
    context('도서 카테고리 id가 주어지면', () => {
      it('카테고리 id에 해당하는 도서 정보를 반환한다.', async () => {
        const { books, totalCount } = await getBooksByCategory(
          CATEGORY_ID,
          LIMIT,
          OFFSET,
        );

        expect(books).toEqual(booksCategory);
        expect(totalCount).toBe(booksCategory.length);
      });
    });

    context('도서 카테고리 id가 올바르지 않는 경우', () => {
      beforeEach(() => {
        (findByCategory as jest.Mock).mockResolvedValue({
          books: [],
          totalCount: 0,
        });
      });
      it('HttpException를 던져야 한다.', async () => {
        await expect(getBooksByCategory(
          NON_CATEGORY_ID,
          LIMIT_OVER,
          OFFSET_OVER,
        ))
          .rejects.toThrow(new HttpException(
            `해당 ${NON_CATEGORY_ID}를 찾을 수 없습니다.`,
            StatusCodes.NOT_FOUND,
          ));
      });
    });
  });
});
