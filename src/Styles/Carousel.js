import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0 }
  to   { opacity: 1 }
`;
export const CarouselStyled = styled.div`
  margin: 0 auto;
  position: relative;
  width: 70vmin;
  height: 70vmin;
  background-color: transparent;

  > .carousel-container {
    display: flex;
    margin: 0 calc(4vmin * -1);
    position: absolute;
    transition: transform 600ms cubic-bezier(0.25, 1, 0.35, 1);

    .visuallyhidden {
      clip: rect(1px, 1px, 1px, 1px);  
      height: 1px; 
      overflow: hidden;
      position: absolute !important;
      white-space: nowrap;
      width: 1px;
    }
  }
`;

export const CarouselItemStyled = styled.li`
  align-items: center;
  color: white;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 70vmin;
  justify-content: center;
  margin: 0 4vmin;
  opacity: 0.25;
  position: relative;
  text-align: center;
  transition: 
    opacity calc(600ms / 2) cubic-bezier(0.25, 0.46, 0.45, 0.84),
    transform calc(600ms / 2) cubic-bezier(0.25, 0.46, 0.45, 0.84);
  width: 70vmin;
  z-index: 1;

  &.slide-next,
  &.slide-previous {
    &:hover {
      opacity: 0.5;
    }
  }

  &.slide-previous {
    cursor: w-resize;
    &:hover {
      transform: translateX(2%);
    }
  }

  &.slide-next {
    cursor: e-resize;
    
    &:hover {
      transform: translateX(-2%);
    }
  }

  &.slide-current {
    opacity: 1;
    pointer-events: auto;
    user-select: auto;
  }

  @media (hover: hover) {
    &.slide-current:hover .slide-image-wrapper {
      ${(props) => (props.positionX
    ? `transform: 
        scale(1.025)
        translate(
          calc(${props.positionX} / 50 * 1px),
          calc(${props.positionY} / 50 * 1px)
        );
      ` : `
      transform: 
        scale(1.025)
        translate(
          calc(0 / 50 * 1px),
          calc(0 / 50 * 1px)
        );
      `)}
    }
  }

  .slide-image-wrapper {
    background-color: #1D1F2F;
    border-radius: 2%;
    height: 100%;
    left: 0%;
    overflow: hidden;
    position: absolute;
    top: 0%;  
    transition: transform calc(600ms / 4) cubic-bezier(0.25, 0.46, 0.45, 0.84);
    width: 100%;
  }

  .slide-image {
    height: 110%;
    left: -5%;
    object-fit: cover;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: -5%;
    transition:
      opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.84),
      transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.84);
    user-select: none;
    width: 110%;


    @media (hover: hover) {
      .slide-current & {
        ${(props) => (props.positionX
  && `transform:
          translate(
            calc(${props.positionX} / 20 * -1px),
            calc(${props.positionY} / 20 * -1px)
          );
        `)}
      }
    }
  }


  .slide-headline {
    font-size: 8vmin;
    font-weight: 600;
    position: relative;
  }

  .slide-content {
    opacity: 0;
    padding: 4vmin;
    position: relative;
    transition: transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.84);
    visibility: hidden;
    
    & {
      animation: ${fadeIn} calc(600ms / 2) cubic-bezier(0.25, 0.46, 0.45, 0.84) forwards;
      visibility: visible;
      
      
      @media (hover: hover) {
        & {
          ${(props) => (props.positionX
    && `transform:
            translate(
              calc(${props.positionX} / 60 * -1px),
              calc(${props.positionY} / 60 * -1px)
            );
          `)}
        }
      }
    }
    
    > * + * {
      margin-top: 2rem;
    }
  }

`;
