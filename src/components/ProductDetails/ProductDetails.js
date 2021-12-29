import React, { useState, useEffect, createContext } from "react";
import axios from "../../apis/atelier";
import ProductInfo from "./ProductInfo/ProductInfo";
import ImageGallery from "./ImageGallery/ImageGallery";

export const ProductContext = createContext();
export const ReviewsContext = createContext();
export const StylesContext = createContext();
export const CurrentStyleContext = createContext();
export const CurrentSkuContext = createContext();
export const CurrentSizeContext = createContext();
export const CurrentQuantityContext = createContext();

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentSku, setCurrentSku] = useState(null);
  const [currentSize, setCurrentSize] = useState(null);
  const [currentQuantity, setCurrentQuantity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const products = await axios.get("products");
      setProduct(products.data[0]);
      const reviews = await axios.get("reviews", {
        params: { product_id: 40344 },
      });
      setReviews(reviews.data.results);
      const styles = await axios.get(`products/40344/styles`);
      setStyles(styles.data.results);
      setCurrentStyle(styles.data.results[0]);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Product Details Component</h2>
      <ProductContext.Provider value={product}>
        <ReviewsContext.Provider value={reviews}>
          <StylesContext.Provider value={styles}>
            <CurrentSizeContext.Provider
              value={{ currentSize, setCurrentSize }}
            >
              <CurrentStyleContext.Provider
                value={{ currentStyle, setCurrentStyle }}
              >
                <CurrentSkuContext.Provider
                  value={{ currentSku, setCurrentSku }}
                >
                  <CurrentQuantityContext.Provider
                    value={{ currentQuantity, setCurrentQuantity }}
                  >
                    <ProductInfo />
                  </CurrentQuantityContext.Provider>
                </CurrentSkuContext.Provider>
              </CurrentStyleContext.Provider>
            </CurrentSizeContext.Provider>
          </StylesContext.Provider>
        </ReviewsContext.Provider>
      </ProductContext.Provider>
    </div>
  );
};

export default ProductDetails;
