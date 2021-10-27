import React from 'react';

// Own styles
import ButtonStyled from 'Styles/Button';

const Button = (props) => {
  const {
    children, align, spaceTop, spaceBottom, ...rest
  } = props;

  return (
    <ButtonStyled
      type="button"
      align={align}
      spaceTop={spaceTop}
      spaceBottom={spaceBottom}
      {...rest}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
