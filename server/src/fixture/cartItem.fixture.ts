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
  new CartItem({
    id: 4,
    bookId: 2,
    count: 3,
    books: new Book({
      title: '신델렐라',
      pubDate: expect.any(Date),
      summary: '유리구두...',
      price: 20000,
    }),
  }),
  new CartItem({
    id: 5,
    bookId: 1,
    count: 2,
    books: new Book({
      title: '어린왕자들',
      pubDate: expect.any(Date),
      summary: '어리다....',
      price: 20000,
    }),
  }),
  new CartItem({
    id: 6,
    bookId: 1,
    count: 10,
    books: new Book({
      title: '어린왕자들',
      pubDate: expect.any(Date),
      summary: '어리다....',
      price: 20000,
    }),
  }),
];

export const nonExistingCartItem = {
  id: 99999,
  bookId: 99999,
  userId: 99999,
  count: 99999,
};

export const cartItemBookList = [
  {
    id: 1,
    bookId: 1,
    title: '어린왕자들',
    summary: '어리다....',
    price: 20000,
    count: 1,
  },
  {
    id: 4,
    bookId: 2,
    title: '신델렐라',
    summary: '유리구두...',
    price: 20000,
    count: 3,
  },
  {
    id: 5,
    bookId: 1,
    title: '어린왕자들',
    summary: '어리다....',
    price: 20000,
    count: 2,
  },
  {
    id: 6,
    bookId: 1,
    title: '어린왕자들',
    summary: '어리다....',
    price: 20000,
    count: 10,
  },
];

export const selectedCartItems = [
  {
    bookId: 1,
    count: 1,
    id: 1,
    price: 20000,
    summary: '어리다....',
    title: '어린왕자들',
  },
  {
    bookId: 2,
    count: 3,
    id: 4,
    price: 20000,
    summary: '유리구두...',
    title: '신델렐라',
  },
];
