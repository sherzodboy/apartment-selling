import React from 'react';
import { Container } from './style';
import Carusel from '../Carousel';
import HouseCard from '../HouseCard';
import CategoryCard from '../CategoryCard';

const Home = () => {
  return (
    <Container>
      <Carusel />
      <HouseCard />
      <CategoryCard />
    </Container>
  );
};

export default Home;
