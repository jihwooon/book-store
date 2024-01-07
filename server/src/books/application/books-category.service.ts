import Book from '../domain/book';
import { findBookByCategory } from '../domain/books.repository';

const getBooksByCategory = async (categoryId: number): Promise<Book> => {
  const categories = await findBookByCategory(categoryId);
  if (!categories) {
    throw new Error(`해당 ${categoryId}를 찾을 수 없습니다.`);
  }

  return categories;
};

export default getBooksByCategory;
