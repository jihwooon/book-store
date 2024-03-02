import styled from "styled-components";
import BooksEmpty from "../components/books/BooksEmpty";
import BooksFilter from "../components/books/BooksFilter";
import BooksList from "../components/books/BooksList";
import Pagination from "../components/books/Pagination";
import Title from "../components/common/Title";
import { useBooks } from "../hooks/useBooks";

const Books = () => {
  const { books, pagination, isEmpty} = useBooks();

  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <BooksStyled>
        <BooksFilter />
        {!isEmpty && <BooksList books={books}/>}
        {isEmpty && <BooksEmpty />}
        {!isEmpty && <Pagination />}
      </BooksStyled>
    </>
  );
};

const BooksStyled = styled.div``;

export default Books;
