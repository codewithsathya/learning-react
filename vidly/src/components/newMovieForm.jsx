import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import "../services/fakeGenreService";
import { getGenres } from "../services/fakeGenreService";
import { saveMovie } from "./../services/fakeMovieService";

class NewMovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    errors: {},
  };

  genres = getGenres();

  schema = {
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number().required().min(0).max(10).label("Rate"),
  };

  doSubmit = () => {
    //Adding movie
    const { title, genreId, numberInStock, dailyRentalRate } = this.state.data;
    const movie = {
      title,
      genreId,
      numberInStock,
      dailyRentalRate,
      _id: this.props.movie && this.props.movie._id,
    };
    const movieInDb = saveMovie(movie);
    this.props.history.replace("/movies");
  };

  render() {
    return (
      <div className="container">
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect(this.genres, "genreId", "Genre")}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewMovieForm;
