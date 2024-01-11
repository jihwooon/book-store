import { books } from 'src/fixture/books.fixture';

import { findAll } from '../domain/books.repository';
import getAllBooks from './books-list.service';

jest.mock('../domain/books.repository.ts');

describe('BooksList service', () => {
  const limit = 0;
  const offset = 2;

  describe('getAllBooks', () => {
    beforeEach(() => {
      (findAll as jest.Mock).mockResolvedValue({
        books,
        totalCount: 4,
      });
    });
    it('도서 목록과 도서 목록 전체 갯수를 반환한다.', async () => {
      const { books, totalCount } = await getAllBooks(limit, offset);

      expect(books).toEqual(books);
      expect(totalCount).toBe(4);
    });
  });
});
