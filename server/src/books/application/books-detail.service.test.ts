import { StatusCodes } from 'http-status-codes';

import { existingBook, nonExistingBook } from '../../fixture/books.fixture';
import HttpException from '../../utils/httpException';
import { findWithCategory } from '../domain/books.repository';
import getDetailBook from './books-detail.service';

jest.mock('../domain/books.repository.ts');

describe('BooksDetail service', () => {
  describe('getDetailBook', () => {
    context('도서 정보 id가 주어지면', () => {
      beforeEach(() => {
        (findWithCategory as jest.Mock).mockResolvedValue(existingBook);
      });
      it('해당 도서 정보를 반환한다.', async () => {
        const book = await getDetailBook(existingBook.id);

        expect(book).toEqual(existingBook);
      });
    });

    context('도서 정보 id가 올바르지 않으면', () => {
      beforeEach(() => {
        (findWithCategory as jest.Mock).mockResolvedValue(undefined);
      });
      it('Error를 던져야 한다.', async () => {
        await expect(getDetailBook(nonExistingBook.id))
          .rejects.toThrow(new HttpException(`${nonExistingBook.id} 해당하는 도서 정보를 찾을 수 없습니다.`, StatusCodes.NOT_FOUND));
      });
    });
  });
});
