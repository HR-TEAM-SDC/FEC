import React, { useContext } from 'react';
import { CurrentSizeContext, CurrentQuantityContext } from '../../ProductDetails';
import { CurrentSkuContext, CurrentStyleContext } from '../../ProductDetails';

const AddToCartButton = () => {
  const { currentStyle } = useContext(CurrentStyleContext);
  const { currentSize } = useContext(CurrentSizeContext);
  const { currentQuantity } = useContext(CurrentQuantityContext);
  const { currentSku } = useContext(CurrentSkuContext);

  // console.log("currentSize:", currentSize);
  // console.log("currentQuantity:", currentQuantity);
  // console.log("currentSku:", currentSku);

  const buttonOnClick = () => {
    let sizeMsg = document.getElementById('size-msg');
    let sizeMenu = document.getElementById('size-menu');
    if (currentSize === 'Select Size') {
      if (!sizeMsg.innerHTML) {
        sizeMsg.append('Please select a size');
        sizeMenu.size = Object.keys(currentStyle.skus).length;
      }
    } else {
      sizeMsg.innerHTML = '';
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
