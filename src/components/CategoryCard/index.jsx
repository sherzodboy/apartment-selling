import React from 'react';
import { Container, Content, Details, Img, Blur } from './style';
import noimg from '../../assets/img/No-image-available.jpg';
import images from './img';

const CategoryCard = () => {
  return (
    <Container>
      <Img
        src={
          (images && images[Math.floor(Math.random() * 14) + 1].url) || noimg
        }
      />
      <Blur />
      <Content>
        <Details.Item>
          <div style={{ color: 'white', fontSize: '18px' }}>
            {images[Math.floor(Math.random() * 14) + 1].name}
          </div>
        </Details.Item>
      </Content>
    </Container>
  );
};

export default CategoryCard;
