import React, { useState, useEffect } from 'react';

const BreakDown = (props) => {

  var calculateRating = (metaData) => {
    var ratingData = metaData.ratings;
    var totalStars = 0;
    var totalReviews = 0;
    for (var key in ratingData) {
      totalStars = totalStars + key * Number(ratingData[key])
    };
    for (var key in ratingData) {
      totalReviews = totalReviews + Number(ratingData[key])
    };
    var result = totalStars / totalReviews;
    var rounded = Math.round(result * 10) / 10
    return rounded;
  };


  return (
    <div className="ratingSummary">
      <div id="numberSummary">{calculateRating(props.metaData)}</div>
    </div>
  )
};

export default BreakDown;