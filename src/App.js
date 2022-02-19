import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Switch,
} from "react-router-dom";

//Estilos
import "./App.css";

//Componentes
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound404 from "./components/404PageNotFound/404PageNotFound";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<Router>
				<Header></Header>
				<div className="layout-container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/movie/:imdbID" element={<MovieDetails />} />
						<Route path="*" element={<PageNotFound404 />} />
					</Routes>
				</div>
				<Footer></Footer>
			</Router>
		</div>
	);
}

export default App;
