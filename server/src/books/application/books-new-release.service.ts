import { StatusCodes } from 'http-status-codes';
import HttpException from 'src/utils/httpException';

import Book from '../domain/book';
import { findByNewRelease } from '../domain/books.repository';

export const getAllBooksByNewRelease = async (
  limit: number,
  currentPage: number,
): Promise<{ books: Book[], totalCount: number }> => {
  const { books, totalCount } = await findByNewRelease(limit, currentPage);
  if (books.length === 0) {
    throw new HttpException('현재 신간 도서 목록이 없습니다.', StatusCodes.NOT_FOUND);
  }

  return {
    books,
    totalCount,
  };
};
