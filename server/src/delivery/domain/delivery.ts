export default class Delivery {
  private id: number;

  private address: string;

  private contact: string;

  private receiver: string;

  constructor({
    id = 0,
    address = '',
    contact = '',
    receiver = '',
  }: {
    id?: number;
    address?: string;
    contact?: string;
    receiver?: string;
  }) {
    this.id = id;
    this.address = address;
    this.contact = contact;
    this.receiver = receiver;
  }

  getId() {
    return this.id;
  }

  getAddress() {
    return this.address;
  }

  getContact() {
    return this.contact;
  }

  getReceiver() {
    return this.receiver;
  }
}
