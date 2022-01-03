import React, { useState, useContext } from 'react';
import axios from '../../../apis/atelier';
import { AppContext } from '../../context';

const ProductTitle = () => {
  const { currentProduct } = useContext(AppContext);

  return currentProduct ? <h4>Product Title: {currentProduct.name}</h4> : null;
};

export default ProductTitle;
