/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';

// Own components
import Container from 'Styles/Layouts/Container';
import Row from 'Styles/Layouts/Row';
import Col from 'Styles/Layouts/Col';
import { Title, Label } from 'Styles/Typography';
import Input from 'Styles/Input';
import Textarea from 'Styles/Textarea';
import Form from 'Common/Components/Form';
import Button from 'Common/Components/Button';
import CartItems from 'Common/Components/CartItems';

// Store
import { useStore } from 'Store/store';

const Checkout = withRouter((props) => {
  const { history } = props;
  const [state] = useStore();
  const { cart, proceedCheckout } = state;

  const handleBackCart = () => history.push('/cart');

  if (!proceedCheckout || cart.length === 0) history.push('/products');

  return (
    <Container paddingVertical paddingHorizontal fluid>
      <Row>
        <Col>
          <Title>
            Checkout
          </Title>
        </Col>
      </Row>
      <Row>
        <Form>
          <Row>
            <Col>
              <Label marginBottom="sm">Name</Label>
              <Input size="md" border fullWidth />
            </Col>
            <Col>
              <Label marginBottom="sm">Email</Label>
              <Input size="md" border fullWidth />
            </Col>
            <Col>
              <Label marginBottom="sm">Zip code</Label>
              <Input size="md" border fullWidth />
            </Col>
          </Row>
          <Row>
            <Col>
              <Label marginBottom="sm" marginTop="md">Notes</Label>
              <Textarea rows="4" size="md" border fullWidth />
            </Col>
          </Row>
        </Form>
      </Row>
      <Row>
        <Col>
          <Title>Order summary</Title>
        </Col>
      </Row>
      <Row>
        <Col>
          {
            Array.isArray(cart) && cart.length > 0 && (
              <CartItems items={cart} summary />
            )
          }
        </Col>
      </Row>
      <Row>
        <Col>
          <Button align="left" onClick={handleBackCart}>Go back to cart</Button>
        </Col>
        <Col>
          <Button align="right">Place order</Button>
        </Col>
      </Row>
    </Container>
  );
});

export default Checkout;
