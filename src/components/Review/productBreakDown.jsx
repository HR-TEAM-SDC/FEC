import React, { useState, useEffect } from 'react';
import './style.css';

const ProductBreakDown = (props) => {
  var percentage = (num) => {
    var characteristics = ['Size', 'Width', 'Comfort', 'Fit', 'Length', 'Quality'];
    var result = [];
    for (var i = 0; i < characteristics.length; i++) {
      if (props.data[characteristics[i]]) {
        var currentPercentage = String((props.data[characteristics[i]].value / 5) * 100) + 'px';
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
    backgroundColor: 'grey',
    width: '100px',
    height: '10px',
    display: 'inline-block',
    position: 'relative',
  };

  return (
    <div className="productBreakDown">
      <div className="productBreakDownSize">
        <span style={{ display: 'block' }}>Size</span>
        <div style={greyBarStandardStyle}>
          <span style={percentage(0)}>&#124;</span>
        </div>
      </div>
      <div className="productBreakDownWidth">
        <span style={{ display: 'block' }}>Width</span>
        <div style={greyBarStandardStyle}>
          <span style={percentage(1)}>&#124;</span>
        </div>
      </div>
      <div className="productBreakDownComfort">
        <span style={{ display: 'block' }}>Comfort</span>
        <div style={greyBarStandardStyle}>
          <span style={percentage(2)}>&#124;</span>
        </div>
      </div>
      <div className="productBreakDownFit">
        <span style={{ display: 'block' }}>Fit</span>
        <div style={greyBarStandardStyle}>
          <span style={percentage(3)}>&#124;</span>
        </div>
      </div>
      <div className="productBreakDownLength">
        <span style={{ display: 'block' }}>Length</span>
        <div style={greyBarStandardStyle}>
          <span style={percentage(4)}>&#124;</span>
        </div>
      </div>
      <div className="productBreakDownQuality">
        <span style={{ display: 'block' }}>Quality</span>
        <div style={greyBarStandardStyle}>
          <span style={percentage(5)}>&#124;</span>
        </div>
      </div>
    </div>
  );
};

export default ProductBreakDown;
