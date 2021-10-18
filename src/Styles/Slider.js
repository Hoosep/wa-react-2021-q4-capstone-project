import styled from 'styled-components';

export const SliderStyled = styled.div`
  width: 100%;
  height: calc(100% - 7.5rem);
  max-height: 100%;
  display: flex;
  flex-direction: column!important;
  background-color: transparent;

  .flex-eight {
    flex: 8;
  }

  .container-slider {
    position: relative;
  }
`;

export const SlideStyled = styled.div`
  .position-relative,
  &.slide-active {
    position: relative;
  }
  &.slide {
    margin-right: auto;
    margin-left: auto;
    display: none;
    text-align: center;
  }
  .slide-content {
    display: inline-block;
    position: absolute;
    z-index: 999;
    left: 0;
    right: 0;
    top: 7rem;
    text-shadow: 0px -2px 10px rgb(0 0 0);
    font-weight: bolder;
    color: white;
    width: 70%;
    padding: 0 5rem;
  }

  .slide-content > span.content-headline {
    text-align: left;
    font-family: 'Titillium Web', sans-serif;
    font-size: 6em;
    font-weight: 700;
    line-height: 90px;
    padding: 0 5px 15px;
    z-index: 1;
  }
  
  .slide-content > span.content-description {
    text-align: justify;
    font-family: 'Raleway', sans-serif;
    padding: 0 5px;
    font-size: 1.5rem;
  }
  .slide-content > span.content-headline,
  .slide-content > span.content-description,
  &.slide-active {
    display: block;
  }

  .slide-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    .slide-content {
      top: 0.8rem;
      width: 70%;
      padding: 0 15px;
    }
    .slide-content > span.content-headline {
      font-size: 2.8rem;
      line-height: 50px;
      padding: 5px 15px;
    }

    .slide-content > span.content-description {
      padding: 0 15px;
    }
  }
  
  @media (max-width: 991px) {
    .slide-content {
      top: 1rem;
      width: 100%;
      padding: 0;
    }
    .slide-content > span.content-headline {
      font-size: 3rem;
      line-height: 50px;
      padding: 5px 15px;
    }

    .slide-content > span.content-description {
      padding: 0 15px;
    }
  }

  @media (max-width: 550px) {
    .slide-content {
      top: 0.41rem;
      width: 100%;
      padding: 0;
    }
    .slide-content > span.content-headline {
      font-size: 2.3rem;
      line-height: 33px;
      padding: 0 12px 15px;
    }

    .slide-content > span.content-description {
      padding: 0 15px;
      font-size: 1rem;
    }
  }
`;
