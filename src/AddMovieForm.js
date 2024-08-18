import React, { useState } from 'react';

function AddMovieForm({ addMovie }) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !rating) {
      alert('Vänligen ange både titel och betyg.');
      return;
    }
    addMovie({ title, rating: parseInt(rating) });
    setTitle('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="mb-3">
        <label className="form-label">Titel</label>
        <input 
          type="text" 
          className="form-control" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Ange filmtitel" 
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Betyg (1-5)</label>
        <select 
          className="form-control" 
          value={rating} 
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">Välj ett betyg</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Lägg till film</button>
    </form>
  );
}

export default AddMovieForm;
