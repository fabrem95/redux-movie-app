import axios from "axios";
import { APIKey } from "./MoviesApiKey";

export default axios.create({
	baseURL: "http://www.omdbapi.com",
});
