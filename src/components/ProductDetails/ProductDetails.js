import React, { useState, useEffect, createContext } from "react";
import axios from "../../apis/atelier";
import ProductInfo from "./ProductInfo/ProductInfo";
import ImageGallery from "./ImageGallery/ImageGallery";

export const ProductContext = createContext();
export const ReviewsContext = createContext();

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await axios.get("products");
      setProducts(products.data);
      setProduct(products.data[0]);
      const reviews = await axios.get("reviews", {
        params: { product_id: 40344 },
      });
      setReviews(reviews.data.results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Product Details Component</h2>
      <ProductContext.Provider value={product}>
        <ReviewsContext.Provider value={reviews}>
          <ProductInfo />
        </ReviewsContext.Provider>
      </ProductContext.Provider>
    </div>
  );
};

export default ProductDetails;
