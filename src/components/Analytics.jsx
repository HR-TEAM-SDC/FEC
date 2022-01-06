import React, { cloneElement } from 'react';

const Analytics = ({ children }) => {
  const handleClickEvent = (e) => {
    console.log(e);
  };

  return cloneElement(children, { onClick: (e) => console.log('hi') });
};

export default Analytics;
