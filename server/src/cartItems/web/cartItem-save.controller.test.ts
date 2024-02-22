import app from 'src/app';
import { existingCartItem, nonExistingCartItem } from 'src/fixture/cartItem.fixture';

import request from 'supertest';

import HttpException from 'src/utils/httpException';

import { StatusCodes } from 'http-status-codes';

import { addToCart } from '../application/cartItem-save.service';

jest.mock('../application/cartItem-save.service.ts');

describe('cartItemSave Controller', () => {
  describe('POST /cart', () => {
    beforeEach(() => {
      (addToCart as jest.Mock).mockResolvedValue(true);
    });

    context('사용자가 장바구니에 도서와 수량을 추가하면', () => {
      it('201 상태코드를 반환한다.', async () => {
        const { status, body } = await request(app).post('/cart').send({
          userId: existingCartItem.userId,
          bookId: existingCartItem.bookId,
          count: existingCartItem.count,
        });

        expect(status).toBe(201);
        expect(body).toEqual({ data: true, success: true });
      });
    });

    context('사용자가 장바구니에 도서와 수량을 추가 실패하는 경우,', () => {
      beforeEach(() => {
        (addToCart as jest.Mock).mockRejectedValue(
          new HttpException('장바구니 추가에 실패했습니다.', StatusCodes.BAD_REQUEST),
        );
      });

      it('400 상태코드와 에러 메세지를 반환한다.', async () => {
        const { status, body } = await request(app).post('/cart').send({
          userId: nonExistingCartItem.userId,
          bookId: nonExistingCartItem.bookId,
          count: nonExistingCartItem.count,
        });

        expect(status).toBe(400);
        expect(body).toEqual({
          message: '장바구니 추가에 실패했습니다.',
          success: false,
          status: 400,
          timestamp: expect.any(String),
        });
      });
    });
  });
});
