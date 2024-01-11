import { StatusCodes } from 'http-status-codes';

import HttpException from 'src/utils/httpException';

import { recentBooks as latestBooks } from 'src/fixture/books.fixture';

import { findByNewRelease } from '../domain/books.repository';
import { getAllBooksByNewRelease } from './books-new-release.service';

jest.mock('../domain/books.repository.ts');

describe('BooksNewRelease service', () => {
  beforeEach(() => {
    (findByNewRelease as jest.Mock).mockResolvedValue(latestBooks);
  });
  describe('getAllBooksByNewRelease', () => {
    context('신간 조회 요청에 성공하면', () => {
      it('출간일 30일 이내 도서 목록을 반환한다.', async () => {
        const newReleaseBooksMock = await getAllBooksByNewRelease();

        expect(newReleaseBooksMock).toEqual(latestBooks);
      });
    });

    context('출간일 30일 이내 도서 목록을 찾을 수 없는 경우', () => {
      beforeEach(() => {
        (findByNewRelease as jest.Mock).mockResolvedValue([]);
      });
      it('HttpException을 던져야 한다.', async () => {
        await expect(getAllBooksByNewRelease())
          .rejects.toThrow(new HttpException('현재 신간 도서 목록이 없습니다.', StatusCodes.NOT_FOUND));
      });
    });
  });
});
