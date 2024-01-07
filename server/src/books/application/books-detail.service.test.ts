import { existingBook, nonExistingBook } from '../../fixture/books.fixture';
import { findById } from '../domain/books.repository';
import getDetailBook from './books-detail.service';

jest.mock('../domain/books.repository.ts');

describe('BooksDetail service', () => {
  describe('getDetailBook', () => {
    context('도서 정보 id가 주어지면', () => {
      beforeEach(() => {
        (findById as jest.Mock).mockResolvedValue(existingBook);
      });
      it('해당 도서 정보를 반환한다.', async () => {
        const book = await getDetailBook(existingBook.id);

        expect(book).toEqual(existingBook);
      });
    });

    context('도서 정보 id가 올바르지 않으면', () => {
      beforeEach(() => {
        (findById as jest.Mock).mockResolvedValue(undefined);
      });
      it('Error를 던져야 한다.', async () => {
        await expect(getDetailBook(nonExistingBook.id))
          .rejects.toThrow(Error(`해당 ${nonExistingBook.id}의 도서 정보를 찾을 수 없습니다.`));
      });
    });
  });
});
