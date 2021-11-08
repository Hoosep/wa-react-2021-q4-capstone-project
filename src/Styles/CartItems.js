import styled from 'styled-components';

export const CartItemsStyled = styled.div`
  ${(props) => (props.summary ? `
    max-width: 90%;
    margin: 0 auto;
  ` : '')}
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
    ${(props) => (props.summary ? `
      box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.95);
    ` : `
      box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.25);
    `)}

    @media (max-width: 768px) {
      padding: 0 0.5rem;
    }

    @media (max-width: 425px) {
      padding: 0.8rem 1.2rem 1.3rem 1.2rem;
      margin: 0;
      flex-direction: column;
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
      display: flex;
      justify-content: center;
      flex: 0 300px;
    > * {
      margin: 0;
      font-family: 'Mukta',sans-serif;
      font-weight: 200;
      font-size: 1rem;
      
    }

    &.quantity {
      flex: 0 250px;
      flex-direction: column;

      > input {
        width: 150px;
        margin: 0 auto;
      }

      .message {
        text-align: center;
        margin-top: 0.7rem;
        color: rgb(223, 71, 89);
        font-weight: 700;
      }
      @media (max-width: 425px) {
        flex: 1;
      }
    }
    @media (max-width: 425px) {
      margin: 0.55rem 0;
      flex: 1;
    }
  }
`;
