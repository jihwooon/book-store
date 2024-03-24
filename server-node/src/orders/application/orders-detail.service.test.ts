import HttpException from 'src/utils/httpException';

import { StatusCodes } from 'http-status-codes';

import { orderDetailMock } from 'src/fixture/orders.fixture';

import { findAllWithOrderId } from '../domain/order.repository';
import { getDetailOrders } from './orders-detail.service';

jest.mock('../domain/order.repository');

describe('orderDetail Service', () => {
  describe('getDetailOrders', () => {
    const ORDER_ID = 1;
    const NOT_FOUNT_ID = 9999;

    beforeEach(() => {
      (findAllWithOrderId as jest.Mock).mockReturnValue(orderDetailMock);
    });
    context('장바구니에 주문 목록 상품을 선택하면', () => {
      it('주문 목록 상품을 반환한다.', async () => {
        const order = await getDetailOrders(ORDER_ID);

        expect(order).toStrictEqual([
          { author: '걍구두', bookId: 2, bookTitle: '신델렐라', price: 20000, quantity: 3 },
        ]);
      });
    });

    context('장바구니에 주문 목록 상품이 존재하지 않으면', () => {
      beforeEach(() => {
        (findAllWithOrderId as jest.Mock).mockReturnValue([]);
      });
      it('error를 던져야 한다', async () => {
        await expect(getDetailOrders(NOT_FOUNT_ID)).rejects.toThrow(
          new HttpException('주문 된 상품을 찾을 수 없습니다.', StatusCodes.NOT_FOUND),
        );
      });
    });
  });
});
