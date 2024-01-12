/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { parseBoolean } from 'src/utils/parseBoolean';
import { ResponseHandler } from 'src/utils/responseHandler';

import { getBooksByCategoryAndNewRelease } from '../application/books-category-new-release.service';
import getBooksByCategory from '../application/books-category.service';
import getAllBooks from '../application/books-list.service';
import { getAllBooksByNewRelease } from '../application/books-new-release.service';

const getAllBooksHandler = async ({
  query: {
    category_id, news, limit, currentPage,
  },
}: Request, res: Response) => {
  const isValue = parseBoolean(news);

  if (category_id && isValue) {
    return ResponseHandler(() => getBooksByCategoryAndNewRelease(
      Number(category_id),
      Number(limit),
      Number(currentPage),
    ), StatusCodes.OK, res);
  }

  if (category_id) {
    return ResponseHandler(() => getBooksByCategory(Number(category_id)), StatusCodes.OK, res);
  }

  if (isValue) {
    return ResponseHandler(() => getAllBooksByNewRelease(
      Number(limit),
      Number(currentPage),
    ), StatusCodes.OK, res);
  }

  return ResponseHandler(() => getAllBooks(
    Number(limit),
    Number(currentPage),
  ), StatusCodes.OK, res);
};

export default getAllBooksHandler;
