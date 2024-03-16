import { type Request, type Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import { ResponseHandler } from 'src/utils/responseHandler';

import { addToCart } from '../application/cartItem-save.service';

const addCartHandler = async ({ body: { bookId, count }, headers }: Request, res: Response) => {
  const accessToken = headers.authorization;
  ResponseHandler(() => addToCart(Number(bookId), Number(count), accessToken), StatusCodes.CREATED, res);
};

export default addCartHandler;
