import styled from 'styled-components';

export const ProductListStyled = styled.div`
  display: flex;

  & .content-product-list {
    overflow-y: auto;
    .container-product-list {
      width: 90%;
      margin: 0 auto;
    }
  } 


  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
