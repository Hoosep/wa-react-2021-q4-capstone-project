/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

// Own styles
import { CarouselStyled, CarouselBrackground } from 'Styles/Carousel';
import { SkeletonProducts } from 'Common/Components/Skeletons/Products';

import Col from 'Styles/Layouts/Col';
import Container from 'Styles/Layouts/Container';
import Row from 'Styles/Layouts/Row';

import { Title } from 'Styles/Typography';

// Own Components
import Item from './Item';

const Carousel = ({
  heading, title, slides, isLoading,
}) => {
  const [current, setCurrent] = useState(2);
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
    <CarouselBrackground>
      <Container>
        <Row>
          <Col>
            <Title secondary marginBottom="lg">{title}</Title>
          </Col>
        </Row>
      </Container>
      {!isLoading && (
      <CarouselStyled>
        <div className="carousel-container" style={wrapperTransform}>
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
      )}
      {isLoading && <SkeletonProducts fullWidth />}
    </CarouselBrackground>
  );
};

export default Carousel;
