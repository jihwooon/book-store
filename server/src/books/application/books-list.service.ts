import { findAll } from '../domain/books.repository';

const getAllBooks = async (limit: number, currentPage: number) => {
  const { books, totalCount } = await findAll(limit, currentPage);

  return {
    books,
    totalCount,
  };
};

export default getAllBooks;
