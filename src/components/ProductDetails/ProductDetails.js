import React, { useState, useEffect, createContext } from "react";
import ProductInfo from "./ProductInfo/ProductInfo";
import axios from "../../apis/atelier";

export const ProductContext = React.createContext();
export const ReviewsContext = React.createContext();

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState("");
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState([]);

  useEffect(() => {
    axios.get("products").then((res) => {
      setProducts(res.data); // Initialize products list
      setProduct(res.data[0]); // Initialize default product to first item in list
    });
    // Finish fetching product Id first, then input it into product_id param
    // Prob don't need to do this since we are defaulting to a product
    axios.get("reviews", { params: { product_id: 40344 } }).then((res) => {
      setReviews(res.data.results); // Initialize reviews list
      setReview(res.data.results[0]);
    });
    // axios.get('reviews/', {params: {
    //       page: 1,
    //       count: 5,
    //       product_id:40344,
    //       sort:"newest"
    //     }})
  }, []);

  console.log("products:", products);
  console.log("product:", product);
  console.log("reviews:", reviews);
  console.log("review:", review);

  // Notes: Create click handler to change state of all states.

  return (
    <div>
      <h2>Product Details Component</h2>
      <ProductContext.Provider value={product}>
        <ReviewsContext.Provider value={reviews}>
          {" "}
          {/* Pass all reviews to get average rating */}
          <ProductInfo />
        </ReviewsContext.Provider>
      </ProductContext.Provider>
    </div>
  );
};

export default ProductDetails;
