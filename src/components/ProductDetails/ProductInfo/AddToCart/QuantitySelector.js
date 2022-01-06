import React, { useState, useContext, useEffect } from 'react';
import QuantityOption from './QuantityOption';
import { StylesContext, CurrentStyleContext } from '../../ProductDetails';
import { CurrentSkuContext, CurrentSizeContext } from '../../ProductDetails';
import { CurrentQuantityContext } from '../../ProductDetails';

const QuantitySelector = () => {
  const styles = useContext(StylesContext);
  const { currentStyle } = useContext(CurrentStyleContext);
  const { currentSku, setCurrentSku } = useContext(CurrentSkuContext);
  const { currentSize } = useContext(CurrentSizeContext);
  const { currentQuantity, setCurrentQuantity } = useContext(CurrentQuantityContext);

  useEffect(() => {
    if (currentSku && currentSize) {
      for (let key in currentStyle.skus) {
        if (currentStyle.skus[key].size === currentSize) {
          setCurrentSku(key);
        }
        break;
      }
    }
  }, []);

  const handleQuantityChange = () => {
    let index = event.target.selectedIndex;
    let quantity = event.target.childNodes[index].getAttribute('quantity');
    setCurrentQuantity(Number(quantity));
  };

  const renderQuantity = () => {
    let content = [];
    let quantity = 1;

    if (currentSku) {
      if (currentStyle.skus[currentSku].quantity > 15) {
        for (let i = 0; i < 15; i++) {
          content.push(<QuantityOption key={quantity} quantity={quantity} />);
          quantity++;
        }
      } else {
        for (let i = 0; i < currentStyle.skus[currentSku].quantity; i++) {
          content.push(<QuantityOption key={quantity} quantity={quantity} />);
          quantity++;
        }
      }
    }
    return content;
  };

  return (
    <div>
      Quantity:
      <select id="quantity-menu" onChange={handleQuantityChange}>
        {renderQuantity()}
      </select>
    </div>
  );
};

export default QuantitySelector;
