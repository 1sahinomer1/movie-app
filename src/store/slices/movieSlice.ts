import { createSlice } from "@reduxjs/toolkit";

import { getMovie } from "../thunks/movieThunks";
import { MovieInitialState } from "../../types/storeTypes";

const initialState: MovieInitialState = {
  data: null,
  isLoading: false,
  error: null,
};
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovie.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(getMovie.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });

    builder.addCase(getMovie.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default moviesSlice.reducer;
