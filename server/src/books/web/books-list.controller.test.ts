/* eslint-disable jest/no-identical-title */
import request from 'supertest';

import app from '../../app';
import { existingBook, existingBooks } from '../../fixture/books.fixture';
import getAllBooks from '../application/books-list.service';
import getBooksByCategory from '../application/books-category.service';

jest.mock('../application/books-list.service.ts');
jest.mock('../application/books-category.service.ts');

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
        data: existingBooks,
      });
    });
  });

  context('GET /books?category_id', () => {
    beforeEach(() => {
      (getBooksByCategory as jest.Mock).mockResolvedValue(existingBook);
    });
    it('200 상태코드와 응답 메세지를 반환한다.', async () => {
      const { statusCode, body } = await request(app).get('/books').query({ category_id: '1' });

      expect(statusCode).toBe(200);
      expect(body).toEqual({
        message: '도서 카테고리 목록 조회에 성공했습니다.',
        data: existingBook,
      });
    });
  });
});
