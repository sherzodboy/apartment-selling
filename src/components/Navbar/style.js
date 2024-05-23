import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div``;

const WrapperWrap = styled.div`
  background: var(--colorPrimary);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
  max-width: 1440px;
  margin: auto;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  .active {
    color: black;
  }
  :hover {
    color: black;
    text-decoration: none;
  }
`;

const Logo = styled.img`
  width: 52px;
  margin-right: 10px;
  color: white;
  cursor: pointer;
`;
const LogoTitle = styled.h4`
  cursor: pointer;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  color: white;
`;

export { Container, WrapperWrap, Wrapper, Section, Logo, LogoTitle, Link };
