import { StatusCodes } from 'http-status-codes';
import HttpException from 'src/utils/httpException';

import { findByNewRelease } from '../domain/books.repository';

export const getAllBooksByNewRelease = async () => {
  const newReleaseBooks = await findByNewRelease();
  if (newReleaseBooks.length === 0) {
    throw new HttpException('현재 신간 도서 목록이 없습니다.', StatusCodes.NOT_FOUND);
  }

  return newReleaseBooks;
};
