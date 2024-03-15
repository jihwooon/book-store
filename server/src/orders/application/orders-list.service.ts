import HttpException from 'src/utils/httpException';

import { StatusCodes } from 'http-status-codes';

import { findAll } from '../domain/order.repository';

export const getAllOrders = async () => {
  const orders = await findAll();
  if (orders.length === 0) {
    throw new HttpException('주문 목록을 찾을 수 없습니다.', StatusCodes.NOT_FOUND);
  }

  const findOrder = orders.map((item) => {
    return {
      orderId: item.getId(),
      bookTitle: item.getBookTitle(),
      totalQuantity: item.getTotalQuantity(),
      totalPrice: item.getTotalPrice(),
      address: item.getDelivery().getAddress(),
      receiver: item.getDelivery().getReceiver(),
      contact: item.getDelivery().getContact(),
    };
  });

  return findOrder;
};
