/* eslint-disable no-use-before-define */
import { validateToken } from 'src/users/jwt/jwt.provider';

import { findCartItemAndBook } from '../domain/cartItem.repository';

export const getCartItem = async (accessToken: any) => {
  const { userId } = validateToken(accessToken);

  const cartItems = await findCartItemAndBook(userId);

  return cartItems;
};
