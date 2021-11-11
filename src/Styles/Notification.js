/* eslint-disable no-unused-vars */
import styled, { keyframes } from 'styled-components';

const notify = keyframes`
  0% {
    transform: scaleX(0);
    transform: translateX(300px);
  }
  25% {
    transform: scaleX(1);
    transform: translateX(250px);
  }
  50% {
    transform: scaleX(1.5);
    transform: translateX(150px);
  }
  75% {
    transform: scaleX(0.5);
    transform: translateX(100px);
  }
  100% {
    transform: scaleX(0);
    transform: translateX(0);
  }
`;

const disappear = keyframes`
  0% {
    opacity: 1;
  }

  25% {
    opacity: 0.8
  }

  50% {
    opacity: 0.5
  }

  75% {
    opacity: 0.2
  }

  100% {
    opacity: 0;
  }
`;

const disappearTranslate = keyframes`
  0% {
    transform: scaleX(0);
    transform: translateX(0);
  }

  25% {
    transform: scaleX(0.5);
    transform: translateX(75px);
  }

  50% {
    transform: scaleX(1.5);
    transform: translateX(150px);
    opacity: 0.8;
  }

  75% {
    transform: scaleX(1);
    transform: translateX(225px);
    opacity: 0.5;
  }

  100% {
    transform: scaleX(0);
    transform: translateX(300px);
    opacity: 0.2;
  }

`;

const NotificationStyled = styled.div`
  position: absolute;
  padding: 1.5rem;
  background-color: #101118;
  font-family: 'Mukta',sans-serif;
  line-height: 1.5rem;
  font-weight: bold;
  color: #fff;
  box-sizing: border-box;
  transform: translateX(300px);
  top: 10%;
  right: 0;
  width: 100%;
  max-width: 300px;
  font-size: 1rem;
  border: none;
  animation: ${notify} 0.5s ease-in-out 1;
  animation-fill-mode: forwards;
  z-index: 999;

  &.disappear {
    animation: ${notify} 0.5s ease-in-out 1, ${disappearTranslate} 1s linear;
    animation-fill-mode: forwards;
  }
`;

export default NotificationStyled;
