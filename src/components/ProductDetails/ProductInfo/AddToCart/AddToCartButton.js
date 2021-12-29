import React, { useContext } from "react";
import {
  CurrentSizeContext,
  CurrentQuantityContext,
} from "../../ProductDetails";

const AddToCartButton = () => {
  const { currentSize } = useContext(CurrentSizeContext);
  const { currentQuantity } = useContext(CurrentQuantityContext);
  console.log("currentSize:", currentSize);
  console.log("currentQuantity:", currentQuantity);
  console.log("typeof currentQuantity:", typeof currentQuantity);

  const buttonOnClick = () => {
    console.log("button clicked...");
  };

  return (
    <div>
      <h4>AddToCartButton Component</h4>
      <button onClick={buttonOnClick}> Add To Cart </button>
    </div>
  );
};

export default AddToCartButton;
