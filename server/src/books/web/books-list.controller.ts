import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import getAllBooks from '../application/books-list.service';

const getAllBooksHandler = async (req: Request, res: Response) => {
  const books = await getAllBooks();

  res.status(StatusCodes.OK).json({
    message: '도서 전체 조회에 성공했습니다.',
    books,
  });
};

export default getAllBooksHandler;
