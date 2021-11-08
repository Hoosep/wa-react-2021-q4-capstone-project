import React from 'react';

import FormStyled from 'Styles/Form';

const Form = (props) => {
  const { children } = props;

  return (
    <FormStyled>
      {children}
    </FormStyled>
  );
};

export default Form;
