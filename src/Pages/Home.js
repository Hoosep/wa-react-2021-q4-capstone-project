/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// Services

// Own hooks
import { useCategories } from 'utils/hooks/useCategories';
import { useFeaturedProducts } from 'utils/hooks/useFeaturedProducts';

import Slider from 'Common/Components/Slider';
import Carousel from 'Common/Components/Carousel';
import Products from 'Common/Components/Products';
import Button from 'Common/Components/Button';

const Home = withRouter((props) => {
  const { history } = props;

  const [carouselData, setCarouselData] = useState([]);
  const [featuredProductsData, setFeaturedProductsData] = useState([]);
  const { isLoading: isLoadingFeaturedProducts, data: featuredProducts } = useFeaturedProducts(16);
  const { isLoading: isLoadingCarousel, data: categoriesData } = useCategories();

  useEffect(() => {
    const { results: categories } = categoriesData;

    if (categories && Array.isArray(categories)) {
      const getSlides = categories.map((item, index) => {
        const { id } = item;
        const { name: headline } = item.data;
        const { url: src } = item.data.main_image;
        return {
          id, headline, src, index,
        };
      });
      setCarouselData(getSlides);
    }
  }, [categoriesData]);

  useEffect(() => {
    const { results: productsData } = featuredProducts;
    console.log('productsd', productsData);
    if (productsData && Array.isArray(productsData)) {
      const getProducts = productsData.map((item) => {
        const { data, id } = item;
        const { mainimage, name, price } = data;
        const { url: imageUrl } = mainimage;

        return {
          id, name, price, imageUrl,
        };
      });
      setFeaturedProductsData(getProducts);
    }
  }, [featuredProducts]);

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
