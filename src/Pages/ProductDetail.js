/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-prototype-builtins */
import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

// Own components
import ThumbsGallery from 'Common/Components/ThumbsCarousel';

// Own hooks
import { useProductID } from 'utils/hooks/useProductID';

// Own Styles
import {
  Paragraph, Title, Subtitle, Label,
} from 'Styles/Typography';
import Container from 'Styles/Layouts/Container';
import Row from 'Styles/Layouts/Row';
import Col from 'Styles/Layouts/Col';
import Table from 'Common/Components/Table';
import Input from 'Styles/Input';
import Button from 'Common/Components/Button';
import { SkeletonProducts } from 'Common/Components/Skeletons/Products';

// Store
import { useStore } from 'Store/store';
import { addProductToCart, addTotalToBag, addCartTotal } from 'Store/reducer';

const ProductDetail = () => {
  const { id } = useParams();
  const [imagesSwiper, setImagesSwiper] = useState(null);
  const [stockProduct, setStockProduct] = useState(0);
  const [totalItemsCart, setTotalItemsCart] = useState('');
  const [noEnoughStock, setNoEnoughStock] = useState(false);
  const { isLoading: isLoadingProduct, data: dataProduct } = useProductID(id);
  const [, dispatch] = useStore();

  useEffect(() => {
    if (dataProduct && dataProduct.hasOwnProperty('id')) {
      const { data: { images, stock } } = dataProduct;
      setStockProduct(stock);
      setImagesSwiper(images);
    }
  }, [dataProduct]);

  const handleAddCart = (e) => {
    const { target: { value: quantity } } = e;
    if (quantity > stockProduct) {
      setNoEnoughStock(true);
    } else {
      setNoEnoughStock(false);
      setTotalItemsCart(e.target.value);
    }
  };

  const handleClickAddToCart = () => {
    if (totalItemsCart) {
      const {
        id: dataProductID,
        data: {
          name,
          price,
          stock: realStock,
          mainimage: { url: imageUrl },
          category: { slug: nameCategory },
        },
      } = dataProduct;
      const product = {
        id: dataProductID,
        imageUrl,
        name,
        nameCategory,
        price,
        realStock,
        total: totalItemsCart,
      };
      dispatch(addProductToCart(product));
      dispatch(addTotalToBag(totalItemsCart));
      const sumTotal = Number(product.price * totalItemsCart);
      dispatch(addCartTotal(sumTotal));
      setStockProduct(Number(stockProduct - totalItemsCart));
      setTotalItemsCart('');
    }
  };

  return (
    <>
      <ThumbsGallery images={imagesSwiper} isLoading={isLoadingProduct} />
      <Container fluid secondary paddingVertical paddingHorizontal>
        {!isLoadingProduct && dataProduct && dataProduct.hasOwnProperty('id') && (
        <>
          <Row>
            <Col>
              <Title secondary>{dataProduct.data.name}</Title>
            </Col>
            <Col>
              <Label secondary>
                SKU:
                {' '}
                {dataProduct.data.sku}
              </Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Label secondary marginBottom="sm" marginTop="sm">
                {dataProduct.data.category.slug}
              </Label>
            </Col>
            <Col>
              <Label secondary marginBottom="sm" marginTop="sm">
                $
                {' '}
                {dataProduct.data.price}
              </Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Subtitle secondary>Description</Subtitle>
              {
                dataProduct.data.description.map((desc) => (
                  <Paragraph
                    key={desc.text}
                  >
                    {desc.text}
                  </Paragraph>
                ))
              }
            </Col>
          </Row>
          <Row>
            <Col>
              <Subtitle secondary>Specs</Subtitle>
              <Table data={dataProduct.data.specs} />
            </Col>
          </Row>
          <Row>
            {
              stockProduct === 0 && (
                <Col>
                  <Label secondary>
                    We&apos;re really sorry. At the moment,
                    we don&apos;t have stock for this product.
                  </Label>
                </Col>
              )
            }
            { stockProduct > 0 && (
              <>
                <Col>
                  <Input size="md" type="text" placeholder="Quantity" fullWidth onChange={handleAddCart} value={totalItemsCart} max="8" />
                </Col>
                <Col>
                  <Button align="center" fullWidth filled="primary" disabled={noEnoughStock} onClick={handleClickAddToCart}>Add to Cart</Button>
                </Col>
              </>
            )}
          </Row>
          {
            noEnoughStock && (
              <Row>
                <Col>
                  <Label secondary marginTop="md">
                    We&apos;re really sorry. At the moment,
                    we don&apos;t have enough stock for this product.
                  </Label>
                </Col>
              </Row>
            )
          }
        </>
        )}
        {
          isLoadingProduct && <SkeletonProducts fullWidth />
        }
      </Container>
    </>
  );
};

export default ProductDetail;
