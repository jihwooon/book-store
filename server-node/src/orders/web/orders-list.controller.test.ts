import app from 'src/app';
import request from 'supertest';

import { StatusCodes } from 'http-status-codes';
import HttpException from 'src/utils/httpException';

import { getAllOrders } from '../application/orders-list.service';

jest.mock('../application/orders-list.service.ts');

describe('getAllOrdersHandler Controller', () => {
  describe('GET /orders', () => {
    context('주문 조회에 성공하면', () => {
      beforeEach(() => {
        (getAllOrders as jest.Mock).mockReturnValue([
          {
            address: '강원도 춘천시 동내면 대룡산길 227-314 24408 한국',
            bookTitle: '어린왕자',
            contact: '010-1234-5667',
            orderId: 1,
            receiver: '홍길동',
            totalPrice: 6000,
            totalQuantity: 3,
          },
          {
            address: '강원도 춘천시 동내면 대룡산길 227-314 24408 한국',
            bookTitle: '어린왕자',
            contact: '010-1234-5667',
            orderId: 2,
            receiver: '홍길동',
            totalPrice: 6000,
            totalQuantity: 3,
          },
        ]);
      });

      it('200 상태코드와 응답 메세지를 반환한다.', async () => {
        const { status, body } = await request(app).get('/orders');

        expect(status).toBe(200);
        expect(body).toEqual([
          {
            address: '강원도 춘천시 동내면 대룡산길 227-314 24408 한국',
            bookTitle: '어린왕자',
            contact: '010-1234-5667',
            orderId: 1,
            receiver: '홍길동',
            totalPrice: 6000,
            totalQuantity: 3,
          },
          {
            address: '강원도 춘천시 동내면 대룡산길 227-314 24408 한국',
            bookTitle: '어린왕자',
            contact: '010-1234-5667',
            orderId: 2,
            receiver: '홍길동',
            totalPrice: 6000,
            totalQuantity: 3,
          },
        ]);
      });
    });

    context('주문 조회 요청 실패 시', () => {
      beforeEach(() => {
        (getAllOrders as jest.Mock).mockRejectedValue(
          new HttpException('주문 목록을 찾을 수 없습니다.', StatusCodes.NOT_FOUND),
        );
      });

      it('404 상태코드와 에러 메세지를 반환한다', async () => {
        const { status, body } = await request(app).get('/orders');

        expect(status).toBe(404);
        expect(body).toEqual({
          message: '주문 목록을 찾을 수 없습니다.',
          status: 404,
          success: false,
          timestamp: expect.any(String),
        });
      });
    });
  });
});
