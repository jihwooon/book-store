import { mockOrders } from 'src/fixture/orders.fixture';

import { findAll } from '../domain/order.repository';
import { getAllOrders } from './orders-list.service';

jest.mock('../domain/order.repository.ts');

describe('orderList Service', () => {
  beforeEach(() => {
    (findAll as jest.Mock).mockResolvedValue(mockOrders);
  });

  describe('getAllOrders', () => {
    context('주문 목록을 조회하면', () => {
      it('주문 목록 리스트를 반환한다.', async () => {
        const orders = await getAllOrders();

        expect(orders).toEqual([
          {
            address: '123 Street',
            bookTitle: 'Book 1',
            contact: '1234567890',
            orderId: 1,
            receiver: 'John Doe',
            totalPrice: 20,
            totalQuantity: 2,
          },
          {
            address: '456 Avenue',
            bookTitle: 'Book 2',
            contact: '9876543210',
            orderId: 2,
            receiver: 'Jane Smith',
            totalPrice: 15,
            totalQuantity: 1,
          },
        ]);
      });
    });
  });
});
