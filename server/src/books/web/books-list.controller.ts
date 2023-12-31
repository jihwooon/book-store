/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { ResponseHandler } from '../../utils/responseHandler';
import { getBooksByCategoryAndNewRelease } from '../application/books-category-new-release.service';
import { getAllBooksByNewRelease } from '../application/books-new-release.service';

import { parseBoolean } from '../../utils/parseBoolean';
import getBooksByCategory from '../application/books-category.service';
import getAllBooks from '../application/books-list.service';

const getAllBooksHandler = async ({ query: { category_id, news } }: Request, res: Response) => {
  const isValue = parseBoolean(news);

  if (category_id && isValue) {
    return ResponseHandler(() => getBooksByCategoryAndNewRelease(
      Number(category_id),
      isValue,
    ), StatusCodes.OK, res);
  }

  if (category_id) {
    return ResponseHandler(() => getBooksByCategory(Number(category_id)), StatusCodes.OK, res);
  }

  if (isValue) {
    return ResponseHandler(() => getAllBooksByNewRelease(isValue), StatusCodes.OK, res);
  }

  return ResponseHandler(getAllBooks, StatusCodes.OK, res);
};

export default getAllBooksHandler;
