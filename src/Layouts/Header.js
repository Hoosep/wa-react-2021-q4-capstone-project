import React, { useState, useEffect } from 'react';

// Own components
import SearchInput from 'Common/Components/SearchInput';
import ShoppingCart from 'Common/Components/ShoppingCart';

// Own Styles
import { HeaderStyled } from 'Styles/Layouts/Header';

// Own assets
import Logo from 'Common/Images/logo.png';

const Header = (props) => {
  const { onChangePage } = props;
  const [navVisible, setNavVisible] = useState(false);
  const [pageActive, setPageActive] = useState(null);

  const toggleNav = () => setNavVisible(!navVisible);

  useEffect(() => {
    const element = document.body;

    if (navVisible) element.style.overflowY = 'hidden';
    else element.style.overflowY = null;
  }, [navVisible]);

  const handleClickPage = (e, page) => {
    e.preventDefault();
    onChangePage(page);
    setPageActive(page);
    setNavVisible(false);
  };

  return (
    <HeaderStyled>
      <div className="navbar-container">
        <div className="navbar-item">
          <a className="navbar-company" href="/" onClick={(e) => handleClickPage(e, 'home')}>
            <img className="logo" src={Logo} alt="Logo" />
          </a>
          <nav className={navVisible ? 'navbar-menu active' : 'navbar-menu'}>
            <div className="navbar-menu-item">
              <a href="/" onClick={(e) => handleClickPage(e, 'home')} className={`${pageActive === 'home' ? 'active' : ''}`}>Home</a>
            </div>
            <div className="navbar-menu-item">
              <a href="/" onClick={(e) => handleClickPage(e, 'productList')} className={`${pageActive === 'productList' ? 'active' : ''}`}>Products</a>
            </div>
          </nav>
        </div>
        <div className="navbar-item item-right">
          <ShoppingCart />
          <SearchInput />
        </div>
        <div onClick={toggleNav} aria-hidden="true" className="navbar-item menu-icon">
          {
            navVisible ? (
              <i className="fas fa-times" />
            ) : (
              <i className="fas fa-bars" />
            )
          }
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
