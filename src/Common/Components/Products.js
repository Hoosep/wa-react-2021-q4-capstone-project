/* eslint-disable no-unused-vars */
import React from 'react';
import { withRouter } from 'react-router-dom';

// Own styles
import { ProductsStyled, ProductsWrapper } from 'Styles/Products';
import { Title } from 'Styles/Typography';
import { SkeletonProducts } from 'Common/Components/Skeletons/Products';
// Own components
import Pagination from './Pagination';
import Button from './Button';

const Products = withRouter(({
  title, products, pagination, loading, history,
}) => {
  const handleGoTo = (productID) => {
    history.push(`/product/${productID}`);
  };

  return (
    <ProductsStyled>
      {loading && <SkeletonProducts number={4} /> }
      {!loading && (
      <>
        <div className="products-header">
          <Title>{title}</Title>
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
          {products.map((product) => (
            <div className="product-card" key={product.id}>
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
                <Button align="center" spaceTop="sm" fullWidth>Add to cart</Button>
              </div>
            </div>
          ))}
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
