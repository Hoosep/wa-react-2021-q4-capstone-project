/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

// Mocks
import CategoriesMock from 'mocks/en-us/product-categories.json';

import Slider from 'Common/Components/Slider';
import { Title, Paragraph } from 'Styles/Typography';
import Container from 'Styles/Layouts/Container';
import Row from 'Styles/Layouts/Row';
import Col from 'Styles/Layouts/Col';
import Carousel from 'Common/Components/Carousel';

const Home = () => {
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    const { results: categoriesData } = CategoriesMock;

    const getSlides = categoriesData.map((item, index) => {
      const { id } = item;
      const { name: headline } = item.data;
      const { url: src } = item.data.main_image;
      return {
        id, headline, src, index,
      };
    });
    setSlideData(getSlides);
  }, []);

  return (
    <>
      <Slider />
      <Carousel title="Categories" heading="Example Slider" slides={slideData} />
    </>
  );
};

export default Home;
