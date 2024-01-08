/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { ResponseHandler } from '../../utils/responseHandler';
import getBooksByCategory from '../application/books-category.service';
import getAllBooks from '../application/books-list.service';

const getAllBooksHandler = async ({ query: { category_id } }: Request, res: Response) => {
  if (!category_id) {
    ResponseHandler(getAllBooks, StatusCodes.OK, res);
  } else {
    ResponseHandler(() => getBooksByCategory(Number(category_id)), StatusCodes.OK, res);
  }
};

export default getAllBooksHandler;
