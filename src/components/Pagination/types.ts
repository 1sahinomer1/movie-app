export type PaginationProps = {
  page: number;
  totalResults: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};
