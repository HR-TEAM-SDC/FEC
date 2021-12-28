import React, { useState, useContext, useEffect } from "react";
import QuantityOption from "./QuantityOption";
import { StylesContext, CurrentStyleContext } from "../../ProductDetails";
import { CurrentSkuContext, CurrentSizeContext } from "../../ProductDetails";

const QuantitySelector = () => {
  const styles = useContext(StylesContext);
  const { currentStyle } = useContext(CurrentStyleContext);
  const { currentSku, setCurrentSku } = useContext(CurrentSkuContext);
  const { currentSize } = useContext(CurrentSizeContext);

  useEffect(() => {
    if (currentSku && currentSize) {
      for (let key in currentStyle.skus) {
        if (currentStyle.skus[key].size === currentSize) {
          setCurrentSku(key);
        }
      }
    }
  }, []);

  // const renderQuantity = () => {
  //   let content = [];
  //   let quantity = 1;
  //   content.push(<option>{quantity}</option>);
  //   content.push(<option>{quantity}</option>);
  //   content.push(<option>{quantity}</option>);
  //   if (currentStyle.skus !== null) {
  //     console.log('currentStyle.skus[currentSku].quantity:', currentStyle.skus);
  //   }
  //     // for (let i = 0; i < currentStyle.skus[currentSku].quantity; i++) {
  //     //   content.push(<option>{quantity}</option>);
  //     //   quantity++;
  //     // }
  //   return content;
  // };

  const renderQuantity = () => {
    let content = [];
    let quantity = 1;
    console.log("currentStyle.skus:", currentStyle.skus);
    if (currentStyle.skus != null) {
      for (let i = 0; i < 5; i++) {
        content.push(<QuantityOption quantity={quantity} key={quantity} />);
        quantity++;
      }
    }
    return content;
  };

  return (
    <div>
      <h4>Quantity Component</h4>
      Quantity:
      <select>{renderQuantity()}</select>
    </div>
  );
};

export default QuantitySelector;
