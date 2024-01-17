import { existingCartItem } from 'src/fixture/cartItem.fixture';

import Book from 'src/books/domain/book';

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
      expect(cartData.books).toEqual(new Book({
        author: '김어림',
        contents: '목차',
        detail: '많이 어리다...',
        form: '종이책',
        id: 1,
        isbn: '0',
        likes: 3,
        pages: 100,
        price: 20000,
        pubDate: expect.any(Date),
        summary: '어리다....',
        title: '어린왕자들',
      }));
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
      expect(cartData.books).toEqual(new Book({
        author: '',
        categoryId: 0,
        contents: '',
        detail: '',
        form: '',
        id: 0,
        imgId: 0,
        isbn: '',
        likes: 0,
        pages: 0,
        price: 0,
        pubDate: expect.any(Date),
        summary: '',
        title: '',
      }));
    });
  });

  context('장바구니에 사용자 id와 도서 id, 수량을 추가하면', () => {
    it('결과 값을 반환한다.', () => {
      const savedCartItems = CartItem.createCartItems(
        existingCartItem.userId,
        existingCartItem.bookId,
        existingCartItem.count,
      );

      expect(savedCartItems.bookId).toBe(1);
      expect(savedCartItems.userId).toBe(1);
      expect(savedCartItems.count).toBe(1);
    });
  });
});
