import React, { useRef } from 'react';
import { Container, Icons, MenuWrapper, Section } from './style';
import { Input, Button } from '../Generic';

const Filter = () => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  return (
    <Container>
      <Input
        placeholder={'Enter an address, neighborhood, city, or ZIP code'}
      />
      <div className="btn-group dropleft">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          type="button"
          className="btn btn-dark dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Advanced
        </div>
        <MenuWrapper
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton"
        >
          <h2 className="subTitle">Address</h2>
          <Section>
            <Input ref={countryRef} placeholder={'Country'} />
            <Input ref={regionRef} placeholder={'Region'} />
            <Input ref={cityRef} placeholder={'City'} />
            <Input ref={zipRef} placeholder={'Zip Code'} />
          </Section>
          <h2 className="subTitle">Apartment info</h2>
          <Section>
            <Input ref={roomsRef} placeholder={'Rooms'} />
            <Input ref={sizeRef} placeholder={'Size'} />
            <Input ref={sortRef} placeholder={'Sort'} />
          </Section>
          <h2 className="subTitle">Price</h2>
          <Section>
            <Input ref={minPriceRef} placeholder={'Min price'} />
            <Input ref={maxPriceRef} placeholder={'Max price'} />
          </Section>
        </MenuWrapper>
      </div>
      <Button>
        <Icons.Search /> Search
      </Button>
    </Container>
  );
};

export default Filter;
