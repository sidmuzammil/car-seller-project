import React from 'react';
import { useNavigate } from 'react-router-dom';

function Pagination() {
  const navigate = useNavigate();

  const handlePageClick = (pageNumber) => {
    navigate(`/page${pageNumber}`);
  };

  return (
    <div>
      {Array.from({ length: 10 }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageClick(index + 1)}
        >
          Page {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
