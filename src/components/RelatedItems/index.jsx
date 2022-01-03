import React, { useState, useEffect, useContext } from 'react';
import axios from '../../apis/atelier.js';
import localhost from '../../apis/localhost.js';
import CardContainer from './CardContainer.jsx';
import { AppContext } from '../context';
import './styles.css';

const RelatedItems = () => {
  const [relatedItems, setRelatedItems] = useState(null);
  const [outfit, setOutfit] = useState(null);
  const { currentProduct } = useContext(AppContext);

  useEffect(() => {
    if (currentProduct) {
      fetchRelatedItems();
      fetchOutfit();
    }
  }, [currentProduct]);

  const fetchRelatedItems = async () => {
    const { data: relatedIds } = await axios.get(`/products/${currentProduct.id}/related`);

    const promiseArray = relatedIds.map(async (productId) => {
      const productDetails = await axios.get(`products/${productId}`);
      const productStyles = await axios.get(`products/${productId}/styles`);
      const { data: productReviews } = await axios.get(`reviews`, {
        params: { count: 100, product_id: productId },
      });
      const finalProduct = productDetails.data;
      finalProduct.styles = productStyles.data.results;
      finalProduct.avgRating =
        productReviews.results.reduce((acc, cur) => acc + cur.rating, 0) / productReviews.results.length;

      return finalProduct;
    });

    const productArray = await Promise.all(promiseArray);
    setRelatedItems(productArray);
  };

  const fetchOutfit = async () => {
    const { data: outfit } = await localhost.get('outfit');
    const outfitIds = outfit.reduce((ids, current) => ids.concat(current.productid), []);

    const promiseArray = outfitIds.map(async (productId) => {
      const productDetails = await axios.get(`products/${productId}`);
      const productStyles = await axios.get(`products/${productId}/styles`);
      const { data: productReviews } = await axios.get(`reviews`, {
        params: { count: 100, product_id: productId },
      });
      const finalProduct = productDetails.data;
      finalProduct.styles = productStyles.data.results;
      finalProduct.avgRating =
        productReviews.results.reduce((acc, cur) => acc + cur.rating, 0) / productReviews.results.length;

      return finalProduct;
    });

    const outfitArray = await Promise.all(promiseArray);
    setOutfit(outfitArray.reverse());
  };

  return (
    <section className="related-items">
      <div className="list">
        <h2>Other Items You Might Enjoy!</h2>
        <CardContainer cardItems={relatedItems} selectedItem={currentProduct} />
      </div>
      <div className="list">
        <h2>Your Outfit</h2>
        <CardContainer cardItems={outfit} fetchOutfit={fetchOutfit} />
      </div>
    </section>
  );
};

export default RelatedItems;
