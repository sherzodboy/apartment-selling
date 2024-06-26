import styled from 'styled-components';

const getType = ({ type }) => {
  switch (type) {
    case 'dark':
      return {
        background: 'transparent',
        border: '1px solid white',
        color: 'white',
      };
    case 'light':
      return {
        background: 'white',
        border: '1px solid #e6e9ec',
        color: 'black',
      };
    case 'primary':
      return {
        background: 'dodgerblue',
        border: 'none',
        color: 'white',
      };
    default:
      return {
        background: '#bb0000',
        border: 'none',
        color: 'white',
      };
  }
};

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
  height: ${({ height }) => (height ? `${height}px` : '44px')};
  width: ${({ width }) => (width ? `${width}px` : '130px')};
  border-radius: 2px;
  min-width: 120px;
  cursor: pointer;
  ${getType}
  :active {
    opacity: 0.6;
  }
`;

export { Container };
