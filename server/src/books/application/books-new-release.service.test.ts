import { StatusCodes } from 'http-status-codes';

import { newNewReleaseBooks } from '../../fixture/books.fixture';
import { findByNewRelease } from '../domain/books.repository';
import { getAllBooksByNewRelease } from './books-new-release.service';

import HttpException from '../../utils/httpException';

jest.mock('../domain/books.repository.ts');

describe('BooksNewRelease service', () => {
  beforeEach(() => {
    (findByNewRelease as jest.Mock).mockResolvedValue(newNewReleaseBooks);
  });
  describe('getAllBooksByNewRelease', () => {
    context('신간 true인 경우', () => {
      it('최신 신간 도서 목록를 반환한다.', async () => {
        const newReleaseBooksMock = await getAllBooksByNewRelease(true);

        expect(newReleaseBooksMock).toEqual(newNewReleaseBooks);
      });
    });

    context('신간 true이지만 신간 도서 목록을 찾을 수 없는 경우', () => {
      beforeEach(() => {
        (findByNewRelease as jest.Mock).mockResolvedValue([]);
      });
      it('HttpException을 던져야 한다.', async () => {
        await expect(getAllBooksByNewRelease(true))
          .rejects.toThrow(new HttpException('현재 신간 도서 목록이 없습니다.', StatusCodes.NOT_FOUND));
      });
    });

    context('신간 false인 경우', () => {
      it('HttpException을 던져야 한다.', async () => {
        await expect(getAllBooksByNewRelease(false))
          .rejects.toThrow(new HttpException('신간 목록 조회하는 요청이 올바르지 않습니다.', StatusCodes.BAD_REQUEST));
      });
    });
  });
});
