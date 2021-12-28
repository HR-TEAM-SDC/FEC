import React, { useContext } from "react";
import { StylesContext, CurrentStyleContext } from "../../ProductDetails";
import { CurrentSizeContext } from "../../ProductDetails";

const Quantity = () => {
  const styles = useContext(StylesContext);
  const currentStyle = useContext(CurrentStyleContext);
  const { currentSize, setCurrentSize } = useContext(CurrentSizeContext);

  const renderQuantity = () => {
    let content = [];
    let quantity = 1;
    console.log(
      "currentStyle.currentStyle.skus:",
      currentStyle.currentStyle.skus
    );

    for (let i = 0; i < currentStyle.currentStyle.skus; i++) {
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
