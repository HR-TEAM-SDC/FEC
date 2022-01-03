import React, { useState, useContext } from 'react';
import { AppContext } from '../../context';
const ProductCategory = () => {
  const { currentProduct } = useContext(AppContext);

  return currentProduct ? <h4>Product Category: {currentProduct.category}</h4> : null;
};

export default ProductCategory;
