import React from 'react';

const SizeOption = (props) => {
  const handleClick = () => {
    let sizeMenu = document.getElementById('size-menu');
    sizeMenu.size = 1;
  };

  return (
    <option sku={props.value} onClick={handleClick}>
      {props.currentStyle.skus[props.value].size}
    </option>
  );
};

export default SizeOption;
