import React from "react";

//Estilos
import "./Spinner.css";

function Spinner() {
	return (
		<div role='loader' className="spinner-container">
			<div id="img1" className="img"></div>
			<div id="img2" className="img"></div>
			<div id="img3" className="img"></div>
			<div id="img4" className="img"></div>
			<div id="img5" className="img"></div>
		</div>
	);
}

export default Spinner;
