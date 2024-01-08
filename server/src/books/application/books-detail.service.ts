import Book from '../domain/book';
import { findBookWithCategory } from '../domain/books.repository';

const getDetailBook = async (id: number): Promise<Book> => {
  const book = await findBookWithCategory(id);
  if (!book) {
    throw new Error(`해당 ${id}의 도서 정보를 찾을 수 없습니다.`);
  }

  return book;
};

export default getDetailBook;
