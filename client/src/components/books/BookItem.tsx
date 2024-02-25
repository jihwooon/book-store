import { FaHeart } from "react-icons/fa";
import { styled } from "styled-components";
import { Book } from "../../models/book.model";
import { formatNumber } from "../../utils/format";
import { getImgSrc } from "../../utils/image";

interface Props {
  book: Book;
}

const BookItem = ({ book }: Props) => {
  return (
    <BookItemStyled>
      <div className="img">
        <img src={getImgSrc(book.id)} alt={book.title} />
      </div>
      <div className="content">
        <h2 className="title">{book.title}</h2>
        <p className="summary">{book.summary}</p>
        <p className="author">{book.author}</p>
        <p className="price">{formatNumber(book.price)}원</p>
      </div>
      <div className="likes">
        <FaHeart />
        <span>{book.likes}</span>
      </div>
    </BookItemStyled>
  );
};

const BookItemStyled = styled.div``;

export default BookItem;
