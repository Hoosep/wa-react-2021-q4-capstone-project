/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
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
import Button from './Button';

const Products = withRouter(({
  title, products, pagination, loading, history, fromSearch,
}) => {
  const [state, dispatch] = useStore();
  const { cart } = state;

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
              <div className={`product-card ${fromSearch ? 'search' : ''}`} key={product.id}>
                <div className="fake-link" onClick={() => handleGoTo(product.id)} aria-hidden>
                  <div className="product-image">
                    <img src={product.imageUrl} alt={product.name} />
                  </div>
                  {product.nameCategory && (
                  <div className="product-category">{product.nameCategory}</div>
                  )}
                  <div className="product-info">
                    <h5>{product.name}</h5>
                    <h6>
                      $
                      {product.price}
                    </h6>
                  </div>
                </div>
                <div className="product-purchase">
                  <Button align="center" spaceTop="sm" fullWidth onClick={() => handleClickAddCart(product)}>Add to cart</Button>
                </div>
              </div>
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

export default Products;
