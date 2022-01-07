import React, { useState, useContext } from 'react';
import axios from '../../../apis/atelier';
import { ReviewsContext } from '../ProductDetails';
import { Rating } from '@mui/material';

const ProductRating = () => {
  const reviews = useContext(ReviewsContext);
  let totalStars = 0;
  reviews.forEach((review) => {
    totalStars += review.rating;
  });
  let averageRating = totalStars / reviews.length;

  const alignCenter = {
    display: 'flex',
    alignItems: 'center',
  };

  const style = {
    textDecoration: 'none',
    marginLeft: '10px',
  };
  return (
    <div style={alignCenter}>
      {averageRating ? (
        <Rating style={{ color: 'white' }} defaultValue={averageRating || 0} precision={0.25} readOnly />
      ) : (
        <span>No Ratings</span>
      )}
      <span>
        <a style={style} href="#reviewList">
          See Reviews
        </a>
      </span>
    </div>
  );
};

export default ProductRating;
