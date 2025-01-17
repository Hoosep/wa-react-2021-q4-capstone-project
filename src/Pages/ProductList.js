/* eslint-disable no-unused-vars */
import React, {
  useState, useEffect, useRef, useLayoutEffect,
} from 'react';

// Own styles
import { ProductListStyled } from 'Styles/ProductsList';
// Own components
import Sidebar from 'Common/Components/Sidebar';
import Products from 'Common/Components/Products';
import Notification from 'Common/Components/Notification';

// Hooks
import { useProducts } from 'utils/hooks/useProducts';
import { useCategories } from 'utils/hooks/useCategories';

const ProductList = () => {
  const { isLoading: isLoadingCategories, data: categoriesData } = useCategories();
  const [actualPage, setActualPage] = useState(1);
  const { isLoading: isLoadingProducts, data: productsInfo } = useProducts(12, actualPage);
  const [itemsSidebar, setItemsSidebar] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});
  const productListRef = useRef();
  const calculateHeight = () => {
    const el = productListRef.current;
    const { top } = el.getBoundingClientRect();
    const heightWindow = window.innerHeight;
    const heightContainer = heightWindow - top - 82;
    el.style.height = `${heightContainer}px`;
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', calculateHeight);
    calculateHeight();
    return () => window.removeEventListener('resize', calculateHeight);
  }, []);

  const changePage = (page) => {
    setActualPage(page);
  };

  const getProducts = (itemsActived) => {
    const { results: productsData } = productsInfo;

    if (productsData && Array.isArray(productsData)) {
      const {
        page: currentPage,
        total_pages: totalPages,
        total_results_size: totalProducts,
      } = productsInfo;
      const productsFormat = productsData.map((item) => {
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
      }).filter((item) => {
        if (
          Array.isArray(itemsActived)
          && itemsActived.length > 0) {
          const { nameCategory } = item;
          const formatWord = nameCategory.charAt(0).toUpperCase() + nameCategory.slice(1);

          return itemsActived.includes(formatWord);
        }
        // If we don't items active we filter all.
        return true;
      });
      setProducts(productsFormat);
      setPagination({
        currentPage,
        totalPages,
        totalProducts,
        onChange: changePage,
      });
    }
  };

  const handleChangeItemsActivated = (itemsActived) => {
    getProducts(itemsActived);
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

  useEffect(() => {
    const { results: categories } = categoriesData;

    if (categories && Array.isArray(categories)) {
      const getCategories = categories.map((item) => {
        const { id } = item;
        const { name } = item.data;
        const { url } = item.data.main_image;
        return {
          id, name, url,
        };
      });
      setItemsSidebar(getCategories);
    }
  }, [categoriesData]);

  useEffect(() => {
    getProducts();
  }, [productsInfo]);

  return (
    <>
      <Notification text="Added to cart." seconds={5} show={showNotification} />
      <ProductListStyled ref={productListRef}>
        <Sidebar
          items={itemsSidebar}
          onChange={handleChangeItemsActivated}
        />
        <div className="content-product-list">
          <div className="container-product-list">
            <Products
              products={products}
              title="Products"
              loading={isLoadingProducts}
              pagination={pagination}
              showNotification={handleNotification}
            />
          </div>
        </div>
      </ProductListStyled>
    </>
  );
};

export default ProductList;
