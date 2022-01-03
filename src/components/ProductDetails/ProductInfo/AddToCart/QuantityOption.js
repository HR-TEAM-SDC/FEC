import React from 'react';

const QuantityOption = (props) => {
  return <option quantity={props.quantity}>{props.quantity}</option>;
};

export default QuantityOption;
