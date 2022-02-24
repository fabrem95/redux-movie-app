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
	status: "idle",
	error: "",
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
		[fetchAsyncMovies.pending]: (state) => {
			console.log("Pending...");
			return { ...state, status: "loading" };
		},
		[fetchAsyncMovies.fulfilled]: (state, { payload }) => {
			console.log("Fetched Movies Succesfully!");
			return { ...state, movies: payload, status: "succeeded" };
		},
		[fetchAsyncMovies.rejected]: (state, { payload }) => {
			console.log("Fetch Rejected!");
			return { ...state, error: payload, status: "failed" };
		},
		[fetchAsyncShows.fulfilled]: (state, { payload }) => {
			console.log("Fetched Shows Succesfully!");
			return { ...state, shows: payload, status: "succeeded" };
		},
		[fetchAsyncMovieOrShowDetails.fulfilled]: (state, { payload }) => {
			console.log("Fetched Shows Succesfully!");
			return { ...state, selectedMovieOrShow: payload, status: "succeeded" };
		},
	},
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export default movieSlice.reducer;
