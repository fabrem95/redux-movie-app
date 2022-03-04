import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

//Estilos
import "./MovieDetails.css";

//Slices
import {
	fetchAsyncMovieOrShowDetails,
	removeSelectedMovieOrShow,
} from "../../features/Movies/MovieSlice";
import Spinner from "../Spinner/Spinner";

const MovieDetails = () => {
	const { imdbID } = useParams();
	const dispatch = useDispatch();

	const data = useSelector((state) => state.movies.selectedMovieOrShow);

	useEffect(() => {
		dispatch(fetchAsyncMovieOrShowDetails(imdbID));

		return () => {
			dispatch(removeSelectedMovieOrShow());
		};
	}, [dispatch, imdbID]);

	let renderMovieOrShow = data.Response === "True" ? (
		<section className="movie-details-section" role='movie-info'>
			<div className="movie-details-left">
				<div className="movie-details-title">{data.Title}</div>
				<div className="movie-details-rating">
					<span>
						IMBD Rating <i className="fa fa-star"></i> : {data.imdbRating}
					</span>
					<span>
						IMBD Votes <i className="fa fa-check-to-slot"></i> :{" "}
						{data.imdbVotes}
					</span>
					<span>
						Runtime <i className="fa fa-clock"></i> : {data.Runtime}
					</span>
					<span>
						Year <i className="fa fa-calendar"></i> : {data.Year}
					</span>
				</div>
				<div className="movie-details-plot">{data.Plot}</div>
				<div className="movie-details-info">
					<div>
						<span>Director: </span>
						<span>{data.Director}</span>
					</div>
					<div>
						<span>Stars: </span>
						<span>{data.Actors}</span>
					</div>
					<div>
						<span>Genres: </span>
						<span>{data.Genre}</span>
					</div>
					<div>
						<span>Languages: </span>
						<span>{data.Language}</span>
					</div>
					<div>
						<span>Awards: </span>
						<span>{data.Awards}</span>
					</div>
				</div>
			</div>
			<div className="movie-details-right">
				<img src={data.Poster} alt={data.Title} />
			</div>
		</section>
	) : (
		<div className="movies-error">
			<h3>{data.Error}</h3>
		</div>
	);

	let renderData = !Object.keys(data).length ? (
		<Spinner />
	) : (renderMovieOrShow);

	return renderData;
};

export default MovieDetails;
