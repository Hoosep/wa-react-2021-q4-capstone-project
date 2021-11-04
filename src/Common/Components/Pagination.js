/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';

// Own styles
import PaginationStyled from 'Styles/Pagination';

const range = (start, end) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  onChange,
}) => {
  const [mapTotalPages, setMapTotalPages] = useState([]);
  useEffect(() => {
    const items = range(1, totalPages);
    setMapTotalPages(items);
  }, [totalPages]);

  const handleClick = (pageSelected) => {
    onChange(pageSelected);
  };

  if (!totalItems || totalItems === 0) {
    return null;
  }

  return (
    <PaginationStyled>
      {
        currentPage !== 1 && (
          <div
            className="page arrow"
            onClick={() => handleClick(1)}
            aria-hidden="true"
          >
            &lt;
          </div>
        )
      }

      {
        mapTotalPages.map((i) => (
          <div
            key={i}
            className={`page ${currentPage === i ? 'active' : ''}`}
            onClick={() => handleClick(i)}
            aria-hidden="true"
          >
            {i}
          </div>
        ))
      }

      {
        currentPage !== totalPages && (
          <div
            className="page arrow"
            onClick={() => handleClick(totalPages)}
            aria-hidden="true"
          >
            &gt;
          </div>
        )
      }
    </PaginationStyled>
  );
};

export default Pagination;
