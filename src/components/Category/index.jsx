import React, { useEffect, useState } from 'react';
import { Container } from './style';
import CategoryCard from '../CategoryCard';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import images from '../CategoryCard/img';

const settings = {
  dots: true,
  infinite: true,
  speed: 1200,
  slidesToShow: 4,
  slidesToScroll: 4,
};

const Carusel = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <Container>
      <Slider {...settings}>
        {data.map((_, index) => (
          <CategoryCard
            onClick={() => navigate(`/properties/category/${images?.name}`)}
            key={index}
          />
        ))}
      </Slider>
    </Container>
  );
};

export default Carusel;
