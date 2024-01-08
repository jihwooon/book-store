import { StatusCodes } from 'http-status-codes';

import HttpException from '../../utils/httpException';
import Book from '../domain/book';
import { findBookWithCategory } from '../domain/books.repository';

const getDetailBook = async (id: number): Promise<Book> => {
  const book = await findBookWithCategory(id);
  if (!book) {
    throw new HttpException(`${id} 해당하는 도서 정보를 찾을 수 없습니다.`, StatusCodes.NOT_FOUND);
  }

  return book;
};

export default getDetailBook;
