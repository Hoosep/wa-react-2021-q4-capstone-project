import styled from 'styled-components';

export const HeaderStyled = styled.header`
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
      display: flex;
      a {
        width: 100%;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 300;
        font-size: 0.813rem;
        letter-spacing: 0.025rem;
        padding: 0 1rem;

        &.active {
          font-weight: bold;
        }
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

    &.menu-icon {
      display:none;
    }
  }

  .navbar-company {
    align-items: center;
    height: 2rem;
    margin-right: 4rem;

    .logo {
      max-height: 100%;
      width: 45px;
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem;

    .navbar-item.item-right {
      display: flex;
    }

    .navbar-item > .navbar-menu {
      display: none;
    }

    .navbar-item.menu-icon {
      display: flex;
      justify-content: flex-end;
      font-size: 1.3rem;
      cursor: pointer;
    }

    .navbar-menu.active {
      display: flex;
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 4.5rem;
      flex-direction: column;
      list-style-type: none;
      grid-gap: 0px;
      background: #fff;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 9999;
      align-content: center;
      justify-content: center;
      padding-left: 0px;
    }

    .navbar-menu.active > .navbar-menu-item:first-child {
      padding-top: 0;
    }
    .navbar-menu.active > .navbar-menu-item {
      padding: 1.5rem 0;
    }

    .navbar-menu.active > .navbar-menu-item > a {
      display: block;
      text-align: center;
      width: unset;
      font-size: 2.3rem;
      letter-spacing: 8px;
    }
  }
`;
