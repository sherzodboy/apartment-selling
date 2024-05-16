import React from 'react';
import { Container } from './style';

const Input = ({
  type,
  onChange,
  placeholder,
  name,
  value,
  defaultValue,
  height,
  width,
}) => {
  return (
    <Container
      name={name}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      width={200}
      height={height}
    />
  );
};

export default Input;
