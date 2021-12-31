import React from "react";
import SizeSelector from "./SizeSelector";
import QuantitySelector from "./QuantitySelector";
import AddToCartButton from "./AddToCartButton";

const AddToCart = () => {
  return (
    <div>
      <h4>Add To Cart</h4>
      <SizeSelector />
      <QuantitySelector />
      <AddToCartButton />
    </div>
  );
};

export default AddToCart;
