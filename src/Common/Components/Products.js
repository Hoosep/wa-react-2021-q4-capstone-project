/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';

// Own styles
import { ProductsStyled, ProductsWrapper } from 'Styles/Products';
import { Title } from 'Styles/Typography';
import { SkeletonProducts } from 'Common/Components/Skeletons/Products';

// Store
import { useStore } from 'Store/store';
import { addProductToCart, addTotalToBag, addCartTotal } from 'Store/reducer';

// Own components
import Pagination from './Pagination';
import ProductCard from './ProductCard';

const Products = withRouter(({
  title, products, pagination, loading, history, fromSearch, showNotification,
}) => {
  const [, dispatch] = useStore();

  const handleGoTo = (productID) => {
    history.push(`/product/${productID}`);
  };

  const handleClickAddCart = (item) => {
    const product = {
      ...item,
      total: 1,
    };

    dispatch(addProductToCart(product));
    dispatch(addCartTotal(product.price));
    dispatch(addTotalToBag(1));
    showNotification('Added to cart');
  };

  return (
    <ProductsStyled fromSearch={fromSearch}>
      {loading && <SkeletonProducts number={4} /> }
      {!loading && (
      <>
        <div className="products-header">
          {!fromSearch && (
            <Title>{title}</Title>
          )}
          {pagination && (
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              totalItems={pagination.totalProducts}
              onChange={pagination.onChange}
            />
          )}
        </div>
        <ProductsWrapper>
          {products.length > 0 && (
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                fromSearch={fromSearch}
                handleGoTo={handleGoTo}
                handleClickAddCart={handleClickAddCart}
              />
            ))
          )}
          {products.length === 0 && 'No results founded.'}
        </ProductsWrapper>
        {pagination && (
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            totalItems={pagination.totalProducts}
            onChange={pagination.onChange}
          />
        )}

      </>
      )}
    </ProductsStyled>
  );
});

export default React.memo(Products);
