import { save } from '../domain/delivery.repository';

export const saveDelivery = async (address: string, receiver: string, contact: string): Promise<number> => {
  return save({ address, receiver, contact });
};
