import { Request, Response } from 'express';

import getAllCategory from '../application/category-list.service';

const getAllCategoryHandler = async (req: Request, res: Response) => {
  try {
    const category = await getAllCategory();

    res.status(200).json({
      message: '도서 목록을 조회합니다.',
      data: category,
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export default getAllCategoryHandler;
