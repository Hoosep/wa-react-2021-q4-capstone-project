import React from 'react';

// Own Styles
import { ShoppingCartStyled } from 'Styles/ShoppingCart';

const ShoppingCart = () => (
  <ShoppingCartStyled>
    <i className="fas fa-shopping-bag" />
    <div className="badge">10</div>
  </ShoppingCartStyled>
);

export default ShoppingCart;
