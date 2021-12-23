import React, { useState, useContext } from 'react';
import axios from '../../../apis/atelier';
import { ProductContext } from '../ProductDetails';

const ProductTitle = () => {
  const product = useContext(ProductContext);

  return (
    <h4>
      Product Title: {product.name}
    </h4>
  );
};

export default ProductTitle;