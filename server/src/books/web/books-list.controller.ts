/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { ResponseHandler } from '../../utils/responseHandler';
import { getBooksByCategoryAndNewRelease } from '../application/books-category-new-release.service';
import getBooksByCategory from '../application/books-category.service';
import getAllBooks from '../application/books-list.service';

const getAllBooksHandler = async ({ query: { category_id, news } }: Request, res: Response) => {
  if (!category_id) {
    return ResponseHandler(getAllBooks, StatusCodes.OK, res);
  } if (category_id && news) {
    return ResponseHandler(() => getBooksByCategoryAndNewRelease(
      Number(category_id),
      Boolean(news),
    ), StatusCodes.OK, res);
  } if (news) {
    return res.status(StatusCodes.OK).json({
      message: 'Not yet implement',
    });
  }

  return ResponseHandler(() => getBooksByCategory(Number(category_id)), StatusCodes.OK, res);
};

export default getAllBooksHandler;
