import { configureStore } from "@reduxjs/toolkit";

import moviesSlice from "./slices/moviesSlice";
import movieSlice from "./slices/movieSlice";

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    movie: movieSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
