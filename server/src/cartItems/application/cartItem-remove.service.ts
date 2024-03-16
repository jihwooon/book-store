import { StatusCodes } from 'http-status-codes';
import HttpException from 'src/utils/httpException';

import { deleteById } from '../domain/cartItem.repository';

export const removeToCart = async (cartItemId: number) => {
  const removedCart = await deleteById(cartItemId);
  if (!removedCart) {
    throw new HttpException('장바구니 제거에 실패했습니다.', StatusCodes.BAD_REQUEST);
  }

  return removedCart;
};
