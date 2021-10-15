/* eslint-disable no-unused-vars */
import React from 'react';

import Slider from 'Common/Components/Slider';
import { Title, Paragraph } from 'Styles/Typography';
import Container from 'Styles/Layouts/Container';
import Row from 'Styles/Layouts/Row';
import Col from 'Styles/Layouts/Col';
import Carousel from 'Common/Components/Carousel';

const slideData = [
  {
    index: 0,
    headline: 'New Fashion Apparel',
    button: 'Shop now',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg',
  },
  {
    index: 1,
    headline: 'In The Wilderness',
    button: 'Book travel',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg',
  },
  {
    index: 2,
    headline: 'For Your Current Mood',
    button: 'Listen',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg',
  },
  {
    index: 3,
    headline: 'Focus On The Writing',
    button: 'Get Focused',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg',
  },
];

const Home = () => (
  <>
    {/* <Slider /> */}
    <Carousel heading="Example Slider" slides={slideData} />
    {/* <Container>
      <Title>Categories</Title>
      <Paragraph>Lorem ipsum blablablabla</Paragraph>
    </Container>
    <Container>
      <Row>
        <Col>Hola!!</Col>
        <Col>Hello!!</Col>
      </Row>
    </Container> */}
  </>
);

export default Home;
