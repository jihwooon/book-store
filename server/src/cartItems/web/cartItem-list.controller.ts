import { type Request, type Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import { ResponseHandler } from 'src/utils/responseHandler';

import { getCartItems } from '../application/cartItem-list.service';

const getCartHandler = async ({ body: { userId } }: Request, res: Response) => {
  ResponseHandler(() => getCartItems(Number(userId)), StatusCodes.OK, res);
};

export default getCartHandler;
