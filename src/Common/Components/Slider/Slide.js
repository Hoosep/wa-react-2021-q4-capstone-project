/* eslint-disable no-unused-vars */
import React from 'react';

// Own Styles
import { SlideStyled } from 'Styles/Slider';

const Slide = (props) => {
  const {
    title, imageUrl, index, activeIndex, text,
  } = props;

  return (
    <SlideStyled
      className={
        index === activeIndex
          ? 'position-relative slide slide-active'
          : 'slide'
      }
    >
      <img src={imageUrl} alt={title} className="slide-image" />
      <p className="slide-content">
        <span className="content-headline">{title}</span>
        <span className="content-description">{text}</span>
      </p>
    </SlideStyled>
  );
};

export default Slide;
