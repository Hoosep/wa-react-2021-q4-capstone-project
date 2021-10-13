import React from 'react';
import styled from 'styled-components';

const ShoppingCartStyled = styled.div`
  padding-right: 1rem;

  .fa-shopping-bag {
    margin-top: 22px;
    font-size: 1rem;
    font-weight: bold;
    outline: none;
    cursor: pointer;
  }

  .badge {
    transform: translate(30%,-140%);
    transform-origin: 100% 0%;
    z-index: auto;
    padding: 0 5px;
    color: #fff;
    font-weight: bold;
    font-size: 0.65rem;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: #ff4d4f;
    border-radius: 15px;
  }
`;

const ShoppingCart = () => (
  <ShoppingCartStyled>
    <i className="fas fa-shopping-bag" />
    <div className="badge">10</div>
  </ShoppingCartStyled>
);

export default ShoppingCart;
