import React, { useState, useContext } from "react";
import axios from "../../../apis/atelier";
import { ReviewsContext } from "../ProductDetails";

const ProductRating = () => {
  const reviews = useContext(ReviewsContext);
  let totalStars = 0;
  reviews.forEach((review) => {
    totalStars += review.rating;
  });
  let averageRating = totalStars / reviews.length;

  return (
    <h4>
      [Product Rating Here: {averageRating}]
      <span>
        [Reviews Link Here: [Link that jumps to review section on click]]
      </span>
    </h4>
  );
};

export default ProductRating;
