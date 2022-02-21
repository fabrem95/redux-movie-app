import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

//Estilos
import "./Home.css";

//Slices
import {
	fetchAsyncMovies,
	fetchAsyncShows,
} from "../../features/Movies/MovieSlice";

//Componentes
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAsyncMovies());
		dispatch(fetchAsyncShows());
	}, [dispatch]);

	return (
		<div>
			<div className="home-banner-img"></div>
			<MovieListing />
		</div>
	);
};

export default Home;
