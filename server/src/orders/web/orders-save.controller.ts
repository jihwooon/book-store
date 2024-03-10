import { type Request, type Response } from 'express';

import { ResponseHandler } from 'src/utils/responseHandler';

import { StatusCodes } from 'http-status-codes';

import { order } from '../application/order-save.service';

const saveOrdersHandler = async (
  { body: { items, delivery, totalPrice, firstBookTitle, totalQuantity, userId } }: Request,
  res: Response,
) => {
  ResponseHandler(
    () => order(items, delivery, totalPrice, firstBookTitle, totalQuantity, userId),
    StatusCodes.CREATED,
    res,
  );
};

export default saveOrdersHandler;
