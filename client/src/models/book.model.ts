export interface Book {
  id: number,
  title: string,
  imgId: number,
  categoryId: number,
  form: string,
  isbn: string,
  summary: string,
  detail: string,
  author: string,
  pages: number,
  contents: string,
  price: number,
  likes: number,
  pubDate: string
}

export interface BookDetail extends Book {
  categoryName: string;
  liked: boolean;
}
