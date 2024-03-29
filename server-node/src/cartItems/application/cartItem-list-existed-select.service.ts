/* eslint-disable no-use-before-define */
import HttpException from 'src/utils/httpException';

import { StatusCodes } from 'http-status-codes';

import { validateToken } from 'src/users/jwt/jwt.provider';

import type CartItem from '../domain/cartItem';
import { findCartItemWithBook } from '../domain/cartItem.repository';

export const getCartItems = async (accessToken: any, selectedId: number[]) => {
  const { userId } = validateToken(accessToken);

  const cartItems = await findCartItemWithBook(userId, selectedId);
  if (cartItems.length === 0) {
    throw new HttpException('장바구니가 내 도서 정보가 존재하지 않습니다.', StatusCodes.NOT_FOUND);
  }

  const cartItemList = convertCartItems(cartItems);

  return cartItemList;
};

const convertCartItems = (cartItems: CartItem[]) =>
  cartItems.map((cart) => {
    const { cartData, bookData } = getCartData(cart);

    return {
      id: cartData.id,
      bookId: cartData.bookId,
      title: bookData.getTitle(),
      summary: bookData.getSummary(),
      price: bookData.getPrice(),
      count: cartData.count,
    };
  });

const getCartData = (cart: CartItem) => {
  const cartData = cart.getDataOfCart();
  const bookData = cartData.books;

  return { cartData, bookData };
};
