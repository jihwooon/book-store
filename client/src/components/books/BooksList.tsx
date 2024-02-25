import { styled } from "styled-components";
import { Book } from "../../models/book.model";
import BookItem from "./BookItem";

const dummayBook: Book = {
  id: 2,
  title: "신델렐라",
  imgId: 0,
  categoryId: 2,
  form: "종이책",
  isbn: "1",
  summary: "유리구두...",
  detail: "투명한 유리구두",
  author: "걍구두",
  pages: 100,
  contents: "목차",
  price: 20000,
  likes: 0,
  pubDate: "2024-01-01",
};

const BooksList = () => {
  return (
    <BooksListStyle>
      <BookItem book={dummayBook} />
    </BooksListStyle>
  );
};

const BooksListStyle = styled.div``;

export default BooksList;
