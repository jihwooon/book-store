import { when } from 'jest-when';

import { existingBook, nonExistingBook } from '../../fixture/books.fixture';

import { findBookByCategory } from '../domain/books.repository';
import getBooksByCategory from './books-category.service';

jest.mock('../domain/books.repository.ts');

describe('BooksCategory service', () => {
  describe('getDetailBook', () => {
    beforeEach(() => {
      when(findBookByCategory as jest.Mock)
        .calledWith(existingBook.categoryId)
        .mockResolvedValue(existingBook);
    });
    context('도서 카테고리 id가 주어지면', () => {
      it('카테고리 id에 해당하는 도서 정보를 반환한다.', async () => {
        const book = await getBooksByCategory(existingBook.categoryId);

        expect(book).toEqual(existingBook);
      });
    });

    context('도서 카테고리 id가 올바르지 않는 경우', () => {
      beforeEach(() => {
        when(findBookByCategory as jest.Mock)
          .calledWith(nonExistingBook.categoryId)
          .mockRejectedValue(Error(`해당 ${nonExistingBook.categoryId}를 찾을 수 없습니다.`));
      });
      it('Error를 던져야 한다.', async () => {
        await expect(getBooksByCategory(nonExistingBook.categoryId)).rejects.toThrow(Error(`해당 ${nonExistingBook.categoryId}를 찾을 수 없습니다.`));
      });
    });
  });
});
