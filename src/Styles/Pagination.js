import styled from 'styled-components';

const PaginationStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  .page {
    font-size: 0.75rem;
    margin: 0;
    background: #FFF;
    color: #101118;
    max-width: auto;
    min-width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0.1rem;
    &:active {
      background-color: #101118;
      color: #FFF;
    }
    @media (hover: hover) {
      &:hover {
        background-color: #101118;
        color: #FFF;
      }
    }
  }

  .page.active {
    background-color: #101118;
    color: #FFF;
    position: relative;
    font-size: 1rem;
  }

  @media (min-width: 426px) {
    justify-content: end;
  }
`;

export default PaginationStyled;
