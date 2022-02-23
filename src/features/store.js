import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./Movies/MovieSlice";
import { movieApi } from "../services/api/MoviesApi";

export const store = configureStore({
	reducer: {
		movies: moviesReducer,
		// [movieApi.reducerPath]: movieApi.reducer
	},
	// middleware: (getDefaultMiddleware) => {
	// 	return getDefaultMiddleware().concat(movieApi.middleware);
	// },
});
