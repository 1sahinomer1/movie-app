import { IMovie, IMovieDetail } from "./requestTypes";

export type MoviesInitialState = {
  data: IMovie[];
  isLoading: boolean;
  error: any;
  totalResults: number;
};
export type MovieInitialState = {
  data: IMovieDetail | null;
  isLoading: boolean;
  error: any;
};
