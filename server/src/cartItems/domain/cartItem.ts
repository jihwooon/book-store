export default class CartItem {
  private id: number;

  private bookId: number;

  private userId: number;

  private count: number;

  constructor({
    id = 0,
    bookId = 0,
    userId = 0,
    count = 0,
  }: {
    id?: number;
    bookId?: number;
    userId?: number;
    count?: number;
  }) {
    this.id = id;
    this.bookId = bookId;
    this.userId = userId;
    this.count = count;
  }

  getDataOfCart() {
    return {
      id: this.id,
      bookId: this.bookId,
      userId: this.userId,
      count: this.count,
    };
  }
}
