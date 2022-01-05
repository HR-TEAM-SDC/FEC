import React, { useContext, useState, useEffect } from 'react';
import Thumbnail from './Thumbnail';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import { CurrentImageContext } from '../ProductDetails';
import { CurrentIndexContext } from '../ProductDetails';
import { CurrentStylePhotosContext } from '../ProductDetails';

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
    justifyContent: 'center',
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

  const slideLeft = () => {
    setFirstIndex(firstIndex - 1);
    setLastIndex(lastIndex - 1);
    console.log('currentIndex on left click:', currentIndex);
  };

  const slideRight = () => {
    setFirstIndex(firstIndex + 1);
    setLastIndex(lastIndex + 1);
  };

  const rowStyle = {
    display: 'flex',
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
      {firstIndex === 0 ? null : <button onClick={slideLeft}>{'<<<'}</button>}
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
        lastIndex === currentStylePhotos.length - 1 ? null : (
          <button onClick={slideRight}>{'>>>'}</button>
        )
      ) : null}
    </div>
  );
};

export default Thumbnails;
