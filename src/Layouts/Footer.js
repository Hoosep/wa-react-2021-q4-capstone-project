import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  display: block;
  position: absolute;
  color: #808080;
  text-align: center;
  padding: 2rem 0rem;
  width: 100%;
  box-shadow: 0 -1px 2px 0 rgb(0 0 0/10%);
`;

const Footer = () => (
  <FooterStyled>
    Ecommerce created during Wizeline’s Academy React Bootcamp
  </FooterStyled>
);

export default Footer;
