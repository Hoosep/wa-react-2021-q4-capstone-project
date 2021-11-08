/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Own components
import MainLayout from 'Layouts/MainLayout';
import Home from 'Pages/Home';
import ProductList from 'Pages/ProductList';
import ProductDetail from 'Pages/ProductDetail';
import Search from 'Pages/Search';
import Cart from 'Pages/Cart';
import Checkout from 'Pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <MainLayout>
          <Route
            path="/search"
            render={(props) => (
              <Search {...props} />
            )}
          />
          <Route
            path="/home"
            exact
            render={(props) => (
              <Home {...props} />
            )}
          />
          <Route
            path="/products?category=:category"
            exact
            render={(props) => (
              <ProductList {...props} />
            )}
          />
          <Route
            path="/product/:id"
            exact
            render={(props) => (
              <ProductDetail {...props} />
            )}
          />
          <Route
            path="/products"
            exact
            render={(props) => (
              <ProductList {...props} />
            )}
          />
          <Route
            path="/cart"
            exact
            render={(props) => (
              <Cart {...props} />
            )}
          />
          <Route
            path="/checkout"
            exact
            render={(props) => (
              <Checkout {...props} />
            )}
          />
          <Route
            path="/"
            exact
            render={(props) => (
              <Home {...props} />
            )}
          />
        </MainLayout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
