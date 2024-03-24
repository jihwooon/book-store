import Delivery from 'src/delivery/domain/delivery';
import Order from 'src/orders/domain/order';

export const orders = [
  {
    id: 1,
    bookTitle: '어린왕자',
    totalQuantity: 3,
    totalPrice: 6000,
    userId: 0,
    delivery: {
      id: 0,
      address: '강원도 춘천시 동내면 대룡산길 227-314 24408 한국',
      contact: '010-1234-5667',
      receiver: '홍길동',
    },
    deliveryId: 0,
    createdAt: '2024-03-14T15:59:31.520Z',
  },
  {
    id: 2,
    bookTitle: '어린왕자',
    totalQuantity: 3,
    totalPrice: 6000,
    userId: 0,
    delivery: {
      id: 0,
      address: '강원도 춘천시 동내면 대룡산길 227-314 24408 한국',
      contact: '010-1234-5667',
      receiver: '홍길동',
    },
    deliveryId: 0,
    createdAt: '2024-03-14T15:59:31.520Z',
  },
];

export const mockOrders = [
  new Order({
    id: 1,
    bookTitle: 'Book 1',
    totalQuantity: 2,
    totalPrice: 20,
    delivery: new Delivery({
      address: '123 Street',
      receiver: 'John Doe',
      contact: '1234567890',
    }),
  }),
  new Order({
    id: 2,
    bookTitle: 'Book 2',
    totalQuantity: 1,
    totalPrice: 15,
    delivery: new Delivery({
      address: '456 Avenue',
      receiver: 'Jane Smith',
      contact: '9876543210',
    }),
  }),
];

export const orderDetailMock = [{ author: '걍구두', bookId: 2, bookTitle: '신델렐라', price: 20000, quantity: 3 }];
