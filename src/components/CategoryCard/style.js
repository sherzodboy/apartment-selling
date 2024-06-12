import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 280px;
  max-height: 380px;
  box-shadow: 0 0 1px 0.2px black;
  border-radius: 4px;
  background: rgba(205, 205, 205, 0.2);
  overflow: hidden;
  margin: 15px;
`;

const Img = styled.img`
  width: 100%;
  height: 370px;
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
  font-size: 22px;
  font-weight: 600;
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

const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 4px;
`;

export { Container, Img, Content, Details, Blur };
