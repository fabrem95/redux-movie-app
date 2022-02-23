// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { APIKey } from "./MoviesApiKey";
import axios from "axios";

// export const movieApi = createApi({
// 	reducerPath: "movieApi",
// 	baseQuery: fetchBaseQuery({
// 		baseUrl: `http://www.omdbapi.com/?&apiKey=${APIKey}&`,
// 	}),
// 	endpoints(builder) {
// 		return {
// 			fetchMovies: builder.query({
// 				query(type = "movie", id = "tt3896198", search = "Harry") {
// 					return `?i=${id}&s=${search}&type=${type}`;
// 				},
// 			}),
// 			fetchShows: builder.query({
// 				query(type = "series", id = "tt3896198", search = "Friends") {
// 					return `?i=${id}&s=${search}&type=${type}`;
// 				},
// 			}),
// 			fetchMovieOrShowDetails: builder.query({
// 				query(id = "tt3896198", plot = "full") {
// 					return `?i=${id}&Plot=${plot}`;
// 				},
// 			}),
// 		};
// 	},
// });

// export const {
// 	useFetchMoviesQuery,
// 	useFetchShowsQuery,
// 	useFetchMovieOrShowDetailsQuery,
// } = movieApi;

export default axios.create({
	baseURL: "http://www.omdbapi.com",
});
