import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import MovieReviews from "./MovieReviews";
import MovieForm from "./MovieForm";
import moviesData from "./movies.json";
import MovieReview from "./MovieReview"; 

function App(){
  const [movies, setMovies] = useState(moviesData);
  const handleAddMovie = (newMovie) =>{
    setMovies([...movies, newMovie]);
  };

  const handleRemoveMovie = (movieId) =>{
    const movieIndex = movies.findIndex((movie) => movie.id === movieId);
    if (movieIndex !== -1) {
      const updatedMovies = [...movies.slice(0, movieIndex), ...movies.slice(movieIndex + 1)];
      setMovies(updatedMovies);
    }
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<MovieReviews movies={movies} onRemove={handleRemoveMovie} />} />
          <Route path="/form" element={<MovieForm onAdd={handleAddMovie} />} />
          <Route path="/movie/:id" element={<MovieReview movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;