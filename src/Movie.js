import React from "react";
import './Movies.css'

const Movie = ({ Poster: poster, Title: title, Year: year }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default Movie;
