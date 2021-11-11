import React from 'react';
import Button from './Button';

const ProductCard = ({
  product, fromSearch, handleGoTo, handleClickAddCart,
}) => (
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
);

export default React.memo(ProductCard);
