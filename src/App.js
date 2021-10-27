/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Own components
import MainLayout from 'Layouts/MainLayout';
import Home from 'Pages/Home';
import ProductList from 'Pages/ProductList';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

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
