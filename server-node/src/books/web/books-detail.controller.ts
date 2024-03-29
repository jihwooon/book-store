import { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ResponseHandler } from 'src/utils/responseHandler';

import getDetailBook from '../application/books-detail.service';

const getBooksHandler = async ({ params: { id }, body: { userId } }: Request, res: Response) => {
  ResponseHandler(() => getDetailBook(Number(userId), Number(id)), StatusCodes.OK, res);
};

export default getBooksHandler;
