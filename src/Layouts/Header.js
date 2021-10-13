import React from 'react';
import styled from 'styled-components';

// Own components
import SearchInput from 'Common/Components/SearchInput';
import ShoppingCart from 'Common/Components/ShoppingCart';

// Own assets
import Logo from 'Common/Images/logo3.png';

const HeaderStyled = styled.header`
  display: flex;
  background-color: #fff;
  height: 4.5rem;
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0 1px 2px 0 rgb(0 0 0/10%);
  padding: 0.5rem 5rem;

  .navbar-container {
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }

  .navbar-item {
    align-items: center;
    display: flex;
    flex: 1 1 auto;

    .navbar-menu {
      a {
        width: 100%;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 300;
        font-size: 0.813rem;
        letter-spacing: 0.025rem;
        padding: 0 1rem;

        &:hover {
          font-weight: bold;
        }
        &:visited {
          color: unset;
        }
      }
    }

    &.item-right {
      justify-content: flex-end;
    }
  }

  .navbar-company {
    align-items: center;
    height: 2rem;
    margin-right: 4rem;

    .logo {
      height: 100%;
    }
  }

`;

const Header = () => (
  <HeaderStyled>
    <div className="navbar-container">
      <div className="navbar-item">
        <a className="navbar-company" href="/">
          <img className="logo" src={Logo} alt="Logo" />
        </a>
        <nav className="navbar-menu">
          <a href="/">Home</a>
          <a href="/">SALE</a>
        </nav>
      </div>
      <div className="navbar-item item-right">
        <ShoppingCart />
        <SearchInput />
      </div>
    </div>
  </HeaderStyled>
);

export default Header;
