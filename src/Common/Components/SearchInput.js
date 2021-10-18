import React from 'react';

// Own styles
import { SearchInputStyled } from 'Styles/SearchInput';

const SearchInput = () => (
  <SearchInputStyled>
    <button type="button" className="btn-search">
      <i className="fas fa-search" />
    </button>
    <input type="text" className="input-search" placeholder="Type to search..." />
  </SearchInputStyled>
);

export default SearchInput;
