import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";
import "./MoviePage.css";

const MoviePage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  const fetchMovie = async () => {
    setLoading(true);
    const response = await fetch(`${API_ENDPOINT}&i=${id}`);
    const data = await response.json();

    console.log(data);
    if (data.Response === "True") {
      setMovie(data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="movie-page">
      <div className="poster">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="single-movie-info">
        <h2>{movie.Title}</h2>
        <p>{movie.Plot}</p>
        <p>
          Year: <strong>{movie.Year}</strong>
        </p>
        <Link to="/" className="btn">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default MoviePage;
