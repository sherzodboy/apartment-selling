import React from 'react';
import {
  Container,
  WrapperWrap,
  Logo,
  Section,
  Wrapper,
  LogoTitle,
  Link,
} from './style';
import { Outlet, useNavigate } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
import logoImg from '../../assets/img/vecteezy_home-icon-logo-symbol-transparent-background_24761144.png';
import Button from '../Generic/Button';
import Filter from '../Filter';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <WrapperWrap>
        <Wrapper>
          <Section onClick={() => navigate('/')}>
            <Logo src={logoImg} /> <LogoTitle>Apartment</LogoTitle>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, i) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && 'active'}
                    key={i}
                    to={path}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            <Button onClick={() => navigate('/signin')} type={'dark'}>
              Sign In
            </Button>
          </Section>
        </Wrapper>
      </WrapperWrap>
      <Filter />
      <Outlet />
    </Container>
  );
};

export default Navbar;
