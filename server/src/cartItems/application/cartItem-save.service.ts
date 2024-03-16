import { StatusCodes } from 'http-status-codes';
import HttpException from 'src/utils/httpException';

import { validateToken } from 'src/users/jwt/jwt.provider';

import CartItem from '../domain/cartItem';
import { save } from '../domain/cartItem.repository';

export const addToCart = async (bookId: number, count: number, accessToken: any): Promise<boolean> => {
  const { userId } = validateToken(accessToken);
  const cartItems = CartItem.createCartItems(userId, bookId, count);

  const savedCartItems = await save(cartItems);
  if (!savedCartItems) {
    throw new HttpException('장바구니 추가에 실패했습니다.', StatusCodes.BAD_REQUEST);
  }

  return savedCartItems;
};
