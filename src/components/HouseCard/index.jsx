import React from 'react';
import {
  Container,
  Content,
  Details,
  Img,
  Icons,
  Footer,
  Divider,
} from './style';
import noimg from '../../assets/img/No-image-available.jpg';

const HouseCard = ({ url, title, info, bed, bath, car, ruler }) => {
  return (
    <Container>
      <Img src={url || noimg} />
      <Content>
        <div className="subTitle">{title || 'New Apartment Nice Wiew'}</div>
        <div className="info">{info || 'Quincy St, Brooklyn, NY, USA'}</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">Bed {bed || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">Bath {bath || 0} </div>
          </Details.Item>
          <Details.Item>
            <Icons.Car />
            <div className="info">Car {car || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">Ruler {ruler || 0}</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content>
        <Footer>
          <Details.Footer>
            <div className="info">$2,800/mo</div>
            <div className="subTitle">$7,500/mo</div>
          </Details.Footer>
          <Details.Row>
            <Icons.Resize />
            <Icons.Love />
          </Details.Row>
        </Footer>
      </Content>
    </Container>
  );
};

export default HouseCard;
