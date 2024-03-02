import app from 'src/app';
import { existingCartItem, selectedCartItems } from 'src/fixture/cartItem.fixture';

import request from 'supertest';

import { StatusCodes } from 'http-status-codes';
import HttpException from 'src/utils/httpException';

import { getCartItems } from '../application/cartItem-list.service';

jest.mock('../application/cartItem-list.service.ts');

describe('cartItemList Controller', () => {
  beforeEach(() => {
    (getCartItems as jest.Mock).mockResolvedValue(selectedCartItems);
  });

  describe('GET /cart', () => {
    context('사용자가 장바구니에 도서와 수량을 추가하면', () => {
      it('201 상태코드를 반환한다.', async () => {
        const { status, body } = await request(app)
          .get(`/cart`)
          .send({ userId: existingCartItem.userId, selectedId: [1, 4] });

        expect(status).toBe(200);
        expect(body).toEqual([
          { bookId: 1, count: 1, id: 1, price: 20000, summary: '어리다....', title: '어린왕자들' },
          { bookId: 2, count: 3, id: 4, price: 20000, summary: '유리구두...', title: '신델렐라' },
        ]);
      });
    });

    context('장바구니 내에 사용자 정보가 올바르지 않는 경우', () => {
      beforeEach(() => {
        (getCartItems as jest.Mock).mockRejectedValue(
          new HttpException('장바구니가 내 도서 정보가 존재하지 않습니다.', StatusCodes.NOT_FOUND),
        );
      });

      it('404 상태코드와 에러 메세지를 반환한다.', async () => {
        const { status, body } = await request(app)
          .get(`/cart`)
          .send({ userId: existingCartItem.userId, selectedId: [999, 999] });

        expect(status).toBe(404);
        expect(body).toEqual({
          message: '장바구니가 내 도서 정보가 존재하지 않습니다.',
          success: false,
          status: 404,
          timestamp: expect.any(String),
        });
      });
    });
  });
});
