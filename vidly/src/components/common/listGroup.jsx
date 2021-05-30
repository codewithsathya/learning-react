import React, { Component } from "react";
import { getGenres } from "../../services/fakeGenreService";

class ListGroup extends Component {
  state = {
    genres: getGenres(),
  };
  render() {
    return (
      <ul className="list-group">
        <li
          onClick={() => this.props.onGenreChange("all")}
          style={{ cursor: "pointer" }}
          className={
            this.props.currentGenre === "all"
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          All genres
        </li>
        {this.state.genres.map((genre) => {
          return (
            <li
              key={genre._id}
              onClick={() => this.props.onGenreChange(genre.name)}
              style={{ cursor: "pointer" }}
              className={
                this.props.currentGenre === genre.name
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              {genre.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListGroup;
