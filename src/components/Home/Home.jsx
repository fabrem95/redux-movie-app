import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { APIKey } from "../../services/api/MoviesApiKey";

//Estilos
import "./Home.css";

//Slices
import { addMovies } from "../../features/Movies/MovieSlice";

//Componentes
import MovieListing from "../MovieListing/MovieListing";
import MoviesApi from "../../services/api/MoviesApi";

const Home = () => {
	const movieText = "Harry";
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchMovies = async () => {
			const resp = await MoviesApi.get(
				`?i=tt3896198&apiKey=${APIKey}&s=${movieText}&type=movie`
			).catch((error) => console.error(error));

			dispatch(addMovies(resp.data));
		};

		fetchMovies();
	}, []);

	return (
		<div>
			<div className="home-banner-img"></div>
			<MovieListing />
		</div>
	);
};

export default Home;
