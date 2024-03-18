import { type Request, type Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import { ResponseHandler } from 'src/utils/responseHandler';

import { getCartItems } from '../application/cartItem-list-existed-select.service';
import { getCartItem } from '../application/cartItem-list-non-existed-select.service';

const getCartHandler = async ({ body: { selectedId }, headers }: Request, res: Response) => {
  const accessToken = headers.authorization;
  if (!selectedId) {
    ResponseHandler(() => getCartItem(accessToken), StatusCodes.OK, res);
  } else {
    ResponseHandler(() => getCartItems(accessToken, selectedId), StatusCodes.OK, res);
  }
};

export default getCartHandler;
