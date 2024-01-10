import { existingCategories } from 'src/fixture/category.fixture';

import { findAll } from '../domain/category.repository';
import getAllCategory from './category-list.service';

jest.mock('../domain/category.repository.ts');

describe('category Service', () => {
  context('카테고리 목록이 존재하면', () => {
    beforeEach(() => {
      (findAll as jest.Mock).mockResolvedValue(existingCategories);
    });
    it('카테고리 목록 반환한다.', async () => {
      const categories = await getAllCategory();

      expect(categories).toEqual(existingCategories);
    });
  });

  context('카테고리 목록이 빈 배열로 주어지면', () => {
    beforeEach(() => {
      (findAll as jest.Mock).mockResolvedValue([]);
    });
    it('error를 던져야 한다.', async () => {
      await expect(getAllCategory()).rejects.toThrow(new Error('카테고리 목록이 존재하지 않습니다.'));
    });
  });
});
