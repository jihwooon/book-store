/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import getBooksByCategory from '../application/books-category.service';
import getAllBooks from '../application/books-list.service';

const getAllBooksHandler = async ({ query: { category_id } }: Request, res: Response) => {
  if (!category_id) {
    const books = await getAllBooks();

    res.status(StatusCodes.OK).json({
      message: '도서 전체 조회에 성공했습니다.',
      data: books,
    });
  } else {
    const category = await getBooksByCategory(Number(category_id));

    res.status(StatusCodes.OK).json({
      message: '도서 카테고리 목록 조회에 성공했습니다.',
      data: category,
    });
  }
};

export default getAllBooksHandler;
