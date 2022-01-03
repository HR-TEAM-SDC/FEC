import React, { useContext } from 'react';
import { CurrentSizeContext, CurrentQuantityContext } from '../../ProductDetails';
import { CurrentSkuContext, CurrentStyleContext } from '../../ProductDetails';

const AddToCartButton = () => {
  const { currentStyle } = useContext(CurrentStyleContext);
  const { currentSize } = useContext(CurrentSizeContext);
  const { currentQuantity } = useContext(CurrentQuantityContext);
  const { currentSku } = useContext(CurrentSkuContext);
  // console.log("currentStyle:", currentStyle);
  // console.log("currentSize:", currentSize);
  // console.log("currentQuantity:", currentQuantity);
  // console.log("currentSku:", currentSku);

  const buttonOnClick = () => {
    let sizeId = document.getElementById('size-msg');
    if (currentSize === 'Select Size') {
      if (!sizeId.innerHTML) {
        sizeId.append('Please select a size');
      }
    } else {
      sizeId.innerHTML = '';
    }
  };

  return (
    <div>
      <h4>Add To Cart Button</h4>
      <div></div>
      <button onClick={buttonOnClick}> Add To Cart </button>
    </div>
  );
};

export default AddToCartButton;
