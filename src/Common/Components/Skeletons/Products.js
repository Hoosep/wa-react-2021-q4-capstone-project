import React from 'react';

// Own styles
import { SkeletonProductsStyled } from 'Styles/Skeletons';

export const SkeletonProducts = ({ number }) => {
  let reactNodeDefault = <SkeletonProductsStyled />;
  if (number) {
    const newNumber = Array.from(Array(number).keys());

    reactNodeDefault = newNumber.map((n) => <SkeletonProductsStyled key={n} />);
  }

  return (
    <>
      {reactNodeDefault}
    </>
  );
};
