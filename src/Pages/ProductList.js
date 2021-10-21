import React, {
  useState, useEffect, useRef, useLayoutEffect,
} from 'react';

// Own styles
import { ProductListStyled } from 'Styles/ProductsList';
// Own components
import Sidebar from 'Common/Components/Sidebar';
import Products from 'Common/Components/Products';

// Services
import CategoriesServices from 'Services/categories';
import { ProductsServices } from 'Services/products';

const ProductList = () => {
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

    getProducts();
  }, []);

  return (
    <ProductListStyled ref={productListRef}>
      <Sidebar
        items={itemsSidebar}
        onChange={handleChangeItemsActivated}
      />
      <div className="content-product-list">
        <div className="container-product-list">
          <Products products={products} title="Catalog" />
        </div>
      </div>
    </ProductListStyled>
  );
};

export default ProductList;