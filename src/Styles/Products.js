import styled from 'styled-components';

export const ProductsStyled = styled.div`
  padding: 2rem;

  .products-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    
    h1 {
      margin: 0;
    }
  }

  @media (max-width: 425px) {
    .products-header {
      flex-direction: column;

      h1 {
        margin-bottom: 2rem;
      }
    }
  }
`;

export const ProductsWrapper = styled.section`
display: flex;
flex-wrap: wrap;
margin-bottom: 2rem;

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

.product-category {
  padding-top: 20px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.02rem;
  font-family: 'Titillium Web', sans-serif;
  text-align: right;
}

.product-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 5px;
  text-align: left;
  gap: 1rem;

  > * {
    margin: 0;
    font-family: 'Mukta',sans-serif;
    font-weight: 200;
    font-size: 1rem;
  }
}

@media (max-width: 1200px) {
  .product-card {
    flex: 1 21%;
  }
}

@media (max-width: 768px) {
  .product-card {
    flex: 1 40%;
  }
}

@media (max-width: 600px) {
  .product-card {
    flex: 1 46%;
  }
}
`;