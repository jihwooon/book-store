import { StatusCodes } from 'http-status-codes';

import HttpException from 'src/utils/httpException';

import Book from '../domain/book';
import { findByCategory } from '../domain/books.repository';

const getBooksByCategory = async (categoryId: number): Promise<Book> => {
  const categories = await findByCategory(categoryId);
  if (!categories) {
    throw new HttpException(`해당 ${categoryId}를 찾을 수 없습니다.`, StatusCodes.NOT_FOUND);
  }

  return categories;
};

export default getBooksByCategory;
