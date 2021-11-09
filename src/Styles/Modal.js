import styled from 'styled-components';

const ModalStyled = styled.div`
  ${(props) => !props.visible && `
    display: none;
  `}
  position: fixed;
  background-color: rgba(255, 255, 255, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  /* visibility: hidden;
  opacity: 0; */
  transition: all 0.3s;
  & > div {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 2em;
    @media (max-width: 425px) {
      width: 300px;
    }
    @media (max-width: 320px) {
      width: 235px;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.38rem;
    border-bottom: 1px solid #F1F1F1;
    .title {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .close {
      cursor: pointer;
      color: #aaa;
      text-align: center;
      font-size: 0.7rem;
      text-decoration: none;
      :hover {
        color: black;
      }
    }
  }
  .content {
    margin: 1.5rem 0 2.5rem 0;
    text-align: center;
  }
  .footer {
    display: flex;
    flex: 1 100%;
    justify-content: space-between;

    @media (max-width: 425px) {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

export const ModalOverlay = styled.div`
  ${(props) => !props.visible && `
    display: none;
  `}
  transition: opacity 0.2s ease-out;
  pointer-events: none;
  background-color: #0f172a;
  position: fixed;
  opacity: 0.5;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`;

export default ModalStyled;
