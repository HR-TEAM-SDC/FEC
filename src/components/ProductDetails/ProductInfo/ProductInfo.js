import React, { useContext } from "react";
import ProductTitle from "./ProductTitle";
import ProductRating from "./ProductRating";
import ProductPrice from "./ProductPrice";
import ProductOverview from "./ProductOverview";
import ProductCategory from "./ProductCategory";
import ShareProduct from "./ShareProduct";
import StyleSelector from "./StyleSelector/StyleSelector";
import AddToCart from "./AddToCart/AddToCart";

const ProductInfo = () => {
  const infoStyles = {
    borderStyle: "solid",
    borderWidth: "1px",
    width: "40%",
    height: "auto",
    marginLeft: "50%",
  };

  return (
    <div style={infoStyles}>
      <h3>Product Info Component</h3>
      <ProductTitle />
      <ProductCategory />
      <ProductRating />
      <ProductPrice />
      <ProductOverview />
      <StyleSelector />
      <AddToCart />
      <ShareProduct />
    </div>
  );
};

export default ProductInfo;
