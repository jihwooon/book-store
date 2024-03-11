import type Order from '../domain/order';

import { findAll } from '../domain/order.repository';

export const getAllOrders = async () => {
  const orders = await findAll();

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

const getOrders = (orders: Order[]) => {
  orders.map((order) => {
    return {
      orderId: order.getId(),
    };
  });
};
