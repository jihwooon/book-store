import { type Request, type Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import { ResponseHandler } from 'src/utils/responseHandler';

import { getAllOrders } from '../application/orders-list.service';

const getAllOrdersHandler = async (req: Request, res: Response) => {
  ResponseHandler(() => getAllOrders(), StatusCodes.OK, res);
};

export default getAllOrdersHandler;
