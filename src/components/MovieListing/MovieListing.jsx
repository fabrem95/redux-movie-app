import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/Movies/MovieSlice";

//Estilos
import "./MovieListing.css";

//Componentes
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
	const movies = useSelector(getAllMovies);
	let renderMovies = "";

	renderMovies =
		movies.Response === "True" ? (
			movies.Search.map((movie, i) => (
				<MovieCard key={`movie${i}`} data={movie} />
			))
		) : (
			<div className="movies-error">
				<h3>{movies.Error}</h3>
			</div>
		);
	return (
		<div className="movie-wrapper">
			<div className="movie-list">
				<h2>Movies</h2>
				<div className="movie-container">{renderMovies}</div>
			</div>
		</div>
	);
};

export default MovieListing;
