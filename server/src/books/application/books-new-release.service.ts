import { StatusCodes } from 'http-status-codes';
import HttpException from 'src/utils/httpException';

import { findByNewRelease } from '../domain/books.repository';

export const getAllBooksByNewRelease = async (news: boolean) => {
  if (!news) {
    throw new HttpException('신간 목록 조회하는 요청이 올바르지 않습니다.', StatusCodes.BAD_REQUEST);
  }

  const newReleaseBooks = await findByNewRelease();
  if (newReleaseBooks.length === 0) {
    throw new HttpException('현재 신간 도서 목록이 없습니다.', StatusCodes.NOT_FOUND);
  }

  return newReleaseBooks;
};
