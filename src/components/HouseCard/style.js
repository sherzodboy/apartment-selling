import styled from 'styled-components';
import { ReactComponent as bath } from '../../assets/icons/bath.svg';
import { ReactComponent as bed } from '../../assets/icons/bed.svg';
import { ReactComponent as car } from '../../assets/icons/car.svg';
import { ReactComponent as ruler } from '../../assets/icons/ruler.svg';
import { ReactComponent as resize } from '../../assets/icons/resize.svg';
import { ReactComponent as love } from '../../assets/icons/love.svg';

const Container = styled.div`
  width: 100%;
  max-width: 380px;
  min-width: 340px;
  height: 450px;
  box-shadow: 0 0 1px 0.2px black;
  border-radius: 4px;
  background: rgba(205, 205, 205, 0.2);
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  max-height: 220px;
  min-height: 200px;
`;

const Content = styled.div`
  padding-bottom: 24px;
  padding: 16px 20px;
  background: white;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 0;
`;

Details.Item = styled.div`
  display: flex;
  column-gap: 20px;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  align-items: ${({ footer }) => !footer && 'center'};
`;

Details.Footer = styled.div`
  display: flex;
  column-gap: 20px;
  flex-direction: column;
`;

Details.Row = styled.div`
  display: flex;
  column-gap: 20px;
`;

const Icons = styled.div``;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Car = styled(car)``;
Icons.Ruler = styled(ruler)`
  margin-bottom: 2.5px;
`;
Icons.Love = styled(love)`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;
Icons.Resize = styled(resize)`
  width: 20px;
  height: 20px;
`;

const Divider = styled.div`
  background: gray;
  height: 0.7px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { Container, Img, Content, Details, Icons, Divider, Footer };
