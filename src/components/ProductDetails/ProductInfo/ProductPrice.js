import React, { useState, useContext } from 'react';
import { ProductContext } from '../ProductDetails';
const ProductPrice = () => {
  const product = useContext(ProductContext);

  return (
    <h4>
      Product Price: {product.default_price}
    </h4>
  );
};

export default ProductPrice;