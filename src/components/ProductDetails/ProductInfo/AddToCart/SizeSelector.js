import React, { useContext, useEffect } from 'react';
import SizeOption from './SizeOption';
import { StylesContext, CurrentStyleContext } from '../../ProductDetails';
import { CurrentSkuContext, CurrentSizeContext } from '../../ProductDetails';
import { CurrentQuantityContext } from '../../ProductDetails';
import '../../styles.css';

const SizeSelector = () => {
  const styles = useContext(StylesContext);
  const { currentStyle } = useContext(CurrentStyleContext);
  const { currentSku, setCurrentSku } = useContext(CurrentSkuContext);
  const { currentSize, setCurrentSize } = useContext(CurrentSizeContext);
  const { setCurrentQuantity } = useContext(CurrentQuantityContext);

  const renderSizes = () => {
    let content = [];
    let index = 0;
    content.push(<option key={0}>Select Size</option>);
    for (let key in currentStyle.skus) {
      content.push(<SizeOption key={key} value={key} currentStyle={currentStyle} />);
      index++;
    }
    return content;
  };

  const handleSizeChange = () => {
    let index = event.target.selectedIndex;
    let sku = event.target.childNodes[index].getAttribute('sku');
    setCurrentSku(sku);
    setCurrentSize(event.target.value);
    setCurrentQuantity(1);
    let quantityMenu = document.getElementById('quantity-menu');
    quantityMenu.value = 1;
  };

  if (currentStyle) {
    let outOfStock = false;
    for (let key in currentStyle.skus) {
      if (currentStyle.skus[key].quantity <= 0) {
        outOfStock = true;
        break;
      }
    }
    if (outOfStock) {
      return (
        <div>
          <select disabled>
            <option>OUT OF STOCK</option>
          </select>
        </div>
      );
    }
  }
  return (
    <div>
      Size:
      <select class="menu" id="size-menu" onChange={handleSizeChange}>
        {renderSizes()}
      </select>
    </div>
  );
};

export default SizeSelector;
