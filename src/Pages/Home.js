/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// Own hooks
import { useCategories } from 'utils/hooks/useCategories';
import { useFeaturedProducts } from 'utils/hooks/useFeaturedProducts';

import Slider from 'Common/Components/Slider';
import Carousel from 'Common/Components/Carousel';
import Products from 'Common/Components/Products';
import Notification from 'Common/Components/Notification';
import Button from 'Common/Components/Button';

const Home = withRouter((props) => {
  const { history } = props;

  const [carouselData, setCarouselData] = useState([]);
  const [featuredProductsData, setFeaturedProductsData] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
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

    if (productsData && Array.isArray(productsData)) {
      const getProducts = productsData.map((item) => {
        const {
          data: {
            name,
            price,
            stock: realStock,
            mainimage: { url: imageUrl },
            category: { slug: nameCategory },
          },
          id,
        } = item;

        return {
          id, name, imageUrl, price, nameCategory, realStock,
        };
      });
      setFeaturedProductsData(getProducts);
    }
  }, [featuredProducts]);

  const handleClickPage = (e) => {
    e.preventDefault();
    history.push('/products');
  };

  const handleNotification = (text) => setShowNotification(true);

  useEffect(() => {
    if (showNotification) {
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
    return null;
  }, [showNotification]);

  return (
    <>
      <Notification text="Added to cart." seconds={5} show={showNotification} />
      <Slider />
      <Carousel title="Categories" heading="Example Slider" slides={carouselData} isLoading={isLoadingCarousel} />
      <Products
        title="Featured Products"
        products={featuredProductsData}
        loading={isLoadingFeaturedProducts}
        showNotification={handleNotification}
      />
      <Button align="center" spaceBottom="lg" onClick={(e) => handleClickPage(e)}>View all products</Button>
    </>
  );
});

export default Home;
