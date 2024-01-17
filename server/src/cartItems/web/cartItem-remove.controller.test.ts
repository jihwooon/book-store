import app from 'src/app';

import { existingCartItem, nonExistingCartItem } from 'src/fixture/cartItem.fixture';
import request from 'supertest';

import HttpException from 'src/utils/httpException';

import { StatusCodes } from 'http-status-codes';

import { removeToCart } from '../application/cartItem-remove.service';

jest.mock('../application/cartItem-remove.service.ts');

describe('cartItemSave Controller', () => {
  describe('DELETE /cart/id', () => {
    beforeEach(() => {
      (removeToCart as jest.Mock).mockResolvedValue(true);
    });

    context('사용자가 장바구니에 카트 id 입력하면', () => {
      it('200 상태코드를 반환한다.', async () => {
        const { status, body } = await request(app)
          .delete(`/cart/${existingCartItem.id}`);

        expect(status).toBe(200);
        expect(body).toEqual({ data: true });
      });
    });

    context('사용자가 장바구니에 올바르지 않은 카트 id 입력하는 경우,', () => {
      beforeEach(() => {
        (removeToCart as jest.Mock).mockRejectedValue(
          new HttpException('장바구니 추가에 실패했습니다.', StatusCodes.BAD_REQUEST),
        );
      });

      it('400 상태코드와 에러 메세지를 반환한다.', async () => {
        const { status, body } = await request(app)
          .delete(`/cart/${nonExistingCartItem.id}`);

        expect(status).toBe(400);
        expect(body).toEqual({
          message: '장바구니 추가에 실패했습니다.',
          status: 400,
          timestamp: expect.any(String),
        });
      });
    });
  });
});
