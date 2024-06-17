import React from 'react';
import { Container } from './style';
import Carusel from '../Carousel';
import Category from '../Category';

const Home = () => {
  return (
    <Container>
      <Carusel />
      <Category />
    </Container>
  );
};

export default Home;
