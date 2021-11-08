import styled from 'styled-components';

const Col = styled.div`
  flex: 1 0 0%;


  @media (max-width: 768px) {
    flex: 1 40%;
  }
  @media (max-width: 425px) {
    flex: 1 100%;
  }
`;

export default Col;
