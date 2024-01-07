import request from 'supertest';

import { when } from 'jest-when';

import app from '../../app';

import { existingBook, nonExistingBook } from '../../fixture/books.fixture';
import getDetailBook from '../application/books-detail.service';

jest.mock('../application/books-detail.service.ts');

describe('bookDetail Controller', () => {
  describe('GET /books/{bookId}', () => {
    beforeEach(() => {
      when(getDetailBook as jest.Mock).calledWith(existingBook.id).mockReturnValue(existingBook);
    });
    context('도서 Id가 입력되면', () => {
      it('200 상태코드와 메시지를 반환한다', async () => {
        const { statusCode, body } = await request(app).get(`/books/${existingBook.id}`);

        expect(statusCode).toBe(200);
        expect(body).toEqual(
          {
            message: '도서 조회에 성공했습니다.',
            data: existingBook,
          },
        );
      });
    });

    context('도서 정보 id로 찾을 수 없을 경우', () => {
      beforeEach(() => {
        when(getDetailBook as jest.Mock).calledWith(nonExistingBook.id).mockReturnValue(undefined);
      });
      it('404 상태코드와 에러 메시지를 반환한다', async () => {
        const { statusCode, body } = await request(app).get(`/books/${nonExistingBook.id}`);

        expect(statusCode).toBe(404);
        expect(body).toEqual(
          {
            message: `해당 ${nonExistingBook.id}의 도서 정보를 찾을 수 없습니다.`,
          },
        );
      });
    });
  });
});
