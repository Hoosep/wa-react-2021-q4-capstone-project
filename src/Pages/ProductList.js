import React, {
  useState, useEffect, useRef, useLayoutEffect,
} from 'react';

// Own styles
import { ProductListStyled } from 'Styles/ProductsList';
// Own components
import Sidebar from 'Common/Components/Sidebar';
import Products from 'Common/Components/Products';
import Loader from 'Common/Components/Loader';

// Services
import CategoriesServices from 'Services/categories';
import { ProductsServices } from 'Services/products';

const ProductList = () => {
  const [loading, setLoading] = useState(true);
  const [itemsSidebar, setItemsSidebar] = useState([]);
  const [products, setProducts] = useState([]);
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

  const getProducts = (itemsActived) => {
    const { results: productsData } = ProductsServices;
    setLoading(true);
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
        return itemsActived.includes(item.nameCategory);
      }
      // If we don't items active we filter all.
      return true;
    });
    setProducts(productsFormat);
    setLoading(false);
  };

  const handleChangeItemsActivated = (itemsActived) => {
    getProducts(itemsActived);
  };

  useEffect(() => {
    const { results: categoriesData } = CategoriesServices;

    const getCategories = categoriesData.map((item) => {
      const { id } = item;
      const { name } = item.data;
      const { url } = item.data.main_image;
      return {
        id, name, url,
      };
    });
    setItemsSidebar(getCategories);

    setTimeout(() => {
      getProducts();
    }, 2000);
  }, []);

  return (
    <ProductListStyled ref={productListRef}>
      <Sidebar
        items={itemsSidebar}
        onChange={handleChangeItemsActivated}
      />
      <div className="content-product-list">
        <div className="container-product-list">
          {!loading
          && <Products products={products} title="Products" pagination />}
          {loading && <Loader />}
        </div>
      </div>
    </ProductListStyled>
  );
};

export default ProductList;
