import React from "react";

const MovieReviews = ({ movies, onRemove }) =>{
  const handleRemove = (movieId) =>{
    onRemove(movieId);
  };
  return (
    <div>
      <h2>Movie Reviews</h2>
      <ul>
        {movies.map((movie) =>(
          <li key={movie.id}>
            <div>
              <h2>{movie.name}</h2>
              <img src={movie.poster} alt={movie.name} width="300" 
                height="auto"/>
              <p>Rating: {movie.rating}</p>
              <p>Release Date: {movie.releaseDate}</p>
              <p>Description: {movie.description}</p>
              <p>Actors: {Array.isArray(movie.actors) ? movie.actors.join(", ") : movie.actors}</p>
              <button onClick={() => handleRemove(movie.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;