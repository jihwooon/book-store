import { StatusCodes } from 'http-status-codes';

import HttpException from 'src/utils/httpException';

import type Book from '../domain/book';
import { findWithCategory } from '../domain/books.repository';

const getDetailBook = async (id: number): Promise<Book> => {
  const book = await findWithCategory(id);
  if (!book) {
    throw new HttpException(`${id} 해당하는 도서 정보를 찾을 수 없습니다.`, StatusCodes.NOT_FOUND);
  }

  return book;
};

export default getDetailBook;
