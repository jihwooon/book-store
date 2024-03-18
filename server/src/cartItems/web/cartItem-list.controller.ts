import { type Request, type Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import { ResponseHandler } from 'src/utils/responseHandler';

import { getCartItems } from '../application/cartItem-list.service';

const getCartHandler = async ({ body: { selectedId }, headers }: Request, res: Response) => {
  const accessToken = headers.authorization;

  ResponseHandler(() => getCartItems(accessToken, selectedId), StatusCodes.OK, res);
};

export default getCartHandler;
