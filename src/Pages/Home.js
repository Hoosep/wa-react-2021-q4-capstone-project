/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// Services
import CategoriesServices from 'Services/categories';
import { FeaturedProducts } from 'Services/products';

import Slider from 'Common/Components/Slider';
import Carousel from 'Common/Components/Carousel';
import Products from 'Common/Components/Products';
import Button from 'Common/Components/Button';

const Home = withRouter((props) => {
  const { history } = props;

  const [carouselData, setCarouselData] = useState([]);
  const [featuredProductsData, setFeaturedProductsData] = useState([]);

  useEffect(() => {
    const { results: categoriesData } = CategoriesServices;
    const { results: productsData } = FeaturedProducts;

    const getSlides = categoriesData.map((item, index) => {
      const { id } = item;
      const { name: headline } = item.data;
      const { url: src } = item.data.main_image;
      return {
        id, headline, src, index,
      };
    });
    setCarouselData(getSlides);

    const getProducts = productsData.map((item) => {
      const { data, id } = item;
      const { mainimage, name, price } = data;
      const { url: imageUrl } = mainimage;

      return {
        id, name, price, imageUrl,
      };
    });
    setFeaturedProductsData(getProducts);
  }, []);

  const handleClickPage = (e) => {
    e.preventDefault();
    history.push('/products');
  };

  return (
    <>
      <Slider />
      <Carousel title="Categories" heading="Example Slider" slides={carouselData} />
      <Products title="Featured Products" products={featuredProductsData} />
      <Button align="center" spaceBottom="lg" onClick={(e) => handleClickPage(e)}>View all products</Button>
    </>
  );
});

export default Home;
