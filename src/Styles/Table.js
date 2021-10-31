import styled from 'styled-components';

export const TableStyled = styled.table`
  padding: 0;
  width: 100%;

  color: #565656;
  font-family: 'Helvetica Neue',sans-serif;
  font-size: 1rem;
  line-height: 20px;
  margin: 0 0 14px;
  text-align: justify;
  border-collapse: collapse;
  tbody > tr > td:first-child {
    font-family: 'Titillium Web',sans-serif;
    font-weight: 200;
    color: #FFF;
  }

  tbody > tr {
    padding: 0;
    margin: 0;
    border-bottom: 1pt solid white;
  }
`;
