import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

//Estilos
import "./Header.css";
import film_png from "../../assets/images/film.png";
import user_png from "../../assets/images/user.png";

//Slices
import {
	fetchAsyncMovies,
	fetchAsyncShows,
} from "../../features/Movies/MovieSlice";

const Header = () => {
	const dispatch = useDispatch();

	const [term, setTerm] = useState("");

	function handleSearchSubmit(e) {
		if (term === "") return e.preventDefault();
		e.preventDefault();
		dispatch(fetchAsyncMovies(term));
		dispatch(fetchAsyncShows(term));
		setTerm("");
	}

	return (
		<div className="header">
			<Link to="/" className="logo-container">
				<div className="user-img">
					<img src={film_png} alt="Movie App Logo" />{" "}
				</div>
				<div className="header-logo">Movie App</div>
			</Link>
			<div className="header-search-bar">
				<form onSubmit={handleSearchSubmit}>
					<input
						type="text"
						value={term}
						placeholder="Search Movies or Shows"
						onChange={(e) => setTerm(e.target.value)}
					/>
					<button type="submit">
						<i className="fa fa-search"></i>
					</button>
				</form>
			</div>
			<div className="user-img">
				<img src={user_png} alt="Imagen de Usuario" />
			</div>
		</div>
	);
};

export default Header;
