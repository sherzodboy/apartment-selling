import styled from 'styled-components';

import { ReactComponent as search } from '../../assets/icons/search.svg';
import { ReactComponent as houses } from '../../assets/icons/houses.svg';
import { ReactComponent as setting } from '../../assets/icons/setting.svg';

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  column-gap: 20px;
  max-width: 1440px;
  margin: auto;
`;

const Icons = styled.div``;

Icons.Search = styled(search)`
  margin-right: 8px;
`;
Icons.Houses = styled(houses)`
  margin-right: 8px;
`;
Icons.Setting = styled(setting)`
  margin-right: 8px;
  path {
    fill: brown;
  }
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background: white;
  border: 1px solid black;
  border-radius: 4px;
  width: 777px;
  transform: translate(-80%, 60px) !important;
`;
const Section = styled.div`
  margin-bottom: 20px;
  display: flex;
  column-gap: 20px;
`;

export { Container, Icons, MenuWrapper, Section };
