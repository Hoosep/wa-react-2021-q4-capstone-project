/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Mocks
import FeaturedBannersData from 'mocks/en-us/featured-banners.json';

// Own components
import Slide from 'Common/Components/Slider/Slide';

// Own hooks
import useInterval from 'Common/CustomHooks/useInterval';

const SliderStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column!important;
  background-color: gray;

  .flex-eight {
    flex: 8;
  }

  .container-slider {
    position: relative;
  }
`;

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pictures, setPictures] = useState([]);
  const [imagesReady, setImagesReady] = useState(false);

  useEffect(() => {
    const { results: bannersData } = FeaturedBannersData;
    const getPictures = bannersData.map((item) => {
      const { id } = item;
      const { title } = item.data;
      const { url: imageUrl } = item.data.main_image;
      const [paragraph] = item.data.description;
      const { text } = paragraph;
      return {
        id,
        title,
        imageUrl,
        text,
      };
    });
    setPictures(getPictures);
    setImagesReady(true);
  }, []);

  const updateSlide = (e) => {
    let index = activeIndex;

    if (activeIndex === (pictures.length - 1)) {
      // We reset our slider.
      index = -1;
    }
    index += 1;
    setActiveIndex(index);
  };

  useInterval(() => {
    updateSlide();
  }, 3500);

  return (
    <SliderStyled>
      <div className="flex-eight">
        {imagesReady ? (
          <div className="slider-container">
            {pictures.map((slide, index) => (
              <Slide
                key={slide.id}
                index={index}
                activeIndex={activeIndex}
                imageUrl={slide.imageUrl}
                title={slide.title}
                text={slide.text}
              />
            ))}
          </div>
        ) : 'Cargando...'}
      </div>
    </SliderStyled>
  );
};

export default Slider;
