import styled from 'styled-components';

const InputStyled = styled.input`
  box-sizing: border-box;
  font-size: 16px;
  border: none;
  ${(props) => (props.size === 'sm' && `
    padding: 0.4rem 0.5rem;
  `)}
  ${(props) => (props.size === 'md' && `
  padding: 1em 2em;
  `)}
  ${(props) => (props.fullWidth && `
    width: 100%;
  `)}
  ${(props) => (props.align === 'center' && `
    text-align: center;
  `)}
  ${(props) => (props.align === 'right' && `
    text-align: right;
  `)}
  ${(props) => (props.align === 'left' && `
    text-align: left;
  `)}
  


  ${(props) => (props.border && `
    box-shadow: 0 0 1px 0 rgb(0 0 0);
  `)}
`;

export default InputStyled;
