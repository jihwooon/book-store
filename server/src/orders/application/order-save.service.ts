import { saveDelivery } from 'src/delivery/application/delivery-save.service';
import Delivery from 'src/delivery/domain/delivery';

import { save } from '../domain/order.repository';

export const order = async (
  items: any,
  deliver: object,
  totalPrice: number,
  firstTitle: string,
  totalQuantity: number,
  userId: number,
): Promise<string> => {
  const deliveryInfo = new Delivery(deliver);

  const deliveryId = await saveDelivery(
    deliveryInfo.getAddress(),
    deliveryInfo.getContact(),
    deliveryInfo.getReceiver(),
  );

  save(firstTitle, totalQuantity, totalPrice, userId, deliveryId);

  return '주문 등록 완료';
};
