import React, { useContext, useState, useEffect } from 'react';
import Thumbnail from './Thumbnail';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import { CurrentImageContext } from '../ProductDetails';
import { CurrentIndexContext } from '../ProductDetails';
import { CurrentStylePhotosContext } from '../ProductDetails';
import '../styles.css';

const Thumbnails = (props) => {
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(null);

  let photos = props.currentStyle.photos;
  let { currentImage, setCurrentImage } = useContext(CurrentImageContext);
  let { currentIndex, setCurrentIndex } = useContext(CurrentIndexContext);
  let { currentStylePhotos } = useContext(CurrentStylePhotosContext);

  useEffect(() => {
    if (currentStylePhotos) {
      setFirstIndex(0);
      if (currentStylePhotos.length < 7) {
        setLastIndex(currentStylePhotos.length - 1);
      } else {
        setLastIndex(6);
      }
    }
  }, [currentStylePhotos]);

  const thumbnailsStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: '1px',
  };

  const handleThumbnailClick = () => {
    let index = event.target.getAttribute('index');
    let src = event.target.getAttribute('src');
    setCurrentImage(src);
    setCurrentIndex(Number(index));
  };

  const scrollLeft = () => {
    setFirstIndex(firstIndex - 1);
    setLastIndex(lastIndex - 1);
  };

  const scrollRight = () => {
    setFirstIndex(firstIndex + 1);
    setLastIndex(lastIndex + 1);
  };

  const rowStyle = {
    display: 'flex',
    gap: '3px',
  };

  if (props.isOpen) {
    return (
      <div style={props.style}>
        <div style={rowStyle}>
          {photos
            ? photos.map((photo, index) => {
                return (
                  <div>
                    <Thumbnail
                      isOpen={props.isOpen}
                      handleThumbnailClick={handleThumbnailClick}
                      currentImage={currentImage}
                      photo={photo}
                      index={index}
                      key={index}
                      currentIndex={currentIndex}
                      setCurrentIndex={setCurrentIndex}
                    />
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }

  return (
    <div style={thumbnailsStyle}>
      {firstIndex === 0 ? (
        <div class="scroll-null"></div>
      ) : (
        <button class="scroll" onClick={scrollLeft}>
          {'<'}
        </button>
      )}
      <span>
        {photos
          ? photos.slice(firstIndex, lastIndex + 1).map((photo, index) => {
              return (
                <Thumbnail
                  handleThumbnailClick={handleThumbnailClick}
                  currentImage={currentImage}
                  photo={photo}
                  index={index}
                  key={index}
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              );
            })
          : null}
      </span>
      {currentStylePhotos ? (
        lastIndex === currentStylePhotos.length - 1 ? (
          <div class="scroll-null"></div>
        ) : (
          <button class="scroll" onClick={scrollRight}>
            {'>'}
          </button>
        )
      ) : null}
    </div>
  );
};

export default Thumbnails;
