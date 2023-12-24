import { createSlice } from "@reduxjs/toolkit";

import { getMovies } from "../thunks/movieThunks";
import { MoviesInitialState } from "../../types/storeTypes";

const initialState: MoviesInitialState = {
  data: [],
  totalResults: 0,
  isLoading: false,
  error: null,
};
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.data = action.payload.Search;
      state.totalResults = Number(action.payload.totalResults);
      state.isLoading = false;
    });

    builder.addCase(getMovies.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default moviesSlice.reducer;
