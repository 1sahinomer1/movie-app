import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchMovie, fetchMovies } from "../../api/requests";

type paramType = {
  s?: string;
  page?: number;
  type?: string;
  y?: number | null;
  i?: string;
};
export const getMovies = createAsyncThunk(
  "getMovies",
  async (params: paramType, { rejectWithValue }) => {
    try {
      const response = await fetchMovies({ params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getMovie = createAsyncThunk(
  "getMovie",
  async (params: paramType, { rejectWithValue }) => {
    try {
      const response = await fetchMovie({ params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
