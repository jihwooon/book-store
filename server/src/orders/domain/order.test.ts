import Order from './order';

describe('Order Class', () => {
  let order: Order;

  describe('객체의 값이 주어지면', () => {
    beforeEach(() => {
      order = new Order({
        id: 1,
        bookTitle: '홍길동전',
        totalQuantity: 3,
        totalPrice: 5000,
        userId: 1,
        deliveryId: 1,
        createdAt: new Date(),
      });
    });

    it('값을 리턴해야 한다.', () => {
      expect(order.getBookTitle()).toBe('홍길동전');
      expect(order.getId()).toBe(1);
      expect(order.getDeliveryId()).toBe(1);
      expect(order.getTotalPrice()).toBe(5000);
      expect(order.getTotalQuantity()).toBe(3);
    });
  });

  describe('객체의 값이 주어지지 않으면', () => {
    beforeEach(() => {
      order = new Order({});
    });

    it('값을 리턴해야 한다.', () => {
      expect(order).toEqual(
        new Order({
          bookTitle: '',
          createdAt: expect.any(Date),
          deliveryId: 0,
          id: 0,
          totalPrice: 0,
          totalQuantity: 0,
          userId: 0,
        }),
      );
    });
  });
});
