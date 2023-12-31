export const existingBooks = [
  {
    id: 1,
    author: '김어림',
    contents: '목차',
    detail: '많이 어리다...',
    form: '종이책',
    isbn: '0',
    likes: 3,
    pages: 100,
    price: 20000,
    pubDate: '2019-01-01',
    summary: '어리다....',
    title: '어린왕자들',
  },
  {
    id: 2,
    author: '걍구두',
    contents: '목차',
    detail: '투명한 유리구두',
    form: '종이책',
    isbn: '1',
    likes: 10,
    pages: 100,
    price: 20000,
    pubDate: '2019-01-01',
    summary: '유리구두...',
    title: '신델렐라',
  },
  {
    id: 3,
    author: '김어림',
    contents: '목차',
    detail: '많이 어리다...',
    form: '종이책',
    isbn: '2',
    likes: 15,
    pages: 100,
    price: 20000,
    pubDate: '2019-01-01',
    summary: '사과...',
    title: '백설공주들',
  },
  {
    id: 4,
    author: '김어림',
    contents: '목차',
    detail: '많이 어리다...',
    form: '종이책',
    isbn: '3',
    likes: 20,
    pages: 100,
    price: 20000,
    pubDate: '2019-01-01',
    summary: '제비...',
    title: '흥부와 놀부',
  },
];

export const existingBook = {
  id: 1,
  author: '김어림',
  contents: '목차',
  detail: '많이 어리다...',
  form: '종이책',
  isbn: '0',
  likes: 3,
  pages: 100,
  price: 20000,
  pub_date: '2019-01-01',
  summary: '어리다....',
  title: '어린왕자들',
  imgId: 7,
  categoryId: 1,
};

export const nonExistingBook = {
  id: 99999,
  author: '',
  contents: '',
  detail: '',
  form: '',
  isbn: '',
  likes: 99999,
  pages: 99999,
  price: 99999,
  pub_date: '',
  summary: '',
  title: '',
  imgId: 0,
  categoryId: 0,
};

export const newReleaseBook = {
  author: '김어림',
  categoryId: 1,
  contents: '목차',
  detail: '많이 어리다...',
  form: '종이책',
  id: 1,
  imgId: 7,
  isbn: '0',
  likes: 3,
  pages: 100,
  price: 20000,
  pub_date: '2019-01-01',
  summary: '어리다....',
  title: '어린왕자들',
};

export const notNewReleaseBook = {
  author: '',
  categoryId: 999999999,
  contents: '',
  detail: '',
  form: '',
  id: 1,
  imgId: 7,
  isbn: '0',
  likes: 3,
  pages: 100,
  price: 20000,
  pubDate: '2024-01-01',
  summary: '어리다....',
  title: '어린왕자들',
};

export const newNewReleaseBooks = [{
  author: '김어림',
  categoryId: 0,
  contents: '목차',
  detail: '많이 어리다...',
  form: '종이책',
  id: 1,
  imgId: 0,
  isbn: '0',
  likes: 3,
  pages: 100,
  price: 20000,
  pubDate: '2024-01-01',
  summary: '어리다....',
  title: '어린왕자들',
}];
