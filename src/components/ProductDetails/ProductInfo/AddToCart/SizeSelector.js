import React, { useContext, useEffect } from "react";
import SizeOption from "./SizeOption";
import { StylesContext, CurrentStyleContext } from "../../ProductDetails";
import { CurrentSkuContext, CurrentSizeContext } from "../../ProductDetails";
import { CurrentQuantityContext } from "../../ProductDetails";

const SizeSelector = () => {
  const styles = useContext(StylesContext);
  const { currentStyle } = useContext(CurrentStyleContext);
  const { currentSku, setCurrentSku } = useContext(CurrentSkuContext);
  const { currentSize, setCurrentSize } = useContext(CurrentSizeContext);
  const { setCurrentQuantity } = useContext(CurrentQuantityContext);

  // useEffect(() => {
  //   console.log('currentStyle in useEffect:', currentStyle.skus)
  //   let skus = Object.keys(currentStyle.skus);
  //   console.log('skus:', skus);
  //   setCurrentSku(skus[0])
  // }, [currentSize]);

  const renderSizes = () => {
    let content = [];
    let index = 0;
    content.push(<option key={0}>Select Size</option>);
    for (let key in currentStyle.skus) {
      content.push(
        <SizeOption key={key} value={key} currentStyle={currentStyle} />
      );
      index++;
    }
    return content;
  };

  const handleSizeChange = () => {
    let index = event.target.selectedIndex;
    let sku = event.target.childNodes[index].getAttribute("sku");
    setCurrentSku(sku);
    let prevSize = currentSize;
    setCurrentSize(event.target.value);
    // console.log('currentStyle.skus[currentSku].quantity:', currentStyle.skus[currentSku].quantity);
    let curSize = currentSize;
    // If previous selected quantity is greater than
    // the next selected Sku's quantity (skus[currentSku].quantity)
    // Then set current quantity to 1, otherwise, dont change current quantity
    setCurrentQuantity(1);
  };

  return (
    <div>
      <h4>Sizes Component</h4>
      Select Size:
      <select onChange={handleSizeChange}>{renderSizes()}</select>
    </div>
  );
};

export default SizeSelector;
