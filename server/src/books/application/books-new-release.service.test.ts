import { StatusCodes } from 'http-status-codes';

import { newReleaseBook, notNewReleaseBook } from '../../fixture/books.fixture';
import { getBooksByNewRelease } from './books-new-release.service';

import HttpException from '../../utils/httpException';
import { findByBookNewRelease } from '../domain/books.repository';

jest.mock('../domain/books.repository.ts');

describe('BooksNewRelease service', () => {
  describe('getBooksByNewRelease', () => {
    beforeEach(() => {
      (findByBookNewRelease as jest.Mock).mockResolvedValue(newReleaseBook);
    });
    context('카테고리 id와 신간이 존재하면', () => {
      it('최신 신간 목록 도서 정보를 반환한다.', async () => {
        const newReleaseBooks = await getBooksByNewRelease(newReleaseBook.categoryId, true);

        expect(newReleaseBooks).toEqual(newReleaseBook);
      });
    });

    context('카테고리 id가 주어지고 신간이 존재하지 않으면', () => {
      it('HttpException을 던져야 한다.', async () => {
        await expect(getBooksByNewRelease(newReleaseBook.categoryId, false)).rejects.toThrow(
          new HttpException('신간 도서가 아닙니다.', StatusCodes.BAD_REQUEST),
        );
      });
    });

    context('카테고리 id가 올바르게 주어지지 않으면', () => {
      it('HttpException을 던져야 한다.', async () => {
        await expect(getBooksByNewRelease(notNewReleaseBook.categoryId, true)).rejects.toThrow(
          new HttpException(`${notNewReleaseBook.categoryId} 카테고리 정보를 찾을 수 없습니다.`, StatusCodes.NOT_FOUND),
        );
      });
    });
  });
});
