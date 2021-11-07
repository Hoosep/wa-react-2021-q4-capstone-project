/* eslint-disable no-unused-vars */
import React from 'react';

// Store
import { useStore } from 'Store/store';
import { removeCartTotal, removeProductToCart, removeTotalToBag } from 'Store/reducer';
// Own styles
import { CartItemsStyled, CartItemWrapper } from 'Styles/CartItems';
import Input from 'Styles/Input';
import { Label } from 'Styles/Typography';

const Items = ({
  items,
}) => {
  const [state, dispatch] = useStore();
  const { cartTotal } = state;

  const handleRemoveItem = (productID, totalItems, productPrice) => {
    dispatch(removeProductToCart(productID));
    dispatch(removeTotalToBag(totalItems));
    const total = Number(productPrice * totalItems);
    dispatch(removeCartTotal(total));
  };

  const handleChangeInput = (event, realStock) => {
    const { target: { value } } = event;

    console.log('value', value);
    console.log('realSto', realStock);
  };

  return (
    <CartItemsStyled>
      <CartItemWrapper>
        {
        items.map((product) => (
          <div className="item-container" key={product.id}>
            <div className="item-image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="item-info">
              <h5>{product.name}</h5>
            </div>
            <div className="item-info">
              <h6>
                $
                {product.price}
              </h6>
            </div>
            <div className="item-info">
              <Input
                size="sm"
                defaultValue={product.total}
                align="center"
                border
                fullWidth
                onChange={(e) => handleChangeInput(e, product.realStock)}
              />
            </div>
            <div className="item-info">
              <span>
                $
                {product.price * product.total}
              </span>
            </div>
            <div>
              <i
                className="fas fa-trash"
                onClick={() => handleRemoveItem(product.id, product.total, product.price)}
                aria-hidden
              />
            </div>
          </div>
        ))
      }
        <div className="item-container">
          <div className="cart-total">
            <Label>
              Cart total $
              {Number(cartTotal).toFixed(2)}
            </Label>
          </div>
        </div>
      </CartItemWrapper>
    </CartItemsStyled>
  );
};

export default Items;
