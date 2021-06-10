import React from "react";
import NewMovieForm from "./newMovieForm";
import { getMovie, getMovies } from "../services/fakeMovieService";

const MovieForm = ({ match, history }) => {
  console.log(getMovies());
  return (
    <React.Fragment>
      <NewMovieForm movie={getMovie(match.params.id)} history={history} />
    </React.Fragment>
  );
};

export default MovieForm;
