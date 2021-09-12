import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import Movie from "./Movie";
import "./Movies.css";

const Movies = () => {
  const { movies } = useGlobalContext();
  return (
    <section className="movie-container">
      {movies.map((movie) => {
        return (
          <Link to={`/movie/${movie.imdbID}`}>
            <Movie key={movie.id} {...movie} />
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
