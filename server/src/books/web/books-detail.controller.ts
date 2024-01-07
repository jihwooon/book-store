import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import getDetailBook from '../application/books-detail.service';

const getBooksHandler = async ({ params: { id } }: Request, res: Response) => {
  const book = await getDetailBook(Number(id));
  if (!book) {
    return res.status(StatusCodes.NOT_FOUND).json({
      message: `해당 ${id}의 도서 정보를 찾을 수 없습니다.`,
    });
  }

  return res.status(StatusCodes.OK).json({
    message: '도서 조회에 성공했습니다.',
    data: book,
  });
};

export default getBooksHandler;
