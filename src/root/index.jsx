import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<div>home</div>} />
          <Route path="/properties" element={<div>properties</div>} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          <Route path="/" element={<Navigate to={'/home'} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Root;
