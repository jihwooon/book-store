import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import { Pagination as IPagination } from "../../models/pagination.model";
import Button from "../common/Button";
import { LIMIT } from "../constants/pagination";
import { QUERYSTRING } from "../constants/querystring";

interface Props {
  pagination: IPagination
}

const Pagination = ({ pagination }: Props) => {
  const [searchparams, setSearchParams] = useSearchParams()
  const { totalCount, currentPage } = pagination || {};
  const pages: number = Math.ceil(totalCount / LIMIT)

  const handleClickPage = (page: number) => {
    const newSearchParams = new URLSearchParams(searchparams);

    newSearchParams.set(QUERYSTRING.PAGE, page.toString())

    setSearchParams(newSearchParams);
  }

  return (
    <PaginationStyle>
      {
        pages > 0 && (
          <ol>
            {Array(pages)
              .fill(0)
              .map((_, index) => (
                <li key={index}>
                  <Button
                    size="small"
                    scheme={currentPage ? "primary" : "normal"}
                    onClick={() => handleClickPage(index + 1)}
                    >
                    {index + 1}
                  </Button>
                </li>
              ))}
          </ol>
        )
      }
    </PaginationStyle>
  );
};

const PaginationStyle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 24px 0;

  ol {
    list-style: none;
    display: flex;
    gap: 8px;
    margin: 0;
  }
`;

export default Pagination;
