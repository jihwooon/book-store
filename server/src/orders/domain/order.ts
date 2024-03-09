export default class Order {
  private id: number;

  private bookTitle: string;

  private totalQuantity: number;

  private totalPrice: number;

  private userId: number;

  private deliveryId: number;

  private createdAt: Date;

  constructor({
    id = 0,
    bookTitle = '',
    totalQuantity = 0,
    totalPrice = 0,
    userId = 0,
    deliveryId = 0,
    createdAt = new Date(),
  }: {
    id?: number;
    bookTitle?: string;
    totalQuantity?: number;
    totalPrice?: number;
    userId?: number;
    deliveryId?: number;
    createdAt?: Date;
  }) {
    this.id = id;
    this.bookTitle = bookTitle;
    this.totalQuantity = totalQuantity;
    this.totalPrice = totalPrice;
    this.userId = userId;
    this.deliveryId = deliveryId;
    this.createdAt = createdAt;
  }

  getId() {
    return this.id;
  }

  getBookTitle() {
    return this.bookTitle;
  }

  getTotalQuantity() {
    return this.totalQuantity;
  }

  getTotalPrice() {
    return this.totalPrice;
  }

  getUserId() {
    return this.userId;
  }

  getDeliveryId() {
    return this.deliveryId;
  }

  getCreateAt() {
    return this.createdAt;
  }
}
