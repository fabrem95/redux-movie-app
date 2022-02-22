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

export const fetchAsyncMovieOrShowDetails = createAsyncThunk(
	"movies/fetchAsyncMovieOrShowDetails",
	async (id) => {
		const resp = await MoviesApi.get(`?&apiKey=${APIKey}&i=${id}&Plot=full`);

		return resp.data;
	}
);

const initialState = {
	movies: {},
	shows: {},
	selectedMovieOrShow: {},
};

const movieSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		removeSelectedMovieOrShow: (state) => {
			state.selectedMovieOrShow = {};
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
		[fetchAsyncMovieOrShowDetails.fulfilled]: (state, { payload }) => {
			console.log("Fetched Shows Succesfully!");
			return { ...state, selectedMovieOrShow: payload };
		},
	},
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export default movieSlice.reducer;
