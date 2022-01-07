import React, { useState, useContext } from 'react';
import axios from '../../../apis/atelier';
import { AppContext } from '../../context';
import '../styles.css';

const ProductTitle = () => {
  const { currentProduct } = useContext(AppContext);

  return currentProduct ? <div id="product-name">{currentProduct.name}</div> : null;
};

export default ProductTitle;
