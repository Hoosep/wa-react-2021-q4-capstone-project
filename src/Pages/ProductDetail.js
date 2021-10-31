/* eslint-disable no-prototype-builtins */
import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

// Own components
import ThumbsGallery from 'Common/Components/ThumbsCarousel';

// Own hooks
import { useProductID } from 'utils/hooks/useProductID';
import {
  Paragraph, Title, Subtitle, Label,
} from 'Styles/Typography';
import Container from 'Styles/Layouts/Container';
import Row from 'Styles/Layouts/Row';
import Col from 'Styles/Layouts/Col';
import Table from 'Common/Components/Table';
import Input from 'Styles/Input';
import Button from 'Common/Components/Button';

const ProductDetail = () => {
  const { id } = useParams();
  const [imagesSwiper, setImagesSwiper] = useState(null);
  const [totalItemsCart, setTotalItemsCart] = useState('');
  const { isLoading: isLoadingProduct, data: dataProduct } = useProductID(id);

  useEffect(() => {
    if (dataProduct && dataProduct.hasOwnProperty('id')) {
      const { data: { images } } = dataProduct;
      setImagesSwiper(images);
    }
  }, [dataProduct]);

  const handleAddCart = (e) => {
    setTotalItemsCart(e.target.value);
  };

  return (
    <>
      <ThumbsGallery images={imagesSwiper} isLoading={isLoadingProduct} />
      {!isLoadingProduct && (
      <Container fluid secondary paddingVertical paddingHorizontal>
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
          <Col>
            <Input size="md" type="number" placeholder="Number" fullWidth onChange={handleAddCart} value={totalItemsCart} />
          </Col>
          <Col>
            <Button align="center" fullWidth filled="primary">Add to Cart</Button>
          </Col>
        </Row>
      </Container>
      ) }
    </>
  );
};

export default ProductDetail;
