import React from "react";

const MovieReview = ({ movie, onRemove }) => {
  const handleRemove = () => {
    onRemove(movie);
  };
  return (
    <div>
      <h2>{movie.name}</h2>
      <p>Rating: {movie.rating}</p>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Description: {movie.description}</p>
      <p>Actors: {movie.actors.join(", ")}</p>
      <img src={movie.poster} alt={movie.name} />
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default MovieReview;
