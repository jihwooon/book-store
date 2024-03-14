import app from 'src/app';
import request from 'supertest';

describe('getOrdersDetailHandler', () => {
  describe('GET /orders/:orderId', () => {
    context('주문 상세 상품 조회가 성공하면', () => {
      it('상태코드 200과 응답 정보를 반환한다.', async () => {
        const { status, body } = await request(app).get('/orders/1');
        expect(status).toBe(200);
        expect(body).toEqual([{ author: '걍구두', bookId: 2, bookTitle: '신델렐라', price: 20000, quantity: 3 }]);
      });
    });
  });
});
