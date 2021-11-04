import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const SwiperStyled = styled(Swiper)`
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    background-size: cover;
    background-position: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &.mySwiper2 {
    width: 100%;
    height: 400px;
  }

  &.mySwiper {
    width: 100%;
    height: 150px;
    box-sizing: border-box;
    padding: 10px 0;
    
    .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.4;
    }
    .swiper-slide-thumb-active {
      opacity: 1;
    }
  }

`;
