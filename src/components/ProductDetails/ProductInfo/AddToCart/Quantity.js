import React, { useState, useContext, useEffect } from "react";
import { StylesContext, CurrentStyleContext } from "../../ProductDetails";
import { CurrentSkuContext } from "../../ProductDetails";

const Quantity = () => {
  const styles = useContext(StylesContext);
  const { currentStyle } = useContext(CurrentStyleContext);
  const { currentSku, setCurrentSku } = useContext(CurrentSkuContext);

  useEffect(() => {
    for (let key in currentStyle.skus) {
      if (currentStyle.skus[key].size === currentSize) {
        setCurrentSku(key);
      }
    }
  }, []);

  const renderQuantity = () => {
    let content = [];
    let quantity = 1;
    console.log("currentStyle.skus:", currentStyle.skus);
    if (currentStyle.skus && currentSku) {
      for (let i = 0; i < currentStyle.skus[currentSku].quantity; i++) {
        content.push(<option>{quantity}</option>);
        quantity++;
      }
    }

    return content;
  };

  return (
    <div>
      <h4>Quantity Component</h4>
      Quantity: <select>{renderQuantity()}</select>
    </div>
  );
};

export default Quantity;
