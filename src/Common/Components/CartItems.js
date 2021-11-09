/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// Store
import { useStore } from 'Store/store';
import {
  removeCartTotal, removeProductToCart, removeTotalToBag,
  showMessageProduct, changeQuantityProduct, sumQuantityBag,
  getCartTotalBag,
} from 'Store/reducer';
// Own styles
import { CartItemsStyled, CartItemWrapper } from 'Styles/CartItems';
import Input from 'Styles/Input';
import { Label } from 'Styles/Typography';
import Modal from 'Common/Components/Modal';

const Items = ({
  items,
  summary = false,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);
  const [state, dispatch] = useStore();
  const { cartTotal } = state;

  const handleChangeInput = (event, { productID, realStock, total }) => {
    const { target: { value } } = event;
    if (value < 1) {
      dispatch(
        showMessageProduct({
          message: 'Must be at least 1 item.',
          productID,
        }),
      );
      return;
    }
    if (value > realStock) {
      dispatch(
        showMessageProduct({
          message: `No enough stock. Availables ${realStock}`,
          productID,
        }),
      );
    } else {
      dispatch(
        showMessageProduct({
          message: null,
          productID,
        }),
      );
      dispatch(
        changeQuantityProduct({
          quantity: value,
          productID,
        }),
      );

      dispatch(sumQuantityBag());
      dispatch(getCartTotalBag());
    }
  };

  const toggleModal = (productID, totalItems, productPrice) => {
    if (!showModal) {
      setItemToRemove({
        productID,
        totalItems,
        productPrice,
      });
    } else {
      setItemToRemove(null);
    }
    setShowModal(!showModal);
  };

  const removeItem = (e) => {
    if (itemToRemove) {
      const { productID, totalItems, productPrice } = itemToRemove;
      dispatch(removeProductToCart(productID));
      dispatch(removeTotalToBag(totalItems));
      const total = Number(productPrice * totalItems);
      dispatch(removeCartTotal(total));
    }
    setShowModal(!showModal);
  };

  return (
    <>
      <Modal
        visible={showModal}
        title="Oh, oh!"
        cancelTextButton="Close"
        acceptTextButton="Yes, I'm sure"
        onClickButtonAccepted={removeItem}
        onClickButtonCancel={toggleModal}
      >
        Are you sure to remove this item from your cart?
      </Modal>
      <CartItemsStyled summary={summary}>
        <CartItemWrapper summary={summary}>
          {
          items.map((product) => (
            <div className="item-container" key={product.id}>
              {
                !summary && (
                  <div className="item-image">
                    <img src={product.imageUrl} alt={product.name} />
                  </div>
                )
              }
              <div className="item-info">
                <h5>{product.name}</h5>
              </div>
              {
                !summary && (
                  <>
                    <div className="item-info">
                      <h6>
                        $
                        {product.price}
                      </h6>
                    </div>
                    <div className="item-info quantity">
                      <Input
                        size="sm"
                        type="number"
                        min="1"
                        max={product.realStock}
                        defaultValue={product.total}
                        alignText="center"
                        border
                        fullWidth
                        onChange={(e) => handleChangeInput(e, {
                          realStock: product.realStock,
                          total: product.total,
                          productID: product.id,
                        })}
                      />
                      {
                        product.message && (
                          <Label className="message">{product.message}</Label>
                        )
                      }
                    </div>
                  </>
                )
              }
              {
                summary && (
                  <div className="item-info">
                    <h6>
                      {`${product.total} x $${product.price}`}
                    </h6>
                  </div>
                )
              }
              <div className="item-info">
                <span>
                  $
                  {product.price * product.total}
                </span>
              </div>
              {
                !summary && (
                  <div>
                    <i
                      className="fas fa-trash"
                      onClick={() => toggleModal(product.id, product.total, product.price)}
                      aria-hidden
                    />
                  </div>
                )
              }
            </div>
          ))
        }
          <div className="item-container">
            <div className="cart-total">
              <Label>
                {summary ? 'Order ' : 'Cart '}
                total $
                {Number(cartTotal).toFixed(2)}
              </Label>
            </div>
          </div>
        </CartItemWrapper>
      </CartItemsStyled>
    </>
  );
};

export default Items;
