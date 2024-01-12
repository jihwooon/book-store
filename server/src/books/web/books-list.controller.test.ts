/* eslint-disable jest/no-identical-title */
import request from 'supertest';

import { StatusCodes } from 'http-status-codes';

import {
  bookLimit,
  existingBook,
  notNewReleaseBook,
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
  const LIMIT = 4;
  const CURRENT_PAGE = 0;
  const LIMIT_OVER = 9999;
  const CURRENT_PAGE_OVER = 9999;

  describe('GET /books', () => {
    context('쿼리 파라미터에 limit=3, currentPage=2가 주어지면', () => {
      beforeEach(() => {
        (getAllBooks as jest.Mock).mockResolvedValue({ books: bookLimit, totalCount: 3 });
      });
      it('200 상태코드와 도서 목록, totalCount를 반환한다.', async () => {
        const { statusCode, body } = await request(app).get('/books')
          .query({ limit: LIMIT, currentPage: CURRENT_PAGE });

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
    context('쿼리 파라미터에 카테고리와 신간 true, limit=4, currentPage=0가 주어지면', () => {
      beforeEach(() => {
        (getBooksByCategoryAndNewRelease as jest.Mock).mockResolvedValue({
          books: bookLimit, totalCount: bookLimit.length,
        });
      });
      it('200 상태코드와 도서 목록, totalCount를 반환한다.', async () => {
        const { statusCode, body: { data } } = await request(app).get('/books?category_id&news')
          .query({
            category_id: 1, news: true, limit: LIMIT, currentPage: CURRENT_PAGE,
          });

        expect(statusCode).toBe(200);
        expect(data).toEqual({
          books: bookLimit,
          totalCount: bookLimit.length,
        });
      });
    });

    context('쿼리 파라미터에 존재하지 않는 카테고리가 주어지면', () => {
      beforeEach(() => {
        (getBooksByCategoryAndNewRelease as jest.Mock)
          .mockRejectedValue(
            new HttpException(`${notNewReleaseBook.categoryId} 카테고리 정보를 찾을 수 없습니다.`, StatusCodes.NOT_FOUND),
          );
      });
      it('404 상태코드와 에러 메시지를 반환한다.', async () => {
        const { statusCode, body } = await request(app).get('/books?category_id&news')
          .query({
            category_id: notNewReleaseBook.categoryId,
            news: true,
            limit: LIMIT_OVER,
            currentPage: CURRENT_PAGE_OVER,
          });

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
    context('쿼리 파라미터에 limit=4, currentPage=0가 주어지면', () => {
      beforeEach(() => {
        (getAllBooksByNewRelease as jest.Mock).mockResolvedValue({
          books: bookLimit,
          totalCount: bookLimit.length,
        });
      });
      it('200 상태코드를 반환한다.', async () => {
        const { statusCode, body } = await request(app).get('/books?news')
          .query({ news: true, limit: LIMIT, currentPage: CURRENT_PAGE });

        expect(statusCode).toBe(200);
        expect(body).toEqual({
          data: {
            books: bookLimit,
            totalCount: bookLimit.length,
          },
        });
      });
    });

    context('쿼리 파라미터에 신간 목록이 존재하지 않으면', () => {
      beforeEach(() => {
        (getAllBooksByNewRelease as jest.Mock).mockRejectedValue(
          new HttpException('현재 신간 도서 목록이 없습니다.', StatusCodes.NOT_FOUND),
        );
      });
      it('404 상태코드를 반환한다.', async () => {
        const { statusCode, body } = await request(app).get('/books?news')
          .query({ news: false, limit: LIMIT_OVER, currentPage: CURRENT_PAGE_OVER });

        expect(statusCode).toBe(404);
        expect(body).toEqual({
          message: '현재 신간 도서 목록이 없습니다.',
          status: 404,
          timestamp: expect.any(String),
        });
      });
    });
  });
});
