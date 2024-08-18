import React from 'react';

function OrderByGradeButton({ sortByGrade }) {
  return (
    <button className="btn btn-secondary" onClick={sortByGrade}>
      Sortera efter betyg
    </button>
  );
}

export default OrderByGradeButton;
