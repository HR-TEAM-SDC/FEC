import React, { useContext } from 'react';
import axios from '../../../../apis/atelier';
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

  const addToCart = async () => {
    let postCart = await axios.post('/cart', {
      sku_id: currentSku,
      count: currentQuantity,
    });
    console.log(postCart);
  };

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
      addToCart();
    }
  };

  if (currentStyle.skus && currentSku) {
    if (currentStyle.skus[currentSku].quantity <= 0) {
      return null;
    }
  }
  return (
    <div>
      <button onClick={buttonOnClick}> Add To Cart </button>
    </div>
  );
};

export default AddToCartButton;
