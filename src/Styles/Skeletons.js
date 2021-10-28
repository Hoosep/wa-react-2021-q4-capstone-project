/* eslint-disable no-unused-vars */
import styled, { keyframes } from 'styled-components';

const cardPadding = '24px';
const cardHeight = '340px';
const cardSkeleton = `linear-gradient(lightgrey ${cardHeight}, transparent 0)
`;

const avatarSize = '32px';
const avatarPosition = '24px';
const avatarSkeleton = 'radial-gradient(circle 16px at center, white 99%, transparent 0)';

const titleHeight = '32px';
const titleWidth = '200px';
const titlePosition = `${cardPadding} 180`;
const titleSkeleton = `linear-gradient(white ${titleHeight}, transparent 0)`;

const descLineHeight = '16px';
const descLineSkeleton = `linear-gradient(white ${descLineHeight}, transparent 0)`;
const descLine1Width = '230px';
const descLine1Position = `${cardPadding} 242px`;
const descLine2Width = '180px';
const descLine2Position = `${cardPadding} 265px`;

const footerHeight = '40px';
const footerPosition = `0 calc(${cardHeight} - ${footerHeight})`;
const footerSkeleton = `linear-gradient(white ${footerHeight}, transparent 0)`;

const blurWidth = '200px';
const blurSize = `${blurWidth} calc(${cardHeight} - ${footerHeight})`;

const loading = keyframes`
  to {
    background-position:
      350% 0,        
      var(--title-position),  
      var(--desc-line-1-position),
      var(--desc-line-2-position),
      var(--avatar-position),
      var(--footer-position),
      0 0
    ;
  }
`;

export const SkeletonProductsStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2%;
  margin: 1%;
  flex: 1 16%;
  height: ${cardHeight};

  &:empty::after {
    content:"";
    display:block;
    width: 100%;
    height: 100%;
    border-radius:6px;
    box-shadow: 0 10px 45px rgba(0,0,0, .1);


    background-image:
      linear-gradient(
        90deg, 
        rgba(211, 211, 211, 0) 0, 
        rgba(211, 211, 211, .8) 50%, 
        rgba(211, 211, 211, 0) 100%
      ),                          //animation blur
      ${titleSkeleton},      //title
      ${descLineSkeleton},  //desc1
      ${descLineSkeleton},  //desc2
      ${avatarSkeleton},     //avatar
      ${footerSkeleton},     //footer bar
      ${cardSkeleton}        //card
    ;

    background-size:
      200px calc(340px - 40px),
      200px 32px,
      230px 16px,
      180px 180px,
      100% 40px,
      100% 100%;

    background-position:
      -150% 0,                      //animation
      24px 180px,        //title
      24px 242px,  //desc1
      24px 265px,  //desc2
      0 calc(340px - 40px),       //footer bar
      0 0                           //card
    ;


    background-repeat: no-repeat;
    animation: ${loading} 1.5s infinite;
  }



  @media (max-width: 1200px) {
    flex: 1 21%;
  }

  @media (max-width: 768px) {
    flex: 1 40%;
  }

  @media (max-width: 600px) {
    flex: 1 46%;
  }
`;
