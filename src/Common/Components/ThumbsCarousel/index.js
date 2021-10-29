/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { SwiperSlide } from 'swiper/react';

import SwiperCore, {
  Navigation, Thumbs,
} from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'App.css';

import { SkeletonProducts } from 'Common/Components/Skeletons/Products';
// Styles
import { SwiperStyled } from 'Styles/ThumbsCarousel';

SwiperCore.use([Navigation, Thumbs]);

const ThumbsGallery = ({ isLoading, images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      {isLoading && <SkeletonProducts />}
      {!isLoading && Array.isArray(images) && (
        <>
          <SwiperStyled style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }} spaceBetween={10} navigation thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
            {
              images.map((img) => (
                <SwiperSlide key={img.image.url}>
                  <img src={img.image.url} aria-hidden />
                </SwiperSlide>
              ))
            }
          </SwiperStyled>
          <SwiperStyled onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} watchSlidesProgress className="mySwiper">
            {
              images.map((img) => (
                <SwiperSlide key={img.image.url}>
                  <img src={img.image.url} aria-hidden />
                </SwiperSlide>
              ))
            }
          </SwiperStyled>
        </>
      )}
    </div>
  );
};

export default ThumbsGallery;
