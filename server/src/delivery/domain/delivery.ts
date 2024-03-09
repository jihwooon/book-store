export default class Delivery {
  private id: number;

  private address: string;

  private contact: string;

  constructor({ id = 0, address = '', contact = '' }: { id?: number; address?: string; contact?: string }) {
    this.id = id;
    this.address = address;
    this.contact = contact;
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
}
