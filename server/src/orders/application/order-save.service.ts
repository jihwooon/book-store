import { saveDelivery } from 'src/delivery/application/delivery-save.service';
import Delivery from 'src/delivery/domain/delivery';

import { save as saveOrder } from '../domain/order.repository';
import { save as saveOrderedBook } from '../domain/orderedBook.repository';

export const order = async (
  items: object[],
  deliver: object,
  totalPrice: number,
  firstTitle: string,
  totalQuantity: number,
  userId: number,
): Promise<void> => {
  const deliveryInfo = new Delivery(deliver);
  const deliveryId = await saveDelivery(
    deliveryInfo.getAddress(),
    deliveryInfo.getContact(),
    deliveryInfo.getReceiver(),
  );

  const orderId = await saveOrder(firstTitle, totalQuantity, totalPrice, userId, deliveryId);

  items.forEach((item: any) => {
    saveOrderedBook({ orderId, bookId: item.bookId, quantity: item.quantity });
  });
};
