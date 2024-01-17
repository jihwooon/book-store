import { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ResponseHandler } from 'src/utils/responseHandler';

import { removeToCart } from '../application/cartItem-remove.service';

const removeCartHandler = async (
  { params: { id } }: Request,
  res: Response,
) => {
  ResponseHandler(
    () => removeToCart(Number(id)),
    StatusCodes.OK,
    res,
  );
};

export default removeCartHandler;
