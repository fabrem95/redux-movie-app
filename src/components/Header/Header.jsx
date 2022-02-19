import React from "react";
import { Link } from "react-router-dom";

//Estilos
import "./Header.css";
import film_png from "../../assets/images/film.png";
import user_png from "../../assets/images/user.png";

const Header = () => {
	return (
		<div className="header">
			<Link to="/">
				<div className="header-logo">Movie App</div>
			</Link>
			<div className="user-img">
				<img src={user_png} alt="Imagen de Usuario" />
			</div>
		</div>
	);
};

export default Header;
