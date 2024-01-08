import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import getDetailBook from '../application/books-detail.service';

const getBooksHandler = async ({ params: { id } }: Request, res: Response) => {
  try {
    const book = await getDetailBook(Number(id));

    return res.status(StatusCodes.OK).json({
      message: '도서 조회에 성공했습니다.',
      data: book,
    });
  } catch (error) {
    return res.status(StatusCodes.NOT_FOUND).json({
      message: error.message,
    });
  }
};

export default getBooksHandler;
