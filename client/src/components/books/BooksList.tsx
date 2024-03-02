import { styled } from "styled-components";
import { Book } from "../../models/book.model";
import BookItem from "./BookItem";

interface Props {
  books: Book[]
}

const BooksList = ({ books}: Props) => {
  return (
    <BooksListStyle>
      {
        books?.map((item) => (
          <BookItem key={item.id} book={item} />
        ))
      }
    </BooksListStyle>
  );
};



const BooksListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;

export default BooksList;
