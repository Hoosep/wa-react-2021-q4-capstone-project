import React from 'react';

// Own components
import Header from 'Layouts/Header';
import Footer from 'Layouts/Footer';

const MainLayout = (props) => {
  const { children, onChangePage } = props;

  return (
    <>
      <Header onChangePage={onChangePage} />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
