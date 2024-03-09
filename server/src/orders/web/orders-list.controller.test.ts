import app from 'src/app';
import request from 'supertest';

describe('getAllOrdersHandler Controller', () => {
  describe('GET /orders', () => {
    context('주문 조회에 성공하면', () => {
      it('200 상태코드와 응답 메세지를 반환한다.', async () => {
        const { status, body } = await request(app).get('/orders');

        expect(status).toBe(200);
        expect(body).toEqual([
          {
            orderId: 1,
            createAt: expect.any(String),
            delivery: {
              address: '서울시 경인로',
              receiver: '홍길동',
              contact: '010-1234-5667',
            },
            bookTitle: '홍길동전',
            totalPrice: 25000,
            totalCount: 5,
          },
        ]);
      });
    });
  });
});
