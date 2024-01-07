import { existingBook } from '../../fixture/books.fixture';
import Book from './book';

describe('Book Class', () => {
  context('객체에 값이 주어지면', () => {
    const book = new Book(existingBook);

    it('멤버 변수를 값을 리턴해야 한다', () => {
      expect(book.getId()).toBe(1);
      expect(book.getTitle()).toBe('어린왕자들');
      expect(book.getForm()).toBe('종이책');
      expect(book.getIsbn()).toBe('0');
      expect(book.getSummary()).toBe('어리다....');
      expect(book.getDetail()).toBe('많이 어리다...');
      expect(book.getAuthor()).toBe('김어림');
      expect(book.getPages()).toBe(100);
      expect(book.getPrice()).toBe(20000);
      expect(book.getLikes()).toBe(3);
      expect(book.getContents()).toBe('목차');
    });
  });

  context('객체의 값이 주어지지 않으면', () => {
    const book = new Book({});

    it('멤버 변수는 default 값을 리턴해야 한다.', () => {
      expect(book.getId()).toBe(0);
      expect(book.getTitle()).toBe('');
      expect(book.getForm()).toBe('');
      expect(book.getIsbn()).toBe('');
      expect(book.getSummary()).toBe('');
      expect(book.getDetail()).toBe('');
      expect(book.getAuthor()).toBe('');
      expect(book.getPages()).toBe(0);
      expect(book.getPrice()).toBe(0);
      expect(book.getLikes()).toBe(0);
      expect(book.getContents()).toBe('');
    });
  });
});
