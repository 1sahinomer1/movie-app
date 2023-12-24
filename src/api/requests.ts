import axios from "axios";

import { API } from "../config/global-config";

import { IMovieDetail, IMoviesRequest } from "../types/requestTypes";

export const fetchMovies = ({ params }: any) => {
  return axios.get<IMoviesRequest>(`${API.BASE_URL}`, {
    params,
  });
};
export const fetchMovie = ({ params }: any) => {
  return axios.get<IMovieDetail>(`${API.BASE_URL}`, {
    params,
  });
};
