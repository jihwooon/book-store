import app from 'src/app';
import request from 'supertest';

describe('getOrdersDetailHandler', () => {
  describe('GET /orders/:orderId', () => {
    context('주문 상세 상품 조회가 성공하면', () => {
      it('상태코드 200과 응답 정보를 반환한다.', async () => {
        const { status, body } = await request(app).get('/orders/1');

        expect(status).toBe(200);
        expect(body).toEqual([
          {
            bookId: 1,
            bookTitle: '홍길동전',
            author: '작가미상',
            price: 8000,
            count: 2,
          },
          {
            bookId: 2,
            bookTitle: '러닝 리액트',
            author: '알렉스 뱅크스',
            price: 25000,
            count: 1,
          },
          {
            bookId: 3,
            bookTitle: '우아한 타입스크립트 with 리액트',
            author: '우아한형제들 웹프론트그룹 지음',
            price: 22500,
            count: 10,
          },
        ]);
      });
    });
  });
});
