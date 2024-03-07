import { FaHeart } from "react-icons/fa";
import styled from "styled-components";
import { BookDetail } from "../../models/book.model";
import Button from "../common/Button";

interface Props {
	book: BookDetail;
	onClick: () => void;
}

const LikeButton = ({book, onClick}: Props) => {
	return (
		<LikeButtonStyle>
			<Button size="medium" scheme={book.liked ? "like" : "normal"} onClick={onClick} >
				<FaHeart />
					{book.likes}
			</Button>
		</LikeButtonStyle>
	);
}

const LikeButtonStyle = styled.div`
  display: flex;
	gap: 6px;

	svg {
		color: inherit;
		* {
			color: inherit;
		}
	}
`;

export default LikeButton;
