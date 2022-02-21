import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../../services/api/MoviesApiKey";
import MoviesApi from "../../services/api/MoviesApi";

export const fetchAsyncMovies = createAsyncThunk(
	"movies/fetchAsyncMovies",
	async () => {
		const movieText = "Harry";
		const resp = await MoviesApi.get(
			`?i=tt3896198&apiKey=${APIKey}&s=${movieText}&type=movie`
		);

		return resp.data;
	}
);

export const fetchAsyncShows = createAsyncThunk(
	"movies/fetchAsyncShows",
	async () => {
		const showText = "Friends";
		const resp = await MoviesApi.get(
			`?i=tt3896198&apiKey=${APIKey}&s=${showText}&type=series`
		);

		return resp.data;
	}
);

const initialState = {
	movies: {},
	shows: {},
};

const movieSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		addMovies: (state, { payload }) => {
			state.movies = payload;
		},
	},
	extraReducers: {
		[fetchAsyncMovies.pending]: () => {
			console.log("Pending...");
		},
		[fetchAsyncMovies.fulfilled]: (state, { payload }) => {
			console.log("Fetched Movies Succesfully!");
			return { ...state, movies: payload };
		},
		[fetchAsyncMovies.rejected]: () => {
			console.log("Fetch Rejected!");
		},
		[fetchAsyncShows.fulfilled]: (state, { payload }) => {
			console.log("Fetched Shows Succesfully!");
			return { ...state, shows: payload };
		},
	},
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;
