import request from 'supertest';

import app from '../../app';
import { existingCategories } from '../../fixture/category.fixture';
import getAllCategory from '../application/category-list.service';

jest.mock('../application/category-list.service.ts');

describe('categoryList Controller', () => {
  describe('GET /category', () => {
    context('카테고리 목록 조회 요청 시', () => {
      beforeEach(() => {
        (getAllCategory as jest.Mock).mockResolvedValue(existingCategories);
      });
      it('200 상태코드와 응답 메세지를 반환한다.', async () => {
        const { status, body } = await request(app).get('/category');

        expect(status).toBe(200);
        expect(body).toEqual(
          {
            message: '도서 목록을 조회합니다.',
            data: existingCategories,
          },
        );
      });
    });

    context('카테고리 목록 조회 요청 실패 시', () => {
      beforeEach(() => {
        (getAllCategory as jest.Mock).mockRejectedValue(new Error('카테고리 목록이 존재하지 않습니다.'));
      });
      it('404 상태코드와 에러 메시지를 반환한다', async () => {
        const { status, body } = await request(app).get('/category');

        expect(status).toBe(404);
        expect(body).toEqual(
          {
            message: '카테고리 목록이 존재하지 않습니다.',
          },
        );
      });
    });
  });
});
