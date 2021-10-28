/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

// Own components
import Slide from 'Common/Components/Slider/Slide';

// Own hooks
import useInterval from 'Common/CustomHooks/useInterval';
import { useFeaturedBanners } from 'utils/hooks/useFeaturedBanners';

// Own styles
import { SliderStyled } from 'Styles/Slider';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pictures, setPictures] = useState([]);

  const { isLoading, data: featuredBannersData } = useFeaturedBanners();

  useEffect(() => {
    const { results: bannersData } = featuredBannersData;
    if (bannersData && Array.isArray(bannersData)) {
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
    }
  }, [featuredBannersData]);

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
        {!isLoading ? (
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
