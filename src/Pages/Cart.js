/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';

// Own components
import Container from 'Styles/Layouts/Container';
import Row from 'Styles/Layouts/Row';
import Col from 'Styles/Layouts/Col';
import { Paragraph, Title } from 'Styles/Typography';
import CartItems from 'Common/Components/CartItems';
import Button from 'Common/Components/Button';

// Store
import { useStore } from 'Store/store';

const Cart = withRouter((props) => {
  const { history } = props;
  const [state] = useStore();
  const { cart, proceedCheckout } = state;

  const handleGoCheckout = () => history.push('/checkout');

  return (
    <Container paddingVertical paddingHorizontal fluid>
      <Row>
        <Col>
          <Title>
            Shopping Cart
          </Title>
        </Col>
      </Row>
      <Row>
        <Col>
          {
            Array.isArray(cart) && cart.length === 0 && (
              <Paragraph>
                Your cart is empty. Go to
                {' '}
                <Link to="/products">products page</Link>
                {' '}
                to add items to cart.
              </Paragraph>
            )
          }
          {
            Array.isArray(cart) && cart.length > 0 && (
              <CartItems items={cart} />
            )
          }
        </Col>
      </Row>
      {
        Array.isArray(cart) && cart.length > 0 && (
          <Row>
            <Col>
              <Button align="right" disabled={!proceedCheckout} onClick={handleGoCheckout}>Proceed to checkout</Button>
            </Col>
          </Row>
        )
      }
    </Container>
  );
});

export default Cart;
