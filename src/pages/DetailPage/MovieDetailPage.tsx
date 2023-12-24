import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getMovie } from "../../store/thunks/movieThunks";

import "./styles.scss";

const MovieDetailPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector((state) => state.movie);

  useEffect(() => {
    id && dispatch(getMovie({ i: id }));
  }, [dispatch, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="movie-details">
      <div className="poster">
        <img src={data.Poster} alt={data.Title} />
      </div>
      <div className="details">
        <h1>{data.Title}</h1>
        <p>Year: {data.Year}</p>
        <p>Rated: {data.Rated}</p>
        <p>Released: {data.Released}</p>

        <p>Director: {data.Director}</p>
        <p>Writer: {data.Writer}</p>
        <p>Actors: {data.Actors}</p>
      </div>
    </div>
  );
};

export default MovieDetailPage;
