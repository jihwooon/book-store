import { type Request, type Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import { ResponseHandler } from 'src/utils/responseHandler';

import { getDetailOrders } from '../application/orders-detail.service';

const getOrdersDetailHandler = async ({ params: { orderId } }: Request, res: Response) => {
  ResponseHandler(() => getDetailOrders(Number(orderId)), StatusCodes.OK, res);
};

export default getOrdersDetailHandler;
