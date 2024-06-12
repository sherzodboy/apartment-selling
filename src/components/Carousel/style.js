import styled from 'styled-components';
import { ReactComponent as arrow } from '../../assets/icons/arrow.svg';

const Container = styled.div`
  position: relative;
  height: fit-content;
`;

const Arrow = styled(arrow)`
  position: absolute;
  top: 50%;
  transform: ${({ left }) =>
    left
      ? 'translateY(-50%) rotate(-90deg)'
      : 'translateY(-50%) rotate(90deg)'};
  right: ${({ left }) => left && '2%'};
  left: ${({ right }) => right && '2%'};
  width: 40px;
  height: 40px;
  padding: 14px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
`;

Content.Title = styled.h1`
  color: inherit;
  font-size: 44px;
  font-weight: 700;
  line-height: 48px;
`;

Content.Description = styled.p`
  font-size: 16px;
  color: white;
`;

Content.Price = styled.div`
  font-size: 28px;
  font-weight: 600;
`;

export { Container, Arrow, Img, Blur, Content };
