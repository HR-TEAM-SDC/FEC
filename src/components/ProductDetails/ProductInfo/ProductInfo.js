import React, { useState, useEffect } from "react";
import ProductTitle from "./ProductTitle";
import ProductRating from "./ProductRating";
import ProductPrice from "./ProductPrice";
import ProductOverview from "./ProductOverview";

const ProductInfo = () => {
  return (
    <div>
      <h3>Product Info Component</h3>
      <ProductTitle />
      <ProductRating />
      <ProductPrice />
      <ProductOverview />
      <h4>[Style Selector here]</h4>
    </div>
  );
};

export default ProductInfo;
