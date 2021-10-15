/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// Own styles
import { CarouselStyled } from 'Styles/Carousel';

// Own Components
import Item from './Item';

const Carousel = ({ heading, slides }) => {
  const [current, setCurrent] = useState(0);
  const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`;
  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`,
  };

  const handlePreviousClick = () => {
    const previous = current - 1;

    let newCurrent;
    if (previous < 0) newCurrent = slides.length - 1;
    else newCurrent = previous;

    setCurrent(newCurrent);
  };

  const handleNextClick = () => {
    const next = current + 1;

    let newCurrent;
    if (next === slides.length) newCurrent = 0;
    else newCurrent = next;

    setCurrent(next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  return (
    <CarouselStyled>
      <div className="carousel-container">
        <h3 id={headingId} className="visuallyhidden">{heading}</h3>

        {slides.map((item) => (
          <Item
            key={item.index}
            slide={item}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </div>
    </CarouselStyled>
  );
};

export default Carousel;
