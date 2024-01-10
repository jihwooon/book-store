import { StatusCodes } from 'http-status-codes';

import HttpException from 'src/utils/httpException';

import { findAll } from '../domain/category.repository';

const getAllCategory = async () => {
  const categories = await findAll();
  if (categories.length === 0) {
    throw new HttpException('카테고리 목록이 존재하지 않습니다.', StatusCodes.NOT_FOUND);
  }

  return categories;
};

export default getAllCategory;
