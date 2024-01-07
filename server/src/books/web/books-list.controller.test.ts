import request from 'supertest';

import app from '../../app';
import { existingBooks } from '../../fixture/books.fixture';
import getAllBooks from '../application/books-list.service';

jest.mock('../application/books-list.service.ts');

describe('bookList Controller', () => {
  context('GET /books', () => {
    beforeEach(() => {
      (getAllBooks as jest.Mock).mockResolvedValue(existingBooks);
    });
    it('200 상태코드와 응답 메세지를 반환한다.', async () => {
      const { statusCode, body } = await request(app).get('/books');

      expect(statusCode).toBe(200);
      expect(body).toEqual({
        message: '도서 전체 조회에 성공했습니다.',
        books: existingBooks,
      });
    });
  });
});
