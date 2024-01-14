import { existingBook, nonExistingBook } from 'src/fixture/books.fixture';

import { StatusCodes } from 'http-status-codes';
import HttpException from 'src/utils/httpException';

import { when } from 'jest-when';

import { findWithCategory } from '../domain/books.repository';
import getDetailBook from './books-detail.service';

jest.mock('../domain/books.repository.ts');

describe('BooksDetail service', () => {
  describe('getDetailBook', () => {
    beforeEach(() => {
      when(findWithCategory as jest.Mock)
        .calledWith(existingBook.getId())
        .mockResolvedValue(existingBook);
    });

    context('도서 정보 id가 주어지면', () => {
      it('해당 도서 정보를 반환한다.', async () => {
        const book = await getDetailBook(existingBook.getId());

        expect(book).toEqual(existingBook);
      });
    });

    context('도서 정보 id가 올바르지 않으면', () => {
      it('Error를 던져야 한다.', async () => {
        await expect(getDetailBook(nonExistingBook.getId()))
          .rejects.toThrow(
            new HttpException(
              `${nonExistingBook.getId()} 해당하는 도서 정보를 찾을 수 없습니다.`,
              StatusCodes.NOT_FOUND,
            ),
          );
      });
    });
  });
});
