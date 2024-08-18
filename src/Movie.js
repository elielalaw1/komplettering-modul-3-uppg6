import React from 'react';

function Movie({ movie, removeMovie }) {
  const stars = Array(movie.rating).fill('⭐');

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <h5>{movie.title}</h5>
        <p>{stars.join(' ')}</p>
      </div>
      <button className="btn btn-danger" onClick={() => removeMovie(movie.title)}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
}

export default Movie;
