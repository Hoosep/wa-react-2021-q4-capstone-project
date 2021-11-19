import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

// Own hooks
import { useQueryParams } from 'utils/hooks/useQueryParams';
import { useQuery } from 'utils/hooks/useQuery';

// Own components
import Container from 'Styles/Layouts/Container';
import Row from 'Styles/Layouts/Row';
import Col from 'Styles/Layouts/Col';
import { Title } from 'Styles/Typography';
import Products from 'Common/Components/Products';
import Notification from 'Common/Components/Notification';
// Own styles
import { ProductListStyled } from 'Styles/ProductsList';

const Search = withRouter((props) => {
  const { history } = props;
  const [results, setResults] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const [showNotification, setShowNotification] = useState(false);
  const query = useQueryParams();
  const word = query.get('q');

  if (!word) history.push('/');

  const { isLoading: isLoadingProducts, data: productsInfo } = useQuery(word, actualPage);

  const changePage = (page) => {
    setActualPage(page);
  };

  const getResults = () => {
    const { results: productsData } = productsInfo;

    if (productsData && Array.isArray(productsData)) {
      const {
        page: currentPage,
        total_pages: totalPages,
        total_results_size: totalProducts,
      } = productsInfo;
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
      });
      setResults(productsFormat);
      setPagination({
        currentPage,
        totalPages,
        totalProducts,
        onChange: changePage,
      });
    }
  };

  useEffect(() => {
    if (Object.keys(productsInfo).length > 0) {
      getResults();
    }
  }, [productsInfo]);

  const handleNotification = () => setShowNotification(true);

  useEffect(() => {
    if (showNotification) {
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
    return null;
  }, [showNotification]);

  return (
    <>
      <Notification text="Added to cart." seconds={5} show={showNotification} />
      <Container paddingVertical paddingHorizontal fluid>
        <Row>
          <Col>
            <Title>
              Search:
              {' '}
              {word}
            </Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProductListStyled>
              <div className="content-product-list">
                <div className="container-product-list">
                  <Products
                    products={results}
                    title="Products"
                    loading={isLoadingProducts}
                    pagination={pagination}
                    showNotification={handleNotification}
                    fromSearch
                  />
                </div>
              </div>
            </ProductListStyled>
          </Col>
        </Row>
      </Container>
    </>
  );
});

export default Search;
