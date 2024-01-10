import { existingBooks } from 'src/fixture/books.fixture';

import { findAll } from '../domain/books.repository';
import getAllBooks from './books-list.service';

jest.mock('../domain/books.repository.ts');

describe('BooksList service', () => {
  describe('getAllBooks', () => {
    beforeEach(() => {
      (findAll as jest.Mock).mockResolvedValue(existingBooks);
    });
    it('도서 목록을 반환한다.', async () => {
      const books = await getAllBooks();

      expect(books).toEqual(existingBooks);
    });
  });
});
