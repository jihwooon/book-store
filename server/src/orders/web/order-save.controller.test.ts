import app from 'src/app';
import request from 'supertest';

describe('saveOrdersHandler', () => {
  describe('POST /orders', () => {
    context('주문 하기 성공하면', () => {
      it('상태코드 200과 응답 정보를 반환한다.', async () => {
        const { status, body } = await request(app).post('/orders');

        expect(status).toBe(200);
        expect(body).toEqual('주문 등록 완료');
      });
    });
  });
});
