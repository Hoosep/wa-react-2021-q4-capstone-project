import styled from 'styled-components';

const InputStyled = styled.input`
  box-sizing: border-box;
  font-size: 16px;
  border: none;
  ${(props) => (props.size === 'sm' && `
    padding: 0.4rem 0;
  `)}
  ${(props) => (props.size === 'md' && `
  padding: 1em 2em;
  `)}
  ${(props) => (props.fullWidth && `
    width: 100%;
  `)}
  padding-right: 5px;
`;

export default InputStyled;
