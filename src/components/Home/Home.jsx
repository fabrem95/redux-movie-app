import React from "react";

//Estilos
import "./Home.css";

//Componentes
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
	return (
		<div>
			<div className="home-banner-img"></div>
			<MovieListing />
		</div>
	);
};

export default Home;
