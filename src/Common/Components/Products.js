/* eslint-disable no-unused-vars */
import React from 'react';

// Own styles
import { ProductsStyled, ProductsWrapper } from 'Styles/Products';
// Own components
import { Title } from 'Styles/Typography';

const Products = ({ title, products }) => (
  <ProductsStyled>
    <Title>{title}</Title>
    <ProductsWrapper>
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="product-image">
            <img src={product.imageUrl} alt={product.name} />
          </div>
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
  </ProductsStyled>
);

export default Products;