import React, { useState, useContext } from "react";
import { ProductContext } from "../ProductDetails";
const ProductCategory = () => {
  const product = useContext(ProductContext);

  return <h4>Product Category: {product.category}</h4>;
};

export default ProductCategory;
