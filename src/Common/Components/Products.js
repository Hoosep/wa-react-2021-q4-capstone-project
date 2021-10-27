/* eslint-disable no-unused-vars */
import React from 'react';

// Own styles
import { ProductsStyled, ProductsWrapper } from 'Styles/Products';
import { Title } from 'Styles/Typography';

// Own components
import Pagination from './Pagination';

const Products = ({ title, products, pagination }) => (
  <ProductsStyled>
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
        </div>
      ))}
    </ProductsWrapper>
    {pagination && <Pagination />}
  </ProductsStyled>
);

export default Products;