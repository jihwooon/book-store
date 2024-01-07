import { findAll } from '../domain/books.repository';

const getAllBooks = async () => {
  const books = await findAll();

  return books;
};

export default getAllBooks;
