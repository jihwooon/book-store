import { type Request, type Response } from 'express';

import { order } from '../application/order-save.service';

const saveOrdersHandler = async ({ body: { items, delivery, totalPrice } }: Request, res: Response) => {
  const savedOrder = await order(items, delivery, totalPrice);

  return res.status(200).json(savedOrder);
};

export default saveOrdersHandler;
