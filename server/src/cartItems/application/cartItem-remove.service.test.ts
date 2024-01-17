import { StatusCodes } from 'http-status-codes';
import HttpException from 'src/utils/httpException';

import { when } from 'jest-when';

import { existingCartItem, nonExistingCartItem } from 'src/fixture/cartItem.fixture';

import { deleteById } from '../domain/cartItem.repository';
import { removeToCart } from './cartItem-remove.service';

jest.mock('../domain/cartItem.repository.ts');

describe('cartItemRemove Service', () => {
  beforeEach(() => {
    when(deleteById as jest.Mock)
      .calledWith(existingCartItem.id)
      .mockResolvedValue(true);
  });

  context('카트 id가 주어지면', () => {
    it('장바구니 도서를 제거한다.', async () => {
      const res = await removeToCart(existingCartItem.id);
      expect(res).toBe(true);
    });
  });

  context('카트 id가 올바르지 않으면', () => {
    it('error를 던진다.', async () => {
      await expect(removeToCart(nonExistingCartItem.id)).rejects.toThrow(
        new HttpException('장바구니 제거에 실패했습니다.', StatusCodes.BAD_REQUEST),
      );
    });
  });
});
