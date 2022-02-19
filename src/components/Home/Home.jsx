import React, { useEffect } from "react";
import { APIKey } from "../../services/api/MoviesApiKey";

//Estilos
import "./Home.css";

//Componentes
import MovieListing from "../MovieListing/MovieListing";
import MoviesApi from "../../services/api/MoviesApi";

const Home = () => {
	useEffect(() => {
		const movieText = "Harry";

		const fetchMovies = async () => {
			const resp = await MoviesApi.get(
				`?i=tt3896198&apiKey=${APIKey}&s=${movieText}&type=movie`
			).catch((error) => console.error(error));

			console.log(resp);
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
