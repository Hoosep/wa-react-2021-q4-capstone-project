/* eslint-disable no-unused-vars */
import React from 'react';

// Own styles
import { ProductsStyled, ProductsWrapper } from 'Styles/Products';
import { Title } from 'Styles/Typography';
import { SkeletonProducts } from 'Common/Components/Skeletons/Products';
// Own components
import Pagination from './Pagination';
import Button from './Button';

const Products = ({
  title, products, pagination, loading,
}) => (
  <ProductsStyled>
    {loading && <SkeletonProducts /> }
    {!loading && (
      <>
        <div className="products-header">
          <Title>{title}</Title>
          {pagination && <Pagination />}
        </div>
        <ProductsWrapper>
          {products.map((product) => (
            <div className="product-card" key={product.id}>
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
              <div className="product-purchase">
                <Button align="center" spaceTop="sm" fullWidth>Add to cart</Button>
              </div>
            </div>
          ))}
        </ProductsWrapper>
        {pagination && <Pagination />}

      </>
    )}
  </ProductsStyled>
);

export default Products;
