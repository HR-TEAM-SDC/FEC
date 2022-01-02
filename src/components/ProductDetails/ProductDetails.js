import React, { useState, useEffect, createContext } from 'react';
import axios from '../../apis/atelier';
import ProductInfo from './ProductInfo/ProductInfo';
import ImageGallery from './ImageGallery/ImageGallery';

export const ProductContext = createContext();
export const ReviewsContext = createContext();
export const StylesContext = createContext();
export const CurrentStyleContext = createContext();
export const CurrentSkuContext = createContext();
export const CurrentSizeContext = createContext();
export const CurrentQuantityContext = createContext();
export const CurrentIndexContext = createContext();
export const CurrentImageContext = createContext();
export const CurrentStylePhotosContext = createContext();

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentSku, setCurrentSku] = useState(null);
  const [currentSize, setCurrentSize] = useState(null);
  const [currentQuantity, setCurrentQuantity] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentStylePhotos, setCurrentStylePhotos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const product = await axios.get('products');
      setProduct(product.data[2]);
      const reviews = await axios.get('reviews', {
        params: { product_id: 40346 },
      });
      setReviews(reviews.data.results);
      console.log('reviews:', reviews);
      const styles = await axios.get(`products/40346/styles`);
      console.log('styles:', styles);
      setStyles(styles.data.results);
      setCurrentStyle(styles.data.results[0]);
      setCurrentStylePhotos(styles.data.results[0].photos);
      setCurrentImage(styles.data.results[0].photos[0].thumbnail_url);
    };
    fetchData();
  }, []);
  // console.log("product:", product);

  const detailStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    borderStyle: 'solid',
    borderWidth: '1px',
    width: '90%',
    height: 'auto',
    margin: 'auto',
    padding: '10px',
  };

  return (
    <main style={detailStyles}>
      <ProductContext.Provider value={product}>
        <ReviewsContext.Provider value={reviews}>
          <StylesContext.Provider value={styles}>
            <CurrentSizeContext.Provider value={{ currentSize, setCurrentSize }}>
              <CurrentStyleContext.Provider value={{ currentStyle, setCurrentStyle }}>
                <CurrentSkuContext.Provider value={{ currentSku, setCurrentSku }}>
                  <CurrentQuantityContext.Provider value={{ currentQuantity, setCurrentQuantity }}>
                    <CurrentIndexContext.Provider value={{ currentIndex, setCurrentIndex }}>
                      <CurrentImageContext.Provider value={{ currentImage, setCurrentImage }}>
                        <CurrentStylePhotosContext.Provider value={{ currentStylePhotos, setCurrentStylePhotos }}>
                          <ImageGallery />
                          <ProductInfo />
                        </CurrentStylePhotosContext.Provider>
                      </CurrentImageContext.Provider>
                    </CurrentIndexContext.Provider>
                  </CurrentQuantityContext.Provider>
                </CurrentSkuContext.Provider>
              </CurrentStyleContext.Provider>
            </CurrentSizeContext.Provider>
          </StylesContext.Provider>
        </ReviewsContext.Provider>
      </ProductContext.Provider>
    </main>
  );
};

export default ProductDetails;
