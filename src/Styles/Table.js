import styled from 'styled-components';

export const TableStyled = styled.table`
  padding: 0;
  width: 100%;
  color: #565656;
  font-family: 'Helvetica Neue',sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0 0 2rem;
  text-align: justify;
  border-collapse: collapse;
  border: 1px solid #DFDFDF;

  tbody > tr {
    padding: 0;
    margin: 0;
    font-family: 'Titillium Web',sans-serif;
  }

  tbody > tr:nth-child(odd) > td:first-child {
    color: #000;
  }
  tbody > tr:nth-child(even) > td:first-child {
    color: #FFF;
  }
  
  tbody > tr:nth-child(odd){
    background-color: #DFDFDF;
    color: #565656;
  }
  tbody > tr:nth-child(even){
    color: #FFF;
  }

  tbody > tr > td {
    padding: 0.6rem 1.5rem;
  }
`;
