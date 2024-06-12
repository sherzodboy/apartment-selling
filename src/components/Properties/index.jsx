import React, { useEffect, useState } from 'react';
import { Container } from './style';
import HouseCard from '../HouseCard';

const Properties = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <Container>
      {data.map((value, index) => {
        return <HouseCard key={index} data={value} />;
      })}
    </Container>
  );
};

export default Properties;
