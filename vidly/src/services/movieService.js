import http from "./httpService";
import config from "../config.json"
import { saveMovie } from './fakeMovieService';

export function getMovies() {
	return http.get(config.moviesEndPoint);
}

export function deleteMovie(movieId) {
	return http.delete(config.moviesEndPoint + "/" + movieId);
}
