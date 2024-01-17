import Book from 'src/books/domain/book';
import CartItem from 'src/cartItems/domain/cartItem';

export const existingCartItem = {
  id: 1,
  bookId: 1,
  userId: 1,
  count: 1,
  books: new Book({
    author: '김어림',
    contents: '목차',
    detail: '많이 어리다...',
    form: '종이책',
    id: 1,
    isbn: '0',
    likes: 3,
    pages: 100,
    price: 20000,
    pubDate: new Date('2019-01-01'),
    summary: '어리다....',
    title: '어린왕자들',
  }),
};

export const existingCartItems = [
  new CartItem({
    id: 1,
    bookId: 1,
    count: 1,
    books: new Book({
      price: 20000,
      pubDate: expect.any(Date),
      summary: '어리다....',
      title: '어린왕자들',
    }),
  }),
];

export const nonExistingCartItem = {
  id: 99999,
  bookId: 99999,
  userId: 99999,
  count: 99999,
};

export const cartItemBookList = [{
  id: 1,
  bookId: 1,
  count: 1,
  price: 20000,
  summary: '어리다....',
  title: '어린왕자들',
}];
