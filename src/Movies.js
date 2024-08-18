import React from 'react';
import './MovieApplication.css'; // Importera CSS för att styla komponenten

function Movies({ movies, removeMovie }) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <img
          key={i}
          src="/images/star.png" // Eller använd korrekt sökväg beroende på var bilderna är placerade
          alt="Star"
          className="star-icon"
        />
      );
    }
    return stars;
  };

  return (
    <div>
      {movies.map((movie, index) => (
        <div key={index} className="movie-item">
          <div className="movie-title">{movie.title}</div>
          <div className="stars">
            {renderStars(movie.rating)}
          </div>
          <button className="remove-button" onClick={() => removeMovie(movie.title)}>
            <img src="/images/delete.png" alt="Remove" className="remove-icon" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Movies;
