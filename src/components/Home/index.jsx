import React from 'react';
import { Container } from './style';
import Carusel from '../Carousel';
import HouseCard from '../HouseCard';

const Home = () => {
  return (
    <Container>
      <Carusel />
      <HouseCard />
    </Container>
  );
};

export default Home;
