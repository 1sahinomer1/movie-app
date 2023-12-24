import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getMovies } from "../../store/thunks/movieThunks";

import { Table } from "../../components";

import { moviesColumn } from "./columns";

import { debounce, generateYears } from "../../utils";

import "./styles.scss";
const HomePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data, isLoading, totalResults } = useAppSelector(
    (state) => state.movies
  );

  const [search, setSearch] = useState("Pokemon");
  const [searchType, setSearchType] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [page, setPage] = useState<number>(1);

  const handleCheckboxChange = (type: string) => {
    setSearchType(type);
    setPage(1);
  };

  const handleChangeYearSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const year = parseInt(event.target.value);
    setSelectedYear(year);
  };

  useEffect(() => {
    dispatch(getMovies({ s: search, page, type: searchType, y: selectedYear }));
  }, [dispatch, page, search, searchType, selectedYear]);

  const handleRowClick = (cell: any) => {
    if (cell.column.columnDef.accessorKey === "Title")
      navigate(`/movie/${cell.row.original.imdbID}`);
  };

  const handleSearchChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearch(e.target.value);
  };

  return (
    <div className="home-page">
      <div className="types">
        <label>
          <input
            type="checkbox"
            value="movie"
            checked={searchType === "movie"}
            onChange={() => handleCheckboxChange("movie")}
          />
          Movies
        </label>
        <label>
          <input
            type="checkbox"
            value="series"
            checked={searchType === "series"}
            onChange={() => handleCheckboxChange("series")}
          />
          Series
        </label>
        <label>
          <input
            type="checkbox"
            value="episode"
            checked={searchType === "episode"}
            onChange={() => handleCheckboxChange("episode")}
          />
          Episodes
        </label>
      </div>

      <select value={selectedYear || ""} onChange={handleChangeYearSelect}>
        <option value="" disabled>
          Yıl Seçin
        </option>
        {generateYears().map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <div className="search-container">
        <label htmlFor="search">Search</label>
        <input
          defaultValue={search}
          id="search"
          onChange={debounce(handleSearchChange, 1000)}
        />
      </div>
      {data ? (
        <Table
          columns={moviesColumn}
          data={data}
          setPage={setPage}
          isPagination
          page={page}
          isLoading={isLoading}
          totalResults={totalResults}
          handleRowClick={handleRowClick}
        />
      ) : (
        <p>Movie not found!</p>
      )}
    </div>
  );
};

export default HomePage;
