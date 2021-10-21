/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// Own components
import MainLayout from 'Layouts/MainLayout';
import Home from 'Pages/Home';
import ProductList from 'Pages/ProductList';

function App() {
  const [actualPage, setActualPage] = useState('home');

  const handleChangePage = (page) => {
    setActualPage(page);
  };

  return (
    <MainLayout onChangePage={handleChangePage}>
      {actualPage === 'home' && <Home onChangePage={handleChangePage} />}
      {actualPage === 'productList' && <ProductList />}
    </MainLayout>
  );
}

export default App;
