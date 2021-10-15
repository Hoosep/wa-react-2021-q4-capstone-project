/* eslint-disable no-unused-vars */
import React, { useState, createRef, useRef } from 'react';

// Own Styles
import { CarouselItemStyled } from 'Styles/Carousel';

const Item = (props) => {
  const { slide, current } = props;
  const {
    src, button, headline, index,
  } = slide;
  const itemRef = createRef();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  let classNames = 'slide';

  if (current === index) classNames += ' slide-current';
  else if (current - 1 === index) classNames += ' slide-previous';
  else if (current + 1 === index) classNames += ' slide-next';

  const handleMouseMove = (event) => {
    const el = itemRef.current;
    const r = el.getBoundingClientRect();

    // console.log('r', r);
    setX(event.clientX - (r.left + Math.floor(r.width / 2)));
    setY(event.clientY - (r.top + Math.floor(r.height / 2)));
    // el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)));
    // el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)));
  };

  const handleMouseLeave = (event) => {
    setX(0);
    setY(0);
    // itemRef.current.style.setProperty('--x', 0);
    // itemRef.current.style.setProperty('--y', 0);
  };

  const handleSlideClick = (event) => {
    console.log(props.slide.index);
    props.handleSlideClick(props.slide.index);
  };

  const imageLoaded = (event) => {
    const e = event;
    e.target.style.opacity = 1;
  };
  return (
    <CarouselItemStyled
      ref={itemRef}
      positionX={x}
      positionY={y}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={classNames}
      onClick={handleSlideClick}
      aria-hidden
    >
      <div className="slide-image-wrapper">
        <img
          className="slide-image"
          alt={headline}
          src={src}
          onLoad={imageLoaded}
        />
      </div>
      <article className="slide-content">
        <h2 className="slide-headline">{headline}</h2>
        {/* <button type="button" className="slide-action btn">{button}</button> */}
      </article>
    </CarouselItemStyled>
  );
};

export default Item;
