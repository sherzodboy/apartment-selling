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
import images from './img';

const HouseCard = ({ data = {} }) => {
  const { address, phone } = data;

  return (
    <Container>
      <Img
        src={(images && images[Math.floor(Math.random() * 8) + 1].url) || noimg}
      />
      <Content>
        <div className="subTitle inline">
          {address?.city || 'N ew Apartment Nice Wiew'}
        </div>
        <div className="info">
          {address?.street || 'Quincy St, Brooklyn, NY, USA'}
        </div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">Bed {(phone && phone.slice(2, 3)) || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">Bath {(phone && phone.slice(5, 6)) || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Car />
            <div className="info">Car {(phone && phone.slice(6, 7)) || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">
              Ruler {(phone && phone.slice(8, 9)) || 0}kv
            </div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content>
        <Footer>
          <Details.Footer>
            <div className="info">
              ${Math.abs(address?.geo?.lat.slice(0, 5)) || 0}/day
            </div>
            <div className="subTitle">
              ${Math.abs(address?.geo?.lng.slice(0, 5)) || 0}/day
            </div>
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
