import styled from 'styled-components';

export const ProductsStyled = styled.div`
padding: 2rem;
`;

export const ProductsWrapper = styled.section`
display: flex;
flex-wrap: wrap;

.product-card {
  display: flex;
  flex-direction: column;
  padding: 2%;
  margin: 1%;
  flex: 1 16%;
  background-color: #FFF;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.25);
}

.product-image > img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  max-height: 50vh;
}

.product-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 20px;
  text-align: center;

  > * {
    margin: 0;
  }

  > h5 {
    font-family: 'Titillium Web',sans-serif;
    font-size: 1rem;
  }

  > h6 {
    font-weight: normal;
    font-size: 0.75rem;
  }
}

@media (max-width: 920px) {
  .product-card {
    flex: 1 21%;
  }
}

@media (max-width: 600px) {
  .product-card {
    flex: 1 46%;
  }
}
`;
