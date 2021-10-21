/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

// Mocks
import CategoriesMock from 'mocks/en-us/product-categories.json';
import ProductsMock from 'mocks/en-us/featured-products.json';

import Slider from 'Common/Components/Slider';
import Carousel from 'Common/Components/Carousel';
import Products from 'Common/Components/Products';

const Home = (props) => {
  const { onChangePage } = props;
  const [carouselData, setCarouselData] = useState([]);
  const [featuredProductsData, setFeaturedProductsData] = useState([]);

  useEffect(() => {
    const { results: categoriesData } = CategoriesMock;
    const { results: productsData } = ProductsMock;

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

  const handleClickPage = (e, page) => {
    e.preventDefault();
    onChangePage(page);
  };

  return (
    <>
      <Slider />
      <Carousel title="Categories" heading="Example Slider" slides={carouselData} />
      <Products title="Featured Products" products={featuredProductsData} />
      <Button align="center" spaceBottom="lg" onClick={(e) => handleClickPage(e, 'productList')}>View all products</Button>
    </>
  );
};

export default Home;
