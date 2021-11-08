import React from 'react';
import { withRouter } from 'react-router-dom';

// Own Styles
import { ShoppingCartStyled } from 'Styles/ShoppingCart';

// Store
import { useStore } from 'Store/store';

const ShoppingCart = withRouter((props) => {
  const { history } = props;
  const [state] = useStore();
  const { totalBag } = state;

  const handleClickCart = () => {
    history.push('/cart');
  };
  return (
    <ShoppingCartStyled onClick={handleClickCart}>
      <i className="fas fa-shopping-bag" />
      <div className="badge">{totalBag}</div>
    </ShoppingCartStyled>
  );
});

export default ShoppingCart;
