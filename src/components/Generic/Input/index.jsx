import React, { forwardRef } from 'react';

import { Container } from './style';

const Input = forwardRef(
  (
    {
      type,
      onChange,
      placeholder,
      name,
      value,
      defaultValue,
      height,
      width,
      icon,
    },
    ref
  ) => {
    return (
      <Container
        ref={ref}
        icon={icon}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        width={width}
        height={height}
      />
    );
  }
);

export default Input;
