import React from 'react';

const SizeOption = (props) => {
  return <option sku={props.value}> {props.currentStyle.skus[props.value].size} </option>;
};

export default SizeOption;
