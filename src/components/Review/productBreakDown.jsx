import React, { useState, useEffect } from 'react';
import './style.css';

const ProductBreakDown = (props) => {
  var percentage = (num) => {
    var characteristics = ['Size', 'Width', 'Comfort', 'Fit', 'Length', 'Quality'];
    var result = [];
    for (var i = 0; i < characteristics.length; i++) {
      if (props.data[characteristics[i]]) {
        var currentPercentage = String((props.data[characteristics[i]].value / 5) * 200) + 'px';
        result.push(currentPercentage);
      } else {
        result.push('');
      }
    }
    var style = {
      position: 'absolute',
      top: '0px',
      color: 'black',
      left: result[num],
    };
    return style;
  };

  var greyBarStandardStyle = {
    backgroundColor: 'white',
    width: '200px',
    height: '15px',
    display: 'inline-block',
    position: 'relative',
    margin: '5px',
    borderRadius: '7.5px',
  };

  var imageURL = 'https://cdn.pixabay.com/photo/2017/05/11/12/24/green-2304008_960_720.png';

  return (
    <div className="productBreakDown">
      <div className="productBreakDownSize">
        <span style={{ display: 'block' }}>Size</span>
        <div style={greyBarStandardStyle}>
          <span style={percentage(0)}>
            <img src={imageURL} style={{ height: '15px', width: '15px' }}></img>
          </span>
        </div>
      </div>
      <div className="productBreakDownWidth">
        <span style={{ display: 'block' }}>Width</span>
        <div style={greyBarStandardStyle}>
          <span style={percentage(1)}>
            <img src={imageURL} style={{ height: '15px', width: '15px' }}></img>
          </span>
        </div>
      </div>
      <div className="productBreakDownComfort">
        <span style={{ display: 'block' }}>Comfort</span>
        <div style={greyBarStandardStyle}>
          <span style={percentage(2)}>
            <img src={imageURL} style={{ height: '15px', width: '15px' }}></img>
          </span>
        </div>
      </div>
      <div className="productBreakDownFit">
        <span style={{ display: 'block' }}>Fit</span>
        <div style={greyBarStandardStyle}>
          <span style={percentage(3)}>
            <img src={imageURL} style={{ height: '15px', width: '15px' }}></img>
          </span>
        </div>
      </div>
      <div className="productBreakDownLength">
        <span style={{ display: 'block' }}>Length</span>
        <div style={greyBarStandardStyle}>
          <span style={percentage(4)}>
            <img src={imageURL} style={{ height: '15px', width: '15px' }}></img>
          </span>
        </div>
      </div>
      <div className="productBreakDownQuality">
        <span style={{ display: 'block' }}>Quality</span>
        <div style={greyBarStandardStyle}>
          <span style={percentage(5)}>
            <img
              src="https://cdn.pixabay.com/photo/2017/05/11/12/24/green-2304008_960_720.png"
              style={{ height: '15px', width: '15px' }}
            ></img>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductBreakDown;
