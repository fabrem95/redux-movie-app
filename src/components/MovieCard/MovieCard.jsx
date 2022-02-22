import React from "react";
import { Link } from "react-router-dom";

//Estilos
import "./MovieCard.css";

const MovieCard = ({ data }) => {
	return (
		<div className="movie-card-item">
			<Link to={`/movie/${data.imdbID}`}>
				<section className="movie-card-inner">
					<header className="movie-card-header">
						<img src={data.Poster} alt={data.Title} />
					</header>
					<footer className="movie-card-footer">
						<div className="movie-card-info">
							<h4 className="movie-card-title">{data.Title}</h4>
							<p>{data.Year}</p>
						</div>
					</footer>
				</section>
			</Link>
		</div>
	);
};

export default MovieCard;
