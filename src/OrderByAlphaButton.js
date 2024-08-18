import React from 'react';

function OrderByAlphaButton({ sortByAlpha }) {
  return (
    <button className="btn btn-secondary me-2" onClick={sortByAlpha}>
      Sortera alfabetiskt
    </button>
  );
}

export default OrderByAlphaButton;
