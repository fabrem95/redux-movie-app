import React from "react";
import { useSelector } from "react-redux";
import { SliderSettings } from "../../settings/settings";

//Estilos
import "./MovieListing.css";

//Componentes
import MovieCard from "../MovieCard/MovieCard";
import Spinner from "../Spinner/Spinner";
import Slider from "react-slick";

const MovieListing = () => {
	const movies = useSelector((state) => state.movies.movies);
	const shows = useSelector((state) => state.movies.shows);
	const dataStatus = useSelector((state) => state.movies.status);

	let renderMovies =
		movies.Response === "True" ? (
			movies.Search.map((movie, i) => (
				<MovieCard key={`movie${i}`} data={movie} />
			))
		) : (
			<div className="movies-error">
				<h3>{movies.Error}</h3>
			</div>
		);

	let renderShows =
		shows.Response === "True" ? (
			shows.Search.map((show, i) => <MovieCard key={`movie${i}`} data={show} />)
		) : (
			<div className="movies-error">
				<h3>{shows.Error}</h3>
			</div>
		);

	let renderData =
		dataStatus === "loading" ? (
			<Spinner />
		) : (
			<div className="movie-wrapper">
				<div className="movie-list">
					<h2>Movies</h2>
					<div className="movie-container">
						<Slider {...SliderSettings}>{renderMovies}</Slider>
					</div>
				</div>
				<div className="movie-list">
					<h2>Shows</h2>
					<div className="movie-container">
						<Slider {...SliderSettings}>{renderShows}</Slider>
					</div>
				</div>
			</div>
		);

	return renderData;
};

export default MovieListing;
