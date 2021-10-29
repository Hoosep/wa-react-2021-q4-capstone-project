/* eslint-disable no-unused-vars */
import styled, { keyframes } from 'styled-components';

const cardPadding = '24px';
const cardHeight = '340px';
const cardSkeleton = `linear-gradient(lightgrey ${cardHeight}, transparent 0)
`;

const titleHeight = '44px';
const titleWidth = '35%';
const titlePosition = '96% 160px';
const titleSkeleton = `linear-gradient(white ${titleHeight}, transparent 0)`;

const descLineHeight = '27px';
const descLineSkeleton = `linear-gradient(white ${descLineHeight}, transparent 0)`;
const descLine1Width = '80%';
const descLine1Position = `${cardPadding} 222px`;
const descLine2Width = '10%';
const descLine2Position = '97% 222px';

const buttonHeight = '50px';
const buttonWidth = '90%';
const buttonPosition = '30px 270px';
const buttonSkeleton = `linear-gradient(white ${titleHeight}, transparent 0)`;

const footerHeight = '0px';
const footerPosition = `0 calc(${cardHeight} - ${footerHeight})`;
const footerSkeleton = `linear-gradient(white ${footerHeight}, transparent 0)`;

const blurWidth = '200px';
const blurSize = `${blurWidth} calc(${cardHeight} - ${footerHeight})`;

const loading = keyframes`
  to {
    background-position:
      550% 0,        
      ${titlePosition},  
      ${descLine1Position},
      ${descLine2Position},
      ${buttonPosition},
      ${footerPosition},
      0 0
    ;
  }
`;

export const SkeletonProductsStyled = styled.div`
  height: ${cardHeight};
  padding: 2%;
  margin: 5px;
  width: 45%;
  display: inline-block;

  &:empty::after {
    content:"";
    display:block;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.25);

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
      ${buttonSkeleton},
      ${footerSkeleton},     //footer bar
      ${cardSkeleton}        //card
    ;

    background-size:
      ${blurSize},
      ${titleWidth} ${titleHeight},
      ${descLine1Width} ${descLineHeight},
      ${descLine2Width} ${descLineHeight},
      ${buttonWidth} ${buttonHeight},
      100% ${footerHeight},
      100% 100%;

    background-position:
      -150% 0,
      ${titlePosition},
      ${descLine1Position},
      ${descLine2Position},
      ${buttonPosition},
      ${footerPosition},
      0 0
    ;

    background-repeat: no-repeat;
    animation: ${loading} 1.6s infinite;
  }
  
  @media (max-width: 1200px) {
    width: 100%;
  }

`;
