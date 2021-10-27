/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// Own styles
import PaginationStyled from 'Styles/Pagination';

const Pagination = () => (
  <PaginationStyled>
    <div className="page arrow">
      &lt;
    </div>

    <div className="page">
      1
    </div>
    <div className="page">
      2
    </div>

    <div className="page active">
      3
    </div>

    <div className="page">
      4
    </div>

    <div className="page">
      5
    </div>

    <div className="page arrow">
      &gt;
    </div>
  </PaginationStyled>
);

export default Pagination;
