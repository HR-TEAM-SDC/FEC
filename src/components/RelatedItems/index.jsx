import React, { useState, useEffect, useContext } from "react";
import axios from "../../apis/atelier.js";
import CardContainer from "./CardContainer.jsx";
import { AppContext } from "../context";

const RelatedItems = () => {
  const [relatedItems, setRelatedItems] = useState(null);
  const { currentProduct } = useContext(AppContext);

  useEffect(() => {
    if (currentProduct) {
      useFetch();
    }
  }, [currentProduct]);

  const useFetch = async () => {
    const { data: relatedIds } = await axios.get(
      `/products/${currentProduct.id}/related`
    );
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
    setRelatedItems(productArray);
  };

  return (
    <section className="related-items">
      <h3>Other Items You Might Enjoy!</h3>
      <div className="list">
        <CardContainer cardItems={relatedItems} selectedItem={currentProduct} />
      </div>
      <h3>Your Outfit</h3>
      <div className="list">
        <CardContainer />
      </div>
    </section>
  );
};

export default RelatedItems;
