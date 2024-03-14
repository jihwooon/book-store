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
  });
});
