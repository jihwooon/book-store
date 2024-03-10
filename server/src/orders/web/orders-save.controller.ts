import { type Request, type Response } from 'express';

import { order } from '../application/order-save.service';

const saveOrdersHandler = async (
  { body: { items, delivery, totalPrice, firstBookTitle, totalQuantity, userId } }: Request,
  res: Response,
) => {
  const savedOrder = await order(items, delivery, totalPrice, firstBookTitle, totalQuantity, userId);

  return res.status(200).json(savedOrder);
};

export default saveOrdersHandler;
