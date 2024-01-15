import { existingCartItem } from 'src/fixture/cartItem.fixture';

import CartItem from './cartItem';

describe('Cart class', () => {
  let cartItems: CartItem;

  context('객체에 값이 주어지면', () => {
    beforeEach(() => {
      cartItems = new CartItem(existingCartItem);
    });

    it('멤버 변수 값을 리턴해야 한다.', () => {
      const cartData = cartItems.getDataOfCart();

      expect(cartData.id).toBe(1);
      expect(cartData.userId).toBe(1);
      expect(cartData.bookId).toBe(1);
      expect(cartData.count).toBe(1);
    });
  });

  context('객체에 값이 주어지지 않으면', () => {
    beforeEach(() => {
      cartItems = new CartItem({});
    });

    it('멤버 변수 값을 리턴해야 한다.', () => {
      const cartData = cartItems.getDataOfCart();

      expect(cartData.id).toBe(0);
      expect(cartData.userId).toBe(0);
      expect(cartData.bookId).toBe(0);
      expect(cartData.count).toBe(0);
    });
  });
});
