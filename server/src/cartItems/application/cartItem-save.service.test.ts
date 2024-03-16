import { existingCartItem, nonExistingCartItem } from 'src/fixture/cartItem.fixture';

import HttpException from 'src/utils/httpException';

import { StatusCodes } from 'http-status-codes';

import { validateToken } from 'src/users/jwt/jwt.provider';

import { ACCESS_TOKEN } from 'src/fixture/jwt.fixture';

import { save } from '../domain/cartItem.repository';
import { addToCart } from './cartItem-save.service';

jest.mock('../domain/cartItem.repository.ts');
jest.mock('../../users/jwt/jwt.provider.ts');

describe('cartItem Service', () => {
  beforeEach(() => {
    (validateToken as jest.Mock).mockResolvedValue({ userId: existingCartItem.userId });
    (save as jest.Mock).mockResolvedValue(true);
  });

  context('사용자 id와 도서 정보 id가 주어지고 수량을 추가하면', () => {
    it('true를 반환한다.', async () => {
      const savedCartItems = await addToCart(existingCartItem.bookId, existingCartItem.count, ACCESS_TOKEN);

      expect(savedCartItems).toBe(true);
    });
  });

  context('사용자 id와 도서 정보 id가 주어지고 수량을 추가 실패하는 경우', () => {
    beforeEach(() => {
      (save as jest.Mock).mockResolvedValue(false);
    });

    it('error를 반환한다.', async () => {
      await expect(addToCart(nonExistingCartItem.bookId, nonExistingCartItem.count, ACCESS_TOKEN)).rejects.toThrow(
        new HttpException('장바구니 추가에 실패했습니다.', StatusCodes.BAD_REQUEST),
      );
    });
  });
});
