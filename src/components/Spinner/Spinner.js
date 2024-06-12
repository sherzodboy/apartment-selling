import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import React from 'react';

const Spinner = () => {
  return (
    <Spin
      indicator={
        <LoadingOutlined
          style={{
            fontSize: 55,
            color: 'red',
            margin: '22px',
            position: 'absolute',
            left: '50%',
          }}
          spin
        />
      }
    />
  );
};

export default Spinner;
