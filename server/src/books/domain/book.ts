export default class Book {
  private id: number;

  private title: string;

  private imgId: number;

  private categoryId: number;

  private categoryName: string;

  private form: string;

  private isbn: string;

  private summary: string;

  private detail: string;

  private author: string;

  private pages: number;

  private contents: string;

  private price: number;

  private likes: number;

  private pubDate: Date;

  constructor({
    id = 0,
    title = '',
    imgId = 0,
    categoryId = 0,
    categoryName = '',
    form = '',
    isbn = '',
    summary = '',
    detail = '',
    author = '',
    pages = 0,
    contents = '',
    price = 0,
    likes = 0,
    pubDate = new Date(),
  }: {
    id?: number;
    title?: string;
    imgId?: number;
    categoryId?: number;
    categoryName?: string;
    form?: string;
    isbn?: string;
    summary?: string;
    detail?: string;
    author?: string;
    pages?: number;
    contents?: string;
    price?: number;
    likes?: number;
    pubDate?: Date;
  }) {
    this.id = id;
    this.title = title;
    this.imgId = imgId;
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.form = form;
    this.isbn = isbn;
    this.summary = summary;
    this.detail = detail;
    this.author = author;
    this.pages = pages;
    this.contents = contents;
    this.price = price;
    this.likes = likes;
    this.pubDate = pubDate;
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getImgId() {
    return this.imgId;
  }

  getCategoryId() {
    return this.categoryId;
  }

  getCategoryName() {
    return this.categoryName;
  }

  getForm() {
    return this.form;
  }

  getIsbn() {
    return this.isbn;
  }

  getSummary() {
    return this.summary;
  }

  getDetail() {
    return this.detail;
  }

  getAuthor() {
    return this.author;
  }

  getPages() {
    return this.pages;
  }

  getPrice() {
    return this.price;
  }

  getLikes() {
    return this.likes;
  }

  getContents() {
    return this.contents;
  }

  getPubDate() {
    return this.pubDate;
  }
}
