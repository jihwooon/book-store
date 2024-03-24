import HttpException from 'src/utils/httpException';

import { StatusCodes } from 'http-status-codes';

import { findAllWithOrderId } from '../domain/order.repository';

export const getDetailOrders = async (orderId: number) => {
  const findBookedOrders = await findAllWithOrderId(orderId);
  if (findBookedOrders.length === 0) {
    throw new HttpException('주문 된 상품을 찾을 수 없습니다.', StatusCodes.NOT_FOUND);
  }

  return findBookedOrders;
};
