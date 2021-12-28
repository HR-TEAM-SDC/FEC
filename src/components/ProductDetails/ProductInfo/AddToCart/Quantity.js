import React, { useContext } from "react";
import { StylesContext, CurrentStyleContext } from "../../ProductDetails";

const Quantity = () => {
  const styles = useContext(StylesContext);
  const currentStyle = useContext(CurrentStyleContext);

  const renderQuantity = () => {
    let maxQuantity = 0;
    let content = [];
    let quantity = 1;
    console.log(
      "currentStyle.currentStyle.skus:",
      currentStyle.currentStyle.skus
    );
    for (let key in currentStyle.currentStyle.skus) {
      if (maxQuantity < currentStyle.currentStyle.skus[key].quantity) {
        maxQuantity = currentStyle.currentStyle.skus[key].quantity;
      }
    }
    console.log("maxQuantity:", maxQuantity);
    for (let i = 0; i < maxQuantity; i++) {
      content.push(<option>{quantity}</option>);
      quantity++;
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
