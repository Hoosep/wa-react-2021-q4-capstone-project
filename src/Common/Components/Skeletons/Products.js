import React from 'react';

// Own styles
import { SkeletonProductsStyled } from 'Styles/Skeletons';

export const SkeletonProducts = ({ number, fullWidth }) => {
  let reactNodeDefault = <SkeletonProductsStyled fullWidth={fullWidth} />;
  if (number) {
    const newNumber = Array.from(Array(number).keys());

    reactNodeDefault = newNumber
      .map((n) => <SkeletonProductsStyled key={n} fullWidth={fullWidth} />);
  }

  return (
    <>
      {reactNodeDefault}
    </>
  );
};
