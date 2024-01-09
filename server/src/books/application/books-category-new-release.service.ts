import { StatusCodes } from 'http-status-codes';

import { newReleaseBook } from '../../fixture/books.fixture';
import HttpException from '../../utils/httpException';
import { findByCategoryAndNewRelease } from '../domain/books.repository';

export const getBooksByCategoryAndNewRelease = async (categoryId: number, news: boolean) => {
  if (!news) {
    throw new HttpException('신간 도서가 아닙니다.', StatusCodes.BAD_REQUEST);
  }

  const newReleaseBooks = findByCategoryAndNewRelease(categoryId);
  if (newReleaseBook.categoryId !== categoryId) {
    throw new HttpException(`${categoryId} 카테고리 정보를 찾을 수 없습니다.`, StatusCodes.NOT_FOUND);
  }

  return newReleaseBooks;
};
