import React, { useEffect, useState } from 'react';

// Own components
import SearchInput from 'Common/Components/SearchInput';
import ShoppingCart from 'Common/Components/ShoppingCart';

// Own custom hooks
import useWindowWidthSize from 'Common/CustomHooks/useWindowWidthSize';

// Own Styles
import { HeaderStyled } from 'Styles/Layouts/Header';

// Own assets
import Logo from 'Common/Images/logo3.png';

const Header = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const widthDevice = useWindowWidthSize();

  useEffect(() => {
    if (widthDevice > 768) setSmallScreen(false);
    else setSmallScreen(true);
  }, [widthDevice]);

  useEffect(() => {
    console.log('s', smallScreen);
  });

  const toggleNav = () => setNavVisible(!navVisible);

  return (
    <HeaderStyled>
      <div className="navbar-container">
        <div className="navbar-item">
          <a className="navbar-company" href="/">
            <img className="logo" src={Logo} alt="Logo" />
          </a>
          <nav className={navVisible ? 'navbar-menu active' : 'navbar-menu'}>
            <div className="navbar-menu-item">
              <a href="/">Home</a>
            </div>
            <div className="navbar-menu-item">
              <a href="/">SALE</a>
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
