import { findAll } from '../domain/category.repository';

const getAllCategory = async () => {
  const categories = await findAll();
  if (categories.length === 0) {
    throw new Error('카테고리 목록이 존재하지 않습니다.');
  }

  return categories;
};

export default getAllCategory;
