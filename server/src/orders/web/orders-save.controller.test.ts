import app from 'src/app';
import request from 'supertest';

describe('saveOrdersHandler', () => {
  describe('POST /orders', () => {
    context('주문 하기 성공하면', () => {
      it('상태코드 200과 응답 정보를 반환한다.', async () => {
        const { status, body } = await request(app)
          .post('/orders')
          .send({
            items: [
              {
                cartItems: 1,
                bookId: 1,
                quantity: 1,
              },
              {
                cartItems: 2,
                bookId: 2,
                quantity: 2,
              },
            ],
            delivery: {
              address: '서울시 경인로',
              receiver: '홍길동',
              contact: '010-123-3456',
            },
            totalPrice: 50000,
          });

        expect(status).toBe(200);
        expect(body).toEqual('주문 등록 완료');
      });
    });
  });
});
