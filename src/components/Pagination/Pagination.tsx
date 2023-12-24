import { PaginationProps } from "./types";

import "./styles.scss";
const Pagination = ({ page, setPage, totalResults }: PaginationProps) => {
  let maxPage = Math.ceil(totalResults / 10);
  return (
    <div className="pagination">
      <button
        disabled={page === 1}
        onClick={() => setPage((prevPage: number) => prevPage - 1)}
      >
        geri
      </button>
      <p>{page}</p>
      <button
        disabled={page === maxPage}
        onClick={() => {
          if (page === maxPage) return;
          setPage((prevPage: number) => prevPage + 1);
        }}
      >
        ileri
      </button>
    </div>
  );
};

export default Pagination;
