// MovieApplication.js
import React, { useState } from 'react';
import AddMovieForm from './AddMovieForm';
import Movies from './Movies';
import OrderByAlphaButton from './OrderByAlphaButton';
import OrderByGradeButton from './OrderByGradeButton';
import './MovieApplication.css'; 

function MovieApplication() {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => setMovies([...movies, movie]);
  const removeMovie = (title) => setMovies(movies.filter(movie => movie.title !== title));
  const sortByAlpha = () => setMovies([...movies].sort((a, b) => a.title.localeCompare(b.title)));
  const sortByGrade = () => setMovies([...movies].sort((a, b) => b.rating - a.rating));

  return (
    <div className="container mt-5">
      <h1>Min Filmlista</h1>
      <AddMovieForm addMovie={addMovie} />
      <div className="mt-3">
        
      </div>
      <div className="movie-list-container">
      <h2>Inlagda filmer</h2>
        <Movies movies={movies} removeMovie={removeMovie} />
        <OrderByAlphaButton sortByAlpha={sortByAlpha} />
        <OrderByGradeButton sortByGrade={sortByGrade} />
      </div>
    </div>
  );
}

export default MovieApplication;
