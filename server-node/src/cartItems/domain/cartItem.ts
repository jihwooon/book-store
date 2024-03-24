import Book from 'src/books/domain/book';

export default class CartItem {
  private id: number;

  private bookId: number;

  private userId: number;

  private count: number;

  private books: Book;

  constructor({
    id = 0,
    bookId = 0,
    userId = 0,
    count = 0,
    books = new Book({}),
  }: {
    id?: number;
    bookId?: number;
    userId?: number;
    count?: number;
    books?: Book;
  }) {
    this.id = id;
    this.bookId = bookId;
    this.userId = userId;
    this.count = count;
    this.books = books;
  }

  static createCartItems(userId: number, bookId: number, count: number) {
    const cartItem = new CartItem({ userId, bookId, count });
    const cartData = cartItem.getDataOfCart();

    return cartData;
  }

  getDataOfCart() {
    return {
      id: this.id,
      bookId: this.bookId,
      userId: this.userId,
      count: this.count,
      books: this.books,
    };
  }
}
