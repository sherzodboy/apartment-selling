import React, { useRef } from 'react';
import { Arrow, Blur, Container, Content, Img } from './style';
import { Carousel } from 'antd';
import home1 from '../../assets/img/home3.jpg';
import home2 from '../../assets/img/home2.webp';

const Carusel = () => {
  const slider = useRef();

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === 'left') slider.current.next();
    if (name === 'right') slider.current.prev();
  };

  return (
    <Container>
      <Carousel ref={slider}>
        <Img src={home1} />
        <Img src={home2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Description className="subTitle">
          112 Glenwood Ave Hyde Park, Boston, MA
        </Content.Description>
        <Content.Price>$5,250/mo</Content.Price>
      </Content>
      <Arrow data-name="left" onClick={onMove} left="true" />
      <Arrow onClick={onMove} data-name="right" right="true" />
    </Container>
  );
};

export default Carusel;
