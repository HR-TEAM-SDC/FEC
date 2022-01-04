import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from '../../apis/atelier';
import ProductInfo from './ProductInfo/ProductInfo';
import ImageGallery from './ImageGallery/ImageGallery';
import { AppContext } from '../context';

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
  const [reviews, setReviews] = useState([]);
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentSku, setCurrentSku] = useState(null);
  const [currentSize, setCurrentSize] = useState('Select Size');
  const [currentQuantity, setCurrentQuantity] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentStylePhotos, setCurrentStylePhotos] = useState(null);
  const [enlargeMain, setEnlargeMain] = useState(false);

  const { currentProduct } = useContext(AppContext);

  useEffect(() => {
    if (currentProduct) {
      setCurrentSku(null);
      setCurrentIndex(0);
      fetchData();
    }
  }, [currentProduct]);

  const fetchData = async () => {
    const reviews = await axios.get('reviews', {
      params: { product_id: currentProduct.id },
    });
    setReviews(reviews.data.results);
    const styles = await axios.get(`products/${currentProduct.id}/styles`);
    setStyles(styles.data.results);
    setCurrentStyle(styles.data.results[0]);
    setCurrentStylePhotos(styles.data.results[0].photos);
    setCurrentImage(styles.data.results[0].photos[0].thumbnail_url);
  };

  const detailStyles = {
    display: 'flex',
    justifyContent: 'space-evenly',
    borderStyle: 'solid',
    borderWidth: '1px',
    width: '90%',
    height: 'auto',
    margin: 'auto',
    padding: '10px',
  };

  const enlargeStyles = {
    width: '100%',
    height: '100%',
  };

  const handlePhotoClick = () => {
    setEnlargeMain(!enlargeMain);
  };

  return (
    <section style={detailStyles}>
      <ReviewsContext.Provider value={reviews}>
        <StylesContext.Provider value={styles}>
          <CurrentSizeContext.Provider value={{ currentSize, setCurrentSize }}>
            <CurrentStyleContext.Provider value={{ currentStyle, setCurrentStyle }}>
              <CurrentSkuContext.Provider value={{ currentSku, setCurrentSku }}>
                <CurrentQuantityContext.Provider value={{ currentQuantity, setCurrentQuantity }}>
                  <CurrentIndexContext.Provider value={{ currentIndex, setCurrentIndex }}>
                    <CurrentImageContext.Provider value={{ currentImage, setCurrentImage }}>
                      <CurrentStylePhotosContext.Provider value={{ currentStylePhotos, setCurrentStylePhotos }}>
                        {/* {enlargeMain ?
                          <img id="enlarge" style={enlargeStyles} onClick={handlePhotoClick} src={currentImage}></img>:
                          <>
                            <ImageGallery />
                            <ProductInfo />
                          </>} */}
                        <ImageGallery />
                        <ProductInfo />
                        <div id="portal"></div>
                      </CurrentStylePhotosContext.Provider>
                    </CurrentImageContext.Provider>
                  </CurrentIndexContext.Provider>
                </CurrentQuantityContext.Provider>
              </CurrentSkuContext.Provider>
            </CurrentStyleContext.Provider>
          </CurrentSizeContext.Provider>
        </StylesContext.Provider>
      </ReviewsContext.Provider>
    </section>
  );
};

export default ProductDetails;
