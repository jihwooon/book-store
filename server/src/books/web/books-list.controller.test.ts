/* eslint-disable jest/no-identical-title */
import request from 'supertest';

import { StatusCodes } from 'http-status-codes';

import {
  bookLimit,
  existingBook,
  newNewReleaseBooks, newReleaseBook, notNewReleaseBook,
} from 'src/fixture/books.fixture';

import app from 'src/app';

import HttpException from 'src/utils/httpException';

import { getBooksByCategoryAndNewRelease } from '../application/books-category-new-release.service';
import getBooksByCategory from '../application/books-category.service';

import getAllBooks from '../application/books-list.service';
import { getAllBooksByNewRelease } from '../application/books-new-release.service';

jest.mock('../application/books-list.service.ts');
jest.mock('../application/books-category.service.ts');
jest.mock('../application/books-category-new-release.service.ts');
jest.mock('../application/books-new-release.service.ts');

describe('bookList Controller', () => {
  describe('GET /books', () => {
    context('쿼리 파라미터에 limit=3, currentPage=2가 주어지면', () => {
      beforeEach(() => {
        (getAllBooks as jest.Mock).mockResolvedValue({ books: bookLimit, totalCount: 3 });
      });
      it('200 상태코드와 도서 목록, totalCount를 반환한다.', async () => {
        const { statusCode, body } = await request(app).get('/books')
          .query({ limit: '3', currentPage: '2' });

        expect(statusCode).toBe(200);
        expect(body).toEqual({
          data: {
            books: bookLimit,
            totalCount: 3,
          },
        });
      });
    });
  });

  context('GET /books?category_id', () => {
    beforeEach(() => {
      (getBooksByCategory as jest.Mock).mockResolvedValue(existingBook);
    });
    it('200 상태코드를 반환한다.', async () => {
      const { statusCode, body } = await request(app).get('/books').query({ category_id: '1' });

      expect(statusCode).toBe(200);
      expect(body).toEqual({
        data: existingBook,
      });
    });
  });

  describe('GET /books?category_id&news', () => {
    context('사용자가 카테고리 id와 신간 조회한 경우', () => {
      beforeEach(() => {
        (getBooksByCategoryAndNewRelease as jest.Mock).mockResolvedValue(newReleaseBook);
      });
      it('200 상태코드를 반환한다.', async () => {
        const { statusCode, body } = await request(app).get('/books?category_id&news')
          .query({ category_id: '1', news: true });

        expect(statusCode).toBe(200);
        expect(body).toEqual({
          data: newReleaseBook,
        });
      });
    });

    context('사용자가 신간 조회를 비정상적으로 입력된 경우', () => {
      beforeEach(() => {
        (getBooksByCategoryAndNewRelease as jest.Mock)
          .mockRejectedValue(new HttpException('신간 도서가 아닙니다.', StatusCodes.BAD_REQUEST));
      });
      it('400 상태코드를 반환한다.', async () => {
        const { statusCode, body } = await request(app).get('/books?category_id&news')
          .query({ category_id: '1', news: false });

        expect(statusCode).toBe(400);
        expect(body).toEqual({
          message: '신간 도서가 아닙니다.',
          status: 400,
          timestamp: expect.any(String),
        });
      });
    });

    context('사용자가 비정상적으로 카테고리 정보가 입력된 경우', () => {
      beforeEach(() => {
        (getBooksByCategoryAndNewRelease as jest.Mock)
          .mockRejectedValue(
            new HttpException(`${notNewReleaseBook.categoryId} 카테고리 정보를 찾을 수 없습니다.`, StatusCodes.NOT_FOUND),
          );
      });
      it('404 상태코드를 반환한다.', async () => {
        const { statusCode, body } = await request(app).get('/books?category_id&news')
          .query({ category_id: notNewReleaseBook.categoryId, news: true });

        expect(statusCode).toBe(404);
        expect(body).toEqual({
          message: `${notNewReleaseBook.categoryId} 카테고리 정보를 찾을 수 없습니다.`,
          status: 404,
          timestamp: expect.any(String),
        });
      });
    });
  });

  describe('GET /books?&news', () => {
    context('사용자가 신간을 조회 성공하는 경우', () => {
      beforeEach(() => {
        (getAllBooksByNewRelease as jest.Mock).mockResolvedValue(newNewReleaseBooks);
      });
      it('200 상태코드를 반환한다.', async () => {
        const { statusCode, body } = await request(app).get('/books?news')
          .query({ news: true });

        expect(statusCode).toBe(200);
        expect(body).toEqual({
          data: newNewReleaseBooks,
        });
      });
    });
  });
});
