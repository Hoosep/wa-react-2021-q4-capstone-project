import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: block;
  /*font-family: 'Mukta', sans-serif;*/
  /*border: 0px solid #282936;*/
  background: none;
  border: 0;
  box-sizing: border-box;
  padding: 1em 2em;
  box-shadow: inset 0 0 0 2px #8d721e;
  color: #8d721e;
  font-size: inherit;
  font-weight: 700;
  position: relative;
  vertical-align: middle;
  transition: color 0.25s;
  &::before {
    top: 0;
    left: 0;
  }
  &::after {
    bottom: 0;
    right: 0;
  }
  &::before,
  &::after {
    box-sizing: inherit;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }

  &:hover {
    color: #282936;
    cursor: pointer;
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
  }

  &:hover::before {
    border-top-color: #282936;
    border-right-color: #282936;
    transition: width 0.05s ease-out, height 0.05s ease-out 0.15s;
  }

  &:hover::after {
    border-bottom-color: #282936;
    border-left-color: #282936;
    transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
  }

  &:disabled {
    background-color: #CECECE;
    box-shadow: inset 0 0 0 2px #cecece;
    opacity: 0.5;
    pointer-events: none;
  }

  ${(props) => (props.align === 'center' && `
    margin: 0 auto;
  `)}
  ${(props) => (props.align === 'right' && `
    margin-right: 0;
    margin-left: auto;
  `)}
  ${(props) => (props.align === 'left' && `
    margin-right: auto;
    margin-left: 0;
  `)}
  ${(props) => (!props.spaceTop && `
    margin-top: 0rem;
  `)}
  ${(props) => (props.fullWidth && `
    width: 100%;
  `)}
  ${(props) => (!props.spaceBottom && `
    margin-bottom: 0rem;
  `)}
  ${(props) => (props.spaceTop === 'sm' && `
    margin-top: 1rem;
  `)}
  ${(props) => (props.spaceTop === 'md' && `
    margin-top: 1.5rem;
  `)}
  ${(props) => (props.spaceTop === 'lg' && `
    margin-top: 2rem;
  `)}
  ${(props) => (props.spaceBottom === 'sm' && `
    margin-bottom: 1rem;
  `)}
  ${(props) => (props.spaceBottom === 'md' && `
    margin-bottom: 1.5rem;
  `)}
  ${(props) => (props.spaceBottom === 'lg' && `
    margin-bottom: 2rem;
  `)}
  ${(props) => (props.filled === 'primary' && `
    background-color: white;
  `)}
`;

export default ButtonStyled;
