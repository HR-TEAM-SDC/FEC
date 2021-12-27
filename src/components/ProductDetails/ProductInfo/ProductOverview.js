import React, { useState, useContext } from "react";
import { ProductContext } from "../ProductDetails";
const ProductOverview = () => {
  const product = useContext(ProductContext);

  return <h4>Product Description: {product.description}</h4>;
};

export default ProductOverview;
