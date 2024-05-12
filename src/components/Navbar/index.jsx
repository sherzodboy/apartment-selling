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
import logoImg from '../../assets/img/logoo.png';

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
            {navbar.map(({ title, path }, i) => {
              return (
                <Link
                  className={({ isActive }) => isActive && 'active'}
                  key={i}
                  to={path}
                >
                  {title}
                </Link>
              );
            })}
          </Section>
          <Section>
            <button>Sign In</button>
          </Section>
        </Wrapper>
      </WrapperWrap>
      <Outlet />
    </Container>
  );
};

export default Navbar;
