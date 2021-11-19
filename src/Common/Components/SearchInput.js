import React from 'react';
import { withRouter } from 'react-router-dom';

// Own styles
import { SearchInputStyled } from 'Styles/SearchInput';

const SearchInput = withRouter((props) => {
  const { history } = props;

  const handleSearchTerm = (e) => {
    const { value: searchTerm } = e.target;
    const { type } = e;

    if (type === 'keypress') {
      const { which } = e;
      if (which === 13) {
        if (searchTerm) {
          history.push(`/search?q=${searchTerm}`);
          // history.go(0);
        }
      }
    } else if (type === 'blur') {
      if (searchTerm) {
        history.push(`/search?q=${searchTerm}`);
        // history.go(0);
      }
    }
  };

  return (
    <SearchInputStyled>
      <button type="button" className="btn-search">
        <i className="fas fa-search" />
      </button>
      <input
        type="text"
        className="input-search"
        placeholder="Type to search..."
        onBlur={handleSearchTerm}
        onKeyPress={handleSearchTerm}
      />
    </SearchInputStyled>
  );
});

export default SearchInput;
