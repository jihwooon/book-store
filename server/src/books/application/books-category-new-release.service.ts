import HttpException from 'src/utils/httpException';

import { StatusCodes } from 'http-status-codes';

import { findByCategoryAndNewRelease } from '../domain/books.repository';

export const getBooksByCategoryAndNewRelease = async (categoryId: number) => {
  const newReleaseBooks = await findByCategoryAndNewRelease(categoryId);

  const isCategory = newReleaseBooks.some((book) => book.getCategoryId() === categoryId);
  if (!isCategory) {
    throw new HttpException(`${categoryId} 카테고리 정보를 찾을 수 없습니다.`, StatusCodes.NOT_FOUND);
  }

  return newReleaseBooks;
};
