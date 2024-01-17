import { type Request, type Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import { ResponseHandler } from 'src/utils/responseHandler';

import { addToCart } from '../application/cartItem-save.service';

const addCartHandler = async ({ body: { userId, bookId, count } }: Request, res: Response) => {
  ResponseHandler(() => addToCart(Number(userId), Number(bookId), Number(count)), StatusCodes.CREATED, res);
};

export default addCartHandler;
