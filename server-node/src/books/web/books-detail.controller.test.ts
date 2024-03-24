import request from 'supertest';

import app from 'src/app';
import { bookData, existingBook, nonExistingBook } from 'src/fixture/books.fixture';

import { when } from 'jest-when';

import HttpException from 'src/utils/httpException';

import { StatusCodes } from 'http-status-codes';

import { existingUser, nonExistingUser } from 'src/fixture/user.fixture';

import getDetailBook from '../application/books-detail.service';

jest.mock('../application/books-detail.service.ts');

describe('bookDetail Controller', () => {
  describe('GET /books/{bookId}', () => {
    beforeEach(() => {
      when(getDetailBook as jest.Mock)
        .calledWith(existingUser.id, existingBook.getId())
        .mockReturnValue(bookData);
    });
    context('도서 정보 id가 입력되면', () => {
      it('200 상태코드와 도서 정보를 반환한다', async () => {
        const { statusCode, body } = await request(app)
          .get(`/books/${existingBook.getId()}`)
          .send({ userId: existingUser.id });

        expect(statusCode).toBe(200);
        expect(body).toEqual(bookData);
      });
    });

    context('도서 정보 id로 찾을 수 없을 경우', () => {
      beforeEach(() => {
        when(getDetailBook as jest.Mock)
          .calledWith(nonExistingUser.id, nonExistingBook.getId())
          .mockRejectedValue(
            new HttpException(
              `${nonExistingBook.getId()} 해당하는 도서 정보를 찾을 수 없습니다.`,
              StatusCodes.NOT_FOUND,
            ),
          );
      });
      it('404 상태코드와 에러 메시지를 반환한다', async () => {
        const {
          statusCode,
          body: { message },
        } = await request(app).get(`/books/${nonExistingBook.getId()}`).send({ userId: nonExistingUser.id });

        expect(statusCode).toBe(404);
        expect(message).toEqual(`${nonExistingBook.getId()} 해당하는 도서 정보를 찾을 수 없습니다.`);
      });
    });
  });
});
