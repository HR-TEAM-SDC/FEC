import React, { useState, useEffect } from 'react';
import axios from '../../apis/atelier.js';

const RelatedItems = () => {
  const [item, setItem] = useState(null);
  const [relatedItems, setRelatedItems] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data: relatedIds } = await axios.get('/products/40344/related');

    const promiseArray = relatedIds.map(async productId => {
      const productDetails = await axios.get(`products/${productId}`);
      const productStyles = await axios.get(`products/${productId}/styles`);
      const { data: productReviews } = await axios.get(`reviews`, {
        params: { count: 50, product_id: productId },
      });
      const finalProduct = productDetails.data;
      finalProduct.styles = productStyles.data.results;
      finalProduct.avgRating =
        productReviews.results.reduce((acc, cur) => acc + cur.rating, 0) /
        productReviews.results.length;

      return finalProduct;
    });

    const productArray = await Promise.all(promiseArray);
    setRelatedItems(productArray);
  };

  return <div>Im gonna be great</div>;
};

export default RelatedItems;
