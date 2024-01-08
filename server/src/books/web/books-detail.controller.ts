import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { ResponseHandler } from '../../utils/responseHandler';
import getDetailBook from '../application/books-detail.service';

const getBooksHandler = async ({ params: { id } }: Request, res: Response) => {
  ResponseHandler(() => getDetailBook(Number(id)), StatusCodes.OK, res);
};

export default getBooksHandler;
