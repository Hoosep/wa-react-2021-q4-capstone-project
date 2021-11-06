/* eslint-disable no-unused-vars */
import React, {
  useState, useEffect, useRef, useLayoutEffect,
} from 'react';

// Own styles
import { ProductListStyled } from 'Styles/ProductsList';
// Own components
import Sidebar from 'Common/Components/Sidebar';
import Products from 'Common/Components/Products';
import Loader from 'Common/Components/Loader';

// Hooks
import { useProducts } from 'utils/hooks/useProducts';
import { useCategories } from 'utils/hooks/useCategories';

const ProductList = () => {
  const { isLoading: isLoadingCategories, data: categoriesData } = useCategories();
  const [actualPage, setActualPage] = useState(1);
  const { isLoading: isLoadingProducts, data: productsInfo } = useProducts(12, actualPage);
  const [itemsSidebar, setItemsSidebar] = useState([]);
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
        const { data, id } = item;
        const {
          mainimage, name, price, category,
        } = data;
        const { url: imageUrl } = mainimage;
        const { slug: nameCategory } = category;

        return {
          id, name, imageUrl, price, nameCategory,
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
    console.log('items', itemsActived);
    getProducts(itemsActived);
  };

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
    <ProductListStyled ref={productListRef}>
      <Sidebar
        items={itemsSidebar}
        onChange={handleChangeItemsActivated}
      />
      <div className="content-product-list">
        <div className="container-product-list">
          <Products products={products} title="Products" loading={isLoadingProducts} pagination={pagination} />
        </div>
      </div>
    </ProductListStyled>
  );
};

export default ProductList;
