import { type Request, type Response } from 'express';

import { StatusCodes } from 'http-status-codes';

import { ResponseHandler } from 'src/utils/responseHandler';

import getAllCategory from '../application/category-list.service';

const getAllCategoryHandler = async (req: Request, res: Response) => {
  ResponseHandler(() => getAllCategory(), StatusCodes.OK, res);
};

export default getAllCategoryHandler;
