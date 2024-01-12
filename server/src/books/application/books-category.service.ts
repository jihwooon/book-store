import { StatusCodes } from 'http-status-codes';

import HttpException from 'src/utils/httpException';

import type Book from '../domain/book';
import { findByCategory } from '../domain/books.repository';

const getBooksByCategory = async (
  categoryId: number,
  limit: number,
  currentPage: number,
): Promise<{ books: Book[], totalCount: number }> => {
  const { books, totalCount } = await findByCategory(categoryId, limit, currentPage);
  if (books.length === 0) {
    throw new HttpException(`해당 ${categoryId}를 찾을 수 없습니다.`, StatusCodes.NOT_FOUND);
  }

  return {
    books,
    totalCount,
  };
};

export default getBooksByCategory;
