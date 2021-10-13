import React from 'react';
import styled from 'styled-components';

const SearchInputStyled = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;

  .input-search{
    height: 30px;
    width: 0px;
    border-style: none;
    padding: 10px;
    font-size: 0.813rem;
    letter-spacing: 2px;
    outline: none;
    border-radius: 0;
    transition: all .5s ease-in-out;
    padding-right: 40px;
    color:#000;

    ::placeholder,
    ::-webkit-input-placeholder {
      color:#000;
      font-size: 0.813rem;
      letter-spacing: 2px;
    }
  }

  .btn-search{
    width: 35px;
    height: 35px;
    border-style: none;
    font-size: 1rem;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    right: 0px;
    color:#000 ;
    background-color:transparent;
    pointer-events: painted;

    .fa-search {
      margin-top: 17px;
    }
  }

  .btn-search:focus ~ .input-search{
    width: 280px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom:1px solid rgba(255,255,255,.5);
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
  }
  .input-search:focus{
    width: 280px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom:1px solid rgba(255,255,255,.5);
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
  }
`;

const SearchInput = () => (
  <SearchInputStyled>
    <button type="button" className="btn-search">
      <i className="fas fa-search" />
    </button>
    <input type="text" className="input-search" placeholder="Type to search..." />
  </SearchInputStyled>
);

export default SearchInput;
