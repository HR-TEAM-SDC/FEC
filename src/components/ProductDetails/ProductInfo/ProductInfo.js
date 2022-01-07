import React, { useState, useContext } from 'react';
import ProductTitle from './ProductTitle';
import ProductRating from './ProductRating';
import ProductPrice from './ProductPrice';
import ProductOverview from './ProductOverview';
import ProductCategory from './ProductCategory';
import ShareProduct from './ShareProduct';
import StyleSelector from './StyleSelector/StyleSelector';
import AddToCart from './AddToCart/AddToCart';

const ProductInfo = () => {
  const infoStyles = {
    width: '45%',
  };

  return (
    <section style={infoStyles}>
      <ProductTitle />
      <br></br>
      <ProductCategory />
      <br></br>
      <ProductRating />
      <br></br>
      <ProductPrice />
      <br></br>
      <ProductOverview />
      <br></br>
      <StyleSelector />
      <br></br>
      <AddToCart />
      <br></br>
      <ShareProduct />
    </section>
  );
};

export default ProductInfo;
