import React from 'react';

// Own components
import Header from 'Layouts/Header';
import Footer from 'Layouts/Footer';

const MainLayout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
