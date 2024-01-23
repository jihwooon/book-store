import { StatusCodes } from 'http-status-codes';
import app from 'src/app';
import { cartItemBookList, existingCartItem } from 'src/fixture/cartItem.fixture';

import request from 'supertest';

import HttpException from 'src/utils/httpException';

import { getCartItems } from '../application/cartItem-list.service';

jest.mock('../application/cartItem-list.service.ts');

describe('cartItemList Controller', () => {
  beforeEach(() => {
    (getCartItems as jest.Mock).mockResolvedValue(cartItemBookList);
  });

  describe('GET /cart', () => {
    context('사용자가 장바구니에 도서와 수량을 추가하면', () => {
      it('201 상태코드를 반환한다.', async () => {
        const {
          status,
          body: { data },
        } = await request(app).get(`/cart`).send({ userId: existingCartItem.userId });

        expect(status).toBe(200);
        expect(data).toEqual(cartItemBookList);
      });
    });

    context('장바구니 내에 사용자 정보가 올바르지 않는 경우', () => {
      beforeEach(() => {
        (getCartItems as jest.Mock).mockRejectedValue(
          new HttpException('장바구니가 내 도서 정보가 존재하지 않습니다.', StatusCodes.NOT_FOUND),
        );
      });

      it('404 상태코드와 에러 메세지를 반환한다.', async () => {
        const { status, body } = await request(app).get(`/cart`);

        expect(status).toBe(404);
        expect(body).toEqual({
          message: '장바구니가 내 도서 정보가 존재하지 않습니다.',
          status: 404,
          timestamp: expect.any(String),
        });
      });
    });
  });
});
