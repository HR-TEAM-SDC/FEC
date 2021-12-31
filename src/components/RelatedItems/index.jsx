import React, { useState, useEffect } from "react";
import axios from "../../apis/atelier.js";
import CardContainer from "./CardContainer.jsx";

const RelatedItems = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [relatedItems, setRelatedItems] = useState(null);

  useEffect(() => {
    useFetch();
  }, []);

  const useFetch = async () => {
    const { data: currentItemDetails } = await axios.get(`/products/40344`);
    const { data: relatedIds } = await axios.get(`/products/40344/related`);
    const promiseArray = relatedIds.map(async (productId) => {
      const productDetails = await axios.get(`products/${productId}`);
      const productStyles = await axios.get(`products/${productId}/styles`);
      const { data: productReviews } = await axios.get(`reviews`, {
        params: { count: 100, product_id: productId },
      });
      const finalProduct = productDetails.data;
      finalProduct.styles = productStyles.data.results;
      finalProduct.avgRating =
        productReviews.results.reduce((acc, cur) => acc + cur.rating, 0) /
        productReviews.results.length;

      return finalProduct;
    });

    const productArray = await Promise.all(promiseArray);
    setSelectedItem(currentItemDetails);
    setRelatedItems(productArray);
  };

  return (
    <section className="related-items">
      <h3>Related Items</h3>
      <div className="list">
        <CardContainer cardItems={relatedItems} selectedItem={selectedItem} />
      </div>
    </section>
  );
};

export default RelatedItems;
