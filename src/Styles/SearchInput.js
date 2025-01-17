import styled from 'styled-components';

export const SearchInputStyled = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  
  ::-webkit-search-cancel-button{
    appearance: none;
  }
  .input-search {
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
    appearance: none;
    box-sizing: content-box;

    ::placeholder,
    ::-webkit-input-placeholder {
      color:#000;
      font-size: 0.813rem;
      letter-spacing: 2px;
    }
  }

  .btn-search {
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

  .btn-search:focus ~ .input-search {
    width: 280px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom:1px solid rgba(255,255,255,.5);
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
  }
  .input-search:focus {
    width: 280px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom:1px solid rgba(255,255,255,.5);
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
  }

  @media (max-width: 768px) {
    &:focus-within {
      position: absolute;
      background-color: white;
      left: 10px;
      z-index: 999;
      width: 80%;
    }

    .input-search {
      transition: none!important;
    }
  }

`;
