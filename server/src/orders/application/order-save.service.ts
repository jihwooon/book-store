import { saveDelivery } from 'src/delivery/application/delivery-save.service';
import Delivery from 'src/delivery/domain/delivery';

export const order = async (items: any, deliver: object, totalPrice: number): Promise<string> => {
  const deliveryInfo = new Delivery(deliver);

  const insertId = await saveDelivery(deliveryInfo.getAddress(), deliveryInfo.getContact(), deliveryInfo.getReceiver());

  return '주문 등록 완료';
};
