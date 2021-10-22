import styled from 'styled-components';

const SidebarStyled = styled.div`
  border: 0;
  background-color: #101118;
  color: #FFF;
  flex: 0 16%;

  & ul {
    display: flex;
    flex-direction: column;
    min-width: 220px;
    justify-content: center;
    height: 100%;
    list-style: none;
    border: 0;
    padding: 0;
    margin: 0;

    li {
      font-family: 'Mukta',sans-serif;
      font-weight: 200;
      padding: 1.3rem 1.5rem;
      letter-spacing: 1px;
      font-size: 1.3rem;
      cursor: pointer;

      background-color: #101118;
      background: linear-gradient(to left, #101118 50%, white 50%) right;
      background-size: 250%;
      transition: .6s ease-out;


      &.activated {
        background: #FFF;
        text-decoration: underline;
        text-underline-offset: 10px;
        color: #101118;
      }
    }

    li:hover {
      background-position: left;
      color: #101118;
    }
  }

  @media (max-width: 768px) {
    & ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      padding: 0 1.5rem;

      li {
        font-size: 1rem;
        background-color: transparent;
        background: none;
        transition: none;

        &.activated {
          background: #101118;
          color: #FFF;
        }
      }
      li:hover {
        color: #FFF;
        text-decoration: underline;
        text-underline-offset: 10px;
      }
    }
  }
  @media (max-width: 576px) {
    & ul {
      padding: 0 0.45rem;

      li {
        padding: 1.5rem 0;
        font-size: 0.8rem;
      }

    }
  }
  @media (max-width: 375px) {
    & ul {
      padding: 0 0.15rem;

      li {
        padding: 0.5rem 0;
        font-size: 0.65rem;
      }

    }
  }
`;

export default SidebarStyled;
