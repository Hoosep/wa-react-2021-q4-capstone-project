import styled from 'styled-components';

export const CartItemsStyled = styled.div`
`;

export const CartItemWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  flex-direction: column;

  .item-container {
    display: flex;
    flex-direction: row;
    padding: 0 2rem;
    margin: 0 1rem;
    flex: 1 20%;
    justify-content: space-between;
    align-items: center;
    background-color: #FFF;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.25);

    @media (max-width: 425px) {
      padding: 1.2rem 0;
      margin: 0;
      flex-direction: column;
    }

    @media (max-width: 768px) {
      padding: 0 0.5rem;
    }


    .cart-total {
      display: flex;
      flex: 1 100%;
      justify-content: flex-end;
      padding: 1rem;
    }
  }

  .fa-trash {
    color: #BE0000;
    cursor: pointer;
    &:hover {
      color: #8B0000;
    }
  }

  .item-image {
    display: flex;
    
    > img {
      display: block;
      margin: 0 auto;
      max-width: 120px;
      max-height: 50vh;

      @media (max-width: 768px) {
        max-width: 100px;
      }
    }
  }


  .item-info {
    > * {
      margin: 0;
      font-family: 'Mukta',sans-serif;
      font-weight: 200;
      font-size: 1rem;
      
    }
    @media (max-width: 425px) {
      margin: 0.55rem 0;
    }
  }
`;
