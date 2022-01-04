import React, { useContext } from 'react';
import Thumbnail from './Thumbnail';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import { CurrentImageContext } from '../ProductDetails';
import { CurrentIndexContext } from '../ProductDetails';

const Thumbnails = (props) => {
  let photos = props.currentStyle.photos;
  let { currentImage, setCurrentImage } = useContext(CurrentImageContext);
  let { currentIndex, setCurrentIndex } = useContext(CurrentIndexContext);

  const thumbnailsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: '1px',
  };

  const handleThumbnailClick = () => {
    let index = event.target.getAttribute('index');
    let src = event.target.getAttribute('src');
    // console.log("Thumbnail clicked...");
    // console.log("src:", src);
    // console.log("currentIndex:", currentIndex);
    setCurrentImage(src);
    setCurrentIndex(Number(index));
  };

  return (
    <div style={thumbnailsStyle}>
      <LeftArrow />
      <span>
        {photos
          ? photos.map((photo, index) => {
              // if (currentImage === photo.thumbnail_url) {
              //   return null;
              // }
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
      <RightArrow />
    </div>
  );
};

export default Thumbnails;
