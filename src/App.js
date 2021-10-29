/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Own components
import MainLayout from 'Layouts/MainLayout';
import Home from 'Pages/Home';
import ProductList from 'Pages/ProductList';
import ProductDetail from 'Pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <MainLayout>
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
