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
    console.log('button clicked...');
  };

  return (
    <div>
      <h4>Add To Cart Button</h4>
      <button onClick={buttonOnClick}> Add To Cart </button>
    </div>
  );
};

export default AddToCartButton;
