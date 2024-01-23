import { existingCartItem, existingCartItems, nonExistingCartItem } from 'src/fixture/cartItem.fixture';

import { when } from 'jest-when';

import HttpException from 'src/utils/httpException';

import { StatusCodes } from 'http-status-codes';

import { findCartItemWithBook } from '../domain/cartItem.repository';
import { getCartItems } from './cartItem-list.service';

jest.mock('../domain/cartItem.repository.ts');

describe('cartItem Service', () => {
  const SelectedCartItem = [1, 4];
  const notSelectedCartItem = [9999, 9999];

  beforeEach(() => {
    when(findCartItemWithBook as jest.Mock)
      .calledWith(existingCartItem.userId, SelectedCartItem)
      .mockResolvedValue(existingCartItems);
  });

  context('사용자 정보 id와 장바구니 상품을 선택하면', () => {
    it('장바구니 도서 목록을 반환한다.', async () => {
      const cartItems = await getCartItems(existingCartItem.userId, SelectedCartItem);

      expect(cartItems).toStrictEqual([
        {
          id: 1,
          bookId: 1,
          title: '어린왕자들',
          summary: '어리다....',
          price: 20000,
          count: 1,
        },
        {
          id: 4,
          bookId: 2,
          title: '신델렐라',
          summary: '유리구두...',
          price: 20000,
          count: 3,
        },
        {
          id: 5,
          bookId: 1,
          title: '어린왕자들',
          summary: '어리다....',
          price: 20000,
          count: 2,
        },
        {
          id: 6,
          bookId: 1,
          title: '어린왕자들',
          summary: '어리다....',
          price: 20000,
          count: 10,
        },
      ]);
    });
  });

  context('장바구니 도서 목록에 빈 값이 주어지면', () => {
    beforeEach(() => {
      (findCartItemWithBook as jest.Mock).mockResolvedValue([]);
    });
    it('error를 던진다.', async () => {
      await expect(getCartItems(nonExistingCartItem.userId, notSelectedCartItem)).rejects.toThrow(
        new HttpException('장바구니가 내 도서 정보가 존재하지 않습니다.', StatusCodes.NOT_FOUND),
      );
    });
  });
});
